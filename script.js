
window.Telegram.WebApp.ready();

flatpickr("#date", {
  dateFormat: "d.m.Y",
  locale: "ru",
  minDate: "today"
});

flatpickr("#time", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true
});

const form = document.getElementById('event-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  Telegram.WebApp.sendData(JSON.stringify(data));
  Telegram.WebApp.close();
});
