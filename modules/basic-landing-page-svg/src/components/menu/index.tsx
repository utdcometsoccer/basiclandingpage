import * as React from "react";
import { ISVGProps } from "../../ISVGProps";

export function Menu(props: ISVGProps): JSX.Element {
  const { style, fill, width, className, height, viewBox } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      className={className}
      viewBox={viewBox || "0 0 30 30"}
      focusable="false"
      role="img"
      style={style}
    >
      <title>Menu</title>
      <path
        stroke={fill || "currentcolor"}
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M4 7h22M4 15h22M4 23h22"
      />
    </svg>
  );
}
