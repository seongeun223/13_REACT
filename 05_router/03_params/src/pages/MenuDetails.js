import { useParams } from "react-router-dom";

function MenuDetails() {

    const {menuCode} = useParams();

    console.log(menuCode);
    // menuCode에 따라 유동적으로 처리를 할 수 있다.

    return(
        <>
            <h2>메뉴 상세 설명</h2>
        </>
    )
}

export default MenuDetails;