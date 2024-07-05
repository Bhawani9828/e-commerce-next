export interface CartItem {
    id: number;
    name: string;
    quantity: number;
  }
  
  export interface RootState {
    cart: CartItem[];
  }