import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

let userSelectedDate ;

const bottonStart = document.querySelector('button[data-start]')
let second = document.querySelector('span[data-seconds]');
let minutes = document.querySelector('span[data-minutes]');
let hours = document.querySelector('span[data-hours]');
let days = document.querySelector('span[data-days]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
      if (selectedDates[0] - options.defaultDate > 0) {
        userSelectedDate = selectedDates[0],
          console.log(userSelectedDate);
          bottonStart.removeAttribute('disabled')
      }
      else {
        tostPleasechooseadateinthefuture(),
          bottonStart.setAttribute('disabled', '')

      }
    console.log('user selected:', userSelectedDate);
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(userSelectedDate));



function getTaim(taimConteiner) {
  second.textContent = taimConteiner.seconds.toString().padStart(2, '0');
  minutes.textContent = taimConteiner.minutes.toString().padStart(2, '0');
  hours.textContent = taimConteiner.hours.toString().padStart(2, '0');
  days.textContent = taimConteiner.days.toString().padStart(2, '0');
}



function taimerStart() {
  tostTaimerStart();
  bottonStart.setAttribute('disabled', '');

  console.log(userSelectedDate);
  let taimRan = setInterval(() => {

    let actualTaim = userSelectedDate - Date.now();
    console.log(actualTaim);
    if (actualTaim < 1000) {
      clearInterval(taimRan);
    }
    let taimConteiner = convertMs(actualTaim);
    console.log(taimConteiner);
    getTaim(taimConteiner);
  }, 1000);
}

bottonStart.addEventListener('click', taimerStart);

// tosts

iziToast.settings({
  timeout: 10000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  onOpening: function () {
    console.log('callback abriu!');
  },
  onClosing: function () {
    console.log('callback fechou!');
  },
});

function tostPleasechooseadateinthefuture() {
  iziToast.error({
    title: 'Error',
    message: 'Please choose a date in the future',
  });
}
function tostTaimerStart() {
  iziToast.success({
    title: 'OK',
    message: 'Taimer start',
  });
}
