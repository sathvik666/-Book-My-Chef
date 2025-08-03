import { Button, Card } from "react-bootstrap"
import { CartState } from "./Context"

const SingleProduct1 = ({prod}) => {

  const {
    state:{cart},
    dispatch,
  }=CartState();
  return (
    <div className="products">
      <Card>
      <Card.Img variant="top" src={prod.image} alt={prod.name} />
      <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span>₹ {prod.price}</span>
            
          </Card.Subtitle>
          {
            cart.some(p=>p._id.$oid===prod._id.$oid)?(
              <Button onClick={()=>{
                dispatch({
                  type:'remove',
                  payload:prod,
                })

              }}  variant="danger">REMOVE FROM CART</Button>
            ):(
              <Button onClick={()=>{
                dispatch({
                  type:'add',
                  payload:prod,
                })
              }}>ADD TO CART</Button>
            )
          }
        </Card.Body>
        </Card>
        

    </div>
  )
}

export default SingleProduct1
