package com.semiProject.muscle.member.repository;

import com.semiProject.muscle.member.dto.MemberDto;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MemberRepository {
    private final SqlSessionTemplate sql;
    public int join(MemberDto member) {
        System.out.println("레퍼지토리 부분");
        return sql.insert("member.join",member);
    }
}
