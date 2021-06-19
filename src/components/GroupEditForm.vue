<template>
  <form id="GroupEditForm">
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
    <button type="button" @click="editGroup" class="btn btn-primary rounded">
      Salva Modifiche
    </button>
  </form>
</template>
<script>
export default {
  name: "GroupEditForm",
  props: ["groupId"],
  data: function () {
    return {
      id: this.groupId,
      title: "",
      description: "",
      query: "",
      loading: true,
    };
  },
  async created() {
    const accessToken = await this.$auth.getTokenSilently();
    try {
      const { data } = await this.$http.get(
        "https://push-api.herokuapp.com/groups/" + this.groupId,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      this.title = data["response"][0]["title"];
      this.description = data["response"][0]["description"];
      this.query = data["response"][0]["query"];
      this.loading = false;
    } catch (e) {
      this.error = e;
      this.loading = false;
      console.error(e);
      //   this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
    }
  },
  methods: {
    async editGroup() {
      //   const accessToken = await this.$auth.getTokenSilently();
      alert("DA IMPLEMENTARE");
    },
  },
};
</script>
