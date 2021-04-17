import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from 'app/_models/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl  = environment.usersUrl ;
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<users[]> {
    return this.http.get<users[]>(this.userUrl );
  }
}
