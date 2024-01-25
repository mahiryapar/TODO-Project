
var sayac = 0;


function todosil(sayi){
    sayi = parseInt(sayi);
    let eleman = sessionStorage.getItem(sayi);
    sessionStorage.removeItem(sayi);
    let yazilar = document.getElementsByClassName("listeyazisi");
    for(i = 0;i<yazilar.length;i++){
        if(eleman == yazilar[i].textContent){
            yazilar[i].parentElement.remove();
        }
    }
    console.log(sayi);  
}



function ekle(){
    let a = sayac
    let bilgi = document.getElementById("input").value;
    if(bilgi==""){
        return;
    }
    document.getElementById("input").value = "";
    let uzunluk = document.getElementsByClassName("li").length;
    sessionStorage.setItem(a,bilgi);
    let eklenecekyazi = document.createElement("h6");
    eklenecekyazi.className = "listeyazisi";
    eklenecekyazi.textContent = bilgi;
    let ekleneceka = document.createElement("a");
    ekleneceka.className = "silmekutusu";
    ekleneceka.href = "#";
    ekleneceka.textContent="✖";
    ekleneceka.addEventListener("click",function(){todosil(a)});
    let eklenecekli = document.createElement("li");
    eklenecekli.className = "li";
    eklenecekli.appendChild(eklenecekyazi);
    eklenecekli.appendChild(ekleneceka);
    let ul = document.getElementsByClassName("ul")[0];
    ul.appendChild(eklenecekli);
    sayac++;
}
function clearall(){
    sessionStorage.clear();
    let liler = document.getElementsByClassName("li");
    let uzunluk = liler.length;
    for(i = 0;i<uzunluk; ){
        liler[i].remove();
    }
}

var ekle_butonu = document.getElementsByClassName("button1")[0];
ekle_butonu.addEventListener("click",ekle);
var clear_all_butonu = document.getElementsByClassName("button2")[0];
clear_all_butonu.addEventListener("click",clearall);
