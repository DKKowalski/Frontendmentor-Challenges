var menuTabs = document.querySelectorAll(".nav-term > a");
const bioSection = document.getElementById("Bio-section");
const experienceSection = document.getElementById("Experience-section");
const portfolioSection = document.getElementById("Portfolio-section");
const contactSection = document.getElementById("Contact-section");

menuTabs.forEach((el, index) => {
  el.addEventListener("click", () => {
    //remove class active form all menu tabs
    menuTabs.forEach((el) => {
      el.classList.remove("active");
    });
    //add class active to only that particular clicked menu tab
    el.classList.add("active");

    switch (index) {
      case 0:
        bioSection.classList.add("flex");
        contactSection.classList.remove("flex");
        experienceSection.classList.remove("block");
        portfolioSection.classList.remove("grid");
        break;
      case 1:
        contactSection.classList.remove("flex");
        bioSection.classList.remove("flex");
        experienceSection.classList.add("block");
        portfolioSection.classList.remove("grid");
        break;
      case 2:
        contactSection.classList.remove("flex");
        bioSection.classList.remove("flex");
        experienceSection.classList.remove("block");
        portfolioSection.classList.add("grid");
        break;
      case 3:
        contactSection.classList.add("flex");
        bioSection.classList.remove("flex");
        experienceSection.classList.remove("block");
        portfolioSection.classList.remove("grid");
        break;
    }
  });
});
