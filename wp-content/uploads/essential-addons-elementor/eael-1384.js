! function(e) {
    var n = {};

    function a(i) {
        if (n[i]) return n[i].exports;
        var l = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(l.exports, l, l.exports, a), l.l = !0, l.exports
    }
    a.m = e, a.c = n, a.d = function(e, n, i) {
        a.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, n) {
        if (1 & n && (e = a(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var l in e) a.d(i, l, function(n) {
                return e[n]
            }.bind(null, l));
        return i
    }, a.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(n, "a", n), n
    }, a.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, a.p = "", a(a.s = 26)
}({
    26: function(e, n) {
        var a = function(e, n) {
            n(".eael-simple-menu-container", e).data("hamburger-icon");
            var a = n(".eael-simple-menu-container", e).data("indicator-icon"),
                i = n(".eael-simple-menu-container", e).data("dropdown-indicator-icon"),
                l = n(".eael-simple-menu", e).hasClass("eael-simple-menu-horizontal"),
                t = n(".eael-simple-menu-container", e).data("hamburger-breakpoints"),
                s = n(".eael-simple-menu-container", e).data("hamburger-device");
            void 0 !== s && "" !== s && null !== s || (s = "tablet");
            var r = l ? ".eael-simple-menu-horizontal" : ".eael-simple-menu-vertical",
                o = function(e, n) {
                    var a = 0;
                    if ("none" === n || void 0 === n || "" === n || null === n) return a;
                    for (var i in e) i == n && (a = e[i]);
                    return a = a.replace(/[^0-9]/g, "")
                }(t, s),
                m = (n(".eael-simple-menu--stretch"), []);

            function u() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (window.matchMedia("(max-width: " + a + "px)").matches)
                    if (n(".eael-simple-menu-container", e).addClass("eael-simple-menu-hamburger"), n(r, e).addClass("eael-simple-menu-responsive"), n(".eael-simple-menu-toggle-text", e).text(n(".eael-simple-menu-horizontal .current-menu-item a", e).eq(0).text()), n(".eael-simple-menu-container", e).closest(".elementor-widget-eael-simple-menu").removeClass("eael-hamburger--not-responsive").addClass("eael-hamburger--responsive"), n(".eael-simple-menu-container", e).hasClass("eael-simple-menu--stretch")) {
                        var i = {};
                        n(r, e).parent().hasClass("eael-nav-menu-wrapper") || n(r, e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');
                        var l = n(".eael-simple-menu-container nav", e);
                        p(l), i.width = parseFloat(n(".elementor").width()) + "px", i.left = -parseFloat(l.offset().left) + "px", i.position = "absolute", l.css(i)
                    } else {
                        var t = {};
                        n(r, e).parent().hasClass("eael-nav-menu-wrapper") || n(r, e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');
                        var s = n(".eael-simple-menu-container nav", e);
                        p(s), t.width = "", t.left = "", t.position = "inherit", s.css(t)
                    }
                else n(".eael-simple-menu-container", e).removeClass("eael-simple-menu-hamburger"), n(r, e).removeClass("eael-simple-menu-responsive"), n(r + ", " + r + " ul", e).css("display", ""), n(".eael-simple-menu-container nav", e).removeAttr("style"), n(".eael-simple-menu-container", e).closest(".elementor-widget-eael-simple-menu").removeClass("eael-hamburger--responsive").addClass("eael-hamburger--not-responsive")
            }

            function p(e) {
                var n = {
                    width: "",
                    left: "",
                    position: "inherit"
                };
                e.css(n)
            }
            n(".eael-simple-menu li a", e).each((function() {
                var e, a = n(this),
                    i = a.attr("href"),
                    l = i,
                    t = void 0 !== l ? l.split("#") : [];
                e = (i = void 0 === i ? "" : i).startsWith("#"), ("#" !== i && t.length > 1 && localize.page_permalink === t[0] && t[1] || e && t[1] && n(i).length > 0) && m.push(t[1]), e || localize.page_permalink !== l || a.addClass("eael-item-active"), (a.parent().hasClass("current-menu-item") || a.parent().hasClass("current-menu-parent")) && a.addClass("eael-item-active")
            })), n(window).on("load resize scroll", (function() {
                m.length > 0 && n.each(m, (function(a, i) {
                    n("#" + i).isInViewport() ? (n('a[href="' + localize.page_permalink + "#" + i + '"]', e).addClass("eael-menu-" + i + " eael-item-active"), n('a[href="#' + i + '"]', e).addClass("eael-menu-" + i + " eael-item-active")) : n(".eael-menu-" + i).removeClass("eael-menu-" + i + " eael-item-active")
                }))
            })), l && (n(".eael-simple-menu > li.menu-item-has-children", e).each((function() {
                n("> a", n(this)).append("<span> ".concat(a, " </span>"))
            })), n(".eael-simple-menu > li ul li.menu-item-has-children", e).each((function() {
                n("> a", n(this)).append('<span class="eael-simple-menu-dropdown-indicator"> '.concat(i, " </span>"))
            }))), n(r, e).before('<span class="eael-simple-menu-toggle-text"></span>'), u(o), n(".eael-simple-menu-container", e).on("click", ".eael-simple-menu-toggle", (function(e) {
                e.preventDefault();
                var a = n(this).siblings("nav").children(r);
                "none" == a.css("display") ? a.slideDown(300) : a.slideUp(300)
            })), n(window).on("resize load", (function() {
                u(o)
            })), n(".eael-simple-menu > li.menu-item-has-children", e).each((function() {
                n(this).append('<span class="eael-simple-menu-indicator"> ' + a + "</span>")
            })), n(".eael-simple-menu > li ul li.menu-item-has-children", e).each((function(e) {
                n(this).append('<span class="eael-simple-menu-indicator"> ' + i + "</span>")
            })), n(".eael-simple-menu-dropdown-align-left .eael-simple-menu-vertical li.menu-item-has-children").each((function() {
                var e = parseInt(n("a", n(this)).css("padding-left"));
                n("ul li a", this).css({
                    "padding-left": e + 20 + "px"
                })
            })), n(".eael-simple-menu-dropdown-align-right .eael-simple-menu-vertical li.menu-item-has-children").each((function() {
                var e = parseInt(n("a", n(this)).css("padding-right"));
                n("ul li a", this).css({
                    "padding-right": e + 20 + "px"
                })
            })), n(".eael-simple-menu-container", e).on("click", '.eael-simple-menu-responsive li a:not([href="#"])', (function(e) {
                n(this).parents(r).slideUp(300)
            })), n(".eael-simple-menu", e).on("click", 'a[href="#"]', (function(e) {
                e.preventDefault(), n(this).siblings(".eael-simple-menu-indicator").click()
            })), n(".eael-simple-menu", e).on("click", ".eael-simple-menu-indicator", (function(e) {
                e.preventDefault(), n(this).toggleClass("eael-simple-menu-indicator-open"), n(this).hasClass("eael-simple-menu-indicator-open") ? n(this).siblings("ul").slideDown(300) : n(this).siblings("ul").slideUp(300), n(".eael-simple-menu-indicator-open").not(n(this).parents(".menu-item-has-children").children("span")).removeClass("eael-simple-menu-indicator-open").siblings("ul").slideUp(300)
            })), elementorFrontend.isEditMode() && elementor.channels.editor.on("change", (function(e) {
                e.elementSettingsModel.changed.eael_simple_menu_dropdown && elementor.saver.update.apply().then((function() {
                    elementor.reloadPreview()
                }))
            }))
        };
        jQuery(window).on("elementor/frontend/init", (function() {
            if (eael.elementStatusCheck("eaelSimpleMenu")) return !1;
            elementorFrontend.hooks.addAction("frontend/element_ready/eael-simple-menu.default", a)
        }))
    }
});