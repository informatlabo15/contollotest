import { Injectable } from '@angular/core';
import { jobs } from 'app/_models/job';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = environment.jobsUrl ;
  
  constructor(private http: HttpClient) { }

  getJobs(): Observable<jobs[]> {
    return this.http.get<jobs[]>(this.baseUrl );
  }
}
