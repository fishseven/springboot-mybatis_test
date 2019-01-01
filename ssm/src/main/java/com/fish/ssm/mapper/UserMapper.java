package com.fish.ssm.mapper;


import com.fish.ssm.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> findUser(Integer Id);


    List<User> userList();

    void delete(@Param("id") Integer id);

}
