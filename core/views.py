from django.shortcuts import render
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings

class PopularMovies(APIView):
	def get(self, request):
		api_key = settings.API_KEY
		url = f'https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1'
		r = requests.get(url)
		result = r.json()
		return Response(result)

class UpcommingMovies(APIView):
	def get(self, request):
		api_key = settings.API_KEY
		url = f'https://api.themoviedb.org/3/movie/upcoming?api_key={api_key}&language=en-US&page=1'
		r = requests.get(url)
		result = r.json()
		return Response(result)

class SearchResult(APIView):
	def get(self, request, query):
		api_key = settings.API_KEY
		url = f'https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={query}'
		r = requests.get(url)
		result = r.json()
		return Response(result)

class MovieDetails(APIView):
	def get(self, request, movie_id):
		api_key = settings.API_KEY
		url = f'https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&append_to_response=credits,videos'
		r = requests.get(url)
		result = r.json()
		return Response(result)

