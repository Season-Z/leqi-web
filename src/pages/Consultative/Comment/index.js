/**
 * 直播管理-评论
 */
import React from 'react';
import CommonTable from '@/components/CommonTable';

function Comment(props) {
  const columns = [
    {
      title: '评论内容',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '评论人',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '时间',
      dataIndex: 'sad',
      key: 'sad',
    },
    {
      title: '评论状态',
      dataIndex: 'stasadasdtus',
      key: 'stasadasdtus',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
          <>
            <a>禁用</a>
            <a>回复</a>
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

export default Comment;
