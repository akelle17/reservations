import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

class SidebarNav extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
        <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.Item key="1">
                <MailOutlined />
                <span>Home</span>
                <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
                <AppstoreOutlined />
                <span>Reservations</span>
                <Link to="/reservations" />
            </Menu.Item>
            <Menu.Item key="3">
                <SettingOutlined />
                <span>Admin</span>
                <Link to="/admin" />
            </Menu.Item>
        </Menu>
    );
  }
}

export default SidebarNav;