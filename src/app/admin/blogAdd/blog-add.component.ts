import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAdminService } from '../adminShared/blog-admin.service';
import { Blog } from '../adminShared/blog';

@Component({
    selector: 'add-menu',
    templateUrl: './blog-add.component.html',
    styleUrls: ['./blog-add.component.css']
})

export class BlogAddComponent {

    imgTitle: string;
    imageSRC: string;
    postTitle: string;
    content: string;
    post: Blog;

    constructor( private blogAdminSVC: BlogAdminService, private router: Router) {}

    fileLoad($event: any) {
        let myReader: FileReader = new FileReader();
        let file: File = $event.target.files[0];
        this.imgTitle = file.name;
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
            this.imageSRC = e.target.result;
        }
    }

    createPost() {
        console.log('Clicked the CreatePost button!');
        this.post = new Blog (
            this.postTitle,
            this.content,
            this.imgTitle,
            // Firebase has an issue with the leading 24 characters of the img
            // Let's shave that off using the below
            this.imageSRC.substring(23)
        );
        this.blogAdminSVC.createPost(this.post);
        alert(`${this.postTitle} added to posts`);
        this.router.navigate(['/admin']);
    }

    cancel() {
        this.router.navigate(['/admin']);
    }

}