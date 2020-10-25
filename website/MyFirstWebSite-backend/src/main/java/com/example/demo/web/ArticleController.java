package com.example.demo.web;

import com.example.demo.dao.ArticleRepository;
import com.example.demo.dao.CategoriesRepository;
import com.example.demo.entities.Article;
import com.example.demo.entities.Categories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private CategoriesRepository categoriesRepository;

    @PostMapping("/ajouter/{idc}")
    public Article ajouterarticle (@RequestBody Article article,@PathVariable Long idc){
        Categories categories = categoriesRepository.getOne(idc);
        article.setCat(categories);

        return articleRepository.saveAndFlush(article);}

    @GetMapping("/all")
    public List<Article> getall(){
        return articleRepository.findAll();
    }


    @PutMapping("/update/{id}/{idc}")
    public Article modifier(@RequestBody Article article, @PathVariable Long id,@PathVariable Long idc){
        Categories categories = categoriesRepository.getOne(idc);
        article.setCat(categories);
        article.setId(id);
        return articleRepository.saveAndFlush(article);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap delete(@PathVariable Long id) {
        HashMap hashMap = new HashMap();
        try {
            articleRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getarticle")
    public Article getbyId(@RequestParam Long id){
        return articleRepository.getOne(id);
    }

}
