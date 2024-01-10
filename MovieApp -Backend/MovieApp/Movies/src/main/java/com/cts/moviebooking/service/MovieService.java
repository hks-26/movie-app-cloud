package com.cts.moviebooking.service;

import com.cts.moviebooking.dto.MovieDto;
import com.cts.moviebooking.entity.MovieEntity;
import org.springframework.stereotype.Service;

import java.net.URISyntaxException;
import java.util.List;

@Service
public interface MovieService {

    public List<MovieEntity> getMoviesByGenres(List<String> genres);
    public List<MovieEntity> getMoviesByTitle(String title);
    public List<MovieEntity> convertToMovieEntities(List<MovieDto> movies);
    public void saveMovies(List<MovieDto> movies);

    public List<MovieDto> getTop100Movies();

    public List<MovieEntity> getMoviesByRating(String minRating, String maxRating);


}
