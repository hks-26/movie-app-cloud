package com.cts.moviebooking.dto;


import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;


@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDto implements Serializable {
    private String id;

    private int rank;
    private String title;
    private String description;
    private String image;
    private String bigImage;
    private String thumbnail;
    private String rating;
    private List<String> genre;
    private int year;
    private String imdbid;
    private String imdb_link;
    
    
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getRank() {
		return rank;
	}
	public void setRank(int rank) {
		this.rank = rank;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getBigImage() {
		return bigImage;
	}
	public void setBigImage(String bigImage) {
		this.bigImage = bigImage;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public List<String> getGenre() {
		return genre;
	}
	public void setGenre(List<String> genre) {
		this.genre = genre;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getImdbid() {
		return imdbid;
	}
	public void setImdbid(String imdbid) {
		this.imdbid = imdbid;
	}
	public String getImdb_link() {
		return imdb_link;
	}
	public void setImdb_link(String imdb_link) {
		this.imdb_link = imdb_link;
	}
	public MovieDto(String id, int rank, String title, String description, String image, String bigImage,
			String thumbnail, String rating, List<String> genre, int year, String imdbid, String imdb_link) {
		//super();
		this.id = id;
		this.rank = rank;
		this.title = title;
		this.description = description;
		this.image = image;
		this.bigImage = bigImage;
		this.thumbnail = thumbnail;
		this.rating = rating;
		this.genre = genre;
		this.year = year;
		this.imdbid = imdbid;
		this.imdb_link = imdb_link;
	}
	public MovieDto() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    



}
