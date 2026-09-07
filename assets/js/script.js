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

function generatePDF() {

    const btn = document.getElementById("downloadCvBtn");

    if (!btn) {
        console.error("Tombol Download CV tidak ditemukan.");
        return;
    }


    // =========================================================
    // REMOVE OLD PRINT FRAME
    // =========================================================

    document.getElementById("cvPrintFrame")?.remove();


    // =========================================================
    // HELPER
    // =========================================================

    const escapeHTML = (value) => {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    };


    const getText = (selector, parent = document) => {

        const element =
            parent.querySelector(selector);

        return element
            ? element.textContent.trim()
            : "";

    };


    // =========================================================
    // PERSONAL DATA
    // =========================================================

    const name =
        getText(".sidebar .info-content .name") ||
        "Franco Xander Adu";


    const jobTitle =
        getText(".sidebar .info-content .title") ||
        "Full-Stack Developer";


    const emailElement =
        document.querySelector(
            '.sidebar a[href^="mailto:"]'
        );


    const email =
        emailElement?.textContent.trim() ||
        "francoxander1@gmail.com";


    const phoneElement =
        document.querySelector(
            '.sidebar a[href^="tel:"]'
        );


    const phone =
        phoneElement?.textContent.trim() ||
        "+62 82145690869";


    // =========================================================
    // ADDRESS
    // =========================================================

    const address =
        "Jl. Letda Kajeng, Gg. V No. 07, " +
        "Dangin Puri Kelod, East Denpasar, " +
        "Denpasar, Bali 80234, Indonesia";


    // =========================================================
    // PHOTO
    // =========================================================

    const profileImage =
        document.querySelector(
            ".sidebar .avatar-box img"
        );


    const photoSrc =
        profileImage?.getAttribute("src") ||
        "./assets/images/protfoliopicture.JPEG";


    // =========================================================
    // PROFILE
    // =========================================================

    const aboutArticle =
        document.querySelector(
            'article.about[data-page="about"]'
        );


    let aboutParagraphs = [];


    if (aboutArticle) {

        aboutParagraphs =
            Array.from(
                aboutArticle.querySelectorAll(
                    ".about-text p"
                )
            )
                .map(p => p.textContent.trim())
                .filter(Boolean);

    }


    const aboutText =
        aboutParagraphs.length
            ? aboutParagraphs.join(" ")
            : "I'm Franco Xander Adu, a passionate Web Developer and Technology Enthusiast from Bali, Indonesia. I have a strong interest in web development, machine learning, data science, and building practical digital solutions.";


    // =========================================================
    // WHAT I'M DOING
    // =========================================================

    const whatImDoing = [

        {
            title: "Full-Stack Development",
            text: "Responsive and scalable web applications."
        },

        {
            title: "Backend & API",
            text: "RESTful APIs, backend systems and integrations."
        },

        {
            title: "AI & Machine Learning",
            text: "Intelligent systems and machine learning solutions."
        },

        {
            title: "Data & GIS",
            text: "Spatial data analysis and GIS applications."
        }

    ];


    // =========================================================
    // SKILLS
    // =========================================================

    const skills = [];


    document
        .querySelectorAll(
            ".skills-list .skills-item"
        )
        .forEach(item => {

            const skillName =
                item.querySelector(".h5")
                    ?.textContent
                    .trim();


            const data =
                item.querySelector("data");


            const skillValue =
                data?.getAttribute("value") ||
                data?.textContent.trim();


            if (skillName) {

                skills.push({

                    name: skillName,

                    value:
                        Number(skillValue) || 0

                });

            }

        });


    // =========================================================
    // RESUME
    // =========================================================

    const timelines =
        document.querySelectorAll(
            'article.resume[data-page="resume"] .timeline'
        );


    const education = [];

    const experiences = [];


    // =========================================================
    // EDUCATION
    // =========================================================

    if (timelines.length > 0) {

        timelines[0]
            .querySelectorAll(".timeline-item")
            .forEach(item => {

                const title =
                    item.querySelector(
                        ".timeline-item-title"
                    )?.textContent.trim() || "";


                const date =
                    item.querySelector("span")
                        ?.textContent.trim() || "";


                const description =
                    item.querySelector(
                        ".timeline-text"
                    )?.textContent.trim() || "";


                if (title) {

                    education.push({

                        title,
                        date,
                        description

                    });

                }

            });

    }


    // =========================================================
    // EXPERIENCE
    // =========================================================

    if (timelines.length > 1) {

        timelines[1]
            .querySelectorAll(".timeline-item")
            .forEach(item => {

                const title =
                    item.querySelector(
                        ".timeline-item-title"
                    )?.textContent.trim() || "";


                const date =
                    item.querySelector("span")
                        ?.textContent.trim() || "";


                const description =
                    item.querySelector(
                        ".timeline-text"
                    )?.textContent.trim() || "";


                if (title) {

                    experiences.push({

                        title,
                        date,
                        description

                    });

                }

            });

    }


    // =========================================================
    // SERVICES
    // =========================================================

    const services = [];


    document
        .querySelectorAll(
            'article.services[data-page="services"] .service-item'
        )
        .forEach(item => {

            const title =
                item.querySelector(
                    ".service-item-title"
                )?.textContent.trim() || "";


            const description =
                item.querySelector(
                    ".service-text"
                )?.textContent.trim() || "";


            if (title) {

                services.push({

                    title,
                    description

                });

            }

        });


    // =========================================================
    // SOCIAL
    // =========================================================

    const socialLinks = [];


    document
        .querySelectorAll(
            ".sidebar .social-list a"
        )
        .forEach(link => {

            const href =
                link.getAttribute("href");


            if (!href) return;


            let label = "";


            if (href.includes("github")) {

                label = "GitHub";

            }

            else if (href.includes("linkedin")) {

                label = "LinkedIn";

            }

            else if (href.includes("instagram")) {

                label = "Instagram";

            }

            else if (href.includes("facebook")) {

                label = "Facebook";

            }


            if (label) {

                socialLinks.push({

                    label,
                    href

                });

            }

        });


    // =========================================================
    // HTML
    // =========================================================

    const doingHTML =
        whatImDoing.map(item => `

            <div class="doing-card">

                <div class="doing-icon">
                    ✓
                </div>

                <div>

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>

                    <p>
                        ${escapeHTML(item.text)}
                    </p>

                </div>

            </div>

        `).join("");


    const skillsHTML =
        skills.map(skill => `

            <div class="skill">

                <div class="skill-top">

                    <span>
                        ${escapeHTML(skill.name)}
                    </span>

                    <strong>
                        ${skill.value}%
                    </strong>

                </div>

                <div class="skill-bar">

                    <div
                        class="skill-progress"
                        style="width:${skill.value}%">
                    </div>

                </div>

            </div>

        `).join("");


    const experienceHTML =
        experiences.map(exp => `

            <div class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-content">

                    <div class="timeline-title-row">

                        <h3>
                            ${escapeHTML(exp.title)}
                        </h3>

                        <span class="timeline-date">
                            ${escapeHTML(exp.date)}
                        </span>

                    </div>

                    ${exp.description
                ? `
                                <p>
                                    ${escapeHTML(
                    exp.description
                )}
                                </p>
                              `
                : ""
            }

                </div>

            </div>

        `).join("");


    const educationHTML =
        education.map(edu => `

            <div class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-content">

                    <div class="timeline-title-row">

                        <h3>
                            ${escapeHTML(edu.title)}
                        </h3>

                        <span class="timeline-date">
                            ${escapeHTML(edu.date)}
                        </span>

                    </div>

                    ${edu.description
                ? `
                                <p>
                                    ${escapeHTML(
                    edu.description
                )}
                                </p>
                              `
                : ""
            }

                </div>

            </div>

        `).join("");


    const servicesHTML =
        services.map(service => `

            <div class="service-card">

                <div class="service-icon">
                    ✓
                </div>

                <div>

                    <h3>
                        ${escapeHTML(service.title)}
                    </h3>

                    ${service.description
                ? `
                                <p>
                                    ${escapeHTML(
                    service.description
                )}
                                </p>
                              `
                : ""
            }

                </div>

            </div>

        `).join("");


    const socialHTML =
        socialLinks.map(social => `

            <a
                href="${escapeHTML(social.href)}">

                ${escapeHTML(social.label)}

            </a>

        `).join("");


    // =========================================================
    // CREATE CV HTML
    // =========================================================

    const cvHTML = `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>${escapeHTML(name)} - CV</title>


<style>


/* =========================================================
   RESET
========================================================= */

* {

    box-sizing: border-box;

}


html,
body {

    margin: 0;

    padding: 0;

    width: 210mm;

    background: #ffffff;

}


body {

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    color: #1e293b;

}


@page {

    size: A4;

    margin: 0;

}


/* =========================================================
   PAGE
========================================================= */

.cv-page {

    position: relative;

    width: 210mm;

    height: 297mm;

    padding:
        14mm
        15mm
        13mm
        15mm;

    background: #ffffff;

    overflow: hidden;

    page-break-after: always;

    break-after: page;

}


.cv-page:last-child {

    page-break-after: auto;

    break-after: auto;

}


/* =========================================================
   HEADER
========================================================= */

.cv-header {

    display: flex;

    align-items: center;

    gap: 20px;

    padding-bottom: 13px;

    border-bottom:
        1px solid #dbe2ea;

}


.photo-wrapper {

    width: 82px;

    height: 96px;

    flex-shrink: 0;

    overflow: hidden;

    border-radius: 10px;

    background: #f1f5f9;

    border:
        1px solid #dbe2ea;

}


.cv-photo {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

}


.header-info {

    flex: 1;

    min-width: 0;

}


.cv-label {

    margin-bottom: 5px;

    font-size: 8px;

    font-weight: 800;

    letter-spacing: 2.2px;

    color: #2563eb;

}


.header-info h1 {

    margin: 0;

    font-size: 27px;

    line-height: 1.05;

    font-weight: 800;

    color: #111827;

}


.header-info h2 {

    margin: 5px 0 0;

    font-size: 12px;

    font-weight: 600;

    color: #64748b;

}


.header-line {

    width: 42px;

    height: 3px;

    margin: 8px 0;

    background: #2563eb;

    border-radius: 4px;

}


/* =========================================================
   CONTACT
========================================================= */

.contact-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 5px 16px;

    font-size: 7.5px;

    line-height: 1.45;

    color: #475569;

}


.contact-item {

    display: flex;

    align-items: flex-start;

    gap: 5px;

}


.contact-symbol {

    flex-shrink: 0;

    color: #2563eb;

    font-weight: 700;

}


.address-item {

    grid-column:
        1 / -1;

}


/* =========================================================
   PAGE 1 GRID
========================================================= */

.page-one-grid {

    display: grid;

    grid-template-columns:
        34%
        66%;

    align-items: start;

    margin-top: 16px;

}


.left-column {

    align-self: start;

    padding-right: 18px;

    border-right:
        1px solid #e2e8f0;

}


.right-column {

    align-self: start;

    padding-left: 19px;

}


/* =========================================================
   SECTION
========================================================= */

.section {

    margin-bottom: 21px;

    break-inside: avoid;

    page-break-inside: avoid;

}


.section-heading {

    display: flex;

    align-items: center;

    gap: 7px;

    margin-bottom: 9px;

}


.section-heading > span {

    width: 4px;

    height: 16px;

    flex-shrink: 0;

    border-radius: 4px;

    background: #2563eb;

}


.section-heading h2 {

    margin: 0;

    font-size: 10px;

    line-height: 1;

    letter-spacing: 1.3px;

    font-weight: 800;

    color: #111827;

}


/* =========================================================
   PROFILE
========================================================= */

.profile-text {

    margin: 0;

    font-size: 8.2px;

    line-height: 1.65;

    color: #64748b;

    text-align: justify;

}


/* =========================================================
   SKILLS
========================================================= */

.skill {

    margin-bottom: 9px;

}


.skill-top {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 3px;

    font-size: 7.5px;

    color: #475569;

}


.skill-top strong {

    font-size: 7px;

    color: #2563eb;

}


.skill-bar {

    width: 100%;

    height: 4px;

    overflow: hidden;

    border-radius: 10px;

    background: #e8edf3;

}


.skill-progress {

    height: 100%;

    border-radius: 10px;

    background: #2563eb;

}


/* =========================================================
   SOCIAL
========================================================= */

.social-list {

    display: flex;

    flex-direction: column;

    gap: 7px;

}


.social-list a {

    color: #475569;

    text-decoration: none;

    font-size: 7.5px;

}


/* =========================================================
   WHAT I'M DOING
========================================================= */

.doing-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 9px;

}


.doing-card {

    display: flex;

    align-items: flex-start;

    gap: 9px;

    min-height: 58px;

    padding: 10px;

    border:
        1px solid #e2e8f0;

    border-radius: 7px;

    background: #f8fafc;

    break-inside: avoid;

    page-break-inside: avoid;

}


.doing-icon {

    width: 21px;

    height: 21px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 5px;

    background: #eff6ff;

    color: #2563eb;

    font-size: 9px;

    font-weight: 800;

}


.doing-card h3 {

    margin: 0 0 3px;

    font-size: 8px;

    line-height: 1.25;

    color: #1e293b;

}


.doing-card p {

    margin: 0;

    font-size: 7px;

    line-height: 1.4;

    color: #64748b;

}


/* =========================================================
   TIMELINE
========================================================= */

.timeline {

    position: relative;

    padding-left: 15px;

}


.timeline::before {

    content: "";

    position: absolute;

    top: 3px;

    bottom: 3px;

    left: 3px;

    width: 1px;

    background: #d8e0e8;

}


.timeline-item {

    position: relative;

    margin-bottom: 14px;

    break-inside: avoid;

    page-break-inside: avoid;

}


.timeline-dot {

    position: absolute;

    left: -15px;

    top: 4px;

    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: #2563eb;

    border:
        2px solid #ffffff;

    box-shadow:
        0 0 0 1px #2563eb;

}


.timeline-title-row {

    display: flex;

    justify-content: space-between;

    align-items: flex-start;

    gap: 10px;

}


.timeline-title-row h3 {

    margin: 0;

    font-size: 8.5px;

    line-height: 1.3;

    color: #1e293b;

}


.timeline-date {

    flex-shrink: 0;

    padding:
        3px
        5px;

    border-radius: 4px;

    background: #eff6ff;

    color: #2563eb;

    font-size: 6.5px;

    font-weight: 700;

    white-space: nowrap;

}


.timeline-content p {

    margin: 4px 0 0;

    font-size: 7.2px;

    line-height: 1.5;

    color: #64748b;

}


/* =========================================================
   PAGE 2
========================================================= */

.page-two {

    padding-top: 14mm;

}


.page-two-header {

    display: flex;

    justify-content: space-between;

    align-items: flex-start;

    padding-bottom: 12px;

    margin-bottom: 20px;

    border-bottom:
        1px solid #dbe2ea;

}


.small-label {

    margin-bottom: 4px;

    font-size: 7px;

    font-weight: 800;

    letter-spacing: 1.8px;

    color: #2563eb;

}


.page-two-header h2 {

    margin: 0;

    font-size: 21px;

    color: #111827;

}


.page-number {

    font-size: 7px;

    font-weight: 800;

    letter-spacing: 1px;

    color: #94a3b8;

}


/* =========================================================
   SERVICES
========================================================= */

.services-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 10px;

}


.service-card {

    display: flex;

    align-items: flex-start;

    gap: 9px;

    min-height: 62px;

    padding: 11px;

    border:
        1px solid #e2e8f0;

    border-radius: 7px;

    background: #f8fafc;

}


.service-icon {

    width: 21px;

    height: 21px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 5px;

    background: #eff6ff;

    color: #2563eb;

    font-size: 8px;

    font-weight: 800;

}


.service-card h3 {

    margin: 0;

    font-size: 8px;

    line-height: 1.3;

    color: #1e293b;

}


.service-card p {

    margin: 4px 0 0;

    font-size: 6.8px;

    line-height: 1.4;

    color: #64748b;

}


/* =========================================================
   EXPERTISE
========================================================= */

.expertise-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 10px;

}


.expertise-card {

    padding: 11px;

    border:
        1px solid #e2e8f0;

    border-radius: 7px;

    background: #ffffff;

}


.expertise-card strong {

    display: block;

    margin-bottom: 4px;

    font-size: 8px;

    color: #1e293b;

}


.expertise-card p {

    margin: 0;

    font-size: 7px;

    line-height: 1.45;

    color: #64748b;

}


/* =========================================================
   CONTACT BOX
========================================================= */

.contact-box {

    display: grid;

    grid-template-columns:
        1.1fr
        .9fr;

    gap: 20px;

    margin-top: 22px;

    padding: 16px;

    border:
        1px solid #e2e8f0;

    border-radius: 9px;

    background: #f8fafc;

}


.contact-box h2 {

    margin: 0 0 5px;

    font-size: 14px;

    color: #111827;

}


.contact-box p {

    margin: 0;

    font-size: 7.5px;

    line-height: 1.5;

    color: #64748b;

}


.contact-details {

    display: flex;

    flex-direction: column;

    gap: 9px;

}


.contact-details div {

    display: flex;

    flex-direction: column;

    gap: 2px;

}


.contact-details strong {

    font-size: 6.5px;

    letter-spacing: .8px;

    color: #2563eb;

}


.contact-details span {

    font-size: 7px;

    color: #475569;

}


/* =========================================================
   FOOTER
========================================================= */

.page-footer {

    position: absolute;

    left: 15mm;

    right: 15mm;

    bottom: 8mm;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding-top: 7px;

    border-top:
        1px solid #e5e7eb;

    font-size: 6.5px;

    color: #94a3b8;

}


/* =========================================================
   PRINT
========================================================= */

@media print {

    html,
    body {

        width: 210mm !important;

        height: auto !important;

        margin: 0 !important;

        padding: 0 !important;

        background: #ffffff !important;

    }


    .cv-page {

        width: 210mm !important;

        height: 297mm !important;

        background: #ffffff !important;

    }

}

</style>

</head>


<body>


<!-- =========================================================
     PAGE 1
========================================================= -->

<section class="cv-page">


    <header class="cv-header">


        <div class="photo-wrapper">

            <img
                src="${escapeHTML(photoSrc)}"
                alt="${escapeHTML(name)}"
                class="cv-photo">

        </div>


        <div class="header-info">

            <div class="cv-label">
                CURRICULUM VITAE
            </div>


            <h1>
                ${escapeHTML(name)}
            </h1>


            <h2>
                ${escapeHTML(jobTitle)}
            </h2>


            <div class="header-line"></div>


            <div class="contact-grid">


                <div class="contact-item">

                    <span class="contact-symbol">
                        ✉
                    </span>

                    <span>
                        ${escapeHTML(email)}
                    </span>

                </div>


                <div class="contact-item">

                    <span class="contact-symbol">
                        ☎
                    </span>

                    <span>
                        ${escapeHTML(phone)}
                    </span>

                </div>


                <div class="contact-item address-item">

                    <span class="contact-symbol">
                        📍
                    </span>

                    <span>
                        ${escapeHTML(address)}
                    </span>

                </div>


            </div>

        </div>

    </header>


    <!-- =====================================================
         MAIN
    ====================================================== -->

    <div class="page-one-grid">


        <!-- LEFT -->

        <aside class="left-column">


            <!-- PROFILE -->

            <section class="section">

                <div class="section-heading">

                    <span></span>

                    <h2>
                        PROFILE
                    </h2>

                </div>


                <p class="profile-text">
                    ${escapeHTML(aboutText)}
                </p>

            </section>


            <!-- SKILLS -->

            <section class="section">

                <div class="section-heading">

                    <span></span>

                    <h2>
                        TECHNICAL SKILLS
                    </h2>

                </div>


                <div class="skills-list">

                    ${skillsHTML}

                </div>

            </section>


            <!-- SOCIAL -->

            <section class="section">

                <div class="section-heading">

                    <span></span>

                    <h2>
                        SOCIAL
                    </h2>

                </div>


                <div class="social-list">

                    ${socialHTML}

                </div>

            </section>


        </aside>


        <!-- RIGHT -->

        <main class="right-column">


            <!-- WHAT I'M DOING -->

            <section class="section">

                <div class="section-heading">

                    <span></span>

                    <h2>
                        WHAT I'M DOING
                    </h2>

                </div>


                <div class="doing-grid">

                    ${doingHTML}

                </div>

            </section>


            <!-- EXPERIENCE -->

            <section class="section">

                <div class="section-heading">

                    <span></span>

                    <h2>
                        EXPERIENCE
                    </h2>

                </div>


                <div class="timeline">

                    ${experienceHTML}

                </div>

            </section>


        </main>


    </div>


    <footer class="page-footer">

        <span>
            ${escapeHTML(name)}
        </span>

        <span>
            ${escapeHTML(jobTitle)}
        </span>

        <span>
            PAGE 01
        </span>

    </footer>


</section>



<!-- =========================================================
     PAGE 2
========================================================= -->

<section class="cv-page page-two">


    <header class="page-two-header">


        <div>

            <div class="small-label">
                PROFESSIONAL PROFILE
            </div>

            <h2>
                ${escapeHTML(name)}
            </h2>

        </div>


        <div class="page-number">
            PAGE 02
        </div>


    </header>


    <!-- EDUCATION -->

    <section class="section">


        <div class="section-heading">

            <span></span>

            <h2>
                EDUCATION
            </h2>

        </div>


        <div class="timeline education">

            ${educationHTML}

        </div>


    </section>


    <!-- SERVICES -->

    <section class="section">


        <div class="section-heading">

            <span></span>

            <h2>
                SERVICES
            </h2>

        </div>


        <div class="services-grid">

            ${servicesHTML}

        </div>


    </section>


    <!-- EXPERTISE -->

    <section class="section">


        <div class="section-heading">

            <span></span>

            <h2>
                AREAS OF EXPERTISE
            </h2>

        </div>


        <div class="expertise-grid">


            <div class="expertise-card">

                <strong>
                    Web Development
                </strong>

                <p>
                    Modern web applications,
                    frontend and backend systems.
                </p>

            </div>


            <div class="expertise-card">

                <strong>
                    Artificial Intelligence
                </strong>

                <p>
                    Machine learning,
                    deep learning and intelligent systems.
                </p>

            </div>


            <div class="expertise-card">

                <strong>
                    Database Systems
                </strong>

                <p>
                    Relational and NoSQL databases,
                    architecture and integration.
                </p>

            </div>


            <div class="expertise-card">

                <strong>
                    GIS & Spatial Data
                </strong>

                <p>
                    Spatial analysis,
                    mapping and GIS applications.
                </p>

            </div>


        </div>


    </section>


    <!-- CONTACT -->

    <section class="contact-box">


        <div class="contact-message">


            <div class="small-label">
                GET IN TOUCH
            </div>


            <h2>
                Let's build something useful.
            </h2>


            <p>
                Open for freelance projects,
                collaborations and career opportunities.
            </p>


        </div>


        <div class="contact-details">


            <div>

                <strong>
                    EMAIL
                </strong>

                <span>
                    ${escapeHTML(email)}
                </span>

            </div>


            <div>

                <strong>
                    PHONE
                </strong>

                <span>
                    ${escapeHTML(phone)}
                </span>

            </div>


            <div>

                <strong>
                    LOCATION
                </strong>

                <span>
                    Denpasar, Bali, Indonesia
                </span>

            </div>


        </div>


    </section>


    <footer class="page-footer">

        <span>
            ${escapeHTML(jobTitle)}
        </span>

        <span>
            ${escapeHTML(email)}
        </span>

        <span>
            ${escapeHTML(name)}
        </span>

    </footer>


</section>


</body>

</html>

`;


    // =========================================================
    // CREATE INVISIBLE IFRAME
    // =========================================================

    const iframe =
        document.createElement("iframe");


    iframe.id =
        "cvPrintFrame";


    iframe.style.position =
        "fixed";

    iframe.style.left =
        "-10000px";

    iframe.style.top =
        "0";

    iframe.style.width =
        "210mm";

    iframe.style.height =
        "297mm";

    iframe.style.border =
        "0";

    iframe.style.visibility =
        "hidden";

    iframe.style.opacity =
        "0";


    document.body.appendChild(iframe);


    // =========================================================
    // WRITE CV INTO COMPLETELY SEPARATE DOCUMENT
    // =========================================================

    const iframeDocument =
        iframe.contentDocument ||
        iframe.contentWindow.document;


    iframeDocument.open();

    iframeDocument.write(cvHTML);

    iframeDocument.close();


    // =========================================================
    // BUTTON
    // =========================================================

    btn.disabled = true;


    const buttonSpan =
        btn.querySelector("span");


    const originalButtonText =
        buttonSpan?.textContent;


    if (buttonSpan) {

        buttonSpan.textContent =
            "Preparing CV...";

    }


    // =========================================================
    // PRINT
    // =========================================================

    const printCV = () => {

        setTimeout(() => {

            iframe.contentWindow.focus();

            iframe.contentWindow.print();

        }, 500);

    };


    // =========================================================
    // WAIT FOR IMAGE
    // =========================================================

    const img =
        iframeDocument.querySelector(
            ".cv-photo"
        );


    if (img && !img.complete) {

        img.onload =
            printCV;

        img.onerror =
            printCV;

    }

    else {

        printCV();

    }


    // =========================================================
    // CLEANUP AFTER PRINT
    // =========================================================

    const cleanup = () => {

        setTimeout(() => {

            iframe.remove();


            btn.disabled = false;


            if (
                buttonSpan &&
                originalButtonText
            ) {

                buttonSpan.textContent =
                    originalButtonText;

            }


        }, 300);

    };


    iframe.contentWindow.addEventListener(
        "afterprint",
        cleanup,
        {
            once: true
        }
    );

}