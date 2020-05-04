/// <reference path= "../../ga.d.ts" />
import { useEffect } from "react";

export interface IGoogleAnalyticsProps {
  trackingID: string;
}



function gtag(...args: any[]) {
  dataLayer.push(arguments);
}
export function GoogleAnalytics(props: IGoogleAnalyticsProps): void {
  const { trackingID } = props;
  useEffect(() => {
    const googleTagManagerScript = document.createElement("script");
    googleTagManagerScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    googleTagManagerScript.async = true;
    googleTagManagerScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      gtag("js", new Date());
      gtag("config", "UA-158051282-1");
    };
    const headElement = document.getElementsByTagName("head")[0];
    headElement.appendChild(googleTagManagerScript);
  }, []);
}
