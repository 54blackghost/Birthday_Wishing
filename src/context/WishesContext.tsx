import React, { createContext, useContext, useState } from "react";
import { mockWishes, type Wish } from "@/services/mockWishes";

type WishesContextType = {
  wishes: Wish[];
  addWish: (wish: Omit<Wish, "id" | "createdAt">) => void;
  getWishesByType: (type: Wish["type"]) => Wish[];
  stats: { total: number; text: number; image: number; video: number; voice: number };
};

const WishesContext = createContext<WishesContextType>({} as WishesContextType);

export const WishesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishes, setWishes] = useState<Wish[]>(mockWishes);

  const addWish = (wish: Omit<Wish, "id" | "createdAt">) => {
    const newWish: Wish = {
      ...wish,
      id: `wish-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setWishes((prev) => [newWish, ...prev]);
  };

  const getWishesByType = (type: Wish["type"]) => wishes.filter((w) => w.type === type);

  const stats = {
    total: wishes.length,
    text: wishes.filter((w) => w.type === "text").length,
    image: wishes.filter((w) => w.type === "image").length,
    video: wishes.filter((w) => w.type === "video").length,
    voice: wishes.filter((w) => w.type === "voice").length,
  };

  return (
    <WishesContext.Provider value={{ wishes, addWish, getWishesByType, stats }}>
      {children}
    </WishesContext.Provider>
  );
};

export const useWishes = () => useContext(WishesContext);
