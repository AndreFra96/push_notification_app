# SQL Notification

Integrazione Firebase Cloud Messaging e database SQL

Tecnologie e Linguaggi per il Web - 
Andrea Francesco Brioschi - 
A.A. 2020-2021


Introduzione

SQL Notification è un servizio che permette di inviare notifiche push personalizzate utilizzando i dati contenuti in un database SQL.

Il servizio permette di integrare le funzionalità di Firebase Cloud Messaging con i dati di un database SQL, l&#39;integrazione avviene tramite la definizione di _gruppi di dispositivi._

Un gruppo di dispositivi è definito da una query sul database SQL, i campi estratti dalla query sono dette keywords e possono essere utilizzate all&#39;interno della notifica per personalizzare il messaggio.

Il servizio SQL Notification funziona in gran parte con strumenti già in possesso all&#39;utente, infatti ogni utente definisce un database da utilizzare e un account Firebase per l&#39;invio delle notifiche fornendo i parametri di connessione al database e all&#39;account Firebase Admin.

1 - Analisi dei requisiti

1.1 - Destinatari

L&#39;idea del progetto nasce dall&#39;esigenza dell&#39;azienda RCA SRL di personalizzare le notifiche push inviate agli utenti dell&#39;applicazione aziendale usando i dati contenuti in un database SQL.

All&#39;interno dell&#39;azienda alcuni dipendenti hanno conoscenze di SQL e si occuperanno di costruire e salvare i gruppi di dispositivi che potranno essere in seguito utilizzati da tutti gli altri dipendenti anche senza conoscere la query che li definisce.

Nonostante l&#39;azienda destinataria sia attualmente una sola è stata inserita la registrazione di diversi account che permette di definire per ogni utente un database e account Firebase diverso, in questo modo il servizio si apre all&#39;utilizzo con molteplici database e applicazioni.

1.2 - Aspetti Tecnologici

1.2.1 - Backend

Il Backend di SQL Notification è un server NodeJs che mette a disposizione una serie di API REST per l&#39;interazione con il database e l&#39;invio delle notifiche push personalizzate. Le richieste al backend devono essere autenticate tramite token che permette l&#39;identificazione dell&#39;utente che ha effettuato la richiesta.

**Autenticazione delle richieste (Auth0)**

Per l&#39;autenticazione delle richieste il servizio si appoggia a Auth0, una piattaforma per la gestione delle identità degli utenti che implementa il protocollo OAuth 2.0.

L&#39;autenticazione delle richieste avviene tramite token di tipo Bearer, il token viene inviato dal client al server backend che a sua volta lo utilizza per effettuare una richiesta al server Auth0 che restituisce al server del backend i dati dell&#39;utente corrispondente al token, in questo modo nelle chiamate fra server backend e client non vengono esposti i dati di configurazione del database e di Firebase Admin.

**Invio delle notifiche (Firebase Cloud Messaging)**

Il servizio utilizzato per l&#39;invio delle notifiche push è Firebase Cloud Messaging, ed è strutturato in questo modo:

- _Generatore di messaggi e target_: si occupa della creazione dei messaggi creando delle triplette titolo, descrizione e token che vengono inviate al backend FCM tramite Firebase Admin SDK
- _FCM backend_: legge i dati inviati dal gestore, genera i metadati del messaggio e li invia agli instradatori
- _Instradatori di messaggi specifici della piattaforma_:

  1. Android Trasport Layer per dispositivi Android
  2. iOS / APNs per dispositivi iOS
  3. Web Push per app web

- SDK sul dispositivo: viene visualizzata la notifica o il messaggio viene gestito in base allo stato in primo piano / in background dell&#39;applicazione e a qualsiasi logica dell&#39;applicazione pertinente

SQL Notification agisce da generatore di messaggi e target, infatti si occupa di costruire i messaggi utilizzando i dati contenuti nel database e li indirizza al backend FCM relativo all&#39;utente che ha effettuato la richiesta.

**Codici di Indirizzamento FCM e Gruppi di dispositivi**

Ogni istanza di applicazione iOS, Android o Web configurata correttamente per l&#39;utilizzo del servizio Firebase Cloud Messaging possiede un codice identificativo univoco che è possibile utilizzare per l&#39;indirizzamento delle delle notifiche.

Le API di SQL Notification forniscono uno specifico endpoint per salvare i codici all&#39;interno del proprio database SQL, che verrà utilizzato dall&#39;applicazione mobile per salvare i token, la tabella nella quale vengono salvati deve obbligatoriamente avere un campo chiamato token e una serie di campi a scelta che devono essere utilizzati per abbinare il token a delle proprietà che permettono di identificarlo (es: codice cliente).

Un esempio di tabella contenente i token potrebbe essere la seguente: 

Una volta salvati i token dei dispositivi nel database è possibile raggrupparli e collegarli ad altre tabelle dello stesso database tramite query di tipo SELECT, le query possono essere salvate associate ad un titolo e ad una descrizione dando vita a quello che viene definito gruppo di dispositivi.

La scelta di definire il gruppo tramite query è stata fatta per integrare tutti i nuovi token inseriti nel database all&#39;interno dei gruppi creati in precedenza, così facendo infatti i dispositivi relativi ad un gruppo vengono identificati nel momento dell&#39;invio della notifica.

**Template notifica con keywords**

Le notifiche inviate tramite SQL Notification sono composte da titolo e descrizione, sia il titolo che la descrizione possono essere costruiti come template utilizzando all&#39;interno del testo i nomi dei campi estratti dalla query del gruppo seguendo la seguente sintassi: [[keyword]].

Il server backend tramite espressione regolare sostituisce le keyword con il loro valore specifico prima di inviare la notifica al dispositivo.

**Pubblicazione**

Le API sono state messe in produzione su un server Heroku, sul server è disponibile anche la [documentazione completa.](https://push-api.herokuapp.com/docs)

1.2.2 - Frontend

SQL Notification fornisce anche una parte di frontend ovvero un&#39;applicazione web con design responsive, quindi facilmente utilizzabile anche su dispositivi mobili, che consuma le API con lo scopo di fornire un&#39;interfaccia grafica per la gestione dei gruppi e l&#39;invio delle notifiche.

L&#39;applicazione è stata creata come single page application utilizzando il framework Javascript Vue.js che permette di costruire interfacce secondo una configurazione MVVM (Model–view–viewmodel) e Bootstrap per definire lo stile dell&#39;interfaccia.

L&#39;applicazione frontend utilizza un plugin, chiamato AuthenticationWrapper, fornito da Auth0 che semplifica la gestione delle sessioni e la registrazione di nuovi utenti.

L&#39;architettura di Vue.js si concentra sull&#39;unione di componenti favorendo la suddivisione del codice e quindi la scalabilità dell&#39;applicazione; è stato scelto fra gli altri framework che utilizzano approcci simili grazie alla sua rapida curva di apprendimento. 

2 - Interfacce

2.1 - Struttura

L&#39;applicazione frontend di SQL Notification è una single page app, si basa quindi su una sola pagina che viene scaricata nel momento il cui viene effettuata la prima richiesta.

Attraverso meccanismi di routing è possibile caricare dinamicamente il contenuto della pagina: i contenuti vengono caricati basandosi sul path URL attuale, questo processo avviene tramite l&#39;interfaccia Vue-Router fornita da Vue.

L&#39;utilizzo di questo approccio permette di superare uno degli scogli più classici delle single page app: la possibilità di linkare ogni sottopagina dell&#39;applicazione.

I contenuti caricati all&#39;interno del Router View vengono suddivisi in due tipologie principali: le pagine di indice / re-indirizzamento e le pagine di utilizzo principale.

2.1.1 - Pagina di indice

Le pagine di indice hanno lo scopo di introdurre l&#39;utente ad una sottocategoria di contenuti e di rendere chiara la struttura del sito.

Queste pagine sono direttamente raggiungibili tramite click sulla barra di navigazione.

All&#39;interno delle pagine di indice Router View viene sostituito da:

- Titolo: titolo generale che introduce il contenuto delle sottopagine
- Descrizione: introduzione sui contenuti delle sottopagine.
- Bottoni: permettono di raggiungere le sottopagine

2.1.2 - Pagina di utilizzo

Le pagine di indice dell&#39;applicazione permettono di raggiungere le pagine di utilizzo, ovvero quelle dove effettivamente possono essere utilizzate le funzionalità dell&#39;applicazione.

All&#39;interno delle pagine di utilizzo Router View viene sostituito da:

- Breadcrumb: mostra il percorso di navigazione e permette all&#39;utente di tenere traccia della sua posizione all&#39;interno del sito e ritornare ad una delle pagine precedenti.
- Titolo: titolo specifico della pagina
- Descrizione: descrizione dello scopo della pagina e spiegazioni sul suo utilizzo.
- Main Content: All&#39;interno di main content viene caricato il componente specifico della pagina che è sempre diverso in base allo scopo della pagina stessa. 


3 - Architettura

3.1 - Diagramma dell&#39;ordine gerarchico delle risorse

**Frontend**

Una single page app è composta da una singola pagina HTML.

In questo caso la pagina HTML è contenuta all&#39;interno della directory public, si chiama index.html ed è accompagnata da un file custom.css che definisce regole di stile ulteriori a quelle che è possibile definire utilizzando le classi di Bootstrap.

All&#39;interno di index.html il contenuto viene caricato in base al path URI attualmente attivo e questo rende possibile l&#39;indicizzazione delle diverse interfacce.

**Backend (API)**

Il server Node.js utilizzato come backend dell&#39;applicazione offre una serie di endpoint organizzati in 4 categorie:

- Tokens: gestione dei token FCM necessari per l&#39;indirizzamento delle notifiche push al dispositivo
- Groups: gestione dei gruppi di dispositivi
- Messages: invio delle notifiche
- Users: gestione degli utenti e delle configurazioni

Al seguente link è disponibile la [documentazione completa](https://push-api.herokuapp.com/docs).

3.2 - Descrizione delle risorse

**Frontend**

3.3 - Altri diagrammi

**Database**

All&#39;interno del database dell&#39;utente sono necessarie due tabelle per il corretto funzionamento dell&#39;applicazione, una per salvare i token FCM di indirizzamento e una per salvare i gruppi creati.

La tabella app\_messaging\_tokens utilizza il campo token come chiave primaria per evitare la duplicazione. 


4 - Codice

**Indice applicazione client**

Pagina index.html dell&#39;applicazione client, i contenuti della pagina vengono caricati dinamicamente all&#39;interno del tag con id &quot;app&quot;. 

**Personalizzazione template**

Ricerca, tramite espressione regolare, all&#39;interno di text ogni parola circondata da doppia parentesi quadra e la sostituisce con il valore corrispondente all&#39;interno di dictionary, questo metodo viene utilizzato per la personalizzazione dei template. 

**Servizio di invio notifiche di gruppo**

L&#39;invio di una notifica di gruppo prevede come prima cosa l&#39;estrazione e l&#39;esecuzione della query del gruppo desiderato, dopo di che per ogni record risultante vengono svolte 3 operazioni:

- Salvataggio della riga attuale in una variabile chiamata dizionario
- fillKeywords: personalizzazione del titolo e del corpo della notifica tramite sostituzione delle keywords presenti con gli elementi del dizionario
- Invio della notifica


**Middleware**  **per l&#39;inserimento dei metadati Auth0 nella richiesta**

Prima della valutazione di ogni richiesta vengono richiesti al server Auth0 i metadati relativi all&#39;utente che ha effettuato la richiesta alle API (lo stesso token di autenticazione fornito nella richiesta alle API viene utilizzato per effettuare la richiesta al server Auth0), all&#39;interno dei metadati è presente la configurazione del database e la chiave di firebase per accedere a Firebase Admin SDK.

**User metadata**

Rappresenta la configurazione essenziale di un utente, contiene i parametri di connessione al database e a Firebase.

5 - Conclusioni

Il progetto è stato completato con successo ed è funzionante, sono stati effettuati diversi test di funzionamento e sia le API che l&#39;applicazione Client rispondono correttamente.

Risulta necessaria una fase di testing ulteriore con diverse applicazioni Firebase e diversi database per confermare il corretto funzionamento in caso di un grosso numero di accessi in contemporanea, in qualunque caso il servizio utilizzato per mettere in produzione le API, Heroku, applica un meccanismo di autoscaling che dovrebbe permettere di coprire tutte le richieste senza problemi.

I dubbi rimanenti sul progetto dipendono unicamente da informazioni non fornite dai servizi utilizzati, in particolare non è chiaro se sia presente un limite di account Firebase Admin configurabili in un singolo server.

L&#39;applicazione client è stata compilata tramite vue-cli come applicazione statica (ottimizzata e minimizzata) e messa anch&#39;essa in produzione su un server Heroku. L&#39;applicazione client e le API risiedono su due server diversi poiché l&#39;applicazione client è sono uno dei modi attraverso il quale è possibile accedere al servizio e non è necessariamente il modo in cui verrà utilizzata principalmente, ho scelto quindi di mantenerle distinte.

SERVER API

[https://push-api.herokuapp.com/](https://push-api.herokuapp.com/)

DEFINIZIONE API SECONDO LA SPECIFICA OpenAPI

[https://push-api.herokuapp.com/openapi.json](https://push-api.herokuapp.com/openapi.json)

APPLICAZIONE CLIENT

[https://push-notification-app.herokuapp.com/](https://push-notification-app.herokuapp.com/)

6 - Nota bibliografica e sitografica

1. [https://vuejs.org/](https://vuejs.org/)
2. [https://012.vuejs.org/guide/](https://012.vuejs.org/guide/)
3. [https://firebase.google.com/docs/cloud-messaging](https://firebase.google.com/docs/cloud-messaging)
4. [https://auth0.com/docs/](https://auth0.com/docs/)
5. [https://auth0.com/docs/quickstart/spa/vuejs](https://auth0.com/docs/quickstart/spa/vuejs)
6. [https://getbootstrap.com/docs/4.1/getting-started/introduction/](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

SQL Notification - Andrea Francesco Brioschi
