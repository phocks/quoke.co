<script lang="ts">
  console.log("Title mounted...");
</script>

<div class="root">
  <h1>Hello from Quoke.</h1>
  <slot />
</div>

<style lang="scss">
  .root {
    background-color: antiquewhite;
    min-height: 10em;
    margin: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: #222;
  }
</style>
