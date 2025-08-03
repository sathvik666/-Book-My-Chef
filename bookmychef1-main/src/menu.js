import React from 'react'
import Card from 'react-bootstrap/Card';
import menu1 from './menu.json'



function menu() {
    let cardArr=menu1;
  return (
    <div  className='row' style={{marginTop:'4%',marginLeft:'1.5%',marginRight:'1.5%'}}>
        {cardArr.map((eachCard,inder)=>(
            <div className='col-md-3' style={{marginBottom:'3%'}}>
            <Card style={{ width: '18rem',height:'70vh' }}>
            <Card.Img variant="top" src={eachCard.image} />
            <Card.Body>
                <Card.Title>{eachCard.name}</Card.Title>
                <Card.Text>{eachCard.description}</Card.Text>
                <Card.Text>{'$'+eachCard.price}</Card.Text>
            </Card.Body>
            </Card>
            </div>
        ))}
    </div>
  );
}
export default menu

