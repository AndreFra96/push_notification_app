<template>
  <div>
    <h1>Notifiche dirette</h1>
    <p>
      Visualizza i token inseriti e usali per inviare delle notifiche dirette a
      singoli dispositivi.
      <br />
      I campi associati al token possono essere utilizzati come placeholder per
      la costruzione del testo della notifica.
    </p>
    <div class="d-flex flex-column flex-sm-row justify-content-around">
      <RoutingButton
        title="Invia Notifica"
        description="Inserisci token, titolo, corpo del messaggio e invialo al cliente."
        link="/notification/direct"
      ></RoutingButton>
      <RoutingButton
        title="Lista Tokens"
        description="Visualizza, modifica e invia notifiche ai token inseriti."
        link="/tokens/list"
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
