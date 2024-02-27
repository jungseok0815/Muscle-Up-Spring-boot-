package com.semiProject.muscle.member.service;

import com.semiProject.muscle.member.dto.MemberDto;
import com.semiProject.muscle.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public int join(MemberDto member) {
        return memberRepository.join(member);
    }
}
