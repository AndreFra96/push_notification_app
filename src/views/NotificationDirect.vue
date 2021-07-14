<template>
  <div>
    <Breadcrumb
      active="Invia notifica"
      :previous="[{ title: 'Notifiche', link: '/notification' }]"
    ></Breadcrumb>
    <h1>Invia notifica</h1>
    <p>
      Inserisci token, titolo e corpo del messaggio, premi invia notifica per
      inviare la notifica.
    </p>
    <hr />
    <div class="card shadow p-4">
      <NotificationDirectForm></NotificationDirectForm>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";
import NotificationDirectForm from "../components/NotificationDirectForm";

export default {
  name: "groups-create",
  components: {
    Breadcrumb,
    NotificationDirectForm,
  },
};
</script>
