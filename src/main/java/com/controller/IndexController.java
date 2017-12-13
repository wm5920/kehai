package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 首页Controller
 * <p>
 * Created by sdevil507 on 2017/8/8.
 */
@Controller
@RequestMapping("/")
public class IndexController {

    @RequestMapping(value = "/", method = {RequestMethod.GET,RequestMethod.POST})
    public String blankIndex() {
        return "redirect:/kehai/html/index.html";
    }

}
