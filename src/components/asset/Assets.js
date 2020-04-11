import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';

import config from '../../config/config';

const Assets = () => {
    const { authState } = useOktaAuth();
    const [assets, setAssets] = useState(null);

    useEffect(() => {
        if (authState.isAuthenticated) {
            const { accessToken } = authState;
            fetch(config.resourceServer.assetsUrl, {
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
                    const formattedAssets = response.data.map((asset) => {
                        index += 1;
                        return {
                            name: asset.name,
                            type: asset.type,
                            id: `reservation-${index}`,
                        };
                    });
                    setAssets(formattedAssets);
                    //set failed to false.
                }
            })
            .catch((err) => {
                //set failed 
                console.log(err);
            });
        }
    }, []);

    if (!assets) {
        return (
            <div>Loading assets...</div>
        )
    }

    return (
        <div>
            <div>
                <h1>
                    Assets
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset) => (
                            <tr id={asset.id} key={asset.id}>
                                <td>{asset.name}</td>
                                <td>{asset.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Assets;