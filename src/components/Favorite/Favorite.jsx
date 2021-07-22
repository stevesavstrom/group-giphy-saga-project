import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

function Favorite() {
    dispatch = useDispatch();

    const favoriteReducer = useSelector(store => store.favoriteReducer);
    const categoryReducer = useSelector(store => store.categoryReducer);

    useEffect(() => {
        getFavoritesTable;
        getCategoryTable;
    }, [])

    //   Routes to use
    //  /api/favorite
    //  /api/category
 
 
    // GET request on page load to see favorites table from database
    const getFavoritesTable = () => {
        dispatch({type: 'FETCH_FAVORITE'});
    }
    // GET request on page load to see categories table from database
    const getCategoryTable = () => {
        dispatch({type: 'FETCH_CATEGORY'});
    }
    // PUT request on category select / button click

    return (
        <>
            {/* map favorites database w/ a map of the category */}
        </>
    )

}

export default Favorite