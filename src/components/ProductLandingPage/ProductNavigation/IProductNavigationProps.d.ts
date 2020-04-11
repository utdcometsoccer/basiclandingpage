/// <reference types="react" />
import { INavigationLink } from "./ProductMenuItem/INavigationLink";
export interface IProductNavigationProps {
    home?: string;
    logo?: JSX.Element;
    navigation?: INavigationLink[];
}
