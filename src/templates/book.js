import React from 'react'
import SEO from '../components/seo'
import { Link} from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

const BookTemplate = ({ pageContext }) => {
    const info = pageContext.node
    return (
        <Container>
            <SEO title={info.book} />
            <div className="back">
                <Link to="/"><h3>Back</h3></Link>
            </div>
            <Row>
                <Col xs={12} sm={4} md={4}>
                    <img src={info.imageUrl} alt="book" width="100%" />
                </Col>
                <Col xs={12} sm={8} md={8}>
                    <h1>{info.book}({info.releasedate})</h1>
                    <p>{info.author}</p>
                    <p>{info.description}</p>
                </Col>
            </Row>

            <div>

            </div>
            <div>
            </div>
        </Container>
    )
}

export default BookTemplate
