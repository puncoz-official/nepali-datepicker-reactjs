export declare const useCommon: () => {
    omitKeys: (keys: string[], obj: {
        [key: string]: any;
    }) => {};
    getObject: <T>(obj: object, key: string, defaultValue?: T | null) => T;
    range: (start: number, end: number, step?: number) => number[];
    zeroPad: (num: number | string, length?: number) => string;
};
//# sourceMappingURL=useCommon.d.ts.map