package br.com.alura.forumdash.model;

import java.util.List;

import br.com.alura.forumdash.controller.TopicVisualization;

public class TopicList {
	
	private List<TopicVisualization> list;

	public List<TopicVisualization> getList() {
		return list;
	}
	
	public void setList(List<TopicVisualization> list) {
		this.list = list;
	}
}
