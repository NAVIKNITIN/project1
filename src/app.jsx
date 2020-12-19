import React from 'react';
import faker from 'faker';
import Usercard from './user-card';
import Button from "./button";


const App = () => {
    return(
        <React.Fragment>
        <div className="container-md-4" >
            
            <div >
            
            <Usercard name="jethalal" role="bussinessman"  imgurl={faker.image.cats()} />
            
            <Usercard name="iyer" role="scientist" imgurl={faker.image.cats()}/>
            <Usercard name="tarak mehta" role="writer" imgurl={faker.image.cats()}/>
            </div>
            
        </div>
        </React.Fragment>
    )
};
export default App;
