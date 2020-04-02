/**
 * 栏目管理
 */
import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTable';
import ColumnsModal from './ColumnsModal';

function Column(props) {
  const [visible, setVisible] = useState(false);

  const createColumns = () => setVisible(true);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const columns = [
    {
      title: '栏目名称',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
          <>
            <a>编辑</a>
            <a>禁用</a>
          </>
        ),
    },
  ];
  return (
    <div>
      <Button type="primary" className="mBottom16" onClick={createColumns}>
        新建栏目
      </Button>
      <CommonTable columns={columns} />
      {visible && <ColumnsModal visible={visible} closeModal={closeModal} />}
    </div>
  );
}

export default Column;
