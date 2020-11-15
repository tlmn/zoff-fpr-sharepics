import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const Image = ({ name: fileName, ...props }) => {
  const { width, centered } = props;
  const styles = {
    width: width ? `${width}` : "unset",
    margin: centered ? "0 auto" : "unset",
  };
  const {
    allImageSharp: { images },
  } = useStaticQuery(graphql`
    {
      allImageSharp {
        images: edges {
          node {
            fluid(quality: 75, traceSVG: {}) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);

  const image = images.find(
    ({
      node: {
        fluid: { originalName: name },
      },
    }) => name === fileName
  );

  return image ? (
    <Img style={styles} {...image.node} {...props} />
  ) : null;
};

export default Image;
