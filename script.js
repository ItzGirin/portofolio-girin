document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah dikirim!');
    this.reset();  // Reset form setelah pengiriman
});
