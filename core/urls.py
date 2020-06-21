from django.urls import path
from .views import (
		PopularMovies,
		UpcommingMovies,
		SearchResult,
		MovieDetails
	)

urlpatterns = [
	path('popular', PopularMovies.as_view()),
	path('upcomming', UpcommingMovies.as_view()),
	path('search/<query>', SearchResult.as_view()),
	path('details/<movie_id>', MovieDetails.as_view()),

]