import Index from './src/Index';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
