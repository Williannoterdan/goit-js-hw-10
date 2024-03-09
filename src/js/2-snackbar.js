import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';

iziToast.settings({
  timeout: 10000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.state.value);
  let emaut = event.target.state.value;
  let delay = event.target.delay.value;
  form.reset();
  createPromis(emaut, delay)



    
})    
    


function createPromis(emaut, delay) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (emaut == 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.success({
        title: '✅',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌',
        message: `Rejected promise in ${delay}ms`,
      });
    });
};





