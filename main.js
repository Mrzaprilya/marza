document.getElementById('myForm').addEventListener('submit', function(event) {
    // Ambil elemen input
    const nama = document.getElementById('nama').value.trim();
    const kelasJurusan = document.querySelector('input[name="kelasJurusan"]:checked');
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const jurusan = document.getElementById('jurusan').value;
    
    // Variable untuk menyimpan pesan error
    let errors = [];

    // Validasi nama
    const namePattern = /^[A-Za-z\s]+$/; // Hanya huruf dan spasi
    if (!nama) {
        errors.push('Nama siswa harus diisi.');
    } else if (!namePattern.test(nama)) {
        errors.push('Nama siswa hanya boleh berisi huruf dan spasi.');
    }

    // Validasi kelas
    if (!kelasJurusan) {
        errors.push('Kelas harus dipilih.');
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push('Email tidak valid.');
    }

    // Validasi nomor HP (misal: hanya angka dan minimal 10 digit)
    const numberPattern = /^[0-9]{10,}$/;
    if (!numberPattern.test(number)) {
        errors.push('Nomor HP harus berupa angka dan minimal 10 digit.');
    }

    // Validasi jurusan
    if (!jurusan) {
        errors.push('Jurusan harus dipilih.');
    }

    // Tampilkan pesan error jika ada
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';
    if (errors.length > 0) {
        errors.forEach(error => {
            const p = document.createElement('p');
            p.textContent = error;
            errorMessages.appendChild(p);
        });
        // Hentikan pengiriman form
        event.preventDefault();
    }
});
