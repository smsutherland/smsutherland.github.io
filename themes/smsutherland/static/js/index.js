window.addEventListener("load", () => {
  const url = new URL(window.location);

  if (url.searchParams.size > 0) {
    let params = url.searchParams;
    let anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].host !== url.host) {
        continue;
      }
      let anchor = new URL(anchors[i].href);
      for (const [key, value] of url.searchParams) {
        if (anchor.searchParams.get(key) === null) {
          anchor.searchParams.set(key, value);
        }
      }
        anchors[i].href = anchor.toString();
    }
  }

  if (url.searchParams.get("uwu")) {
    let script = document.createElement("script");
    script.src = "/js/uwu.js";
    script.onload = () => uwuifyPage();
    document.head.append(script);

    let footer = document.getElementById("footer");
    let credit = footer.children[1];
    let unuwu = document.createElement("div");
    let unuwu_url = new URL(window.location);
    unuwu_url.searchParams.delete("uwu");
    unuwu.innerHTML = `Youwu've found uwu mode :3. Click <a href="${unuwu_url.toString()}">here</a> to turn it off. ;-;`;
    unuwu.style = "width: 10em;";
    footer.insertBefore(unuwu, credit);
  }
});

