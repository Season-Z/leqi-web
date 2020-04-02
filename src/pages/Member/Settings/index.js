/**
 * 会员配置
 */
import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import CommonTable from '@/components/CommonTable';
import SettingsModal from './SettingsModal';

function Settings(props) {
  const [visible, setVisible] = useState(false);

  const create = () => setVisible(true);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const columns = [
    {
      title: '会员名称',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '会员权限',
      dataIndex: 'asdasd',
      key: 'asdasd',
    },
    {
      title: '会员价位',
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
          </>
        ),
    },
  ];
  return (
    <div>
      <Button type="primary" className="mBottom16" onClick={create}>
        新建会员
      </Button>
      <CommonTable columns={columns} />
      {visible && <SettingsModal visible={visible} closeModal={closeModal} />}
    </div>
  );
}

export default Settings;
