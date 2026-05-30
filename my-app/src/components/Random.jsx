import React, { useState } from 'react'
import Message from './Message';

const Random = () => {

    const [product,setProduct] = useState([])
    const [image,setImage] = useState(null)
    const [count,setCount]=useState(0);

    const getProduct = async() => {
      
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()

            const randomNum = Math.floor(Math.random()*data.length)
            
            const randomProduct = data[randomNum]
            
            setProduct(randomProduct.title)
            setImage(randomProduct.image)

        }catch(error){
            console.log('Failed to fetch the product',error);
        }

        setCount((count) => count+1)
    }

  return (
    <div className="product-container">
        <h1>{product}</h1>
        <img src={image} alt={product}/>
        <Message count={count}/>
        <button onClick={getProduct}>Generate Random Product</button>
    </div>
  )
}

export default Random