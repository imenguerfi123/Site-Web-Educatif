package com.example.demo.web;

import com.example.demo.dao.ContactRepository;
import com.example.demo.dao.UtilisateurRepository;
import com.example.demo.entities.Commande;
import com.example.demo.entities.Contact;
import com.example.demo.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/contact")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @PostMapping("/ajouter/{idu}")
    public Contact ajoutercontact (@RequestBody Contact contact,@PathVariable Long idu){
        Utilisateur utilisateur = utilisateurRepository.getOne(idu);
        contact.setUtilisateur(utilisateur);
        return contactRepository.save(contact);}

    @GetMapping("/all")
    public List<Contact> getall(){
        return contactRepository.findAll();
    }

    @PutMapping("/update/{id}/{idu}")
    public Contact modifier(@RequestBody Contact contact, @PathVariable Long id,@PathVariable Long idu){
        Utilisateur utilisateur = utilisateurRepository.getOne(idu);
        contact.setUtilisateur(utilisateur);
        contact.setId(id);
        return contactRepository.saveAndFlush(contact);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            contactRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getcontact")
    public Contact getbyId(@RequestParam Long id) {
        return contactRepository.getOne(id);
    }
}
