import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import ApiService from './services';
import { ApiServiceProvider } from './components/api-service-context/';
import store from './store';

const apiService = new ApiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ApiServiceProvider value={apiService}>
        <Router>
          <App />
        </Router>
      </ApiServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.querySelector('#root')
);
