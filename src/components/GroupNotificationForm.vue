<template>
  <div>
    <DismissableAlert
      :message="alert.message"
      :status="alert.status"
      :success="alert.success"
    ></DismissableAlert>
    <form id="GroupNotificationForm">
      <div class="form-group">
        <label for="message-title">Titolo</label>
        <input
          type="text"
          class="form-control"
          id="message-title"
          aria-describedby="title-hint"
          placeholder="Titolo della notifica"
          v-model="title"
        />
        <small id="title-hint" class="form-text text-muted"
          >E' possibile utilizzare le keywords sia nel titolo che nel corpo
          della notifica.</small
        >
      </div>
      <div class="form-group">
        <label for="message-body">Corpo</label>
        <textarea
          type="text"
          class="form-control"
          id="message-body"
          placeholder="Corpo della notifica"
          v-model="body"
        >
        </textarea>
      </div>
      <button
        type="button"
        @click="sendNotification"
        class="btn btn-primary rounded"
      >
        Invia Notifica
      </button>
    </form>
  </div>
</template>
<script>
import DismissableAlert from "../components/DismissableAlert";

export default {
  name: "GrousNotificationFrom",
  components: {
    DismissableAlert,
  },
  props: ["groupId"],
  data: function () {
    return {
      id: this.groupId,
      title: "",
      body: "",
      alert: {
        message: "",
        status: "d-none",
        success: true,
      },
    };
  },
  methods: {
    async sendNotification() {
      const accessToken = await this.$auth.getTokenSilently();
      try {
        let response = await this.$http.post(
          "https://push-api.herokuapp.com/messages/group",
          {
            group: this.id,
            title: this.title,
            body: this.body,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        this.showResponseAlert(
          `Operazione completata, ${
            Object.keys(response.data.response).length
          } notifiche inviate con successo.`
        );
      } catch (e) {
        this.showResponseAlert(
          `Errore: il server ha risposto con '${e.response.status}: ${e.response.statusText}'`,
          false
        );
      }
    },
    showResponseAlert(message, success = true) {
      this.alert.message = message;
      this.alert.status = "d-block";
      this.alert.success = success;
    },
  },
};
</script>
