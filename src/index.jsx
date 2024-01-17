import React from 'react';
import ReactDOM from 'react-dom/client';
import Dialog from './components/Dialog';
import VoteFn from './components/VoteFn'
// import VoteClass from './components/VoteClass'
import VoteClass from './components/Vote2'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div>
  {/* <Dialog title='编辑对话框' content='我是内容'>
    <div slot='footer'>页脚</div>
  </Dialog>
  <VoteFn></VoteFn> */}
  <VoteClass title={'react 学习'}></VoteClass>
 </div>
 </>
);

