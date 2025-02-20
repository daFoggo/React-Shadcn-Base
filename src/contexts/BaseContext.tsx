import { IBaseContext, IBaseContextProviderProps } from "@/types/BaseContext";
import { createContext, useContext } from "react";

const BaseContext = createContext<IBaseContext | undefined>(undefined);

export const BaseContextProvider = ({
  children,
}: IBaseContextProviderProps): JSX.Element => {
  const baseValue = "base value";

  const contextValue: IBaseContext = { baseValue };

  return (
    <BaseContext.Provider value={contextValue}>{children}</BaseContext.Provider>
  );
};

export const useBaseContext = (): IBaseContext => {
  const context = useContext(BaseContext);
  if (context === undefined) {
    throw new Error("useBaseContext must be used within a BaseContextProvider");
  }
  return context;
};
