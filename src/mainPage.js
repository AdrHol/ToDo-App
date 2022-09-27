export default function render(){
    
    let logoText = 'TO DO';
    const body = document.querySelector('body');
    const container = document.createElement('div');
        container.classList.add('container');
    const navbar = document.createElement('div');
        navbar.classList.add('navbar');
        const logo = document.createElement('div');
            logo.classList.add('logo');
            logo.textContent = logoText;
        navbar.appendChild(logo);
    const sectionLeft = document.createElement('div');
        sectionLeft.classList.add('section');
        sectionLeft.setAttribute('id', 'section-left');
    const sectionCenter = document.createElement('div');
        sectionCenter.classList.add('section');
        sectionCenter.setAttribute('id', 'section-center');
    const sectionRight = document.createElement('div');
        sectionRight.classList.add('section');
        sectionRight.setAttribute('id', 'section-right');
    const footer = document.createElement('div');
        footer.classList.add('footer');

    container.appendChild(navbar);
    container.appendChild(sectionLeft);
    container.appendChild(sectionCenter);
    container.appendChild(sectionRight);
    container.appendChild(footer);
    body.appendChild(container);
}