import React from 'react';
import faker from 'faker';
import Usercard from './user-card'

const App = () => {
    return(
        <React.Fragment>
        <div className="container-md" >
            <Usercard name="jethalal" role="bussinessman" imgurl={faker.image.cats()} />
            <Usercard name="iyer" role="scientist" imgurl={faker.image.cats()}/>
            <Usercard name="tarak mehta" role="writer" imgurl={faker.image.cats()}/>
        </div>
        </React.Fragment>
    )
};
export default App;
