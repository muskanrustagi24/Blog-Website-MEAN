import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blogs/blog-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BlogDetailComponent } from './blogs/blog-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { AddBlogComponent } from './blogs/add-blog.component';
import { BlogDetailGuard } from './services/blog-detail.guard';
import { EditBlogComponent } from './blogs/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    NavbarComponent,
    BlogDetailComponent,
    AddBlogComponent,
    EditBlogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'blogs', component: BlogListComponent},
      { path: 'blogs/:id', 
        canActivate : [BlogDetailGuard],
        component: BlogDetailComponent},
      { path: 'add', component: AddBlogComponent},
      { path: 'edit/:id', component: EditBlogComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
