package com.cts.moviebooking.service;

//import com.cts.moviebooking.dto.Movie;
import com.cts.moviebooking.dto.MovieDto;
//import com.cts.moviebooking.entity.MovieEntity;
import com.cts.moviebooking.feign.MovieFeignClient;
import com.cts.moviebooking.serviceimpl.WishListMovieServiceImpl;
import com.cts.moviebooking.util.MovieDtoUtils;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class WishListMovieServiceImplTest {

    @Mock
    private MovieFeignClient movieFeignClient;

    @InjectMocks
    private WishListMovieServiceImpl wishListMovieService;
    
    @BeforeEach
    public void setUp() {
       // mockMvc = MockMvcBuilders.standaloneSetup(movieService).build();
 
       MovieDto movie1 = new MovieDto("id1", 1, "Title 1", "Description 1", "image1.jpg", "bigImage1.jpg", "thumbnail1.jpg", "8.5", List.of("Genre1"), 2021, "imdbid1", "imdbLink1");
       MovieDto movie2 = new MovieDto("id2", 2, "Title 2", "Description 2", "image2.jpg", "bigImage2.jpg", "thumbnail2.jpg", "9.0", List.of("Genre2"), 2022, "imdbid2", "imdbLink2");
       MovieDto movie3 = new MovieDto("id3", 3, "Title 3", "Description 3", "image3.jpg", "bigImage3.jpg", "thumbnail3.jpg", "9.5", List.of("Genre3"), 2021, "imdbid3", "imdbLink3");

       
      
    }


    @Test
    void getTop100Movies_validData_shouldReturnMovies() {
        List<MovieDto> expectedMovies = Arrays.asList(new MovieDto(), new MovieDto());
        when(movieFeignClient.getTop100Movies()).thenReturn(expectedMovies);

        List<MovieDto> result = wishListMovieService.getTop100Movies();

        assertEquals(expectedMovies, result);
        verify(movieFeignClient, times(1)).getTop100Movies();
    }

    @Test
    void getMoviesByTitle_validData_shouldReturnMovies() {
        String title = "Test Movie";
        List<MovieDto> expectedMovies = Arrays.asList(new MovieDto(), new MovieDto());
        when(movieFeignClient.getMoviesByTitle(title)).thenReturn(expectedMovies);

        List<MovieDto> result = wishListMovieService.getMoviesByTitle(title);

        assertEquals(expectedMovies, result);
        verify(movieFeignClient, times(1)).getMoviesByTitle(title);
    }

//    @Test
//    void getMoviesByRating_validData_shouldReturnUniqueMovies() {
//        double minRating = 3.0;
//        double maxRating = 5.0;
//        List<MovieDto> inputMovies = Arrays.asList(new MovieDto("id1", 1, "Title 1", "Description 1", "image1.jpg", "bigImage1.jpg", "thumbnail1.jpg", "8.5", List.of("Genre1"), 2021, "imdbid1", "imdbLink1"), "id2", 2, "Title 2", "Description 2", "image2.jpg", "bigImage2.jpg", "thumbnail2.jpg", "9.0", List.of("Genre2"), 2022, "imdbid2", "imdbLink2"));
//        when(movieFeignClient.getMoviesByRating(minRating, maxRating)).thenReturn(inputMovies);
//
//        List<MovieDto> result = wishListMovieService.getMoviesByRating(minRating, maxRating);
//
//        assertEquals(Arrays.asList(new MovieDto("id1", 1, "Title 1", "Description 1", "image1.jpg", "bigImage1.jpg", "thumbnail1.jpg", "8.5", List.of("Genre1"), 2021, "imdbid1", "imdbLink1"), new MovieDto("Movie B", 4.5)), result);
//        verify(movieFeignClient, times(1)).getMoviesByRating(minRating, maxRating);
//    }

    @Test
    void getMoviesByGenres_validData_shouldReturnMovies() {
        List<String> genres = Arrays.asList("Action", "Drama");
        List<MovieDto> expectedMovies = Arrays.asList(new MovieDto(), new MovieDto());
        when(movieFeignClient.getMoviesByGenres(genres)).thenReturn(expectedMovies);

        List<MovieDto> result = wishListMovieService.getMoviesByGenres(genres);

        assertEquals(expectedMovies, result);
        verify(movieFeignClient, times(1)).getMoviesByGenres(genres);
    }
}
