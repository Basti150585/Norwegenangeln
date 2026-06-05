Angelreise Manager – Login Sofort Final

Korrigiert:
- Der Hinweis „Nur der Reiseleiter darf den strukturierten Datenbankstand laden“ wird beim Login unterdrückt.
- Beim Login wird keine reiseleiterpflichtige Datenbankfunktion mehr automatisch aufgerufen.
- Teilnehmer und Reiseleiter können sich sofort anmelden.
- Teilnehmer-Login prüft Kürzel + Passwort.
- Teilnehmer ohne Passwort erhalten automatisch Fisch2026Titran.
- Für Teilnehmer werden automatisch eindeutige Kürzel erzeugt, falls noch keine gesetzt sind.
- Akzeptierte Teilnehmer-Kürzel:
  - gespeichertes loginCode/Kürzel
  - local_id
  - id
  - automatisch erzeugte Initialen

Test:
1. reset.html öffnen.
2. App öffnen.
3. Reise auswählen.
4. Rolle Teilnehmer auswählen.
5. Teilnehmer-Kürzel eingeben.
6. Passwort Fisch2026Titran eingeben.
