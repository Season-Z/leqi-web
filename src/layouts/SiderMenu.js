import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import withRouter from 'umi/withRouter';
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
      children.push(
        <MenuItem key={value.path}>
          <Icon type={value.icon} />
          <span>{value.name}</span>
        </MenuItem>,
      );
    }
  };

  list.forEach(renderMenu);

  return children;
};

const SiderMenu = memo(function SiderMenu(props) {
  const handleChangeMenu = ({ key }) => {
    props.history.push(key);
  };

  return (
    <React.Fragment>
      <Menu theme="dark" mode="inline" onClick={handleChangeMenu}>
        {renderSiderMenu(routes)}
      </Menu>
    </React.Fragment>
  );
});

SiderMenu.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SiderMenu);
