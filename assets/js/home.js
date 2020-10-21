 $(document).ready(function(){
    $('#WAButton').floatingWhatsApp({
        phone: '+917387517254', //WhatsApp Business phone number
        headerTitle: 'Chat with us on WhatsApp!', //Popup Title
        popupMessage: 'Hello, how can we help you?', //Popup Message
        showPopup: true, //Enables popup display
        buttonImage: '<img src="../assets/floating-whatsapp/whatsapp.svg" />', //Button Image
        //headerColor: 'crimson', //Custom header color
        //backgroundColor: 'crimson', //Custom background button color
        position: "right", //Position: left | right
        size: "50px",
        autoOpenTimeout: "5000"
    });

}); 