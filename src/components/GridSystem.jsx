import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

const GridSystem = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col style={{background: 'green'}}>1 of 2</Col>
                <Col xs={11}>2 of 2</Col>
            </Row>
            <Row>
                <Col style={{background: 'grey'}}>1 of 3</Col>
                <Col xs={10}>2 of 3</Col>
                <Col style={{background: 'grey'}}>3 of 3</Col>
            </Row>
            <br />
            <Row xs={2} md={4} lg={6}>
                <Col style={{background: 'green'}}>1 of 2</Col>
                <Col style={{background: 'red'}}>1 of 2</Col>
            </Row>

            <Row lg={3}>
                <Col style={{background: 'red'}}>1 of 3</Col>
                <Col style={{background: 'yellow'}}>2 of 3</Col>
                <Col style={{background: 'green'}}>3 of 3</Col>
            </Row>
        </Container>

        <hr /> <hr />
        
        <Container>
            <Row xs={1} md={2} lg={3}>
                <Col style={{background: 'red'}}>1 of 3</Col>
                <Col style={{background: 'yellow'}}>2 of 3</Col>
                <Col style={{background: 'green'}}>3 of 3</Col>
            </Row>
        </Container>


    </div>
    )
}

export default GridSystem
