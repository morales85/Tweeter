const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


$("#post").on("click", function() {
    tweeter.addPost($("input").val())
    renderer.renderPosts(tweeter.getPosts())

})


$("#posts").on("click", ".delete", function(){
     tweeter.removePost($(this).closest(".post").data("id"))
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", "button", function(){
    tweeter.addComment($(this).siblings("input").val() , $(this).closest(".post").data("id")) // Primero consiguo el texto del input, luego la id del comment
    renderer.renderPosts(tweeter.getPosts())

})

$("#posts").on("click", ".delete-comment", function() {
    tweeter.removeComment($(this).siblings("div") , $(this).closest(".comments").data("id"))    // Primero necesito postID, luego commentID
    renderer.renderPosts(tweeter.getPosts())
})
