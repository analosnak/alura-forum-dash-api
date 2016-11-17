package br.com.alura.forumdash.controller;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@RestController
public class ForumController {

	@GetMapping(value="/sem-repostas", produces=MediaType.APPLICATION_JSON_VALUE)
	@Cacheable(cacheNames="topics")
	public String openTopics(){
		return new RestTemplate().getForObject("http://192.168.114.5:8080/d23hd728h7h8f70fh0f0837fh74387fh3478/forum/sem-respostas", String.class);
	}

}
