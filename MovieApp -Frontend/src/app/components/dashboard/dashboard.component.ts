import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit{

    userName:unknown
    search:boolean
    /* eslint-disable */
    movies:any=[];
    errorremoval:any;
    

    constructor(private backendService:BackendService,private router:Router,private snack:MatSnackBar){
      this.userName = localStorage.getItem("userName");
      this.search=false
    }

    ngOnInit():void{
      if (!this.backendService.isLoggedIn()) {
        this.router.navigate(['/login']);
     }
    }

    onAllClick(){
      const resp=this.backendService.getAllMovies();
      resp.subscribe((data)=>{
        this.movies=data;
        // console.log(this.movies);
        console.log("all movies fetched");
      });
      this.snack.open("All Movies are Shown","Ok");
      this.search=false;
    }

    onNameClick(title:string){
      const resp=this.backendService.getMovieByName(title);
      resp.subscribe((data)=>{
        this.movies=data;
        // console.log(this.movies);
      });
      this.snack.open("Requested Movie is Shown","Ok");
      console.log("One movie fetched");
    }

    enableSearchFunctionality(){
      this.search=true;
      // location.reload();
    }

    disableSearchFunctionality(){
      this.search=false;
    }

    doAddToWishlist(userName:unknown, movie:any){
      const resp = this.backendService.doAddItToWishlist(userName,movie);

      resp.subscribe((data)=>{
        // this.movies=data;
        // console.log(this.movies);
        
        console.log("added to wishlist successfully");
      });

      this.snack.open("Movie added to Wishlist Successfully ","Ok");
      // console.log("One movie fetched");






      // resp.subscribe({
      // next: (v) => console.log(v),
      // error: (e) =>{
      //   console.error(e),
      //   this.snack.open("The movie could not be added to WishList ","Ok")
      // },
      // complete: () =>{
      //    console.info('success'),
      //    this.snack.open("The movie has been added to WishList Successfully","Ok")
      //   }
      // });
    }








    // // Mat-Table 
    // dataSource=this.movies;
    // displayedColumns = ['rank', 'title', 'description','year'];
    

  //   <div class="example-container  mt mat-elevation-z8">
  //   <mat-table #table [dataSource]="dataSource">
  
  //     <!--- Note that these columns can be defined in any order.
  //           The actual rendered columns are set as a property on the row definition" -->
  
  //     <!-- Rank Column -->
  //     <ng-container matColumnDef="rank">
  //       <mat-header-cell *matHeaderCellDef> Rank </mat-header-cell>
  //       <mat-cell *matCellDef="let movies"> {{movies.rank}} </mat-cell>
  //     </ng-container>
  
  //     <!-- Name Column -->
  //     <ng-container matColumnDef="title">
  //       <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>
  //       <mat-cell *matCellDef="let movies"> {{movies.title}} </mat-cell>
  //     </ng-container>
  
  //     <!-- Weight Column -->
  //     <ng-container matColumnDef="description">
  //       <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>
  //       <mat-cell *matCellDef="let movies"> {{movies.description}} </mat-cell>
  //     </ng-container>
  
  //     <!-- Symbol Column -->
  //     <ng-container matColumnDef="year">
  //       <mat-header-cell *matHeaderCellDef> Year </mat-header-cell>
  //       <mat-cell *matCellDef="let movies"> {{movies.year}} </mat-cell>
  //     </ng-container>
  
  //     <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
  //     <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  //   </mat-table>

  // </div> 
    
    // "rank": 0,
    // "title": "string",
    // "description": "string",
    // "image": "string",
    // "big_image": "string",
    // "thumbnail": "string",
    // "rating": "string",
    // "genre": [
    //   "string"
    // ],
    // "year": 0,
    // "imdbid": "string",
    // "imdb_link": "string"




    // for radio button 

    // byName=false;
    // byGenre=false;
    // getAll=false;
    // if(value=1){
    //     this.byName=true;
    //     this.byGenre=false;
    //     this.getAll=false;
    // }elseif(value=2){
    //     this.byName=false;
    //     this.byGenre=true;
    //     this.getAll=false;
    // }else(value=3){
    //     this.byName=false;
    //     this.byGenre=false;
    //     this.getAll=true;


}
