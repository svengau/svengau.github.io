export async function getJSON(key: string, url: string) {
  const content = localStorage[key];
  if (!content || content.expiredAt < Date.now()) {
    const content = await fetch(url).then((resp) => resp.json());
    localStorage.setItem(
      key,
      JSON.stringify({ content, expiredAt: Date.now() + 60 * 1000 })
    );
  }
  return JSON.parse(localStorage[key]).content;
}
