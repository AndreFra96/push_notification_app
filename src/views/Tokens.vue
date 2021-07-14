<template>
  <div>
    <Breadcrumb
      active="Lista Token"
      :previous="[{ title: 'Notifiche', link: '/notification' }]"
    ></Breadcrumb>
    <h1>Lista Token</h1>
    <TokensList></TokensList>
  </div>
</template>

<script>
import TokensList from "../components/TokensList";
import Breadcrumb from "../components/Breadcrumb";

export default {
  name: "groups",
  components: {
    Breadcrumb,
    TokensList,
  },
};
</script>
