import { INavigationItemProps } from "./NavigationItem/INavigationItemProps";
export interface ICorporateNavigationProps {
    brand: string;
    brandHome: string;
    logo: string;
    navigationItems?: INavigationItemProps[];
}
