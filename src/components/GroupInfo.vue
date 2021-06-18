<template>
  <div id="GroupsInfo" class="alert alert-secondary fade show" role="alert">
    <div v-if="loading" class="text-center">
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <table v-else>
      <tr>
        <td>Titolo:</td>
        <td>
          <b>{{ title }}</b>
        </td>
      </tr>
      <tr>
        <td>Descrizione:</td>
        <td>{{ description }}</td>
      </tr>
      <tr>
        <td>Keywords:</td>
        <td>
          <span v-for="keyword of keywords" :key="keyword">
            {{ keyword }},
          </span>
        </td>
      </tr>
      <tr>
        <td>Destinatari:</td>
        <td>{{ destinatari }} dispositivi</td>
      </tr>
    </table>
    <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button> -->
  </div>
</template>

<style>
.td {
  vertical-align: top;
}
</style>


<script>
export default {
  name: "GroupsInfo",
  props: ["groupId"],
  data: function () {
    return {
      id: this.groupId,
      title: "",
      description: "",
      keywords: [],
      destinatari: 0,
      query: "",
      loading: true,
    };
  },
  async created() {
    const accessToken = await this.$auth.getTokenSilently();
    try {
      const { data } = await this.$http.get(
        "https://push-api.herokuapp.com/groups/info/" + this.groupId,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      this.title = data["response"]["title"];
      this.description = data["response"]["description"];
      this.query = data["response"]["query"];
      this.keywords = data["response"]["keywords"];
      this.destinatari = data["response"]["destinatari"];
      this.loading = false;
    } catch (e) {
      this.error = e;
      this.loading = false;
      console.error(e);
      //   this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
    }
  },
};
</script>
