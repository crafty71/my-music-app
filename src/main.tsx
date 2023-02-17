import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import '../src/assets/css/index.css';
import App from './App';
import { store } from './store';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
