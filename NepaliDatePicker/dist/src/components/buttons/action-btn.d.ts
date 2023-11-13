import { FunctionComponent, HTMLProps, ReactNode } from "react";
interface Props extends HTMLProps<HTMLButtonElement> {
    children: ReactNode;
    type?: "button";
    isDisabled?: boolean;
}
declare const ActionBtn: FunctionComponent<Props>;
export default ActionBtn;
//# sourceMappingURL=action-btn.d.ts.map