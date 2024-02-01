import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.less'
// import Demo from './components/hookCom_memo/Demo2.jsx'
import Vote from './components/contextCommunicate/classCom/Vote.jsx'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      {/* <div> */}
      {/* <Dialog title='编辑对话框' content='我是内容'>
    <div slot='footer'>页脚</div>
  </Dialog>
  <VoteFn></VoteFn> */}
      {/* <VoteClass title={'react 学习'}></VoteClass> */}
      {/* </div> */}
      <Vote x={20} y={30}></Vote>
    </ConfigProvider>
  // </React.StrictMode >

);

