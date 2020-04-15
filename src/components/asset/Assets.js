import React, { useEffect, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

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
                            <tr id={asset._id} key={asset._id}>
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