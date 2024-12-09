<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 3. Dibujo Asistido por Computadora (CAD)'"
    :subTitulo="'1. Dibujo Asistido por Computadora (CAD)'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    p(data-aos="fade-left") El CAD (Computer-Aided Design, o Diseño Asistido por Computadora) es una tecnología que facilita la creación, modificación, análisis y optimización de diseños mediante software. Este tipo de herramienta es esencial en diversas industrias, como la arquitectura, ingeniería, diseño industrial, sector automotriz y aeronáutico, ya que permite desarrollar modelos detallados de productos, estructuras y sistemas. Las principales características del CAD son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-start.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              .ps-4
                h4 Dibujo y modelado en 2D y 3D
                p CAD admite tanto el diseño en dos dimensiones (como planos de planta o esquemas) como en tres dimensiones, permitiendo crear modelos tridimensionales que se pueden rotar y analizar desde distintos ángulos.
          .row.align-items-start.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              .ps-4
                h4 Precisión y escalabilidad
                p Ofrece un alto nivel de precisión, ideal para piezas complejas, y permite ajustar a diferentes escalas, abarcando desde pequeñas piezas hasta grandes estructuras.
          .row.align-items-start.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              .ps-4
                h4 Simulación y análisis
                p Algunos programas CAD avanzados incluyen análisis de materiales y simulaciones de comportamiento (como resistencia a presión o impacto), ayudando a prever el rendimiento del diseño en el mundo real.
          .row.align-items-start.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              .ps-4
                h4 Interoperabilidad
                p CAD facilita el intercambio de diseños en diversos formatos de archivo (como .dwg, .dxf, .stl, entre otros), resultando útil para compartir el trabajo con otros colaboradores o integrarse con tecnologías adicionales, como la impresión 3D.

    p(data-aos="fade-left") Los usos más comunes del CAD incluyen:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes historicas" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Arquitectura y construcción
            p Creación de planos detallados de edificios, interiores y estructuras.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes formales" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ingeniería mecánica
            p Diseño de piezas y sistemas mecánicos, como máquinas, motores y herramientas.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes materiales (o reales)" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Diseño industrial
            p Desarrollo de productos de consumo, como electrodomésticos, dispositivos electrónicos y mobiliario.      
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='', style="width: 100%;")
      

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes materiales (o reales)" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ingeniería civil
            p Creación de infraestructuras como carreteras, puentes y sistemas de agua.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='', style="width: 100%;")


      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes materiales (o reales)" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Industria automotriz y aeroespacial
            p Diseño de piezas para vehículos y aviones, además de la optimización de la aerodinámica y la seguridad.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='', style="width: 100%;")

    p(data-aos="fade-left").mb-5 El CAD permite diseñar de forma más eficiente, precisa y rápida, reduciendo errores y el tiempo de desarrollo, lo cual lo convierte en una herramienta indispensable en la industria moderna.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Manejo básico de software CAD.

    p(data-aos="fade-left").mb-5 El manejo básico del software CAD (Diseño Asistido por Computadora) suele involucrar algunas herramientas y conceptos clave. A continuación veremos una guía general para comenzar:

    h3(data-aos="fade-left") Interfaz y área de trabajo



    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-left") A continuación, se presentan algunas actividades clave para mejorar la eficiencia en el uso de software CAD:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Familiarización con la interfaz
                p.mb-0 Exploración de la barra de herramientas, el área de dibujo y las pestañas de comando.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Movimiento en el área de trabajo
                p.mb-0 Aprendizaje de funciones como zoom, paneo (movimiento lateral) y rotación (en software 3D).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Uso de atajos de teclado
                p.mb-0 Uso de comandos rápidos, como "Z" para hacer zoom en muchos programas, para aumentar la velocidad de trabajo.

    .row.mb-5
      .col-lg-6
        h3 Herramientas de dibujo básicas
        p.mb-0 Las herramientas de dibujo en CAD son esenciales para crear contornos, formas geométricas y detalles en cualquier diseño. Estas herramientas básicas permiten estructurar y definir los elementos fundamentales de un proyecto, proporcionando las bases para trabajos más complejos.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 1. 
          span Espacio de trabajo en Inkscape 
        figure
          img(src='@/assets/curso/figuras/f1.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). Espacio de trabajo en Inkscape.]


    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        p(data-aos="fade-left").mb-5 A continuación, se presentan algunas de las herramientas más utilizadas y sus funciones principales.

        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-adicional-1
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/infografias/info1.png', alt='', style="max-width: 838px;").mx-auto

                .bg-color-white.shadow-soft.p-4(x="45%" y="30%" numero="1")
                  .row
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema1/9.png", alt="", style="max-width: 130px;")
                    .col-lg
                      h5 Líneas
                      p Herramienta básica para crear contornos y diseños.

                .bg-color-white.shadow-soft.p-4(x="67.5%" y="42%" numero="2")
                  .row
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema1/11.png", alt="", style="max-width: 130px;")
                    .col-lg
                      h5 Círculos, arcos, rectángulos
                      p Formas geométricas básicas para definir áreas o elementos de diseño.

                .bg-color-white.shadow-soft.p-4(x="42%" y="60%" numero="3")
                  .row
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema1/10.png", alt="", style="max-width: 130px;")
                    .col-lg
                      h5 Splines
                      p Curvas suaves y ajustables, útiles para detalles más precisos o estéticos.

                .bg-color-white.shadow-soft.p-4(x="62%" y="70%" numero="+")
                  .row
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema1/12.png", alt="", style="max-width: 130px;")
                    .col-lg
                      h5 Polilíneas
                      p Secuencias de líneas conectadas, útiles para crear formas complejas que pueden editarse como un solo objeto.


    h3(data-aos="fade-left") Herramientas de modificación

    p(data-aos="fade-left").mb-5 Las herramientas de modificación en CAD permiten ajustar y transformar los elementos de diseño de manera precisa. Estas opciones facilitan cambios rápidos en la posición, el tamaño y la orientación de los objetos, optimizando así el flujo de trabajo.

    .titulo-figura.mb-2
      h5 Figura 2. 
      span Herramientas de modificación en RattleCAD  

    figure.mb-5
      img(src='@/assets/curso/figuras/f2.png', alt='').mb-2
      figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). RattleCAD 4.0.22 Free.]

    p(data-aos="fade-left").mb-5 A continuación, se detallan algunas de las funciones más comunes.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-3.px-4.py-5.h-100
          h5.mb-2.text-center.text-white Mover
          p.mb-0.text-center.text-white Desplaza elementos seleccionados dentro del diseño.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-3.px-4.py-5.h-100
          h5.mb-2.text-center.text-white Copiar y pegar
          p.mb-0.text-center.text-white Reproduce elementos de manera eficiente.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-3.px-4.py-5.h-100
          h5.mb-2.text-center.text-white Escalar
          p.mb-0.text-center.text-white Cambia el tamaño de un objeto manteniendo sus proporciones.

      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-3.px-4.py-5.h-100
          h5.mb-2.text-center.text-white Rotar
          p.mb-0.text-center.text-white Gira un objeto en torno a un punto de referencia.

      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-3.px-4.py-5.h-100
          h5.mb-2.text-center.text-white Recortar #[em (trim)]
          p.mb-0.text-center.text-white Corta partes de los objetos en puntos específicos.


      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-3.px-4.py-5.h-100
          h5.mb-2.text-center.text-white Extender #[em (extend)]
          p.mb-0.text-center.text-white Amplía una línea o forma hasta un límite definido.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Capas y organización

    .row.mb-5
      .col-lg-6
        p.mb-0 La organización mediante capas en CAD permite estructurar los elementos de un diseño, dividiendo los componentes en secciones independientes. Este sistema facilita el manejo eficiente y ordenado de los diferentes elementos dentro del proyecto.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 3. 
          span Configuración de capas en CAD   
        figure
          img(src='@/assets/curso/figuras/f3.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). Edit layer set.]

    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/13.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") Estas funciones permiten gestionar elementos de forma eficiente, facilitando la edición y reutilización de componentes.

        AcordionA(tipo="b")
          .div(titulo="Capas")
            p Organiza el dibujo usando capas para distintos elementos (como paredes, mobiliario, etc.), Lo que permite ocultar o mostrar partes específicas y realizar cambios sin afectar otros elementos.

          .div(titulo="Bloques")
            p Conjuntos de elementos reutilizables (como puertas, ventanas o componentes mecánicos).


    .row.mb-5
      .col-lg-6
        h3 Dimensiones y escalas
        p.mb-0 Las dimensiones y escalas son aspectos fundamentales en el diseño CAD, ya que permiten representar correctamente las proporciones y medidas de los objetos. Esto garantiza que el diseño final sea preciso y utilizable para su propósito.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 4. 
          span Dimensiones y escalas en un diseño de CAD  
        figure
          img(src='@/assets/curso/figuras/f4.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). Scaled airfoil polygon.]


    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/14.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") Estas funciones permiten representar los objetos de forma exacta y adecuada para diferentes tipos de proyectos.

        AcordionA(tipo="b")
          .div(titulo="Cotas <em>(dimensions)</em>")
            p Muestran medidas y especificaciones directamente en el diseño.

          .div(titulo="Escalas")
            p Definen la escala de trabajo (por ejemplo, 1:1 para diseño real o una escala específica para planos arquitectónicos).


    .row.mb-5
      .col-lg-6
        h3 Visualización y exportación
        p.mb-0 La visualización y exportación permiten observar el diseño en diferentes perspectivas y formatos, facilitando su revisión y colaboración. Estas herramientas aseguran que el proyecto esté listo para ser compartido o producido.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 5 . 
          span Visualización y exportación en un diseño de CAD  
        figure
          img(src='@/assets/curso/figuras/f5.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). KiCad 3D with IDF.]

    .bg-full-width.border-top.color-primario.d-none
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=saXfavo1OQo" target="_blank" rel="noopener noreferrer") Charlas TEDx ( 8 de enero de 2016). El poder de escuchar | William Ury | TEDx San Diego
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Coser, LA (1956). Las funciones del conflicto social. Fondo de Cultura Económica.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span González Rey, F. (2016). Introducción a la teoría de la cooperación en conflictos. Ediciones Humanistas.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span La Rosa, M., & Rivas, P. (2017). Métodos alternativos de resolución de conflictos. Ediciones Jurídicas.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Marx, K. (1867). El capital. Siglo XXI Editores.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Mirabal, O. (2003). Fundamentos de negociación y mediación en conflictos. Editorial Universitaria.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Programa de las Naciones Unidas para el Desarrollo (PNUD). (2018). Herramientas para la resolución pacífica de conflictos. PNUD.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Universidad Tecnológica de México (UNITEC). (2016). Manual de comunicación efectiva y resolución de conflictos. UNITEC.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Weber, M. (1922). Economía y sociedad: Esbozo de sociología comprensiva. Fondo de Cultura Económica.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
