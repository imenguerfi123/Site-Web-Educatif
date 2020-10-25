package com.example.demo.web;


import com.example.demo.dao.CommentaireRepository;
import com.example.demo.dao.CoursRepository;
import com.example.demo.dao.ProjetRepository;
import com.example.demo.dao.UtilisateurRepository;
import com.example.demo.entities.Commentaire;
import com.example.demo.entities.Cours;
import com.example.demo.entities.Projet;
import com.example.demo.entities.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/commentaire")
@CrossOrigin("*")
public class CommentaireController {
    @Autowired
    private CommentaireRepository commentaireRepository;
    @Autowired
    private ProjetRepository projetRepository;
    @Autowired
    private CoursRepository coursRepository;
    @Autowired
    private UtilisateurRepository utilisateurRepository;


    @PostMapping("/ajoutercomproj/{idp}/{idu}")
    public Commentaire ajoutercommentaireprojet (@RequestBody Commentaire commentaire,@PathVariable Long idp,@PathVariable Long idu){
        Projet projet = projetRepository.getOne(idp);
        commentaire.setProjet(projet);
        Utilisateur utilisateur =utilisateurRepository.getOne(idu);
        commentaire.setUtilisateur(utilisateur);
        return commentaireRepository.save(commentaire);
    }
    @PostMapping("/ajoutercomcours/{idc}/{idu}")
    public Commentaire ajoutercommentairecours (@RequestBody Commentaire commentaire,@PathVariable Long idc,@PathVariable Long idu){
        Cours cours = coursRepository.getOne(idc);
        commentaire.setCours(cours);
        Utilisateur utilisateur =utilisateurRepository.getOne(idu);
        commentaire.setUtilisateur(utilisateur);
        return commentaireRepository.save(commentaire);
    }

    @GetMapping("/all")
    public List<Commentaire> getall(){
        return commentaireRepository.findAll();
    }

    @PutMapping("/updatecommentaireprojet/{id}/{idp}")
    public Commentaire modifiercommentaireprojet(@RequestBody Commentaire commentaire, @PathVariable Long id,@PathVariable Long idp,@PathVariable Long idu){
        Projet projet = projetRepository.getOne(idp);
        commentaire.setProjet(projet);
        Utilisateur utilisateur =utilisateurRepository.getOne(idu);
        commentaire.setUtilisateur(utilisateur);
        commentaire.setId(id);
        return commentaireRepository.saveAndFlush(commentaire);
    }
    @PutMapping("/updatecommentairercours/{id}/{idc}")
    public Commentaire modifiecommentairercours(@RequestBody Commentaire commentaire, @PathVariable Long id,@PathVariable Long idc,@PathVariable Long idu){
        commentaire.setId(id);
        Cours cours = coursRepository.getOne(idc);
        commentaire.setCours(cours);
        Utilisateur utilisateur =utilisateurRepository.getOne(idu);
        commentaire.setUtilisateur(utilisateur);
        return commentaireRepository.saveAndFlush(commentaire);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            commentaireRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getcommentaire")
    public Commentaire getbyId(@RequestParam Long id) {
        return commentaireRepository.getOne(id);
    }
}
