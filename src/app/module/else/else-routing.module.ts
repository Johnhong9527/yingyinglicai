import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafetyGuaranteeComponent } from './compnents/safety-guarantee/safety-guarantee.component';
import { NewbieGuideComponent } from './compnents/newbie-guide/newbie-guide.component';
import { ContactUsComponent } from './compnents/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: 'safety-guarantee',
    component: SafetyGuaranteeComponent
  },
  {
    path: 'newbie-guide',
    component: NewbieGuideComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElseRoutingModule {}
