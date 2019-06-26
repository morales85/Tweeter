 const Tweeter = function () {

     let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]



    let _postIdCounter = 2
    console.log(_postIdCounter)

    let _commentIdCounter = 6
    console.log(_commentIdCounter)
    
    const getPosts = function(){
        return  _posts
    
    } 

    let addPost = function(text) {
        _postIdCounter ++
        const id = _postIdCounter 
        _posts.push({text: text, id: "p" + id , comments: [] })
    }

    let removePost = function(postID){
    for (let i in _posts){
    if (_posts[i].id == postID){
        _posts.splice(i, 1)
        }
    }
    }

    let addComment = function(postID, text){
        _commentIdCounter ++
        const ci = _commentIdCounter 
        for (i = 0; i < _posts.length; i++)
        if (_posts[i].id  == postID ){
            _posts[i].comments.push({id:"c" + ci, text: text,})
        }
    }

    let removeComment = function(postID, commentID){
        for (i = 0; i < _posts.length; i++)
        if ( _posts[i].id == postID){
            for (k = 0; k < _posts[i].comments.length; k++){
            console.log(_posts[i].comments[k])
            if (_posts[i].comments[k].id == commentID){
    
                _posts[i].comments.splice(k, 1)
            } 
        }
    }}

return {
    removePost,
    addPost,
    getPosts,
    addComment,
    removeComment
}



}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment( "p3", "Damn straight it is!")
tweeter.addComment("p2" ,"Second the best!" )
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}


// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())

//     let removePost = function(postID) {
//         /// find post by id  new function
//         ///p = find post by id 
//         ///p comments
//         ///removecoments (postid, comment id)

//         for( let i = 0; i < posts.length; i++){ 
//             if ( arr[i] === 5) {
//               arr.splice(i, 1); 
//             }
//          }

//     }
    
//  }
 