import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchResults = useSelector((store) => store.searchResults);
  console.log(`Search results from Search component`, searchResults);

  // useEffect(() => {
  //     getSearchResults();
  // }, []);

  const handleSearchChange = () => {
    setSearch(event.target.value);
  };

  const getSearchResults = (event) => {
    event.preventDefault();
    dispatch({ type: "FETCH_SEARCH", payload: search });
  };

  const handleFavoriteClick = (gifUrl) => {
    dispatch({type: "FAVORITE_GIF", payload: {url: gifUrl}})
  }

  return (
    //html here
    //need 1 input for search
    //submit button with onSubmit (GET)
    //favorite button when returning search results to POST
    //A feature to move user to next page. (look into useHistory)
    <>
      <form onSubmit={getSearchResults}>
        <input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for Gifs"
        />
        <button type="submit">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Search Results</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, i) => {
            return (
              <tr key={i}>
                <td>
                  
                  <img src={result.images.original.url}></img>
                  <button onClick={() => {handleFavoriteClick(result.images.original.url)}}name="favorite">Favorite</button>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Search;
