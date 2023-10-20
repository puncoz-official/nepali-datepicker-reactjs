import { Language } from './Data.ts';
export declare const Months: readonly ["baisakh", "jestha", "asar", "shrawan", "bhadra", "asoj", "kartik", "mangsir", "pouse", "magh", "falgun", "chaitra"];
export declare const Weeks: readonly ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
export interface Translation {
    months: {
        [month in typeof Months[number]]: string;
    };
    weeks: {
        [week in typeof Weeks[number]]: string;
    };
    labels: {
        [key: string]: string;
    };
}
export type Translations = {
    [locale in Language]: Translation;
};
//# sourceMappingURL=Translations.d.ts.map