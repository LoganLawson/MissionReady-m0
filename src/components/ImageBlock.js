import { useState } from "react";
import "../styles/ImageBlock.css";

export default function(props) {
    return (
        <div className='block'>
            <div className='block-image'>
                <img src={props.image}/>
            </div>
            <div className='block-text'>
                <span className='block-text-heading'>{props.headerText}</span><br></br>
                <span className='block-lower-text'>{props.bodyText}</span>
            </div>
            <div className='block-cta'>
                <button>Learn more</button>
            </div>
        </div>
    )
}