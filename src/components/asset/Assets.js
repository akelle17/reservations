import React, { useEffect, useContext } from 'react';
import { Table } from 'antd';

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

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        }
    ];

    return (
        <>
            <h1>Assets</h1>
            <Table dataSource={assets} columns={columns} />
        </>
    );
};

export default Assets;