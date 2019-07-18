package com.example.demo.vo;

import lombok.Data;

@Data
public class WriteVO {
    
    private String date;
    private String contents;

    public WriteVO(){}
    public WriteVO(String date, String contents){
        super();
        this.date = date;
        this.contents = contents;
    }


}