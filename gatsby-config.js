module.exports = {
  siteMetadata: {
    title: "A Tour of Web3's Ethereum.",
    subtitle: "The sort of comprehensive tour of the ethereums block chain.",
    author: "ThePrimeagen",
    authorSubtitle: "ThePrimeagen",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.png", // this also should go in /static
    twitch: "https://twitch.tv/ThePrimeagen",
    twitter: "https://twitter.com/ThePrimeagen", // make empty string to omit socials
    github: "https://github.com/ThePrimeagen",
    description:
      "The sort of comprehensive tour of the ethereum block chain and developing smart contracts with solidity.",
    keywords: [
      "Blockchain",
      "web3",
      "solidity",
      "The tutorial of a life time on web3",
      "ThePrimeagen web3 smart contracts",
    ],
  },
  pathPrefix: "/web3-smart-contracts",
  // pathPrefix: "/my-repo-name", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
