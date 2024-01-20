import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  //TODO Los interceptores inyectan propiedades en las peticiones
  //?    Algo que va a estar vigilando las peticiones y se pueden 
  //?    parcear informacion, agregar o quitar propiedades, etc 

  constructor(
    private cookieService: CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    try {
      const token = this.cookieService.get('token');

      let newRequest = request;

      newRequest = request.clone(
        {
          setHeaders: {
            authorization: 'Bearer ' + token
          }
        }
      )
        // console.log(newRequest)
      return next.handle(newRequest);
    } catch (error) {
      console.log('Error en el inyector!', error);
      return next.handle(request);
    }
    // return next.handle(request);
  }
}
