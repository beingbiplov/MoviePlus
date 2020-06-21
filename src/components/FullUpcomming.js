import React, { useState, useEffect } from 'react'
import '../styles/trending.css'
import FullMovieCard from './FullMovieCard'
import { Container } from 'react-bootstrap'


const FullUpcomming = () =>{
	const [upcomming_movies, setUpcomming] = useState({ hits: [] })
	const [isLoading, setLoading] = useState(false)
	const [errorLoading, setError] = useState(false)

	useEffect( () =>{
		getUpcomming()

	},[])
	const getUpcomming = async () => {
		setLoading(true)
		try{
			const response = await fetch(
				`http://127.0.0.1:8000/api/upcomming`
		      );
		    const data = await response.json();
		    setUpcomming(data.results)
		    setLoading(false)
		    setError(false)
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
				re = <FullMovieCard movies = { upcomming_movies } />
			}
		} 
		return re
	}

	return(
			 
		<Container className='moviebar' id='popular'>
			
			<h3 className='moviebar_title'>
				Upcomming
			</h3>
			{ result() }
		
			
		</Container>	
	)
}
export default FullUpcomming