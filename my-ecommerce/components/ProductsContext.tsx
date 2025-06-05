"use client";

import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state"; 
// This hook syncs selected products with localstorage under the key 'cart'

type ProductsContextType = {
    selectedProducts: string[]; // List of product ids in the cart
    setSelectedProducts: React.Dispatch<React.SetStateAction<string[]>>; // function to update the cart
}

// Create context with initial value undefined
export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// Create the provider component which wraps the app and provides the cart state
export function ProductsContextProvider({ children }: { children: ReactNode }) {

	// React state to store the selected products
  const [selectedProducts, setSelectedProducts] = useLocalStorageState<string[]>('cart', {defaultValue:[]});


  return (
		// Provide the state and updater function to all children below in the react tree
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}