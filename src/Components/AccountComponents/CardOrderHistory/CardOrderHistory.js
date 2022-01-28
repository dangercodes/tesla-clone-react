import React from 'react'
import './CardOrderHistory.scss'
import { Row, Col, Card } from 'react-bootstrap'

function CardOrderHistory() {
  return (
      <div className="cardOrderHistory">
        <Row>
            <Col lg="4">
                <Card>
                    <div className="card__box-image">
                        <Card.Img variant="top" src="assets/images/Dashboard/mens_plaid_tee_transparent.avif" />
                    </div>
                    <div className="d-flex">
                        <Card.Body>
                            <Card.Text>
                                View all shop transactions
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">View</Card.Link>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </Row>
      </div>
  )
}

export default CardOrderHistory;
