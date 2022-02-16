var signUpUserList;
if (!localStorage.getItem("usersDataList")) {
  signUpUserList = [];
} else {
  signUpUserList = JSON.parse(localStorage.getItem("usersDataList"));
}

var userDetails = (async function () {
  var res = await fetchApi("../templates/homeTemplate.html");
  document.querySelector("#mainItems").innerHTML = res;
  console.log(res);

  document.querySelector("#LoginBtn").style.display = "none";

  document.querySelector("#Btn").onclick = async function () {
    var formElemnts = document.getElementsByClassName("form-control");
    signUpUserList.push({
      email: formElemnts[0].value,
      contact: formElemnts[1].value,
      password: formElemnts[2].value,
      userName: formElemnts[3].value,
    });
    console.log(signUpUserList);

    // formElemnts[1].parerntNode.style.display = "none";

    console.log(formElemnts[1].parentNode);
    formElemnts[1].parentNode.style.display = "none";
    formElemnts[3].parentNode.style.display = "none";

    document.querySelector("#LoginBtn").style.display = "inline";
    this.style.display = "none";

    // console.log(formElemnts[0].value);
    document.querySelector("#LoginBtn").onclick = async function () {
      var localUserDataRecords = JSON.parse(
        localStorage.getItem("usersDataList")
      );

      var isValidUser = false,
        notValidUser = false;

      localUserDataRecords.forEach((element, index) => {
        console.log(element);

        if (element.email !== formElemnts[0].value) {
          notValidUser = true;
          // return true;
        } else {
          isValidUser = true;
        }
      });

      console.log(notValidUser);

      if (isValidUser) {
        let res = await fetchApi("../templates/usersHome.html");
        document.querySelector("#mainItems").innerHTML = res;
        console.log(res);
      }
    };

    localStorage.setItem("usersDataList", JSON.stringify(signUpUserList));
    // Save this records to LocalHost
    formElemnts[0].value = "";
    formElemnts[1].value = "";
    formElemnts[2].value = "";
    formElemnts[3].value = "";
  };
})();

// ---------------------------------------------------------------------------------

function getNavItems() {
  // navbarSupportedContent
  // data-cutomTemp
  //   nav - link;
  var navLink = document.getElementsByClassName("nav-link");

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].onclick = async function () {
      console.log(this.getAttribute("data-cutomTemp"));
      var res = await fetchApi(
        "../templates/" + this.getAttribute("data-cutomTemp")
      );
      //   document.querySelector("#mainItems").innerHTML = res;
      document.querySelector("#mainItems").innerHTML = res;
      document.querySelector("#LoginBtn").style.display = "none";

      document.querySelector("#Btn").onclick = async function () {
        var formElemnts = document.getElementsByClassName("form-control");
        signUpUserList.push({
          email: formElemnts[0].value,
          contact: formElemnts[1].value,
          password: formElemnts[2].value,
          userName: formElemnts[3].value,
        });
        console.log(signUpUserList);

        // Save this records to LocalHost
        formElemnts[0].value = "";
        formElemnts[1].value = "";
        formElemnts[2].value = "";
        formElemnts[3].value = "";

        // formElemnts[1].parerntNode.style.display = "none";

        console.log(formElemnts[1].parentNode);
        formElemnts[1].parentNode.style.display = "none";
        formElemnts[3].parentNode.style.display = "none";

        document.querySelector("#LoginBtn").style.display = "inline";
        this.style.display = "none";

        if (true) {
          let res = await fetchApi("../templates/usersHome.html");
          document.querySelector("#mainItems").innerHTML = res;
          console.log(res);
        }

        localStorage.setItem("usersDataList", JSON.stringify(signUpUserList));
      };
    };
  }
}

getNavItems();
