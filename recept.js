var receptekTomb = [];
$(function () {
    $("article").on("click", "tr", megjelenit);
    $.ajax(
            {url: "receptek.json", success: function (result) {
//                console.log(result);
                    receptekTomb = result;
                    console.log(receptekTomb);
//                $("article").append(receptekTomb);
                    tablazatbaKiir();
//                    $("table tr").click(megjelenit);
                }});

});




function megjelenit() {
    var ID = Number($(this).attr("id"));
    console.log(ID);
    if (ID > 0)
        megjelenitRecept(receptekTomb[ID - 1]);
    if (ID > 0)
        megjelenitKep(receptekTomb[ID - 1]);
}
//function megjelenitKep(recept) {
//var kep = new Image();
//kep.src = recept.eleresiut;
//kep.width = "50";
//kep.height = "50";
//$("section").html(kep);
//}

function megjelenitKep(recept) {
$("section").append("<img>");
$( "section img" ).attr({
src: recept.eleresiut,
title: "kep",
width: "300",
height: "200",
alt: "kep"
});
}


//function megjelenitKep(recept) {
//    var kep = new Image();
//    kep.width = "50";
//    kep.height = "50";
//    kep.src = recept.eleresiut;
//    $("footer").html(kep);
//}
//
//
//function megjelenitKep(recept) {
////    $("section").empty();
//    $("section").append("<img>");
//    $("section h2").append("<br>"+recept.eleresiut.attr("<img>"));
//    
//    
//}


function megjelenitRecept(recept) {
    $("section").empty();
    //az adott receptnek az adatait kell megjeleníteni, section h2be akarjuk a recept nevét
    $("section").append("<h2>");
    $("section h2").append(recept.neve+": ");
    //section <p> tagbe a leírást, section <div>be a felsorolást, hozzávalójat
    //section img-be a képet
    $("section").append("<p>");
    $("section h2").append(recept.leiras);


}
//táblázat formázása a házi!
//képek megjelenítése, hozzá kell adni egy image taget, attributum beállítása attr

function tablazatbaKiir() {
    csakFejlec();
    for (var i = 0; i < receptekTomb.length; i++) {
        $("table").append("<tr id='" + (i + 1) + "'></tr>");
        for (var item in receptekTomb[i]) {
//            $("table tr").eq(i+1).append("<td>"+ receptekTomb[i][item]+"</td>");
            if (item == "hozzavalok") {
                for (var item2 in receptekTomb [i][item]) {
                    for (var item3 in receptekTomb[i][item][item2]) {
                      $("table tr").eq(i + 1).append("<li>" +item3+" "+ receptekTomb[i][item][item2][item3] + "</li>");  
                    }
                    
                }
            }
                else {
                    $("table tr").eq(i + 1).append("<td>" + receptekTomb[i][item] + "</td>");
                }
            
        }

    }
//    $("table tr").click(megjelenit);
}
;



function csakFejlec() {
    $("article").append("<table></table>");
    $("article table").append("<tr id='0'><th>Név</th><th>Elkészítési idő</th><th>Elérési út</th><th>Leírás</th><th>Hozzávalók</th></tr>");



}
