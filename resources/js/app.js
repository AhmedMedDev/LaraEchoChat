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

        let AuthID = $('meta[name=userID]').attr('content');

        users.forEach(user => {
            
            if (user.id != AuthID) 
                $('#online-users').append(`<li id="user${user.id}" class="list-group-item m-1"> <i class="fas fa-circle mr-2 text-success"></i>  ${user.name}</li>`)
                
        });
    })
    .joining((user) => {
        console.log(`${user.name} Logging In`);
        $('#online-users').append(`<li id="user${user.id}" class="list-group-item m-1"> <i class="fas fa-circle mr-2 text-success"></i>  ${user.name}</li>`);
        
    })
    .listen('MessageDe', (e) => {
        console.log(e.message.body);
    })
    .leaving((user) => {
        console.log(`${user.name} Logging Out`);
        $(`#user${user.id}`).remove();
    });


    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#send').on("click",function (e) {
        e.preventDefault();
        $(this).html('Sending..');
  
        var formData = new FormData($('#sendMessage')[0]);
      
        $.ajax({
          type: "POST",
          url: "message",
          data: formData,
          processData:false,
          contentType : false,
          cache:false,
          success: function (data) {
     
              $('#sendMessage').trigger("reset");
              $('#send').html('Send');

              if(data.status = true){
                  console.log( );

                $('.ajaxMessage').append(`<div class="message send mb-3"><p>${data.data.body}</p></div> <div class="claer"> </div>`)
                $(".chat").animate({ scrollTop: '200000' },500);
                console.log(data.data.body)
                
              }
         
          },
          error: function (data) {
              console.log('Error:', data);
              $('#saveBtn').html('Submit');
          }
      });
    });

    $(".chat").animate({ scrollTop: '10000' });

    

    // window.Echo.channel(`online`)
    // .listen('MessageDeliverd', (e) => {
    //     console.log(e.message.body);
    // });
