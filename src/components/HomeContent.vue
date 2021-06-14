<template>
  <div class="next-steps">
    <h2 class="my-5 text-center">Scopri di più</h2>

    <div class="row">
      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <a href="https://firebase.google.com/docs/cloud-messaging">
            <font-awesome-icon icon="link" class="mr-2" />Firebase Cloud
            Messaging
          </a>
        </h6>
        <p>
          SQL Notification App utilizza il servizio Firebase Cloud Messaging per
          l'invio delle notifiche, in fase di configurazione sarà richiesta la
          chiave privata dell'account di servizio Firebase che verrà utilizzata
          per indirizzare le notifiche agli utenti della tua applicazione.
        </p>
      </div>

      <div class="col-md"></div>

      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <a href="https://auth0.com/docs/multifactor-authentication">
            <font-awesome-icon icon="link" class="mr-2" />Database
          </a>
        </h6>
        <p>
          Connetti un database SQL e utilizza i dati presenti per personalizzare
          le notifiche.
          <br />
          Per utilizzare il database è necessario che all'interno sia presente
          una tabella contenente i token di indirizzamento ai dispositivi di
          Firebase Cloud Messaging.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <a href="https://auth0.com/docs/anomaly-detection">
            <font-awesome-icon icon="link" class="mr-2" />Notifiche come
            messaggi
          </a>
        </h6>
        <p>
          Invia una notifica push mirata ad un dispositivo utilizzando il suo
          token FCM.
          <br />
        </p>
      </div>

      <div class="col-md"></div>

      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <a href="https://auth0.com/docs/rules">
            <font-awesome-icon icon="link" class="mr-2" />Sicurezza
          </a>
        </h6>
        <p>
          Scopri di più sui sistemi di sicurezza adottati, i tuoi dati sono al
          sicuro.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
};
</script>
