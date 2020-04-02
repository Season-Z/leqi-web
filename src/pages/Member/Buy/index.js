/**
 * 会员列表 -- 购买的股票
 */
import React, { useState } from 'react';
import CommonTable from '@/components/CommonTable';
import HistoryModal from './HistoryModal';

function Buy(props) {
  const [visible, setVisible] = useState(false);
  const showHistory = () => {
    setVisible(true);
  };
  const columns = [
    {
      title: '代码',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '股票名称',
      dataIndex: 'asdasd',
      key: 'asdasd',
    },
    {
      title: '股票股东号',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '持仓',
      dataIndex: 'sdfsf',
      key: 'sdfsf',
    },
    {
      title: '现价/成本',
      dataIndex: 'dsfsd',
      key: 'dsfsd',
    },
    {
      title: '盈利/盈利率',
      dataIndex: 'nnn',
      key: 'nnn',
    },
    {
      title: '相关',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => <a onClick={showHistory}>购买记录</a>,
    },
  ];
  return (
    <div>
      <CommonTable columns={columns} />
      {visible && <HistoryModal visible={visible} />}
    </div>
  );
}

export default Buy;
