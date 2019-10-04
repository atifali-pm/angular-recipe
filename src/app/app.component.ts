import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient, private postService: PostService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.loadedPosts = posts;
        this.isLoading = false;
      });
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
    this.onFetchPosts();
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.loadedPosts = posts;
        this.isLoading = false;
      });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(responseData => {
      this.onFetchPosts();
    });
  }

}
