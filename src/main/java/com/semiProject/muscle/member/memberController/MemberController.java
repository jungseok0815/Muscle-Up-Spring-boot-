package com.semiProject.muscle.member.memberController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MemberController {

    @PostMapping("loginMember")
    public String loginMember(){

        return "joinOk";
    }
}
