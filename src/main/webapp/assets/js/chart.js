function processData(data) {
	return {children: data.list};
}

function valueOfTooltip(topic) {
	var str = '';
	
	if(topic.category === '') {
		str += 'Off Topic\n';
	} else {
		str += 'Categoria: ' + topic.category + '\n' +
		'Subcategoria: ' + topic.subcategory + '\n' +
		'Curso: ' + topic.course + '\n';
	}
	
	str += 'Título: ' + topic.title;
	return str;
}

function render(data) {
	
	var diameter = 600;
	
	var svg = d3.select("#graph")
					.append("svg")
					.attr("width", "55%")
					.attr("height", "100%");
	
	var bubble = d3.layout
					.pack()
					.size([diameter, diameter])
					.sort(null)
					.value(d => d.size)
					.padding(3);
	
	var nodes = bubble
				.nodes(processData(data))
				.filter(d => !d.children);
	
	var vis = svg.selectAll("circle")
					.data(nodes);
	
	var node = vis.enter()
					.append("g")
					.attr("transform", d => "translate(" + d.x + "," + d.y + ")")
					.on("click", d => window.open(d.link));
	
	node.append("circle")
			.attr("id", d => d.link)
			.attr("r", d => d.r )
			.attr("class", "bolha")
			.attr("fill", d => d.color);
	
	node.append("text")
			.attr("font-size", "15")
			.attr("font-weight", "bold")
			.attr("text-anchor", "middle")
			.attr("alignment-baseline", "central")
			.attr("fill", "white")
			.text(d => d.hint);
	
	node.append("title")
			.text(d => valueOfTooltip(d));
}

fetch('/openTopics', {method: 'get'} )
	.then(response => response.json())
	.then(json => render(json));
