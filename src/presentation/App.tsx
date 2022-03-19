import React, { FC, useEffect } from 'react';
import '../application/css/main.css';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login';
import AppRoutes from './components/AppRouter/AppRouter';
import { useTypedSelector } from '../application/hooks/useTypedSelector';
import { AuthActionCreators } from '../application/redux/reducers/auth/action-creators';
import { TaskActionCreators } from '../application/redux/reducers/task/action-creators';


const App: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useTypedSelector(state => state.auth);
  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    dispatch(AuthActionCreators.isAuth());
    dispatch(TaskActionCreators.getTask());
  }, []);

  return (
    isAuth
      ?
      <section className="App">
        <Header />
        <div className="content">
          <AppRoutes />
        </div>

      </section>
      :
      <>
        {
          currentUrl === '/registration'
            ?
            <section className="App">
              <AppRoutes />
            </section>
            :
            <section className="App">
              <Login />
            </section>
        }
      </>



  );
}

export default App;
