import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';


interface IAuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http: HttpClient;

  constructor(
    private httpBackend: HttpBackend
  ) {
    this.http = new HttpClient(this.httpBackend);
  }

  async login(email: string, password: string) {
    try {
      const response = await this.http.post<IAuthResponse>(`${environment.api}/auth/login`, { email, password }).toPromise();
      if (response.access_token) {
        this.setAuthorizationToken(response.access_token);
        return true;
      }

      return false;
    } catch (error) {
      throw new Error(this.handlerError(error));
    }
  }

  private handlerError(error: HttpErrorResponse) {
    let mensagem = '';

    if (error.status === 401) {
      mensagem = 'Usuario/senha inválido(s)';
    } else {
      mensagem = 'Ocorreu algum erro ao tentar efetuar o login';
    }

    return mensagem;
  }

  setAuthorizationToken(token: string) {
    localStorage.setItem('token', token);
  }

  getAuthorizationToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  

  
  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    
  }
}