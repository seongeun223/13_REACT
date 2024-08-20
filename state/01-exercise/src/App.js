import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  // const [menuprice, setMenuPrice] = useState('');
  const [menu, setMenu] = useState({
    menuName: '열무김치라떼',
    menuPrice: 4500,
    category: '커피',
    orderableStatus: 'Y'
  })

  const onClickHandler = e => {
    const menu2 = {...menu};
    menu2.menuName = '바닐라플랫화이트';

    setMenu(menu2);
  }


  // 메뉴 변경 버튼을 클릭하면 menuName -> '바닐라 플렛 화이트'
  return (
    <div>
      <div className='black-nav'>
        <h1>메뉴리스트</h1>
      </div>
      <div className='menu'>
        <h1>메뉴명 : {menu.menuName}</h1>
        <h2>가격 : {menu.menuPrice}</h2>
        <h3>카테고리 : {menu.category}</h3>
        <h4>주문가능여부 : {menu.orderableStatus}</h4>
        

        <button onClick={onClickHandler}>메뉴변경</button>
      </div>
    </div>
  );
}

export default App;
