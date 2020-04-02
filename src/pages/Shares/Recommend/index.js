/**
 * 股票推荐
 */
import React from 'react';
import CommonTable from '@/components/CommonTable';

function Recommend() {
  const columns = [
    {
      title: '推荐股代码',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '推荐股名称',
      dataIndex: 'columns',
      key: 'columns',
    },
    {
      title: '推荐买入价',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: '推荐卖出价',
      dataIndex: 'time',
      key: 'time',
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
            <a>修改推荐价</a>
          </>
        ),
    },
  ];

  return (
    <div>
      <CommonTable columns={columns} />
    </div>
  );
}

export default Recommend;
