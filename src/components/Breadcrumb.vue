

<template>
  <div class="sticky-top p-0">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          v-for="actual of previous"
          :key="actual.title"
        >
          <router-link :to="actual.link">{{ actual.title }}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ active }}</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["active", "previous"],
};
</script>

