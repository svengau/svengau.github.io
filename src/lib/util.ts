export async function getContent(
  key: string,
  url: string,
  { json = false } = {}
) {
  const content = localStorage[key];
  if (!content || content.expiredAt < Date.now()) {
    const content = await fetch(url).then((resp) =>
      json ? resp.json() : resp.text()
    );
    localStorage.setItem(
      key,
      JSON.stringify({ content, expiredAt: Date.now() + 60 * 1000 })
    );
  }
  return JSON.parse(localStorage[key]).content;
}
