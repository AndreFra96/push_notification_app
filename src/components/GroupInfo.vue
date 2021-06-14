<template>
  <div id="GroupsInfo" class="alert alert-secondary fade show" role="alert">
    <p>
      <b>{{ title }}</b>
      <br />
      {{ description }}
      <br />
      {{ query }}
    </p>
    <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button> -->
  </div>
</template>

<script>
export default {
  name: "GroupsInfo",
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
        "http://localhost:3100/groups/" + this.groupId,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      this.title = data["response"][0]["title"];
      this.description = data["response"][0]["description"];
      this.query = data["response"][0]["query"];
    } catch (e) {
      this.error = e;
      console.error(e);
      //   this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
    }
  },
};
</script>
