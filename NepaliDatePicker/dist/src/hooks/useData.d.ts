import { DataAction } from '../@types/Data.ts';
export declare const useData: () => {
    setData: (action: DataAction) => void;
    state: import('../@types/Data.ts').IData;
};
