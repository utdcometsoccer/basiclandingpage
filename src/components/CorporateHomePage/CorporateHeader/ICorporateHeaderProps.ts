export interface ICorporateHeaderProps{
    backgroundImage?:string;
    buttonAction?:(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
    buttonContent?:JSX.Element;
    heading:string;
    showButton?:boolean;
    subheading?:string;
}