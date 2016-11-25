package br.com.alura.forumdash.model;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Controller
public class ForumController {

	@GetMapping(value="/openTopics", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public TopicList openTopics(){
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("user-agent", "alura-dash");
		HttpEntity<String> entity = new HttpEntity<String>(headers);

		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<TopicList> topicList = restTemplate.exchange("https://cursos.alura.com.br/d23hd728h7h8f70fh0f0837fh74387fh3478/forum/sem-respostas", HttpMethod.GET, entity, TopicList.class);
	
		return topicList.getBody();
	}

}
