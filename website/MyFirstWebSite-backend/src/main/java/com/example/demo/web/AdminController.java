package com.example.demo.web;

import com.example.demo.dao.AdminRepository;
import com.example.demo.entities.Admin;
import com.example.demo.entities.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private MailService mailService;

    @PostMapping("/ajouter")
    public Admin ajouteradmin (@RequestBody Admin admin){return adminRepository.save(admin);}

    @GetMapping("/all")
    public List<Admin> getall(){
        return adminRepository.findAll();
    }
    @PutMapping("/update/{id}")
    public Admin modifier(@RequestBody Admin admin, @PathVariable Long id){
        admin.setId(id);
        return adminRepository.saveAndFlush(admin);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            adminRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getprofil/{id}")
    public Admin getbyId(@PathVariable Long id){
        return adminRepository.getOne(id);
    }
    @PostMapping("/connexion")
    public Admin login(@RequestBody Admin admin){
        return adminRepository.login(admin.getLogin(),admin.getMot_de_passe());
    }
    @PostMapping("/sendmail")
    public String sendMail(@RequestBody Mail mail){
        System.out.println("Spring Mail - Sending Simple Email with JavaMailSender Example");

        mail.setFrom("imen.guerfi1994@gmail.com");
        mail.setTo(mail.getTo());
        mail.setSubject(mail.getSubject());
        mail.setContent(mail.getContent());
        mailService.sendSimpleMessage(mail);
        return "ok";}

}
