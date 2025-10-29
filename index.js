let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }   
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_m6f29xu',
            'template_0e9d2ds',
            event.target,
             "3FKmnhiSj78ejdT1m")
             .then(() => {
                 loading.classList.remove("modal__overlay--visible");
                 success.classList += " modal__overlay--visible";
                })
            .catch(() => {
                 loading.classList.remove("modal__overlay--visible");
                 alert(
                    "The email service is temporarily unavailable. Please contact me directly on lucekl03coder@gmail.com."
                 );
                })
            }

let isModalOpen = false;
function toggleModal() {
        if (isModalOpen) {
 isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

  document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".animated-bg .circle");

    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      circles.forEach((circle, index) => {
        const speed = (index + 1) * 10;
        circle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  });