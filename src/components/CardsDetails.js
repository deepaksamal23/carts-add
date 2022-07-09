import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DLT } from '../redux/action/action';
import { useDispatch } from 'react-redux'
import { ADD,REMOVE } from '../redux/action/action'


const CardsDetails = () => {
      const getdata = useSelector((state) => state.cartreducer.carts)
      console.log(getdata)
      const { id } = useParams();

      const history = useNavigate()
      const dispatch = useDispatch()

      const [datastore, setdatastore] = useState([])
      console.log(datastore)
      const compareid = () => {
            const datacomp = getdata.filter((e) => {
                  return e.id == id

            });
            setdatastore(datacomp)
      }

      useEffect(() => {
            compareid();
      }, [id])

      const send =(e)=>{
            // console.log(e);
            dispatch(ADD(e));
          }
          

      const del = ((id) => {
            dispatch(DLT(id))

            history("/")
      })
      const remove =(item)=>{
            dispatch(REMOVE(item))
      }



      return (
            <>
                  <div className='container mt-3'>

                        <h2 className='text-center '>Items Cart Details</h2>

                        <section className='container mt-3'>
                              <div className='iteamsdetails'>
                                    {
                                          datastore.map((elem) => {
                                                return (
                                                      <>
                                                            <div className='items_img'>
                                                                  <img src={elem.imgdata} alt="" />
                                                            </div>
                                                            <div className='details' >
                                                                  <Table>
                                                                        <tr>
                                                                              <td>
                                                                                    <p> <strong>Resturants</strong>  :{elem.rname}</p>
                                                                                    <p> <strong>Price</strong>  : ₹{elem.price}</p>
                                                                                    <p> <strong>Dishes</strong>  : {elem.address}</p>
                                                                                    <p> <strong>Total</strong>  : ₹{elem.price*elem.qnty}</p>

                                                                                    <div className='mt-5 d-flex  justify-content-between   align-items-center' style={{ width:100, cursor:'pointer',background:'#ddd',color:'#111' }}>

<span style={{fontSize:24}}   onClick={elem.qnty <=1 ? ()=>del(elem.id) : ()=>remove(elem)}>-</span>
<span style={{fontSize:20}}>{elem.qnty}</span>
<span style={{fontSize:24}} onClick={()=>send(elem)}>+</span>
                                                                                    </div>
                                                                              </td>
                                                                              <td style={{ width: '10vw' }}>
                                                                                    <p><strong>Rating :</strong><span style={{ background: "blue", padding: '2px 5px', color: "white", borderRadius: " 5px" }}> {elem.rating}★</span></p>
                                                                                    <p><strong>Review:</strong><i >{elem.somedata}</i></p>
                                                                                    <p ><strong>Remove :</strong><span >  <i className='fas fa-trash ' onClick={() => del(elem.id)} style={{ color: 'red', cursor: 'pointer', fontSize: 21 }}></i></span></p>
                                                                              </td>
                                                                        </tr>
                                                                  </Table>
                                                            </div>
                                                      </>
                                                )
                                          })
                                    }


                              </div>
                        </section>

                  </div>
            </>
      )
}

export default CardsDetails