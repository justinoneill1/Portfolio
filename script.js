function redirectToPage() {
    window.location.href = 'https://github.com/justinoneill1/Portfolio'
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
}