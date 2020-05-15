import * as React from "react";
import { ISVGProps } from "../../ISVGProps";

export function OpenCollective(props: ISVGProps): JSX.Element {
  const { style, fill, width, className, height, viewBox } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      className={className}
      viewBox={viewBox || "0 0 40 41"}
      focusable="false"
      role="img"
      style={style}
      fill={fill || "currentColor"}
      fill-rule="evenodd"
    >
      <title>Open Collective</title>
      <path
        fill-opacity=".4"
        d="M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"
      />
      <path d="M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z" />
    </svg>
  );
}
