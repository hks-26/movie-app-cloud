import { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = () => {
  const token=localStorage.getItem("token");

  if(token==undefined || token=='' ||token==null){
    return false;
  }else{
    return true;
  }
  
};












// PART1
// export const authGuard: CanActivateFn = (route, state) => {
//   const token=localStorage.getItem("token");
//   if(token==undefined || token=='' ||token==null){
//     return false;
//   }else{
//     return true;
//   }
// };






// PART2
// constructor(private backendService:BackendService,private router:Router){}
// canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
//     if (loginservice.isLoggedIn()){
//       return true;
//     }
//     this.router.navigate(['login'])


//     return false;
// }