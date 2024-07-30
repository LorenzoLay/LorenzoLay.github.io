
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
/* ************************************************************************************************** */
/* Command Read Reverse*/
/* ************************************************************************************************** */ 
function desgReqReverse(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Indicador de contexto"
    ];

    let descripcion = ["comando Requerimiento de Reversa, CAJA -> PINPAD",
        "Id de la transacción que se quiere reversar"
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response Read Reverse*/ 
/* ************************************************************************************************** */ 
function desgRespReverse(dataInputSp){
    let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Indicador de contexto",        
        "Largo del mensaje",
        "Mensaje SPDH reversa"
    ];


    let descripcion = ["Comando requerimiento de reversa, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor Numérico",
        "Valor alfanumérico (máximo)",
        
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Command Req validate upgrade*/
/* ************************************************************************************************** */ 
function desgReqValUpgrade(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Indicador de contexto",
        "Largo del mensaje",
        "Mensaje SPDH (reversa si es 0500)",
        "(540) Nombre Comercio",
        "(540) Dirección Comercio",
        "(540) Comuna Comercio",
        "(540) Sin Nombre",
        ""
    ];

    let descripcion = ["comando Requerimiento de validación/actualización, CAJA -> PINPAD",
        "Valor alfanumérico Id entregado por el pinpad por cada transacción",
        "Valor Numérico",
        "(540) Valor alfanumérico (máximo)",
        "(540) Valor Alfanumérico Campo paramétrico en caja enviado al pinpad",
        "(540) Valor Alfanumérico Campo paramétrico en caja enviado al pinpad",
        "(540) Valor Alfanumérico",
        "(540) Campo paramétrico en caja enviado al pinpad Puede ser comuna o ciudad",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response validate upgrade Reverse*/ 
/* ************************************************************************************************** */ 
function desgRespValUpgrade(dataInputSp){
    let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Indicador de contexto",
        "Código de comercio",        
        "Terminal ID",
        "Número Ticket Boleta",
        "Empleado",
        "Código Autorización",
        "Monto",
        "Monto vuelto",
        "Numero de Cuotas",
        "Monto Cuota",
        "Últimos 4 Dígitos Tarjeta",
        "Número Operación",
        "Glosa Tipo de Tarjeta",
        "Fecha Contable",
        "Número de Cuenta",
        "Abreviación de la tarjeta",
        "Fecha Transacción",
        "Hora Transacción",
        "Campo Impresión",
        "Transacción premiada",
        "Tipo promoción",
        "Código promoción",
        "Nombre promoción",
        "Glosa vale premio",
        "Texto vale premio",
        "Flag permite cuotas",
        "Flag de gracia",
        "Flag C2C",

        "Flag C3C",
        "Flag NCuotas",
        "Flag máximo de cuotas",
        "Tipo de menú",
        "Indicador transacción con gracia",
        "Tipo cuotas",
        "Tasa aplicada",
        "Glosa tipo cuota",
        "Glosa tipo cuota 2",
        "Glosa promoción",
        "Id promoción",

        "Flag imprimir tasa",
        "Periodo diferido",

        "Diferido 1 periodo",
        "Diferido 1 valor tasa",
        "Diferido 1 valor cuota",
        "Diferido 2 periodo",
        "Diferido 2 valor tasa",
        "Diferido 2 valor cuota",
        "Diferido 3 periodo",
        "Diferido 3 valor tasa",
        "Diferido 3 valor cuota",

        "Número de secuencia transacción original",
        "Código respuesta Transbank",
        "Glosa respuesta Transbank",
        "Flag transacción con PIN",
        "Nombre tarjetahabiente",
        "Flag tipo voucher",
        "Flag modalidad cuotas",
        "Glosa transacción afecta a ahorro",
        "Número de secuencia",
        "Flag mensaje terminal",
        "Largo mensaje",
        "Mensaje SPDH Venta Reversa",
        "(550) Propina",
        "(550) Voucher de Rechazo",
        "(550) Voucher PEL",
        "(550) LABEL - EMV",
        "(550) RID - EMV",
        "(550) Modelo pinpad",
        "(550) Versión de pinpad",
        "(550) Saldo Prepago",
        ""
    ];


    let descripcion = ["Comando respuesta validación/actualización, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico Id entregado por el pinpad por cada transacción",
        "Valor numérico Código del comercio entregado por TBK y configurado en la caja, se imprime en voucher",
        "Valor Alfanumérico Dirección lógica entregada por TBK y configurada en la caja, se imprime en voucher",
        "Valor alfanumérico Campo opcional, si viene se imprime en voucher si no viene se omite el campo",
        "Valor alfanumérico Campo opcional, si viene se imprime en voucher si no viene se omite el campo",
        "Valor Alfanumérico (máximo) Código de autorización de la transacción enviado por TBK ejemplo: |AB 12 C3|Se imprime lo que viene en el voucher",
        "Valor numérico (máximo) Monto total autorizado (incluye el monto de la venta, propina, vuelto y donación según sea el caso) Se imprime en voucher",
        "Valor numérico (máximo) Vuelto seleccionado por cliente, solo aplica en debitoSe imprime en voucher",
        "Valor numérico Cantidad de cuotas de la transacción (para ventas sin cuotas se informa “00”) Se imprime en voucher",
        "Valor numérico Si el monto informado es vacío || o |0| caja debe omitir la línea completa en el voucher. Se imprime en voucher si viene el campo",
        "Valor Numérico No se imprime",
        "Correlativo de transacción del terminal También conocido como número de secuencia este campo se debe imprimir en voucher de venta y anulación.",
        "Valor alfanumérico (máximo) Valor de glosa en Tabla tipo de tarjeta",
        "Valor alfanumérico Se utiliza sólo si es transacción de Debito Caja no debe formatear (ej: DDAAMM), simplemente debe transferir elvalor al voucher (XX/XX/XX)",
        "Valor alfanumérico Número de tarjeta enmascarado para incluir en el voucher",
        "Valor alfanumérico Valor a imprimir en el voucher",
        "Formato AAMMDD Valor a imprimir en el voucher",
        "Formato HHMMSS Valor a imprimir en el voucher",
        "Campo depende si la caja requiere voucher formateado (máximo) En el comando 510 no se envía el voucherEn el comando 550 se envía voucher siempre",
        "Valor numérico |1|: transacción premiada En este caso caja debe imprimir voucher PEL además del de venta ||: transacción sin premio",
        "Valor numérico |1|: Entrega Pto. de Venta |2|: Entrega Diferida |3|: Devolución al Tarjeta Habiente",
        "Valor alfanumérico Valor a imprimir en el voucher premiado",
        "Valor alfanumérico Valor a imprimir en el voucher de premio",
        "Valor alfanumérico Valor a imprimir en el voucher de premio",
        "Valor alfanumérico Valor a imprimir en el voucher de premio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor alfanumérico Indicador del tipo de menú por el cual se realizó la transacción |CR| : CRÉDITO |DB| : DÉBITO PREPAGO |NB| : NO BANCARIA Valor de tipo en Tabla tipo de tarjeta Una venta hecha como debito puede ser autorizada como prepago Nota: En el caso de Operación bajo flujo sin selección de menú, el pinpad retornara en este comando el tipo de tarjeta detectada.",
        "Valor numérico Indicador de modalidad de la transacción |0| transacción sin mes gracia |1| transacción con mes gracia",
        "Valor numérico |0| Sin cuotas |1| Cuotas normales |3| C3C o C2C |4| CIC o N-cuotas",
        "Valor numérico Solo se imprime en voucher si “Flag imprimir tasa = 1”",
        "Valor alfanumérico Glosa a imprimir en voucher Si el campo informado viene vacío “||” caja debe omitir la línea en el voucher.",
        "Valor alfanumérico Glosa que se despliega en pinpad",
        "Valor alfanumérico Glosa que se despliega en pinpad",
        "Valor alfanumérico Glosa que se despliega en pinpad",
        "Valor numérico || o |0| no imprime tasa aplicada |1| imprime tasa aplicada",
        "Valor numérico Periodo diferido seleccionado, valor a imprimir en voucher",

        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor alfanumérico (máximo) También conocido como número de operación original de la venta, No se está usando este campo, no se imprime",
        "Valor numérico Código de respuesta una vez finalizada latransacción. Se debe desplegar en el punto de venta. EJ: RESPUESTA TRANSBANK - <XXX> : <GLOSA></GLOSA>",
        "Valor alfanumérico (máximo) Glosa que despliega el pinpad una vez finalizada la transacción. Se debe desplegar en el punto de venta. EJ: RESPUESTA TRANSBANK - <XXX> : <GLOSA></GLOSA>",

        "Valor alfanumérico Y: Transacción autentificada con PIN N: Transacción autentificada por firma",
        "Valor alfanumérico Sólo imprimir si “Flag tipo voucher = 1, 2 ó 3”",
        "Valor numérico Según el número recibido se debe imprimir voucher con o sin firma:|0| = Sin firma |1| o |2| o |3| = con firma Cabeceras de los voucher: Para ventas con crédito:“VENTA CREDITO” Para ventas con débito (siempre sin firma): “VENTA DEBITO” Para ventas con no bancaria: “VENTA NO BANCARIA” Para ventas con prepago (sin firma): “VENTA PREPAGO” Para anulaciones con crédito (sin firma): “ANULACION CREDITO” Para anulaciones con no bancaria (sin firma):“ANULACION NO BANCARIA”",
        "Valor alfanumérico 0: Modalidad 3.1 (No utilizado)1: Modalidad cuotas 4.0",
        "Valor alfanumérico (máximo) Se debe imprimir en el voucher cuando sea distinta de vacío Campo 9, subcampo D",
        "Valor numérico No se está usando este campo, este no se imprime También conocido como número de operación",
        "Valor alfanumérico Y: El mensaje es terminal y NO se debe enviar el mensaje SPDH de respuesta N: Se debe enviar el mensaje SPDH de respuesta",
        "Valor numérico",
        "Valor alfanumérico (máximo)",

        "(550) Valor numérico Monto Propina o Donación",
        "(550) Valor numérico Cuando transacción es declinada por EMV se debe imprimir un voucher especial. Si este campo viene vacío no se imprime, si viene con dato se imprime Este voucher se imprime solo, sin voucher de venta",
        "(550) Valor alfanumérico Voucher de PEL si viene la caja debe imprimirlo, solo una vez junto al voucher de venta No se debe imprimir en duplicado Este voucher se imprime junto al de venta",
        "(550) Valor alfanumérico Si el campo viene con datos caja debe incluirlo en el voucher en la posición indicada",
        "(550) Valor alfanumérico Si el campo viene con datos caja debe incluirlo en el voucher en la posición indicada",
        "(550) Valor numérico Caja debe incluirlo en el voucher ejemplo: VX805 Campo obligatorio",
        "(550) Valor numérico Caja debe incluirlo en el voucher ejemplo: 12.34A Campo obligatorio",
        "(550) Valor alfanumérico (máximo) Indica el saldo de una tarjeta de prepago la cual se debe imprimir en voucher cuando es venta de prepago y cuando viene el saldo.Nota: El Pinpad agrega esa glosa al voucher tal como viene en la mensajería.",
        ""
       
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}

/* ************************************************************************************************** */
/* Command actualización parámetros pinpad (cierre batch)*/
/* Solicitud comando actualización parámetros pinpad */ 
/* ************************************************************************************************** */ 
function desgReqActParamCierre(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de comercio",
        "Terminal ID",
        "Índice interno del comercio",
        ""
    ];

    let descripcion = ["comando actualización parámetros pinpad (cierre batch), CAJA -> PINPAD",
        "Valor Alfanumérico Dirección lógica entregada por TBK y configurada en la caja.",
        "Valor alfanumérico (máximo) Campo que puede ser utilizado por el comercio para agregar información que les sirva a sus procesos internos.",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response actualización parámetros pinpad (cierre batch)*/ 
/* Solicitud comando actualización parámetros pinpad */ 
/* ************************************************************************************************** */ 
function desgRespActParamCierre(dataInputSp){
    
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Índice interno del comercio",        
        "Largo del mensaje",
        "Mensaje SPDH reversa"
    ];


    let descripcion = ["comando actualización parámetros pinpad (cierre batch), CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico (máximo) Campo que puede ser utilizado por el comercio para agregar información que le sirva a sus procesos internos.",
        "Valor Numérico",
        "Valor alfanumérico (máximo)",
        ""
        
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Command actualización parámetros pinpad (cierre batch)*/
/* Validación comando actualización parámetros pinpad */ 
/* ************************************************************************************************** */ 
function desgReqValActParamCierre(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Largo del mensaje",
        "Mensaje SPDH Cierre Batch",
        ""
    ];

    let descripcion = ["Comando Validación actualización parámetros pinpad (cierre batch), CAJA -> PINPAD",
        "Valor Numérico.",
        "Valor alfanumérico (máximo).",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response actualización parámetros pinpad (cierre batch)*/ 
/* Solicitud comando actualización parámetros pinpad */ 
/* ************************************************************************************************** */ 
function desgRespValActParamCierre(dataInputSp){
    
    let nombre = ["Comando",
        "Código respuesta",
        "Código respuesta Transbank",        
        "Glosa respuesta Transbank",
        "Cantidad transacciones venta",
        "Monto transacciones venta",
        "Cantidad transacciones anulación",
        "Monto transacciones anulación",
        ""
    ];


    let descripcion = ["Comando Validación actualización parámetros pinpad (cierre batch), CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor numérico Código de respuesta de TBK. Se debe desplegar en el punto de venta.",
        "Valor alfanumérico (máximo) Glosa que despliega el pinpad una vez finalizada la transacción. Se debe desplegar en el punto de venta.",
        "Valor numérico",
        "Valor numérico",
        "Valor numérico",
        "Valor numérico",
        ""
        
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}