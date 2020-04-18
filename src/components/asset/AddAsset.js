import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography } from 'antd';

const AddAssetModalForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const onOk = () => {
    form.submit();
  }

  return (
    <Modal 
      title="Add Asset" 
      okText="Create"
      visible={visible} 
      onOk={onOk} 
      onCancel={onCancel}
      onOk={()=> {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values)
          })
          .catch((err) => {
            console.log('validate failed: ', err)
          })
      }}>
      <Form form={form} layout="vertical" name="assetForm">
        <Form.Item
          name="name"
          label="Asset name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddAssetModalForm;