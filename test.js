const section_home = document.querySelector("#home");
const section_skill = document.querySelector("#skill");
const section_real = document.querySelector("#real");

const header = document.querySelector("header");

const home_ = document.querySelector("#home_menu");
const skill_ = document.querySelector("#skill_menu");
const real_ = document.querySelector("#real_menu");

const items_skill = document.getElementsByClassName("item_skill");

document.documentElement.style.setProperty("--px-header-top", "20px");
document.documentElement.style.setProperty("--color-settings", "#1abc9c");

window.addEventListener("load", (e) => {
  console.log(items_skill.item(0).style)
  //items_skill.map(el => console.log(el.style) )
  const { scrollTop, clientHeight } = document.documentElement;
  setMenuSelect(scrollTop);
  resizeElementHeight();
});
window.addEventListener("resize", (e) => {
  resizeElementHeight();
});

window.addEventListener("scroll", (e) => {
  const { scrollTop, clientHeight } = document.documentElement;
  console.log(scrollTop, clientHeight);
  //Définition de la postion du header et de sa couleur
  if (scrollTop < 20) {
    document.documentElement.style.setProperty(
      "--px-header-top",
      20 - parseInt(scrollTop) + "px"
    );
    if (header.style.backgroundColor == "grey")
      header.style.backgroundColor = "rgba(179, 179, 179, 0.534)";
  } else if (header.style.top !== "0px") {
    header.style.backgroundColor = "grey";
    document.documentElement.style.setProperty("--px-header-top", "0px");
  }
  setMenuSelect(scrollTop);
  if(scrollTop > 299 && items_skill[0].style.animationPlayState !== "running"){
    console.log("test")
    for(let i =0 ; i < items_skill.length; i++ ){
      items_skill[i].style.animationPlayState = "running";
    }
  }


});




//Fonction qui sont utiliserau dessus

//Resise des differentes section
const resizeElementHeight = function () {
  section_home.style.height = parseInt(window.innerHeight) + "px";
  section_skill.style.minHeight = parseInt(window.innerHeight) + "px";
  section_real.style.height =
    parseInt(window.innerHeight) -
    parseInt(header.getBoundingClientRect().height) +
    "px";
};
//Donne a l'utilisateur une information graphique pour savoir dans quel section il se trouve
const setMenuSelect = (scrollTop) => {

  //Définition des differentes position des sections
  const arrte1 =
    parseInt(window.innerHeight) -
    parseInt(header.getBoundingClientRect().height);
  const arrte2 =
    arrte1 + parseInt(section_skill.getBoundingClientRect().height) - 58;
  const arrte3 = arrte2 + parseInt(section_real.style.height.split("px")[0]);

  //Modifiaction des haches du header
  if (home_.style.color !== "blue" && scrollTop < arrte1) {
    home_.classList.add("active");
    skill_.classList.remove("active");
    real_.classList.remove("active");
  } else if (skill_.style.color !== "blue" && scrollTop < arrte2) {
    home_.classList.remove("active");
    skill_.classList.add("active");
    real_.classList.remove("active");
  } else if (real_.style.color !== "blue" && scrollTop < arrte3) {
    home_.classList.remove("active");
    skill_.classList.remove("active");
    real_.classList.add("active");
  }
};
