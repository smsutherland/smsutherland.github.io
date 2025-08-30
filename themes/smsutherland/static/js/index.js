console.log(document.currentScript);
const url = new URL(window.location);
if (url.searchParams.get("uwu")) {
  let script = document.createElement("script");
  let url = new URL(document.currentScript.src);
  script.src = url.origin + "/js/uwu.js";
  document.head.append(script);
}
