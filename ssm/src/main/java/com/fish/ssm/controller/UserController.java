package com.fish.ssm.controller;

import com.fish.ssm.entity.User;
import com.fish.ssm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/findUser",method ={ RequestMethod.GET, RequestMethod.POST })
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/listById")
    @ResponseBody
    public List<User> findUser(Integer Id){
        return userService.findUser(Id);
    }

    @RequestMapping("/list")
    @ResponseBody
    public List<User> userList(){
        return userService.userList();
    }

}
