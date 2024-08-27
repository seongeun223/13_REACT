import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/MyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='login' element={<Login />} />
            <Route path='mypage' element={<Mypage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
