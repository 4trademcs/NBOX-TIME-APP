// ====================== Lanzar modal con logo ==========================
document.addEventListener('DOMContentLoaded', () => {
    lanzarModal('alert-ok'); 
    lanzarModal('alert-re-confirm'); 
    if (document.title==='Nbox Time Homepage'){
    lanzarModal('ventana-modal');   }
});

// Funcion global para llamar a un elemento externo al accionar boton
// el boton debe tener un id q coincida con el nombre del a llamar
function llamarFormularioModal(event){    
    if (event.target) {
        lanzarModal(`${event.target.id}`);
        }
}

// Función para cargar contenido
 function lanzarModal(id) {    
    const alert_ok =`<dialog id="alert-ok">
                        <form method="dialog">
                            <button class="flexbox modal transparent">
                                <div class="mensaje">
                                    <h2 class="texto"></h2>
                                    <img class="bg-img" src="src/img/logo.png" alt="">
                                </div>   
                            </button> 
                        </form>
                    </dialog>`;

    const alert_re_confirm =`<dialog id="alert-re-confirm" class="modal form-container" >
                                <div class="flexbox">
                                    <form class="flexbox-column form alert" method="dialog">
                                        <img  class="background-img" src="public/img/logo.png"alt="logo de la compañia">                           
                                        <h2 id="alert-message"></h2>
                                        <div class="field alert-button btns" >
                                            <button class="delete alert-button" onclick="actionToDo(event)">Aceptar</button>
                                            <button class="alert-button">Cancelar</button>
                                        </div>
                                    </form>
                                </div>
                            </dialog>`;

    const consignment_edit = `<div id="form-container" class="flexbox modal">
                                <button class="close-modal" onclick="closeModal()"></button>
                                <div class="multistep-form-container">
                                    <h2>Solicitud de Remesa</h2>
                                    <div class="form">
                                        <form class="form edit" id="form-consignment-edit" name="remesa" onsubmit="return guardarRemesa(event)" method="post">
                                            <img class="background-img" src="public/img/logo.png" alt="logo de la compañía">
                                            <div class="page slide-page">
                                                <h3 class="title">Datos personales</h3>
                                                <div class="field">
                                                    <label class="label" for="remesa-name">Nombre de quien recibe la remesa</label>
                                                    <input id="remesa-name" type="text" class="validate-name" placeholder="Beneficiario">
                                                </div>
                                                <div class="field">
                                                    <label class="label" for="remesa-tel">Teléfono de quien recibe la remesa</label>
                                                    <input id="remesa-tel" type="tel" class="validate-tel" placeholder="(+53)********">
                                                </div>
                                                <div class="field">
                                                    <button class="next" onclick="navigateSteps(event, 'next1', 25)">Siguiente</button>
                                                </div>
                                            </div>
                                            <div class="page">
                                                <h3 class="title">Detalles del envío</h3>
                                                <div class="field">
                                                    <label class="label" for="remesa-monto">Monto</label>
                                                    <input id="remesa-monto" type="number" class="validate-amount" placeholder="100 USD">
                                                </div>
                                                <div class="field">
                                                    <label class="label" for="remesa-type">¿Cómo desea recibir su remesa?</label>
                                                    <input id="remesa-type" class="validate-type sql" list="remesa-sponsor-option" onchange="check()">
                                                    <datalist id="remesa-sponsor-option">
                                                        <option value="USD efectivo"></option>
                                                        <option value="CUP efectivo"></option>
                                                        <option value="Transferencia CUP">Recibir CUP en su tarjeta</option>
                                                        <option value="Transferencia MLC">Recibir MLC en su tarjeta</option>
                                                    </datalist>
                                                </div>
                                                <div class="field" id="dinamic-field"></div>
                                                <div class="field">
                                                    <label for="marcar">
                                                        Aceptar los <a href="#user" target="_blank">términos y condiciones</a> de la entrega
                                                        <input type="checkbox" id="marcar" required>
                                                    </label>
                                                </div>
                                                <div class="field btns">
                                                    <button class="prev" onclick="navigateSteps(event, 'prev1', 0)">Atrás</button>
                                                    <button class="submit">Enviar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>`;

    const consignment_register =`<div id="form-container" class="flexbox modal">
                                    <button class="close-modal" onclick="closeModal()"></button>
                                    <div class="multistep-form-container">
                                        <div class="progress-bar">
                                            <div class="step"><p>Paso&nbsp</p><div class="bullet"><span>1</span></div><div class="check fas fa-check"></div></div>
                                            <div class="step"><p>Paso&nbsp</p><div class="bullet"><span>2</span></div><div class="check fas fa-check"></div></div>
                                        </div>
                                        <h2>Solicitud de Remesa</h2>
                                        <div class="form">
                                            <form class="form" id="form-consignment-register" name="remesa" onsubmit="return guardarRemesa(event)" method="post">
                                                <img class="background-img" src="public/img/logo.png" alt="logo de la compañia">
                                                
                                                <!-- Página 1 -->
                                                <div class="page slide-page">
                                                    <h3 class="title">Datos personales</h3>
                                                    <div class="field">
                                                        <label class="label" for="remesa-name">Nombre de quien recibe la remesa</label>
                                                        <input id="remesa-name" type="text" placeholder="Beneficiario" class="validate-name sql">
                                                    </div>
                                                    <div class="field">
                                                        <label class="label" for="remesa-tel">Teléfono de quien recibe la remesa</label>
                                                        <input id="remesa-tel" type="tel" placeholder="(+53)********" class="validate-tel">
                                                    </div>
                                                    <div class="field">
                                                        <button class="next" onclick="navigateSteps(event, 'next1', 25)">Siguiente</button>
                                                    </div>
                                                </div>

                                                <!-- Página 2 -->
                                                <div class="page">
                                                    <h3 class="title">Detalles del envío</h3>
                                                    <div class="field">
                                                        <label class="label" for="remesa-monto">Monto</label>
                                                        <input id="remesa-monto" type="number" placeholder="100 USD" class="validate-number">
                                                    </div>
                                                    <div class="field">
                                                        <label class="label" for="remesa-type">¿Cómo desea recibir su remesa?</label>
                                                        <input id="remesa-type" list="remesa-sponsor-option" class="validate-type sql" onchange="check()">
                                                        <datalist name="type-of-user" id="remesa-sponsor-option">
                                                            <option value="USD efectivo"></option>
                                                            <option value="CUP efectivo"></option>
                                                            <option value="Transferencia CUP">recibir CUP en su tarjeta</option>
                                                            <option value="Transferencia MLC">recibir MLC en su tarjeta</option>
                                                        </datalist>
                                                    </div>
                                                    <div class="field" id="dinamic-field"></div>
                                                    <div class="field">
                                                        <label for="marcar">Aceptar los
                                                            <a href="/terminos" target="_blank">términos y condiciones</a> de la entrega
                                                            <input type="checkbox" id="marcar" required>
                                                        </label>
                                                    </div>
                                                    <div class="field btns">
                                                        <button class="prev" onclick="navigateSteps(event, 'prev1', 0)">Atrás</button>
                                                        <button class="submit">Enviar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>`;

                             
    const user_edit = `<div id="form-container" class="flexbox modal">
                            <button class="close-modal" onclick="closeModal()"></button>
                            <div class="multistep-form-container">
                                <h2>Editar Cliente</h2>
                                <div class="form">
                                    <form class="form edit" id="form-user-edit" name="contact" onsubmit="return guardarPersona(event)" method="post" action="/edit">
                                        <img class="background-img" src="public/img/logo.png">
                                        <div class="page slide-page">
                                            <h3 class="title">Información de Contacto</h3>
                                            <div class="field">
                                                <label class="label" for="contact-email">Edita E-mail</label>
                                                <input id="contact-email" name="email" type="email" class="validate-email" placeholder="email_nuevo@gmail.com">
                                            </div>
                                            <div class="field">
                                                <label class="label" for="contact-pass">Clave</label>
                                                <input id="contact-pass" name="password" type="password" class="validate-password" placeholder="Nuevo Pass" autocomplete="new-password">
                                            </div>
                                            <div class="field">
                                                <button class="next" onclick="navigateSteps(event, 'next1', 25)">Siguiente</button>
                                            </div>
                                        </div>
                                        <div class="page">
                                            <h3 class="title">Información Personal</h3>
                                            <div class="field">
                                                <label class="label" for="contact-name">Nombre y Apellidos</label>
                                                <input id="contact-name" name="name" type="text" class="validate-name" placeholder="Edita el Nombre y Apellido">
                                            </div>
                                            <div class="field">
                                                <label class="label" for="contact-dni">DNI</label>
                                                <input id="contact-dni" name="dni" type="text" class="validate-dni" placeholder="Nuevo DNI">
                                            </div>
                                            <div class="field btns">
                                                <button class="prev" onclick="navigateSteps(event, 'prev1', 0)">Atrás</button>
                                                <button class="next" onclick="navigateSteps(event, 'next2', 50)">Siguiente</button>
                                            </div>
                                        </div>
                                        <div class="page">
                                            <h3 class="title">Información Personal</h3>
                                            <div class="field">
                                                <label class="label" for="contact-tel">Número de Teléfono</label>
                                                <input id="contact-tel" name="telefono" type="tel" class="validate-tel" placeholder="(+53)********">
                                            </div>
                                            <div class="field">
                                                <label class="label" for="contact-direction">Dirección</label>
                                                <textarea id="contact-direction" name="direccion" rows="5" maxlength="140" class="validate-address" placeholder="Edita la dirección de envío: Municipio, calle, #"></textarea>
                                            </div>
                                            <div class="field btns">
                                                <button class="prev" onclick="navigateSteps(event, 'prev2', 25)">Atrás</button>
                                                <button class="next" onclick="navigateSteps(event, 'next3', 75)">Siguiente</button>
                                            </div>
                                        </div>
                                        <div class="page">
                                            <div class="field">
                                                <label class="label" for="contact-sponsor">Edita el sponsor si es necesario</label>
                                                <input id="contact-sponsor" name="source" list="contact-sponsor-option" class="validate-type sql" onchange="check()">
                                                <datalist id="contact-sponsor-option">
                                                    <option value="Patrocinador">Por un amigo</option>
                                                    <option value="Remesa">Un familiar envió dinero</option>
                                                    <option value="Google">Lo busqué en internet</option>
                                                </datalist>
                                            </div>
                                            <div class="field" id="sponsor-id-field"></div>
                                            <div class="field btns">
                                                <button class="prev" onclick="navigateSteps(event, 'prev3', 50)">Atrás</button>
                                                <button class="submit">Enviar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>`;

        const user_register = `<div id="form-container" class="flexbox modal">
                                    <button class="close-modal" onclick="closeModal()"></button>
                                    <div class="multistep-form-container">
                                        <h2>Registrar Cliente</h2>
                                        
                                        <div class="progress-bar">
                                            <div class="step"><p>Paso&nbsp;</p><div class="bullet"><span>1</span></div><div class="check fas fa-check"></div></div>
                                            <div class="step"><p>Paso&nbsp;</p><div class="bullet"><span>2</span></div><div class="check fas fa-check"></div></div>
                                            <div class="step"><p>Paso&nbsp;</p><div class="bullet"><span>3</span></div><div class="check fas fa-check"></div></div>
                                            <div class="step"><p>&nbsp; Fin&nbsp;&nbsp;</p><div class="bullet"><span>4</span></div><div class="check fas fa-check"></div></div>
                                        </div>

                                        <div class="form">
                                            <form class="form" id="form-user-register" name="contact" onsubmit="return guardarPersona(event)" method="post" action="/usuario">
                                                <img class="background-img" src="public/img/logo.png">
                                                
                                                <!-- Página 1 -->
                                                <div class="page slide-page active">
                                                    <h3 class="title">Información de Contacto</h3>
                                                    <div class="field">
                                                        <label class="label" for="contact-email">Correo Electronico</label>
                                                        <input id="contact-email" name="email" type="email" placeholder="tu_email@gmail.com" class="validate-email sql">
                                                    </div>
                                                    <div class="field">
                                                        <label class="label" for="contact-pass">Clave</label>
                                                        <input id="contact-pass" name="password" type="password" placeholder="Establece tu contraseña" autocomplete="new-password" class="validate-password sql">
                                                    </div>
                                                    <div class="field">
                                                        <button class="next" onclick="navigateSteps(event, 'next1', 25, 'validate-email', 'validate-password')">Siguiente</button>
                                                    </div>
                                                </div>

                                                <!-- Página 2 -->
                                                <div class="page">
                                                    <h3 class="title">Información Personal</h3>
                                                    <div class="field">
                                                        <label class="label" for="contact-name">Nombre y Apellidos</label>
                                                        <input id="contact-name" name="name" type="text" placeholder="Robert Kiyosaki" class="validate-name sql">
                                                    </div>
                                                    <div class="field">
                                                        <label class="label" for="contact-dni">DNI</label>
                                                        <input id="contact-dni" name="dni" type="text" placeholder="tu carnet:99103456992" class="validate-dni">
                                                    </div>
                                                    <div class="field btns">
                                                        <button class="prev" onclick="navigateSteps(event, 'prev1', 0)">Atrás</button>
                                                        <button class="next" onclick="navigateSteps(event, 'next2', 50, 'validate-name', 'validate-dni')">Siguiente</button>
                                                    </div>
                                                </div>

                                                <!-- Página 3 -->
                                                <div class="page">
                                                    <h3 class="title">Información Personal</h3>
                                                    <div class="field">
                                                        <label class="label" for="contact-tel">Número de Telefono</label>
                                                        <input id="contact-tel" name="telefono" type="tel" placeholder="(+53)********" class="validate-tel">
                                                    </div>
                                                    <div class="field">
                                                        <label class="label" for="contact-direction">Direccion</label>
                                                        <textarea id="contact-direction" name="direccion" rows="5" maxlength="140" placeholder="Direccion de envio: Municipio,calle,#" class="validate-address"></textarea>
                                                    </div>
                                                    <div class="field btns">
                                                        <button class="prev" onclick="navigateSteps(event, 'prev2', 25)">Atrás</button>
                                                        <button class="next" onclick="navigateSteps(event, 'next3', 75, 'validate-tel', 'validate-address')">Siguiente</button>
                                                    </div>
                                                </div>

                                                <!-- Página 4 -->
                                                <div class="page">
                                                    <h3 class="title">Casi listo, solo déjanos saber:</h3>
                                                    <div class="field">
                                                        <label class="label" for="contact-sponsor">Cómo conociste nuestro negocio?</label>
                                                        <input id="contact-sponsor" name="source" list="contact-sponsor-option" class="validate-sponsor sql" onchange="check()">
                                                        <datalist id="contact-sponsor-option">
                                                            <option value="Patrocinador">Por un amigo</option>
                                                            <option value="Remesa">Un familiar envió dinero</option>
                                                            <option value="Google">Lo busqué en internet</option>
                                                        </datalist>
                                                    </div>
                                                    <div class="field" id="sponsor-id-field"></div>
                                                    <div class="field">
                                                        <label for="marcar">Aceptar los
                                                            <a href="/terminos" target="_blank">términos y condiciones</a>
                                                            <input type="checkbox" id="marcar" name="terms" required>
                                                        </label>
                                                    </div>
                                                    <div class="field btns">
                                                        <button class="prev" onclick="navigateSteps(event, 'prev3', 50)">Atrás</button>
                                                        <button class="submit">Enviar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>`;

    const ventana_modal =  `<dialog open="" id="modal-logo" class="modal">
                                <div class="flexbox container-full-alto">
                                    <form method="dialog" class="flexbox" id="modal-form">
                                        <button class="flexbox" id="modal-button-close">
                                                <div class="flexbox column" id="modal-content">
                                                    <h2 class="company-name">NBOX TIME</h2>
                                                    <div class="line line1"><p class="temp">seguridad</p></div>
                                                    <div class="line line2"><p class="temp">confianza</p></div>
                                                    <div class="line line3"><p class="temp">familia</p></div>
                                                    <div class="line line4"><p class="temp">negocio</p></div>
                                                    <div class="line line5"><p class="temp">dinero</p></div>
                                                    <div class="line line6"><p class="temp">felicidad</p></div>
                                                    <div class="line line7"><p class="temp">futuro</p></div>
                                                </div>
                                        </button>
                                    </form>
                                </div>
                            </dialog>`;
                            
    switch (id) {
        case 'alert-ok':
            document.body.insertAdjacentHTML('beforeend',alert_ok);
            break;

        case 'alert-re-confirm':
            document.body.insertAdjacentHTML('beforeend',alert_re_confirm);
            break;

        case 'consignment-edit':
            document.body.insertAdjacentHTML('beforeend',consignment_edit);
            action = 'editar';  
            break;

        case 'consignment-register':
            formStep = 1;
            action = 'registrar'; 
            document.body.insertAdjacentHTML('beforeend',consignment_register);
            break;

        case 'user-edit':
            document.body.insertAdjacentHTML('beforeend',user_edit);
            action = 'editar';  
            break;

        case 'user-register':
            formStep = 1;
            action = 'registrar'; 
            document.body.insertAdjacentHTML('beforeend',user_register); 
            break;

        case 'ventana-modal':
            document.body.insertAdjacentHTML('beforeend',ventana_modal);
            break;

        default:
            console.error("ID de modal desconocido:", id);
            break;
    }
}


//Logica encargada de cerrar las ventanas modales
function closeModal(){
    eliminarHTML('form-container');
}
// Función para borrar un elemento por su ID 
function eliminarHTML(id) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.remove();
    else console.warn(`Elemento con ID "${id}" no encontrado.`);
}