/**
 * 直播管理
 */
/**
 * 咨讯管理
 */
import React, { useCallback, useState } from 'react';
import CommonTable from '@/components/CommonTable';
import DropdownMenu from '@/components/DropdownMenu';
import SearchForm from './SearchForm';
import LiveModdal from './LiveModal';

function Live(props) {
  const [visible, setVisible] = useState(false);

  const create = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const columns = [
    {
      title: '直播标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '直播状态',
      dataIndex: 'columns',
      key: 'columns',
    },
    {
      title: '是否需要会员',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: '稿件状态',
      dataIndex: 'time',
      key: 'time',
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
            name: '禁用',
          },
          {
            event: () => this.unPublishScript(record),
            name: '评论',
          },
          {
            event: () => this.unPublishScript(record),
            name: '直播',
          },
        ];
        return <DropdownMenu dataList={dataList} num={3} />;
      },
    },
  ];
  console.log(visible);
  return (
    <div>
      <SearchForm create={create} />
      <CommonTable columns={columns} />
      {visible && <LiveModdal visible={visible} closeModal={closeModal} />}
    </div>
  );
}

export default Live;
