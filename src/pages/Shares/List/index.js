/**
 * 股票列表
 */
import React from 'react';
import CommonTable from '@/components/CommonTable';
import SearchForm from './SearchForm';

function Shares() {
  const columns = [
    {
      title: '代码',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '股票名称',
      dataIndex: 'columns',
      key: 'columns',
    },
    {
      title: '股票股东号',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: '股票分类',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '当前股价',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '涨幅',
      dataIndex: '按揭单',
      key: '按揭单',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => <a>查看详情</a>,
    },
  ];

  return (
    <div>
      <SearchForm />
      <CommonTable columns={columns} />
    </div>
  );
}

export default Shares;
