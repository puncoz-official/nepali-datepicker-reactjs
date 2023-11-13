import { FunctionComponent, HTMLProps, ReactNode } from "react";
interface Props extends HTMLProps<HTMLButtonElement> {
    children: ReactNode;
    type?: "button";
}
declare const NavBtn: FunctionComponent<Props>;
export default NavBtn;
