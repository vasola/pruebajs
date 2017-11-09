$(document).ready(function(){
    $("#tweet").on('submit',function(event){ event.preventDefault();
        $('.col-md-7').append('
        '<h5>titulo twitter</h5>',
        + '<span>@hola</span>',
        + '<p>kjdbkjnsajkdbash</p>',
        + '<a href=""><i class="fa fa-comment-o" aria-hidden="true"></i></a>',
        + '<a href=""><i class="fa fa-retweet" aria-hidden="true"></i></a>',
        + '<a href=""><i class="fa fa-heart-o" aria-hidden="true"></i></a>',
        + '<a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a>',
        + '<a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a>')
        });
})