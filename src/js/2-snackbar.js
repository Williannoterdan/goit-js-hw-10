import iziToast from 'izitoast';

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
    let emaut  = event.target.state.value;
    let delay = event.target.delay.value;
    form.reset();
    creadePromis( emaut, delay)

      });
    
    


function creadePromis(emaut, delay) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (emaut == 'fulfilled') {
        resolve(
          iziToast.success({
            title: '✅',
            message: `Fulfilled promise in ${delay}ms`,
          })
        );
      }
      else {
        reject(
          iziToast.error({
            title: '❌',
            message: `Rejected promise in ${delay}ms`,
          })
        );
      }
    }, delay)
  })
};





