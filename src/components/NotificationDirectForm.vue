<template>
  <div>
    <DismissableAlert
      :message="alert.message"
      :status="alert.status"
      :success="alert.success"
    ></DismissableAlert>
    <form id="NotificationDirectForm">
      <div class="form-group">
        <label for="notification-token">Token</label>
        <input
          type="text"
          class="form-control"
          id="notification-token"
          v-model="token"
        />
      </div>
      <div class="form-group">
        <label for="notification-title">Titolo</label>
        <textarea
          type="text"
          class="form-control"
          id="notification-title"
          v-model="title"
        >
        </textarea>
      </div>
      <div class="form-group">
        <label for="notification-body">Corpo</label>
        <textarea
          type="text"
          class="form-control"
          id="notification-body"
          v-model="body"
        >
        </textarea>
      </div>
      <button
        type="button"
        @click="inviaNotifica"
        class="btn btn-primary rounded"
      >
        Invia notifica
      </button>
    </form>
  </div>
</template>
<script>
import DismissableAlert from "../components/DismissableAlert";

export default {
  name: "NotificationDirectForm",
  components: {
    DismissableAlert,
  },
  data: function () {
    return {
      token: "",
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
    async inviaNotifica() {
      const accessToken = await this.$auth.getTokenSilently();
      try {
        await this.$http.post(
          "https://push-api.herokuapp.com/messages",
          {
            title: this.title,
            body: this.body,
            token: this.token,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        this.showResponseAlert(
          "Operazione completata, il messaggio è stato inviato"
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
