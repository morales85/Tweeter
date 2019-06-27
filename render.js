const Renderer = function () {

    const renderPosts = function (_posts) {
        $("#posts").empty()

        for (let p of _posts) {
          let post = `<div class="post" data-id=${p.id}><p class="post-text">${p.text}</p> `
          let comment =  ""


            for (let c of p.comments) {
            comment +=  `<div class="comments"  data-id=${c.id}><span class="delete-comment">X</span>${c.text}</div> `

        }
        post +=  `${comment}<input type="text"  placeholder="Got something to say?"><button >Comment</button><div><button class="delete">Delete Post</button></div></div>   `

        $("#posts").append(post)
        
        }

        


    }
    return {
        renderPosts
    }
    
}


