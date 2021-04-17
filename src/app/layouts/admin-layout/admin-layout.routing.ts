import { Routes } from '@angular/router';

import { AboutComponent } from '../../about/about.component';
import { JobsComponent } from 'app/jobs/jobs.component';
import { PeopleComponent } from 'app/people/people.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component:JobsComponent },
    { path: 'jobs',   component: JobsComponent },
    { path: 'people',   component: PeopleComponent },
    { path: 'about',     component: AboutComponent },
];
