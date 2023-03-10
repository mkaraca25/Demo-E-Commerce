import React from 'react'
import './Cart.scss'
import DeleteOutLinedIcon from '@mui/icons-material/DeleteOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartSlice'
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest'
const Cart = () => {
    // const data=[
    //     {
    //         id:1,
    //         img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:"Long sleeve Graphic T-shirt",
    //         desc:"Long sleeve Graphic T-shirt",
    //         isNew:true,
    //         oldPrice:19,
    //         price:12,

    //     },
    // ]
    const products=useSelector(state=>state.cart.products)
    const totalPrice=()=>{
        let total=0;
        products.forEach((item)=>(total+=item.price*item.quantity))
        return total.toFixed(2);
    }
    const dispatch=useDispatch()
    const stripePromise = loadStripe('pk_test_51MPoUQI8FoaExQJjM0j4CsAZozYOfz3tfN1Qy2z53Ud9e3brWfw8lXlgvsKTWkCbMVpstk5uA6p3TPAAJhzD9zZS00l1SMwgQM');

      const handlePayment = async () => {
        try {
          const stripe = await stripePromise;
          const res = await makeRequest.post("/orders", {
            products,
          });
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map(item=>(
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt="Product" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                       {item.quantity} X ${item.price}
                    </div>
                </div>
                <DeleteOutLinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart