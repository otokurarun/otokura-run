import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ArticlesComponent } from './blog/articles/articles.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleDetailComponent } from './blog/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlogComponent,
    ArticlesComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
