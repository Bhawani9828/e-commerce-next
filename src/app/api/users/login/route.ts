import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log("Request Body:", reqBody);

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.error("User does not exist");
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }
    console.log("User exists:", user);

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      console.error("Invalid password");
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    console.log("Password is valid");

    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    console.log("Token Data:", tokenData);

    // Create token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
    console.log("JWT Token:", token);

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;

  } catch (error: any) {
    console.error("Error in POST /api/users/login:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
