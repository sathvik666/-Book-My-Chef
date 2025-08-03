import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
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
const Bill = () => {
  return (
    <div>
        <Header/>
    </div>
  )
}
export default Bill
