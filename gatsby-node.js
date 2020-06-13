const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const bookTemplate = path.resolve(`src/templates/book.js`)
    const result = await graphql(`
    query {
      allMongodbNodecrudBooks {
        edges {
            node {
                imageUrl
                author
                book
                cost
                description
                id
                mongodb_id
                releasedate
            }
            }
        }
    }
  `)
    result.data.allMongodbNodecrudBooks.edges.forEach(({ node }) => {
        createPage({
            path: `${node.mongodb_id}`,
            component: bookTemplate,
            context: {
                node
            }
        })
    });
}