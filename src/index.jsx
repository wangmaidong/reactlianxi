import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.less'
// import Demo from './components/hookCom_memo/Demo2.jsx'
import Vote from './components/reduxUse1/Vote.jsx'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN';
const root = ReactDOM.createRoot(document.getElementById('root'));
import ThemeContext from './ThemeContext.js';
import store from './store/index.js'
import { Provider } from 'react-redux';
// root.render(
//     <ConfigProvider locale={zhCN}>
//       <Vote x={20} y={30}></Vote>
//     </ConfigProvider>
// );
// root.render(
//   <ConfigProvider locale={zhCN}>
//     <ThemeContext.Provider
//       value={{
//         store
//       }}
//     >
//       <Vote></Vote>
//     </ThemeContext.Provider>
//   </ConfigProvider>
// );
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Vote></Vote>
    </Provider>
  </ConfigProvider>
)

