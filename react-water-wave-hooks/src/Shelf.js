import React from 'react'
import Cards from './Cards'

export default function Shelf(props) {
    return (
        <div className='shelf-div'>
            <div className='shelf'>
                <div className='items'>
                    {props.props.map((item)=> (
                        <Cards props={item} key={item.id} addCartItem={props.addCartItem} call={props.call}/>
                    ))}
                </div>
                <div className='view-all-button'>View all &nbsp; &rarr;</div>
            </div>
        </div>
    )
}
