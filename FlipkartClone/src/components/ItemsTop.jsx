import React from 'react'
import { navData } from '../constants/data'

const ItemsTop = () => {
    return (
        <div className='py-4 mx-11 px-1'>
            <div className='flex gap-10 overflow-x-auto overflow-y-hidden justify-center'>
                {
                    navData.map(items => (
                        <div className='hover:cursor-pointer hover:translate-y-1'>
                            < img src={items.url} alt="" className='w-[70px]' />
                            <p className='text-center'>{items.text}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default ItemsTop
