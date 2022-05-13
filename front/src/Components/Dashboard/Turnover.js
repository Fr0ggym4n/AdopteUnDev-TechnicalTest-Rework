import React from 'react';
import { Button } from 'react-bootstrap';
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
        <>
            <div>
                <h2>Calculer le CA</h2>
                <input>Date 1</input>
                <input>Date 2</input>
                <Button variant="primary">Calculer</Button>
            </div>
        </>
    )
}

export default Turnover