import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch'
const FeaturedProducts = ({type}) => {
    // const data=[
    //     {
    //         id:1,
    //         img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:"Long sleeve Graphic T-shirt",
    //         isNew:true,
    //         oldPrice:19,
    //         price:12,

    //     },
    //     {
    //         id:2,
    //         img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:"Coat",
    //         isNew:true,
    //         oldPrice:19,
    //         price:12,

    //     },
    //     {
    //         id:3,
    //         img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:"Skirt",
    //         isNew:false,
    //         oldPrice:19,
    //         price:12,

    //     },
    //     {
    //         id:4,
    //         img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:"Hat",
    //         isNew:false,
    //         oldPrice:19,
    //         price:12,

    //     },
    // ]
   const {data,loading,error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt qui voluptatem ut iure nobis, atque nam sapiente libero corrupti soluta cum commodi odio quaerat consectetur id maiores eveniet dolore!</p>
        </div>
        <div className="bottom">
            {
               error ?
               "Something went wrong!"
               :loading
               ?"Loading"
               : 
               data?.map(item=>(
                <Card item={item} key={item.id}/>
            ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts