import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Subheading from '@/components/Subheading';

import styles from './index.less';

const CurrentPerformance = memo(function CurrentPerformance(props) {
  return (
    <div className={styles.currentPerformance}>
      <Subheading title="当日业绩" />
      <ul className={styles.content}>
        <li>
          <p>平台订单数量</p>
          <div>
            <span className={styles.number}>0</span>单
          </div>
        </li>
        <li>
          <p>撤销/退款订单数量</p>
          <div>
            <span className={styles.number}>0</span>单
          </div>
        </li>
        <li>
          <p>平台交易额</p>
          <div>
            ¥<span className={styles.number}>0</span>
          </div>
        </li>
        <li>
          <p>平台佣金总额</p>
          <div>
            ¥<span className={styles.number}>0</span>
          </div>
        </li>
      </ul>
    </div>
  );
});

CurrentPerformance.propTypes = {};

export default CurrentPerformance;
