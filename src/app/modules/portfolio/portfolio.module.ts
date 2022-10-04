import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeaderComponent } from './components/page-body/header/header.component';
import { IntroductionComponent } from './components/page-body/introduction/introduction.component';
import { AboutMeComponent } from './components/page-body/about-me/about-me.component';
import { ProjectsComponent } from './components/page-body/projects/projects.component';
import { ContactComponent } from './components/page-body/contact/contact.component';
import { FooterComponent } from './components/page-body/footer/footer.component';



@NgModule({
  declarations: [PageBodyComponent, HeaderComponent, IntroductionComponent, AboutMeComponent, ProjectsComponent, ContactComponent, FooterComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
