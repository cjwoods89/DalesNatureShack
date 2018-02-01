import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Blog } from '../adminShared/blog';

@Injectable()

export class BlogAdminService {

    createPost(post: Blog){
        console.log('got to blog-admin service')
        let storageRef = firebase.storage().ref();
        storageRef.child(`images/${post.imgTitle}`).putString(post.img, 'base64')
            .then((snapshot) => {
                let url = snapshot.metadata.downloadURLs[0];
                let dbRef = firebase.database().ref('blogPosts/');
                let newPost = dbRef.push();
                newPost.set ({
                    title: post.title,
                    content: post.content,
                    imgTitle: post.imgTitle,
                    img: url,
                    id: newPost.key
                });
                console.log('finished inserting post');
            })
            .catch ((error) => {
                alert(`failed upload: ${error}`);
            });
    }
}
