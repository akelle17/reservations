import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Row, Col, Descriptions } from 'antd';

import { GlobalContext } from '../../context/GlobalState';

const AssetDetails = (props) => {
  const { asset, getAsset, deleteAsset } = useContext(GlobalContext);

  const { id } = useParams();

  const removeAsset = () => {
    console.log('Test delete.');
    deleteAsset(id); 
  }

  useEffect(() => {
    getAsset(id);
  }, [])

  if (!asset) {
    return (
        <div>Loading asset...</div>
    )
  }

  return (
    <>
      <Row align="middle">
        <Col span={20}>
          <h1>Asset Details</h1>
        </Col>
        <Col span={4}>
          <Button      
            type="primary"
            onClick={() => {
              removeAsset();
            }}>
            Delete
          </Button>
        </Col>
      </Row>
      <Row justify="left"> 
        <Col span={24}>
          <p>Asset id: {asset._id}</p>
          <Descriptions title="Asset Info">
            <Descriptions.Item label="AssetName">{asset.name}</Descriptions.Item>
            <Descriptions.Item label="AssetType">{asset.type}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
}

export default AssetDetails;