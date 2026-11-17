// Menunggu halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // Mengambil elemen kartu profil
    const profileCard = document.querySelector(".profile-card");

    // Animasi kartu saat halaman dibuka
    profileCard.style.opacity = "0";
    profileCard.style.transform = "translateY(30px)";

    setTimeout(function () {
        profileCard.style.transition = "all 0.8s ease";
        profileCard.style.opacity = "1";
        profileCard.style.transform = "translateY(0)";
    }, 200);

    // Efek kartu mengikuti gerakan mouse
    profileCard.addEventListener("mousemove", function (event) {
        const rect = profileCard.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 25;
        const rotateY = (x - centerX) / 25;

        profileCard.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Mengembalikan posisi kartu
    profileCard.addEventListener("mouseleave", function () {
        profileCard.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });

    // Efek klik tombol media sosial
    const socialButtons = document.querySelectorAll(".social-button");

    socialButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.9)";

            setTimeout(function () {
                button.style.transform = "scale(1)";
            }, 150);
        });
    });

    // Sapaan di console browser
    console.log("Selamat datang di portofolio Ziyad X Zaat!");

});