// https://jsonplaceholder.typicode.com/

document.querySelector('.button-users').onclick = function() {
    document.querySelector('.users').innerHTML=''

    fetch('https://jsonplaceholder.typicode.com/users').then(function(r) {
        return r.json()
    }).then(res => {
        res.map(el => {
            var div = document.createElement('div');
            div.innerHTML = el.name

            document.querySelector('.users').append(div)
        })
    })
}

document.querySelector('.button-posts').onclick = function() {
    document.querySelector('.posts').innerHTML=''

    fetch('https://jsonplaceholder.typicode.com/posts').then(function(r) {
        return r.json()
    }).then(res => {
        res.map(el => {
            var div = document.createElement('div');
            div.innerHTML = el.title

            document.querySelector('.posts').append(div)
        })
    })
}
