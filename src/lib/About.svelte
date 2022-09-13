<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  export let content: string = "";
</script>

<section>
  {#if content}
    <div class="prose">
      <SvelteMarkdown source={content} />
    </div>
  {/if}
</section>
