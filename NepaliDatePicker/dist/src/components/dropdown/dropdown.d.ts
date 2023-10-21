import { FunctionComponent } from "react";
import { ClassName } from '../../@types/Common.ts';
export interface Option {
    label: string;
    value: number;
}
type Props = {
    options: Option[];
    value: number;
    onSelect: (value: number) => void;
    title: string;
    className?: ClassName;
    dropdownClass?: ClassName;
};
declare const DropDown: FunctionComponent<Props>;
export default DropDown;
//# sourceMappingURL=dropdown.d.ts.map