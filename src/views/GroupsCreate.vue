<template>
  <div>
    <Breadcrumb
      active="Crea Gruppo"
      :previous="[{ title: 'Gruppi', link: '/groups' }]"
    ></Breadcrumb>
    <h1>Crea Gruppo</h1>
    <p>
      Inserisci titolo, descrizione e query del gruppo, premi salva modifiche
      per creare il gruppo.
    </p>
    <hr />
    <div class="card shadow p-4">
      <GroupCreateForm></GroupCreateForm>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";
import GroupCreateForm from "../components/GroupCreateForm";

export default {
  name: "groups-create",
  components: {
    Breadcrumb,
    GroupCreateForm,
  },
};
</script>
