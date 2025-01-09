import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list1',
  templateUrl: './post-list1.component.html',
  styleUrls: ['./post-list1.component.scss']
})
export class PostList1Component implements OnInit {

  // private _postsService: PostsService = new PostsService();
  postsArr !: Array<Ipost>
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
    this.postsArr = this._postsService.fetchAllPosts()
  }

  onLastRemove(){
    this._postsService.removeLAstPost()
  }

}
