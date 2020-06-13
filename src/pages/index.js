import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`{
    allMongodbNodecrudBooks {
      edges {
        node {
          imageUrl
          author
          book
          cost
          description
          mongodb_id
          releasedate
        }
      }
    }
    }
  `)
  return (
    <Layout>
      <SEO title="Gatsby MongoDB source" />
      <div className="container">
        <h1 className="header-text">Trending Books</h1>
        <Row>
          {
            data.allMongodbNodecrudBooks.edges.map(item => {
              return (
                <Col xs={12} sm={6} md={4} key={item.node.mongodb_id}>
                  <Link to={`/${item.node.mongodb_id}`} className="link">
                    <Card>
                      <div className="img-container">
                        <Card.Img variant="top" src={item.node.imageUrl} />
                      </div>
                      <Card.Body>
                        <Card.Title >{item.node.book}</Card.Title>
                        <Card.Text>
                          {item.node.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <span> {item.node.releasedate}</span><span>More info</span>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </Layout>
  )
}

export default IndexPage
