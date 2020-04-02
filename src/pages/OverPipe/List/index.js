/**
 * 超管列表
 */
import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTable';
import OverPipeListModal from './OverPipeListModal';

function OverPipeList(props) {
  const [visible, setVisible] = useState(false);

  const create = () => setVisible(true);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '微信号',
      dataIndex: 'asdasd',
      key: 'asdasd',
    },
    {
      title: '是否投顾',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '标签',
      dataIndex: 'ssss',
      key: 'ssss',
    },
    {
      title: '简介',
      dataIndex: 'kkjo',
      key: 'kkjo',
    },
    {
      title: '相关',
      dataIndex: 'hdsbbdsu',
      key: 'hdsbbdsu',
      render: (_, record) => (
          <>
            <a>资讯</a>
            <a>荐股</a>
            <a>直播</a>
          </>
        ),
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
        <>
          <a>禁用</a>
          <a>删除</a>
        </>
      ),
    },
  ];
  return (
    <div>
      <Button type="primary" className="mBottom16" onClick={create}>
        新建超管
      </Button>
      <Button type="primary" className="mg8">
        批量导入
      </Button>
      <Button>导出</Button>
      <CommonTable columns={columns} />
      {visible && <OverPipeListModal visible={visible} closeModal={closeModal} />}
    </div>
  );
}

export default OverPipeList;
