const Renderer = function () {

    const renderPosts = function (_posts) { //Funcion para poner todos los posts en pantalla, cada post necesita Text, Id y comments
        $("#posts").empty()                 //Vaciamos post

        for (let p of _posts) {             //Para cada post hacemos un div, con clase post, data id del post, dentro del div ponemos el post dentro de p con clase post-text
          let post = `<div class="post" data-id=${p.id}><p class="post-text">${p.text}</p> `    
          let comment =  ""                 //El comentario lo dejamos vacio


            for (let c of p.comments) { //Funcion para poner los comentarios
            comment +=  `<div class="comments"  data-id=${c.id}><span class="delete-comment">X</span>${c.text}</div> ` //Sumamos +1 a cada comentario, ponemos un con clase comments y data id del comentario,denro un span clase delete comment(X) y el texto del comentario

        }
        post +=  `${comment}<input type="text"  placeholder="Got something to say?"><button>Comment</button><div><button class="delete">Delete Post</button></div></div>   `

        $("#posts").append(post)
        
        }

        


    }
    return {
        renderPosts
    }
    
}


