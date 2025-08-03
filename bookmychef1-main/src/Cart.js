import { useEffect, useState } from 'react'
import { CartState } from './Context';
import { Button, Col, Container, Form, Image, ListGroup, Navbar, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import './Styles.css';
import { Link } from 'react-router-dom';
const Header = ()=>{
  return (
    <div>
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <h1>Cart</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  );
}
const CartPage = () => {
  const{
    state:{cart},
    dispatch,
  }=CartState();
  const [total,setTotal]=useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)* curr.qty,0));
  },[cart]);
  return (
    <div>
      <Header/>
    <div className='home'>
        <div className='productContainer'>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.name}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "change",
                        payload: {
                          id: prod.name,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(5).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "remove",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>
          Subtotal ({cart.length}) items
        </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Link to='/bill'>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default CartPage
