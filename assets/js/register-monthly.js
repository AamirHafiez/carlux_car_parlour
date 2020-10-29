$(document).ready(function(){
    $('#contact-copy').click(() => {
        console.log('clicked');
        let x = $('#contact-number').val();
        $('#whatsapp-contact').val(x);
    });
});