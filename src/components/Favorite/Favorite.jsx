import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

function Favorite() {
    const dispatch = useDispatch();

    const favoriteReducer = useSelector(store => store.favoriteReducer);
    const categoryReducer = useSelector(store => store.categoryReducer);

    useEffect(() => {
        getFavoritesTable();
        getCategoryTable();
        console.log('in use effect');
    }, [])

    //   Routes to use
    //  /api/favorite
    //  /api/category
 
 
    // GET request on page load to see favorites table from database
    const getFavoritesTable = () => {
        console.log('favoritesTable');
        dispatch({type: 'FETCH_FAVORITE'});
    }
    // GET request on page load to see categories table from database
    const getCategoryTable = () => {
        console.log('getcategoryTable');
        dispatch({type: 'FETCH_CATEGORY'});
    }
    // PUT request on category select / button click


    return (
        <>
        <ul>
        {favoriteReducer.map((gif, index) => {
            return <li key={index}><img src={gif} width="30%"/></li>
        })}
        </ul>
            {/* map favorites database w/ a map of the category */}
        </>
    )

}

export default Favorite