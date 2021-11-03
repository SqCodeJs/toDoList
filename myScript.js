const days = document.querySelectorAll("ul li");
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const btn = document.querySelector("span");
const daysList = document.querySelectorAll(".board");

let flagaDnia = false;

for (let i = 0; i < days.length; i++) {
  const setActiveDay = () => {
    {
      days.forEach((e) => e.classList.remove("active"));
      daysList.forEach((e) => {
        e.classList.remove("active");
        e.style.display = "none";
        flagaDnia = false;
      });
      days[i].classList.add("active");
      daysList[i].classList.add("active");
      daysList[i].style.display = "block";
      h1.textContent = days[i].textContent;
      flagaDnia = true;
    }
  };
  days[i].addEventListener("click", setActiveDay);
}
const taskHandle = () => {
  {
    if (!flagaDnia) alert("Wybierz dzien");
    else if (!input.value) {
      alert("wpisz zadanie");
    } else if (input.value.length > 30) alert("za duzo znakow");
    else {
      let newLi = document.createElement("li");
      newLi.classList.add("clearfix");

      let doneSpan = document.createElement("span");
      doneSpan.textContent = "done";

      let deleteSpan = document.createElement("span");
      deleteSpan.textContent = "clear";

      newLi.innerHTML = input.value;
      document.querySelector(".boards .active").appendChild(newLi);
      newLi.appendChild(deleteSpan);
      newLi.appendChild(doneSpan);

      input.value = "";
      const setDone = () => {
        doneSpan.classList.toggle("spanActive");
        newLi.classList.toggle("spanActive");
      };
      doneSpan.addEventListener("click", setDone);
      const deleteTask = () => {
        newLi.remove();
        deleteSpan.remove();
        doneSpan.remove();
      };
      deleteSpan.addEventListener("click", deleteTask);
    }
  }
};
btn.addEventListener("click", taskHandle);
