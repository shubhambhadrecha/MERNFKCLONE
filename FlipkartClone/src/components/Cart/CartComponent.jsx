import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { flipKartAssuredLogo } from '../../constants/data'
import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm.js';

const CartComponent = () => {
    const { cartItems } = useSelector(state => state.cart);


    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)

    // const buyNow = async () => {
    //     console.log('kjnfjkerngnerjk')
    //     let response = await payUsingPaytm({ amount: 500, email: 'blabla@gmail.com' });
    //     let information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response
    //     }
    //     post(information);
    // }

    useEffect(() => {
        totalAmount();
    }, [cartItems])

    const totalAmount = () => {
        let price = 0;
        let discount = 0
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        })
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <div className='mx-20 pt-2'>
            <div className='flex gap-3 overflow-auto'>
                <div className='w-2/3 shadow-md bg-white'>
                    <div className='text-2xl font-medium py-4 px-3'>My Cart ({cartItems.length})</div>
                    <hr className='mx-2'></hr>
                    <div>

                        {cartItems.map(item => (
                            <div>
                                <div className='flex my-3'>
                                    <div className='flex justify-center w-32'>
                                        <img className='h-24 m-2 w-min' src={item.detailUrl} alt="" />
                                    </div>
                                    <div className='mx-3'>
                                        <p className='pt-2'>{item.title.longTitle}</p>
                                        <p className='text-gray-400 text-sm'>Size XL</p>
                                        <div className='my-2 text-xs text-gray-400'>
                                            <p>Seller: Shubham</p>
                                            <img className='w-16' src={flipKartAssuredLogo} alt="" />
                                        </div>
                                        <div className='flex gap-4 items-center mt-4'>
                                            <p className='font-semibold'>₹{item.price.cost}</p>
                                            <p className='text-sm line-through'>₹{item.price.mrp}</p>
                                            <p className='text-sm font-medium text-green-700'>₹{item.price.discount} Off</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))

                        }
                        <div className='flex justify-end py-2 shadow-md '>
                            <button className='py-3 px-12 bg-orange-500 text-xs font-semibold m-3 text-white'>PLACE ORDER</button>
                            {/* onClick={() => buyNow()} */}
                        </div>
                    </div>
                </div>
                <div className='w-1/3 h-min pt-4 pb-2 shadow-md bg-white'>
                    <div className='mx-4'>
                        <div className='shadow-sm pb-3'>
                            <p className='font-semibold text-gray-400 text-sm'>PRICE DETAILS</p>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <p>Price ({cartItems.length} Items)</p>
                                </div>
                                <div>
                                    <p>Discount</p>
                                </div>
                                <div>
                                    <p>Delivery Charges</p>
                                </div>
                            </div>

                            <div className='text-end flex flex-col gap-4'>
                                <div><p>₹{price}</p></div>
                                <div><p>- ₹{discount}</p></div>
                                <div><p>FREE</p></div>
                            </div>
                        </div>
                        <div><hr /></div>
                        <div className='flex justify-between font-bold py-3'>
                            <div><p className=''>Total Amount</p></div>
                            <div><p>₹{price - discount}</p></div>
                        </div>
                        <div><hr /></div>
                        <div className='pt-2'><p className='text-green-600 text-sm font-medium'>You will save ₹{discount} on this order </p></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartComponent
