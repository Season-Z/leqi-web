import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import routers from '../utils/menu';
import styles from './index.less';

export default function Headers(props) {
  const { location, history } = props;
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  function changeKeys() {
    const name = location.pathname.split('/')[1];
    const { path } = routers.find(v => v.path.includes(name)) || {};
    setSelectedKeys(path);
  }

  useEffect(() => {
    changeKeys();
  }, [location.pathname]);

  const handleChangeMenu = ({ key }) => {
    history.push(key);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>{/* 股票管理平台 */}</div>
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={handleChangeMenu}
        selectedKeys={selectedKeys}
        style={{ lineHeight: '64px' }}
      >
        {routers.map(val => (
          <Menu.Item key={val.path}>{val.name}</Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
