import React, { useState } from 'react';
import { Layout, Icon, Menu, Breadcrumb } from 'antd';
import Headers from './Headers';
import SiderMenu from './SiderMenu';

import styles from './index.less';

const { Header, Sider, Content } = Layout;

export default function BasicLayout(props) {
  const toggleCollapsed = () => {
    // setCollapsed(value => !value);
  };

  return (
    <Layout className={styles.layout}>
      <Header className="header">
        <Headers {...props} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <SiderMenu {...props} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
