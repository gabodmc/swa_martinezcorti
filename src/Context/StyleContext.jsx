import { createContext } from "react";
export const StyleContext = createContext();
const { Provider } = StyleContext;

export const StyilesProvider = ({ children }) => {

  const greenButton =
    "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500";

  const indigoButton =
    "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  const redButton =
    "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500";

  const StyleContextValues = {
    greenButton,
    indigoButton,
    redButton,
  };

  return <Provider value={StyleContextValues}>{children}</Provider>;
};
