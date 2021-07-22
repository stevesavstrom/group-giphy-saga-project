import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Search () {

// GET request on search button click
const fetchSearch = () => {
	axios.get('/api/search')
	.then(response => )
}

// POST request on favorite button click

// return (

// )
}

export default Search;