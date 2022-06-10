<script lang="ts">
  export let repositories: any[] = [];
</script>

<section>
  <ul>
    {#if repositories}
      {#each repositories as item}
        <li class="mb-10">
          <a href={item.html_url} target="_blank">
            <div class="flex flex-col">
              <div class="flex flex-row gap-4 text-gray-500 text-sm" />
              <h2 class="text-xl">{item.name}</h2>
              <div>{item.description}</div>
              <div class="mt-2 text-gray-500 ">
                <div>{item.topics.map((tag) => `#${tag}`).join(" ")}</div>
                <div class="flex flex-row gap-6">
                  <div>
                    {item.created_at.substring(0, 4)}
                  </div>
                  <div>
                    {item.language}
                  </div>
                  {#if item.stargazers_count}
                    <div>
                      {item.stargazers_count}
                      <i class="fa-regular fa-star" />
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</section>
