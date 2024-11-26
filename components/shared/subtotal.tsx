import React from 'react'

const subtotal = ({length,totalprice}:{length:number, totalprice:number}) => {
    return (
        <div>
            <h1 className='text-right font-medium'>{`Subtotal (${length} items): `}<span className='font-bold'>{`$${totalprice}`}</span> </h1>

        </div>
    )
}

export default subtotal