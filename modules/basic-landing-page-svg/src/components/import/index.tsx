import * as React from "react";
import { ISVGProps } from "../../ISVGProps";

export function Import(props: ISVGProps): JSX.Element {
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
      fill="none"
      stroke={fill || "currentcolor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      {" "}
      <title>Import</title>
      <path d="M28 22v8H4v-8M16 4v20m-8-8l8 8 8-8" />
    </svg>
  );
}
