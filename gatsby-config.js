module.exports = {
  siteMetadata: {
    name: "Sharepic Generator – FPR",
    title: "Sharepic Generator – FPR",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FPR – Sharepic Generator`,
        short_name: `FPR – Sharepic Generator`,
        start_url: `/`,
        background_color: `#00ffc2`,
        theme_color: `#00ffc2`,
        display: `standalone`,
        icon: `static/assets/images/icon.png`,
      },
    },
  ],
};
