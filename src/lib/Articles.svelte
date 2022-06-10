<script lang="ts">
  import Visibility from "./Visibility.svelte";

  export let articles: any[] = [];
</script>

<section>
  <ul>
    {#if articles}
      {#each articles as item}
        <li class="mb-10">
          <a href={item.url} target="_blank">
            <div class="flex flex-col">
              <div class="flex flex-row gap-4 text-gray-500 text-sm">
                <div>
                  {item.readable_publish_date}
                </div>
                -
                <div>{item.reading_time_minutes} min. read</div>
              </div>
              <h2 class="text-xl">{item.title}</h2>
              <div>{item.description}</div>
              <div class="mt-2 text-gray-500 ">
                <div>{item.tag_list.map((tag) => `#${tag}`).join(" ")}</div>
                <div class="flex flex-row gap-6">
                  <div>
                    {item.public_reactions_count}
                    <i class="fa-regular fa-heart" />
                  </div>
                  <div>
                    {item.comments_count}
                    <i class="fa-regular fa-comment" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</section>
