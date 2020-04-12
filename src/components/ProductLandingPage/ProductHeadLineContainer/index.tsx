import * as React from "react";

import { IProductHeadlineContainerProps } from "./IProductHeadlineContainerProps";

export function ProductHeadlineContainer(props:IProductHeadlineContainerProps):JSX.Element{
    const {children } = props;
return <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">{children}</div>
}