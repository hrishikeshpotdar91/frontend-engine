import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/containers/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductComponent } from './products/product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { TutoringComponent } from './tutoring/tutoring.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MentoringComponent } from './mentoring/mentoring.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BlogComponent } from './blog/blog.component';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from './services/storyblok.service';
import { StoryblokDirective } from './directives/storyblok.directive';
import { TeaserComponent } from './teaser/teaser.component';
import { GridComponent } from './grid/grid.component';
import { PageComponent } from './page/page.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    ContactsComponent,
    NavbarComponent,
    PortfolioComponent,
    TutoringComponent,
    MentoringComponent,
    BlogComponent,
    PageComponent,
    StoryblokDirective,
    TeaserComponent,
    GridComponent,
    FeatureComponent,
    StoryblokDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    DynamicModule
  ],
  exports: [BrowserModule, DynamicModule],
  providers: [StoryblokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
