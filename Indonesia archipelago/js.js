// const pulau = document.querySelector("#logo .satu")

// console.log(pulau.getTotalLength());

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        const logo = entry.target.querySelector('#logo');
        if(entry.isIntersecting) {
            logo.classList.add('fill');
            return;
        }
        logo.classList.remove('fill');
    });
});

observer.observe(document.querySelector('.indonesia .map'));
