package com.cts.moviebooking.controller;

import com.cts.moviebooking.dto.MovieDto;
import com.cts.moviebooking.entity.MovieEntity;
import com.cts.moviebooking.service.MovieService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    private static final Logger log = LoggerFactory.getLogger(MovieController.class);

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/top100")
    public List<MovieDto> getTop100Movies() {
        log.info("Fetching top 100 movies");
        return movieService.getTop100Movies();
    }

    @GetMapping("/byTitle")
    public List<MovieEntity> getMoviesByTitle(@RequestParam String title) {
        log.info("Fetching movies by title: {}", title);
        return movieService.getMoviesByTitle(title);
    }

//    Rating not provided in current external Api
//    @GetMapping("/byRating")
//    public List<MovieEntity> getMoviesByRating(@RequestParam String minRating, @RequestParam String maxRating) {
//        log.info("Fetching movies by rating between {} and {}", minRating, maxRating);
//        return movieService.getMoviesByRating(minRating, maxRating);
//    }

    @GetMapping("/byGenres")
    public List<MovieEntity> getMoviesByGenres(@RequestParam List<String> genres) {
        log.info("Fetching movies by genres: {}", genres);
        return movieService.getMoviesByGenres(genres);
    }
}
