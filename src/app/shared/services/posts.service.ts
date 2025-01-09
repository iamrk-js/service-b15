import { Injectable } from "@angular/core";
import { Ipost } from "../models/posts";




@Injectable({
    providedIn : 'root'
})
export class PostsService {
    postsArr: Array<Ipost> = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
            "userId": 1,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }
    ]
    constructor() { }
    // TODO data and its functions

    // fetch all posts
    fetchAllPosts(): Array<Ipost> {
        return this.postsArr
    }

    // create new post
    addPost(post: Ipost){
        // API call to add post object in DB
        this.postsArr.push(post)
    }

    // remove post
    removePost(id:number){
        // It will make a API call to remove Post Object
        let removeIndex = this.postsArr.findIndex(post => post.id === id);
        this.postsArr.splice(removeIndex, 1)
    }


    removeLAstPost(){
        this.postsArr.pop()
    }

}