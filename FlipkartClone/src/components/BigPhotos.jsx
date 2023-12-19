import React from 'react'
import { imageURL } from '../constants/data'

const BigPhotos = () => {
    return (
        <div className='flex gap-1 ml-10 mr-12 my-12 rounded-sm justify-between'>

            {
                imageURL.map(items => (
                    < img src={items} alt="" className='w-1/3' />
                ))
            }
        </div>

    )
}

export default BigPhotos
