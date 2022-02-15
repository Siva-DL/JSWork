/* to fetch the Individual Templates */
function fetchApi(url) {
  return fetch(url)
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      return data;
    });
}
