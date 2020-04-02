/**
 * 评论敏感词管理
 */
import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

function SensitiveWords(props) {
  return (
    <div>
      <TextArea rows={10} />
      <div className="mTop16">每个敏感词之间用，号区分。</div>
      <div className="alignCenter">
        <Button type="primary">保存</Button>
      </div>
    </div>
  );
}

export default SensitiveWords;
