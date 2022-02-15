(async function () {
  var res = await fetchApi("../templates/homeTemplate.html");
  document.querySelector("#mainItems").innerHTML = res;
  console.log(res);
})();
