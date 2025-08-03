import Card from 'react-bootstrap/Card';
import menu1 from './menu.json'
import Button from 'react-bootstrap/Button';
import './App.css'
import { useNavigate } from 'react-router-dom';
import logo1 from './logo1.jpg'
function Header() {
  const navigate=useNavigate();
  function clicklogut() {
      navigate("/cart");
  }
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo1} alt='YourPhoto' className="logo"></img>
        <h1>Pick Your Menu</h1>
      </div>
      <button className="right-corner-button" onClick={clicklogut}>CART</button>
    </header>
  );
}
const Pickyourmenu=()=>{
  let cardArr=menu1;
  return (
    <div>
    <Header/>
    <div  className='row' style={{marginTop:'4%',marginLeft:'1.5%',marginRight:'1.5%'}}>
        {cardArr.map((eachCard)=>(
            <div className='col-md-3' style={{marginBottom:'3%'}}>
            <Card style={{ width: '18rem',height:'80vh' }}>
            <Card.Img variant="top" src={eachCard.image} />
            <Card.Body>
                <Card.Title>{eachCard.name}</Card.Title>
                <Card.Text>{eachCard.description}</Card.Text>
                <Card.Text>{'$'+eachCard.price}</Card.Text>
                <Button >Add to Cart</Button>
            </Card.Body>
            </Card>
            </div>
        ))}
    </div>
    </div>
  );
}
export default Pickyourmenu

