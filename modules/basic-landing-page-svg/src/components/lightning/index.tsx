import * as React from "react";
import { ISVGProps } from "../../ISVGProps";

export function Lightning(props: ISVGProps): JSX.Element {
  const { style, fill, width, className, height, viewBox } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      className={className}
      viewBox={viewBox || "0 0 32 32"}
      focusable="false"
      role="img"
      style={style}
      fill="none"
      stroke={fill || "currentcolor"}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      aria-hidden="true"
    >
      <title>Lightning</title>
      <path d="M18 13l8-11L8 13l6 6-8 11 18-11z" />
    </svg>
  );
}
