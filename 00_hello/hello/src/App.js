import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>menu!</h1>
      <MenuInfo/>
      <MenuInfo2/>
    </div>
  );
}

const menu = {
  name: '열무김치라떼',
  price: 5500,
  category: '디저트',
  orderableStatus: 'Y',
}

const menu2 = {
  name: '곱창국수',
  price: 17500,
  category: '식사',
  orderableStatus: 'Y',
}
  

function NameCard() {
  return <h1>{menu.name}</h1>
}
function PriceCard() {
  return <h2 style={{ color: 'purple' }}>{menu.price}</h2>
}


function CategoryCard() {
  return <h3 style={{ color: 'red' }}>{menu.category}</h3>
}

// EmailCard 컴포넌트 user.email style -> 바탕색을 yellow
function OrderableStatusCard() {
  return <h3 style={{ backgroundColor: 'yellow' }}>{menu.orderableStatus}</h3>
}

function MenuInfo() {
  return (
      <div style={{width: 300, border: '1px solid black', padding: 10}}>
          <NameCard/>
          <PriceCard/>
          <CategoryCard/>
          <OrderableStatusCard/>
      </div>
  )
}

function NameCard2() {
  return <h1>{menu2.name}</h1>
}
function PriceCard2() {
  return <h2 style={{ color: 'purple' }}>{menu2.price}</h2>
}


function CategoryCard2() {
  return <h3 style={{ color: 'red' }}>{menu2.category}</h3>
}

// EmailCard 컴포넌트 user.email style -> 바탕색을 yellow
function OrderableStatusCard2() {
  return <h3 style={{ backgroundColor: 'yellow' }}>{menu2.orderableStatus}</h3>
}

function MenuInfo2() {
  return (
      <div style={{width: 300, border: '1px solid black', padding: 10}}>
          <NameCard2/>
          <PriceCard2/>
          <CategoryCard2/>
          <OrderableStatusCard2/>
      </div>
  )
}

export default App;
