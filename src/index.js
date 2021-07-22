import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery, call } from "redux-saga/effects";
import axios from 'axios';

function* rootSaga(){
    yield takeEvery('FETCH_SEARCH', fetchSearch); // client side button click to submit search results
    yield takeEvery('FAVORITE_GIF', favoriteGif); // client side button click to add to favorites
    yield takeEvery('FETCH_FAVORITE', fetchFavorite); // Any time a GET request for favorites is needed
    yield takeEvery('FETCH_CATEGORY', fetchCategory); // Any time GET request for category is needed
    // yield takeEvery('DELETE_FAVORITE', deleteFavorite);
}

const sagaMiddleware = createSagaMiddleware();


const searchResults = ( state = [], action ) => {
        if(action.type === 'SET_RESULTS') {
        return action.payload;
    }
    return state;
}

// Holds Favorites that are received from fetchFavorite()
const favoriteReducer = ( state = [], action ) => {
    if (action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    return state;
}

// Holds Categories that are received from fetchCategory()
const categoryReducer = (state = [], action) => {
  if (action.type === 'SET_CATEGORY') {
    return action.payload
  }
  return state
}

// Generator Function(s)

// When a search term is entered, the GET returns results
function* fetchSearch() {
	try {
		const response = yield axios.get('api/favorite');
		yield put({ type: 'SET_RESULTS', payload: response.data});
	} catch (error) {
		console.log('Error fetching GIFs', error);
	}
  }

  // When a GIF is favorited, it POSTs to the database
  function* favoriteGif(action) {
	try {
		yield call(axios.post, '/api/favorite', action.payload);
		yield put({type: 'FETCH_FAVORITE'});
	} catch (error) {
		console.log('Error trying to post a new GIF', error);
	}
  }

  // GETs database of favorites and SET_FAVORITES 
  function* fetchFavorite() {
        try {
            const response = yield axios.get('/api/favorite')
            yield put({type: 'SET_FAVORITES', payload: response.data})
            console.log('GET results', response.data)
      } catch (error) {
		  console.log('Error trying to get favorited GIFs', error);
	  }
  }

  // GETs table of category from database and sends to categoryReducer
  function* fetchCategory(){
    try {
      const response = yield axios.get('/api/category');
      yield put({type: 'SET_CATEGORY', payload: response.data})
    } catch (error) {
      console.log('Error GETting categories', error);
    }
  }


const store = createStore(
	combineReducers({ 
	//   reducers here 
        favoriteReducer,
        searchResults,
        categoryReducer,
	}),
	applyMiddleware(sagaMiddleware, logger),
  );
  
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
document.getElementById('root'));
