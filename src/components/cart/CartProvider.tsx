import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  toggled: boolean;
  toggleCart: () => void;
}


interface ProviderProps {
  children: ReactNode
}

export const CartContext = createContext<ContextProps>({
  toggled: false,
  toggleCart: () => {}
});

export const CartProvider = ({ children }: ProviderProps) => {
  const [toggled, setToggled] = useState(false);

  const toggleCart = () => {
    setToggled(!toggled);
  };

  return (
    <CartContext.Provider value={{ toggled, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};
