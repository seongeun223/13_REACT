import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";
import { useEffect, useState } from "react";
import detailStyle from './Menu.module.css';

function MenuDetails() {

    const { menuCode } = useParams();
    // 개발할 때 useState를 빈 객체로 초기화해도 되지만,
    // menu의 형태를 임시로 써 놓으면 도움이 된다.
    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });


    useEffect(
        () => {
            setMenu(getMenuDetail(menuCode))
        }, []
    )
    
    console.log(menu);
    
    return (
        <>
            <div className={detailStyle.MenuDetails}>
                <h2>메뉴 상세 설명</h2>
                <h3>메뉴 이름 : {menu.menuName}</h3>
                <h3>메뉴 가격 : {menu.menuPrice}</h3>
                <h3>메뉴 종류 : {menu.categoryName}</h3>
                <h3>메뉴 설명 : {menu.detail.description}</h3>
            </div>
            <img src={menu.detail.image} style={{ maxWidth: 500 }} />
        </>
    )
}

export default MenuDetails;