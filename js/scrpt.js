// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {

        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);





const faq = document.querySelector(".faq--grid");

faq.addEventListener("click", (e) => {
    const target = e.target;
    const faqCard = target.closest(".faq--card");
    if (target.classList.contains("chevron-down-outline")) {
        if (faqCard.classList.contains("active")) {
            faqCard.classList.remove("active");
        } else {
            Array.from(faq.children).forEach((item) => {
                item.classList.remove("active");
            });
            faqCard.classList.add("active");
        }
    }
});

