import { useReducer, useContext, useEffect, createContext } from 'react';

const initialState = {
    games: [],
    page: 0,
    titleParam: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_GAMES':
        return { ...state, games: action.payload };
        case 'SET_PAGE':
        return { ...state, page: action.payload };
        case 'SET_TITLE_PARAM':
        return { ...state, titleParam: `&title=${action.payload}` };
        default:
        return state;
    }
}

const PageContext = createContext()

export function PageProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getGames(){
            fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=6&pageNumber=${state.page}${state.titleParam}`).
            then((res) => res.json()).
            then((res) => {
                dispatch({ type: 'SET_GAMES', payload: res});
                //console.log(res)
            });
        }
        getGames();
        window.scrollTo(0, 0);
    }, [state.page, state.titleParam]);

    return (
        <PageContext.Provider value={{ state, dispatch }}>
            {children}
        </PageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePageContext = () => useContext(PageContext);