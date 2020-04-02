/**
 * 超管列表 -- 咨讯
 */
import React from 'react';
import CommonTable from '@/components/CommonTable';
import { Button } from 'antd';

function Consultative() {
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '所属栏目',
      dataIndex: 'columns',
      key: 'columns',
    },
    {
      title: '建稿人',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: '发布时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '稿件状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => <a>取消关联</a>,
    },
  ];

  return (
    <div>
      <Button type="primary" className="mBottom16">
        关联资讯
      </Button>
      <CommonTable columns={columns} />
    </div>
  );
}

export default Consultative;
