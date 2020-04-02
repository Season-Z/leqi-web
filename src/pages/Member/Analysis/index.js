/**
 * 数据分析
 */
import React, { useState } from 'react';
import { Row, Col, Radio, Divider } from 'antd';
import PieChart from './PieChart';

import styles from './index.less';

function Analysis() {
  const [range, setRange] = useState('a');
  const onChangeRange = e => {
    setRange(e.target.value);
  };

  return (
    <div>
      <Row>
        <Col span={8}>
          <span className={styles.nameKey}>总资产：</span>
          <span className={styles.nameValue}>35876</span>
          <span>元</span>
        </Col>
        <Col span={12}>
          <span className={styles.nameKey}>证券资产：</span>
          <span className={styles.nameValue}>35876</span>
          <span>元</span>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <span className={styles.nameKey}>持仓盈亏：</span>
          <span className={`${styles.nameValue} ${styles.green}`}>35876</span>
          <span>元</span>
        </Col>
        <Col span={12}>
          <span className={styles.nameKey}>当日盈亏：</span>
          <span className={`${styles.green} ${styles.nameValue}`}>35876</span>
          <span>元</span>
        </Col>
      </Row>
      <Divider />
      <div className="mTop16">
        <Radio.Group onChange={onChangeRange} value={range}>
          <Radio.Button value="a">本月</Radio.Button>
          <Radio.Button value="b">半年</Radio.Button>
          <Radio.Button value="c">一年</Radio.Button>
          <Radio.Button value="d">自定义</Radio.Button>
        </Radio.Group>
      </div>
      <PieChart />
    </div>
  );
}

export default Analysis;
