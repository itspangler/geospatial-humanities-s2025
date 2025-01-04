const images = document.querySelectorAll('figure img');
images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () =>{
        window.open(img.src, '_blank');
    })
})

let count = 1;
const questions = document.querySelectorAll('.q');
questions.forEach(q => {
    const id = `q-${count}`;
    q.id = id;
    const header = document.createElement("h4");
    header.textContent = `QUESTION ${count}`;
    const link = document.createElement("a");
    link.href = `#${id}`;
    link.appendChild(header);
    q.insertBefore(link, q.firstChild);
    count++;
});