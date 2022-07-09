import React, { useState } from 'react'
import  './style.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardsdata from './CardsData'
import { margin } from '@mui/system'
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/action/action'



const Cards = () => {

const [data,setData]=useState(cardsdata);
// console.log(data)

const  dispatch =useDispatch()

const send =(e)=>{
  // console.log(e);
  dispatch(ADD(e));
}

  return (
    <div className='container mt-3'>
 <h2 className='text-center '>Add To Cart Shoping</h2>

 <div className="row d-flex align-items-center justify-content-center  ">

 {
   data.map((element,id)=>{
     return(
       <>
       <Card style={{ width: '18rem', margin:"20px 25px", border:'none'}} className='card_style'>
  <Card.Img variant="top" src={element.imgdata} style={{height:'16rem'}} className="mt-3" />
  <Card.Body>
    <Card.Title>{element.rname}</Card.Title>
    <Card.Text>
     Price: ₹{element.price}
    </Card.Text>
    <div className="button_div d-flex justify-content-center">

    <Button variant="primary" className='col-lg-12'
    onClick={()=>send(element)}
    >Add To Cart</Button>
    </div>
  </Card.Body>
</Card>
       </>
     )
   })
 }
 

 </div>
    </div>
  )
}

export default Cards;