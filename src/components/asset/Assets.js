import React, { useState, useEffect, useContext } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography, Table } from 'antd';
import AddAssetModalForm from './AddAsset';

import { GlobalContext } from '../../context/GlobalState';

const Assets = () => {
    const { assets, getAssets } = useContext(GlobalContext);
    const [visible, setVisible] = useState(false);

    const onCreate = values => {
      setVisible(false);
      console.log(values);
    };

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
            <Button      
              type="primary"
              onClick={() => {
                setVisible(true);
              }}>
              Add Asset
            </Button>
            <Table dataSource={assets} columns={columns} />
            <AddAssetModalForm 
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
        </>
    );
};

export default Assets;