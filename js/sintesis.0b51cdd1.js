(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"13f0":function(t,e,n){"use strict";n("450b")},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),s=n("9112");for(var o in a){var c=r[o],l=c&&c.prototype;if(l&&l.forEach!==i)try{s(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1fb6":function(t,e,n){},"3cd8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{domProps:{innerHTML:t._s(t.titulo)}}),n("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},a=[],i={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=i,o=(n("8385"),n("2877")),c=Object(o["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},"438b":function(t,e,n){"use strict";n("1fb6")},"450b":function(t,e,n){},"52e5":function(t,e,n){t.exports=n.p+"img/cc.58a75e32.svg"},"5a31":function(t,e,n){t.exports=n.p+"img/sintesis-test.6fc94423.png"},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),s=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"79ad":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{titulo:"Unidad 2. Dibujo en proyección y representación de vistas",subTitulo:"SÍNTESIS"}}),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[r("p",{staticClass:"mb-4 mb-md-5"},[t._v("En esta unidad 2, Dibujo en proyección y representación de vistas, se explora el uso de la proyección ortogonal en el dibujo técnico, esencial para representar objetos tridimensionales en dos dimensiones mediante vistas planas, como la frontal, superior y lateral. Este método es clave en ingeniería, arquitectura y diseño industrial. Se detallan tipos de proyecciones como la multivista, isométrica, dimétrica, trimétrica y caballera, junto con la importancia de las vistas y las normas ISO para su disposición. Finalmente, se abordan tolerancias y ajustes, cruciales para un ensamblaje preciso y la funcionalidad de los componentes.")]),r("figure",[r("img",{attrs:{src:n("5a31"),alt:""}})])])}],i=(n("d3b7"),n("159b"),n("3cd8")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[t.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[t._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[t._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[t._v(" Base v"+t._s(t.versiones.base)+" - Paquete v"+t._s(t.versiones.pkg))])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-auto mb-2 mb-sm-0"},[r("img",{attrs:{src:n("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},l=c,u=(n("13f0"),n("2877")),d=Object(u["a"])(l,s,o,!1,null,null,null),f=d.exports,p={name:"Creditos",components:{BannerInterno:i["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,n){e+=(n?"<br/>":"")+t})):e+=t,e}}},m=p,b=(n("438b"),Object(u["a"])(m,r,a,!1,null,null,null));e["default"]=b.exports},8385:function(t,e,n){"use strict";n("d36b")},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),s=n("50c4"),o=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=7==t,p=5==t||d;return function(m,b,v,E){for(var h,y,g=i(m),_=a(g),C=r(b,v,3),S=s(_.length),I=0,O=E||o,x=e?O(m,S):n||f?O(m,0):void 0;S>I;I++)if((p||I in _)&&(h=_[I],y=C(h,I,g),t))if(e)x[I]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return I;case 2:c.call(x,h)}else switch(t){case 4:return!1;case 7:c.call(x,h)}return d?-1:l||u?u:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d36b:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=sintesis.0b51cdd1.js.map