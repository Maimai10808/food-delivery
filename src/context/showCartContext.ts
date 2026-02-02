import { createContext } from "react";

export type ShowCartValue = {
  showCart: boolean;

  setshowCart: (bool: boolean) => void;
};

export const ShowCartContext = createContext<ShowCartValue | null>(null);

// 要点：Context 只定义“你打算共享什么”，不放业务实现。
