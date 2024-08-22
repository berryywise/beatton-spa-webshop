import { createContext, ReactNode, useState } from "react";
import { products } from "../products/products";

interface ContextProps {
  toggled: boolean;
  toggleCart: () => void;
  cart: CartInterface[];
  addToCart: (cartItem: CartInterface) => void;
  removeFromCart: (id: number) => void;
  incrementCart: (id: number) => void;
  decrementCart: (id: number) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export interface CartInterface {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  img: string;
}

export const CartContext = createContext<ContextProps>({
  toggled: false,
  toggleCart: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementCart: () => {},
  decrementCart: () => {},
});

export const CartProvider = ({ children }: ProviderProps) => {
  const [toggled, setToggled] = useState(false);

  const productOne = { ...products[0], quantity: 1 };
  const productTwo = { ...products[1], quantity: 1 };

  const [cart, setCart] = useState<CartInterface[]>([productOne, productTwo]);

  const toggleCart = () => {
    setToggled(!toggled);
  };

  const addToCart = (cartItem: CartInterface) => {
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((items) => items.id !== id));
  };

  const incrementCart = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCart = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        toggled,
        toggleCart,
        cart,
        addToCart,
        removeFromCart,
        incrementCart,
        decrementCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
