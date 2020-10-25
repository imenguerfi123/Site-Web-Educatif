package com.example.demo.web;

import com.example.demo.dao.CoursRepository;
import com.example.demo.dao.Travaux_DirigesRepository;
import com.example.demo.entities.Cours;
import com.example.demo.entities.Travaux_diriges;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/travaux")
@CrossOrigin("*")
public class Travaux_DirigesController {
    @Autowired
    private Travaux_DirigesRepository travaux_dirigesRepository;
    @Autowired
    private CoursRepository coursRepository;

    @PostMapping("/ajouter/{idc}")
    public Travaux_diriges ajouterproduit(@RequestBody Travaux_diriges travaux_diriges,@PathVariable Long idc){
        Cours cours =  coursRepository.getOne(idc);
        travaux_diriges.setCours(cours);
        return travaux_dirigesRepository.save(travaux_diriges);
    }
    @GetMapping("/all")
    public List<Travaux_diriges> getall(){
        return travaux_dirigesRepository.findAll();

    }

    @PutMapping("/update/{id}/{idc}")
    public Travaux_diriges modifier(@RequestBody Travaux_diriges travaux_diriges, @PathVariable Long id,@PathVariable Long idc){
        Cours cours =  coursRepository.getOne(idc);
        travaux_diriges.setCours(cours);
        travaux_diriges.setId(id);
        return travaux_dirigesRepository.saveAndFlush(travaux_diriges);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap deleteUser(@PathVariable Long id){
        HashMap hashMap= new HashMap();
        try {
            travaux_dirigesRepository.deleteById(id);
            hashMap.put("state", "yes");
        }
        catch (Exception e){
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getprojet")
    public Travaux_diriges getbyId(@RequestParam Long id){
        return travaux_dirigesRepository.getOne(id);
    }
}
