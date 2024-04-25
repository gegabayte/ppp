document.getElementById('forma').onsubmit = function(event) {
     event.preventDefault();
   
     const name = document.getElementById('nick').value;
     const telp = document.getElementById('telp').value;
   
     const botToken = '7020582182:AAFmKQfcd3qG2I3DSmwY8qcLCJ1Krg4w9qk';
     const chatId = '-1002054405430';
     const text = `Saytdan xabar: ${name}, Telefon raqam: ${telp}`;
   
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
   
   var element = document.getElementById('telp');
   var maskOptions = {
        mask: '+998-00-000-00-00',
        lazy: false
   } 
   
   var mask = new IMask(element, maskOptions); 

   let deleteBtn = document.querySelector('.delete-account');
    let deletePage = document.querySelector('.delete-person');

    deleteBtn.onclick = () => {
        deletePage.classList.toggle('active');
    }