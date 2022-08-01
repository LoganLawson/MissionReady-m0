import { useState } from "react";
import "../styles/ImageBlock.css";

export default function(props) {
    return (
        <div className='block'>
            <div className='block-image'>
                <img src={props.imageSource}/>    
            </div>
            <div className='block-text'>
                <span className='block-text-heading'>Lorem Ipsum</span><br></br>
                <span className='block-lower-text'>something or other</span>
            </div>
        </div>
    )
}