// Menambahkan efek scroll smooth ke semua link di dalam navbar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    // JavaScript bisa ditambahkan sesuai kebutuhan

 // JavaScript untuk mengatur aksi saat form dikirim
 var myForm = document.getElementById('myForm');
 myForm.addEventListener('submit', function(event) {
   event.preventDefault();
   var nama = document.getElementById('nama').value;
   var city = document.getElementById('city').value;
   var email = document.getElementById('email').value;
   var zip = document.getElementById('zip').value;

   // Lakukan validasi form, dan lakukan aksi sesuai kebutuhan
   if (nama === '' || city === '' || email === '' || zip === '') {
     alert('Harap isi semua field dalam form!');
   } else {
     // Lakukan aksi lain, misalnya mengirim data ke server
     alert('Formulir berhasil dikirim!');
     // Lakukan submit form ke server
     myForm.submit();
   }
 });