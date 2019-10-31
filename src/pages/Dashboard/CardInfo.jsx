import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.less';

function CardInfo(props) {
  return (
    <div className={styles.cardInfo}>
      <Row gutter={16}>
        <Col span={6}>
          <div className={styles.cardContent}>
            <img src="http://admin.leqilai.com/assets/icon_hand.png" alt="icon" />
            <ul>
              <li>首页</li>
              <li>
                <Link to="http://u.leqilai.com/index.html?id=197#/" target="_blank">
                  访问
                </Link>
                {'  '}复制
              </li>
            </ul>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.cardContent}>
            <img src="http://admin.leqilai.com/assets/icon_save.png" alt="icon" />
            <ul>
              <li>储备金剩余：</li>
              <li>
                <span style={{ fontSize: '18px', color: 'red' }}>0.01</span>元
              </li>
              <li>
                <Link to="/platform/bill">使用详情</Link>
              </li>
            </ul>
            <Button>充值</Button>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.cardContent}>
            <img src="http://admin.leqilai.com/assets/icon_authorize.png" alt="icon" />
            <ul>
              <li>授权时间：</li>
              <li>
                <span style={{ fontSize: '18px' }}>27</span>天
              </li>
              <li>2019-11-27</li>
            </ul>
            <Button style={{ marginLeft: '10px' }}>续费</Button>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.cardContent}>
            <img src="http://admin.leqilai.com/assets/icon_study.png" alt="icon" />
            <ul>
              <li>学习中心：</li>
              <li>
                <Link to="/platform/bill">点击进入</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

CardInfo.propTypes = {};

export default CardInfo;
