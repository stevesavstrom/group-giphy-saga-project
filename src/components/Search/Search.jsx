import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Search() {
    const dispatch = useDispatch();
    const [search, setSearch]= useState('');
    // useEffect(() => {
    //     getSOMETHING?();
    // }, []);

    const handleSearchChange = {
        event.preventDefault();
        console.log('Here I am clicking away');
    }

    const getSearchResults = () => {
        dispatch({ type: 'SET_RESULTS'})
    }

    return (
       //html here
        //need 1 input for search
        //submit button with onSubmit (GET)
        //favorite button when returning search results to POST
        //A feature to move user to next page. (look into useHistory) 
        <>
        <form >
            <input onChange={handleSearchChange} placeholder="Search for Gifs"/>
            <button type="submit" onSubmit="handleSubmit" >Search</button>
        </form>  
{/*         
        <table>
            <form onSubmit={SOMETHING_GOES_HERE}>
                <button name="favorite">Favorite</button>
            </form>
        </table> */}
        </>
    )
}


export default Search;

export default Search;