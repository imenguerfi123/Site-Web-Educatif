package com.example.demo.web;

import com.example.demo.dao.CommandeRepository;
import com.example.demo.entities.Commande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/commande")
public class CommandeController {
    @Autowired
    private CommandeRepository commandeRepository;

    @PostMapping("/ajouter")
    public Commande ajoutercommande (@RequestBody Commande commande){return commandeRepository.save(commande);}

    @GetMapping("/all")
    public List<Commande> getall(){
        return commandeRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public Commande modifier(@RequestBody Commande commande, @PathVariable Long id){
        commande.setId(id);
        return commandeRepository.saveAndFlush(commande);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            commandeRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getcommande")
    public Commande getbyId(@RequestParam Long id) {
        return commandeRepository.getOne(id);
    }
}
