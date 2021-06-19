<template>
  <div>
    <Breadcrumb
      active="Modifica Gruppo"
      :previous="[
        { title: 'Gruppi', link: '/groups' },
        { title: 'Lista Gruppi', link: '/groups/list' },
      ]"
    ></Breadcrumb>
    <h1>Modifica Gruppo</h1>
    <p>
      Modifica titolo, descrizione e query del gruppo, premi salva modifiche per
      rendere effettivo il cambiamento.
    </p>
    <hr />
    <div class="card shadow p-4">
      <GroupEditForm :groupId="this.$route.params.id"></GroupEditForm>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";
import GroupEditForm from "../components/GroupEditForm";

export default {
  name: "groups-edit",
  components: {
    Breadcrumb,
    GroupEditForm,
  },
};
</script>
