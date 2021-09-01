import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly blogService: BlogService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.form.valid){
        this.blogService.addBlog(this.form.value).subscribe(
            (res) => {
              alert('Blog is added to database.');
              this.router.navigate(['/blogs']);
            },
            (err) => {
              console.log(err);
            }
        )
    }
  }
}
