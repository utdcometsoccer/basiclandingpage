import * as React from "react"
import Helmet from "react-helmet"

export interface ISEOProps {
    author?: string;
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
  }
  
export function SEO(props: ISEOProps) {
  const { author, description, lang, meta, title } = props

  const metaLang = lang || "en"
  return (
    <Helmet
      htmlAttributes={{
        metaLang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta || [])}
    />
  )
}
