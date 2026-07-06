// ================= LOADING =================

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    },2500);

}



// ================= TYPING =================

const tulisan="Aku punya sesuatu yang ingin aku sampaikan...";

let i=0;

function ketik(){

    if(i<tulisan.length){

        document.getElementById("typing").innerHTML+=tulisan.charAt(i);

        i++;

        setTimeout(ketik,70);

    }

}

ketik();



// ================= BUKA =================

document.getElementById("mulai").onclick=function(){

    document.getElementById("welcome").classList.add("hide");

    document.getElementById("question").classList.remove("hide");

}



// ================= HATI =================

function hati(){

    let h=document.createElement("div");

    h.className="heart";

    h.innerHTML=["❤️","💖","💕","💗","🌸"][Math.floor(Math.random()*5)];

    h.style.left=Math.random()*100+"vw";

    h.style.fontSize=(20+Math.random()*25)+"px";

    h.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },7000);

}

setInterval(hati,250);



// ================= TOMBOL =================

const no=document.getElementById("no");

const yes=document.getElementById("yes");

const text=document.getElementById("textNo");



let hitung=0;



const kata=[

"🥺 Yakin?",

"😔 Masa nolak aku...",

"😭 Sekali aja ya...", 

"🥹 Aku udah siapin semuanya...", 

"❤️ Aku bisa kok menyesuaikan jadwal kamu hehe.",

"💕 Udah ya sayang...",

"💖 Pencet IYA aja ❤️"

];



no.onclick=function(){

text.innerHTML=kata[hitung];

hitung++;

yes.style.transform="scale("+(1+hitung*0.15)+")";

if(hitung>=7){

no.style.display="none";

yes.style.transform="scale(1.8)";

yes.innerHTML="IYA ❤️❤️";

}

}



// ================= CONFETTI =================

function confetti(){

for(let i=0;i<180;i++){

let c=document.createElement("div");

c.innerHTML=["🎉","❤️","💖","✨"][Math.floor(Math.random()*4)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-30px";

c.style.fontSize=(20+Math.random()*20)+"px";

c.style.transition="4s";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform="rotate(720deg)";

},20);

setTimeout(()=>{

c.remove();

},4500);

}

}



// ================= IYA =================

yes.onclick=function(){

confetti();

setTimeout(()=>{

document.getElementById("question").classList.add("hide");

document.getElementById("calendar").classList.remove("hide");

},1200);

}



// ================= AGUSTUS =================

const tanggal=document.getElementById("tanggal");

const tahun=new Date().getFullYear();

tanggal.min=tahun+"-08-01";

tanggal.max=tahun+"-08-31";

tanggal.value=tahun+"-08-10";



// ================= LANJUT =================

document.getElementById("lanjut").onclick=function(){

document.getElementById("calendar").classList.add("hide");

document.getElementById("result").classList.remove("hide");



document.getElementById("hasilTanggal").innerHTML="📅 "+tanggal.value;

document.getElementById("hasilHari").innerHTML="🗓️ "+document.getElementById("lama").value;



countdown();

}



// ================= COUNTDOWN =================

function countdown(){

const tujuan=new Date(tanggal.value+"T00:00:00");



let jalan=setInterval(()=>{



let sekarang=new Date();



let selisih=tujuan-sekarang;



if(selisih<=0){

document.getElementById("countdown").innerHTML="❤️ Hari ini kita main ❤️";

clearInterval(jalan);

return;

}



let hari=Math.floor(selisih/1000/60/60/24);

let jam=Math.floor((selisih/1000/60/60)%24);

let menit=Math.floor((selisih/1000/60)%60);

let detik=Math.floor((selisih/1000)%60);



document.getElementById("countdown").innerHTML=

`${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`;



},1000);

}



// ================= WHATSAPP =================

document.getElementById("wa").onclick=function(){



let pesan=

`Hai Sayang ❤️

Aku pilih

${tanggal.value}

Durasi :

${document.getElementById("lama").value}

Aku udah gak sabar ketemu kamu ❤️`;


window.open("https://wa.me/6281802910955?text="+encodeURIComponent(pesan));

}
