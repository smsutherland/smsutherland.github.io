window.addEventListener("load", () => {
  const url = new URL(window.location);
  if (url.searchParams.get("uwu")) {
    let script = document.createElement("script");
    script.src = "/js/uwu.js";
    script.onload = () => uwuifyPage();
    document.head.append(script);
  }

  if (url.searchParams.size > 0) {
    const internals = document.getElementsByClassName("internal-link");
    for (let i = 0; i < internals.length; i++) {
      internals[i].href += "?" + url.searchParams;
    }
  }
});

