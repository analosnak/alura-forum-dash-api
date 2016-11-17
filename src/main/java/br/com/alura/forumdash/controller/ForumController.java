package br.com.alura.forumdash.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ForumController {

	@GetMapping(value="/sem-repostas", produces=MediaType.APPLICATION_JSON_VALUE)
	public String openTopics(){
		return jsonPhill();
	}

	private String jsonPhill() {		
		return "[\r\n  {\r\n    \"creationDate\": \"05/11/2016 11:00:00\",\r\n    \"days\": 10,\r\n    \"category\": \"Programa\u00E7\u00E3o\",\r\n    \"subcategory\": \"L\u00F3gica de Programa\u00E7\u00E3o\",\r\n    \"course\": \"Arduino\",\r\n    \"title\": \"N\u00E3o vai ter resposta!\",\r\n    \"link\": \"http://alura.com.br\"\r\n  },\r\n  {\r\n    \"creationDate\": \"05/11/2016 11:00:00\",\r\n    \"days\": 10,\r\n    \"category\": \"Programa\u00E7\u00E3o\",\r\n    \"subcategory\": \"L\u00F3gica de Programa\u00E7\u00E3o\",\r\n    \"course\": \"Arduino\",\r\n    \"title\": \"N\u00E3o vai ter resposta!\",\r\n    \"link\": \"http://alura.com.br\"\r\n  },\r\n  {\r\n    \"creationDate\": \"05/11/2016 11:00:00\",\r\n    \"days\": 10,\r\n    \"category\": \"Programa\u00E7\u00E3o\",\r\n    \"subcategory\": \"L\u00F3gica de Programa\u00E7\u00E3o\",\r\n    \"course\": \"Arduino\",\r\n    \"title\": \"N\u00E3o vai ter resposta!\",\r\n    \"link\": \"http://alura.com.br\"\r\n  }\r\n]";
	}
}
