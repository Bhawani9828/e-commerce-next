import fs from 'fs';
import path from 'path';

export async function saveImage(base64Image, fileName) {
    try {
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        
        // Create uploads directory if it doesn't exist
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }

        const filePath = path.join(uploadsDir, fileName);
        const buffer = Buffer.from(base64Image.split(',')[1], 'base64');
        
        await fs.promises.writeFile(filePath, buffer);
        
        return `/uploads/${fileName}`;
    } catch (error) {
        console.error('Error saving image:', error);
        throw error;
    }
}