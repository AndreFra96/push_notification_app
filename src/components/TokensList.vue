<template>
  <div id="TokensList" :key="componentKey">
    <input
      type="search"
      v-model="search"
      class="form-control"
      placeholder="Id del cliente.."
    />
    <div v-if="loading" class="text-center pt-5">
      <h5>Caricamento lista token</h5>
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="error"></div>
    <div class="card-group">
      <div
        class="card border shadow rounded"
        v-for="token of filteredList"
        :key="token.id"
        style="min-width: 18rem; margin: 10px"
      >
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">{{ token.id }}</h5>
            <font-awesome-icon
              icon="times"
              @click="deleteToken(token.id)"
              class="text-danger pointer"
            >
            </font-awesome-icon>
          </div>

          <p class="card-text">
            {{ token.token }}
          </p>
          <div class="d-flex justify-content-between">
            <router-link :to="'/tokens/edit/' + token.id" class="card-link"
              >Modifica</router-link
            >
            <router-link
              :to="'/notification/direct/' + token.id"
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
  name: "TokensList",
  data() {
    return {
      tokens: [],
      loading: true,
      search: "",
      error: null,
      componentKey: 0,
    };
  },
  async created() {
    const accessToken = await this.$auth.getTokenSilently();
    try {
      const { data } = await this.$http.get(
        "https://push-api.herokuapp.com/tokens",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      this.tokens = data["response"];
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
      return this.tokens.filter((token) => {
        return token.id.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    async deleteToken(id) {
      if (
        confirm(
          "Cancellare il token?\nNon sarà possibile recuperarlo in seguito"
        )
      ) {
        const accessToken = await this.$auth.getTokenSilently();
        try {
          await this.$http.delete(
            "https://push-api.herokuapp.com/tokens/" + id,
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
        for (var key in this.tokens) {
          if (this.tokens[key]["id"] === id) {
            delete this.tokens[key];
            this.forceRerender();
          }
        }
        this.search = " ";
        this.search = "";
      }
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>
