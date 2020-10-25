package com.example.demo.web;

import com.example.demo.dao.CategoriesRepository;
import com.example.demo.dao.ProjetRepository;
import com.example.demo.entities.Categories;
import com.example.demo.entities.Projet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/projets")
@CrossOrigin("*")
public class ProjetController {
    @Autowired
    private ProjetRepository projetRepository;
    @Autowired
    private CategoriesRepository categoriesRepository;

    @PostMapping("/ajouter/{idc}")
    public Projet ajouterproduit(@RequestBody Projet projet,@PathVariable Long idc){
        Categories categories = categoriesRepository.getOne(idc);
        projet.setC(categories);
        return projetRepository.saveAndFlush(projet);
    }
    @GetMapping("/all")
    public List<Projet> getall(){
        return projetRepository.findAll();

    }

    @PutMapping("/update/{id}/{idc}")
    public Projet modifier(@RequestBody Projet projet, @PathVariable Long id,@PathVariable Long idc){
        Categories categories = categoriesRepository.getOne(idc);
        projet.setC(categories);
        projet.setId(id);
        return projetRepository.saveAndFlush(projet);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap deleteUser(@PathVariable Long id){
        HashMap hashMap= new HashMap();
        try {
            projetRepository.deleteById(id);
            hashMap.put("state", "yes");
        }
        catch (Exception e){
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getprojet/{id}")
    public Projet getbyId(@PathVariable Long id){
        return projetRepository.getOne(id);
    }
}
