package com.example.demo.web;

import com.example.demo.dao.ContactRepository;
import com.example.demo.dao.UtilisateurRepository;
import com.example.demo.entities.Contact;
import com.example.demo.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/utilisateur")
public class UtilisateurController {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @PostMapping("/ajouter")
    public Utilisateur ajouterUtilisateur (@RequestBody Utilisateur utilisateur)
    {
        return utilisateurRepository.saveAndFlush(utilisateur);}

    @GetMapping("/all")
    public List<Utilisateur> getall(){
        return utilisateurRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public Utilisateur modifier(@RequestBody Utilisateur utilisateur, @PathVariable Long id){
        utilisateur.setId(id);
        return utilisateurRepository.saveAndFlush(utilisateur);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            utilisateurRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getprofil/{id}")
    public Utilisateur getbyId(@PathVariable Long id){
        return utilisateurRepository.getOne(id);
    }

    @PostMapping("/connexion")
    public Utilisateur login(@RequestBody Utilisateur utilisateur){
        return utilisateurRepository.login(utilisateur.getLogin(),utilisateur.getMot_de_passe());
    }
}
