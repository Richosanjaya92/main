// =====================
// LOADING
// =====================

window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);
};

// =====================
// BACKGROUND HEART
// =====================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const icons = ["❤️","💖","💕","💙","✨"];

    heart.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*15)+"px";

    heart.style.animationDuration = (4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createHeart,250);

// =====================
// OPEN PAGE
// =====================

document.getElementById("start").onclick=()=>{

document.getElementById("welcome").classList.add("hide");

document.getElementById("question").classList.remove("hide");

};
// =====================
// TOMBOL "GAK MAU"
// =====================

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const status = document.getElementById("status");

let klik = 0;

const dialog = [
    "🤨 Yakin? Coba pikir lagi deh.",
    "😏 Kayaknya kamu salah pencet.",
    "🙃 Aku masih sabar kok.",
    "😂 Tombol 'Gak Mau' mulai capek dipencet.",
    "🤝 Aku yang ngikut jadwal kamu kok.",
    "⚠️ Sistem mendeteksi kamu mulai luluh.",
    "🚫 Error 404 : Pilihan 'Gak Mau' tidak ditemukan."
];

noBtn.onclick = () => {

    if (klik < dialog.length) {
        status.innerHTML = dialog[klik];
    }

    klik++;

    // Tombol Mau makin besar
    yesBtn.style.transform = `scale(${1 + klik * 0.15})`;

    // Tombol Gak Mau makin kecil
    noBtn.style.transform = `scale(${1 - klik * 0.1})`;

    // Mulai geser posisi setelah klik ke-4
    if (klik >= 4) {
        noBtn.style.position = "relative";
        noBtn.style.left = (Math.random() * 120 - 60) + "px";
        noBtn.style.top = (Math.random() * 40 - 20) + "px";
    }

    if (klik >= 7) {

        status.innerHTML = `
        🏆 <b>Achievement Unlocked</b><br>
        Orang Paling Susah Diajak Jalan 😂
        `;

        noBtn.style.display = "none";

        yesBtn.innerHTML = "Yaudah Mau 😌";

        yesBtn.style.transform = "scale(2)";

        yesBtn.animate([
            {transform:"scale(2)"},
            {transform:"scale(2.2)"},
            {transform:"scale(2)"}
        ],{
            duration:700,
            iterations:Infinity
        });

    }

};
// =====================
// CONFETTI
// =====================

function confettiBoom(){

for(let i=0;i<150;i++){

let e=document.createElement("div");

e.innerHTML=["🎉","✨","❤️","🥳"][Math.floor(Math.random()*4)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="-30px";

e.style.fontSize=(20+Math.random()*20)+"px";

e.style.transition="4s";

document.body.appendChild(e);

setTimeout(()=>{

e.style.top="110vh";

e.style.transform=`rotate(${Math.random()*720}deg)`;

},10);

setTimeout(()=>{

e.remove();

},4200);

}

}

yesBtn.onclick=()=>{

confettiBoom();

setTimeout(()=>{

document.getElementById("question").classList.add("hide");

document.getElementById("calendar").classList.remove("hide");

},1200);

};
// =====================
// KALENDER AGUSTUS
// =====================

const tanggal = document.getElementById("tanggal");
const tahun = new Date().getFullYear();

// Kalau sekarang sudah lewat Agustus,
// otomatis pakai Agustus tahun depan
const targetTahun =
    (new Date().getMonth() + 1 > 8) ? tahun + 1 : tahun;

tanggal.min = `${targetTahun}-08-01`;
tanggal.max = `${targetTahun}-08-31`;
tanggal.value = `${targetTahun}-08-10`;


// =====================
// TOMBOL LANJUT
// =====================

document.getElementById("next").onclick = () => {

    const pilihTanggal = tanggal.value;
    const pilihHari = document.getElementById("hari").value;

    document.getElementById("calendar").classList.add("hide");
    document.getElementById("finish").classList.remove("hide");

    document.getElementById("hasilTanggal").innerHTML =
        "📅 " + pilihTanggal;

    document.getElementById("hasilHari").innerHTML =
        "🗓️ " + pilihHari;

    mulaiCountdown(pilihTanggal);

};


// =====================
// COUNTDOWN
// =====================

function mulaiCountdown(target){

    const tujuan = new Date(target + "T00:00:00");

    const timer = setInterval(()=>{

        const sekarang = new Date();

        const selisih = tujuan - sekarang;

        if(selisih <= 0){

            document.getElementById("countdown").innerHTML =
            "🎉 Hari ini kita jalan!";

            clearInterval(timer);

            return;

        }

        const hari =
        Math.floor(selisih/(1000*60*60*24));

        const jam =
        Math.floor((selisih/(1000*60*60))%24);

        const menit =
        Math.floor((selisih/(1000*60))%60);

        const detik =
        Math.floor((selisih/1000)%60);

        document.getElementById("countdown").innerHTML =

        `
        ⏳<br>
        <b>${hari}</b> Hari
        <b>${jam}</b> Jam
        <b>${menit}</b> Menit
        <b>${detik}</b> Detik
        `;

    },1000);

}



// =====================
// WHATSAPP
// =====================

document.getElementById("wa").onclick=()=>{

const pesan=

`Hai Endah 👋

Aku pilih tanggal:

${tanggal.value}

Durasi:

${document.getElementById("hari").value}

Jangan PHP ya 😌`;

window.open(

"https://wa.me/6281802910955?text="+encodeURIComponent(pesan),

"_blank"

);

};
