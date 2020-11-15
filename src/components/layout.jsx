import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import React from "react";

export default ({ children, state }) => {
  const {
    site: {
      siteMetadata: { title, name, description },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          name
        }
      }
    }
  `);

  const longTitle = `${name} – ${title}`;

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "bg-lightGray pb-2",
        }}
      >
        <meta charSet="utf-8" />
        <title>{longTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={longTitle} />
      </Helmet>
      {children}
    </>
  );
};
