/* 초기값 */
const initialState = [
    {
        id: 0,
        name: ''
    }
]
/* 액션 */
// 액션 타입 설정
const GET_POKEMONS = 'pokemons/GET_POKEMONS'

// 포켓몬 관련 액션 함수
const anctions = createActions({
    [GET_POKEMONS]: () => (pay,id)
})
/* 리듀서 */