/* Interazione con l'utente: Aggiungere un componente JavaScript per gestire il click sul bottone "submit" del form.
Calcolo del preventivo: Quando l'utente invia il form, il sito calcola il preventivo basato su un numero fisso di ore di lavoro (10 ore).
Prezzo orario:
Sviluppo backend: 20,50€/ora
Sviluppo frontend: 15,30€/ora
Analisi progettuale: 33,60€/ora
Codice promozionale: L'utente può inserire uno dei seguenti codici per uno sconto del 25%: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
Validazione del codice: Se il codice è valido, si applica lo sconto; altrimenti, viene informato l'utente che il codice non è valido e il prezzo finale è calcolato senza sconto.
Visualizzazione del risultato: Il prezzo finale deve essere mostrato con due decimali e il simbolo dell'euro.

*/

// Definisco variabili che utilizzerò per il calcolo del preventivo

const workType = document.getElementById('work-type');

let pricePerHour;

const backendPricePerHour = 20.50;
const frontendPricePerHour = 15.30;
const analysisPricePerHour = 33.60;

const workHour = 10;

const promoCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

const userPromoCode = document.getElementById('inputCode');

const discontPromoCode = 25;



// Calcolo del preventivo al momento dell'invio del form
// Prendo l'elemento form e creo un'evento al click del button submit

const formQuoteRequest = document.getElementById('quote-request');

formQuoteRequest.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('ho inviato form');
    console.log(userPromoCode.value);
    console.log(workType.value);

})

