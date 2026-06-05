Angelreise Manager – DB Laden loginCode Fix

Korrigiert:
- Fehler beim DB laden: „loginCode is not defined“.
- Teilnehmer-Kürzel werden nach dem DB-Laden automatisch normalisiert.
- Fehlende Teilnehmer-Kürzel werden aus Initialen oder local_id erzeugt.
- Fehlende Teilnehmer-Passwörter werden auf Fisch2026Titran gesetzt.
- Reiseleiter-Kürzel bleibt ReLe.

Nach GitHub-Upload:
- reset.html öffnen.
- Danach index.html öffnen.
- Als Reiseleiter anmelden.
- DB laden erneut testen.
