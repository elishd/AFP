
////////////////////////////////////////////////////////////////////////////////
//VALIDACIONES  DIGITOS SIN SIGNO //onkeypress = "return Digitos(event, this);"
////////////////////////////////////////////////////////////////////////////////
function Digitos(e, field) {
    var teclaPulsada = window.event ? window.event.keyCode : e.which;
    var valor = field.value;

    if (teclaPulsada == 08 || (teclaPulsada == 46 && valor.indexOf(".") == -1)) return true;

    return /\d/.test(String.fromCharCode(teclaPulsada));
}

////////////////////////////////////////////////////////////////////////////////
//VALIDACIONES  DIGITOS CON SIGNO //onkeypress = "return Digitos(event, this);"
////////////////////////////////////////////////////////////////////////////////
function DigitosNegativos(e, field) {
    var teclaPulsada = window.event ? window.event.keyCode : e.which;
    var valor = field.value;

    if (teclaPulsada == 08 || (teclaPulsada == 46 && valor.indexOf(".") == -1) || (teclaPulsada == 45 && valor.indexOf("-") == -1)) return true;

    return /^-?\d/.test(String.fromCharCode(teclaPulsada));
}

////////////////////////////////////////////////////////////////////////////////
//VALIDACIONES  NUMEROS //onkeypress = "return Numeros(event, this);"
////////////////////////////////////////////////////////////////////////////////
function Numeros(e, field) {
    var teclaPulsada = window.event ? window.event.keyCode : e.which;
    var valor = field.value;

    if (teclaPulsada == 08) return true;

    return /\d/.test(String.fromCharCode(teclaPulsada));
}

////////////////////////////////////////////////////////////////////////////////
//VALIDACIONES  LETRAS //onkeypress = "return Letras(event, this);"
////////////////////////////////////////////////////////////////////////////////
function Letras(e, field) {
    var teclaPulsada = window.event ? window.event.keyCode : e.which;
    var valor = field.value;

    if (teclaPulsada == 08) return true;

    return /[A-Za-zÑÁÉÍÓÚñáéíóú\s]/.test(String.fromCharCode(teclaPulsada));
}

////////////////////////////////////////////////////////////////////////////////
//PERMITE DAR FORMATO A FECHA //formatDate(e.data.record.Fecha, 'dd/mm/yyyy HH:MM:ss TT')
////////////////////////////////////////////////////////////////////////////////
function FormatDate(text, format) {
    var dt;

    if (typeof (text) === 'undefined' || text === null)
        text = '';
    else {
        dt = new Date(parseInt(text.substr(6), 10));
        text = dt.format(format); //using 3rd party plugin "Date Format 1.2.3 by (c) 2007-2009 Steven Levithan <stevenlevithan.com>"   
    }
    return text;
}

////////////////////////////////////////////////////////////////////////////////
//COMPROBAR VALORES NULL O VACIO
////////////////////////////////////////////////////////////////////////////////
(function ($) {
    isEmpty = function (obj) {
        var isEmpty = false;

        if (typeof obj == 'undefined' || obj === null || obj === '') {
            isEmpty = true;
        }
        if (typeof obj == 'number' && isNaN(obj)) {
            isEmpty = true;
        }
        if (obj instanceof Date && isNaN(Number(obj))) {
            isEmpty = true;
        }

        return isEmpty;
    }
})(jQuery);

////////////////////////////////////////////////////////////////////////////////
//PERMITE CARGAR EXTENCIONES PARA IMPLENTAR EN ETIQUETAS HTML
////////////////////////////////////////////////////////////////////////////////
function CargarExtencionesHTML() {
    //Deshabilitar pestañas cuando tengan la clase disabled
    $("a[data-toggle=tab]").on("click", function (e) {
        if ($(this).hasClass("disabled")) {
            e.preventDefault();
            return false;
        }
    });

    //Deficion de calendario
    $('.dpicker').datetimepicker({
        timepicker: false,
        format: 'd/m/Y'
    });
    $.datetimepicker.setLocale('es');

    //Declarancion de mascaras 
    $(".currency").inputmask({ clearMaskOnLostFocus: false, removeMaskOnSubmit: true, autoUnmask: true, alias: "currency", prefix: "$ ", groupSeparator: ',', autoGroup: true, digits: 2, digitsOptional: false, placeholder: '0' });
    $(".porcent").inputmask({ clearMaskOnLostFocus: false, removeMaskOnSubmit: true, autoUnmask: true, alias: "percentage", prefix: "% ", groupSeparator: ',', autoGroup: true, digits: 2, digitsOptional: false, placeholder: '0' });
    $(".decimal").inputmask({ clearMaskOnLostFocus: false, removeMaskOnSubmit: true, autoUnmask: true, alias: "decimal", prefix: " ", groupSeparator: ',', autoGroup: true, digits: 2, digitsOptional: false, placeholder: '0' });
    $(".numeric").inputmask({ clearMaskOnLostFocus: false, removeMaskOnSubmit: true, autoUnmask: true, alias: "integer", prefix: "", groupSeparator: '', autoGroup: true, digits: 0,digitsOptional: false, placeholder: '0', rightAlign: false });
    $('.time').inputmask({ clearMaskOnLostFocus: false, removeMaskOnSubmit: true, autoUnmask: true, alias: "hh:mm:ss", prefix: " ", rightAlign: false, autoGroup: true, digitsOptional: false, placeholder: '0' });
    $(".telefono").inputmask("99999999-9", { placeholder: " ", clearMaskOnLostFocus: true, autoUnmask: true });
    $(".DUI").inputmask("99999999-9", { placeholder: " ", clearMaskOnLostFocus: true, autoUnmask: true });
    $(".NIT").inputmask("9999-999999-999-9", { placeholder: " ", removeMaskOnSubmit: false });

    //Asignacion de Select2 a una clase CSS
    $(".select").select2({
        language: "es",
        width: '100%'
    });

 
    //SELECTS
    $('.selectMult').selectpicker({
        actionsBox: true,
        liveSearch: true,
        size: 6,
        selectAllText: "Todos",
        deselectAllText: "Ninguno",
        noneSelectedText: "Seleccione"
    });

    $('.listCombo').selectpicker({
        size: 6,
        noneSelectedText: "Seleccione"
    });

    $('input').attr('autocomplete', 'off');
};

////////////////////////////////////////////////////////////////////////////////
//CONFIGURACION DE MENSAJES, AJAX Y PLUGIN 'PACE'
////////////////////////////////////////////////////////////////////////////////
function Mensajes(data) {
    if (data.codigo == 0) {
        toastr.success(data.mensaje)
    }
    else
        toastr.error(data.mensaje);
};

$.ajaxSetup({
    timeout: (1000 * 60) * 5
});

Pace.on("start", function () {
    $("div.locked").show();
});

Pace.on("done", function () {
    $("div.locked").hide();
});

$('input').attr('autocomplete', 'off');

////////////////////////////////////////////////////////////////////////////////
//CONFIGURACIÓN PARA EL USO DE DATATABLES JQUERY
////////////////////////////////////////////////////////////////////////////////
var tableLanguage = {
    "processing": "Procesando",
    "search": "Buscar:",
    "lengthMenu": "Mostrar _MENU_ registros",
    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "infoEmpty": "No se encontraron registros",
    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
    "infoPostFix": "",
    "loadingRecords": "Cargando...",
    "zeroRecords": "No se encontraron resultados",
    "emptyTable": "Ningún dato disponible en esta tabla",
    "paginate": {
        "first": "Primero",
        "previous": "Anterior",
        "next": "Siguiente",
        "last": "Último"
    },
    "aria": {
        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sortDescending": ": Activar para ordenar la columna de manera descendente"
    }
};
 

function StartDataTable(idTabla) {
    var dataTableOpt = {
        dom: 'lBfrtip',
        buttons: [
            { extend: 'excelHtml5', title: ' ' },
            { extend: 'pdfHtml5', title: ' ', orientation: 'landscape' }
        ],
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todo"]],
        "language": tableLanguage
    };

    //Definir el comportamiento de la table
    var $table = jQuery(idTabla);
    $table.DataTable(dataTableOpt);
    $table.closest('.dataTables_wrapper').find('select').select2({
        minimumResultsForSearch: -1
    });
}

function StartTable(idTabla) {
    var tableOpt = {
        dom: 'lBfrtip',
        buttons: [],
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todo"]],
        "language": tableLanguage
    };

    //Definir el comportamiento de la table
    var $table = jQuery(idTabla);
    $table.DataTable(tableOpt);
    $table.closest('.dataTables_wrapper').find('select').select2({
        minimumResultsForSearch: -1
    });
}

////////////////////////////////////////////////////////////////////////////////
//PERMITE MANTENER LA POSICIÓN DE LA OPCION SELECCIONADA
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    function MantenerOpcionSeleccionada() {
        var Inicio = true;
        var urldest = window.location.pathname;
        urldest = urldest.split('/')[1] + urldest.split('/')[2];

        $('.main-menu li a').each(function (index) {
            var urlorg = $(this).attr('href').trim();

            urlorg = urlorg.split('/')[1] + urlorg.split('/')[2];
            if (urlorg == urldest) {
                $(this).parents(".has-sub").addClass("active opened");
                $(this).parents("ul").addClass("visible");
                $(this).parents("li").addClass("active");
                Inicio = false;
            }
        });

        if (Inicio) {
            $('.main-menu').find(".has-sub").first().addClass("active opened");
            $('.opened').find("ul").first().addClass("visible");
        }
    }

    MantenerOpcionSeleccionada();
    CargarExtencionesHTML();
});


////////////////////////////////////////////////////////////////////////////////
//METODOS GLOBALES PARA EL MANEJO DE GRID, MODAL, FORM Y ENVIO DE DATOS AJAX
////////////////////////////////////////////////////////////////////////////////

function GlobalLoadTabla(url, nombreContenedorTabla, idTabla) {
    $.ajax({ url: url, type: "GET" })
        .done(function (response, textStatus, jqXHR) {
            $(nombreContenedorTabla).html(response);
            StartDataTable(idTabla);
        })
        .fail(function (response, textStatus, jqXHR) {
            toastr.error("No es posible cargar la tabla de datos");
        });
}


//PERMITE LLENAR LOS CAMPOS Y CARGAR MODAL (NORMAl)
function GlobalEdit(url, datos, modal, contenedor) {
    var modal = modal || "#myModal";
    var contenedor = contenedor || "#contenModal";

    $.ajax({
        url: url,
        data: datos,
        type: "POST",
        success: function (data) {
            $(contenedor).html(data);
            CargarExtencionesHTML();
            $(modal).modal("show");
        },
        error: function () {
            toastr.error('No es posible realizar la transacción');
        }
    });
};

//PERMITE ELIMINAR UN REGISTRO 
function GlobalRemove(url, datos, urlTabla, nomContTabla, idTabla) {
    bootbox.confirm("¿Esta seguro de Continuar?", function (result) {
        if (result) {
            $.ajax({ url: url, type: "POST", data: datos })
                .done(function (data, textStatus, jqXHR) {
                    Mensajes(data);
                    GlobalLoadTabla(urlTabla, nomContTabla, idTabla);
                })
                .fail(function (data, textStatus, jqXHR) {
                    toastr.error('No es posible realizar la transacción');
                });
        }
    });
};

//VALIDAR FORMULARIO
function GlobalValidarForm(form, validaciones, modal, urlTabla, nomContTabla, idTabla, funcion) {

    $(form)
        .on('init.field.fv', function (e, data) {
            var $icon = data.element.data('fv.icon'),
                options = data.fv.getOptions(),                      // Entire options
                validators = data.fv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.icon && options.icon.required && e.target.value == '') {
                // The field uses notEmpty validator
                // Add required icon
                //var $parent = data.element.parents('.form-group');
                //$parent.addClass('has-error');
                $icon.addClass(options.icon.required).show();
            }
        })
        .formValidation({
            icon: {
                required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: validaciones
        }).on('success.field.fv', function (e, data) {
            var $parent = data.element.parents('.form-group');
            $parent.removeClass('has-success');
            data.element.data('fv.icon').hide();
        }).on('success.form.fv', function (e) {
            e.preventDefault();
            var $form = $(e.target);
            var bv = $form.data('formValidation');

            var formData = new FormData(e.target);

            //Envio de datos
            $.ajax({
                url: $form.attr('action'),
                type: $form.attr('method'),
                data: formData,
                cache: false,
                contentType: false,
                processData: false
              })
                .done(function (response, textStatus, jqXHR) {

                    if (funcion == null) {
                        if (modal != '')
                            $(modal).modal("hide");

                        Mensajes(response);
                        if (urlTabla != null)
                            GlobalLoadTabla(urlTabla, nomContTabla, idTabla);
                    }
                    else {
                        Mensajes(response);
                        funcion(response);
                        $(form).formValidation('resetForm');
                        if (response.id > 0)
                            GlobalLoadTabla(urlTabla, nomContTabla, idTabla);
                    }
                })
                .fail(function (response, textStatus, jqXHR) {
                    $(modal).modal("hide");
                    toastr.error("No es posible realizar la transacción");
                });
        });
};

//VALIDAR FORMULARIO
function GlobalValidar(form, validaciones, funcion) {

    $(form)
        .on('init.field.fv', function (e, data) {
            var $icon = data.element.data('fv.icon'),
                options = data.fv.getOptions(),                      // Entire options
                validators = data.fv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.icon && options.icon.required && e.target.value == '') {
                // The field uses notEmpty validator
                // Add required icon
                //var $parent = data.element.parents('.form-group');
                //$parent.addClass('has-error');
                $icon.addClass(options.icon.required).show();
            }
        })
        .formValidation({
            icon: {
                required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: validaciones
        }).on('success.field.fv', function (e, data) {
            var $parent = data.element.parents('.form-group');
            $parent.removeClass('has-success');
            data.element.data('fv.icon').hide();
        }).on('success.form.fv', function (e) {
            e.preventDefault();
            var $form = $(e.target);
            var bv = $form.data('formValidation');

            //Envio de datos
            $.ajax({ url: $form.attr('action'), type: $form.attr('method'), data: $form.serialize() })
                .done(function (response, textStatus, jqXHR) {
                    if (funcion != null) {
                        funcion(response);
                    }
                })
                .fail(function (response, textStatus, jqXHR) {
                    toastr.error("No es posible realizar la transacción");
                });
        });
};


function GlobalValidarConfirmacion(form, validaciones, funcion) {

    $(form)
        .on('init.field.fv', function (e, data) {
            var $icon = data.element.data('fv.icon'),
                options = data.fv.getOptions(),                      // Entire options
                validators = data.fv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.icon && options.icon.required && e.target.value == '') {
                // The field uses notEmpty validator
                // Add required icon
                //var $parent = data.element.parents('.form-group');
                //$parent.addClass('has-error');
                $icon.addClass(options.icon.required).show();
            }
        })
        .formValidation({
            icon: {
                required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: validaciones
        }).on('success.field.fv', function (e, data) {
            var $parent = data.element.parents('.form-group');
            $parent.removeClass('has-success');
            data.element.data('fv.icon').hide();
        }).on('success.form.fv', function (e) {
            e.preventDefault();
            var $form = $(e.target);
            var bv = $form.data('formValidation');

            //Envio de datos
            funcion($form.attr('action'), $form.attr('method'), $form.serialize());
    
        });
};

/*
=========================================================
* CAMBIAR TAMAÑO A IMAGEN
=========================================================
cambia las dimensiones de una imagen y asigna el valor base64
a un input hiden para luego ser enviado
*/
function ResizeImage(dataImagen, idInput, idImg) {
        loadImage(
        dataImagen,
        function (img) {
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                var MAX_WIDTH = 1000;
                var MAX_HEIGHT = 1000;
                var width = img.width;
                var height = img.height;

                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }

                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                data = canvas.toDataURL("image/jpeg").replace(/^data:image\/[a-z]+;base64,/, "");

                idInput.value = data;
                idImg.src = canvas.toDataURL("image/jpeg");
            },{
              orientation: true
            }
        );
}


