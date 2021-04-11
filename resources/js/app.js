require('./bootstrap');



import Echo from "laravel-echo"

window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
});




window.Echo.join(`online`)
    .here((users) => {
        console.log(users)
        users.forEach(user => {
            $('#online-users').append(`<li id="user${user.id}" class="list-group-item m-1">${user.name}</li>`)
        });
    })
    .joining((user) => {
        console.log(`${user.name} Logging In`);
        $('#online-users').append(`<li id="user${user.id}" class="list-group-item m-1">${user.name}</li>`)
    })
    .leaving((user) => {
        console.log(`${user.name} Logging Out`);
        $(`#user${user.id}`).remove();
    });


