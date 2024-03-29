require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: Object.assign({}, clientConfig.sanity, {
        token: process.env.GATSBY_SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      })
    }
  ]
};
