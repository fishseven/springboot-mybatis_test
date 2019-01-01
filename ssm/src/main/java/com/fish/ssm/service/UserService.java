package com.fish.ssm.service;


import com.fish.ssm.entity.User;
import com.fish.ssm.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional

public class UserService implements UserMapper{
    @Autowired
    public UserMapper userMapper;

    public List<User> findUser(Integer Id){
        return userMapper.findUser(Id);
    }


    public List<User> userList() {
        return userMapper.userList();
    }


}
