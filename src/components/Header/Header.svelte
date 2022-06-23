<script lang="ts">
  console.log("Header mounted...");
</script>

<div class="header-root">
  Header
  <slot />
</div>

<style lang="scss">
  .header-root {
    text-align: center;
    background-color: antiquewhite;
  }
</style>
