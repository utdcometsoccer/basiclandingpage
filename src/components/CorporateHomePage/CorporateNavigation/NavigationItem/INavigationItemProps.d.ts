/// <reference types="react" />
export interface INavigationItemProps {
    active?: boolean;
    children: JSX.Element;
    clickAction?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    path: string;
}
