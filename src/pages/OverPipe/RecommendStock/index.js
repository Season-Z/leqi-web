/**
 * 超管列表 -- 荐股
 */
import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTable';
import RecommendStockModal from './RecommendStockModal';
import MoreModal from './MoreModal';

function RecommendStock() {
  const [visible, setVisible] = useState(false);
  const [moreVisible, setMoreVisible] = useState(false);

  const create = () => setVisible(true);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const closeMoreModal = useCallback(() => {
    setMoreVisible(false);
  }, []);

  const columns = [
    {
      title: '推荐股代码',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '推荐股名称',
      dataIndex: 'asdasd',
      key: 'asdasd',
    },
    {
      title: '推荐时间',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
        <>
          <a>撤回推荐</a>
          <a>更多</a>
        </>
      ),
    },
  ];
  return (
    <div>
      <Button type="primary" className="mBottom16" onClick={create}>
        新建推荐股票
      </Button>
      <CommonTable columns={columns} />
      {visible && <RecommendStockModal visible={visible} closeModal={closeModal} />}
      {moreVisible && <MoreModal visible={moreVisible} closeModal={closeMoreModal} />}
    </div>
  );
}

export default RecommendStock;
