package br.com.alura.forumdash.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@RestController
public class ForumController {

	@GetMapping(value="/sem-respostas", produces=MediaType.APPLICATION_JSON_VALUE)
	public TopicList openTopics(){
		HttpHeaders headers = new HttpHeaders();
		headers.add("user-agent", "alura-dash");
		
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<TopicList> exchange = restTemplate.exchange("http://localhost:8080/d23hd728h7h8f70fh0f0837fh74387fh3478/forum/sem-respostas", HttpMethod.GET, entity, TopicList.class);
		
		return exchange.getBody();
	}

}
