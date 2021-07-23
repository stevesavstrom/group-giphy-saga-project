import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Search() {
    const dispatch = useDispatch();
    const [search, setSearch]= useState();
    const searchResults = useSelector (store => store.searchResults)
    console.log(`Search results from Search component`, searchResults);

    // useEffect(() => {
    //     getSearchResults();
    // }, []);

    const handleSearchChange = () => {
        event.preventDefault();
        console.log('Here I am clicking away');
        setSearch(event.target.value);
    }

    const getSearchResults = () => {
        dispatch({ type: 'FETCH_SEARCH', payload: search});
        
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
              {searchResults.map(result => (
              <tr>
                <td>
                  <img src={result.data.data.images.original.url}></img>
                    <form onSubmit={getSearchResults}>
                        <button name="favorite">Favorite</button>
                    </form>
                </td>
              </tr>
              ))}
            </tbody>
        </table>
      </>
    );
}

export default Search;

// <>
// 		  <h2>Shopping List</h2>
// 		  <table>
// 			<thead>
// 			  <tr>
// 				<th>Items</th>
// 				<th></th>
// 			  </tr>
// 			</thead>
// 			<tbody>
// 			  {props.list.map(items => (
// 				<tr key={items.id}>
// 				  <td>{items.item}</td>
// 				  <td>{items.quantity}</td>
// 				  <td>{items.unit}</td>
// 				  <td><button name="favorite">Favorite</button></td>
// 				</tr>
// 			  ))}
// 			</tbody>
// 		  </table>
// 		</>