import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { SteadyProfitLoanComponent } from './components/steady-profit-loan/steady-profit-loan.component';
import { WydProComponent } from './components/wyd-pro/wyd-pro.component';
import { NewsComponent } from './components/news/news.component';
import { PartnerComponent } from './components/partner/partner.component';

@NgModule({
  declarations: [
    HomeComponent,
    SwiperComponent,
    OutcomeComponent,
    SteadyProfitLoanComponent,
    WydProComponent,
    NewsComponent,
    PartnerComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
