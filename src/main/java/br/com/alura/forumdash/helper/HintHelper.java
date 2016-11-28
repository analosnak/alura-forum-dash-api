package br.com.alura.forumdash.helper;

public class HintHelper {

	public static String getHint(String category) {
		if(category.equals("Business")) {
			return "BS";
		}
		if(category.contains("Design")) {
			return "DU";
		}
		if(category.equals("Front-end")) {
			return "FE";
		}
		if(category.equals("Infraestrutura")) {
			return "IN";
		}
		if(category.equals("Mobile")) {
			return "MB";
		}
		if(category.equals("Programação")) {
			return "PR";
		}
		return "OFF";
	}
}
