import * as React from "react";
import { ISVGProps } from "../../ISVGProps";

export function Download(props: ISVGProps): JSX.Element {
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      {" "}
      <title>Download</title>
      <path d="M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4 5-4m-5-10v14" />
    </svg>
  );
}
