import React from 'react'
import fish1 from './fish1.png'

export default function Cards(props) {
    let fish = props.props;
    return (
        <div className='card-div'>
        <div className='card-content'>
            <div style={{width: '160px', height: '100px', backgroundImage: `url(${fish.image})`,backgroundSize: 'contain', backgroundRepeat: 'no-repeat' , margin: '0 auto', marginBottom: '25px'}}></div>
            <div>
                <h3>{fish.name}</h3>
                <div className='stars'>
                    {fish.stars.map((star) => {
                        if(star){
                            return(
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 172 172" style={{ fill: "#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3CBC87"><path d="M35.088,167.184c-0.688,0 -1.376,-0.344 -2.064,-0.688c-1.032,-0.688 -1.72,-2.408 -1.376,-3.784l15.136,-56.416l-45.408,-36.808c-1.376,-0.688 -1.72,-2.408 -1.376,-3.784c0.344,-1.376 1.72,-2.408 3.096,-2.408l58.48,-3.096l20.984,-54.696c0.688,-1.032 2.064,-2.064 3.44,-2.064c1.376,0 2.752,1.032 3.096,2.064l20.984,54.696l58.48,3.096c1.376,0 2.752,1.032 3.096,2.408c0.344,1.376 0,2.752 -1.032,3.784l-45.408,36.808l15.136,56.416c0.344,1.376 0,2.752 -1.376,3.784c-1.032,0.688 -2.752,1.032 -3.784,0l-49.192,-31.648l-49.192,31.648c-0.688,0.688 -1.032,0.688 -1.72,0.688z"></path></g></g></svg>      
                            )
                        }else{
                            return(
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 172 172" style={{ fill: "#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#cccccc"><path d="M35.088,167.184c-0.688,0 -1.376,-0.344 -2.064,-0.688c-1.032,-0.688 -1.72,-2.408 -1.376,-3.784l15.136,-56.416l-45.408,-36.808c-1.376,-0.688 -1.72,-2.408 -1.376,-3.784c0.344,-1.376 1.72,-2.408 3.096,-2.408l58.48,-3.096l20.984,-54.696c0.688,-1.032 2.064,-2.064 3.44,-2.064c1.376,0 2.752,1.032 3.096,2.064l20.984,54.696l58.48,3.096c1.376,0 2.752,1.032 3.096,2.408c0.344,1.376 0,2.752 -1.032,3.784l-45.408,36.808l15.136,56.416c0.344,1.376 0,2.752 -1.376,3.784c-1.032,0.688 -2.752,1.032 -3.784,0l-49.192,-31.648l-49.192,31.648c-0.688,0.688 -1.032,0.688 -1.72,0.688z"></path></g></g></svg>
                            )
                        }
                    })}
                </div>
                <div className='colors'>
                    {fish.colors.map((color)=>(
                        <span className='fish-colors-span' style={{backgroundColor: color}}></span>
                    ))}
                </div>
            </div>
         </div>
         <div className='buy'>
             <div className='price'>{fish.price}</div>
             <div className='add-to-cart' onClick={(e)=> props.addCartItem(fish)}>{`${props.call}`}</div>
         </div>

        </div>
    )
}
