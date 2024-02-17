import type { ReactNode } from "react";
import React, { useContext, useMemo, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ContextType {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  filterSearch: string;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ApplicationContext = React.createContext({} as ContextType);

export const ApplicationProvider = ({ children }: ProviderProps) => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [filterSearch, setFilterSearch] = useState<string>("");

  const value: ContextType = useMemo(() => {
    return {
      currentCategory,
      setCurrentCategory,
      filterSearch,
      setFilterSearch,
    };
  }, [currentCategory, setCurrentCategory, filterSearch,setFilterSearch ]);

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => useContext(ApplicationContext);
