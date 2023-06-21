const projList = $(".project-list");

//WANT TO USE UNSPLASH API TO GET PICTURES OF RACCOONS AS THE BACKDROP TO MY PROJECTS

// function makeProjBtn(projName, projUrl, raccyImg, photographer) {
function makeProjBtn(projName, projUrl, deployed) {
  console.log("i need a button");
  const newProjBtn = $("<li>").addClass("boxes");
  //if project has been deployed, then link to the deployed app. else link to the github project page
  let link;
  if (deployed) {
    link = $("<a>").attr({
      href: `https://jaychan0125.github.io/${projName}/`,
      target: "_blank",
    });
  } else {
    link = $("<a>").attr({
      href: projUrl,
      target: "_blank",
    });
  }
  const image = $("<img>").attr({
    // src: raccyImg,
    // alt: `Photo of raccoon by ${photographer}, used as backdrop`})
    src: "./Assets/images/henry-dinardo-lLNyzqcfcyc-unsplash.jpg",
    alt: `Photo of raccoon used as backdrop`,
  });
  const caption = $("<div>").addClass("proj-caption").text(projName);
  link.append([image, caption]);
  newProjBtn.append(link);
  projList.append(newProjBtn);
}

//fetch my repos from GitHub
const apiUrl = "https://api.github.com/users/jaychan0125/repos";
fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach((item) => {
      let projName = item.name;
      let projUrl = item.html_url;
      let deployed = item.has_pages;
      console.log(projName, projUrl, deployed);
      makeProjBtn(projName, projUrl, deployed);
    });
  });
//   .catch(function (error) {
//     alert("Unable to connect to GitHub");
//   });
