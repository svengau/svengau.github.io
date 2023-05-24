<script lang="ts">
  import Projects from "./lib/Projects.svelte";
  import Articles from "./lib/Articles.svelte";
  import Repos from "./lib/Repos.svelte";
  import SocialLinks from "./lib/SocialLinks.svelte";
  import TailwindCss from "./TailwindCSS.svelte";
  import StopWar from "./assets/stopwar.svg";
  import { getContent } from "./lib/util";
  import About from "./lib/About.svelte";
  import IntersectionObserver from "./lib/IntersectionObserver.svelte";
  import projects from "./projects.json";

  let scroollY;

  const profilePromise = getContent(
    "github/profile",
    "https://api.github.com/users/svengau"
  );
  const reposPromise = getContent(
    "github/repos",
    "https://api.github.com/users/svengau/repos?sort=created&per_page=100"
  ).then((repos) =>
    repos.filter((o) => !o.fork && !["svengau", "fs-status"].includes(o.name))
  );
  const articlesPromise = getContent(
    "dev.to/articles",
    "https://dev.to/api/articles?username=svengau"
  );
  const aboutMePromise = getContent(
    "about",
    "https://raw.githubusercontent.com/svengau/svengau/main/README.md"
  );

  // Tabs
  enum Tab {
    repos = "repos",
    projects = "projects",
    articles = "articles",
    about = "about",
  }
  const tabs = [
    { hash: "#" + Tab.about, label: "About" },
    { hash: "#" + Tab.repos, label: "Repos" },
    { hash: "#" + Tab.projects, label: "Projects" },
    { hash: "#" + Tab.articles, label: "Articles" },
  ];
  let currentHash = tabs[0].hash as string;
  let debounceTimer: ReturnType<typeof setTimeout>;

  function onHashchange() {
    debounceTimer && clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentHash = location.hash;
    }, 400);
  }

  function scrollIntoView({ target }) {
    const hash = target.getAttribute("href");
    const el = document.querySelector(hash);
    if (!el) throw new Error("No element found for hash: " + hash);
    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    // manually update the hash because event is not propagated
    history.pushState({}, "", hash);
    onHashchange();
  }

  function onIntersect(tabId) {
    history.pushState({}, "", "#" + tabId);
    // call onHashchange manually
    // because https://github.com/sveltejs/kit/issues/2588
    onHashchange();
  }

  const classToFixScrolling = "pt-72 -mt-72 md:pt-64 md:-mt-64 mb-24";
</script>

<TailwindCss />
<svelte:window bind:scrollY={scroollY} on:hashchange={onHashchange} />

<main class="mx-auto max-w-xl flex flex-col items-center font-mono">
  <div class="sticky top-0 bg-white h-64">
    <div class="pt-10 mx-4 flex gap-6 transition-all flex-row">
      {#await profilePromise}
        <p>...loading</p>
      {:then profile}
        <div>
          <div class="relative {'w-24 h-24'}">
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
        <div class="flex flex-col items-start">
          <div class="flex flex-col md:flex-row justify-between mb-4">
            <h1 class="text-2xl">{profile.name}</h1>
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
            <SocialLinks compact={true} />
          </p>
        </div>
      {:catch error}
        <p style="bg-red-500">{error.message}</p>
      {/await}
    </div>
    <ul
      class="flex flex-row gap-4 mb-6 border-b-2 border-b-grey-600 w-full justify-center bg-white"
    >
      {#each tabs as item}
        <li
          style={currentHash === item.hash
            ? "box-shadow: 0 -4px 0 0 inset rgb(229, 231, 235);"
            : ""}
        >
          <a
            href={item.hash}
            on:click|preventDefault={scrollIntoView}
            class="cursor-pointer px-2 pb-2 block"
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="mx-4 md:mx-0">
    <div id={Tab.about} class={classToFixScrolling}>
      <IntersectionObserver on:intersect={() => onIntersect(Tab.about)}>
        <h2 class="text-2xl font-semibold mb-2">
          <i class="fa-solid fa-hashtag" />
          About me
        </h2>
      </IntersectionObserver>
      {#await aboutMePromise}
        <p>...loading</p>
      {:then content}
        <About {content} />
      {:catch error}
        <p style="bg-red-500">{error.message}</p>
      {/await}
    </div>

    <div id={Tab.repos} class={classToFixScrolling}>
      <IntersectionObserver on:intersect={() => onIntersect(Tab.repos)}>
        <h2 class="text-2xl font-semibold mb-2">
          <i class="fa-solid fa-hashtag" />
          My Public GH Repos
        </h2>
      </IntersectionObserver>
      {#await reposPromise}
        <p>...loading</p>
      {:then repositories}
        <Repos {repositories} />
      {:catch error}
        <p style="bg-red-500">{error.message}</p>
      {/await}
    </div>

    <div id={Tab.projects} class={classToFixScrolling}>
      <IntersectionObserver on:intersect={() => onIntersect(Tab.projects)}>
        <h2 class="text-2xl font-semibold mb-2">
          <i class="fa-solid fa-hashtag" />
          Side Projects
        </h2>
      </IntersectionObserver>
      <Projects {projects} />
    </div>

    <div id={Tab.articles} class={classToFixScrolling}>
      <IntersectionObserver on:intersect={() => onIntersect(Tab.articles)}>
        <h2 class="text-2xl font-semibold mb-2">
          <i class="fa-solid fa-hashtag" />
          Articles on dev.to
        </h2>
      </IntersectionObserver>
      {#await articlesPromise}
        <p>...loading</p>
      {:then articles}
        <Articles {articles} />
        <p>
          And previously a few more on <a
            class="underline"
            href="https://medium.com/@svengau"
            target="_blank"
          >
            Medium</a
          >
          ...
        </p>
      {:catch error}
        <p style="bg-red-500">{error.message}</p>
      {/await}
    </div>

    <p class="mb-10 text-sm text-gray-500 text-center">
      Site made with
      <i class="fa-solid fa-heart" title="twitter" />, Svelte & TailwindCSS.
      Source on
      <a
        href="https://github.com/svengau/svengau.github.io"
        target="_blank"
        alt="github"
      >
        <i class="fa-brands fa-github" title="github" />
      </a>
    </p>
  </div>
</main>
