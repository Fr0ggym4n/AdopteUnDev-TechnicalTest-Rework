import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import { endOfSubscription } from '../../utils/utilities';
import subscriptions from '../../subscription.json';
import offers from '../../offers.json';

function Dashboard() {

    const dataSubscriptions = subscriptions.subscriptions;
    const dataOffers = offers.offers;
    // console.log(dataSubscriptions);
    // console.log(dataOffers);

    const dataJoin = dataSubscriptions?.map(
        subscription => {
            const offer = dataOffers?.filter(
                offer => offer.id === subscription.offerId);
            const offerTitle = offer.length > 0 ? offer[0].title : "unknown";
            const startDate = new Date(subscription.dateSubscription).toDateString();
            let endDate = offer.length > 0 ? endOfSubscription(startDate, offer[0].engagement) : "";
            let background = "";

            if (offer.length === 0) {
                background = "text-danger";
            } else {
                if (endDate < new Date()) {
                    background = "text-muted";
                }
                endDate = endDate.toDateString();
            }

            return {
                background: background,
                subId: subscription.id,
                subUserName: subscription.userName,
                offerTitle: offerTitle,
                startDate: startDate,
                endDate: endDate,
                price: 0,
                totalPrice: 0
            };
        }
    );

    console.log(dataJoin);
    // dataOffers ? dataOffers.map(subscription =>
    //         subscription.id === user.offerId ?
    //             <td key={subscription.id}>{subscription.price}</td> : null
    //     ) :
    //         <td>Unsubscribe</td>

    // {dataOffers ? dataOffers.map(findTitle =>
    //                                     findTitle.id === user.offerId ?
    //                                         <td key={findTitle.id}>
    //                                             {findTitle.title}
    //                                         </td>
    //                                         : null)
    //                                     : <td>No Offers</td>}

    // price et total price
    // + menage
    // Allez au plus simple !
    // jamais plus d'une operation par ligne
    // vaux mieux regénérer le tableau

    return (
        <>
            <div className="d-flex justify-content-center">
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subscription</th>
                            <th>start date</th>
                            <th>End of Subscription</th>
                            <th>price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataJoin.map(join =>
                            <tr className={join.background} key={join.subId}>
                                <td>{join.subUserName}</td>
                                <td>{join.offerTitle}</td>
                                <td>{join.startDate}</td>
                                <td>{join.endDate}</td>
                                <td>{join.price}</td>
                                <td>{join.totalPrice}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <div>
                <Link to='/turnover'>Calculate turnover</Link>
            </div>
        </>
    )
}

export default Dashboard;