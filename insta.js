var card = document.querySelector('.insta-profile-crad')
var body = document.querySelector('body')

card.addEventListener('dblclick', function() {
    setTimeout(function(){
        likeicon.style.display = "none"
    },800)
    var likeicon = document.createElement('img')
    likeicon.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfot1dK-kIIe8zMsBD2AiFwzD7FmWb-GZ3w&s')
    likeicon.setAttribute('class', 'like-img')
    body.appendChild(likeicon)
    setTimeout(function(){
        var icons = document.querySelector('.comment')
        icons.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mGqeQp5tlNNg8HSn3QP2A7LtJ25iMOLr3g&s')
    },300)
})

