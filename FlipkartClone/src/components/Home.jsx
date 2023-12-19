import React, { useEffect } from 'react'
// import Navbar from './Navbar'
import ItemsTop from './ItemsTop'
import Banner from './Banner'
import Slide from './Slide'
import { getProducts } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import BigPhotos from './BigPhotos'
import Donation from './Donation'

const Home = () => {

    const { products } = useSelector(state => state.getProducts)

    console.log(products);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div>
            {/* <Navbar /> */}
            <ItemsTop />
            <Banner />
            <Slide products={products} title="Deal of the Day" timer={true} />
            <BigPhotos />
            <Slide products={products} title="Discounts for you" timer={false} />
            <Slide products={products} title="Suggested Items" timer={false} />
            <Donation />
            <Slide products={products} title="Top Selections" timer={false} />
            <Slide products={products} title="Seasons's Top Picks" timer={false} />
        </div>
    )
}

export default Home
