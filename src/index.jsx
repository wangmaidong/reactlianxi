import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.less'
import Demo from './components/hookCom/Demo9.jsx'
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
      <Demo x={20} y={30}></Demo>
    </ConfigProvider>
  // </React.StrictMode >

);

