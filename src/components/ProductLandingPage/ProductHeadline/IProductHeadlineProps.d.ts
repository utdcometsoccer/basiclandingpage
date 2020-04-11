/// <reference types="react" />
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
