module.exports = {
  siteMetadata: {
    title: `Gatsby MongoDB Source`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Ranganath`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `node-crud`,
        collection: `books`,
        connectionString: `mongodb+srv://ranganathmd:uOgKDhu9ZAhmOrnv@developeracc-xzfvx.mongodb.net`,
      },
      auth: {
        user: `ranganathmd`,
        password: `uOgKDhu9ZAhmOrnv`
      }
    },
  ],
}
