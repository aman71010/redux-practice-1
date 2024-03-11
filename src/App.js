import { useSelector } from 'react-redux';

// import Counter from './components/Counter';
// import { store } from './store/index';
// import CounterClassBased from './components/Counter-class-based';
import Counter from './components/CounterReduxToolkit';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    // <Provider store={store}>
    //   <Counter />
    //   <CounterClassBased />
    // </Provider>

    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
