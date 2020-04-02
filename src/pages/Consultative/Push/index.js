/**
 * 推送管理
 */
import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTable';
import PushModal from './PushModal';

function Push(props) {
  const [visible, setVisible] = useState(false);

  const create = () => setVisible(true);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const columns = [
    {
      title: '推送标题',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '推送关联内容',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '推送对象',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '推送结果',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '推送点击量',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '推送时间',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作员',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
          <>
            <a>查看详情</a>
            <a>编辑</a>
            <a>推送</a>
          </>
        ),
    },
  ];
  return (
    <div>
      <Button type="primary" className="mBottom16" onClick={create}>
        新建推送
      </Button>
      <CommonTable columns={columns} />
      {visible && <PushModal visible={visible} closeModal={closeModal} />}
    </div>
  );
}

export default Push;
