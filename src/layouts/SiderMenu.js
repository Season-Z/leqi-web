import React, { memo, useEffect, useState } from 'react';
import withRouter from 'umi/withRouter';
import { Menu, Icon } from 'antd';
import routes from '../routers';

const { Item: MenuItem, SubMenu } = Menu;

const renderSiderMenu = list => {
  const children = [];

  const renderMenu = value => {
    // 存在子菜单
    if (value.routes) {
      const childRoute = renderSiderMenu(value.routes);

      children.push(
        <SubMenu
          key={value.path}
          title={
            <React.Fragment>
              <Icon type={value.icon} />
              <span>{value.name}</span>
            </React.Fragment>
          }
        >
          {childRoute}
        </SubMenu>,
      );
    } else if (value.component) {
      if (!value.hide) {
        children.push(
          <MenuItem key={value.path}>
            <Icon type={value.icon} />
            <span>{value.name}</span>
          </MenuItem>,
        );
      }
    }
  };

  list.forEach(renderMenu);

  return children;
};

const SiderMenu = memo(props => {
  const { location } = props;
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);
  const [openKeys, setOpenKeys] = useState([]);

  const handleChangeMenu = ({ key }) => {
    props.history.push(key);
    setSelectedKeys([key]);
  };
  const handleOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (!latestOpenKey) {
      return;
    }
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  useEffect(() => {
    const keys = `/${location.pathname.split('/')[1]}`;
    handleOpenChange([keys]);
  }, [location.pathname]);

  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onClick={handleChangeMenu}
      onOpenChange={handleOpenChange}
      width={200}
      style={{ background: '#fff' }}
    >
      {renderSiderMenu(routes)}
    </Menu>
  );
});

export default withRouter(SiderMenu);
