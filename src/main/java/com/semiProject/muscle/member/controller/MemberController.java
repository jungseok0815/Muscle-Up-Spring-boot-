package com.semiProject.muscle.member.controller;

import com.semiProject.muscle.member.dto.MemberDto;
import com.semiProject.muscle.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    @PostMapping("userInfo")
    public String join(MemberDto member){
        System.out.println(member);
        return memberService.join(member) > 0 ? "joinOk" : "joinFail";
    }
}
