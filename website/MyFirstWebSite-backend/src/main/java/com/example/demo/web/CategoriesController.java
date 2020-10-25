package com.example.demo.web;

import com.example.demo.dao.CategoriesRepository;
import com.example.demo.entities.Categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoriesController {
    @Autowired
    private CategoriesRepository categoriesRepository;
    @PostMapping("/ajouter")
    public Categories ajoutercategories (@RequestBody Categories categories){return categoriesRepository.save(categories);}

    @GetMapping("/all")
    public List<Categories> getall(){
        return categoriesRepository.findAll();
    }
    @PutMapping("/update/{id}")
    public Categories modifier(@RequestBody Categories categories, @PathVariable Long id){
        categories.setId(id);
        return categoriesRepository.saveAndFlush(categories);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id){
        HashMap hashMap= new HashMap();
        try {
            categoriesRepository.deleteById(id);
            hashMap.put("state", "yes");
        }
        catch (Exception e){
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getcategorie")
    public Categories getbyId(@RequestParam Long id) {
        return categoriesRepository.getOne(id);
    }
}

