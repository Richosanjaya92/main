window.addEventListener("DOMContentLoaded", () => {

const loading = document.getElementById("loading");
const welcome = document.getElementById("welcome");
const question = document.getElementById("question");
const calendar = document.getElementById("calendar");
const finish = document.getElementById("finish");

const start = document.getElementById("start");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const next = document.getElementById("next");
const wa = document.getElementById("wa");

setTimeout(()=>{
loading.style.display="none";
},1800);

// tombol lanjut
start.addEventListener("click",()=>{

welcome.classList.add("hide");
question.classList.remove("hide");

});

// hati
setInterval(()=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML=["❤️","💕","💖","💗"][Math.floor(Math.random()*4)];

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*25)+"px";

h.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},7000);

},250);
    // =======================
// TOMBOL GAK MAU
// =======================

let klik = 0;

const status = document.getElementById("status");

const kata = [
"😏 Yakin nih?",
"🙄 Masa sih gamau?",
"😂 Salah pencet ya?",
"😆 Aku sabar kok...",
"🤭 Coba pencet yang sebelah.",
"🥺 Ayolah...",
"🤣 Udah deh pencet Mau aja."
];

no.addEventListener("mouseover", () => {

if(klik>=2){

no.style.position="relative";
no.style.left=(Math.random()*250-125)+"px";
no.style.top=(Math.random()*80-40)+"px";

}

});

no.addEventListener("click",()=>{

if(klik<kata.length){

status.innerHTML=kata[klik];

}

klik++;

yes.style.transform=`scale(${1+(klik*0.15)})`;

if(klik>=7){

no.style.display="none";

status.innerHTML="<b>😂 Yaudah deh... tombolnya menyerah.</b>";

yes.innerHTML="Iya Mau ❤️";

yes.style.transform="scale(2)";

}

});


// =======================
// TOMBOL MAU
// =======================

yes.addEventListener("click",()=>{

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.innerHTML=["🎉","✨","❤️","🥳"][Math.floor(Math.random()*4)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(18+Math.random()*22)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform=`rotate(${Math.random()*720}deg)`;

},20);

setTimeout(()=>{

c.remove();

},4200);

}

setTimeout(()=>{

question.classList.add("hide");
calendar.classList.remove("hide");

},1200);

});
    // =======================
// KALENDER AGUSTUS
// =======================

const tanggal = document.getElementById("tanggal");
const hari = document.getElementById("hari");

const sekarang = new Date();
let tahun = sekarang.getFullYear();

if ((sekarang.getMonth() + 1) > 8) {
    tahun++;
}

tanggal.min = `${tahun}-08-01`;
tanggal.max = `${tahun}-08-31`;
tanggal.value = `${tahun}-08-10`;


// =======================
// LANJUT
// =======================

next.addEventListener("click", () => {

    calendar.classList.add("hide");
    finish.classList.remove("hide");

    document.getElementById("hasilTanggal").innerHTML =
        "📅 Tanggal : <b>" + tanggal.value + "</b>";

    document.getElementById("hasilHari").innerHTML =
        "🗓️ Durasi : <b>" + hari.value + "</b>";

    countdown(tanggal.value);

});


// =======================
// COUNTDOWN
// =======================

function countdown(target) {

    const tujuan = new Date(target + "T00:00:00");

    const timer = setInterval(() => {

        const now = new Date();

        const beda = tujuan - now;

        if (beda <= 0) {

            document.getElementById("countdown").innerHTML =

            `
            <h2>❤️ Hari ini kita jalan ❤️</h2>
            `;

            clearInterval(timer);

            return;

        }

        const d = Math.floor(beda / 1000 / 60 / 60 / 24);

        const h = Math.floor((beda / 1000 / 60 / 60) % 24);

        const m = Math.floor((beda / 1000 / 60) % 60);

        const s = Math.floor((beda / 1000) % 60);

        document.getElementById("countdown").innerHTML =

        `
        <h3>⏳ Countdown</h3>

        <h2>${d} Hari ${h} Jam</h2>

        <h3>${m} Menit ${s} Detik</h3>

        `;

    }, 1000);

}



// =======================
// WHATSAPP
// =======================

wa.addEventListener("click", () => {

const pesan = `Hai Sayang ❤️

Aku pilih:

📅 ${tanggal.value}

🗓️ ${hari.value}

Aku udah siapin semuanya.
Sekarang giliran kamu nemenin aku ya. 🥹❤️`;

window.open(

"https://wa.me/6281802910955?text=" +

encodeURIComponent(pesan),

"_blank"

);

});

});
