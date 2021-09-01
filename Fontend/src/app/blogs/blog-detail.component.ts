import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
    errorMessage = '';
    blog: IBlog | undefined;

    constructor(private route: ActivatedRoute,
      private router: Router,
      private blogService: BlogService) {
    }
    
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);
      if (id) {
        this.getBlogById(id);
      }
    }
    
    getBlogById(id: string){
      this.blogService.getBlogById(id).subscribe(
        {
            next: blog => {
              this.blog = blog;
            },
            error: err => this.errorMessage = err
        }
    )}

    onDelete(id: string){
      if(confirm('Do you want to delete this blog?')){
        this.blogService.deleteBlog(id).subscribe(
          (res) => {
            alert('Deleted Successfully!');
            this.router.navigate(['/blogs']);
          },
          (err) => {
            console.log(err);
          })
      }
    }
    
    onBack(): void {
        this.router.navigate(['/blogs']);
    }
}
