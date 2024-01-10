import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



export interface wishlistedMovies{
  "id": "string",
  "username": "string",
  "movies": [
    {
      "id": 0,
      "rank": 0,
      "title": "string",
      "description": "string",
      "image": "string",
      "bigImage": "string",
      "thumbnail": "string",
      "genre": [
        "string"
      ],
      "year": 0,
      "imdbid": "string",
      "imdb_link": "string",
    }
  ]
}


export interface Genre{
  
}


export interface Movies{

  "id": "string",
  "rank": 0,
  "title": "string",
  "description": "string",
  "image": "string",
  "big_image": "string",
  "thumbnail": "string",
  "rating": "string",
  "genre": [
    "string"
  ],
  "year": 0,
  "imdbid": "string",
  "imdb_link": "string"

}


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})


export class WishlistComponent implements OnInit {
  
  /* eslint-disable */
  userName:any
  movies:any=[];
  wishlistedMovies:any=[];

  constructor(private backendService:BackendService,private router:Router,private snack:MatSnackBar){
    this.userName = localStorage.getItem("userName");
  }
  
  ngOnInit(): void {
    if (!this.backendService.isLoggedIn()) {
      this.router.navigate(['/login']);
   }
  }


  onWishlistClick(userName:string){
    const resp=this.backendService.getAllWishlistedMovies(userName);
    resp.subscribe((data)=>{
      this.wishlistedMovies=data;
      // console.log(this.wishlistedMovies);
      console.log("all wishlisted movies fetched");
      this.movies= this.wishlistedMovies.movies;

      // console.log(this.movies);
    });

    this.snack.open("All WishListed Movies are Shown","Ok");

  }

  onDeleteClick(userName:any,movie:any){
    const resp= this.backendService.doDeleteFromWishlist(userName,movie);
    
    resp.subscribe(
      (data) => {
        console.log("movie deleted from wishlist successfully");
        alert('Item will be removed from wishlist!');
        // this.registrationMessage = 'Item will be removed from wishlist!';
 
      }
    )
    





    // resp.subscribe((data)=>{
    //   console.log(data)
    //   console.log("deleted from wishlist successfully");
      
    // });

    
    
    // resp.subscribe((data)=>{
    //   this.wishlistedMovies=data;
    //   console.log(this.wishlistedMovies);
    //   console.log("Updated Wishlist movies fetched");
    //   // this.movies= this.wishlistedMovies.movies;
    //   // console.log(this.movies);
    //   this.snack.open("{{movie.title}} is removed from Wishlist","Ok");
    // });
  }

  onClear(userName:any){
    const resp = this.backendService.doClearWishlist(userName);
    resp.subscribe();
    window.location.reload();
    console.log("Wishlist  is Cleared");
    
  }

}
