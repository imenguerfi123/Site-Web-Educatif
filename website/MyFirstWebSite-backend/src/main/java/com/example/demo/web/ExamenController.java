package com.example.demo.web;

import com.example.demo.dao.CoursRepository;
import com.example.demo.dao.ExamenRepository;
import com.example.demo.entities.Cours;
import com.example.demo.entities.Examen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/Examens")
public class ExamenController {
    @Autowired
    private ExamenRepository examenRepository;
    @Autowired
    private CoursRepository coursRepository;

    @PostMapping("/ajouter/{idc}")
    public Examen ajoutercours (@RequestBody Examen examen,@PathVariable Long idc)
    {
        Cours cours =  coursRepository.getOne(idc);
        examen.setCours(cours);
        return examenRepository.saveAndFlush(examen);}

    @GetMapping("/all")
    public List<Examen> getall(){
        return examenRepository.findAll();
    }

    @PutMapping("/update/{id}/{idc}")
    public Examen modifier(@RequestBody Examen examen, @PathVariable Long id,@PathVariable Long idc){
        Cours cours =  coursRepository.getOne(idc);
        examen.setCours(cours);
        examen.setId(id);
        return examenRepository.saveAndFlush(examen);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            examenRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getcontact")
    public Examen getbyId(@RequestParam Long id) {
        return examenRepository.getOne(id);
    }
}

