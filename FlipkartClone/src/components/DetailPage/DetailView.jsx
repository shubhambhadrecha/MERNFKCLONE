import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
import { flipKartAssuredLogo } from '../../constants/data'
import { addToCart } from '../../redux/actions/cartActions'


const DetailView = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { loading, product } = useSelector(state => state.getProductDetails)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, loading, product])

    const addItemToCart = () => {
        navigate('/cart')
        console.log(id)
        dispatch(addToCart(id, quantity))

    }


    return (
        <div>
            {
                product && Object.keys(product).length &&
                <div className='bg-slate-200 w-screen h-screen'>
                    <div className='mx-10 px-10'>
                        <div></div>
                        <div className='bg-white h-screen'>
                            <div className='p-5'>
                                <div className='flex gap-2 md:flex-row sm:flex-col'>
                                    <div className='md:w-2/5 sm:w-full'>
                                        <div className='w-full flex justify-center'>
                                            <img className='w-[420px] h-auto rounded-sm' src={product.detailUrl} alt="" />
                                        </div>
                                        <div className='flex lg:flex-row md:flex-col mx-9 my-2 justify-between gap-1'>

                                            <button onClick={() => addItemToCart()} className='bg-orange-400 py-2.5 px-6 w-52 rounded-sm font-medium text-white'>
                                                ADD TO CART
                                            </button>


                                            <button onClick={() => { }} className='bg-orange-500 py-2.5 px-6 w-52 rounded-sm font-medium text-white'>
                                                ORDER IT
                                            </button>

                                        </div>
                                    </div>
                                    <div className='md:w-3/5 sm:w-full'>
                                        <div className='mt-5 mb-3'>
                                            <ul>
                                                <li className='text-2xl'>{product.title.longTitle}</li>
                                            </ul>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <p className='text-gray-500 text-sm'>290 Ratings & 98 Reviews</p>
                                            <span>
                                                <img className='w-16' src={flipKartAssuredLogo} alt="" />
                                            </span>
                                        </div>
                                        <div className='my-8'>
                                            <p className='text-green-600 font-medium mb-1'>Special Price</p>
                                            <span className='flex gap-5 items-center'>
                                                <span>
                                                    <p className='text-2xl font-semibold'>{`₹${product.price.cost}`}</p>
                                                </span>
                                                <span>
                                                    <p className='text-gray-400 text-sm text-'>{`₹${product.price.mrp}`}</p>
                                                </span>
                                                <span>
                                                    <p className='text-green-600 font-medium'>{`${product.price.discount} off`}</p>
                                                </span>
                                            </span>
                                        </div>
                                        <div className='pr-10 my-12'>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default DetailView
