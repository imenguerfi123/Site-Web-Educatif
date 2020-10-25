package com.example.demo.web;

import com.example.demo.dao.CategoriesRepository;
import com.example.demo.dao.CoursRepository;
import com.example.demo.entities.Categories;
import com.example.demo.entities.Contact;
import com.example.demo.entities.Cours;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import java.util.HashMap;
import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/cours")
public class CoursController {
    @Autowired
    private CoursRepository coursRepository;
    @Autowired
    private CategoriesRepository categoriesRepository;


    @PostMapping("/ajouter/{idc}")
    public Cours ajoutercours (@RequestBody Cours cours,@PathVariable Long idc){
        Categories categories = categoriesRepository.getOne(idc);
        cours.setCa(categories );
        return coursRepository.saveAndFlush(cours);}

    @GetMapping("/all")
    public List<Cours> getall(){
        return coursRepository.findAll();
    }

    @PutMapping("/update/{id}/{idc}")
    public Cours modifier(@RequestBody Cours cours, @PathVariable Long id,@PathVariable Long idc){
        Categories categories = categoriesRepository.getOne(idc);
        cours.setCa(categories );
        cours.setId(id);
        return coursRepository.saveAndFlush(cours);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            coursRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getcours/{id}")
    public Cours getbyId(@PathVariable Long id) {
        return coursRepository.getOne(id);
    }
}
