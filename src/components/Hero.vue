<template>
  <div class="text-center hero">
    <img class="mb-3 app-logo" src="/logo.png" alt="app logo" width="120" />

    <h1 v-if="$auth.isAuthenticated">Benvenuto {{ $auth.user.nickname }}</h1>
    <h1 v-else>Push Notification APP</h1>

    <p v-if="$auth.isAuthenticated" class="lead">
      Inizia subito ad utilizzare il servizio, oppure scopri le API per
      integrare il servizio all'interno della tua applicazione
      <br />
      <router-link
        to="/groups"
        class="btn btn-primary rounded m-3 p-3 text-white pointer"
        >Notifica di Gruppo</router-link
      >
      <router-link
        to="/notification"
        class="btn btn-primary rounded m-3 p-3 text-white pointer"
        >Messaggio diretto</router-link
      >
      <a
        style="background-color: #ffbd1f"
        class="btn rounded m-3 p-3 text-white pointer"
        target="_blank"
        href="https://push-api.herokuapp.com/docs"
        >Documentazione API</a
      >
    </p>

    <p v-else class="lead">
      Invia notifiche push personalizzate agli utenti della tua applicazione
      utilizzando i dati presenti in un database SQL
      <br />
      <button class="btn btn-primary rounded p-3 m-3" @click="login">
        Login
      </button>
      <a
        href="#more"
        class="btn btn-primary rounded pointer p-3 m-3 text-white"
      >
        Scopri di più
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>
