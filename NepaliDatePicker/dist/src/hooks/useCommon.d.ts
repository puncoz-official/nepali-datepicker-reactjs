export declare const useCommon: () => {
    omitKeys: (keys: string[], obj: Record<string, any>) => {};
    getObject: <T>(obj: Record<string, any>, key: string, defaultValue?: T | null) => T;
    range: (start: number, end: number, step?: number) => number[];
    zeroPad: (num: number | string, length?: number) => string;
};
//# sourceMappingURL=useCommon.d.ts.map