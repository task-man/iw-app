import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
​
function ItemCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img
                                src={props.item.image}
                                alt={props.item.title}
                            />
                        </div>
                    </Col>
                    <Col>
                        {props.item.title}
                        <h4>{props.item.condition}</h4>
​
                        <div className="font-bold text-xl mb-3">
                            $ {props.item.formats.fixedPrice.amount.value}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
​
export default ItemCard