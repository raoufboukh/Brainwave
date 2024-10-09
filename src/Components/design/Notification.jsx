import React from 'react'
import { notification1 } from '../../assets';
import { notificationImages } from '../constants';

const Notification = ({className}) => {
    return (
        <div className={`${className || ''}`}>
            <div className='w-14 h-14 overflow-hidden rounded-lg'>
                <img src={notification1} alt="" />
            </div>
            <div>
                <p className='text-white text-lg font-bold'>Code generation</p>
                <div className='flex gap-7 items-center mt-1'>
                    <div className='flex gap-1'>
                        {notificationImages.map((item,index) => {
                            return(
                                <div key={index} className='rounded-full w-5 h-5 overflow-hidden'>
                                    <img src={item} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <p className='text-gray-500'>1m ago</p>
                </div>
            </div>
        </div>
    )
}

export default Notification;
