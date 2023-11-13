import { HTMLProps } from "react";
import { IData } from './Data.ts';
export interface NepaliDatePickerOptions {
    classNames?: Omit<IData["options"]["classNames"], "input">;
    colors?: {
        primary?: IData["options"]["colors"]["primary"];
        secondary?: IData["options"]["colors"]["secondary"];
    };
    dateSeparator?: IData["options"]["dateSeparator"];
    locale?: "en" | "ne";
    valueLocale?: "en" | "ne";
    closeOnSelect?: IData["options"]["closeOnSelect"];
}
export type DatePickerInput = Omit<HTMLProps<HTMLInputElement>, "onChange" | "onSelect">;
export interface INepaliDatePicker extends DatePickerInput {
    dark?: boolean;
    value?: string;
    className?: IData["options"]["classNames"]["input"];
    onChange?: IData["events"]["onChange"];
    onSelect?: IData["events"]["onSelect"];
    isHoliday?: IData["modifiers"]["isHoliday"];
    isDisabled?: IData["modifiers"]["isDisabled"];
    isWeekend?: IData["modifiers"]["isWeekend"];
    options?: NepaliDatePickerOptions;
}
export declare const INepaliDatePickerKeys: string[];
//# sourceMappingURL=NepaliDatePicker.d.ts.map