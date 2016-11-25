(function() {
	var json = {  
		"list":[  
			{  
				"days":1,
				"category":"Front-end",
				"subcategory":"Frameworks MVC",
				"course":"Angular 2: webapps ainda mais poderosas parte 2 ",
				"title":"Utilizar informação do Json convertido pela rota",
				"link":"/forum/utilizar-informacao-do-json-convertido-pela-rota-27409",
				"color":"#fdc14a",
				"size":182502
			}, {
				"days":0,
				"category":"Programação",
				"subcategory":"PHP",
				"course":"PHP e MySQL II: Cookies, sessões e mais recursos",
				"title":"The requested resource /mo.php was not found on this server.",
				"link":"/forum/the-requested-resource-mo-php-was-not-found-on-this-server-27490",
				"color":"#00c86f",
				"size":87522
			}, {
				"days":0,
				"category":"Business",
				"subcategory":"Documentação",
				"course":"UML: Uma introdução à modelagem",
				"title":"Diagrama da solução",
				"link":"/forum/diagrama-da-solucao-27508",
				"color":"#009bdd",
				"size":63042
			}, {
				"days":0,
				"category":"Business",
				"subcategory":"Governança",
				"course":"Certificação ITIL Foundation 2: Estratégias e desenho de serviços",
				"title":"Contrato de Aluguel faz parte da Gestão de riscos?",
				"link":"/forum/contrato-de-aluguel-faz-parte-da-gestao-de-riscos-27547",
				"color":"#0079ac",
				"size":11442
			}, {
				"days":0,
				"category":"Front-end",
				"subcategory":"JavaScript",
				"course":"",
				"title":"Apps offline: O quão offline são?",
				"link":"/forum/apps-offline-o-quao-offline-sao-27548",
				"color":"#9d60b8",
				"size":10902
			}, {
				"days":0,
				"category":"Programação",
				"subcategory":"Java para Web",
				"course":"Spring MVC II: Integração, cache, segurança e templates",
				"title":"Atributo na tag Title com Tiles",
				"link":"/forum/atributo-na-tag-title-com-tiles-27549",
				"color":"#9d60b8",
				"size":10842
			}, {
				"days":0,
				"category":"Programação",
				"subcategory":"PHP",
				"course":"PHP e MySQL II: Cookies, sessões e mais recursos",
				"title":"The requested resource /mo.php was not found on this server.",
				"link":"/forum/the-requested-resource-mo-php-was-not-found-on-this-server-27490",
				"color":"#00c86f",
				"size":87522
			}, {
				"days":0,
				"category":"Business",
				"subcategory":"Documentação",
				"course":"UML: Uma introdução à modelagem",
				"title":"Diagrama da solução",
				"link":"/forum/diagrama-da-solucao-27508",
				"color":"#009bdd",
				"size":63042
			}, {
				"days":1,
				"category":"Front-end",
				"subcategory":"Frameworks MVC",
				"course":"Angular 2: webapps ainda mais poderosas parte 2 ",
				"title":"Utilizar informação do Json convertido pela rota",
				"link":"/forum/utilizar-informacao-do-json-convertido-pela-rota-27409",
				"color":"#fdc14a",
				"size":182502
			}, {
				"days":0,
				"category":"Programação",
				"subcategory":".NET para web",
				"course":"ASP.NET MVC 5: O framework pronto para a web",
				"title":"Dúvida para repopular form depois de erro de validação",
				"link":"/forum/duvida-para-repopular-form-depois-de-erro-de-validacao-27531",
				"color":"#f1634b",
				"size":21462
			}, {
				"days":0,
				"category":"Programação",
				"subcategory":"PHP",
				"course":"Design Patterns PHP II: Boas práticas de programação",
				"title":"Por que é criada uma \"cópia\" do contrato no exercício do memento?",
				"link":"/forum/por-que-e-criada-uma-copia-do-contrato-no-exercicio-do-memento-27533",
				"color":"#9d60b8",
				"size":19722
			}, {
				"days":0,
				"category":"Business",
				"subcategory":"Governança",
				"course":"Certificação ITIL Foundation 2: Estratégias e desenho de serviços",
				"title":"Contrato de Aluguel faz parte da Gestão de riscos?",
				"link":"/forum/contrato-de-aluguel-faz-parte-da-gestao-de-riscos-27547",
				"color":"#0079ac",
				"size":11442
			}, {
				"days":1,
				"category":"Front-end",
				"subcategory":"Frameworks MVC",
				"course":"Angular 2: webapps ainda mais poderosas parte 2 ",
				"title":"Utilizar informação do Json convertido pela rota",
				"link":"/forum/utilizar-informacao-do-json-convertido-pela-rota-27409",
				"color":"#fdc14a",
				"size":182502
			}, {
				"days":0,
				"category":"Front-end",
				"subcategory":"JavaScript",
				"course":"",
				"title":"Apps offline: O quão offline são?",
				"link":"/forum/apps-offline-o-quao-offline-sao-27548",
				"color":"#9d60b8",
				"size":10902
			}, {
				"days":0,
				"category":"Programação",
				"subcategory":"Java para Web",
				"course":"Spring MVC II: Integração, cache, segurança e templates",
				"title":"Atributo na tag Title com Tiles",
				"link":"/forum/atributo-na-tag-title-com-tiles-27549",
				"color":"#9d60b8",
				"size":10842
			}]};

	var diameter = 600;

	var svg = d3.select("#graph")
					.append("svg")
					.attr("width", "55%")
					.attr("height", "100%");

	var bubble = d3.layout
					.pack()
					.size([diameter, diameter])
					.sort(null)
					.value((d) => (d.size))
					.padding(3);
 
	var nodes = bubble.nodes(processData(json))
					.filter((d) => (!d.children));

	var vis = svg.selectAll("circle")
					.data(nodes);

	var node = vis.enter()
					.append("g")
					.attr("transform", (d) => ("translate(" + d.x + "," + d.y + ")"))
					.on("click", (d) => (window.open(d.link)));

	node.append("circle")
					.attr("id", (d) => d.id)
					.attr("r", (d) => d.r )
					.attr("class", "bolha")
					.attr("fill", (d) => (d.color));

	node.append("text")
					.attr("font-size", "15")
					.attr("font-weight", "bold")
					.attr("text-anchor", "middle")
					.attr("alignment-baseline", "central")
					.attr("fill", "white")
					.text((d) => (d.id));

	node.append("title")
					.text((d) => (
						d.category + "\n" +
						d.subcategory + "\n" +
						d.course + "\n" +
						d.title));

	function getIdFromLink(link) {
		var arr = link.split("-");
		return arr[arr.length - 1];
	}

	function processData(data) {
		var newData = [];

		data.list.forEach((data, i) => {
			var obj = {
				link:        data.link,
				size:        data.size,
				color:       data.color,
				id:          getIdFromLink(data.link),
				category:    data.category,
				subcategory: data.subcategory,
				course:      data.course,
				title:       data.title
			};

			newData.push(obj);
		});

		return {children: newData};
	}
})();