import { useContext } from "react";
import { ShowCartContext } from "../context/showCartContext";

export function useShowCart() {
  const ctx = useContext(ShowCartContext);
  if (!ctx) {
    throw new Error("useFoodFilter must be used within ShowCartContext");
  }
  return ctx;
}

// 要点：以后任何组件想用筛选状态，只写一行 useFoodFilter()。
