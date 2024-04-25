document.getElementById('form').onsubmit = function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('select').value;
  const tel = document.getElementById('tel').value;

  const botToken = '7020582182:AAFmKQfcd3qG2I3DSmwY8qcLCJ1Krg4w9qk';
  const chatId = '-1002054405430';
  const text = `Saytdan xabar: ${name}, Murojaat turi: ${email}, Telefon raqam: ${tel}`;

  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.ok) {
              alert('Xabaringiz yetkazildi!');
              document.getElementById('contact').reset();
          } else {
              alert('Xatolik yuz berdi!');
          }
      })
};
