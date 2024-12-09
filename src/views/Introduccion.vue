<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 3. Dibujo Asistido por Computadora (CAD)'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-4.order-lg-2.d-none.d-lg-block
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p(data-aos="fade-left") Hola ¡Bienvenidos a la tercera unidad del curso de Dibujo Industrial! 

          p(data-aos="fade-left") En la era de la innovación y precisión digital, el Diseño Asistido por Computadora (CAD, Computer-Aided Design  por sus siglas en inglés) se ha convertido en una herramienta esencial para múltiples industrias, desde la arquitectura hasta la ingeniería y el diseño industrial. CAD permite a los profesionales no sólo visualizar, sino también optimizar y mejorar sus creaciones en un entorno virtual, agilizando los procesos de desarrollo y reduciendo el margen de error.

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p(data-aos="fade-left").mb-0 La unidad explora los fundamentos del CAD, comenzando con el manejo básico de software CAD, donde se destacan herramientas y comandos esenciales para la creación y edición de diseños en dos y tres dimensiones. A continuación, se profundiza en el modelado de piezas industriales en 2D y 3D, proporcionando una guía paso a paso para el desarrollo de modelos precisos. Finalmente, se abordan las técnicas de edición y exportación de planos técnicos, esenciales para la presentación profesional de proyectos de diseño.

          p(data-aos="fade-left").mb-0 Este recorrido por las funcionalidades básicas y avanzadas del CAD te brindará una comprensión completa de su aplicación y te preparará para mejorar tus habilidades en este campo fundamental de la industria moderna.


  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
