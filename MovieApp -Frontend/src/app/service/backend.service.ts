import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url="http://3.138.83.16:9091/api/v1/auth/login"
  constructor(private http:HttpClient) { }

  // calling server to gen token
  /* eslint-disable */
  generateToken(credentials:any):Observable<unknown>{

    return this.http.get<unknown>(this.url+`?userName=${credentials.userName}&password=${credentials.password}`);
  }

  // login user
 
  loginUser(response: any){
    localStorage.setItem("token",response.token);
    localStorage.setItem("userName",response.userName); 
    
    return true;
  }

  // to check whether user is logged in or not
  isLoggedIn(){
    const token=localStorage.getItem("token");

    if(token==undefined || token=='' ||token==null){
      return false;
    }else{
      return true;
    }
  }

  // for logout
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  // for getting token
  getToken(){
    return localStorage.getItem("token");
  }

  doRegister(data:unknown){
    return this.http.post('http://3.138.83.16:9090/api/v1/userprofile/create',data)
  }

  getAllMovies(){
    return this.http.get('http://3.138.83.16:9093/api/v1/movies/top100')
  }

  getMovieByName(title: string){
    return this.http.get(`http://3.138.83.16:9093/api/v1/movies/byTitle`+`?title=${title}`)
  }




  getAllWishlistedMovies(userName:string){
    return this.http.get(`http://3.138.83.16:9094/api/v1/wishlist/`+`${userName}`)
  }

  doDeleteFromWishlist(userName:unknown,data:any){

    console.log(userName);
    console.log(data);
    return this.http.delete(`http://3.138.83.16:9094/api/v1/wishlist/`+`${userName}`+`/remove`,data);


  }

  doClearWishlist(userName:string){
    return this.http.delete(`http://3.138.83.16:9094/api/v1/wishlist/`+`${userName}`+`/clear`);

  }

  doAddItToWishlist(userName:unknown,data:any){
    return this.http.post(`http://3.138.83.16:9094/api/v1/wishlist/`+`${userName}`+`/add`,data);

  }
}
