import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { TasksProvider } from './context/myListContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TasksProvider>
      <App />
    </TasksProvider>
  </Provider>
);
