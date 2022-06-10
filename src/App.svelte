<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";

  import Projects from "./lib/Projects.svelte";
  import Articles from "./lib/Articles.svelte";
  import TailwindCss from "./TailwindCSS.svelte";
  import StopWar from "./assets/stopwar.svg";
  import { getJSON } from "./lib/util";

  let element;
  let scroollY;

  const profilePromise = getJSON(
    "github/profile",
    "https://api.github.com/users/svengau"
  );
  const reposPromise = getJSON(
    "github/repos",
    "https://api.github.com/users/svengau/repos?sort=created&per_page=100"
  ).then((repos) =>
    repos.filter((o) => !o.fork && !["svengau", "fs-status"].includes(o.name))
  );
  const articlesPromise = getJSON(
    "dev.to/articles",
    "https://dev.to/api/articles?username=svengau"
  );

  // Tabs
  enum Tab {
    projects = "#projects",
    articles = "#articles",
  }
  const tabs = [
    { hash: Tab.projects, label: "Projects" },
    { hash: Tab.articles, label: "Articles" },
  ];
  let currentHash = tabs[0].hash as string;
  let compact = false;
  function onScroll(e) {
    if (scroollY > 10) {
      compact = true;
    }
  }
  function onHashchange() {
    currentHash = location.hash;
    if (currentHash === Tab.projects) {
      window.scrollTo(0, 0);
    }
  }
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<TailwindCss />
<svelte:window
  bind:scrollY={scroollY}
  on:scroll={onScroll}
  on:hashchange={onHashchange}
/>

<main class="mx-auto max-w-xl flex flex-col items-center font-mono">
  <div class="sticky top-0 bg-white">
    <div
      class="pt-10 flex gap-6 transition-all {compact
        ? 'flex-row'
        : 'flex-col items-center'}"
    >
      {#await profilePromise}
        <p>...loading</p>
      {:then profile}
        <div>
          <div class="relative {compact ? 'w-24 h-24' : 'w-32 h-32'}">
            <img
              src={profile.avatar_url}
              alt={profile.name}
              class="rounded-full"
            />
            <img
              src={StopWar}
              class="w-10 absolute bottom-0 right-0"
              alt="Stop war"
            />
          </div>
        </div>
        <div class="flex flex-col {compact ? '' : 'items-center'}">
          <div
            class="flex {compact
              ? 'flex-row justify-between mb-4'
              : 'flex-col items-center'}"
          >
            <h1 class="text-2xl">{profile.name}</h1>
            <div
              class="flex gap-4 text-gray-400 items-center {compact
                ? 'text-lg'
                : 'text-3xl mt-4 mb-8'}"
            >
              <a href="https://www.linkedin.com/in/svengaubert" target="_blank">
                <i class="fa-brands fa-linkedin-in" />
              </a>
              <a
                href="https://www.malt.fr/profile/svengaubert"
                target="_blank"
                class="w-7 fill-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 25.35 186.79 186.79"
                >
                  <path
                    d="M159.852 52.304C145.752 38.204 130.69 47.33 121.264 56.756L32.22 145.803C22.794 155.228 12.928 169.549 27.768 184.387C42.608 199.23 56.929 189.362 66.353 179.936L155.399 90.891C164.825 81.464 173.951 66.402 159.852 52.304Z"
                  />
                  <path
                    d="M74.78 48.657L93.635 67.511L112.827 48.319C114.13 47.013 115.453 45.801 116.784 44.658C114.774 34.518 108.988 25.351 93.626 25.351C78.235 25.351 72.456 34.554 70.457 44.716C71.894 45.959 73.328 47.205 74.78 48.657Z"
                  />
                  <path
                    d="M112.816 188.71L93.636 169.529L74.791 188.372C73.36 189.804 71.936 191.112 70.518 192.341C72.679 202.678 78.795 212.146 93.628 212.146C108.5 212.146 114.608 202.627 116.755 192.257C115.436 191.122 114.116 190.009 112.816 188.71Z"
                  />
                  <path
                    d="M66.783 94.364H30.433C17.105 94.364 0 98.563 0 118.501C0 133.378 9.522 139.487 19.894 141.633C21.122 140.215 66.783 94.364 66.783 94.364Z"
                  />
                  <path
                    d="M167.435 95.332C166.285 96.67 120.528 142.637 120.528 142.637H156.362C169.691 142.637 186.795 139.488 186.795 118.501C186.795 103.112 177.595 97.33 167.435 95.332Z"
                  />
                  <path
                    d="M78.693 82.432L85.187 75.938L66.344 57.092C56.917 47.667 42.598 37.8 27.758 52.64C16.876 63.522 19.293 74.113 25.065 82.711C26.823 82.581 78.693 82.432 78.693 82.432Z"
                  />
                  <path
                    d="M108.571 154.569L102.06 161.08L121.254 180.272C130.68 189.699 145.742 198.823 159.84 184.725C170.36 174.204 167.946 163.154 162.13 154.302C160.258 154.437 108.571 154.569 108.571 154.569Z"
                  />
                </svg>
              </a>
              <a href="https://github.com/svengau" target="_blank">
                <i class="fa-brands fa-github" />
              </a>
              <a href="https://twitter.com/svengau" target="_blank">
                <i class="fa-brands fa-twitter" />
              </a>
              <a href="https://dev.to/svengau" target="_blank">
                <i class="fa-brands fa-dev" />
              </a>
              <a
                href="https://etherscan.io/address/0xe4fcfa964e5ccfc0fbaab38eab0ceffd6e605995"
              >
                <i class="fa-brands fa-ethereum" />
              </a>
              <a
                href="https://www.npmjs.com/~svengau"
                target="_blank"
                class="text-4xl"
              >
                <i class="fa-brands fa-npm" />
              </a>
            </div>
          </div>
          <p class="transition-all mb-10">
            {profile.bio}
            {#if profile.company}
              <a
                href="https://github.com/{profile.company.replace('@', '')}"
                target="_blank"
              >
                {profile.company}</a
              >
            {/if}
          </p>
        </div>
      {:catch error}
        <p style="bg-red-500">{error.message}</p>
      {/await}
    </div>
    <ul
      class="flex flex-row gap-4 mb-6 border-b-2 border-b-grey-600 w-full justify-center"
    >
      {#each tabs as item}
        <li
          class="cursor-pointer pb-2 px-2"
          style={currentHash === item.hash
            ? "box-shadow: 0 -4px 0 0 inset rgb(229, 231, 235);"
            : ""}
        >
          <a href={item.hash} on:click|preventDefault={scrollIntoView}>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="mx-4 md:mx-0 ">
    <div id="projects">
      <h2 class="text-xl font-semibold mb-2 ">
        <i class="fa-solid fa-hashtag" />
        Projects
      </h2>

      {#await reposPromise}
        <p>...loading</p>
      {:then repositories}
        <Projects {repositories} />
      {:catch error}
        <p style="bg-red-500">{error.message}</p>
      {/await}
    </div>

    <div id="articles">
      <IntersectionObserver
        {element}
        on:observe={(e) => {
          currentHash = e.detail.isIntersecting ? Tab.articles : Tab.projects;
          history.pushState({}, "", currentHash);
        }}
      >
        <h2 class="text-xl font-semibold mb-2" bind:this={element}>
          <i class="fa-solid fa-hashtag" />
          Articles
        </h2>
        {#await articlesPromise}
          <p>...loading</p>
        {:then articles}
          <Articles {articles} />
        {:catch error}
          <p style="bg-red-500">{error.message}</p>
        {/await}
      </IntersectionObserver>
    </div>
  </div>
</main>
