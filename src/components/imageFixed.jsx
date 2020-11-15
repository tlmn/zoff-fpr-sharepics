import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const ImageFixed = ({ name: fileName, width = "100%", ...props }) => {
  const {
    allImageSharp: { images },
  } = useStaticQuery(graphql`
    {
      allImageSharp {
        images: edges {
          node {
            fixed(height: 1000) {
              height
              srcSet
              originalName
            }
          }
        }
      }
    }
  `);

  const imageFixed = images.find(
    ({
      node: {
        fixed: { originalName: name },
      },
    }) => name === fileName
  );

  return imageFixed ? (
    <Img
      {...props}
      {...imageFixed.node}
      style={{ position: "unset", height: "100%" }}
      imgStyle={{
        objectFit: "cover",
        objectPosition: "50% 50%",
        position: "relative",
        width: width,
      }}
    />
  ) : null;
};

export default ImageFixed;
