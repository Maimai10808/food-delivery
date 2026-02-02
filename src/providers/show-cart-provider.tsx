import { useMemo, useState, type ReactNode } from "react";
import { ShowCartContext } from "../context/showCartContext";

type Props = {
  children: ReactNode;
};

export function ShowCartProvider({ children }: Props) {
  const [showCart, setshowCart] = useState(false);

  const value = useMemo(
    () => ({
      showCart,
      setshowCart,
    }),
    [showCart],
  );
  return (
    <ShowCartContext.Provider value={value}>
      {children}
    </ShowCartContext.Provider>
  );
}

// 要点：
// 	•	Provider 负责 state（selectedCategory + searchText）
// 	•	filteredItems 放在 Provider 里统一派生，避免每个页面重复写过滤逻辑
// 	•	value 用 useMemo 包一下，减少无意义渲染（工程化习惯）
