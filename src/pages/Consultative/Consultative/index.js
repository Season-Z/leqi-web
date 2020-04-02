/**
 * 咨讯管理
 */
import React, { useCallback, useState } from 'react';
import CommonTable from '@/components/CommonTable';
import DropdownMenu from '@/components/DropdownMenu';
import SearchForm from './SearchForm';
import ArticleModdal from './ArticleModal';

function Consultative(props) {
  const [visible, setVisible] = useState(false);

  const createArticle = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

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
      render: (_, record) => {
        const dataList = [
          {
            event: () => this.editScript(record.id),
            name: '编辑',
          },
          {
            event: () => this.publishScript(record),
            name: '删除',
          },
          {
            event: () => this.unPublishScript(record),
            name: '启用',
          },
          {
            event: () => this.unPublishScript(record),
            name: '禁用',
          },
          {
            event: () => this.unPublishScript(record),
            name: '评论',
          },
        ];
        return <DropdownMenu dataList={dataList} num={3} />;
      },
    },
  ];

  return (
    <div>
      <SearchForm createArticle={createArticle} />
      <CommonTable columns={columns} />
      {visible && <ArticleModdal visible={visible} closeModal={closeModal} />}
    </div>
  );
}

export default Consultative;
