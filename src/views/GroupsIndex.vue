<template>
  <div>
    <h1>Notifiche di Gruppo</h1>
    <p>
      Raggruppa e collega i token dei dispositivi FCM ai dati presenti nel
      database creando dei gruppi, un gruppo è una combinazione di titolo,
      descrizione e query.
      <br />
      I campi estratti nella query del gruppo possono essere utilizzati come
      placeholder per la costruzione del testo della notifica.
    </p>
    <div class="d-flex flex-column flex-sm-row justify-content-around">
      <RoutingButton
        title="Crea Gruppo"
        description="Analizza il database e crea nuovi gruppi di utenti."
        link="/groups/create"
      ></RoutingButton>
      <RoutingButton
        title="Lista Gruppi"
        description="Visualizza, modifica e invia notifiche ai gruppi creati."
        link="/groups/list"
      ></RoutingButton>
    </div>
  </div>
</template>

<script>
import RoutingButton from "../components/RoutingButton";

export default {
  name: "index",
  components: {
    RoutingButton,
  },
};
</script>
