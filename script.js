document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("event-form");

  Telegram.WebApp.expand();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      title: document.getElementById("title").value,
      place: document.getElementById("place").value,
      comment: document.getElementById("comment").value,
    };

    Telegram.WebApp.sendData(JSON.stringify(data));
    Telegram.WebApp.close(); // Закрыть Web App после отправки
  });
});
