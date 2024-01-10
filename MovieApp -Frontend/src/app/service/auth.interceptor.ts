import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "./backend.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private backendService:BackendService){}

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        let newReq = req;
        const token= this.backendService.getToken();

        // console.log("INTERCEPTOR",token);

        if(token!=null){
            newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }
        return next.handle(newReq);
    }

}