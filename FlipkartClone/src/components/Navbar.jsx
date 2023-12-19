import React, { useContext, useEffect, useState } from 'react'
import LoginDialogue from './LoginDialogue'
import { DataContext } from '../context/DataProvider'
import ProfileLogout from './ProfileLogout'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/actions/productActions'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [text, setText] = useState('')

    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])

    const { account, setAccount } = useContext(DataContext);

    const getText = (text) => {
        setText(text)
        console.log(text);
    }

    return (
        <>
            <header>
                <div className='bg bg-blue-600 w-screen h-16 py-2 px-6'>
                    <div className='flex justify-between items-center py-2 w-full'>
                        <span className='mx-10'>
                            <a href="/">Flipkart</a>
                        </span>
                        <div>
                            <input type="text" onChange={(e) => getText(e.target.value)} placeholder='Seacrch for products, brand & more' value={text} className='h-8 rounded-sm xl:w-[700px] lg:w-[400px] md:w-60' />
                            {
                                text &&
                                <div className='absolute xl:w-[700px] lg:w-[400px] md:w-60'>
                                    <ul className='bg-white'>
                                        {
                                            products.filter(item => item.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map(item => (
                                                <span className='z-40'>
                                                    <Link to={`product/${item.id}`}
                                                        onClick={() => { setText('') }}>
                                                        <li className='hover:bg-blue-500 py-1'>{item.title.longTitle}</li>
                                                    </Link>
                                                    <hr></hr>
                                                </span>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                        <span>
                            <ul className='flex gap-9 mx-2'>
                                {
                                    account ? < ProfileLogout account={account} setAccount={setAccount} />
                                        :
                                        <li><LoginDialogue /></li>
                                }
                                <Link to={'cart'}>
                                    <li>Cart</li>
                                </Link>
                                <li className='w-max'><a href="">Become Seller</a></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
