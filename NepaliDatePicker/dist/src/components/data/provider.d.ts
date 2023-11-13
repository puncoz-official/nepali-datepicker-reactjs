import React, { Dispatch, FunctionComponent, ReactNode } from "react";
import { DataAction, IData } from '../../@types/Data.ts';
export declare const DataContext: React.Context<{
    state: IData;
    dispatch: Dispatch<DataAction>;
}>;
interface Props {
    children: ReactNode;
}
export declare const DataProvider: FunctionComponent<Props>;
export {};
