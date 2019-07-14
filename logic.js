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



    let _postIdCounter = 2  // Hard set counter id

    let _commentIdCounter = 6   // Hard set counter id
    
    const getPosts = function(){    // Funcion para return todos los post
        return  _posts
    
    } 

    let addPost = function(text) {
        _postIdCounter ++; const id = _postIdCounter // Añade 1 al postid counter
        _posts.push({text: text, id: "p" + id , comments: [] }) // Añade un nuevo post a _posts con text,id y comentario
    }

    let removePost = function(postID){
    for (let i in _posts){  //Para cada post
    if (_posts[i].id == postID){    //Comprobamos los post hasta que coincida con el postID que buscamos
        _posts.splice(i, 1)         //Borramos el post encontrado(i), solo ese post(1)
        }
    }
    }

    let addComment = function(text, postID){
        _commentIdCounter ++        //Añade 1 al comment counter id
        const ci = _commentIdCounter 
        for (i = 0; i < _posts.length; i++) //Loop para mirar todos los comments
        if (_posts[i].id  == postID ){      //Buscamos el post id que coincide con el post id que queremos
            _posts[i].comments.push({id:"c" + ci, text: text,}) //Añadimos a _posts el post adecuando con id+1 y el texto
        }
    }

    let removeComment = function(postID, commentID){
        for (i = 0; i < _posts.length; i++) //Loop para mirar todos los posts
        if ( _posts[i].id == postID){       //Buscamos el post correcto con id igual al comentario que queremos borrar 
            for (k = 0; k < _posts[i].comments.length; k++){    //Loop para mirar todos los comentarios
            if (_posts[i].comments[k].id == commentID){         //Buscamos dentro del post correcto el comentario con el id que queremos borrar
    
                _posts[i].comments.splice(k, 1)             //Borramos el comentario correcto
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

