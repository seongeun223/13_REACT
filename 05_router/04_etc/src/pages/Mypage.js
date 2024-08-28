import {Navigate} from 'react-router-dom';

function Mypage() {

    const isLogin = false;

    if(!isLogin) {
        return <Navigate to="/login"/>
    }

    return(
        <>
            <h1>마이페이지</h1>
        </>
    )
}

export default Mypage;