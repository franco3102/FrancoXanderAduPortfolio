'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
// JavaScript untuk membuat popup modal dinamis
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Elemen penampung modal
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDate = document.querySelector("[data-modal-date]");
const modalText = document.querySelector("[data-modal-text]");

// Daftar item testimonial
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

// Fungsi toggle status modal
const toggleModal = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Event click untuk setiap testimonial item
testimonialsItem.forEach((item) => {
    item.addEventListener("click", function () {
        const avatar = this.querySelector("[data-testimonials-avatar]");
        const title = this.querySelector("[data-testimonials-title]");
        const date = this.querySelector("[data-testimonials-date]");
        const text = this.querySelector("[data-testimonials-text]");

        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
        modalTitle.innerHTML = title.innerHTML;

        if (date) {
            modalDate.innerHTML = date.innerHTML;
            modalDate.setAttribute("datetime", date.getAttribute("datetime"));
        }

        modalText.innerHTML = text.innerHTML;

        toggleModal();
    });
});

// Event close modal (tombol close dan overlay)
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// OPEN MODAL
window.openImage = function (imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    if (!modal || !modalImg) return;

    modalImg.src = imageSrc;
    modal.classList.add("active");
    document.body.classList.add("modal-active");
};

// CLOSE MODAL
window.closeImage = function () {
    const modal = document.getElementById("imageModal");
    if (!modal) return;

    modal.classList.remove("active");
    document.body.classList.remove("modal-active");

    setTimeout(() => {
        const modalImg = document.getElementById("modalImage");
        if (modalImg) modalImg.src = "";
    }, 200);
};

// CLOSE VIA ESC & KLIK OUTSIDE
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeImage();
});

document.addEventListener("click", (e) => {
    if (e.target.id === "imageModal") closeImage();
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            // ==========================================
            // OPSI 1: KIRIM KE WHATSAPP (UTAMA)
            // ==========================================
            // Ganti dengan nomor WhatsApp tujuan (Gunakan kode negara 62, contoh: 628123456789)
            const phoneNumber = "6282145690869";

            const name = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Format isi pesan
            const formattedText = `Halo, nama saya *${name}* (${email}).\n\nPesan:\n${message}`;
            const encodedText = encodeURIComponent(formattedText);

            // Buka WhatsApp di tab baru
            window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");


            /* 
            ==========================================
            OPSI 2: KIRIM KE EMAIL (OPSIONAL)
            ==========================================
            Jika Anda ingin mengalihkan ke Email (aplikasi Gmail/Outlook) sebagai ganti WhatsApp, 
            hapus tanda komentar di bawah dan beri komentar pada Opsi 1 di atas.

            const targetEmail = "emailanda@domain.com";
            const subject = encodeURIComponent(`Pesan dari ${name}`);
            const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);

            window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
            */
        });
    }
});

//Service to contact
const contactLink = document.querySelector('a[href="#contact"]');

if (contactLink) {
    contactLink.addEventListener("click", function () {
        const contactNavBtn = document.querySelector('[data-nav-link="contact"]') ||
            document.querySelector('button[data-nav-link]:nth-child(4)'); // sesuaikan dengan urutan tombol navbar contact
        if (contactNavBtn) {
            contactNavBtn.click();
        }
    });
}