<template>
  <div>
    <Breadcrumb
      active="Notifica di Gruppo"
      :previous="[
        { title: 'Gruppi', link: '/groups' },
        { title: 'Lista Gruppi', link: '/groups/list' },
      ]"
    ></Breadcrumb>

    <h1>Notifica di Gruppo</h1>
    <p>
      Inserisci testo e corpo della notifica utilizzando la sintassi
      [[keyword]], dove keyword è ogni campo estratto dalla query, e premi
      invio.
    </p>
    <hr />
    <label>Gruppo</label>
    <GroupInfo :groupId="this.$route.params.id"></GroupInfo>
    <GroupNotificationForm
      :groupId="this.$route.params.id"
    ></GroupNotificationForm>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";
import GroupInfo from "../components/GroupInfo";
import GroupNotificationForm from "../components/GroupNotificationForm";

export default {
  name: "groups-notification",
  components: {
    Breadcrumb,
    GroupInfo,
    GroupNotificationForm,
  },
};
</script>

