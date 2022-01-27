import React from 'react'
import './CardDashboard.scss'
import { Row, Col, Card } from 'react-bootstrap'

function CardDashboard() {

    return (
        <div className="dashboard">
            <Row>
                <Col lg="4">
                    <Card>
                        <Card.Img variant="top" src="assets/images/Dashboard/dashboard-1.png" />
                        <Card.Body>
                            <Card.Title>Reserve a Car</Card.Title>
                            <Card.Text>
                                Browse our models
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Shop Now</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <Card className="normal">
                        <Card.Img variant="top" src="assets/images/Dashboard/dashboard-2.jfif" />
                        <div className="d-flex">
                            <Card.Body>
                                <Card.Text>
                                    Purchased a car from a third party?
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Add</Card.Link>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CardDashboard
