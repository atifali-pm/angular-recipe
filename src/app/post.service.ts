import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    // Send Http request
    this.http.post<{ name: string }>('https://posts-d4f90.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });

  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>('https://posts-d4f90.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        // tslint:disable-next-line:forin
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        return postsArray;
      }));
  }

  deletePosts() {
    return this.http.delete<{ name: string }>('https://posts-d4f90.firebaseio.com/posts.json');
  }
}
