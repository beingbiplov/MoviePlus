import React, { useState, useEffect } from 'react'
import '../styles/trending.css'
import FullMovieCard from './FullMovieCard'
import { Container } from 'react-bootstrap'


const Popular = () =>{
	const [popular_movies, setPopular] = useState({ hits: [] })
	const [isLoading, setLoading] = useState(false)
	const [errorLoading, setError] = useState(false)

	useEffect( () =>{
		getPopular()

	}, [])
	const getPopular = async () => {
		setLoading(true)
		try{
			const response = await fetch(
		      `http://127.0.0.1:8000/api/popular`
		      );
		    const data = await response.json();
		    setPopular(data.results)
		    setLoading(false)
		    setError(false)
		    console.log(isLoading)
		}
	    catch(err){
	    	setLoading(false)
	    	setError(true)
	    }
	}	
	
	const result = () =>{
		let re = ''
		if (errorLoading){
			re = 'Something went wrong'
		}else{
			if (isLoading){
				re = 'Loading...'
			}
			else{
				re = <FullMovieCard movies = { popular_movies } />
			}
			
		} 
		return re
	}

	return(
			 
		<Container className='moviebar' id='popular'>
			
			<h3 className='moviebar_title'>
				Popular
			</h3>
			{ result() }
		
			
		</Container>	
	)
}
export default Popular