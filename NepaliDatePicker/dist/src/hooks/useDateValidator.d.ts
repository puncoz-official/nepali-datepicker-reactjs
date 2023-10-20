import { DateType, SplitDate } from '../@types/Data.ts';
export declare const useDateValidator: () => {
    validateInputDate: (date: string, separator?: string) => void;
    validateDateObject: (date: SplitDate, type?: DateType) => void;
    validateBsYear: (year: number) => void;
    validateAdYear: (year: number) => void;
    validateBsMonth: (month: number) => void;
    validateAdMonth: (month: number) => void;
    validateBsDay: (day: number) => void;
    validateAdDay: (day: number) => void;
};
//# sourceMappingURL=useDateValidator.d.ts.map