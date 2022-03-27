import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@RocketShoes:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];
      const product = updatedCart.find((product) => product.id === productId);

      const { data } = await api.get<Stock>(`/stock/${productId}`);
      const currentAmount = product ? product.amount : 0;

      if (currentAmount + 1 > data.amount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }

      if (product) {
        product.amount++;
      } else {
        const { data } = await api.get(`/products/${productId}`);

        updatedCart.push({
          ...data,
          amount: 1,
        });
      }

      setCart(updatedCart);
      localStorage.setItem("@RocketShoes:cart", JSON.stringify(updatedCart));
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const cartUpdated = [...cart];
      const productIndex = cartUpdated.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        cartUpdated.splice(productIndex, 1);

        setCart(cartUpdated);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(cartUpdated));
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const { data } = await api.get<Stock>(`/stock/${productId}`);

      if (amount > data.amount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }

      const cartUpdated = [...cart];
      const product = cartUpdated.find((product) => product.id === productId);

      if (product) {
        product.amount = amount;
        setCart(cartUpdated);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(cartUpdated));
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
