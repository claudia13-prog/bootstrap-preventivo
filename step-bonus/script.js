
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

const workTypeSelected = document.getElementById('work-type');

let pricePerHour;

const backendPricePerHour = 20.50;
const frontendPricePerHour = 15.30;
const analysisPricePerHour = 33.60;

const workHour = 10;

const promoCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

const userPromoCode = document.getElementById('inputCode');

const discontPromoCode = 25;

const finalPriceField = document.getElementById('final-price')

const divElementString = document.createElement('div');
divElementString.classList.add('fw-bold', 'fs-5');

const divElementResult = document.createElement('div');
divElementResult.classList.add('fw-bold', 'fs-2');


finalPriceField.appendChild(divElementString);
finalPriceField.appendChild(divElementResult);

const name = document.getElementById('inputName');
const lastName = document.getElementById('inputLastName');
const email = document.getElementById('inputEmail');

const nameLabel = document.getElementById('name-label');
const lastNameLabel = document.getElementById('lastname-label');
const emailLabel = document.getElementById('email-label');

// STEP BONUS
// Prova a generare dinamicamente le opzioni della select a partire da un oggetto js.

const works = [
    {
        type: 'Backend Development',
        price: 20.50,
    },
    {
        type: 'Frontend Development',
        price: 15.30,
    },
    {
        type: 'Project Analysis',
        price: 33.60,
    }
];

console.log(works);


// Calcolo del preventivo al momento dell'invio del form
// Prendo l'elemento form e creo un'evento al click del button submit

const formQuoteRequest = document.getElementById('quote-request');

formQuoteRequest.addEventListener('submit', function(event){
    event.preventDefault();
    
    // Reset Nome valido
    nameLabel.innerHTML = 'Nome';
    nameLabel.classList.remove('text-danger');
    name.classList.remove('bg-danger-subtle');

    // Reset Cognome valido
    lastNameLabel.innerHTML = 'Cognome';
    lastNameLabel.classList.remove('text-danger');
    lastName.classList.remove('bg-danger-subtle');

    // Reset Email valida
    emailLabel.innerHTML = 'Email';
    emailLabel.classList.remove('text-danger');
    email.classList.remove('bg-danger-subtle');


    if(isAWord(name.value) === false){

        nameLabel.innerHTML = 'Nome non valido';
        nameLabel.classList.add('text-danger');
        name.classList.add('bg-danger-subtle');

    }else if(isAWord(lastName.value) === false){

        lastNameLabel.innerHTML = 'Cognome non valido';
        lastNameLabel.classList.add('text-danger');
        lastName.classList.add('bg-danger-subtle');
   
    }else if(isAnEmail(email.value) === false){

        emailLabel.innerHTML = 'Email non valida';
        emailLabel.classList.add('text-danger');
        email.classList.add('bg-danger-subtle');

    }else if(workTypeSelected.value === "Seleziona il tipo di lavoro"){

        divElementString.innerHTML = 'Non hai selezionato il tipo di lavoro';
        divElementResult.innerHTML = '';


    }else{
        

             
    // Verifico la selezione dell'utente e in base a quello salvo il prezzo orario in una variabile


        if(workTypeSelected.value === "backend-development"){
            pricePerHour = backendPricePerHour;
        } else if(workTypeSelected.value === "frontend-development"){
            pricePerHour = frontendPricePerHour;
        } else if(workTypeSelected.value === "project-analysis"){
            pricePerHour = analysisPricePerHour;
        }

            // Calcolo del prezzo finale 

            let finalPrice = pricePerHour * workHour;
        
            // Verifico se è stato utilizzato codice
        
            const promoCodeValid = isPromoCodeValid(userPromoCode.value, promoCode);
        
            console.log(promoCodeValid);
        
            if(userPromoCode.value.length === 0){
        
                divElementString.innerHTML = 'Prezzo finale:';
                divElementResult.innerHTML = `€ ${finalPrice.toFixed(2)}`;
        
        
            } else if(promoCodeValid === false){
        
                divElementString.innerHTML = 'Codice non valido. Prezzo finale:';
                divElementResult.innerHTML = `€ ${finalPrice.toFixed(2)}`;
            
        
            } else { 
        
                finalPrice -= finalPrice * (discontPromoCode / 100); 
                divElementString.innerHTML = 'Prezzo finale:';
                divElementResult.innerHTML = `€ ${finalPrice.toFixed(2)}`;
        
        
            }

        
        }

  
})



/******************** FUNZIONI ***********************/

/* Creo una funzione per verificare se il codice inserito dall'utente sia valido o meno

@param {array}
@param {string}
@returns {boolean}
 * 
 */

function isPromoCodeValid(string, array){
    
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) { 
       
        if (string === array[i]) {
            return true; // Restituisce true se il codice è trovato
        }
    }

    return false; // Restituisce false se il codice non è trovato
}


/* Creo una funzione per verificare se i campi nome e cognome contengono parole

@param {word}
@returns {boolean}
 * 
 */


function isAWord(word){

    if (/[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(word) || word.length < 2 || word.length > 50) {
        return false;
    } else {
        return true;
    }
}


/* Creo una funzione per verificare se il campo email contiene almeno una @ e un punto

@param {email}
@returns {boolean}
 * 
 */

function isAnEmail(email){
    if(email.length < 6){
       return false;
    }else if(/@.*\./.test(email)){
        return true;
    } else{
        return false;
    }
}

