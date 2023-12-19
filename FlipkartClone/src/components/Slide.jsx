import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom';

const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
const timerSvg = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg'

// import { products } from './Home'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Slide = ({ products, title, timer }) => {

    const renderer = ({ hours, minutes, seconds }) => {
        return <span>{hours}:{minutes}:{seconds}</span>

    }

    return (
        <div className="my-6">
            <div className='mx-10'>
                <div className='border bg-white rounded-md'>
                    <div className='flex justify-between items-center'>
                        <span className='flex items-center'>
                            <span className='px-8 font-semibold text-3xl'>{title}</span>

                            {timer &&
                                <>
                                    <span><img className='px-2 pt-1' src={timerSvg} alt="" /></span>
                                    <span className='text-lg pt-1'><Countdown date={Date.now() + 4.3e+7} renderer={renderer} /></span>
                                </>}
                        </span>

                        <span className='mx-5 my-2 border text-sm text-white'><button className='bg-blue-600 px-4 py-2 rounded-sm'>VIEW ALL</button></span>
                    </div>
                    <hr></hr>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={false}
                        infinite={true}
                        autoPlay={true}
                        // centerMode={true}
                        autoPlaySpeed={4000}

                    >
                        {

                            products.map(product => (
                                <div className='px-5'>
                                    <div className="text-center mt-4 mb-2 px-4 w-40 h-[250px]">
                                        <Link to={`product/${product.id}`}>
                                            <img className='h-40' src={product.url} alt="product" />
                                            <ul className='pt-2'>
                                                <li className='font-medium text-sm pb-1'>{product.title.shortTitle}</li>
                                                <li className='text-green-600 text-sm pb-1'>{product.discount}</li>
                                                <li className='text-xs text-gray-500'>{product.tagline}</li>
                                            </ul>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default Slide
