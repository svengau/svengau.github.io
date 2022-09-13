<script lang="ts">
  import SvelteIntersectionObserver from "svelte-intersection-observer";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let element;

  function obObserve(e) {
    if (e.detail.isIntersecting) {
      dispatch("intersect", e.detail);
    }
  }
</script>

<SvelteIntersectionObserver {element} on:observe={obObserve}>
  <div bind:this={element} />
  <slot />
</SvelteIntersectionObserver>
