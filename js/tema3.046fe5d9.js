
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["tema3"],

  {
    // =========================
    // Assets
    // =========================

    "04dd": function (e, s, a) {
      e.exports = a.p + "img/img3.14353393.svg";
    },

    "183d": function (e, s, a) {
      e.exports = a.p + "img/img5.15fd242c.svg";
    },

    4898: function (e, s, a) {
      e.exports = a.p + "img/img12.e7789468.svg";
    },

    7017: function (e, s, a) {
      e.exports = a.p + "img/img14.47c16d94.svg";
    },

    7445: function (e, s, a) {
      e.exports = a.p + "img/img6.9d1c1080.svg";
    },

    "7c18": function (e, s, a) {
      e.exports = a.p + "img/img13.5d1dd3a5.svg";
    },

    "9bb4": function (e, s, a) {
      e.exports = a.p + "img/img4.ae981ad9.png";
    },

    "9e67": function (e, s, a) {
      e.exports = a.p + "img/img4.a59d8cc5.svg";
    },

    "9f2d": function (e, s, a) {
      e.exports = a.p + "img/img10.21f7b080.svg";
    },

    db05: function (e, s, a) {
      e.exports = a.p + "img/img11.1084e7b0.svg";
    },

    dfc4: function (e, s, a) {
      e.exports = a.p + "img/img9.5e092e70.svg";
    },

    e4d0: function (e, s, a) {
      e.exports = a.p + "img/img7.1198067d.svg";
    },

    // =========================
    // Componente Tema3
    // =========================

    eb46: function (e, s, a) {
      "use strict";

      a.r(s);

      // =========================
      // TEMPLATE
      // =========================

      var t = function () {
        var e = this,
          s = e.$createElement,
          a = e._self._c || s;

        return a(
          "div",
          {
            staticClass: "curso-main-container pb-3",
          },

          [
            // =========================
            // Banner
            // =========================

            a("BannerInterno"),

            // =========================
            // Contenedor principal
            // =========================

            a(
              "div",
              {
                staticClass:
                  "container tarjeta tarjeta--blanca p-4 p-md-5",
              },

              [
                e._m(0),
                e._m(1),
                e._m(2),

                // =========================
                // Sección 3.1
                // =========================

                a("div", {
                  attrs: {
                    id: "t_3_1",
                  },
                }),

                e._m(3),

                a("p", { staticClass: "mb-5" }, [
                  e._v(
                    "Bertalanffy y otros autores posteriores..."
                  ),
                ]),

                e._m(4),

                // =========================
                // Slider
                // =========================

                a(
                  "div",
                  {
                    staticClass: "tarjeta tarjeta--azul p-4",
                  },

                  [
                    a("SlyderA", [
                      // contenido slider...
                    ]),
                  ],

                  1
                ),

                // =========================
                // Separador
                // =========================

                a("separador"),

                // =========================
                // Sección 3.2
                // =========================

                a("div", {
                  attrs: {
                    id: "t_3_2",
                  },
                }),

                e._m(5),

                a("p", { staticClass: "mb-5" }, [
                  e._v(
                    "A continuación, se presenta un breve significado de sistemas de información:"
                  ),
                ]),

            
                e._m(6),

                e._m(7),

                a("p", { staticClass: "mb-5" }, [
                  e._v(
                    "Estos términos datos e información..."
                  ),
                ]),

                e._m(8),
              ],

              1
            ),
          ],

          1
        );
      };

      // =========================
      // BLOQUES ESTÁTICOS
      // =========================

      var i = [

        // =========================
        // Título principal
        // =========================

        function () {
          var e = this,
            s = e.$createElement,
            a = e._self._c || s;

          return a(
            "div",
            {
              staticClass: "titulo-principal",
              attrs: {
                "data-aos": "flip-up",
              },
            },

            [
              a("div", {
                staticClass: "titulo-principal__numero",
              }, [
                a("span", [e._v("3")]),
              ]),

              a("h1", [
                e._v("Definición de los sistemas"),
              ]),
            ]
          );
        },

      

        function () {
          var e = this,
            s = e.$createElement,
            a = e._self._c || s;

          return a(
            "figure",
            {
              staticClass: "mb-5",
            },

            [
              a(
                "div",
                {
                  staticClass: "video",
                },

                [
                  a("iframe", {
                    attrs: {
                      width: "560",
                      height: "315",

                      src: "https://www.youtube.com/embed/n9kqKg1tDV0",

                      title: "YouTube video player",

                      frameborder: "0",

                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

                      allowfullscreen: "",
                    },
                  }),
                ]
              ),
            ]
          );
        },
      ];

      // =========================
      // COMPONENTE
      // =========================

      var n = {
        name: "Tema3",

        components: {},

        data: function () {
          return {};
        },

        mounted: function () {
          var e = this;

          this.$nextTick(function () {
            e.$aosRefresh();
          });
        },

        updated: function () {
          this.$aosRefresh();
        },
      };

      // =========================
      // EXPORT
      // =========================

      var o = n;

      var c = a("2877");

      var r = Object(c["a"])(
        o,
        t,
        i,
        false,
        null,
        "5bfa3392",
        null
      );

      s["default"] = r.exports;
    },
  },
]);
