import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../redux/actions/productActions'

const { product } = useSelector(state => state.getProductDetails)


const AddToCartButton = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const { id } = product
    const addItemToCart = () => {
        useDispatch(addToCart(id, quantity))
    }


    return (
        <button onClick={addItemToCart} className='bg-orange-400 py-2.5 px-6 w-52 rounded-sm font-medium text-white'>
            ADD TO CART
        </button>
    )
}

export default AddToCartButton
