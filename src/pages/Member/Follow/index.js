/**
 * 会员列表 -- 关注股票
 */
import React from 'react';
import CommonTable from '@/components/CommonTable';

function Follow(props) {
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
      title: '股票分类',
      dataIndex: 'sdfsf',
      key: 'sdfsf',
    },
    {
      title: '当前股价',
      dataIndex: 'dsfsd',
      key: 'dsfsd',
    },
    {
      title: '涨幅',
      dataIndex: 'nnn',
      key: 'nnn',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => <a>推荐</a>,
    },
  ];
  return (
    <div>
      <CommonTable columns={columns} />
    </div>
  );
}

export default Follow;
