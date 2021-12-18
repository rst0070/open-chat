package com.rst0070.openchat.example;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @MessageMapping("/hello")
    @SendTo("/subscribe")
    public MessageType doMessage(MessageType message){
        System.out.println(message.getMessage());
        MessageType ms = new MessageType();
        ms.setMessage(message.getMessage()+" hello!");
        return ms;
    }

    @GetMapping("/")
    public String helloPage(){
        return "/example/hello";
    }
}