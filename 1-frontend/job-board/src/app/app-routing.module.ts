import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// setting up component routes
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JoblistingsComponent } from './joblistings/joblistings.component';
import { JoblistingsdetailComponent } from './joblistingsdetail/joblistingsdetail.component';
import { EmployerComponent } from './employer/employer.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EmployereditComponent } from './employeredit/employeredit.component';
import { CandidateeditComponent } from './candidateedit/candidateedit.component';
import { PostajobComponent } from './postajob/postajob.component';
import { UploadresumeComponent } from './uploadresume/uploadresume.component';

const routes: Routes = [
  { component: BodyComponent, path: '' },
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
  { component: JoblistingsComponent, path: 'joblistings' },
  { component: JoblistingsdetailComponent, path: 'joblistings/:id' },
  { component: EmployerComponent, path: 'employer' },
  { component: EmployereditComponent, path: 'employer/edit' },
  { component: CandidateComponent, path: 'candidate' },
  { component: CandidateeditComponent, path: 'candidate/edit' },
  { component: PostajobComponent, path: 'postajob' },
  { component: UploadresumeComponent, path: 'uploadresume' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
