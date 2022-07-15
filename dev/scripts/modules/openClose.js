export function openClose() {
    if (window.innerWidth <= 1100) {
        const opener = document.querySelectorAll('.opener');

        opener.forEach((item) => {
            item.addEventListener('click', (event) => {
                //handle click

                event.target.nextSibling.classList.toggle('show-element');
            });
        });
    }
}

window.addEventListener('resize', openClose);
