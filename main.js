const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


$("#post").on("click", function() {
    tweeter.addPost($("input").val()) //Tomamos el valor de input
    renderer.renderPosts(tweeter.getPosts())
    ($("input").val("")) //Vaciamos input
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete", function(){
     tweeter.removePost($(this).closest(".post").data("id")) // Tomamos postId
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", "button", function(){
    tweeter.addComment($(this).siblings("input").val(), //Accedemos al valor de input
    $(this).closest(".post").data("id")) //Tomamos PostId
    renderer.renderPosts(tweeter.getPosts())

})

$("#posts").on("click", ".delete-comment", function() {
    tweeter.removeComment($(this).closest(".post").data("id"), //Tomamos postID
    $(this).closest(".comments").data("id"))    // Tomamos commentID
    renderer.renderPosts(tweeter.getPosts())
})
