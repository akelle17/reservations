import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import { GlobalState } from '../../context/GlobalState';
 
import AddReservation from './AddReservation';

import config from '../../config/config';

const Reservations = () => {
    const { authState } = useOktaAuth();
    const [reservations, setReservations] = useState(null);

    const columns = [
        {
          title: 'Text',
          dataIndex: 'text',
          key: 'text',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        }
    ];

    useEffect(() => {
        if (authState.isAuthenticated) {
            const { accessToken } = authState;
            fetch(config.resourceServer.reservationsUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject();
                }
                return response.json();
            })
            .then((response) => {
                let index = 0;
                if (response.count > 0) {
                    const formattedReservations = response.data.map((reservation) => {
                        const date = new Date(reservation.date);
                        const day = date.toLocaleDateString();
                        const time = date.toLocaleTimeString();
                        index += 1;
                        return {
                            date: `${day} ${time}`,
                            text: reservation.text,
                            id: `reservation-${index}`,
                        };
                    });
                    setReservations(formattedReservations);
                    //set failed to false.
                }
            })
            .catch((err) => {
                //set failed 
                console.log(err);
            });
        }
    }, []);

    if (!reservations) {
        return (
            <div>Loading reservataions...</div>
        )
    }

    return (
        <>
            <h1>Reservations</h1>
            <Table dataSource={reservations} columns={columns} />
            <AddReservation />
        </>
    );
};

export default Reservations;