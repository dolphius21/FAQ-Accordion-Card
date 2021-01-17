const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faqItem) => {
  const text = faqItem.querySelector('.text');
  
  text.addEventListener('click', () => {
    faqItems.forEach((item) => {
      if (item !== text.parentElement) {
        item.classList.remove('active');
      }
    });

    faqItem.classList.toggle('active');
  });
});


