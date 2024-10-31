# Richiesta preventivo

## Step 1
- Identificare le macro-aree della pagina.
- Creare uno scheletro HTML utilizzando commenti e tag appropriati.
- Assicurarsi che il layout sia ottimizzato per la visualizzazione su desktop e mobile.

## Step 2
- Interazione con l'utente: Aggiungere un componente JavaScript per gestire il click sul bottone "submit" del form.
- Calcolo del preventivo: Quando l'utente invia il form, il sito calcola il preventivo basato su un numero fisso di ore di lavoro (10 ore).
- Prezzo orario:
1) Sviluppo backend: 20,50€/ora
2) Sviluppo frontend: 15,30€/ora
3) Analisi progettuale: 33,60€/ora
- Codice promozionale: L'utente può inserire uno dei seguenti codici per uno sconto del 25%: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
- Validazione del codice: Se il codice è valido, si applica lo sconto; altrimenti, viene informato l'utente che il codice non è valido e il prezzo finale è calcolato senza sconto.
- Visualizzazione del risultato: Il prezzo finale deve essere mostrato con due decimali e il simbolo dell'euro.

## Step BONUS
Genera dinamicamente le opzioni della select a partire da un oggetto js.