import { ParsedDate, SplitDate } from '../@types/Data.ts';
export declare const useDateUtils: () => {
    splitDate: (date: string, separator?: string) => SplitDate;
    stitchDate: (date: SplitDate, separator?: string) => string;
    parseBsDate: (date: string, separator?: string) => ParsedDate;
    getNumberOfDaysInBSMonth: (year: number, month: number) => number;
};
//# sourceMappingURL=useDateUtils.d.ts.map