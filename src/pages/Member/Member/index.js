/**
 * 会员列表
 */
import React from 'react';
import CommonTable from '@/components/CommonTable';
import SearchForm from './SearchForm';

function Member(props) {
  const columns = [
    {
      title: '会员名称',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '会员绑定微信号',
      dataIndex: 'asdasd',
      key: 'asdasd',
    },
    {
      title: '联系方式',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '会员等级',
      dataIndex: 'sdfsf',
      key: 'sdfsf',
    },
    {
      title: '相关',
      dataIndex: 'dsfsd',
      key: 'dsfsd',
      render: (_, record) => (
          <>
            <a>关注</a>
            <a>购买</a>
            <a>数据分析</a>
          </>
        ),
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
          <>
            <a>启用</a>
            <a>禁用</a>
          </>
        ),
    },
  ];
  return (
    <div>
      <SearchForm />
      <CommonTable columns={columns} />
    </div>
  );
}

export default Member;
