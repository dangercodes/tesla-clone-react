import React from 'react'
import './Dashboard.scss'
import {Row, Col, Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Dashboard() {
    const user = useSelector(selectUser)

    return (
        <div className="dashboard">
            <h1>Dashboard ({user?.displayName + "'s"} Tesla)</h1>
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

export default Dashboard
