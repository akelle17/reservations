import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import config from '../../config/config';

const Assets = () => {
    const { assets, getAssets } = useContext(GlobalContext);

    useEffect(() => {
      getAssets();
    }, [])

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