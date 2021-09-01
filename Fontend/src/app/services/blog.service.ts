import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError , map, tap } from "rxjs/operators";
import { IBlog } from "../models/blog";

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    url = 'http://localhost:3000/blogs/';

    constructor(private http :HttpClient) { }

    addBlog(blog : IBlog){
        return this.http.post(this.url, blog);
    }

    getAllBlogs() {
        return this.http.get<IBlog[]>(this.url);
    }

    getBlogById(id: string){
        return this.http.get<IBlog>(this.url+`${id}`);
    }

    updateBlog(blog : IBlog){
        //return this.http.put(this.url+`${blog._id}`, blog);
        console.log(blog._id);
        return this.http.put(`${this.url}/${blog._id}`, blog);
    }

    deleteBlog(id: string){
        return this.http.delete(`${this.url}/${id}`);
    }
}
