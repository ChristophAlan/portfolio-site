require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Christopher Alan // Art Director`,
    name: `Christopher Alan`,
    siteUrl: `https://christopheralan.design`,
    description: `Portfolio of Christopher Alan also known as Chris Herrmann an art director and designer focused on UI/UX, web and other interactive experiences.`,
    hero: {
      heading: `Experienced art director, designer and problem solver with a passion for creativity, simplicity and semantics.​​​​​​​`,
      maxWidth: 752,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/christopheralan`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/ChristopherAlan`,
      },
      {
        name: `mailto`,
        url: `mailto:hello@christopheralan.design`,
      },
      {
        name: `pdf`,
        url: `https://drive.google.com/file/d/13FewcJyFqRBQ4LTTYR8vnXrzCv5T99JA/view`
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
      },
    },
    {
      resolve: 'gatsby-remark-video',
      options: {
        width: 800,
        height: 'auto',
        preload: 'auto',
        muted: true,
        autoplay: true,
        playsinline: true,
        controls: true,
        loop: true
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};
