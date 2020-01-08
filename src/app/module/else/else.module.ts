import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElseRoutingModule } from './else-routing.module';
import { ElseComponent } from './else.component';
import { SafetyGuaranteeComponent } from './compnents/safety-guarantee/safety-guarantee.component';
import { NewbieGuideComponent } from './compnents/newbie-guide/newbie-guide.component';
import { ContactUsComponent } from './compnents/contact-us/contact-us.component';


@NgModule({
  declarations: [ElseComponent, SafetyGuaranteeComponent, NewbieGuideComponent, ContactUsComponent],
  imports: [
    CommonModule,
    ElseRoutingModule
  ]
})
export class ElseModule { }
