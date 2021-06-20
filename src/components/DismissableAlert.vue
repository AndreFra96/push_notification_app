<template>
  <div
    :class="[
      'alert alert-dismissible fade show',
      status,
      success ? 'alert-success' : 'alert-danger',
    ]"
    role="alert"
  >
    {{ message }}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>


<script>
export default {
  name: "DismissableAlert",
  props: ["message", "status", "success"],
};
</script>
