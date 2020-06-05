import React from 'react';
import './Show.css';

export default function Show(props){
    return(
        <div>
            <div>
                <button className="showpage" style={{ right: props.right }} onClick={props.handle}>Show Page</button>
                <div className="date">{props.date}</div>
                <div className="city">{props.location}</div>
                <div className="showname">{props.name}</div>  
            </div>
        </div>
    );
}