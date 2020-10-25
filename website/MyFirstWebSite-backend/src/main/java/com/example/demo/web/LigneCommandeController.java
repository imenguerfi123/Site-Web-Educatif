package com.example.demo.web;

import com.example.demo.dao.CommandeRepository;
import com.example.demo.dao.LigneCommandeRepository;
import com.example.demo.entities.Commande;
import com.example.demo.entities.LigneCommande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/lignecommande")
public class LigneCommandeController {
    @Autowired
    private LigneCommandeRepository lignaComandeRepository;

    @PostMapping("/ajouter")
    public LigneCommande ajouterlignecommande (@RequestBody LigneCommande ligneCommande)
    {
        return lignaComandeRepository.save(ligneCommande);}

    @GetMapping("/all")
    public List<LigneCommande> getall(){
        return lignaComandeRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public LigneCommande modifier(@RequestBody LigneCommande ligneCommande, @PathVariable Long id){
        ligneCommande.setId(id);
        return lignaComandeRepository.saveAndFlush(ligneCommande);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            lignaComandeRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }

}
