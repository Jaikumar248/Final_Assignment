import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  displayDialogBox: boolean = false;
  likes: number = 0;
  isLiked: boolean = false;
  showImageFolder: boolean = false;
  comments = " ";
  displayComments: any[] = [];

  ngOnInit(): void {
  
  }

  addComment() {
    this.displayDialogBox = true;
  }

  like() {
    this.isLiked = true;
    this.likes++;
  }
  upLoadImages() {
    this.showImageFolder = true;
  }
  postComments() {
    this.displayComments.push(this.comments);
    this.comments = '';
  }

  createPost(data:any){
    console.log(data);
  }


}
