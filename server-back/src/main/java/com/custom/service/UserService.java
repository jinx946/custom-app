package com.custom.service;

import com.custom.entity.User;
import com.custom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * 用户登录验证
     */
    public User login(String username, String password) {
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // 简单密码验证（实际项目中应该使用加密）
            if (user.getPassword().equals(password)) {
                return user;
            }
        }
        return null;
    }

    /**
     * 注册用户
     */
    public User register(String username, String password, String email, String phone) {
        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("用户名已存在");
        }
        
        User user = new User();
        user.setUsername(username);
        user.setPassword(password); // 实际项目中应该加密
        user.setEmail(email);
        user.setPhone(phone);
        
        return userRepository.save(user);
    }

    /**
     * 根据用户名查询用户
     */
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
