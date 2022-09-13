<script lang="ts">
  export let projects: any[] = [];
</script>

<section>
  <ul>
    {#if projects}
      {#each projects as item}
        <li class="mb-10">
          <a href={item.url} target="_blank">
            <div class="flex flex-col">
              <div class="flex flex-row gap-4 text-gray-500 text-sm">
                {item.year}
              </div>
              <h2 class="text-2xl">{item.name}</h2>
              <div>{item.description || ""}</div>
              <div class="mt-2 text-gray-500 ">
                <div>
                  {item.stack.map((tag) => `#${tag}`).join(" ")}
                </div>
              </div>
            </div>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</section>
