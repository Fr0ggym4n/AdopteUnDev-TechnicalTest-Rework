import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import subscriptions from '../../subscription.json';

function Dashboard() {

    const data = subscriptions.subscriptions;

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
                        { data ? data.map(user => 
                            <tr key={user.id}>
                                <td>{user.userName}</td>
                                <td>{user.offerId}</td>
                                <td>{user.dateSubscription}</td>
                                <td>{user.endOfSubscription}</td>
                                <td>{}</td>
                            </tr>
                        ) : <div>No User</div> }
                        {/* {data ? data?.map((user) => {
                            if (user.offerId) {
                                return data?.subscriptions.map((sub) => {
                                    if (sub.id === user.offerId) {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{sub.duration}</td>
                                            </tr>



            ----------------------------TODO :---------------

                                            Prompt the price
                                            and la date de fin.

                                        )
                                    }
                                    return null;
                                });
                            }
                            return null;
                        }) : null} */}
                    </tbody>
                </Table>
            </div>
            <div>
                {/* <Button variant='primary'>Calculer le CA</Button> */}
                <Link to='/turnover'>Calculate turnover</Link>
            </div>
        </>
    )
}

export default Dashboard