import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Row, Col } from 'antd';
import AddAssetModalForm from './AddAsset';

import { GlobalContext } from '../../context/GlobalState';

const Assets = () => {
    const { assets, addAsset, getAssets } = useContext(GlobalContext);
    const [visible, setVisible] = useState(false);

    const onCreate = values => {
      setVisible(false);
      addAsset(values);
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
        },
        {
          title: 'Edit',
          dataIndex: '_id',
          key: '_id',
          render: (id) => <Link to={`/assets/detail/${id}`}>Edit</Link> 
        }
    ];

    return (
        <>
          <Row align="middle">
            <Col span={20}>
              <h1>Assets</h1>
            </Col>
            <Col span={4}>
              <Button      
                type="primary"
                onClick={() => {
                  setVisible(true);
                }}>
                Add Asset
              </Button>
            </Col>
          </Row>
          <Row justify="left"> 
            <Col span={12}>
              <Table dataSource={assets} columns={columns} />
            </Col>
          </Row>
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