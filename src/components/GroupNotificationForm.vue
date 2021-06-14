<template>
  <form id="GroupNotificationForm" style="margin-bottom: 4rem">
    <div class="form-group">
      <label for="message-title">Titolo</label>
      <input
        type="email"
        class="form-control"
        id="message-title"
        aria-describedby="title-hint"
        placeholder="Titolo della notifica"
        v-model="title"
      />
      <small id="title-hint" class="form-text text-muted"
        >E' possibile usare le keywords anche nel titolo.</small
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
</template>
<script>
export default {
  name: "GrousNotificationFrom",
  props: ["groupId"],
  data: function () {
    return {
      id: this.groupId,
      title: "",
      body: "",
    };
  },
  methods: {
    async sendNotification() {
      const accessToken = await this.$auth.getTokenSilently();
      try {
        await this.$http.post(
          "http://localhost:3100/messages/group",
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
      } catch (e) {
        console.error(e);
        //   this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
      }
    },
  },
};
</script>
