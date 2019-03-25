/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function caricaTag() {
    fetch('http://localhost:8080/nostalciac/resources/tags')
            .then(response => {
                console.log("response...", response);
                return response.json()
            })
            .then(json => creaTabellaDaJson(json, "id,tag,tipo", "tab1", "tabella", "#contenitore"))
            .catch (x => {alert("err" +x); console.log("err", x)}) 

}

caricaTag();