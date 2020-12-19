import React from "react";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Button =() =>{
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-md-6">
                <div style={{display:'flex' , justifycontent:"space-evenly" }}>
                
                <button type="button" className="btn btn-primary">ACCEPT</button>
                <button type="button" className="btn btn-danger">REJECT</button>
                                        
                            </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Button;