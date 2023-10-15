import React, { FunctionComponent, ReactNode } from "react";
import { DataAction, IData } from '../../@types/Data.ts';
import { INepaliDatePicker } from '../../@types/NepaliDatePicker.ts';
interface Context {
    dispatch: (action: DataAction) => void;
    state: IData;
}
export declare const DataContext: React.Context<Context>;
interface Props extends INepaliDatePicker {
    children: ReactNode;
}
export declare const DataProvider: FunctionComponent<Props>;
export {};
//# sourceMappingURL=provider.d.ts.map