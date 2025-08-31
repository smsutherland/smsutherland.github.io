window.addEventListener("load", () => {
  const url = new URL(window.location);
  if (url.searchParams.get("uwu")) {
    let script = document.createElement("script");
    script.src = "/js/uwu.js";
    script.onload = () => uwuifyPage();
    document.head.append(script);
  }

  if (url.searchParams.size > 0) {
    let params = url.searchParams;
    let anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].host !== url.host) {
        continue;
      }
      anchor = new URL(anchors[i].href);
      for (const [key, value] of url.searchParams) {
        if (anchor.searchParams.get(key) === null) {
          anchor.searchParams.set(key, value);
        }
      }
        anchors[i].href = anchor.toString();
    }
  }
});

