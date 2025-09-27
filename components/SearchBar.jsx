import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import { usePageContext } from '../contexts/MainContext';

export function SearchBar() {
    const { dispatch } = usePageContext();
    const [searchValue, setSearchValue] = useState('');

    return <div className='search-bar'>
        <input type="text" className='search-bar' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button  style={{marginLeft: '1rem'}} onClick={() => {
            if(searchValue == '') {
                alert('Insira um título para realizar a busca!');
            } else {
                dispatch({ type: 'SET_TITLE_PARAM', payload: searchValue });
            }
        }}>
            <SearchIcon />
        </button>
    </div>
}