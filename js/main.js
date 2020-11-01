const faqList = document.querySelector(".faq-list");

faqList.addEventListener("click", showAnswer);

function showAnswer(e) {
  if (e.target.nextElementSibling.classList.contains("a-active")) {
    e.target.classList.remove("q-active");
    e.target.nextElementSibling.classList.remove("a-active");
    e.target.parentElement.nextElementSibling.classList.remove("down");
  } else {
    e.target.classList.add("q-active");
    e.target.nextElementSibling.classList.add("a-active");
    e.target.parentElement.nextElementSibling.classList.add("down");
  }
}
