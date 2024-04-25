let rules = document.getElementById('rules');
let rulesBtn = document.getElementById('rules-btn');
let closeBtn = document.getElementById('close-btn');

rulesBtn.addEventListener('click', () => {
    rules.style.display = 'flex';
    let header = document.getElementsByTagName('header');
    header[0].style.opacity = '0.3';
    let page = document.getElementsByClassName('page');
    page[0].style.opacity = '0.3';
    if (rules.style.display = 'flex') {
        closeBtn.addEventListener('click', () => {
            rules.style.display = 'none';
            header[0].style.opacity = '1';
            page[0].style.opacity = '1';
        });
    }
});