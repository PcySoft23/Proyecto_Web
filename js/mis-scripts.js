$(function () {

    /*-----------------------------------------------------------
       1. Configuración del  Mmenu.js
    -------------------------------------------------------------*/
    var $menu = $("#menu-principal").mmenu({

        // OPCIONES DE CONFIGURACION
        navbar: {
            title: false
        },
        //Importante para integrarlo con Bootstrap
        wrappers: ["bootstrap"],
        //Hace que los menus se muestren como lista desplegable
        slidingSubmenus: true,

        //EXTENSIONES
        //  Ampliar fácilmente la apariencia de su menú
        "extensions": [
            "position-left",
            "theme-white",
            "border-full",
            "fx-menu-slide",
            "fx-panels-slide-up",
            "fx-listitems-slide",
            "pagedim-black",
            "shadow-page",
            "shadow-panels"
        ],
        navbars: [{
            position: "top",
            content: [
                '<a href="#" class="d-block w-100 text-center"><img src="images/logo.svg" alt="Logo del sitio" width="155"></a>']
        }],
        "counters": true
    });



    /*------------------------------------------------------------
       2. Inserta y quita la clase ".icono-cerrar" al boton Buscar
    -------------------------------------------------------------*/
    $('.btn-buscar').click(function () {
        $('.btn-buscar').toggleClass('buscar-activo');
    });


    /*-----------------------------------------------------------
       1. Configuración de  Juggler.js
    -------------------------------------------------------------*/
    Juggler.init();


    /*-----------------------------------------------------------
    6. Configuración de hcSticky.js
     -------------------------------------------------------------*/
    var Sticky = new hcSticky('#detalles-encabezado', {
        mobileFirst: true,
        responsive: {
            0: {
                disable: true,
            },
            1200: {
                stickTo: 'body',
                top: 0,
                disable: false,
                stickyClass: 'encabezado-fijo',
            }
        }
    });



    /*-----------------------------------------------------------
    6. Configuración de Swiper para "#slideCaracteristicas"
   -------------------------------------------------------------*/

    var navCaracteristicas = new Swiper('.navCaracteristicas', {
        slidesPerView: 3,
        watchSlidesProgress: true
    });
    var slideCaracteristicas = new Swiper('.slideCaracteristicas', {
        loop: true,
        speed: 300,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        /*Botones de paginaciÃ³n */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        /*Botones de navegaciÃ³n */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: navCaracteristicas
        }

    });
    /*-----------------------------------------------------------
    6. Configuración de Swiper para "#slideFunciones"
   -------------------------------------------------------------*/

    var navFunciones = new Swiper('.navFunciones', {
        slidesPerView: 3,
        watchSlidesProgress: true
    });
    var slideFunciones = new Swiper('.slideFunciones', {
        loop: true,
        speed: 300,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        /*Botones de paginaciÃ³n */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        /*Botones de navegaciÃ³n */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: navFunciones
        }

    });
});
