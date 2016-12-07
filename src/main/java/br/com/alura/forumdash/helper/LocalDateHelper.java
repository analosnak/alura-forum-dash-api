package br.com.alura.forumdash.helper;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class LocalDateHelper {

	private static final String DATE_FORMAT = "dd/MM/yyyy kk:mm";

	public static LocalDateTime getLocalCreationDate(String creationDate) {

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT);

		LocalDateTime originallocalDateTime = LocalDateTime.parse(creationDate,
				formatter);

		// LocalDateTime + ZoneId = ZonedDateTime
		ZoneId londonZoneId = ZoneId.of("Europe/London");
		ZonedDateTime originalZonedDateTime = originallocalDateTime
				.atZone(londonZoneId);

		ZoneId spZoneId = ZoneId.of("America/Sao_Paulo");
		ZonedDateTime spZonedDateTime = originalZonedDateTime
				.withZoneSameInstant(spZoneId);

		LocalDateTime convertedLocalDateTime = LocalDateTime.parse(
				formatter.format(spZonedDateTime), formatter);
		return convertedLocalDateTime;
	}
}
