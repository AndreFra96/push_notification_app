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
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";

export default {
  name: "groups-edit",
  components: {
    Breadcrumb,
  },
};
</script>
