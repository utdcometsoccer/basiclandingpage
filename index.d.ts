// Generated by dts-bundle v0.7.3-fork.1
// Dependencies for this module:
//   ../bootstrap/scss/bootstrap.scss
//   ../webpack

import "bootstrap/scss/bootstrap.scss";
import * as webpack from 'webpack';

export interface ICorporateFooterNavigationMenuProps {
    navigationItems: INavigationItemProps[];
}

import "../../corporate-styles.css";
export function CorporateFooterNavigationMenu(props: ICorporateFooterNavigationMenuProps): JSX.Element;

export interface ICorporateFooterProps {
    footerMenus: ICorporateFooterNavigationMenuProps[];
    organizationName: JSX.Element;
}

import "../corporate-styles.css";
export function CorporateFooter(props: ICorporateFooterProps): JSX.Element;

export interface ICorporateHeaderProps {
    backgroundImage?: string;
    buttonAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    buttonContent?: JSX.Element;
    heading: string;
    showButton?: boolean;
    subheading?: string;
}

import "../corporate-styles.css";
export function CorporateHeader(props: ICorporateHeaderProps): JSX.Element;

export interface ICorporateNavigationProps {
    brand: string;
    brandHome: string;
    logo: string;
    navigationItems?: INavigationItemProps[];
}

import "../corporate-styles.css";
export function CorporateNavigation(props: ICorporateNavigationProps): JSX.Element;

export interface INavigationItemProps {
    active?: boolean;
    children: JSX.Element;
    clickAction?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    path: string;
}

import "../../corporate-styles.css";
export function NavigationItem(props: INavigationItemProps): JSX.Element;

export interface ICorporateServiceProps {
    children: JSX.Element;
    serviceName: string;
}

import "../../corporate-styles.css";
export function CorporateService(props: ICorporateServiceProps): JSX.Element;

export interface ICorporateServicesProps {
    heading?: string;
    services: ICorporateServiceProps[];
}

import "../corporate-styles.css";
export function CorporateServices(props: ICorporateServicesProps): JSX.Element;

export interface ICorporateTestimonialProps {
    children: JSX.Element;
    image: string;
}

import "../../corporate-styles.css";
export function CorporateTestimonial(props: ICorporateTestimonialProps): JSX.Element;

export interface ICorporateTestimonialsProps {
    sectionHeader: string;
    testimonials: ICorporateTestimonialProps[];
}

import "../corporate-styles.css";
export function CorporateTestimonials(props: ICorporateTestimonialsProps): JSX.Element;

export interface ICorporateHomePageProps {
    children?: JSX.Element;
    footer?: JSX.Element;
    navigation?: JSX.Element;
}

import "./corporate-styles.css";
export function CorporateHomePage(props: ICorporateHomePageProps): JSX.Element;

export interface IDarkProductHeadlineProps {
    children?: JSX.Element;
    headline: string;
    subheading?: string;
}

import "../product.css";
export function DarkProductHeadline(props: IDarkProductHeadlineProps): JSX.Element;

import "./product.css";
export function ProductLandingPage(props: IProductLandingPageProps): JSX.Element;

export interface IProductLandingPageProps {
    children: JSX.Element;
    footer?: JSX.Element;
    navigation?: JSX.Element;
}

export interface ILightProductHeadlineProps extends IDarkProductHeadlineProps {
}

import "../product.css";
export function LightProductHeadline(props: ILightProductHeadlineProps): JSX.Element;

import "../product.css";
export function ProductFooter(props: IProductFooterProps): JSX.Element;

export interface IProductFooterProps {
    children?: JSX.Element;
    logo?: JSX.Element;
}

import "../../product.css";
export function ProductFooterNavigation(props: IProductFooterNavigationProps): JSX.Element;

export interface IProductFooterNavigationProps {
    footerNavigation: IProductFooterNavigationElementProps[];
}

import "../../../product.css";
export function ProductFooterNavigationElement(props: IProductFooterNavigationElementProps): JSX.Element;

export interface IProductFooterNavigationElementProps {
    heading: string;
    subMenuItems: INavigationLink[];
}

import "../../../../product.css";
export function ProductFooterNavigationSubMenu(props: IProductFooterNavigationSubMenuProps): JSX.Element;

export interface IProductFooterNavigationSubMenuProps {
    subMenuItems: INavigationLink[];
}

import "../../../../../product.css";
export function SubMenuElement(props: ISubMenuElementProps): JSX.Element;

export interface ISubMenuElementProps extends INavigationLink {
}

import "../product.css";
export function ProductHeadline(props: IProductHeadlineProps): JSX.Element;

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

import "../product.css";
export function ProductHeadlineContainer(props: IProductHeadlineContainerProps): JSX.Element;

export interface IProductHeadlineContainerProps {
    children: JSX.Element[];
}

import "../product.css";
export function ProductNavigation(props: IProductNavigationProps): JSX.Element;

export interface IProductNavigationProps {
    home?: string;
    logo?: JSX.Element;
    navigation?: INavigationLink[];
}

export interface INavigationLink {
    active?: boolean;
    children: JSX.Element;
    path: string;
}

import "../../product.css";
export function ProductMenuItem(props: IProductMenuItemProps): JSX.Element;

export interface IProductMenuItemProps extends INavigationLink {
}

export {};

const config: webpack.Configuration;
export default config;

