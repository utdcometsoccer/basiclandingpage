import * as React from "react";
import { ISVGProps } from "../../ISVGProps";

export interface IPlaceholderProps extends ISVGProps {
  title?: string;
  text?: string;
  color?: string;
}

export function PlaceHolder(props: IPlaceholderProps): JSX.Element {
  const { className, title, text, color, fill, width, height } = props;
  return (
    <svg
      className={className || "bd-placeholder-img"}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role={!title && !text ? "img" : undefined}
      aria-label={title || text}
    >
      {title ? <title>{title}</title> : undefined}
      <rect width="100%" height="100%" fill={fill||"#868e96"} />
      {text ? (
        <text x="50%" y="50%" fill={color||"#dee2e6"} dy=".3em">
          {text}
        </text>
      ) : undefined}
    </svg>
  );
}
