<template>
  <div id="GroupsList">
    <input
      type="search"
      v-model="search"
      class="form-control"
      placeholder="Nome del gruppo.."
    />
    <div v-if="loading" class="text-center pt-5">
      <h5>Caricamento lista gruppi</h5>
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="error"></div>
    <div class="card-group">
      <div
        class="card border shadow rounded"
        v-for="group of filteredList"
        :key="group.id"
        style="min-width: 18rem; margin: 10px"
      >
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">{{ group.title }}</h5>
            <font-awesome-icon icon="times" class="text-danger pointer">
            </font-awesome-icon>
          </div>

          <p class="card-text">
            {{ group.description }}
          </p>
          <div class="d-flex justify-content-between">
            <router-link :to="'/groups/edit/' + group.id" class="card-link"
              >Modifica</router-link
            >
            <router-link
              :to="'/groups/notification/' + group.id"
              class="card-link btn btn-primary btn-sm"
              >Invia Notifica
              <font-awesome-icon icon="chevron-right" class="ml-1">
              </font-awesome-icon
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupsList",
  data() {
    return {
      groups: [],
      loading: true,
      search: "",
      error: null,
    };
  },
  async created() {
    const accessToken = await this.$auth.getTokenSilently();
    try {
      const { data } = await this.$http.get(
        "https://push-api.herokuapp.com/groups",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      this.groups = data["response"];
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.error = e;
      console.error(e);
      //   this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
    }
  },
  computed: {
    filteredList() {
      return this.groups.filter((group) => {
        return group.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
