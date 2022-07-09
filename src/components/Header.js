import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { fontSize, positions } from '@mui/system';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { DLT } from '../redux/action/action';
import { useDispatch } from 'react-redux'

const Header = () => {

  const [price, setprice] = useState(0)
console.log(price)
  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata);


  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const del = ((id) => {
    dispatch(DLT(id))
  })


  const total = () => {

    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price + price
    });
    setprice(price)
  };

  useEffect(() => {
    total();
  }, [total])

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 55, borderRadius: "5px" }} className='container mt-1'>
        <Container>
          <NavLink to='/' className='text-danger text-decoration-none mx-4'>Shoping Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to='/' className='text-decoration-none '>Home</NavLink>

          </Nav>
          <Badge badgeContent={getdata.length} color="success" id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>

            <i className="fa-solid fa-cart-shopping text-primary  " style={{ fontSize: 25, cursor: "pointer" }}></i>

          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >



          {
            getdata.length ?
              <div className='cart_details' style={{ width: '24rem', padding: 11 }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Resturant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                  <img src={e.imgdata} alt="" style={{ height: '5rem', width: '5rem' }} srcset="" />
                                </NavLink>

                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p style={{ fontSize: 20, cursor: 'pointer', color: 'gold' }} onClick={() => del(e.id)}>
                                  <i className='fas fa-trash smalltrash' ></i>
                                </p>
                              </td>
                              <td style={{ fontSize: 20, cursor: 'pointer', color: 'gold' }} onClick={() => del(e.id)}>
                                <i className='fas fa-trash largetrash' ></i>
                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                    <p className='text-center'>Total : ₹ {price}</p>
                  </tbody>
                </Table>
              </div> :
              <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                <i className='fas fa-close smallclose'
                  onClick={handleClose}
                  style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
              </div>
          }








        </Menu>
      </Navbar>
    </div>
  )
}

export default Header;