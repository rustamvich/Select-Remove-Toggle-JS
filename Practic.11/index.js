"use script";

const parentBox = document.getElementById('parentBox');
const parentBoxFistChild = document.getElementsByClassName("parentBox__firstChild");

const changeBtn = document.getElementById('changeBtn');

document.createElement("");
document.createElement("").innerHTML 
// prepend ,  append,
// before, after
// .remove() -> querySelector bilan ishlaydi

// parentBox.classList.add("");
// parentBox.classList.remove("");
// parentBox.classList.toggle("");
// parentBox.classList.contains("");
// window.scrollTo({ top: "0px", behavior: "smooth" });

const createChild = document.createElement("div");

const changeBtnClicked = () => {
    // const createChild = document.createElement("div");
    createChild.innerHTML = `
    <div class="parentBox" id="parentBox">
    <h2 class="parentBox__firstChild">
    Boshlang'ich holatdagi parentga nesting bo'lgan element
    </h2>
  </div>
  `;
  parentBox.append(createChild);
  parentBox.prepend(createChild);
  parentBox.before(createChild);
  parentBox.after(createChild);
  document.querySelector(".parentBox__firsChild").remove();
  parentBox.classList.add("addClass");
  parentBox.classList.remove()("parentBox");
  parentBox.classList.toggle("addClass");
  const containsClass = parentBox.classList.contains("parentBo");
  alert(containsClass);
  window.scrollTo({ top: "0px", behavior: "smooth" });
};

changeBtn.addEventListener('click', changeBtnClicked);