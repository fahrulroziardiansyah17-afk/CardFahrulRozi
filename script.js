// Menunggu seluruh halaman HTML selesai dimuat browser
document.addEventListener("DOMContentLoaded", function () {
  // 1. MENGENALKAN ELEMEN HTML KE JAVASCRIPT (Pakai ID)
  const formPendaftaran = document.getElementById("formPendaftaran");
  const inputNama = document.getElementById("nama");
  const inputPassword = document.getElementById("password");
  const errorPassword = document.getElementById("errorPassword");
  const selectJurusan = document.getElementById("jurusan");

  // 2. CEK PASSWORD SECARA LANGSUNG SAAT DIKETIK (Event: 'input')
  inputPassword.addEventListener("input", function () {
    const jumlahHuruf = inputPassword.value.length;

    if (jumlahHuruf > 0 && jumlahHuruf < 8) {
      // Jika huruf antara 1 sampai 7 -> Muncul peringatan merah
      errorPassword.textContent = "⚠️ Password kurang panjang (" + jumlahHuruf + "/8 karakter)";
      errorPassword.style.color = "#dc2626";
      inputPassword.style.borderColor = "#dc2626";
    } else if (jumlahHuruf >= 8) {
      // Jika sudah 8 huruf atau lebih -> Muncul tanda hijau aman
      errorPassword.textContent = "✅ Password sudah aman";
      errorPassword.style.color = "#16a34a";
      inputPassword.style.borderColor = "#16a34a";
    } else {
      // Jika kotak dikosongkan kembali -> Bersihkan peringatan
      errorPassword.textContent = "";
      inputPassword.style.borderColor = "#cbd5e1";
    }
  });

  // 3. CEK DATA SAAT TOMBOL 'DAFTAR SEKARANG' DIKLIK (Event: 'submit')
  formPendaftaran.addEventListener("submit", function (event) {
    // Cek ulang apakah password masih kurang dari 8 karakter
    if (inputPassword.value.length < 8) {
      alert("Gagal Mendaftar! Password wajib minimal 8 karakter.");
      event.preventDefault(); // Tahan form agar tidak terkirim
      inputPassword.focus(); // Arahkan kursor ke kotak password
      return;
    }

    // Ambil teks nama jurusan yang dipilih siswa
    const jurusanDipilih = selectJurusan.options[selectJurusan.selectedIndex].text;

    // Munculkan kotak konfirmasi Ya / Batal
    const yakin = confirm(
      "Cek kembali data pendaftaranmu:\n\n" +
      "Nama : " + inputNama.value + "\n" +
      "Jurusan : " + jurusanDipilih + "\n\n" +
      "Klik OK jika data sudah benar."
    );

    // Jika siswa klik 'Cancel' (Batal), hentikan pengiriman data
    if (!yakin) {
      event.preventDefault();
    }
  });

  // 4. BERSIHKAN PERINGATAN SAAT TOMBOL 'RESET FORM' DIKLIK (Event: 'reset')
  formPendaftaran.addEventListener("reset", function () {
    errorPassword.textContent = "";
    inputPassword.style.borderColor = "#cbd5e1";
  });

  // 5. EFEK ZOOM HALUS SAAT KOTAK INPUT DIKLIK (Event: 'focus' & 'blur')
  const semuaKotak = document.querySelectorAll("input, select, textarea");

  semuaKotak.forEach(function (kotak) {
    // Saat kotak diklik
    kotak.addEventListener("focus", function () {
      if (kotak.type !== "radio" && kotak.type !== "checkbox") {
        kotak.style.transform = "scale(1.01)";
      }
    });

    // Saat pindah ke kotak lain
    kotak.addEventListener("blur", function () {
      kotak.style.transform = "scale(1)";
    });
  });
});