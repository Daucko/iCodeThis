const section = document.querySelectorAll('section');
const btn = document.querySelectorAll('button');

for (let i = 0; i < section.length; i++) {
    section[i].addEventListener('mouseover', function () {
        btn[i].style.backgroundColor = 'rgb(58, 58, 207)';
        btn[i].style.color = 'white';
        btn[i].style.border = 'none';
        btn[i].style.padding = '7px 26px 8px';
        section[i].style.transform = 'scale(1.2)';
        section[i].style.transition = 'all 0.5s';
        section[i].style.boxShadow = '2px 2px 10px 5px rgba(0, 0, 0, 0.2)';
    })
    section[i].addEventListener('mouseout', function () {
        btn[i].style.backgroundColor = 'white';
        btn[i].style.color = 'gray';
        btn[i].style.border = '1px solid gray';
        btn[i].style.padding = '6px 25px 7px';
        section[i].style.transform = 'scale(1.0)';
        section[i].style.transition = 'all 0.5s';
        section[i].style.boxShadow = 'none';

    })
}