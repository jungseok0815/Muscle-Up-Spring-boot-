package com.semiProject.muscle.member.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class MemberDto {
    private int userNo;
    private String userId;
    private String userPwd;
    private String userEmail;
    private String userPhone;
    private String userAddress;
}
