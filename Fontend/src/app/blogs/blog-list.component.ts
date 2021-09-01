import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IBlog } from "../models/blog";
import { BlogService } from "../services/blog.service";

@Component({
    selector:'pm-blogs',
    templateUrl:'./blog-list.component.html',
    styleUrls:['./blog-list.component.css']
})

export class BlogListComponent implements OnInit{
    blogs : IBlog[] = [];
    errorMessage = '';
    sub!: Subscription;

    constructor(private blogService: BlogService){}

    ngOnInit(): void {
        this.sub = this.blogService.getAllBlogs().subscribe({
            next: blogs => {
              this.blogs = blogs;
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    
}