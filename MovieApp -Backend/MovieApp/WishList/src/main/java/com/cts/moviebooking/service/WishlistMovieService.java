package com.cts.moviebooking.service;

import com.cts.moviebooking.dto.MovieDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WishlistMovieService {

    public List<MovieDto> getTop100Movies();

    public List<MovieDto> getMoviesByGenres(List<String> genres);
    public List<MovieDto> getMoviesByRating(double minRating, double maxRating);
    public List<MovieDto> getMoviesByTitle(String title);


}
