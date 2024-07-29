
/* ************************************************************************************************** */
/* add solicitud reg table*/
/* ************************************************************************************************** */ 
function addRegSolicitud(nombre, descripcion, dataInputSp){

    let tableBody = document.getElementById("tbody");

    for (var i = 0; i < dataInputSp.length; i++) {

        var tb_nombre = nombre[i];
        let tb_valor = dataInputSp[i];
        let tb_descripcion = descripcion[i];
       
        let val0 = `<td class="table-td__0 ">${i} </td>`;
        let val1 = `<td class="table-td__1 ">${tb_nombre} </td>`;
        let val2 = `<td class="table-td__2 ">${tb_valor}</td>`;
        let val3 = `<td class="table-td__3 ">${tb_descripcion}</td>`;

        if (i==0){
            val0 = `<td class="table-td__0 c_caja-pinpad">${i} </td>`;
            val1 = `<td class="table-td__1 c_caja-pinpad">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_caja-pinpad">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_caja-pinpad">${tb_descripcion}</td>`;
        }else if ((i%2) == 0){
            val0 = `<td class="table-td__0 c_caja-pinpad_s">${i} </td>`;
            val1 = `<td class="table-td__1 c_caja-pinpad_s">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_caja-pinpad_s">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_caja-pinpad_s">${tb_descripcion}</td>`;
        }

        tableBody.innerHTML += `<tr>${val0 + val1 + val2 + val3}</tr>`; 
      }

}

/* ************************************************************************************************** */
/* add resp reg table*/
/* ************************************************************************************************** */ 
function addRegRespuesta(nombre, descripcion, dataInputSp){

    let tableBody = document.getElementById("tbody");

    for (var i = 0; i < dataInputSp.length; i++) {

        var tb_nombre = nombre[i];
        let tb_valor = dataInputSp[i];
        let tb_descripcion = descripcion[i];
       
        let val0 = `<td class="table-td__0 ">${i} </td>`;
        let val1 = `<td class="table-td__1 ">${tb_nombre} </td>`;
        let val2 = `<td class="table-td__2 ">${tb_valor}</td>`;
        let val3 = `<td class="table-td__3 ">${tb_descripcion}</td>`;

        if (i==0){
            val0 = `<td class="table-td__0 c_c_pinpad-caja">${i} </td>`;
            val1 = `<td class="table-td__1 c_pinpad-caja">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_pinpad-caja">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_pinpad-caja">${tb_descripcion}</td>`;
        }else if ((i%2) == 0){
            val0 = `<td class="table-td__0 c_pinpad-caja_r">${i} </td>`;
            val1 = `<td class="table-td__1 c_pinpad-caja_r">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_pinpad-caja_r">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_pinpad-caja_r">${tb_descripcion}</td>`;
        }

        tableBody.innerHTML += `<tr>${val0 + val1 + val2 + val3}</tr>`; 
      }

}

/* ************************************************************************************************** */
/* Command Read Card*/
/* ************************************************************************************************** */ 
function desgReadCard(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Local comercio OnUs",
        "Entrega BIN ",
        "Transacción offline",
        "Autoservicio",
        "Monto",
        "Código de moneda",
        "Tipo de tarjeta",
        "Lista montos de vuelto",
        "Monto vuelto",
        "Monto propina donación",
    ];

    let descripcion = ["comando lectura de tarjeta, CAJA -> PINPAD",
        "Valor numérico 00 Comercio sin tarjetas propias 01-99 Comercios onus, TBK asigna un numero para lectura de tarjetas propias",
        " Valor alfanumérico (Y: Si) (N: No) Sirve para conocer el bin de la tarjeta y poder realizar algún descuento a la venta por convenio con el banco ",
        " Valor alfanumérico (Y: Si) (N: No) Ya no está permitido su uso",
        "Valor alfanumérico (Y: Si) (N: No)",
        "Valor numérico (máximo) Monto de Compra (sin propina, sin vuelto) Monto mínimo $50,00 o US$1,00 Incluye dos decimales. ",
        "Valor alfanumérico CL| Pesos chilenos 152 |US| Dólares estadounidenses 840",
        "Valor alfanumérico Indicador del tipo de menú por el cual se realizó la transacción |CR| : CRÉDITO |DB| : DÉBITO - PREPAGO |NB| : NO BANCARIA ||: Operación con funcionalidad de detección automática de tarjeta. Valor de tipo en Tabla tipo de tarjeta Una venta hecha como debito puede ser autorizada como prepago Nota: Para Flujo de operación sin selección de menú, se debe enviar este campo vacío. ",
        "Valor alfanumérico (máximo) Lista de montos de vuelto permitidos, separados por “;” Incluyen dos decimales, siempre se debe enviar las 4 opciones definidas por Transbank. Campo paramétrico por punto de venta. NOTA: Para flujo de operación sin selección de menú, los rangos de vuelto deben enviarse siempre. En caso de operación tradicional, sólo si “Tipo de tarjeta = DB”. ",
        "Valor numérico (máximo) |0| : No muestra menú en pinpad || : ø Muestra menú consultando por vuelto Si |n|> 0 no se muestra menú. El valor debe corresponder a alguno enviado en el campo “Lista de montos de vuelto” Vuelto solo existe en débito, enviar 0 en crédito Campo c",
        "Valor numérico (máximo) Corresponde al monto propina o donación de la venta o anulación (incluye dos decimales)  Importante: Si se desea pedir propina al Tarjeta Habiente y que este la confirme, se debe enviar este campo el valor en vacío (Ø ) Para las anulaciones se debe colocar el monto de la propina de la venta a anular, en caso de no tener propina colocar un cero (0).",
        "",
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);

}
/* ************************************************************************************************** */
/* Response Read Card*/ 
/* ************************************************************************************************** */ 
function desgRespReadCard(dataInputSp){
    let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Indicador de contexto",        
        "Tipo de captura",
        "TRACK I",
        "TRACK II",
        "PAN SHA-1",
        "BIN",
        "4 últimos dígitos",
        "Nombre tarjetahabiente ",
        "Nombre marca de la tarjeta ",
        "Abreviación de tarjeta ",
        "Flag solicita 4 últimos dígitos",

        "Tipo de tarjeta"
    ];


    let descripcion = ["Comando lectura de tarjeta, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico Formato aaaammddhhmmssmm Es solo un ID, la fecha y hora en el pinpad puede estar desactualizada",
        "Valor Numérico Este campo será utilizado en el futuros |00| : B - Banda |01| : E . EMV c/contacto |02| : C - Contacless |03| : F - Fallback |04| : D - Digitada ",
        "Valor alfanumérico (máximo) Rellenado con blancos (0x20) a la derecha Si *Local comercio OnUs != 00* Con PAN encriptado se entrega 160 caracteres alfanuméricos que corresponde a 80 HEXA",
        "Valor alfanumérico (máximo) Rellenado con blancos (0x20) a la derecha Si *Local comercio OnUs != 00* Con PAN encriptado se entrega 80 caracteres alfanuméricos que corresponde a 40 HEXA",
        "Valor alfanumérico PAN encriptado con algoritmo SHA-1 Si “Transacción offline = Y”",
        "Valor numérico Si “Entrega BIN = Y” o “Transacción offline = Y”",        
        "Valor numérico",
        "Valor alfanumérico (máximo)",
        "Valor alfanumérico (máximo) De acuerdo a Tabla de marcas",
        "Valor alfanumérico De acuerdo a Tabla de marcas ",
        "Valor alfanumérico (Y: El punto de venta debe solicitar los 4ud) (N: El pinpad solicitará el ingreso de PIN) En caso de anulación no se ingresa pin, tampoco se solicita ingreso de 4ud.",
        "Valor alfanumérico Indicador del tipo de menú por el cual se realizó la transacción |CR| : CRÉDITO |DB| : DÉBITO - PREPAGO |NB| : NO BANCARIA Valor de tipo en Tabla tipo de tarjeta Una venta hecha como debito puede ser autorizada como prepago "
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);

}
/* ************************************************************************************************** */
/* Solicitud Sale or void*/ 
/* ************************************************************************************************** */ 
function desgReqSaleVoid(dataInputSp){
    let nombre = ["Comando",
        "Monto",
        "Número Ticket Boleta",
        "Numero de Cuotas",
        "Campo Impresión",
        "Enviar Mensajes",
        "Indicador de contexto",
        "Tipo de transacción",
        "Código de comercio",
        "Terminal ID",
        "Monto cuotas ",
        "Producto",
        "Número de empleado",
        "Número único",
        "Código de dependiente (Empleado)",
        "Índice interno del comercio",
        "Código de autorización transacción original",
        "Número de secuencia transacción original",
        "Fecha transacción original",
        "Hora transacción original",
        "4 últimos dígitos",
        ""

    ];

    let descripcion = ["comando Venta/Anulación, CAJA -> PINPAD",
        "Valor numérico (máximo) Monto de Compra (sin propina, sin vuelto) Monto mínimo $50,00 o US$1,00 Incluye dos decimales",
        "Valor alfanumérico Si comercio no utiliza este campo enviar el campo un cero",        
        "Valor numérico Obligatorio si “Tipo de transacción = 01” Si la venta original fue sin cuotas se debe informar el valor 00 ",
        "Valor numérico Indica si entrega voucher formateado 0: No envía voucher (utiliza comandos 500-510) 1: Envía voucher (utiliza comandos 540-550)",
        "Valor numérico Indica si el PINPAD debe enviar mensajes de estatus de la transacción 0: No envía mensajes (Valor por defecto) 1: Envía mensajes",
        "Valor alfanumérico Id entregado por el pinpad por cada transacción",
        "Valor numérico (00: Venta) (01: Anulación)",
        "Valor numérico Código del comercio entregado por TBK y configurado en la caja. EJ: 597012345678",
        "Valor Alfanumérico DDLL o Dirección lógica entregada por TBK y configurada en la caja en tabla de parámetros.",
        "Valor numérico Obligatorio si Tipo de transacción = 01. Si la venta original fue sin cuotas se debe informar el valor “0”",
        "Valor numérico Obligatorio si Tipo de transacción = 01. Corresponde al campo “Tipo cuotas” del comando 0510 de la venta original",
        "Valor alfanumérico Campo sin uso enviar vacío siempre",
        "Valor numérico Caja debe enviar el número único para imprimir en el voucher tanto en venta como anulación. Cada comercio puede definir un formato para el numero único, TBK entrega el siguiente ejemplo: AAAAMMDDHHMMSSLLLCCCXXXXXX Donde LLL es un número del local CCC es el número de la caja o punto de venta XXXXXX es un contador Campo a",
        "Valor numérico Campo de Empleado es opcional Si comercio no lo utiliza enviar el campo vacío",
        "Valor alfanumérico (máximo) Campo que puede ser utilizado por el comercio para agregar información que le sirva a sus procesos internos, numero caja, vendedor, ID venta, etc",
        "Valor alfanumérico (máximo) Código de autorización de la venta original, obligatorio si es una anulación “Tipo de transacción = 01”",
        "Valor alfanumérico (máximo) Número de secuencia de la venta original, obligatorio si es una anulación “Tipo de transacción = 01” También conocido como número de operación",
        "Formato AAMMDD Fecha de la venta original, obligatorio si es una anulación “Tipo de transacción = 01”",
        "Formato HHMMSS Hora de la venta original, obligatorio si es una anulación “Tipo de transacción = 01”",
        "Valor numérico Si es una anulación “Tipo de transacción = 01”, se debe ingresar los 4ud de la venta original, contra este dato el pinpad comparará con la tarjeta deslizada para anular. Si “Tipo de transacción = 00” y “Flag solicita 4 últimos dígitos = Y” del comando 0110, se debe ingresar los 4ud de la tarjeta deslizada.",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);

}
/* ************************************************************************************************** */
/* Response  Sale or void*/ 
/* ************************************************************************************************** */ 
function desgRespSaleVoid(dataInputSp){
   
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Indicador de contexto",        
        "Largo mensaje",
        "Mensaje SPDH",
        ""
    ];


    let descripcion = ["Comando Venta/Anulación, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico Formato aaaammddhhmmssmm Es solo un ID, la fecha y hora en el pinpad puede estar desactualizada",
        "Valor Numérico",
        "Valor alfanumérico (máximo) 2048",
        ""
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);

}