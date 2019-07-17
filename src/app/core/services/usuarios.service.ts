import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // endereço API
  private API_URL = environment.API_URL;

  
  constructor(private http: HttpClient) { }

//  Observable -> requisição sem travar tela de usuáios:
  public getUsuarios(): Observable<any>{

    return this.http.get<any>(this.API_URL + "usuarios").pipe(
      map((result : any)=>{
        return result;
      }),
      catchError(err =>{
        return throwError(err)
      })
    )

  }

}
