<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(
      :titulo="'Unidad 3. Dibujo Asistido por Computadora (CAD)'"
      :subTitulo="'SINTESIS'"
    )
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 El Diseño Asistido por Computadora (CAD) es una herramienta esencial en campos como la arquitectura, la ingeniería y el diseño industrial, facilitando la creación y modificación precisa de modelos en 2D y 3D. Este software permite un flujo de trabajo organizado mediante herramientas de dibujo y modificación, junto con la estructuración en capas y bloques. El proceso de modelado sigue un enfoque metódico que comienza con esbozos, continúa con la extrusión y detallado de piezas, y culmina en la exportación de planos técnicos en diversos formatos. CAD optimiza el diseño profesional, facilitando la visualización y análisis de proyectos complejos.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
