import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../constants/data";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Banner = () => {
    return (
        <div className="my-6 w-screen">
            <Carousel
                swipeable={true}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                responsive={responsive}>
                {
                    bannerData.map(data => (
                        <img className="px-10" src={data.url} alt="" />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Banner
