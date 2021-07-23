import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button
} from "@material-ui/core";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

function Favorite() {
  const dispatch = useDispatch();

  const favoriteReducer = useSelector((store) => store.favoriteReducer);
  const categoryReducer = useSelector((store) => store.categoryReducer);

  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    getFavoritesTable();
    getCategoryTable();
    console.log("in use effect");
  }, []);

  // GET request on page load to see favorites table from database
  const getFavoritesTable = () => {
    console.log("favoritesTable");
    dispatch({ type: "FETCH_FAVORITE" });
  };
  // GET request on page load to see categories table from database
  const getCategoryTable = () => {
    console.log("getCategoryTable");
    dispatch({ type: "FETCH_CATEGORY" });
  };
  // PUT request on category select / button click
  const changeCategory = (favId) => {
    event.preventDefault();
    console.log("trying to change category");
    dispatch({ type: "CHANGE_CATEGORY", payload: { favId, newCategory } });
  };

  return (
    <>
      {favoriteReducer.map((gif) => {
        return (
          <Card key={gif.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="30%"
                width="30%"
                image={gif.url}
              />
              <CardContent>
                <form>
                    <p>Please choose a category</p>
                  {categoryReducer.map((category) => {
                    return (
                    <>
                  <input
                    key={category.id}
                    type="radio"
                    name="categoryOption"
                    value={category.name}
                    id= {category.name}
                    onChange={(event) =>
                      setNewCategory(event.target.value)
                    }
                    required
                  />
                  <label htmlFor= {category.name} > {category.name} </label>
                  </>
                    )})}
                  <Button type="submit" variant="contained" color="primary" onClick={()=>{changeCategory(gif.id)}}>
                    Next
                  </Button>
                </form>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}

export default Favorite;

{
  /* <select>
<option value="blank">------</option>
{categoryReducer.map(category => {
    return ( <option onChange={(event)=>{setNewCategory(target.event.value)}} key={category.id} value={category.name}>{category.name}</option>)
})}
</select>
<button onClick={()=>{changeCategory(gif.id)}}>Update Category</button> */
}
