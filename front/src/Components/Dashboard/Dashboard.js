import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import subscriptions from '../../subscription.json';
import offers from '../../offers.json';

function Dashboard() {

    const data = subscriptions.subscriptions;
    const dataOffers = offers.offers;

    const endOfSubscription = (startDate, engagement) => {
        const formatStartDate = new Date(startDate);
        const endDate = new Date(formatStartDate.setMonth(formatStartDate.getMonth() + engagement));
        return endDate.toDateString();
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subscription</th>
                            <th>start date</th>
                            <th>End of Subscription</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map(user =>
                            <tr key={user.id}>
                                <td>{user.userName}</td>
                                {dataOffers ? dataOffers.map(findTitle => 
                                                              findTitle.id === user.offerId ?
                                                              <td key={findTitle.id}>{findTitle.title}</td>
                                                              : null) 
                                : <td>No Offers</td>}
                                <td>{user.offerId}</td>
                                <td>{new Date(user.dateSubscription).toDateString()}</td>
                                {dataOffers ? dataOffers.map(endSubscription => 
                                                             endSubscription.id === user.offerId ?
                                                             <td key={endSubscription.id}>{endOfSubscription(user.dateSubscription, endSubscription.engagement)}</td> : null)
                                : <td></td>}
                                {dataOffers ? dataOffers.map(subscription =>
                                                             subscription.id === user.offerId ?
                                                             <td key={subscription.id}>{subscription.price}</td> : null
                                ) : 
                                <td>Unsubscribe</td>}
                                </tr>
                        ) : <div>No User</div>}
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