$(()=>{
    const socket = new SockJS('/websocket');

    const stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/subscribe', processMessage);
    });

    function processMessage(data){
        console.log('message', data);
        let message = JSON.parse(data).message;
        $('#log').append('<p class="data" style="float:left;">'+message+'</p><br/>');
    }
    

    $('#button').on('click', (e)=>{
        let text = $('#message-in').val();
        let data = {
            message : text
        };
        data = JSON.stringify(data);
        stompClient.send('/hello',{}, data);
        $('#log').append('<p class="data" style="float:right;">'+message+'</p><br/>');
    })
});