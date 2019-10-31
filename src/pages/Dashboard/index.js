import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Divider } from 'antd';
import CardInfo from './CardInfo';
import CurrentPerformance from './CurrentPerformance';
import PerformanceSummary from './PerformanceSummary';

function Dashboard(props) {
  return (
    <React.Fragment>
      <Alert
        message="温馨提示：平台储备金低于100元，且平台授权时间少于30天，为了不影响平台的正常运营，请尽快充值！咨询热线：15680510230(卢) 18302836187(刘)"
        type="info"
      />
      <CardInfo />
      <Divider />
      <CurrentPerformance />
      <Divider />
      <PerformanceSummary />
    </React.Fragment>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
