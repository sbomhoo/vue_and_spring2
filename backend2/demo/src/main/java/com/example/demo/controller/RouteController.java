package com.example.demo.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//SPA로 개발하면 사용자가 직업 URL접근할 경우 페이지가 존재하지 않아 404에러가 납니다
//그래서 fallback 설정 넣어줍니다

@Controller
public class RouteController implements ErrorController {
    @GetMapping({"/","/error"})
    public String getUsers(){
        return "index";
    }

    @Override
    public String getErrorPath(){
        return "/error";
    }
}