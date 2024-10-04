!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "d9797a7d-36d3-4ed1-ba5b-fd698871df5b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d9797a7d-36d3-4ed1-ba5b-fd698871df5b"));
  } catch (e) {}
})();
var _global =
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
(_global.SENTRY_RELEASE = { id: "90199bea12d0307073a61899b1597cc5c29360f3" }),
  (self.webpackChunk_xwords_phoenix =
    self.webpackChunk_xwords_phoenix || []).push([
    [8810],
    {
      49817: function (e, t) {
        t.Z = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t =
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ""
            )
              .split(",")
              .filter((e) => !!e) || [];
          return Object.entries(e)
            .filter((e) => {
              let [t] = e;
              return /dfp/.test(t.toLowerCase());
            })
            .reduce((e, n) => {
              let [r, o] = n;
              const i = "".concat(r, "_").concat(o).toLowerCase();
              return t.includes(i) ? e : e.concat(i);
            }, [])
            .concat(t);
        };
      },
      53212: function (e, t, n) {
        function r() {
          let e = 0;
          new PerformanceObserver((t) => {
            t.getEntries().forEach((t) => {
              t.hadRecentInput ||
                ((e += t.value), console.log("Current CLS value:", e, t));
            });
          }).observe({ type: "layout-shift", buffered: !0 });
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      12058: function (e, t) {
        const n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          (e) => {
            const t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          }
        );
        t.Z = {
          get current() {
            return window.nyt_et && window.nyt_et.get_pageview_id
              ? window.nyt_et.get_pageview_id()
              : n;
          },
        };
      },
      37226: function (e, t, n) {
        n.d(t, {
          d: function () {
            return i;
          },
        });
        var r = n(65489),
          o = n(98087);
        const i =
          ((a = "hub"),
          function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if (o.w_.includes(e))
              return (0, r.ob)({ name: a, label: "daily-archive", context: t });
            switch (e) {
              case o.SK:
                return (0, r.ob)({ name: a, label: "daily-page", context: t });
              case o.jM:
                return (0, r.ob)({ name: a, label: "mini-page", context: t });
              case o.pi:
                return (0, r.ob)({ name: a, label: "wordplay", context: t });
              case o.v9:
                return (0, r.ob)({
                  name: a,
                  label: "spelling-bee",
                  context: t,
                });
              case o.l7:
                return (0, r.ob)({ name: a, label: "wordle", context: t });
              case o.sU:
                return (0, r.ob)({
                  name: a,
                  label: "letter-boxed",
                  context: t,
                });
              case o.vA:
                return (0, r.ob)({ name: a, label: "connections", context: t });
              case o.B8:
                return (0, r.ob)({ name: a, label: "tiles", context: t });
              case o.K4:
                return (0, r.ob)({ name: a, label: "sudoku", context: t });
              case o.TW:
                return (0, r.ob)({ name: a, label: "vertex", context: t });
              case o.El:
                return (0, r.ob)({
                  name: a,
                  label: "nav-all-games",
                  context: t,
                });
              case o.Nj:
                return (0, r.ob)({ name: a, label: "stats", context: t });
              case o.k2:
                return (0, r.ob)({
                  name: a,
                  label: "daily-archive",
                  context: t,
                });
              case o.Wz:
                return (0, r.ob)({
                  name: a,
                  label: "download-app",
                  context: t,
                });
              case o.yw:
                return (0, r.ob)({
                  name: a,
                  label: "monthly-bonus",
                  context: t,
                });
              case o.MQ:
              case o.W9:
                return (0, r.ob)({
                  name: a,
                  label: "featured-article",
                  context: t,
                });
              default:
                return null;
            }
          });
        var a;
      },
      85775: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return p;
          },
        });
        var r = n(89526),
          o = n(65489),
          i = n(14237);
        const a = "[N/A]",
          s = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document.documentElement;
            const n = Object.entries(window.abra.tests)
                .map((e) => e.join("="))
                .join(","),
              r = e.regiId || "[NONE]",
              o = window.env.version || a;
            return [
              "Hybrid summary:",
              "Platform: ".concat(
                window.newsreaderAppPlatform ? "News App" : "XW App"
              ),
              "Viewport Size: "
                .concat(t.clientWidth, " x ")
                .concat(t.clientHeight),
              "Logged In: ".concat(e.isLoggedIn ? "Yes" : "No"),
              "Xwd: ".concat(e.hasXwd ? "Yes" : "No"),
              "Regi: ".concat(r),
              "Web Version: ".concat(o),
              "Flags: ".concat(n),
            ];
          },
          c = function () {
            return s(
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ).join("\n");
          },
          l = function () {
            var e;
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const n = new Date().getTimezoneOffset(),
              r =
                (null === (e = window.sentryConfig) || void 0 === e
                  ? void 0
                  : e.release) || a,
              o = [
                "Timezone: ".concat(
                  "UTC".concat(n > 0 ? "" : "+").concat(n / -60)
                ),
                "Build: ".concat(r),
              ];
            return s(t).concat(o).join("\n");
          };
        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const f = "nytgames@nytimes.com";
        var p = (e) => {
          let {
            subject: t = "",
            href: n = "",
            children: a = "",
            type: s = o.N1.FEEDBACK,
            useEnhancedHybridDebugInfo: u = !1,
            tracking: p,
            isMenuItem: m = !1,
            variant: b,
            dataTestId: g,
          } = e;
          const { userType: v } = (0, i.aF)(),
            [w, y] = (0, r.useState)("mailto:".concat(f)),
            h = window.isHybridWebView && window.NativeBridge,
            O = (function (e) {
              return window.newsreaderAppPlatform
                ? "News App: ".concat(e)
                : "ios" === window.gamesAppPlatform
                ? "iOS ".concat(e)
                : "android" === window.gamesAppPlatform
                ? "Android ".concat(e)
                : "".concat(e);
            })(t),
            P = t.match(/(bug).*/i);
          (0, r.useEffect)(() => {
            (0, o.wC)(O, v, b).then(y);
          }, [v.regiId, b]);
          const j = n && t ? O : "",
            E = n ? "".concat(n, "?subject=").concat(j) : w,
            D = h ? void 0 : E;
          return r.createElement(
            "a",
            {
              "aria-label": "".concat(
                P ? "Report a bug" : "Submit feedback",
                " by email"
              ),
              rel: h ? void 0 : "noopener noreferrer",
              target: h ? void 0 : "_blank",
              href: D,
              onClick: (e) => {
                if ((p && p(), h)) {
                  var t;
                  e.preventDefault();
                  const n = { type: s, debugInfo: u ? l(v) : c(v) },
                    r =
                      s === o.N1.CUSTOM
                        ? { emailTitle: O, emailDestination: f }
                        : {},
                    i = d(d({}, n), r);
                  null === (t = window.NativeBridge) ||
                    void 0 === t ||
                    t.gamesSendEmail(i);
                }
              },
              title: f,
              role: m ? "menuitem" : "link",
              "data-testid": g,
            },
            a
          );
        };
      },
      10396: function (e, t, n) {
        var r = n(89526),
          o = n(64403),
          i = n.n(o),
          a = n(65489),
          s = n(78845);
        t.Z = (e) => {
          let { navigationLinks: t, directives: n } = e;
          const o = "prod" === a.OB.name ? "" : "https://www.stg.nytimes.com",
            c = (e) => {
              "Enter" === e.key && e.stopPropagation();
            };
          return r.createElement(
            "ul",
            { className: s.Z.legalLinksContainer },
            r.createElement(
              "li",
              { className: s.Z.legalLink },
              r.createElement(
                "a",
                {
                  className: "pz-footer__legal-co",
                  href: t.company,
                  onKeyDown: c,
                },
                "© ",
                new Date().getFullYear(),
                " The New York Times Company"
              )
            ),
            r.createElement(
              "li",
              { className: s.Z.legalLink },
              r.createElement(
                "a",
                { href: t.home, onKeyDown: c },
                "NYTimes.com"
              )
            ),
            r.createElement(
              "li",
              { className: s.Z.legalLink },
              r.createElement("a", { href: t.sitemap, onKeyDown: c }, "Sitemap")
            ),
            r.createElement(
              "li",
              { className: s.Z.legalLink },
              r.createElement(
                "a",
                { href: t.privacy, onKeyDown: c },
                "Privacy Policy"
              )
            ),
            r.createElement(
              "li",
              { className: s.Z.legalLink },
              r.createElement(
                "a",
                { href: t.termsOfService, onKeyDown: c },
                "Terms of Service"
              )
            ),
            r.createElement(
              "li",
              { className: s.Z.legalLink },
              r.createElement(
                "a",
                { href: t.termsOfSale, onKeyDown: c },
                "Terms of Sale"
              )
            ),
            "show" === (null == n ? void 0 : n.PURR_DataSaleOptOutUI_v2) &&
              r.createElement(
                "li",
                { className: i()(s.Z.legalLink, "ccpa-opt-out") },
                r.createElement(
                  "a",
                  {
                    className: "ccpa-link",
                    href: "".concat(o, "privacy/your-privacy-choices"),
                    "data-region": "footer",
                    "data-track": "linkOptOut",
                    onKeyDown: c,
                  },
                  r.createElement("div", { className: "ccpa-icon" }),
                  "Your Privacy Choices"
                )
              ),
            "show" === (null == n ? void 0 : n.PURR_CaliforniaNoticesUI) &&
              r.createElement(
                "li",
                { className: i()(s.Z.legalLink, "ccpa-california-notice") },
                r.createElement(
                  "a",
                  {
                    className: "ccpa-link",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "".concat(
                      o,
                      "/privacy/privacy-policy#california-notice"
                    ),
                    "data-region": "footer",
                    "data-track": "linkCANotice",
                    onKeyDown: c,
                  },
                  "California Notices"
                )
              ),
            r.createElement(
              "li",
              {
                className: i()(s.Z.legalLink, "default-hidden"),
                id: (0, a.iU)("privacy-preferences-link"),
              },
              r.createElement(
                "a",
                {
                  id: (0, a.iU)("manage-privacy-preferences-link"),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "".concat(o, "/privacy/manage-settings"),
                  onKeyDown: c,
                },
                "Manage Privacy Preferences"
              )
            )
          );
        };
      },
      29684: function (e, t, n) {
        const r = (0, n(89526).createContext)({
          getVariant: () => null,
          reportExposure: (e) => null,
          reportHybridExposure: (e) => null,
          tests: {},
          hasAbraLoaded: !1,
          hasAbraLoadedWithUser: !1,
        });
        t.Z = r;
      },
      89064: function (e, t, n) {
        var r = n(89526),
          o = n(34458);
        t.Z = (e) => (0, r.useContext)(o.pG)[e];
      },
      65046: function (e, t) {
        t.Z = () => (
          window.isHybridWebView ||
            ((e) => {
              const t = document.createElement("script");
              (t.src = e), (t.async = !0), document.body.appendChild(t);
            })(window.env.gtm),
          null
        );
      },
      42714: function (e, t, n) {
        n.d(t, {
          Fi: function () {
            return y;
          },
          xG: function () {
            return v;
          },
          P6: function () {
            return g;
          },
        });
        var r = n(45657),
          o = n(4243),
          i = n(48198),
          a = n(22042),
          s = n(89936),
          c = n(67882);
        var l = n(54988),
          u = {
            MWD_phoenix_games_sale_banner: {
              startDate: l.Gk,
              endDate: l.Bj,
              audience: { users: ["anon", "regi", "digi"] },
            },
            MWD_phoenix_games_sale_cta: {
              startDate: l.Gk,
              endDate: l.Bj,
              audience: { users: ["anon", "regi", "digi"] },
            },
            MWD_phoenix_games_sale_nav: {
              startDate: l.Gk,
              endDate: l.Bj,
              audience: { users: ["anon", "regi", "digi"] },
            },
            GAMES_saleButtonCopy_0421: {
              startDate: new Date("05/22/2023 06:00:000-0400"),
              endDate: new Date("06/30/2023 12:00:000-0400"),
              audience: { users: ["anon", "regi", "digi"], platforms: ["web"] },
            },
            GAMES_meterIntegration_0228: { audience: { platforms: ["web"] } },
            GAMES_xwdMeterIntegration_0927: {
              audience: { platforms: ["web"] },
            },
            GAMES_xwdMeterEnforcement_0927: {
              audience: { platforms: ["web"] },
            },
            GAMES_appPaywallGood_0324: { audience: { platforms: ["web"] } },
            GAMES_toolbarConnWordle_0424: { audience: { platforms: ["web"] } },
            GAMES_hamburgerRefactor_0824: { audience: { platforms: ["web"] } },
            MAPS_wordleRegisNewsletterOptIn_0324: {
              audience: { platforms: ["web"] },
            },
            CONV_GUAC_XWord_HDUpsell_Test_0624: {
              audience: {
                platforms: ["web", "mobile-web"],
                users: ["sub, no hd"],
              },
            },
            GAMES_sbDarkMode_0916: {
              audience: { platforms: ["games-ios", "games-android"] },
            },
            GAMES_AppDLHoldout_0624: {
              audience: { platforms: ["web", "mobile-web"] },
            },
            GAMES_wordleBotAppDLCTA_0624: {
              audience: { platforms: ["web", "mobile-web"] },
            },
            GAMES_generalAppDLCTARefresh_0824: {
              audience: { platforms: ["web", "mobile-web"] },
            },
            GAMES_wordleInterstitial_0724: {
              audience: { platforms: ["web", "mobile-web"] },
            },
            GAMES_wordleMoreContent_0824: {
              audience: { platforms: ["web", "mobile-web"] },
            },
            GAMES_strandsDarkMode_0916: {
              audience: { platforms: ["games-ios", "games-android"] },
            },
            GAMES_connectionsDarkMode_0926: {
              audience: { platforms: ["games-ios", "games-android"] },
            },
          };
        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        let p = {};
        const m = () => {
            const e = new URLSearchParams(window.location.search).get(
                "abra-overrides"
              ),
              t = {};
            return (
              e &&
                e.split(",").forEach((e) => {
                  const [n, r] = e.split("=");
                  t[n] = r;
                }),
              t
            );
          },
          b = (e) =>
            !(null == e || !e.gamesSubStartDate) &&
            e.gamesSubStartDate <= "2024-09-15",
          g = (e) =>
            e && e.gamesSubStartDate
              ? (0, r.Z)(
                  new Date(),
                  (0, o.Z)(e.gamesSubStartDate, "yyyy-MM-dd", new Date())
                )
              : null,
          v = (e) =>
            null != e && e.hasXwd
              ? "sub"
              : null != e && e.regiId
              ? "regi"
              : "anon",
          w = (e) => {
            var t;
            return null === i.win ||
              void 0 === i.win ||
              null === (t = i.win.abra) ||
              void 0 === t
              ? void 0
              : t.tests[e];
          },
          y = {
            init: (e) => {
              var t, n;
              const r =
                null === (t = window) ||
                void 0 === t ||
                null === (t = t.abra) ||
                void 0 === t
                  ? void 0
                  : t.config;
              if (!r) return;
              const o = {
                agent_id: a.kh,
                regi_id: null == e ? void 0 : e.regiId,
                geo_country: a.NT,
                user_type: v(e),
                is_subscribed_before_wordle_archive:
                  ((s = e),
                  !(null == s || !s.gamesSubStartDate) &&
                    s.gamesSubStartDate < "2024-04-22"),
                is_subscribed_before_connections_archive: b(e),
                max_subscriber_tenure_in_days: g(e),
              };
              var s;
              const l =
                  (null === (n = window.config) || void 0 === n
                    ? void 0
                    : n.AbraConfig) || m(),
                d = i.win.Abra(r, o, l),
                p = (t) =>
                  u[t]
                    ? ((e, t) => {
                        let n = !0,
                          r = !0,
                          o = !0;
                        if (
                          ((e.startDate || e.endDate) &&
                            (o = ((e) => {
                              const t = (() => {
                                const e = new Date(Date.now());
                                if (void 0 === typeof window) return e;
                                const t = new URLSearchParams(
                                  window.location.search
                                ).get("date-override");
                                return t ? new Date(t) : e;
                              })();
                              return (
                                (!e.startDate && !e.endDate) ||
                                (e.startDate && e.startDate <= t
                                  ? !e.endDate || e.endDate >= t
                                  : !(e.startDate || !e.endDate) &&
                                    e.endDate >= t)
                              );
                            })(e)),
                          e.audience)
                        ) {
                          const { users: o, platforms: i } = e.audience;
                          o &&
                            (n = ((e, t) =>
                              0 === e.length ||
                              (!!t &&
                                e
                                  .map((e) =>
                                    ((e) => {
                                      switch (e) {
                                        case "anon":
                                          return !t.isLoggedIn && !t.hasXwd;
                                        case "regi":
                                          return (
                                            t.isLoggedIn &&
                                            !t.hasDigi &&
                                            !t.hasXwd
                                          );
                                        case "hd":
                                          return t.hasHd;
                                        case "sub, no hd":
                                          return t.hasXwd && !t.hasHd;
                                        case "sub":
                                          return t.hasXwd && !t.hasDigi;
                                        case "ada":
                                          return t.hasXwd && t.hasDigi;
                                        case "digi":
                                          return !t.hasXwd && t.hasDigi;
                                        default:
                                          return !1;
                                      }
                                    })(e)
                                  )
                                  .some((e) => !0 === e)))(o, t)),
                            i &&
                              (r = ((e) =>
                                0 === e.length ||
                                (void 0 !== typeof window &&
                                  e
                                    .map((e) =>
                                      ((e) => {
                                        switch (e) {
                                          case "web":
                                            return (
                                              !window.isHybridWebView &&
                                              !window.newsreaderAppPlatform
                                            );
                                          case "mobile-web":
                                            return (
                                              !window.isHybridWebView &&
                                              !window.newsreaderAppPlatform &&
                                              window.isMobileDevice
                                            );
                                          case "desktop":
                                            return (
                                              !window.isHybridWebView &&
                                              !window.newsreaderAppPlatform &&
                                              !window.isMobileDevice
                                            );
                                          case "games-ios":
                                            return (
                                              "ios" === window.gamesAppPlatform
                                            );
                                          case "games-android":
                                            return (
                                              "android" ===
                                              window.gamesAppPlatform
                                            );
                                          case "newsreader-ios":
                                            return (
                                              "ios" ===
                                              window.newsreaderAppPlatform
                                            );
                                          case "newsreader-android":
                                            return (
                                              "android" ===
                                              window.newsreaderAppPlatform
                                            );
                                          case "hybrid":
                                            return window.isHybridWebView;
                                          default:
                                            return !1;
                                        }
                                      })(e)
                                    )
                                    .some((e) => !0 === e)))(i));
                        }
                        return o && n && r;
                      })(u[t], e)
                      ? d(t)
                      : null
                    : d(t);
              (i.win.abra.getVariant = p),
                (i.win.abra.tests = {}),
                Object.keys(f(f({}, r), l)).forEach((e) => {
                  const t = p(e),
                    n = u[e];
                  (i.win.abra.tests[e] = t),
                    t &&
                      n &&
                      ((e, t) => {
                        if (!t) return;
                        const { classNames: n } = t;
                        n && e && n[e] && (0, c.M)([n[e]]);
                      })(t, n);
                });
            },
            getTests: () => i.win.abra.tests,
            getVariant: w,
            reset: () => {
              p = {};
            },
            reportExposure: (e) => {
              if (void 0 === typeof window) return;
              if (p[e]) return;
              const { data: t, eventName: n } = ((e) => {
                const t = {
                  test: e,
                  variant: w(e) || null,
                  config_ver: w(".ver"),
                  integration: "games-".concat(
                    "prod" === a.OB.name ? "prd" : "stg"
                  ),
                };
                !t.config_ver &&
                  Math.random() < 0.01 &&
                  (0, s.lY)(new Error("abra exposure missing config_ver"), {
                    test: e,
                  });
                const n = { abtest: t },
                  r = !!window.gamesAppPlatform,
                  o = r ? "ab_expose" : "ab-expose";
                return { data: f({}, r ? t : n), eventName: o };
              })(e);
              window.isHybridWebView && window.NativeBridge
                ? window.NativeBridge.sendAnalytic(n, t)
                : ((i.win.dataLayer = i.win.dataLayer || []),
                  i.win.dataLayer.push(f({ event: n }, t))),
                (p[e] = !0);
            },
            reportHybridExposure: (e) => {
              var t;
              return (
                "undefined" != typeof window &&
                !p[e] &&
                (null !== (t = window.NativeBridge) &&
                void 0 !== t &&
                t.reportABExposure
                  ? (window.NativeBridge.reportABExposure(e), (p[e] = !0), !0)
                  : (console.error("ReportABExposure is not available"), !1))
              );
            },
            getOverrides: m,
          };
      },
      29919: function (e, t, n) {
        n.d(t, {
          Y: function () {
            return g;
          },
        });
        var r = n(86470),
          o = n(41586),
          i = n(51319),
          a = n(46710);
        function s(e) {
          return void 0 !== e && e.getTargeting(a.el)[0].startsWith("ls-");
        }
        function c(e) {
          return void 0 !== e && "" === e.getTargeting(a.Yf)[0];
        }
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const d = [
          "slot",
          "id",
          "pos",
          "position",
          "adSlotEventName",
          "creativeId",
          "sourceAgnosticCreativeId",
          "lineItemId",
          "sourceAgnosticLineItemId",
        ];
        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function m(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function b(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? m(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const g = (e) => (t) => {
          if (e !== r.hg.AD_EMPTY || t.type !== r.hg.AD_BLOCK_ON) {
            const n = ((e) => {
              const {
                  slot: t,
                  id: n,
                  pos: o,
                  position: l,
                  adSlotEventName: f,
                  creativeId: m,
                  sourceAgnosticCreativeId: b,
                  lineItemId: g,
                  sourceAgnosticLineItemId: v,
                } = e,
                w = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++)
                        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                      return o;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                      (n = i[r]),
                        t.indexOf(n) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (o[n] = e[n]));
                  }
                  return o;
                })(e, d),
                y =
                  t &&
                  (function (e) {
                    var t;
                    return null == e ||
                      null === (t = e.getResponseInformation) ||
                      void 0 === t ||
                      null === (t = t.call(e)) ||
                      void 0 === t
                      ? void 0
                      : t.advertiserId;
                  })(t),
                h = (0, i.Z)(window);
              return p(
                p(
                  p(
                    p(
                      p(
                        p(
                          p({}, w),
                          {},
                          { adSlotEventName: f },
                          (g || v) && { lineItemId: "".concat(g || v) }
                        ),
                        (m || b) && { creativeId: "".concat(m || b) }
                      ),
                      (o || l) && { position: o || l }
                    ),
                    y && { advertiserId: y }
                  ),
                  n && { slotId: n }
                ),
                {},
                { pageType: h },
                (function (e, t) {
                  if (
                    ![
                      r.hg.AD_DEFINED,
                      r.hg.AD_CALLED,
                      r.hg.AD_REQUEST_SENT,
                    ].includes(e)
                  )
                    return {};
                  const n = (function () {
                    var e;
                    if ("undefined" != typeof window)
                      return null === (e = window) || void 0 === e
                        ? void 0
                        : e.googletag.pubads();
                  })();
                  return u(
                    u(
                      {},
                      (function (e, t) {
                        if (null == e || !e.getTargetingKeys || void 0 === t)
                          return {};
                        const n = [
                            ...t.getTargetingKeys(),
                            ...e.getTargetingKeys(),
                          ],
                          r = a.hn.every((e) => n.includes(e));
                        return {
                          has_bt: n.includes(a.Yf),
                          has_als_test_clientside: n.includes(a.el),
                          has_critical_kvps: r,
                        };
                      })(t, n)
                    ),
                    {},
                    { is_alice_cache: s(n), is_bt_empty: c(n) }
                  );
                })(f, t)
              );
            })(b(b({}, t), {}, { adSlotEventName: e }));
            ((e) => {
              let { event: t = a.Cj, type: n = a.Sb, data: r } = e;
              const i = { type: n, trigger: a.Dv };
              (0, o.j)(t, { eventData: i, ad: r });
            })({ data: n });
          }
        };
      },
      46710: function (e, t, n) {
        n.d(t, {
          Cj: function () {
            return o;
          },
          Dv: function () {
            return a;
          },
          Sb: function () {
            return i;
          },
          Yf: function () {
            return s;
          },
          _k: function () {
            return u;
          },
          el: function () {
            return c;
          },
          hn: function () {
            return l;
          },
        });
        var r = n(86470);
        const o = "impression",
          i = "impression",
          a = "ad",
          s = "bt",
          c = "als_test_clientside",
          l = ["typ", "pos", "ver", "prop", "plat", "vp"],
          u = [
            r.hg.AD_SLOT_READY,
            r.hg.AD_DEFINED,
            r.hg.AD_CALLED,
            r.hg.AD_REQUEST_SENT,
            r.hg.AD_RESPONSE,
            r.hg.AD_RENDERED,
            r.hg.AD_LOADED,
            r.hg.AD_VIEWABLE,
            r.hg.AD_EMPTY,
          ];
      },
      6756: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return j;
          },
        });
        const r = "bt",
          o = "mktg",
          i = "sub",
          a = "als_test_clientside";
        var s = n(48198);
        const c = new Error("Ad Slot Not Initialized");
        var l = (e) =>
            Promise.race([
              new Promise((t) => {
                (s.win.AdSlot4 = s.win.AdSlot4 || {
                  cmd: [],
                  init: () => null,
                  events: { subscribe: () => ({ remove: () => {} }) },
                  refreshAds: () => null,
                }),
                  s.win.AdSlot4.cmd.push(() => {
                    t(e);
                  });
              }),
              new Promise((e, t) => {
                setTimeout(() => {
                  t(c);
                }, 2e3);
              }),
            ]),
          u = (e) =>
            new Promise((t) => {
              var n, r;
              return (
                null === (n = window) ||
                  void 0 === n ||
                  null === (n = n.AdSlot4) ||
                  void 0 === n ||
                  null === (r = n.updateAdReq) ||
                  void 0 === r ||
                  r.call(n, e),
                t(e)
              );
            }),
          d = n(65489);
        const f = (e) =>
            "object" == typeof e && null !== e && !Array.isArray(e),
          p = function () {
            let { label: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { label: "" };
            return { name: "alice-timing", context: "script-load", label: e };
          },
          m = (e) =>
            e ? p({ label: "alice-error-".concat(e, "-missing") }) : void 0;
        var b = (e) => {
          if (!e || !f(e)) return !1;
          {
            const { name: t, context: n, label: r } = e;
            (0, d.hX)(t, "", r, n);
          }
        };
        const g = { withCookie: !1 };
        function v(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function w(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? v(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var y = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { User: {}, Asset: {} };
          return new Promise((t) => {
            const n = [r, o, i],
              { User: a = {}, Asset: s = {}, als_test_clientside: c } = e,
              l = Object.entries(a).filter((e) => {
                let [t] = e;
                return n.includes(t);
              }),
              u = Object.fromEntries(l),
              d = ["plat", "prop"],
              f = Object.entries(s).filter((e) => {
                let [t] = e;
                return !d.includes(t);
              });
            return t(
              w(
                w(w({}, Object.fromEntries(f)), u),
                c ? { als_test_clientside: c } : {}
              )
            );
          });
        };
        const h = (e, t) => {
            if (!f(e)) return !1;
            Object.entries(e).forEach((e) => {
              let [n, r] = e;
              f(r) ? h(r, t) : t(n, r);
            });
          },
          O = (e, t) => {
            "" === t &&
              b(
                ((e) =>
                  e
                    ? p({ label: "alice-error-".concat(e, "-undefined") })
                    : void 0)(e)
              );
          };
        var P = (e) => {
            const { Asset: t, User: n } = e;
            if ((t || b(m("Asset")), n)) {
              const { bt: e } = n;
              null == e && b(m("bt"));
            } else b(m("User"));
            return h(e, O), Promise.resolve(e);
          },
          j = (e) => {
            var t;
            let { prop: n, plat: s, typ: c } = e;
            ((e) =>
              new Promise((t, n) => {
                try {
                  t({
                    [a]: e.getItem(a) || "null",
                    [o]: e.getItem(o) || "null",
                    [r]: e.getItem(r) || "null",
                    [i]: e.getItem(i) || "null",
                  });
                } catch (e) {
                  n(e);
                }
              }))(window.localStorage)
              .then(l)
              .then(u)
              .catch(console.warn)
              .catch(console.warn);
            const {
                origin: f,
                pathname: m,
                host: v,
                search: w,
              } = (null === (t = window) || void 0 === t
                ? void 0
                : t.location) || {},
              h = ((e) => {
                let {
                  origin: t = "",
                  pathname: n = "",
                  search: r,
                  prop: o = "",
                  plat: i = "",
                  typ: a = "",
                } = e;
                return {
                  alice_rules_test: new URLSearchParams(r).get(
                    "alice_rules_test"
                  ),
                  uri: t + n,
                  prop: o,
                  plat: i,
                  typ: a,
                };
              })({
                origin: f,
                pathname: m,
                search: w,
                prop: n,
                plat: s,
                typ: c,
              }),
              O = ((e, t) => {
                const n = new URL(
                    "www.nytimes.com" === e
                      ? "https://als-svc.nytimes.com/als"
                      : "https://als-svc.dev.nytimes.com/als"
                  ),
                  r = Object.entries(t || {}).filter((e) => {
                    let [t, n] = e;
                    return null != n;
                  });
                return (n.search = new URLSearchParams(r).toString()), n.href;
              })(v, h);
            ((e, t) =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : g;
                return d.Be.get(e, t);
              })(e)
                .then(P)
                .then(y)
                .then(l)
                .then(u)
                .then(
                  ((e) =>
                    function () {
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return new Promise((n, s) => {
                        const c = [r, o, i, a];
                        Object.entries(t).forEach((t) => {
                          let [n, r] = t;
                          if (c.includes(n))
                            try {
                              const t = n === a ? "ls-".concat(r) : r;
                              e.setItem(n, String(t));
                            } catch (e) {
                              return s(e);
                            }
                        }),
                          n(t);
                      });
                    })(window.localStorage)
                )
                .catch(() => {
                  b(
                    ((e) =>
                      e
                        ? p({ label: "alice-error-reqfail-".concat(e) })
                        : void 0)(t)
                  );
                }))(O, h.uri).catch(console.warn);
          };
      },
      85899: function (e, t, n) {
        const r = [
          "appnexus",
          "medianet",
          "rubicon",
          "openx",
          "triplelift",
          "pubmatic",
          "ix",
        ];
        t.Z = function (e) {
          return "1_Criteo" === e ? [...r, "criteo"] : r;
        };
      },
      49808: function (e, t) {
        t.Z = (e) => {
          var t;
          const n = (null == e ? void 0 : e.adUnitPath) || "default";
          return "crossword" !== n
            ? n
            : "mini" ===
              (null == e || null === (t = e.gameData) || void 0 === t
                ? void 0
                : t.stream)
            ? "mini"
            : "daily";
        };
      },
      51319: function (e, t, n) {
        function r(e) {
          var t;
          const n = (null == e ? void 0 : e.adUnitPath) || "default";
          return "crossword" !== n
            ? n
            : "mini" ===
              (null == e || null === (t = e.gameData) || void 0 === t
                ? void 0
                : t.stream)
            ? "mini"
            : "crossword";
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      28395: function (e, t, n) {
        n.d(t, {
          zk: function () {
            return c;
          },
        });
        const r = "fluid",
          o = [[0, [r, [300, 250], [300, 600]]]],
          i = [[0, [r, [300, 250]]]],
          a = [
            [990, [r, [728, 90], [970, 90], [970, 250], [1605, 300]]],
            [750, [r, [728, 90], [1605, 300]]],
            [0, [r, [300, 250], [300, 420]]],
          ];
        t.ZP = function () {
          return "wordle" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "default")
            ? {
                default: a,
                intsl:
                  (arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 736) > 735
                    ? o
                    : i,
              }
            : { default: a };
        };
        const s = {
            "ad-top": {
              large: [
                [728, 90],
                [970, 90],
                [970, 250],
                [1605, 300],
              ],
              medium: [
                [728, 90],
                [1605, 300],
              ],
              small: [
                [300, 250],
                [300, 420],
              ],
            },
            intsl: {
              large: [
                [728, 90],
                [970, 90],
                [970, 250],
                [1605, 300],
              ],
              medium: [
                [728, 90],
                [1605, 300],
              ],
              small: [
                [300, 250],
                [300, 420],
              ],
            },
          },
          c = (e, t) => e.map((e) => s[e][t]);
      },
      94021: function (e, t, n) {
        n.d(t, {
          C: function () {
            return o;
          },
        });
        let r = (function (e) {
          return (
            (e.LARGE = "large"), (e.MEDIUM = "medium"), (e.SMALL = "small"), e
          );
        })({});
        function o() {
          return window.matchMedia("(min-width: 970px)").matches
            ? r.LARGE
            : window.matchMedia("(min-width: 700px)").matches
            ? r.MEDIUM
            : r.SMALL;
        }
      },
      40821: function (e, t, n) {
        var r = n(94021);
        const o = { small: "mweb", default: "web" };
        t.Z = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
          return e[(0, r.C)()] || e.default || o.default;
        };
      },
      45873: function (e, t, n) {
        var r = n(94021);
        const o = { small: "mnyt", default: "nyt" };
        t.Z = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
          return e[(0, r.C)()] || e.default || o.default;
        };
      },
      84329: function (e, t) {
        const n = "".concat(Math.ceil(Math.random() * Math.floor(4)));
        t.Z = n;
      },
      59924: function (e, t) {
        t.Z = (e) => {
          switch (e) {
            case 0:
              return "small";
            case 1:
              return "medium";
            default:
              return "large";
          }
        };
      },
      73972: function (e, t, n) {
        n.d(t, {
          Fs: function () {
            return u;
          },
          YU: function () {
            return l;
          },
        });
        var r = n(65489);
        function o(e, t, n, r, o, i, a) {
          try {
            var s = e[i](a),
              c = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        const i = "GAMES_ATS_0506",
          a = "liveramp_script",
          s = (function () {
            var e,
              t =
                ((e = function* (e) {
                  const t = new TextEncoder().encode(e),
                    n = yield crypto.subtle.digest("SHA-256", t);
                  return Array.from(new Uint8Array(n))
                    .map((e) => e.toString(16).padStart(2, "0"))
                    .join("");
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, i) {
                    var a = e.apply(t, n);
                    function s(e) {
                      o(a, r, i, s, c, "next", e);
                    }
                    function c(e) {
                      o(a, r, i, s, c, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          c = () => {
            var e;
            if (
              (r.abra.getVariant(i) && r.abra.reportExposure(i),
              "1_Variant" !== r.abra.getVariant(i))
            )
              return !1;
            const t =
                "rdp" !==
                (null === (e = window) ||
                void 0 === e ||
                null === (e = e.purrDirectives) ||
                void 0 === e
                  ? void 0
                  : e.PURR_AdConfiguration_v3),
              n = [
                window.gamesAppPlatform,
                window.newsreaderAppPlatform,
              ].includes("ios");
            return t && !n;
          },
          l = () => {
            if (!c() || document.getElementById(a)) return;
            const e = document.createElement("link");
            (e.href =
              "https://launchpad.privacymanager.io/latest/launchpad.bundle.js"),
              (e.as = "script"),
              document.body.appendChild(e);
            const t = document.createElement("script");
            (t.id = a),
              (t.async = !1),
              (t.defer = !0),
              (t.src =
                "https://launchpad-wrapper.privacymanager.io/9fab0bf6-df63-42ca-acc5-caf4de668f40/launchpad-liveramp.js"),
              document.body.appendChild(t);
          },
          u = (e) => {
            if (!c() || !e) return;
            const t = () => {
              s(e).then((e) => {
                var t;
                null === (t = window.ats) ||
                  void 0 === t ||
                  t.setAdditionalData({ id: [e], type: "emailHashes" });
              });
            };
            window.ats
              ? t()
              : window.addEventListener("envelopeModuleReady", t);
          };
      },
      88307: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return l;
          },
        });
        const r = /^wordle$/;
        var o = (e) => !r.test(e),
          i = n(28395),
          a = n(94021);
        const s = window.isMobileDevice ? ["intsl"] : ["ad-top"],
          c = (e) => {
            const t = (0, a.C)(),
              n = (0, i.zk)(s, t);
            return {
              pageName: e,
              fastFetchSlots: s.map((e, t) => ({ id: e, sizes: n[t] })),
            };
          };
        var l = function () {
          let { loadScripts: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = arguments.length > 2 ? arguments[2] : void 0;
          e &&
            e({
              pageType: "games",
              section: "crosswords",
              setFastFetch: !0,
              loadPrebid: o(t),
              prebidOverrides: { activeBidders: n },
              amazonOverrides: c(t),
            });
        };
      },
      48198: function (e, t, n) {
        n.d(t, {
          JU: function () {
            return o;
          },
          WL: function () {
            return a;
          },
          uL: function () {
            return i;
          },
          win: function () {
            return r;
          },
        });
        const r = window,
          o = document,
          i = encodeURIComponent,
          a = localStorage;
      },
      74395: function (e, t, n) {
        var r = n(48198),
          o = n(10431);
        t.Z = () => {
          "ontouchstart" in r.win ||
            r.win.DocumentTouch ||
            (0, o.cn)(r.JU.documentElement, "pz-dont-touch");
        };
      },
      63682: function (e, t, n) {
        n.d(t, {
          _: function () {
            return s;
          },
          g: function () {
            return a;
          },
        });
        var r = n(41586);
        const o = {
            linkCANotice: "california notices link",
            linkOptOut: "DNSS opt-out link",
          },
          i = {},
          a = (e) => {
            const t = e.target,
              n = (null == t ? void 0 : t.getAttribute("data-region")) || "",
              i = (null == t ? void 0 : t.getAttribute("data-track")) || "",
              a =
                (null == t ? void 0 : t.getAttribute("data-label")) ||
                t.textContent;
            (0, r.j)("moduleInteraction", {
              eventData: { pagetype: "game", trigger: "module", type: "click" },
              module: { name: o[i], label: a, region: n },
            });
          },
          s = (e) => {
            var t, n;
            const a =
                (null === (t = e.target) || void 0 === t
                  ? void 0
                  : t.getAttribute("data-region")) || "",
              s =
                (null === (n = e.target) || void 0 === n
                  ? void 0
                  : n.getAttribute("data-track")) || "",
              c = e.target.textContent;
            i["".concat(a, "-").concat(s)] ||
              ((0, r.j)("impression", {
                module: { name: o[s], label: c, region: a },
              }),
              (i["".concat(a, "-").concat(s)] = !0));
          };
      },
      72811: function (e, t, n) {
        var r = n(82985);
        t.Z = (e) => {
          const {
              applicationId: t,
              clientToken: n,
              environment: o,
              release: i,
            } = e,
            a = ((e) => {
              if ("prod" !== e) return 100;
              const { pathname: t } = window.location;
              return t.includes("/wordle")
                ? 0.005
                : t.includes("/spelling-bee") || t.includes("/connections")
                ? 0.01
                : t.includes("/crosswords/game")
                ? 0
                : 0.01;
            })(o);
          "dev" !== o &&
            t &&
            n &&
            (r.v.init({
              applicationId: t,
              clientToken: n,
              site: "datadoghq.com",
              service: "games-phoenix",
              env: o,
              version: i,
              sessionSampleRate: a,
              sessionReplaySampleRate: 1,
              trackUserInteractions: !0,
              trackResources: !0,
              trackLongTasks: !0,
              defaultPrivacyLevel: "mask-user-input",
            }),
            r.v.setGlobalContextProperty("nyt", {
              billing: {
                environment: o,
                deployment: { id: "gcp-nyt-dv-shared-prd" },
              },
            }));
        };
      },
      67719: function (e, t, n) {
        n.d(t, {
          U: function () {
            return c;
          },
          q: function () {
            return l;
          },
        });
        var r = n(53789),
          o = n(22042),
          i = n(48198),
          a = n(93251);
        const s = i.win.navigator,
          c = (0, o.y5)(
            () => a.B.get("/puzzles/device"),
            i.WL,
            "pz-device",
            s.userAgent
          ),
          l = () => {
            i.win.isCacheSafe ||
              r.tq ||
              !(
                /iPad/.test(s.platform) ||
                ("MacIntel" === s.platform && s.maxTouchPoints > 1)
              ) ||
              ((i.JU.cookie = "inferredIpad=true;domain=nytimes.com;"),
              i.win.location.reload());
          };
      },
      31069: function (e, t, n) {
        n.d(t, {
          IX: function () {
            return p;
          },
          wC: function () {
            return f;
          },
        });
        var r = n(79545),
          o = n(67719),
          i = n(22042),
          a = n(12058),
          s = n(10431),
          c = n(48198),
          l = n(41586),
          u = n(88093);
        const d = "mailto:nytgames@nytimes.com",
          f = (e, t, n) =>
            Promise.all([o.U.get()])
              .then((o) => {
                let [s] = o;
                return ((e, t, n, o) => {
                  const s = a.Z.current,
                    l = "".concat(n, " (").concat(s.slice(-6), ")"),
                    u = (null == o ? void 0 : o.testName) || "None",
                    f = (null == o ? void 0 : o.activeVariant) || "None",
                    { screen: p } = c.win,
                    m = c.JU.documentElement,
                    b = new Date().getTimezoneOffset(),
                    { used: g, remaining: v } = (0, r.z)(),
                    w = [
                      c.win.location.pathname,
                      p.width,
                      p.height,
                      m.clientWidth,
                      m.clientHeight,
                      "UTC".concat(b > 0 ? "" : "+").concat(b / -60),
                      e.regiId ? e.regiId : "anon",
                      null != e && e.hasDigi ? "Yes" : "No",
                      null != e && e.hasXwd ? "Yes" : "No",
                      s,
                      g,
                      v,
                      u,
                      f,
                    ];
                  let y = t.feedback;
                  const h = /%s/;
                  let O = 0;
                  for (y = y.replace("\nHd: %s", ""); O < w.length; )
                    (y = y.replace(h, w[O].toString())), (O += 1);
                  return d + (0, i.B2)({ subject: l, body: y });
                })(t, s, e, n);
              })
              .catch(() => d),
          p = () => {
            (() => {
              const e = [
                  ...document.querySelectorAll(
                    ".".concat((0, i.iU)("footer-tracking"))
                  ),
                ],
                t = (0, i.j0)();
              e.forEach((e) => {
                var n, r, o;
                const i =
                    (null == e || null === (n = e.dataset) || void 0 === n
                      ? void 0
                      : n.trackLabel) || "",
                  a =
                    null == e || null === (r = e.dataset) || void 0 === r
                      ? void 0
                      : r.medium,
                  s =
                    null == e || null === (o = e.dataset) || void 0 === o
                      ? void 0
                      : o.source;
                i &&
                  e.addEventListener("click", (e) => {
                    (0, l.ob)({
                      name: t,
                      label: i,
                      useBeacon: !0,
                      context: null,
                      medium: a,
                      source: s,
                    });
                  });
              });
            })(),
              (() => {
                if ("show" === (0, u.Xy)().PURR_FidesTCF) {
                  const e = document.getElementById(
                    (0, i.iU)("privacy-preferences-link")
                  );
                  if (!e) return;
                  e.classList.add("fides-tcf-manage");
                }
              })(),
              (() => {
                const e = (0, s.rI)(
                  (0, i.iU)("manage-privacy-preferences-link")
                );
                e &&
                  e.addEventListener("click", () => {
                    (0, l.j)("moduleInteraction", {
                      eventData: { trigger: "module", type: "click" },
                      module: {
                        name: "manage_privacy_prefs",
                        label: "manage_privacy_prefs",
                        region: "footer",
                      },
                    });
                  });
              })();
          };
      },
      28229: function (e, t) {
        t.Z =
          ((window.hybridDebug = window.hybridDebug || []),
          (e, t, n) => {
            window.hybridDebug.length > 30 && window.hybridDebug.pop(),
              window.hybridDebug.unshift({ message: e, args: t, response: n });
          });
      },
      27489: function (e, t, n) {
        n.d(t, {
          N: function () {
            return i.N1;
          },
          Z: function () {
            return O;
          },
        });
        var r = n(80320),
          o = n(28229),
          i = n(39385),
          a = (e) => {
            (0, o.Z)("No android-specific tasks defined");
          },
          s = n(43401),
          c = (e) => {
            (0, s.mo)() && e.setPullToRefreshEnabled(!1);
          };
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const d = {
            isUserLoggedIn: !0,
            isSubscribed: !0,
            regiID: 131999385,
            email: "sub.email@nytimes.com",
          },
          f = {
            isUserLoggedIn: !0,
            isSubscribed: !1,
            regiID: 131999385,
            email: "regi.email@nytimes.com",
          },
          p = { isUserLoggedIn: !1, isSubscribed: !1, regiID: 0, email: "" },
          m = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : window;
            switch (new URLSearchParams(e.location.search).get("user")) {
              case "sub":
                return d;
              case "regi":
                return f;
              default:
                return p;
            }
          },
          b = { success: !0 },
          g = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : window;
            const t = m(e);
            return u(
              u({}, b),
              {},
              { values: { gamesAuthenticateUser: u({}, t), aborted: !1 } }
            );
          },
          v = u(
            u({}, b),
            {},
            { values: { contextID: "mock contextID from mock bridge" } }
          ),
          w = u(
            u({}, b),
            {},
            { values: { pageViewID: "mock PVID from mock bridge" } }
          ),
          y = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : window;
            const t = m(e);
            return u(
              u({}, b),
              {},
              { values: { gamesGetUserDetails: u({}, t) } }
            );
          },
          h = u(
            u({}, b),
            {},
            {
              values: {
                gamesInitializeState: { isReturningFromBackground: !1 },
              },
            }
          );
        var O = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window;
          if (
            (function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : document;
              return (
                -1 !==
                (
                  (null == t || null === (e = t.location) || void 0 === e
                    ? void 0
                    : e.search.toLowerCase()) || ""
                ).indexOf("bridge=mock")
              );
            })()
          )
            !(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window;
              const t = m(e),
                n = (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : window;
                  const { NativeBridge: n, callNativeBridgeCommand: r } =
                      (function () {
                        let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : window;
                        return {
                          NativeBridge: {},
                          callNativeBridgeCommand: function (t) {
                            for (
                              var n = arguments.length,
                                r = new Array(n > 1 ? n - 1 : 0),
                                o = 1;
                              o < n;
                              o++
                            )
                              r[o - 1] = arguments[o];
                            switch (
                              (console.log(
                                "[NATIVE BRIDGE MOCK]: ".concat(
                                  t,
                                  " called by web app"
                                ),
                                r
                              ),
                              t)
                            ) {
                              case i.m$:
                                return (
                                  console.log(
                                    "[NATIVE BRIDGE MOCK]: ".concat(
                                      t,
                                      " responded with"
                                    ),
                                    h
                                  ),
                                  Promise.resolve(h)
                                );
                              case i.Jx:
                                return (
                                  console.log(
                                    "[NATIVE BRIDGE MOCK]: ".concat(
                                      t,
                                      " responded with"
                                    ),
                                    v
                                  ),
                                  Promise.resolve(v)
                                );
                              case i.CY:
                                return (
                                  console.log(
                                    "[NATIVE BRIDGE MOCK]: ".concat(
                                      t,
                                      " responded with"
                                    ),
                                    w
                                  ),
                                  Promise.resolve(w)
                                );
                              case i.OD:
                                return (
                                  console.log(
                                    "[NATIVE BRIDGE MOCK]: ".concat(
                                      t,
                                      " responded with"
                                    ),
                                    y(e)
                                  ),
                                  Promise.resolve(y(e))
                                );
                              case i.kU:
                                return (
                                  console.log(
                                    "[NATIVE BRIDGE MOCK]: ".concat(
                                      t,
                                      " responded with"
                                    ),
                                    g(e)
                                  ),
                                  Promise.resolve(g(e))
                                );
                              default:
                                return (
                                  console.log(
                                    "[NATIVE BRIDGE MOCK]: ".concat(
                                      t,
                                      " responded with"
                                    ),
                                    b
                                  ),
                                  Promise.resolve(b)
                                );
                            }
                          },
                        };
                      })(t),
                    o = (0, i.N$)(r);
                  return (
                    e.forEach((e) => {
                      n[e] = o[e];
                    }),
                    n
                  );
                })(i.yL, e);
              e.hybridConfig = {
                OS: "Mock OS",
                AbraConfig: {},
                AdRequirements: { prop: "", plat: "" },
                userInfo: u(u({}, t), {}, { agentID: "mock-agent-id" }),
              };
              let r = null;
              (n.addEventListener = (e, t, n) => {
                r || (r = new EventTarget()), r.addEventListener(e, t, n);
              }),
                (n.removeEventListener = (e, t, n) => {
                  r && (r.removeEventListener(e, t, n), (r = null));
                }),
                (n.dispatchEvent = (e) => {
                  if (r) {
                    const t = new Event(e);
                    (t.respondWith = (t) => {
                      console.log(
                        "[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"),
                        t
                      );
                    }),
                      r.dispatchEvent(t);
                  }
                }),
                (0, s.Og)()
                  ? a()
                  : (0, s.Ys)()
                  ? c(n)
                  : console.log(
                      "[NATIVE BRIDGE MOCK]: Platform is neither android nor ios",
                      e.newsreaderAppPlatform,
                      e.gamesAppPlatform
                    ),
                (e.NativeBridge = n);
            })(e);
          else if (
            (function () {
              return (
                (arguments.length > 0 && void 0 !== arguments[0]) || window,
                (0, s.Og)() || (0, s.Ys)()
              );
            })()
          ) {
            (0, o.Z)("Initializing native bridge");
            try {
              !(function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : window;
                const t = (function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : window,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                  !(function () {
                    (arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window
                    ).asset = { uri: "fakeAssetUri" };
                  })(e),
                    (function () {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : window,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                      (e.navigator.native = { bridgeCommands: {} }),
                        t.forEach((t) => {
                          e.navigator.native.bridgeCommands[t] = {
                            enabled: !0,
                          };
                        });
                    })(e, t);
                  const { NativeBridge: n, callNativeBridgeCommand: a } =
                      (function () {
                        let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : window;
                        const t = (0, r.P)(e, !0),
                          { callNativeBridgeCommand: n } = t;
                        return { NativeBridge: t, callNativeBridgeCommand: n };
                      })(e),
                    s = (0, i.N$)(function (e) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          r = 1;
                        r < t;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      const i = a(e, ...n);
                      return (
                        (0, o.Z)(
                          "Executing native bridge command: ".concat(e),
                          n,
                          i
                        ),
                        i
                      );
                    });
                  return (
                    t.forEach((e) => {
                      n[e] = s[e];
                    }),
                    n
                  );
                })(e, i.yL);
                (0, s.Og)()
                  ? a()
                  : (0, s.Ys)()
                  ? c(t)
                  : (0, o.Z)("Platform is neither android nor ios", [
                      e.newsreaderAppPlatform,
                      e.gamesAppPlatform,
                    ]),
                  (e.NativeBridge = t);
              })(e);
            } catch (e) {
              (0, o.Z)("Failed to initialize native bridge", [e]);
            }
          } else (0, o.Z)("Neither mock nor native bridge initialized");
        };
      },
      86023: function (e, t, n) {
        var r = n(48198);
        const o = "__viewers__";
        let i;
        "IntersectionObserver" in r.win &&
          "IntersectionObserverEntry" in r.win &&
          "intersectionRatio" in r.win.IntersectionObserverEntry.prototype &&
          ("isIntersecting" in r.win.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
              r.win.IntersectionObserverEntry.prototype,
              "isIntersecting",
              {
                get() {
                  return this.intersectionRatio > 0;
                },
              }
            ),
          (r.win.__observeInView__ = !0)),
          (t.Z = (e, t) => {
            var n;
            window.__observeInView__ &&
              (i ||
                (i = new r.win.IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      var t;
                      e.isIntersecting &&
                        (null === (t = e.target[o]) ||
                          void 0 === t ||
                          t.forEach((t) => t(e)));
                    });
                  },
                  { threshold: 0.4 }
                )),
              e[o]
                ? null === (n = e[o]) || void 0 === n || n.push(t)
                : ((e[o] = [t]), i.observe(e)));
          });
      },
      88093: function (e, t, n) {
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        n.d(t, {
          Xy: function () {
            return i;
          },
        });
        const i = () => {
          const e = (() => {
            let e;
            var t;
            return (
              document.cookie.indexOf("nyt-purr") > -1 &&
                (e =
                  null ===
                    (t = document.cookie
                      .split("; ")
                      .find((e) => e.startsWith("nyt-purr="))) || void 0 === t
                    ? void 0
                    : t.split("=")[1]),
              e
            );
          })();
          return (
            (window.purrDirectives = {}),
            Object.keys(window.purrDirectiveFormat).reduce(
              (t, n) => {
                const r = window.purrDirectiveFormat[n];
                try {
                  const i =
                    (() => {
                      const e = window.location.search.substring(1).split("&");
                      let t,
                        n = {};
                      return (
                        e.forEach((e) => {
                          (t = e.split("=")),
                            (n[decodeURIComponent(t[0])] = decodeURIComponent(
                              t[1] || ""
                            ));
                        }),
                        n
                      );
                    })()[r.queryParam] || r.values[e[r.index]];
                  return (
                    window.purrDirectives && (window.purrDirectives[n] = i),
                    o(o({}, t), {}, { [n]: i })
                  );
                } catch (e) {
                  return (
                    window.purrDirectives &&
                      (window.purrDirectives[n] = r.default),
                    o(o({}, t), {}, { [n]: r.default })
                  );
                }
              },
              {
                PURR_DataSaleOptOutUI_v2: "hide",
                PURR_CaliforniaNoticesUI: "hide",
                PURR_AdConfiguration_v3: "full",
                PURR_LimitSensitivePI: "hide",
                PURR_TOSBlocker_v1: "hide",
                PURR_FidesTCF: "hide",
              }
            )
          );
        };
      },
      29614: function (e, t, n) {
        n.d(t, {
          W: function () {
            return r;
          },
          a: function () {
            return o;
          },
        });
        const r = [
            "amazon-adsystem",
            "ads-us",
            "amp4ads",
            "pubads",
            "prebid",
            "2mdn",
            "ampproject",
            "chartbeat",
            "gsi",
            "bk_addPageCtx",
            "yimg",
            "BOOMR",
            "boomerang",
            "gtm",
            "google_tag_manager",
            "scorecardresearch",
            "('video')[0].childNodes",
            "webkitExitFullScreen",
            "ORA",
            "Event Tracker",
            "ceCurrentVideo.currentTime",
            "_pageTimings",
            "Unexpected token '<'",
            "Options is missing a key",
            "reading 'campaign'",
            "setConfig is not a function",
            "kdmw",
            "sourceAgnosticCreativeId",
            "slot.getResponseInformation",
            "cb is not a function",
            "newBid",
            "websredir",
            "getContainer().ownerDocument",
            "safari-extension",
            "safari-web-extension",
            "moz-extension",
            "chrome-extension",
            "promiseReactionJob",
            "setIOSParameters",
            "onInitNativeAds",
            "adsDisabled",
            "messageHandlers",
            "isNil",
            "Object.fromEntries is not a function",
            "SymBrowser_ModifyWindowOpenWithTarget",
            "unknownParameters",
            "safari.pushNotification",
            "bad req",
            "No Internet",
            "Failed to fetch",
            "Load failed",
            "timed out",
            "Something went wrong",
            "Unexpected EOF",
            "failed to process puzzle",
            "SUDOKU FAILED",
            "Illegal invocation",
            "No root config found",
            "webkit-masked-url",
            /share/i,
            "feature toggles accessed before being set",
            "Non-Error promise rejection captured",
            "QuotaExceededError",
            /database/i,
            /div:has\(> iframe\[id=/i,
          ],
          o = [/^https:\/\/(www|local)\.(stg\.)?nytimes\.com/];
      },
      40040: function (e, t, n) {
        n.d(t, {
          un: function () {
            return i;
          },
          LF: function () {
            return d;
          },
          Dz: function () {
            return s;
          },
          ce: function () {
            return l;
          },
        });
        var r = n(22272);
        function o(e, t, n) {
          var r;
          return (
            (t =
              "symbol" ==
              typeof (r = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(t))
                ? r
                : r + "") in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class i {
          constructor() {
            o(this, "name", "HybridMetaData"),
              o(this, "setupOnce", () => {
                if (
                  (r.v("hybrid", {
                    isHybridWebView: window.isHybridWebView,
                    newsreaderAppPlatform: window.newsreaderAppPlatform,
                    gamesAppPlatform: window.gamesAppPlatform,
                    isPlayTab: window.isPlayTab,
                  }),
                  window.isHybridWebView && r.YA("hybrid", !0),
                  window.newsreaderAppPlatform || window.gamesAppPlatform)
                ) {
                  const e = window.newsreaderAppPlatform
                    ? "newsreader-".concat(window.newsreaderAppPlatform)
                    : "games-".concat(window.gamesAppPlatform);
                  r.YA("app", e);
                } else r.YA("app", "web");
              });
          }
        }
        function a(e, t, n) {
          var r;
          return (
            (t =
              "symbol" ==
              typeof (r = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(t))
                ? r
                : r + "") in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        o(i, "id", "HybridMetaData");
        class s {
          constructor() {
            a(this, "name", "OfflineLogger"),
              a(this, "setupOnce", () => {
                window.addEventListener("offline", () => {
                  r.n_({
                    message: "The user has gone offline",
                    level: "warning",
                  });
                }),
                  window.addEventListener("online", () => {
                    r.n_({
                      message: "The user has returned online",
                      level: "warning",
                    });
                  });
              });
          }
        }
        function c(e, t, n) {
          var r;
          return (
            (t =
              "symbol" ==
              typeof (r = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(t))
                ? r
                : r + "") in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        a(s, "id", "OfflineLogger");
        class l {
          constructor(e) {
            let { sampleRate: t, environment: n } = e;
            c(this, "name", "RouteSampler"),
              c(this, "sampleRate", 0),
              c(this, "environment", ""),
              c(this, "setupOnce", () => {}),
              c(this, "getPathName", (e) => {
                var t;
                let n = new URL(window.location.href);
                return n.pathname
                  ? n.pathname
                  : e.transaction
                  ? e.transaction
                  : null !== (t = e.request) &&
                    void 0 !== t &&
                    t.url &&
                    ((n = new URL(
                      null === (r = e.request) || void 0 === r ? void 0 : r.url
                    )),
                    n.pathname)
                  ? n.pathname
                  : "";
                var r;
              }),
              c(this, "getPathSampleRate", (e) =>
                e
                  ? e.includes("/wordle")
                    ? 0.1
                    : e.includes("/spelling-bee")
                    ? 0.25
                    : e.includes("/connections")
                    ? 0.1
                    : e.includes("/crosswords/game/daily")
                    ? 0.25
                    : 0.3
                  : 0.3
              ),
              c(this, "getRouteTag", (e) => {
                switch (!0) {
                  case /games\/wordle/.test(e):
                    return "wordle";
                  case /puzzles\/spelling-bee/.test(e):
                    return "spelling-bee";
                  case /games\/connections/.test(e):
                    return "connections";
                  case /puzzles\/vertex/.test(e):
                    return "vertex";
                  case /puzzles\/tiles/.test(e):
                    return "tiles";
                  case /puzzles\/sudoku/.test(e):
                    return "sudoku";
                  case /puzzles\/letter-boxed/.test(e):
                    return "letter-boxed";
                  case /leaderboards/.test(e):
                    return "leaderboards";
                  case /crosswords\/game\/daily/.test(e):
                    return "crossword";
                  case /crosswords\/game\/mini/.test(e):
                    return "mini";
                  case /crosswords\/archive/.test(e):
                    return "archive";
                  case /crosswords/.test(e):
                    return "hub";
                  default:
                    return "other";
                }
              }),
              (this.sampleRate = t),
              (this.environment = n);
          }
          processEvent(e) {
            if ("prod" !== this.environment) return e;
            const t = this.getPathName(e);
            r.YA("route", this.getRouteTag(t));
            const n = 100 * this.getPathSampleRate(t);
            return Math.floor(100 * Math.random()) + 1 <= n ? e : null;
          }
        }
        function u(e, t, n) {
          var r;
          return (
            (t =
              "symbol" ==
              typeof (r = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(t))
                ? r
                : r + "") in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        c(l, "id", "RouteSampler");
        class d {
          constructor() {
            u(this, "name", "NoiseFilter"),
              u(this, "filter", [
                /ads\/.*/,
                /aax2\/apstag/,
                /newBid/,
                /cfg\.slots/,
                /tpcserve/,
                /3lift/,
                /adsrvr/,
                /rubiconproject/,
                /acexedge/,
              ]),
              u(this, "setupOnce", () => {});
          }
          runThroughStackTraces(e) {
            var t;
            let n = !1;
            return (
              null == e ||
                null === (t = e.stacktrace) ||
                void 0 === t ||
                null === (t = t.frames) ||
                void 0 === t ||
                t.forEach((e) => {
                  this.filter.forEach((t) => {
                    var r, o;
                    ((null !== (r = e.filename) &&
                      void 0 !== r &&
                      r.match(t)) ||
                      (null !== (o = e.function) &&
                        void 0 !== o &&
                        o.match(t))) &&
                      (n = !0);
                  });
                }),
              n
            );
          }
          processEvent(e) {
            var t;
            let n = !1;
            return (
              null == e ||
                null === (t = e.exception) ||
                void 0 === t ||
                null === (t = t.values) ||
                void 0 === t ||
                t.forEach((e) => {
                  n = this.runThroughStackTraces(e);
                }),
              n ? null : e
            );
          }
        }
        u(d, "id", "NoiseFilter");
      },
      93251: function (e, t, n) {
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        n.d(t, {
          B: function () {
            return c;
          },
        });
        const i = "json",
          a = { withCredentials: !0, responseType: i },
          s = function (e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            const r = o(o({}, a), n),
              { isSync: s = !1 } = r;
            return new Promise((n, o) => {
              var a;
              if (
                !(
                  (null !== (a = window) &&
                    void 0 !== a &&
                    a.isHybridWebView) ||
                  navigator.onLine
                )
              )
                return o(new Error("No internet"));
              const c = new XMLHttpRequest();
              if (
                (c.open(e, t, !s),
                (c.withCredentials = !!r.withCredentials),
                s || (c.timeout = 5e3),
                (c.ontimeout = () => {
                  o(
                    new Error(
                      "".concat(e, " request to ").concat(t, " timed out")
                    )
                  );
                }),
                c.setRequestHeader(
                  "Content-type",
                  r.data
                    ? "application/json"
                    : "application/x-www-form-urlencoded"
                ),
                r.headers)
              ) {
                const { headers: e } = r;
                Object.keys(e).forEach((t) => {
                  c.setRequestHeader(t, e[t]);
                });
              }
              (c.onload = () => {
                try {
                  const e = c.responseText;
                  if (e && r.responseType === i) {
                    const t = JSON.parse(e);
                    r.withStatus && (t.status = c.status), n(t);
                  } else n(e);
                } catch (e) {
                  o(new Error("Something went wrong"));
                }
              }),
                c.addEventListener("error", (e) =>
                  o(
                    ((e) => {
                      if (e.status < 400) return;
                      const t = new Error("bad req");
                      return (t.status = e.status), t;
                    })(e)
                  )
                ),
                c.send(r.data && JSON.stringify(r.data));
            });
          },
          c = {
            get: (e, t) => s("GET", e, t),
            post: (e, t, n) => s("POST", e, o(o({}, n), {}, { data: t })),
            put: (e, t, n) => s("PUT", e, o(o({}, n), {}, { data: t })),
            delete: (e, t) => s("DELETE", e, t),
            request: s,
          };
      },
      67882: function (e, t, n) {
        n.d(t, {
          M: function () {
            return i;
          },
        });
        var r = n(89526),
          o = n(88093);
        const i = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          const n = document.querySelector("body");
          n && (n.classList.remove(...t), n.classList.add(...e));
        };
        t.Z = function () {
          return (
            (0, r.useEffect)(() => {
              const e = (0, o.Xy)(),
                t = [];
              e.PURR_AdConfiguration_v3 &&
                t.push(
                  "pz-purr-adconfiguration-".concat(e.PURR_AdConfiguration_v3)
                ),
                e.PURR_CaliforniaNoticesUI &&
                  t.push(
                    "pz-purr-californianotices-".concat(
                      e.PURR_CaliforniaNoticesUI
                    )
                  ),
                e.PURR_DataSaleOptOutUI_v2 &&
                  t.push(
                    "pz-purr-datasaleoptout-".concat(
                      "hide" === e.PURR_DataSaleOptOutUI_v2 ? "hide" : "show"
                    )
                  ),
                e.PURR_LimitSensitivePI &&
                  t.push(
                    "pz-purr-limitsensitivepi-".concat(e.PURR_LimitSensitivePI)
                  ),
                e.PURR_FidesTCF &&
                  t.push(
                    "pz-purr-fidestcf-".concat(
                      "hide" === e.PURR_FidesTCF ? "hide" : "show"
                    )
                  ),
                i(t, ["pz-loading"]);
            }, []),
            {
              setUserType: function (e) {
                const t = [],
                  n = ["pz-user-loading"];
                e.hasXwd
                  ? (t.push("pz-sub"),
                    e.hasDigi && t.push("pz-ada"),
                    n.push("pz-anon"))
                  : e.hasDigi
                  ? (t.push("pz-digi"), n.push("pz-anon"))
                  : e.isLoggedIn
                  ? (t.push("pz-regi"), n.push("pz-anon"))
                  : t.push("pz-anon"),
                  i(t, n);
              },
              update: i,
            }
          );
        };
      },
      63482: function (e, t, n) {
        n.d(t, {
          E: function () {
            return b;
          },
        });
        var r = n(89526),
          o = n(14237),
          i = n(65489),
          a = n(29684),
          s = n(42714);
        const c = () => {
          var e;
          if (
            null === (e = window) ||
            void 0 === e ||
            null === (e = e.abra) ||
            void 0 === e ||
            !e.tests
          )
            return "";
          const { tests: t } = window.abra;
          return Object.keys(t)
            .filter((e) => t[e])
            .map((e) => "".concat(e, "=").concat(t[e]))
            .join(", ");
        };
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var d = (e) => {
            let { children: t, userType: n, hasUserLoaded: o } = e;
            const [l, d] = (0, r.useState)(u({}, i.abra.getTests())),
              [f, p] = (0, r.useState)(!1),
              [m, b] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
              i.abra.init(n),
                d(u({}, i.abra.getTests())),
                p(!0),
                o &&
                  (b(!0),
                  ((e) => {
                    "function" == typeof window.Iterate &&
                      window.Iterate("identify", {
                        agentID: i.kh,
                        loggedIn: (null == e ? void 0 : e.isLoggedIn) || !1,
                        userTypeGames: (0, s.xG)(e),
                        gamesSubTenureInDays: (0, s.P6)(e),
                        gamesVariants: c(),
                      });
                  })(n));
            }, [n, o]);
            const g = (0, r.useMemo)(
              () => ({
                tests: l,
                getVariant: (e) => l[e],
                reportExposure: (e) => i.abra.reportExposure(e),
                hasAbraLoaded: f,
                hasAbraLoadedWithUser: m,
                reportHybridExposure: (e) => i.abra.reportHybridExposure(e),
              }),
              [l, f, m]
            );
            return r.createElement(a.Z.Provider, { value: g }, t);
          },
          f = (e) => {
            let { children: t } = e;
            const { userType: n, hasLoaded: i } = (0, o.aF)();
            return r.createElement(d, { userType: n, hasUserLoaded: i }, t);
          },
          p = n(34458),
          m = n(46147);
        const b = (e) => {
          let { children: t, disableShortz: n } = e;
          return r.createElement(
            m.Z,
            { disableShortz: n },
            r.createElement(f, null, r.createElement(p.O1, null, t))
          );
        };
      },
      85980: function (e, t, n) {
        var r = n(89526),
          o = n(13126);
        const i = (0, r.createContext)({
          userType: o.sS,
          updateUserType: () => {},
          hasLoaded: !1,
          shortzHasLoaded: !1,
          setHasLoaded: () => {},
        });
        t.Z = i;
      },
      46147: function (e, t, n) {
        var r = n(89526),
          o = n(65489),
          i = n(96303),
          a = n(86128),
          s = n(28229),
          c = n(67882),
          l = n(73972),
          u = n(85980),
          d = n(13126);
        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        t.Z = (e) => {
          let { children: t, disableShortz: n } = e;
          const [f, m] = (0, r.useState)(d.sS),
            b = (0, c.Z)(),
            g = (e) =>
              m((t) => {
                const n = p(p({}, t), e);
                return (
                  b.setUserType(n),
                  (0, o.Tv)(n),
                  (0, s.Z)("User data updated", [n]),
                  n
                );
              }),
            [v, w] = (0, r.useState)(!1),
            [y, h] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              var e;
              !0 !== v &&
                (window.isHybridWebView && window.NativeBridge
                  ? (0, d._v)().then((e) => {
                      const t =
                        null == e ? void 0 : e.values.gamesGetUserDetails;
                      t && (0, a.Af)(t, g), w(!0);
                    })
                  : "ios" === window.newsreaderAppPlatform &&
                    null !== (e = window.config) &&
                    void 0 !== e &&
                    null !== (e = e.userInfo.entitlements) &&
                    void 0 !== e &&
                    e.includes("XWD")
                  ? (window.config.userInfo.regiId
                      ? g(
                          (0, d._Y)({
                            user: {
                              userInfo: {
                                regiId: window.config.userInfo.regiId,
                                subscriptions:
                                  window.config.userInfo.entitlements,
                              },
                            },
                          })
                        )
                      : g((0, d.W$)({ products: { XWD: 1 } })),
                    w(!0))
                  : (0, d.qT)()
                  ? Promise.allSettled([(0, d.p_)(), (0, d.xk)()]).then((e) => {
                      var t, n;
                      let [r, o] = e;
                      const i = "fulfilled" === r.status ? r.value : null,
                        a = "fulfilled" === o.status ? o.value : null;
                      null != i &&
                      null !== (t = i.products) &&
                      void 0 !== t &&
                      t.XWD
                        ? g((0, d.W$)(i))
                        : null != a &&
                          null !== (n = a.data) &&
                          void 0 !== n &&
                          null !== (n = n.user) &&
                          void 0 !== n &&
                          null !== (n = n.userInfo) &&
                          void 0 !== n &&
                          n.regiId
                        ? g((0, d._Y)(a.data))
                        : ("rejected" === r.status &&
                            console.warn(
                              "Unable to determine the user's entitlements. There was an error in the anon fetch: ".concat(
                                r.reason
                              )
                            ),
                          "rejected" === o.status &&
                            console.warn(
                              "Unable to determine the user's entitlements. There was an error in the samizdat fetch: ".concat(
                                o.reason
                              )
                            ),
                          "rejected" === r.status &&
                            "rejected" === o.status &&
                            console.error(
                              "Could not determine the user's entitlements anonResult: "
                                .concat(r.reason, ", regiResult: ")
                                .concat(o.reason)
                            ),
                          g((0, d.qM)())),
                        w(!0);
                    })
                  : (0, d.xk)()
                      .then((e) => {
                        var t;
                        null != e &&
                        null !== (t = e.data) &&
                        void 0 !== t &&
                        null !== (t = t.user) &&
                        void 0 !== t &&
                        null !== (t = t.userInfo) &&
                        void 0 !== t &&
                        t.regiId
                          ? g((0, d._Y)(e.data))
                          : g((0, d.qM)()),
                          w(!0);
                      })
                      .catch((e) => {
                        console.warn(
                          "Unable to determine the user's entitlements. There was an error in the samizdat fetch: ".concat(
                            e
                          )
                        ),
                          g((0, d.qM)()),
                          w(!0);
                      }));
            }, [v]),
            (0, r.useEffect)(() => {
              v &&
                (f.regiId && !n
                  ? (0, d.Yq)(f.regiId).then((e) => {
                      g({ inShortzMode: !!e }), h(!0);
                    })
                  : h(!0));
            }, [f.regiId, n, v]),
            (0, r.useEffect)(() => {
              (0, l.Fs)(f.email);
            }, [f.email]),
            (0, r.useEffect)(() => {
              (0, i.vv)(f.entitlement);
            }, [f.entitlement]),
            r.createElement(
              u.Z.Provider,
              {
                value: {
                  userType: f,
                  updateUserType: g,
                  hasLoaded: v,
                  setHasLoaded: w,
                  shortzHasLoaded: y,
                },
              },
              t
            )
          );
        };
      },
      43373: function (e, t, n) {
        n(89526), n(65489), n(71687);
      },
      34797: function (e, t, n) {
        n(89526), n(71687);
      },
      89385: function (e, t, n) {
        n(89526), n(71687);
      },
      29954: function (e, t, n) {
        n(89526), n(71687);
      },
      71687: function (e, t, n) {
        var r = n(89526),
          o = n(85980);
        t.Z = () => (0, r.useContext)(o.Z);
      },
      13126: function (e, t, n) {
        n.d(t, {
          W$: function () {
            return d;
          },
          qM: function () {
            return f;
          },
          _Y: function () {
            return p;
          },
          sS: function () {
            return y;
          },
          p_: function () {
            return m;
          },
          _v: function () {
            return b;
          },
          xk: function () {
            return g;
          },
          Yq: function () {
            return v;
          },
          qT: function () {
            return w;
          },
        });
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var i = n(36629),
          a = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            const t =
              null == e
                ? void 0
                : e
                    .filter((e) => "ACTIVE" === e.status)
                    .filter((e) => e.entitlements.includes("XWD"))
                    .map((e) => e.startDate)
                    .sort((e, t) => e.localeCompare(t));
            return null != t && t.length
              ? (0, i.Z)(new Date(t[0]), "yyyy-MM-dd")
              : void 0;
          };
        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(Object(n), !0).forEach(function (t) {
                  var r, o, i, a;
                  (r = e),
                    (o = t),
                    (i = n[t]),
                    (o =
                      "symbol" ==
                      typeof (a = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(o))
                        ? a
                        : a + "") in r
                      ? Object.defineProperty(r, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[o] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var l = n(65489);
        const u =
            "\n    query UserQuery {\n      user {\n        profile {\n          email\n        }\n        userInfo {\n          regiId\n          subscriptions\n        }\n        subscriptionDetails {\n          subscriptionName\n          startDate\n          status\n          entitlements\n        }\n      }\n    }\n  ".replace(
              /\n/g,
              " "
            ),
          d = (e) => {
            var t;
            const n = {
              regiId: "",
              entitlement: "anon",
              isLoggedIn: !1,
              hasXwd: !1,
              hasDigi: !1,
              hasHd: !1,
              inShortzMode: !1,
              isFreeTrial: !1,
            };
            return null !== (t = e.products) && void 0 !== t && t.XWD
              ? o(o({}, n), {}, { entitlement: "anon,sub", hasXwd: !0 })
              : n;
          },
          f = () => ({
            regiId: "",
            entitlement: "anon",
            isLoggedIn: !1,
            hasXwd: !1,
            hasDigi: !1,
            hasHd: !1,
            inShortzMode: !1,
            isFreeTrial: !1,
          }),
          p = (e) => {
            var t, n, r, o;
            const i =
                null == e ||
                null === (t = e.user) ||
                void 0 === t ||
                null === (t = t.userInfo) ||
                void 0 === t
                  ? void 0
                  : t.regiId,
              s =
                null == e || null === (n = e.user) || void 0 === n
                  ? void 0
                  : n.subscriptionDetails,
              l = !!i,
              u =
                null == e ||
                null === (r = e.user) ||
                void 0 === r ||
                null === (r = r.profile) ||
                void 0 === r
                  ? void 0
                  : r.email;
            let d =
              (null == e ||
              null === (o = e.user) ||
              void 0 === o ||
              null === (o = o.userInfo) ||
              void 0 === o
                ? void 0
                : o.subscriptions) || [];
            d = d.map((e) => e.toLowerCase());
            const f = !!d.find((e) => "mm" === e || "msd" === e || "mtd" === e),
              p = !!d.find((e) => "xwd" === e),
              m =
                !!d.find((e) => "hd" === e) ||
                !(
                  null == s ||
                  !s.find((e) => "Home Delivery" === e.subscriptionName)
                ),
              b = ((e, t, n) =>
                e
                  ? t && n
                    ? "sub,cr"
                    : t
                    ? "sub"
                    : n
                    ? "cr"
                    : "reg"
                  : "anon")(l, f, p);
            return c(
              c(
                {
                  entitlement: b,
                  hasDigi: f,
                  hasHd: m,
                  hasXwd: p,
                  inShortzMode: !1,
                  isLoggedIn: l,
                  regiId: i,
                },
                u && { email: u }
              ),
              {},
              { gamesSubStartDate: a(s) }
            );
          },
          m = () =>
            l.Be.get(
              "".concat(l.OB.api, "/svc/crosswords/v6/anon/entitlements.json")
            ),
          b = () =>
            window.NativeBridge.gamesGetUserDetails()
              .then((e) => {
                if (e.error) throw new Error(e.error);
                return e;
              })
              .catch((e) => {
                console.error(
                  "Failed to fetch entitlements from Native Bridge",
                  e
                );
              }),
          g = () =>
            l.Be.post(
              "".concat(l.OB.samizdat.host, "/graphql/v2"),
              { operationName: "UserQuery", query: u },
              {
                headers: {
                  "Content-Type": "application/json",
                  "nyt-app-type": l.OB.samizdat.appType,
                  "nyt-app-version": l.OB.samizdat.appVersion,
                  "nyt-token": l.OB.samizdat.token,
                },
              }
            ),
          v = (e) =>
            l.Be.get(
              ((e) =>
                ""
                  .concat(
                    null === l.OB || void 0 === l.OB ? void 0 : l.OB.hostname,
                    "/puzzles/shortz/"
                  )
                  .concat(e))(e),
              { withCredentials: !1 }
            ).catch((e) => {
              console.error("Getting shortz mode details failed", e);
            }),
          w = () => {
            const e = window.isHybridWebView && window.NativeBridge,
              t = window.gamesAppPlatform || window.newsreaderAppPlatform;
            return Boolean(t && !e);
          },
          y = {
            isLoggedIn: !1,
            hasXwd: !1,
            hasDigi: !1,
            hasHd: !1,
            entitlement: "anon",
            regiId: "",
            inShortzMode: !1,
            isFreeTrial: !1,
          };
      },
      79545: function (e, t, n) {
        n.d(t, {
          z: function () {
            return r;
          },
        });
        const r = () => {
          try {
            const { remainingData: e, usedData: t } = (() => {
              const e = Object.values(window.localStorage).join(""),
                t = parseFloat(((16 * e.length) / 8192).toFixed(2)),
                n = 5120 - parseFloat(((16 * e.length) / 8192).toFixed(2));
              return { usedData: t, remainingData: n > 0 ? n : 0 };
            })();
            return {
              used:
                t > 1e3
                  ? "".concat((t / 1e3).toFixed(2), " MB")
                  : "".concat(t, " KB"),
              remaining:
                e > 1e3
                  ? "".concat((e / 1e3).toFixed(2), " MB")
                  : "".concat(e, " KB"),
            };
          } catch (e) {
            return (
              console.error(e),
              { used: "error fetching", remaining: "error fetching" }
            );
          }
        };
      },
      78845: function (e, t) {
        t.Z = {
          container: "Footer-module_container__rWkM9",
          mobile: "Footer-module_mobile__dAjsf",
          sectionLink: "Footer-module_sectionLink__OCHvG",
          legalLinksContainer: "Footer-module_legalLinksContainer__OIfTt",
          legalLink: "Footer-module_legalLink__saQgH",
        };
      },
    },
  ]);
//# sourceMappingURL=8810.970e8971440edfe57301.js.map
