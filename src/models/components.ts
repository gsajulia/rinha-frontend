import { Dispatch, SetStateAction } from "react";
import { TJsonData } from "./structures";

export type TFileLoader = {
  setData: Dispatch<SetStateAction<TJsonData | null>>;
};

export type TViewerTree = TJsonData;
