import { Component, OnInit } from '@angular/core';
import { jobs } from 'app/_models/job';
import { JobsService } from 'app/_services/jobs.service';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public jobs: jobs[];

  constructor(
    private jobsService: JobsService,
  ) { }
  
  ngOnInit() {
    this.getJobs();
  }
  
 /*
  * Gets the list of jobs from the web service
 */
  getJobs() {
    this.jobsService.getJobs().subscribe(
      (  jobs: jobs[] ) => {
        this.jobs = jobs.slice(0, 10);
      }
    );
  }

}
