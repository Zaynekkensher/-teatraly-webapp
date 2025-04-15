document.addEventListener("DOMContentLoaded", () => {
  Telegram.WebApp.ready();

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

  const form = document.getElementById("event-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      title: document.getElementById("title").value,
      place: document.getElementById("place").value,
      comment: document.getElementById("comment").value
    };

    if (!data.date || !data.time || !data.title || !data.place) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    Telegram.WebApp.sendData(JSON.stringify(data));
    Telegram.WebApp.close();
  });
});
