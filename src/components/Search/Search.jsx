import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Search() {
    const dispatch = useDispatch();
    const [search, setSearch]= useState([]);
    const searchResults = useSelector (store => store.searchResults)

    useEffect(() => {
        getSearchResults();
    }, []);

    const handleSearchChange = () => {
        event.preventDefault();
        console.log('Here I am clicking away');
        setSearch(event.target.value);
    }

    const getSearchResults = () => {
        dispatch({ type: 'FETCH_SEARCH', payload: search});
        setSearch('');
    }

    return (
      //html here
      //need 1 input for search
      //submit button with onSubmit (GET)
      //favorite button when returning search results to POST
      //A feature to move user to next page. (look into useHistory)
      <>
        <form onSubmit={getSearchResults}>
          <input value={search} onChange={handleSearchChange} placeholder="Search for Gifs" />
          <button type="submit">Search</button>
        </form>
                
        <table>
            <thead>
                <tr>
                    <th>Search Results</th> 
                </tr>
                
            </thead>
            <tbody>
              <tr>
                <td>enter .map here to go over the search objects
                    <form onSubmit={getSearchResults}>
                        <button name="favorite">Favorite</button>
                    </form>
                </td>
              </tr>
            </tbody>
        </table>
      </>
    );
}

export default Search;