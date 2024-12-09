<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 3. Dibujo Asistido por Computadora (CAD)'"
    :subTitulo="'3. Edición y exportación de planos técnicos'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El modelado de piezas industriales en CAD, ya sea en 2D o 3D, sigue un conjunto de pasos que facilita la creación precisa de piezas y componentes. A continuación, se explica el proceso básico para ambos tipos de modelado.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')


    .row.mb-5
      .col-lg-6
        h2 Edición de planos técnicos
        p(data-aos="fade-left") La edición de planos técnicos permite organizar, ajustar y perfeccionar el diseño para que sea claro y funcional, optimizando su presentación para otros usuarios o aplicaciones.
        p(data-aos="fade-left") Estas funciones permiten estructurar y personalizar el diseño según las necesidades del proyecto, mejorando la calidad de presentación.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 8. 
          span Configuración de capas en la edición de planos
        figure
          img(src='@/assets/curso/figuras/f8.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). Edit layer set. ]

    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Organización con capas")
            p Permite agrupar contornos, cotas, textos, líneas de ejes y detalles específicos, facilitando la visibilidad y aplicación de estilos de línea o grosores.

          .div(titulo="Escalas y vista")
            p La escala se ajusta al tamaño de papel o presentación deseado; ventanas de vista permiten distintas perspectivas (planta, isométricas, secciones).

          .div(titulo="Anotaciones y acotaciones")
            p Herramientas de cotas para añadir dimensiones precisas, eligiendo cotas lineales, radiales o angulares.


    .row.mb-5
      .col-lg-6
        h2 Preparación para la exportación
        p(data-aos="fade-left") Antes de la exportación, es importante configurar el archivo CAD para que cumpla con los requisitos de impresión y presentación, manteniendo la claridad y precisión en los detalles.

        p(data-aos="fade-left") Ajustar el tamaño de papel, la escala y los estilos de color garantiza que los planos sean consistentes y fáciles de interpretar.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 9. 
          span Ejemplo de exportación en InteriCAD 
        figure
          img(src='@/assets/curso/figuras/f9.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). InteriCAD T6 export to text file.]


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.png", style="max-width: 90px").mx-auto
            .col-lg
              h5 Ventana de impresión o trazado
              p.mb-0 Se ajusta el tamaño de papel y la escala de impresión para que el plano quede dentro de los márgenes.

        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.png", style="max-width: 90px").mx-auto
            .col-lg
              h5 Estilos de impresión y asignación de colores
              p.mb-0 Se asignan colores de capa y estilos de trazado para uniformidad de estilos en diferentes planos.


    h2(data-aos="fade-left") Consejos para presentaciones profesionales

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para mejorar la presentación de los planos técnicos, es importante mantener un diseño limpio y organizado, usar una paleta de colores adecuada y, en proyectos grandes, incluir una portada o tabla de contenido.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/5.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5.material-complementario
        h2.mb-5 MATERIAL COMPLEMENTARIO
        
        .row.mb-0
          .col-12.col-md-6.col-lg-7
            h3 Visualización y exportación

            p.d-flex.my-2
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/128621" target="_blank" rel="noopener noreferrer") Martínez Abad, O. & Pineda Piñón, R. (2017). Dibujo Técnico I: basado en competencias: ( ed.). Grupo Editorial Éxodo. 
            p.d-flex.my-2
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'20px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/36746" target="_blank" rel="noopener noreferrer") Marulanda, J. (2018). Introducción al diseño arquitectónico: ( ed.). El Cid Editor. 
            p.d-flex.my-2
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'20px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/128623" target="_blank" rel="noopener noreferrer") Nava Vergara, E. (2012). Dibujo asistido por computadora 2D y 3D: ( ed.). Grupo Editorial Éxodo. 
            p.d-flex.my-2
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'20px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51752" target="_blank" rel="noopener noreferrer") Company Calleja, P. & González Lluch, C. (2013). CAD 3D con SolidWorks®: diseño básico: ( ed.). D - Universitat Jaume I. Servei de Comunicació i Publicacions.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

        h3 Recursos audiovisuales

        p Incluye videos, podcast, audiolibros, grabaciones sonoras o musicales, que se encuentran alojados en internet.

        p.d-flex.mb-2
          img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
          a(href="https://www.youtube.com/watch?v=3tRpCx0krCg" target="_blank" rel="noopener noreferrer") Tz, F. Francis Tz. Dibujar el plano de una casa paso a paso en Autocad - Parte 1 Tutorial en español 2020. (Video). 
        p.d-flex.mb-5
          img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
          a(href="https://www.youtube.com/watch?v=7jXY5vxfRKc" target="_blank" rel="noopener noreferrer") Rebolledo, A. (Alonso Rebolledo Arellano) (2023, 9 de noviembre) How to make 2D drawing in Autodesk Fusion 360 (Video).

        h3 Recursos digitales

        p Incluye blogs, hipertextos, animaciones, etc.

        p.d-flex.my-2
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'20px'}")
          a(href="https://www.ansi.org/standards" target="_blank" rel="noopener noreferrer") American National Standards Institute. (2020). ANSI Y14.5: Dimensioning and tolerancing. 
        p.d-flex.my-2
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'20px'}")
          a(href="https://keepcoding.io/blog/herramientas-dibujo-y-creacion-imagenes-con-ia/" target="_blank" rel="noopener noreferrer") KeepCoding. (2023, 20 de junio). Herramientas de dibujo y creación de imágenes con IA. KeepCoding. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
