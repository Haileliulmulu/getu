document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
    var openMenuButton = document.getElementById('openmenu');
    var links = document.querySelectorAll('a[href^="#"]');
    var targetedLinks = document.querySelectorAll('.targeted-links');
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    targetedLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var linkLocation = this.getAttribute('data-link-location');
            window.location.href = linkLocation;
        });
    });
});
function downloadFile(filePath, fileName) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function downloadCV() {
    var cvFilePath = 'ferede.pdf';
    var cvFileName = 'ferede.pdf';
    downloadFile(cvFilePath, cvFileName);
}
function downloadRes() {
    var resFilePath = 'ferede.pdf';
    var resFileName = 'ferede.pdf';
    downloadFile(resFilePath, resFileName);
}


