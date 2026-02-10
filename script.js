
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
        async function beallitas(url){
            let data = await ApiFetch(url);
            for (const key in data) {
                const value = data[key];
                const elem = document.getElementById(key);
                elem.oninput = function() {valtozas(key)}
                if (elem != null) {
                    elem.value = value;
                    elem.style.backgroundColor = "white";
                    valtozas(key);
                } else {
                    console.warn("Unsupported parameter: " + key);
                }
            }
        }
        async function valtozas(mezo){
            const mezohtml = document.getElementById(mezo);
            let data = await ApiFetch("https://jatekok.gamedevklub.hu/TimeCat/original.json");
            for(const key in data){
                if(key == mezo){
                    if(mezohtml.value != data[key]){
                        mezohtml.style.backgroundColor = "yellow";
                    }
                    else{
                        mezohtml.style.backgroundColor = "white";
                    }
                }
            }
        }

        function inditas(){
            let elements = document.getElementById("inputok").elements;
            for(let i = 0, element; element = elements[i++];){
                if(element.style.backgroundColor == "white"){
                    element.disabled = true;
                }
            }
            document.getElementById("inputok").submit();
            for(let i = 0, element; element = elements[i++];){
                if(element.disabled == true){
                    element.disabled = false;
                }
            }
        }
        beallitas("https://jatekok.gamedevklub.hu/TimeCat/original.json");
