$(document).ready(function(){
    $('.btn-cta').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });

    $('#btnContatti').click(function(){
        $(this).attr('disabled', true);
        var dati = $('#frmContatti').serialize();
        var lang = $('input[name="lang"]').val();

        if(lang == 'it'){
            $('#response').html("<h4><strong class='text-dark'>Invio in corso <i class='fa fa-spinner fa-spin fa-fw text-dark'></i></strong></h4>")
        } else if( lang == 'en'){
            $('#response').html("<h4><strong class='text-dark'>Sending in progress <i class='fa fa-spinner fa-spin fa-fw text-dark'></i></strong></h4>")
        }
        $.ajax({
            url: '/ajax/email_contatti.php',
            data: dati,
            method: 'POST'
        }).done(function(response){
            $('#btnContatti').attr('disabled', false);
            $('#response').html(response);
        });
    });
});