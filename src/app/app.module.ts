import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NavbarComponent } from './pages/profile-page/components/navbar/navbar.component';
import { UserProfileComponent } from './pages/profile-page/components/user-profile/user-profile.component';
import { UserDetailsComponent } from './pages/profile-page/components/user-profile/user-details/user-details.component';
import { UserRepositoriesComponent } from './pages/profile-page/components/user-profile/user-repositories/user-repositories.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchBarComponent,
    ProfilePageComponent,
    NavbarComponent,
    UserProfileComponent,
    UserDetailsComponent,
    UserRepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
