Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.Bonus 2:
Aggiungiamo la possibilita' di modificare in tempo reale con un input sia l'h1 che l'url dell'immagine!Bonus Special:
Al click sull'immagine facciamo succedere qualcosa di creativo!


Esercizio : 
1) Inseriamo Vue tramite CDN 
2) Aggiungiamo lo script del file js nel body 
3) Inseriamo il container della nostra app all'interno del body 
4) Creiamo una funzione in js che ci ritorna il valore che vogliamo stamparare ed asseggnamo quel valore ad una variabile tramite vue.
    - Richiamiamo quella variabile all'interno del container app attaccada ad un tag (h1 in questo caso) {{variabile}} per permetterci di visualizzarla 
5) Utilizziamo alla stessa maniera questi dati creati all'interno della funzione per attaccarci nel nostro src dell'img un immagine 
6) Per aggiungere la possibilità di modificare in tempo reale con un imput utilizziamo il v-model che ci permette di associare a livello bidirezionale il DOM ed il nostro script js
7) Per aggiungere qualcosa di creativo all'immagine facciamo in modo di rendere l'immagine cliccabile con @click dove all'interno del js ne verrà gestito il comportamente