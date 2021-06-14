<template>
  <router-link :to="link">
    <div
      id="RoutingButton"
      class="btn btn-primary text-white rounded p-2 m-3 pointer"
      style="min-width: 18rem; width: 20rem"
    >
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RoutingButton",
  props: ["title", "description", "link"],
};
</script>
