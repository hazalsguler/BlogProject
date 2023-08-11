import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CommentsService } from 'src/app/services/comments.service';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit{
  isUpdate = false;
    imageUrl:string = "";
  title:string = "";
  body:string="";
  commentData: any;
  
  form = new FormGroup ({
    title: new FormControl(null,[Validators.required]),
    body: new FormControl(null,[Validators.required])

  })
    constructor(private blogService:BlogService, private commentService:CommentsService, @Inject(MAT_DIALOG_DATA) private data:any, private dialogRef:MatDialogRef<BlogDialogComponent>  ) {
    console.log(data);
    if(data.isUpdate) {
      this.isUpdate = true;
      this.form.patchValue({
        title: data.blog.title,
        body: data.blog.body,
      })
    }
    else if(!data.isUpdate) {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }
    console.log(this.isUpdate);
    
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((res) => {
      debugger;
      this.commentData = res.filter((x: {postId: any;})=> x.postId == this.data.blog.id);
      debugger;
    })
  }
  onSubmit() {
    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.data.blog.imageId,
      userId: this.data.blog.userId
    }
    this.blogService.updatePosts(this.data.blog.id,request).subscribe(res => {
      this.dialogRef.close();
    })
  }
  close() {
    this.dialogRef.close();
  }

}