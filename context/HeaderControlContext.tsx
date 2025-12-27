"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeaderControlContextType {
  isHeaderHidden: boolean;
  setHeaderHidden: (hidden: boolean) => void;
}

const HeaderControlContext = createContext<HeaderControlContextType | undefined>(undefined);

export function HeaderControlProvider({ children }: { children: ReactNode }) {
  const [isHeaderHidden, setHeaderHidden] = useState(false);

  return (
    <HeaderControlContext.Provider value={{ isHeaderHidden, setHeaderHidden }}>
      {children}
    </HeaderControlContext.Provider>
  );
}

export function useHeaderControl() {
  const context = useContext(HeaderControlContext);
  if (context === undefined) {
    throw new Error("useHeaderControl must be used within a HeaderControlProvider");
  }
  return context;
}
