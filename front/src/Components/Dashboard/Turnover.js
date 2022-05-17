import React from 'react';
import { Button } from 'react-bootstrap';
import { endOfSubscription } from '../../utils/utilities';
// import subscription from '../../subscription.json';

function Turnover() {

    // const data = subscription;

    // const handleClick = (e) => {
    //     e.prevent.default();
    //     let counter = 0;

    //     data?.users.map(user => {
    //         if (user.offerId){
    //             return data?.subscriptions.map(sub => {
    //                 if (sub.id === user.id){
    //                     counter += sub.price;
    //                 }
    //                return counter; 
    //             })
    //         }
    //         return null;
    //     })
    // }


    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <h2>Calculer le CA</h2>
            </div>
            <form className="d-flex justify-content-center">
                <input type="date" className='form-date' value={Date.now()} onChange />
                <input type="date" className='form-date' />
                <Button variant="primary" className='form-date'>Calculer</Button>
            </form>
        </div>
    )
}

export default Turnover;