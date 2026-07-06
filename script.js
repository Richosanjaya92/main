// =========================
// DOM
// =========================

const pages = [
document.getElementById("page1"),
document.getElementById("page2"),
document.getElementById("page3"),
document.getElementById("page4"),
document.getElementById("page5"),
document.getElementById("page6"),
document.getElementById("page7"),
document.getElementById("page8"),
document.getElementById("page9")
];

const bar=document.getElementById("bar");

function go(page){

pages.forEach(p=>p.classList.add("hide"));

pages[page-1].classList.remove("hide");

bar.style.width=(page/pages.length*100)+"%";

}

// =========================
// LOADING
// =========================

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loading").style.display="none";

go(1);

},1800);

};

// =========================
// HATI
// =========================

setInterval(()=>{

let h=document.createElement("div");

h.className="heart";

const icon=["❤️","💕","💖","✨"];

h.innerHTML=icon[Math.floor(Math.random()*icon.length)];

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(18+Math.random()*20)+"px";

h.style.animationDuration=(5+Math.random()*3)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},7000);

},350);

// =========================
// PAGE 1
// =========================

document.getElementById("mulai").onclick=()=>{

go(2);

};
// =========================
// PAGE 2
// =========================

const yes = document.getElementById("yes");
const no = document.getElementById("no");
const status = document.getElementById("status");

let jumlahKlik = 0;

const dialog = [

"🤨 Yakin? Coba pikir lagi.",

"😌 Aku bisa ngikut jadwal kamu kok.",

"😂 Kayaknya salah pencet deh.",

"🤔 Tombol sebelah lebih menarik tuh.",

"📅 Pilih tanggal dulu aja, nanti dipikir lagi.",

"⚠️ Sistem mulai curiga kamu sebenarnya mau.",

"😂 Oke deh... tombol ini pensiun."

];

no.onclick = () => {

if(jumlahKlik < dialog.length){

status.innerHTML = dialog[jumlahKlik];

}

jumlahKlik++;

// Tombol Mau membesar
yes.style.transform = `scale(${1 + (jumlahKlik*0.12)})`;

// Tombol Belum mengecil
no.style.transform = `scale(${1 - (jumlahKlik*0.10)})`;

// Setelah klik ke-3 mulai kabur
if(jumlahKlik >= 3){

no.style.position = "relative";

no.style.left = (Math.random()*180-90)+"px";

no.style.top = (Math.random()*60-30)+"px";

}

// Klik ke-7
if(jumlahKlik >= 7){

status.innerHTML = `
🏆 <b>Achievement</b><br>
Tombol "Belum" mengundurkan diri.
`;

no.style.display = "none";

yes.innerHTML = "Yaudah Mau 😌";

yes.style.transform = "scale(1.8)";

yes.animate([

{transform:"scale(1.8)"},

{transform:"scale(2)"},

{transform:"scale(1.8)"}

],{

duration:700,

iterations:Infinity

});

}

};

// Tombol Mau

yes.onclick = () => {

go(3);

};
// =========================
// PAGE 3
// =========================

const tanggal = document.getElementById("tanggal");

const sekarang = new Date();

let tahun = sekarang.getFullYear();

// kalau sekarang sudah lewat Agustus
if ((sekarang.getMonth()+1) > 8) {

    tahun++;

}

tanggal.min = `${tahun}-08-01`;
tanggal.max = `${tahun}-08-31`;
tanggal.value = `${tahun}-08-10`;

document.getElementById("next").onclick = () => {

    go(4);

    fakeLoading();

};
// =========================
// FAKE LOADING
// =========================

function fakeLoading(){

const bar=document.getElementById("fakeProgress");

const text=document.getElementById("loadingText");

let persen=0;

const kalimat=[

"Mencocokkan kalender...",

"Ngitung kemungkinan harinya seru...",

"Nyari alasan buat nolak...",

"Masih nyari...",

"Error.",

"Alasan tidak ditemukan 😌"

];

let index=0;

const jalan=setInterval(()=>{

persen+=2;

bar.style.width=persen+"%";

if(persen%20==0 && index<kalimat.length){

text.innerHTML=kalimat[index];

index++;

}

if(persen>=100){

clearInterval(jalan);

setTimeout(()=>{

go(5);

},700);

}

},50);

}
// =========================
// PAGE 5
// =========================

document.getElementById("lanjutWheel").onclick = () => {

    go(6);

};
// =========================
// SPIN
// =========================

const pilihan = [

"🍜 Makan",

"☕ Ngopi",

"🌿 Ke alam",

"🎬 Nonton",

"🏨 Check-in aja",

"🏋️ Gym date"

];

const hasil = document.getElementById("hasilSpin");

let muter = false;

document.getElementById("spin").onclick = () => {

if(muter) return;

muter = true;

let putaran = 0;

const animasi = setInterval(()=>{

hasil.innerHTML = pilihan[
Math.floor(Math.random()*pilihan.length)
];

putaran++;

if(putaran >= 25){

clearInterval(animasi);

const final =
pilihan[Math.floor(Math.random()*pilihan.length)];

hasil.innerHTML = final;

muter = false;

}

},100);

};
// =========================
// LANJUT RULES
// =========================

document.getElementById("rulesBtn").onclick = () => {

if(hasil.innerHTML=="🤔"){

alert("Putar dulu roda keberuntungannya 😌");

return;

}

go(7);

};
// =========================
// PAGE 7 (RULES)
// =========================

document.getElementById("fotoBtn").onclick = () => {

    go(8);

};


// =========================
// PAGE 8 (FOTO)
// =========================

document.getElementById("countBtn").onclick = () => {

    go(9);

    mulaiCountdown();

};


// =========================
// COUNTDOWN
// =========================

function mulaiCountdown(){

const target = new Date(tanggal.value+"T00:00:00");

const timer = setInterval(()=>{

const now = new Date();

const beda = target-now;

if(beda<=0){

document.getElementById("countdown").innerHTML=

`
🎉

<h2>Hari ini kita jalan 😎</h2>
`;

clearInterval(timer);

return;

}

const hari=Math.floor(beda/1000/60/60/24);

const jam=Math.floor((beda/1000/60/60)%24);

const menit=Math.floor((beda/1000/60)%60);

const detik=Math.floor((beda/1000)%60);

document.getElementById("countdown").innerHTML=

`
<h2>${hari} Hari</h2>

<p>${jam} Jam ${menit} Menit ${detik} Detik</p>

`;

},1000);

}



// =========================
// WHATSAPP
// =========================

document.getElementById("wa").onclick=()=>{

const kegiatan=hasil.innerHTML;

const pesan=

`Halo Beb 👋

Fix ya.

📅 Tanggal : ${tanggal.value}

📍 Rencana : ${kegiatan}

Aku udah kosongin jadwal.

Sekarang tinggal kamu yang nemenin. 😌`;

window.open(

"https://wa.me/6281802910955?text="+encodeURIComponent(pesan),

"_blank"

);

};
