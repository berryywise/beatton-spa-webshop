import { createContext, ReactNode, useState } from "react";

//Init interface for context props, tell typescript what the context props will receive as structure.

interface ContextProps {
  toggled: boolean;
  toggleCart: () => void;
  cart: CartInterface[];
  addToCart: (cartItem: CartInterface) => void;
  removeFromCart: (id: number) => void;
  incrementCart: (id: number) => void;
  decrementCart: (id: number) => void;
}

//Provider interface which makes it possible to wrap the children (a.k.a entire application).

interface ProviderProps {
  children: ReactNode;
}

//Export cart interface for future products to be added to cart.

export interface CartInterface {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  imgurl: string;
}

//CartContext itself being made and initliazed with default values for the interface.
export const CartContext = createContext<ContextProps>({
  toggled: false,
  toggleCart: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementCart: () => {},
  decrementCart: () => {},
});

//CartProvider which wraps around the entire wrap and functions as a global cart state management system. Any extra cart functions go into this function.

export const CartProvider = ({ children }: ProviderProps) => {

  const [toggled, setToggled] = useState(false);
  const [cart, setCart] = useState<CartInterface[]>([]);

  const toggleCart = () => {
    setToggled(!toggled);
  };

  const addToCart = (cartItem: CartInterface) => {

    const existingItem = cart.find((item) => item.id === cartItem.id);

    if(existingItem) {
      incrementCart(cartItem.id)
    } else {
      setCart([...cart, cartItem])
    }

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
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //Return the CartContext which "Provides" all of the cart props.

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
