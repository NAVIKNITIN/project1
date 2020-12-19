
import React from 'react';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Avatar from './avatar';
import  Button from "./button";
const Usercard = (props) =>{
    console.log(props);
    return (
        <>
        
            <div className = "row" style={{padding:20}}>
                <div className = "col-md-6">
                    <div className = "card text-left">
                        
                        
                        <Avatar img={props.imgurl}/>
                        
                        <div className="card-body">


                        <h2>{props.name}</h2>
                        <p>{props.role}</p>
                        <Button/>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Usercard;
