// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2500);
});

// Efek hati berjatuhan
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
   heart.innerHTML=["❤️","💖","💕","💗","🌸","✨"][Math.floor(Math.random()*6)];[Math.floor(Math.random()*4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random()*3 + 4) + "s";
    heart.style.fontSize = (Math.random()*20 + 18) + "px";
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);
}

setInterval(createHeart,300);

// Tombol Tidak
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const pesan = document.getElementById("pesan");

let klik = 0;

const kata = [
"🥺 Yakin?",
"😔 Aku sedih...",
"😭 Masa nolak aku...",
"🥹 Ayolah sekali aja...",
"❤️ Aku bisa kok sesuaikan jadwal kamu hehe.",
"🤍 Aku janji bakal bikin harinya seru.",
"💖 Udah sayang... pencet Iya aja ya."
];

noBtn.onclick = function(){

pesan.innerHTML = kata[klik];

klik++;

yesBtn.style.transform="scale("+(1+(klik*0.15))+")";

if(klik>=7){

noBtn.style.display="none";

yesBtn.style.transform="scale(1.8)";

yesBtn.innerHTML="IYA ❤️❤️";

}

}

// Klik Iya
yesBtn.onclick=function(){

confettiBoom();

document.getElementById("home").classList.add("hidden");

document.getElementById("calendarPage").classList.remove("hidden");

}
}

// Set bulan Agustus otomatis
const picker=document.getElementById("datePicker");

const now=new Date();

const year=now.getFullYear();

picker.min=year+"-08-01";

picker.max=year+"-08-31";

picker.value=year+"-08-10";

// Tombol lanjut
document.getElementById("nextBtn").onclick=function(){

const tanggal=picker.value;

const hari=document.getElementById("days").value;

document.getElementById("calendarPage").classList.add("hidden");

document.getElementById("lovePage").classList.remove("hidden");

document.getElementById("selectedDate").innerHTML="📅 "+tanggal;

document.getElementById("selectedDays").innerHTML="🗓️ "+hari;

mulaiCountdown(tanggal);

}

// Countdown
function mulaiCountdown(tanggal){

const tujuan=new Date(tanggal+"T00:00:00");

const hitung=setInterval(()=>{

const sekarang=new Date();

const selisih=tujuan-sekarang;

if(selisih<=0){

document.getElementById("countdown").innerHTML="❤️ Hari ini kita main ❤️";

clearInterval(hitung);

return;

}

const hari=Math.floor(selisih/(1000*60*60*24));

const jam=Math.floor((selisih/(1000*60*60))%24);

const menit=Math.floor((selisih/(1000*60))%60);

const detik=Math.floor((selisih/1000)%60);

document.getElementById("countdown").innerHTML=

`⏳ ${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`;

},1000);

}

// Tombol WhatsApp
document.getElementById("waBtn").onclick=function(){

const tanggal=document.getElementById("selectedDate").innerText;

const hari=document.getElementById("selectedDays").innerText;

const pesan=
`Hai Sayang ❤️

Aku pilih

${tanggal}

Durasi:
${hari}

Aku udah gak sabar ketemu kamu 🥹❤️`;

window.open("https://wa.me/6281802910955?text="+encodeURIComponent(pesan));

}
function confettiBoom(){

for(let i=0;i<200;i++){

const c=document.createElement("div");

c.innerHTML=["🎉","💖","❤️","✨"][Math.floor(Math.random()*4)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(20+Math.random()*25)+"px";

c.style.transition="4s";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform="rotate(720deg)";

},10);

setTimeout(()=>{

c.remove();

},4500);

}

}
