import { ClassName } from './Common.ts';
import { Locale } from './Locale.ts';
export declare const SET_DATA = "SET_DATA";
export interface IData {
    classNames: {
        wrapper: ClassName;
        input: ClassName;
    };
    theme: "light" | "dark";
    value: string;
    onChange?: () => void;
    onSelect?: () => void;
    locale: {
        calendar: Locale;
        value: Locale;
    };
}
export type DataTypes = Locale;
export interface DataAction {
    type: typeof SET_DATA;
    key: keyof IData;
    value: DataTypes;
}
//# sourceMappingURL=Data.d.ts.map