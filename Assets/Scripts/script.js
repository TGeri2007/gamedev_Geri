
let Apiadatok = null
async function ApiFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log("Hiba");
        }
        return Apiadatok = await response.json();
    }
    catch (e) {
        console.log(e);
    }
}
async function beallitas(url) {
    let data = await ApiFetch(url);
    for (const key in data) {
        const value = data[key];
        const elem = document.getElementById(key);
        if (key == "cam_rotate" || key == "cam_move") {
            if (value == 1) {
                elem.checked = true;
            }
            else {
                elem.checked = false;
            }
        }

        //valtozasoshoz kell ugyanez



        elem.oninput = function () { valtozas(key) }
        if (elem != null) {
            elem.value = value;
            elem.style.backgroundColor = "white";
            valtozas(key);
        } else {
            console.warn("Unsupported parameter: " + key);
        }
    }
}


async function valtozas(mezo) {
    const mezohtml = document.getElementById(mezo);
    let data = await ApiFetch("https://jatekok.gamedevklub.hu/TimeCat/original.json");
    for (const key in data) {
        if (key == mezo) {
            if (mezohtml.value != data[key]) {

                if (document.getElementById("cam_rotate").value == 1  ) {
                    
                    document.getElementById("cam_rotate").style.backgroundColor ="yellow"
                    
                    //itt valami nem jo
                        
                }

                else if(document.getElementById("cam_move") == 0){
                    document.getElementById("cam_move").style.backgroundColor ="yellow"

                }

                else {
                    mezohtml.style.backgroundColor = "yellow";
                }



            }
            else {
                mezohtml.style.backgroundColor = "white";
            }
        }
    }
}

function inditas() {
    let elements = document.getElementById("inputok").elements;
    for (let i = 0, element; element = elements[i++];) {
        if (element.style.backgroundColor == "white") {
            element.disabled = true;
        }
    }
    document.getElementById("inputok").submit();
    for (let i = 0, element; element = elements[i++];) {
        if (element.disabled == true) {
            element.disabled = false;
        }
    }
}



/*
async function adatkuldes(params) {
    fetch({"https://dev.gamedevklub.hu/tolt.php"},{post(,)})
}


ez a fékész bence által kért gomb
*/



beallitas("https://jatekok.gamedevklub.hu/TimeCat/original.json");
