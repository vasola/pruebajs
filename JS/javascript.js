$(document).ready(function(){
    $("#tweet").on('submit',function(event){ 
        event.preventDefault();
        $('#board').append(
                    '<div class="row note">'
                    +'<div class="col-md-12">'
                    +'<img src="images/perfil.jpg" alt="perfil">'
                    +'<h5>Valentina Soto</h5>'
                    + '<span>@va_sola</span>'
                    + '<p>' + $('#myform').val() + '</p>'
                    + '<a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-retweet" aria-hidden="true"></i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-heart-o likeable" aria-hidden="true"> 0</i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-trash-o" aria-hidden="true"></i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>'
                    + '</div>'
                    + '</div>')
        });
    
    $('#board').on('click','.fa-trash-o', function(event){
        event.preventDefault()
        $(this).parent().parent().fadeOut(500);
        })
    
    $('#board').on('click','.likeable', function(event){
        $(this).html(parseInt($(this).html())+1);
        $(this).removeClass('fa-heart-o').addClass('fa-heart');
        })
})