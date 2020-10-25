package com.example.demo.web;

import com.example.demo.dao.CoursRepository;
import com.example.demo.dao.TpsRepository;
import com.example.demo.entities.Cours;
import com.example.demo.entities.Projet;
import com.example.demo.entities.Tps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/tps")
@CrossOrigin("*")
public class TpsController {
    @Autowired
    private TpsRepository tpsRepository;
    @Autowired
    private CoursRepository coursRepository;

    @PostMapping("/ajouter/{idc}")
    public Tps ajoutertp(@RequestBody Tps tps,@PathVariable Long idc){
        Cours cours =  coursRepository.getOne(idc);
        tps.setCours(cours);
        return tpsRepository.save(tps);
    }

    @GetMapping("/all")
    public List<Tps> getall(){
        return tpsRepository.findAll();
    }

    @PutMapping("/update/{id}/{idc}")
    public Tps modifier(@RequestBody Tps tps, @PathVariable Long id,@PathVariable Long idc){
        Cours cours =  coursRepository.getOne(idc);
        tps.setCours(cours);
        tps.setId(id);
        return tpsRepository.saveAndFlush(tps);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap deleteUser(@PathVariable Long id){
        HashMap hashMap= new HashMap();
        try {
            tpsRepository.deleteById(id);
            hashMap.put("state", "yes");
        }
        catch (Exception e){
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getprojet")
    public Tps getbyId(@RequestParam Long id){
        return tpsRepository.getOne(id);
    }
}
