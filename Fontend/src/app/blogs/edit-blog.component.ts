import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'pm-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  form!: FormGroup;
  errorMessage = '';
  blog: IBlog | undefined;


  constructor(private readonly blogService: BlogService, 
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      this.getBlogById(id);
    }
    
    this.form = this.formBuilder.group({
      _id: id,
      title: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  getBlogById(id: string){
    this.blogService.getBlogById(id).subscribe(
      {
          next: blog => {
            this.blog = blog;
            this.form.patchValue(this.blog);
          },
          error: err => this.errorMessage = err
      }
  )}

  
  onSubmit(){
      console.log(this.form.value);
      this.blogService.updateBlog(this.form.value).subscribe(
          (res) => {
            alert('Blog is edited successfully.');
            this.router.navigate(['/blogs']);
          },
          (err) => {
            console.log(err);
          }
      )
  }

}
