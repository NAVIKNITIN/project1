import React from 'react';

import Avatar from './avatar';

const Usercard = (props) =>{
    console.log(props);
    return (
        <>
        
            <div className = "row" style={{padding:20}}>
                <div className = "col-md-6">
                    <div className = "card text-left">

                        <Avatar img={props.imgurl}/>
                        
                        <div className="card-body">
                        <p>{props.role}</p>
                        </div>
                        <button type="button" className="btn btn-outline-primary">
                           {props.name}
                        </button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Usercard;
