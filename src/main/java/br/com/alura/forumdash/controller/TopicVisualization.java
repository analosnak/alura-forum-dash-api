package br.com.alura.forumdash.controller;

import static java.time.format.DateTimeFormatter.ofPattern;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class TopicVisualization {

	private LocalDateTime creationDate;

	private Integer days;

	private String category;

	private String subcategory;

	private String course;

	private String title;

	private String link;

	public TopicVisualization() {
		// TODO Auto-generated constructor stub
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = LocalDateTime.parse(creationDate, ofPattern("dd/MM/yyyy kk:mm"));
	}

	public void setDays(Integer days) {
		this.days = days;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public long getSize() {
		return Duration.between(creationDate, LocalDateTime.now()).get(ChronoUnit.SECONDS);
	}

	public String getColor() {
		return "#ffffff";
	}

	public String getCategory() {
		return category;
	}

	public String getSubcategory() {
		return subcategory;
	}

	public String getCourse() {
		return course;
	}

	public String getTitle() {
		return title;
	}

	public String getLink() {
		return link;
	}

	public Integer getDays() {
		return days;
	}

}
