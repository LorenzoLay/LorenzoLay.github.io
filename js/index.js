console.log("index js vinculado");

window.onload = function(){
    document.getElementById("cmdDesCommand").addEventListener("click", ()=>desglosarComando());
    document.getElementById("cmdDesSpdh").addEventListener("click", ()=>desglosarSpdh());
    document.getElementById("cmdClean").addEventListener("click", ()=>reload());
    
}
/* ************************************************************************************************** */
/* ************************************************************************************************** */ 
function desglosarComando(){
    
    const dataInput = document.getElementById("data").value;
     
    let dataInputAux = dataInput.replaceAll("\n", "");
    dataInputAux = dataInputAux.replaceAll("\x02", "");
    dataInputAux = dataInputAux.replaceAll("\x03", "");

    
    let dataInputSp = dataInputAux.split("|");
    alert(dataInputSp[0]);

    if ((dataInputSp[0] == "0100") || (dataInputSp[0] == "0120")){
        desgReadCard(dataInputSp);
        return;
    }
    
    if ((dataInputSp[0] == "0110") || (dataInputSp[0] == "0130")){
        desgRespReadCard(dataInputSp);
        return;
    }
    if (dataInputSp[0] == "0200"){
        desgReqSaleVoid(dataInputSp);
        return;
    }
    if (dataInputSp[0] == "0210"){
        desgRespSaleVoid(dataInputSp);
        return;
    }
    alert(dataInputSp[0]) + "no disponible!!!";
    
    
}
/* ************************************************************************************************** */ 
/* start SPDH*/
/* ************************************************************************************************** */ 
function desglosarSpdh(){
    const d1c = 28;
    const H1C = d1c.toString(16);

    const dataInput = document.getElementById("data").value;
    let dataInputAux = dataInput.replace("\n", "");
    let dataInputHex = convertToHex(dataInputAux);
    let dataInputHexSp = dataInputHex.split(H1C);

    desSPDH(dataInputHexSp);

}
/* ************************************************************************************************** */ 
/* Reload*/
/* ************************************************************************************************** */ 
function reload(){
    location.reload();
}
