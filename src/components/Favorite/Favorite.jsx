import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

function Favorite() {
    const dispatch = useDispatch();

    const favoriteReducer = useSelector(store => store.favoriteReducer);
    const categoryReducer = useSelector(store => store.categoryReducer);

    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        getFavoritesTable();
        getCategoryTable();
        console.log('in use effect');
    }, [])
 
 
    // GET request on page load to see favorites table from database
    const getFavoritesTable = () => {
        console.log('favoritesTable');
        dispatch({type: 'FETCH_FAVORITE'});
    }
    // GET request on page load to see categories table from database
    const getCategoryTable = () => {
        console.log('getCategoryTable');
        dispatch({type: 'FETCH_CATEGORY'});
    }
    // PUT request on category select / button click
    const changeCategory = (pictureId) => {
        console.log('trying to change category');
        dispatch({type: ''})
    }


    return (

        <ul>
        {favoriteReducer.map(gif => {
            return (
                <li key={gif.id}><img src={gif.url} width="30%"/>
                <select onChange={(event)=>{setNewCategory(category.name)}}>
                    <option value="blank">------</option>
                    {categoryReducer.map(category => {
                        return ( <option key={category.id} value={category.name}>{category.name}</option>)
                    })}
                </select>
                </li>
            )
        })}
        </ul>

    )

}

export default Favorite