/* =================================
   BUKA UNDANGAN
================================= */

function openInvitation() {

    const cover = document.getElementById("cover");
    const navbar = document.getElementById("navbar");
    const music = document.getElementById("backgroundMusic");

    cover.style.display = "none";

    navbar.classList.add("active");

    // mencoba memainkan musik
    music.play().catch(function () {
        console.log("Musik membutuhkan interaksi pengguna.");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =================================
   MUSIK
================================= */

let musicPlaying = false;

function toggleMusic() {

    const music = document.getElementById("backgroundMusic");

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

    } else {

        music.play();

        musicPlaying = true;

    }

}


/* =================================
   KONFIRMASI KEHADIRAN
================================= */

function confirmAttendance(attendance) {

    const messages = {
        "Hadir": "Halo, saya mengonfirmasi bahwa saya akan hadir di acara reuni SMA Negeri 3 GU.",
        "Tidak Hadir": "Halo, mohon maaf saya mengonfirmasi bahwa saya tidak bisa hadir di acara reuni SMA Negeri 3 GU."
    };

    const message = messages[attendance];

    if (!message) {
        return;
    }

    const whatsappUrl = `https://wa.me/6280228379054?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}


/* =================================
   COUNTDOWN REUNI
================================= */

// Tanggal dan waktu acara
// Format: TAHUN, BULAN, TANGGAL, JAM, MENIT, DETIK
// Ingat: bulan dimulai dari 0
// 0 = Januari
// 9 = Oktober
// 11 = Desember

const reunionDate = new Date(
    2026,
    11,
    20,
    19,
    0,
    0
).getTime();


// Jalankan countdown setiap 1 detik
const countdownTimer = setInterval(function () {

    // Waktu sekarang
    const now = new Date().getTime();

    // Selisih waktu
    const distance = reunionDate - now;


    // Menghitung hari
    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    // Menghitung jam
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    // Menghitung menit
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    // Menghitung detik
    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    // Menampilkan hasil ke HTML
    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");


    // Jika waktu sudah habis
    if (distance < 0) {

        clearInterval(countdownTimer);

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

    }

}, 1000);

