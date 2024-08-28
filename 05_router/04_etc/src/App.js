import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mypage' element={<Mypage />} />
          {/* 404 에러와 관련된 페이지 추가 */}
          <Route path='*' element={<Error />} />
        </Route>
              {/* 여기에 위치하면 레이아웃을 먹지 않는다. 가능은 하다. */}
              {/* 404 에러와 관련된 페이지 추가 */}
              {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
