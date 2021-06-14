<template>
  <div>
    <Breadcrumb
      active="Lista Gruppi"
      :previous="[{ title: 'Gruppi', link: '/groups' }]"
    ></Breadcrumb>
    <h1>Lista Gruppi</h1>
    <GroupsList></GroupsList>
  </div>
</template>

<script>
import GroupsList from "../components/GroupsList";
import Breadcrumb from "../components/Breadcrumb";

export default {
  name: "groups",
  components: {
    Breadcrumb,
    GroupsList,
  },
};
</script>
