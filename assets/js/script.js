const source = document.querySelector('#source');
const convert = document.querySelector('#convert');

convert.disabled = true;

source.addEventListener('keyup', () => {
    if (source.value !== '' && Number(source.value) >= 0) {
        convert.disabled = false;
        source.classList.remove('is-invalid');
    } else {
        convert.disabled = true;
        source.classList.add('is-invalid');
    }
})
