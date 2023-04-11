let voyti = document.getElementById("voyti_content");
let registration = document.getElementById("register_content");
let podverjdeniya = document.getElementById("div_podverjdeniya");
let registration_box = document.getElementById("registration_box");
let exit = document.getElementById("exit");
let input_podtverjdeniya = document.getElementsByClassName(
  "input_podtverjdeniya"
);
function BTN_voyti() {
  voyti.classList.toggle("voyti");
}
function exit_voyti() {
  voyti.classList.toggle("voyti");
}

function BTN_register() {
  registration.classList.toggle("registration");
}
function exit_registration() {
  registration.classList.toggle("registration");
  registration_box.style.display = "";
}

function BTN_register_content() {
  registration_box.style.display = "none";
  podverjdeniya.style.display = "block";
  exit.style.display = "none";
}
function Exit_podverjdeniya() {
  registration_box.style.display = "block";
  podverjdeniya.style.display = "none";
}
let btn_opisaniya_instruct1 = document.getElementById(
  "btn_opisaniya_instruct1"
);
let btn_opisaniya_instruct2 = document.getElementById(
  "btn_opisaniya_instruct2"
);
let btn_opisaniya_instruct3 = document.getElementById(
  "btn_opisaniya_instruct3"
);
let btn_opisaniya_instruct4 = document.getElementById(
  "btn_opisaniya_instruct4"
);
let btn_opisaniya_instruct5 = document.getElementById(
  "btn_opisaniya_instruct5"
);
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");
let i4 = document.getElementById("i4");
let i5 = document.getElementById("i5");
let active = document.getElementById("active")
let active2 = document.getElementById("active2")
let active3 = document.getElementById("active3")
let active4 = document.getElementById("active4")
let active5 = document.getElementById("active5")

function BTN_Instuct1() {
  btn_opisaniya_instruct1.classList.toggle("div_instruct_tovarID1");
  i1.classList.toggle("active_icon")
}

function BTN_Instuct2() {
  btn_opisaniya_instruct2.classList.toggle("div_instruct_tovarID2");
  i2.classList.toggle("active_icon")

}
function BTN_Instuct3() {
  btn_opisaniya_instruct3.classList.toggle("div_instruct_tovarID3");
  i3.classList.toggle("active_icon")
}
function BTN_Instuct4() {
  btn_opisaniya_instruct4.classList.toggle("div_instruct_tovarID4");
  i4.classList.toggle("active_icon")
}
function BTN_Instuct5() {
  btn_opisaniya_instruct5.classList.toggle("div_instruct_tovarID5");
  i5.classList.toggle("active_icon")
}

let korzina_kolichetsva_tovar1 = document.getElementById(
  "korzina_kolichetsva_tovar1"
);
let korzina_kolichetsva_tovar2 = document.getElementById(
  "korzina_kolichetsva_tovar2"
);
let korzina_kolichetsva_tovar3 = document.getElementById(
  "korzina_kolichetsva_tovar3"
);
let korzina_kolichetsva_tovar4 = document.getElementById(
  "korzina_kolichetsva_tovar4"
);

function minus1() {
  korzina_kolichetsva_tovar1.innerHTML =
    korzina_kolichetsva_tovar1.innerHTML - 1;
}
function pilus1() {
  korzina_kolichetsva_tovar1.innerHTML =
    +korzina_kolichetsva_tovar1.innerHTML + 1;
}
function minus2() {
  korzina_kolichetsva_tovar2.innerHTML =
    korzina_kolichetsva_tovar2.innerHTML - 1;
}
function pilus2() {
  korzina_kolichetsva_tovar2.innerHTML =
    +korzina_kolichetsva_tovar2.innerHTML + 1;
}
function minus3() {
  korzina_kolichetsva_tovar3.innerHTML =
    korzina_kolichetsva_tovar3.innerHTML - 1;
}
function pilus3() {
  korzina_kolichetsva_tovar3.innerHTML =
    +korzina_kolichetsva_tovar3.innerHTML + 1;
}
function minus4() {
  korzina_kolichetsva_tovar4.innerHTML =
    korzina_kolichetsva_tovar4.innerHTML - 1;
}
function pilus4() {
  korzina_kolichetsva_tovar4.innerHTML =
    +korzina_kolichetsva_tovar4.innerHTML + 1;
}


let span1 = document.getElementById("btn_span1")
let span2 = document.getElementById("btn_span2")
let span3 = document.getElementById("btn_span3")
let btn_Menu_tovar = document.getElementById("btn_Menu_Tovar")

function Btn_burger(){
  span1.classList.toggle("span1")
  span2.classList.toggle("span2")
  span3.classList.toggle("span3")
  btn_Menu_tovar.classList.toggle("btn_Menu_Tovar2")
  btn_Menu_tovar.classList.toggle("btn_Menu_Tovar1")
}