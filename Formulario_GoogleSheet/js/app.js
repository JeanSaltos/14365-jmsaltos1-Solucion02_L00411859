const formulario = document.getElementById('formulario'); //Obtiene el documento con el ID
const registro = document.getElementById('registro'); //Obtiene el documento con el ID para mensaje de registro
const exito = document.getElementById('exito');//Nos ayuda a crear una pagina de registo exitoso de los datos

formulario.addEventListener('submit', async(e) => { e.preventDefault();//Agrega un evento de escucha al formulario cuando se envía 
await fetch('https://sheet.best/api/sheets/2e22a5c2-34a7-4c83-9055-870b0ae023aa', { //Accedemos al link de drive con el que se accede
    method: 'POST',//Método que nos va ayudar a enviar los datos
    mode: 'cors',//especifica que la solicitud se realiza utilizando una política de origen cruzado.
    headers: {  // establece las cabeceras de la solicitud.
    'Content-Type': 'application/json' //indica que los datos se enviarán en formato JSON.
    },
    body: JSON.stringify({ //convierte un objeto JavaScript en una cadena JSON
        "Nombre": formulario.nombre.value,
        "Correo": formulario.correo.value,
        "Telefono": formulario.telefono.value,
    })
    });

    registro.classList.remove('activo');//Elimina la clase CSS 'activo' del elemento con el ID "registro".
    exito.classList.add('activo');//agrega la clase CSS 'activo' al elemento con el ID "exito".
});