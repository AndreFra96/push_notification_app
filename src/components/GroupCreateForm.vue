<template>
  <div>
    <DismissableAlert
      :message="alert.message"
      :status="alert.status"
      :success="alert.success"
    ></DismissableAlert>
    <form id="GroupCreateForm">
      <div class="form-group">
        <label for="group-title">Titolo</label>
        <input
          type="text"
          class="form-control"
          id="group-title"
          v-model="title"
        />
      </div>
      <div class="form-group">
        <label for="group-description">Descrizione</label>
        <textarea
          type="text"
          class="form-control"
          id="group-description"
          v-model="description"
        >
        </textarea>
      </div>
      <div class="form-group">
        <label for="group-query">Query</label>
        <textarea
          type="text"
          class="form-control"
          id="group-query"
          v-model="query"
        >
        </textarea>
      </div>
      <button
        type="button"
        @click="createGroup"
        class="btn btn-primary rounded"
      >
        Salva Modifiche
      </button>
    </form>
  </div>
</template>
<script>
import DismissableAlert from "../components/DismissableAlert";

export default {
  name: "GroupCreateForm",
  components: {
    DismissableAlert,
  },
  data: function () {
    return {
      title: "",
      description: "",
      query: "",
      alert: {
        message: "",
        status: "d-none",
        success: true,
      },
    };
  },
  methods: {
    async createGroup() {
      const accessToken = await this.$auth.getTokenSilently();
      try {
        let response = await this.$http.post(
          "https://push-api.herokuapp.com/groups",
          {
            title: this.title,
            description: this.description,
            query: this.query,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        this.showResponseAlert(
          "Operazione completata, è stato creato correttamente il gruppo con id: " +
            response.data["id"]
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
