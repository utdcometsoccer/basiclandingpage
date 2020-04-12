/// <reference types="react" />
import "bootstrap/scss/bootstrap.scss";

import "./corporate-styles.css";
import "./product.css";
export interface ICorporateHomePageProps {
    children?: JSX.Element;
    footer?: JSX.Element;
    navigation?: JSX.Element;
}

export declare function CorporateHomePage(props: ICorporateHomePageProps): JSX.Element;

export declare function CorporateTestimonials(props: ICorporateTestimonialsProps): JSX.Element;
export interface ICorporateTestimonialsProps {
    sectionHeader: string;
    testimonials: ICorporateTestimonialProps[];
}
export declare function CorporateTestimonial(props: ICorporateTestimonialProps): JSX.Element;
export interface ICorporateTestimonialProps {
    children: JSX.Element;
    image: string;
}

export declare function CorporateServices(props: ICorporateServicesProps): JSX.Element;
export interface ICorporateServicesProps {
    heading?: string;
    services: ICorporateServiceProps[];
}
export declare function CorporateService(props: ICorporateServiceProps): JSX.Element;
export interface ICorporateServiceProps {
    children: JSX.Element;
    serviceName: string;
}
export declare function CorporateNavigation(props: ICorporateNavigationProps): JSX.Element;
export interface ICorporateNavigationProps {
    brand: string;
    brandHome: string;
    logo: string;
    navigationItems?: INavigationItemProps[];
}
export declare function NavigationItem(props: INavigationItemProps): JSX.Element;
export interface INavigationItemProps {
    active?: boolean;
    children: JSX.Element;
    clickAction?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    path: string;
}
export declare function CorporateHeader(props: ICorporateHeaderProps): JSX.Element;
export interface ICorporateHeaderProps {
    backgroundImage?: string;
    buttonAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    buttonContent?: JSX.Element;
    heading: string;
    showButton?: boolean;
    subheading?: string;
}


export interface IProductLandingPageProps {
  children: JSX.Element;
  footer?: JSX.Element;
  navigation?: JSX.Element;
}

export declare function ProductLandingPage(
  props: IProductLandingPageProps
): JSX.Element;
export interface IProductNavigationProps {
    home?: string;
    logo?: JSX.Element;
    navigation?: INavigationLink[];
}

export declare function ProductNavigation(props: IProductNavigationProps): JSX.Element;

export declare function ProductHeadlineContainer(props: IProductHeadlineContainerProps): JSX.Element;
export interface IProductHeadlineContainerProps {
    children: JSX.Element[];
}
export declare function ProductHeadline(props: IProductHeadlineProps): JSX.Element;
export interface IProductHeadlineProps {
    buttonVisible: boolean;
    buttonContent?: JSX.Element;
    buttonAction?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    buttonHref?: string;
    headline: string;
    headlineContent?: JSX.Element;
    secondaryHeadlineContent?: JSX.Element;
    subheading?: string;
}
export declare function ProductFooter(props: IProductFooterProps): JSX.Element;
export interface IProductFooterProps {
    children?: JSX.Element;
    logo?: JSX.Element;
}
export declare function ProductMenuItem(props: IProductMenuItemProps): JSX.Element;
export interface IProductMenuItemProps extends INavigationLink {
}
export interface INavigationLink {
    active?: boolean;
    children: JSX.Element;
    path: string;
}
export declare function ProductFooterNavigation(props: IProductFooterNavigationProps): JSX.Element;
export interface IProductFooterNavigationProps {
    footerNavigation: IProductFooterNavigationElementProps[];
}
export declare function ProductFooterNavigationElement(props: IProductFooterNavigationElementProps): JSX.Element;
export interface IProductFooterNavigationElementProps {
    heading: string;
    subMenuItems: INavigationLink[];
}
export declare function ProductFooterNavigationSubMenu(props: IProductFooterNavigationSubMenuProps): JSX.Element;
export interface IProductFooterNavigationSubMenuProps {
    subMenuItems: INavigationLink[];
}
export declare function SubMenuElement(props: ISubMenuElementProps): JSX.Element;
export interface ISubMenuElementProps extends INavigationLink {
}
export declare function LightProductHeadline(props: ILightProductHeadlineProps): JSX.Element;
export interface ILightProductHeadlineProps extends IDarkProductHeadlineProps {
}
export declare function DarkProductHeadline(props: IDarkProductHeadlineProps): JSX.Element;
export interface IDarkProductHeadlineProps {
    children?: JSX.Element;
    headline: string;
    subheading?: string;
}
