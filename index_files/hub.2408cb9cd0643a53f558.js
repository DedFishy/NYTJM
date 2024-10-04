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
      (e._sentryDebugIds[t] = "db0dc3dd-2f96-45cc-8fac-852794b33624"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-db0dc3dd-2f96-45cc-8fac-852794b33624"));
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
(_global.SENTRY_RELEASE = { id: "72f9e4ba7cf7ad7a6dff68a1445e5e719e0cf2a3" }),
  (function () {
    "use strict";
    var e,
      t = {
        53581: function (e, t, n) {
          var r = {};
          n.r(r),
            n.d(r, {
              fetchAllStats: function () {
                return D;
              },
              fetchPuzzleProgress: function () {
                return x;
              },
              fetchRecentPuzzles: function () {
                return M;
              },
              fetchStatsAndStreaks: function () {
                return C;
              },
            }),
            n(31405),
            n(37422);
          var a = n(89526),
            s = n(24470),
            i = n(76359),
            o = n(65489),
            l = n(65046),
            c = n(28425),
            d = n(63482),
            u = n(16441),
            m = n(72669),
            p = [
              {
                id: "wordle",
                name: "Wordle",
                url: "/wordle.html",
                description: "Get 6 chances to guess a 5-letter word.",
                alwaysPlayable: !0,
                multiLinkId: "wordle-archive",
                multiLinkUrl: "/games/wordle/archive",
                multiLinkName: "Archive",
              },
              {
                id: "strands",
                name: "Strands",
                url: "/strands.html",
                newsreaderURL: "/strands.html?hybrid=false",
                description: "Find hidden words and uncover the day’s theme.",
                alwaysPlayable: !0,
              },
              {
                id: "connections",
                name: "Connections",
                url: "/connections.html",
                newsreaderURL:
                  "/connections.html?GAMES_connectionsRollout_1130=1_ConnectionsV2",
                description: "Group words that share a common thread.",
                alwaysPlayable: !0,
                multiLinkId: "connections-archive",
                multiLinkUrl: "/connections.html/archive",
                multiLinkName: "Archive",
                isNewMultiLink: !0,
              },
            ],
            h = n(25941);
          function b(e, t) {
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
          var g = (e, t) =>
              p.map((n) => {
                const r = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? b(Object(n), !0).forEach(function (t) {
                          var r, a, s, i;
                          (r = e),
                            (a = t),
                            (s = n[t]),
                            (a =
                              "symbol" ==
                              typeof (i = (function (e, t) {
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
                              })(a))
                                ? i
                                : i + "") in r
                              ? Object.defineProperty(r, a, {
                                  value: s,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (r[a] = s);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : b(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({ freeUntil: null }, n);
                if (e.hasXwd) return delete r.subscriptionCampaign, r;
                if (t) {
                  const e = "".concat((0, h.B_)(r.id, "-"), "Card");
                  r.subscribe = t[e] || t.default;
                }
                return delete r.subscriptionCampaign, r;
              }),
            f = n(30735),
            v = n(10220),
            y = n(74665),
            w = n(24074);
          function E(e, t) {
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
          function _(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? E(Object(n), !0).forEach(function (t) {
                    var r, a, s, i;
                    (r = e),
                      (a = t),
                      (s = n[t]),
                      (a =
                        "symbol" ==
                        typeof (i = (function (e, t) {
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
                        })(a))
                          ? i
                          : i + "") in r
                        ? Object.defineProperty(r, a, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[a] = s);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : E(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          const k = (e) =>
              function () {
                return arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : e;
              },
            z = {
              selectedPuzzle: {},
              isGeneratable: !1,
              version: "puzzle",
              showBlack: !1,
              showSpoiler: !0,
            },
            N = { opacity: 100, layout: "standard" };
          var O = (0, m.UY)({
            user: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { type: t, payload: n } =
                  arguments.length > 1 ? arguments[1] : void 0;
              return t === w.$N ? _(_({}, e), {}, { id: n }) : e;
            },
            stats: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { type: t, payload: n } =
                  arguments.length > 1 ? arguments[1] : void 0;
              return t === w.Bk ? _(_(_({}, e), n), {}, { loaded: !0 }) : e;
            },
            device: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { type: t, payload: n } =
                  arguments.length > 1 ? arguments[1] : void 0;
              return t === w.l8 ? _(_({}, e), {}, { os: n }) : e;
            },
            hubVariant: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                { type: t, payload: n } =
                  arguments.length > 1 ? arguments[1] : void 0;
              return t === w.Gs ? n : e;
            },
            puzzles: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { type: t, payload: n } =
                  arguments.length > 1 ? arguments[1] : void 0;
              switch (t) {
                case w.hz:
                  return _(_(_({}, n.puzzles), e), {}, { loaded: !0 });
                case w.cL:
                  return Object.entries(e).reduce((e, t) => {
                    let [r, a] = t;
                    return Object.assign(e, {
                      [r]: _(_({}, a), n[r]),
                      loaded: !0,
                    });
                  }, {});
                default:
                  return e;
              }
            },
            collections: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { type: t, payload: n } =
                  arguments.length > 1 ? arguments[1] : void 0;
              return t === w.hz
                ? _(_(_({}, n.collections), e), {}, { loaded: !0 })
                : e;
            },
            ourGames: k([]),
            compliance: k({}),
            sponsorship: k({}),
            subscribeLinks: k({}),
            printOptions: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : z,
                t = arguments.length > 1 ? arguments[1] : void 0;
              const { payload: n, type: r } = t;
              switch (r) {
                case w._h:
                  return _(
                    _({}, (0, y.Z)(e, t.payload)),
                    {},
                    { version: "puzzle" }
                  );
                case w.WI:
                  return _(_({}, e), n);
                default:
                  return e;
              }
            },
            printPrefs: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : N,
                t = arguments.length > 1 ? arguments[1] : void 0;
              const { type: n, payload: r } = t;
              switch (n) {
                case w.n:
                  return r || e;
                case w.Tl:
                case w.MC:
                  return _(_({}, e), r);
                default:
                  return e;
              }
            },
          });
          function T(e, t) {
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
          function P(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? T(Object(n), !0).forEach(function (t) {
                    var r, a, s, i;
                    (r = e),
                      (a = t),
                      (s = n[t]),
                      (a =
                        "symbol" ==
                        typeof (i = (function (e, t) {
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
                        })(a))
                          ? i
                          : i + "") in r
                        ? Object.defineProperty(r, a, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[a] = s);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : T(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          var S = n(5126),
            j = n(54125);
          const C = (e) => {
              const t = ""
                .concat(o.OB.api, "/svc/crosswords/v3/")
                .concat(
                  e,
                  "/stats-and-streaks.json?date_start=2014-01-01&start_on_monday=true"
                );
              return o.Be.get(t)
                .then((e) =>
                  (0, h.nx)({
                    dailyStats: e.results.stats,
                    streaks: e.results.streaks,
                  })
                )
                .catch(
                  (e) => (
                    console.error(
                      "Failed to fetch stats and streaks. Falling back to mock data.",
                      e
                    ),
                    (0, h.nx)({
                      dailyStats: j.Z.dailyStats,
                      streaks: j.Z.streaks,
                    })
                  )
                );
            },
            L = (e) => {
              const t = ""
                .concat(o.OB.api, "/svc/crosswords/v3/")
                .concat(
                  e,
                  "/mini-stats.json?date_start=2014-01-01&start_on_monday=true"
                );
              return o.Be.get(t)
                .then((e) => (0, h.nx)({ miniStats: e.results }))
                .catch(
                  (e) => (
                    console.error(
                      "Failed to fetch mini stats. Falling back to mock data.",
                      e
                    ),
                    (0, h.nx)({ miniStats: j.Z.miniStats })
                  )
                );
            },
            D = (e) =>
              Promise.all([L(e), C(e)]).then((e) =>
                e.reduce((e, t) => Object.assign(e, t), {})
              ),
            M = (e) => {
              const t = ""
                .concat(o.OB.api, "/svc/crosswords/v3/")
                .concat(e, "/recent.json");
              return o.Be.get(t)
                .then((e) => e.results)
                .catch(
                  (e) => (
                    S.Z.error(
                      "Failed to fetch recent puzzle json. Falling back to mock data",
                      e
                    ),
                    j.Z.recent
                  )
                );
            },
            x = (e, t) => {
              const n = "?puzzle_ids=".concat(t.join()),
                r = ""
                  .concat(o.OB.api, "/svc/crosswords/v3/")
                  .concat(e, "/progress.json")
                  .concat(n);
              return o.Be.get(r)
                .then((e) =>
                  e.results.reduce(
                    (e, t) => Object.assign(e, { [t.puzzle_id]: t }),
                    {}
                  )
                )
                .catch(
                  (e) => (
                    S.Z.error(
                      "Failed to fetch puzzle json. Falling back to mock data",
                      e
                    ),
                    j.Z.progress
                  )
                );
            };
          var A = n(2652),
            R = n.n(A),
            I = n(13882),
            G = n(64403),
            V = n.n(G),
            q = n(39291),
            F = n(75176),
            H = n(40826),
            U = n(12282);
          const B = (e, t) => e.collections[t.puzzleCollection];
          var Z = (e) =>
            (0, i.$j)(() => {
              const e = (0, H.P1)([B, U.li], (e, t) => e && e.map((e) => t[e]));
              return (t, n) => {
                const r = e(t, n);
                return { isPending: !r, puzzles: r || [] };
              };
            })(e);
          function Y(e, t) {
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
          function W(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Y(Object(n), !0).forEach(function (t) {
                    var r, a, s, i;
                    (r = e),
                      (a = t),
                      (s = n[t]),
                      (a =
                        "symbol" ==
                        typeof (i = (function (e, t) {
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
                        })(a))
                          ? i
                          : i + "") in r
                        ? Object.defineProperty(r, a, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[a] = s);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Y(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          const $ = (e) => {
            let { puzzle: t = {} } = e;
            const n = W(
              W({ action: "PLAY", iconType: "puzzle" }, (0, h.nx)(t)),
              {},
              { isSolved: t.solved }
            );
            return a.createElement(
              "div",
              { className: "progressIcon" },
              a.createElement(q.Z, n),
              a.createElement(F.Z, n)
            );
          };
          $.propTypes = { puzzle: R().shape({}).isRequired };
          const X = Z((e) => {
            let {
              puzzles: [t = {}],
              sponsorship: n,
            } = e;
            return a.createElement(
              "div",
              { className: "featured standard puzzleInfo" },
              a.createElement(
                "a",
                {
                  href: "/crosswords/game/special/travel-experiences",
                  className: "puzzleAction",
                },
                a.createElement(
                  "div",
                  { className: "puzzleInfoContent" },
                  a.createElement($, { puzzle: t }),
                  a.createElement(
                    "h3",
                    { className: "hub-sponsored-card__title" },
                    t.title
                  ),
                  a.createElement(
                    "div",
                    { className: "byline" },
                    "By ",
                    a.createElement(
                      "span",
                      { className: "hub-sponsored-card__all-caps" },
                      t.author
                    )
                  )
                )
              ),
              a.createElement(
                "div",
                { className: "hub-sponsored-card__supported-by" },
                "Supported by",
                a.createElement(
                  "a",
                  {
                    href: n.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  a.createElement("div", {
                    className: "hub-sponsored-card__sponsor",
                    style: { backgroundImage: "url(".concat(n.cardImage, ")") },
                  })
                )
              )
            );
          });
          var J = X;
          const K = "undefined" == typeof window ? {} : window,
            Q = "__viewers__";
          let ee;
          "IntersectionObserver" in K &&
            "IntersectionObserverEntry" in K &&
            "intersectionRatio" in K.IntersectionObserverEntry.prototype &&
            ("isIntersecting" in K.IntersectionObserverEntry.prototype ||
              Object.defineProperty(
                K.IntersectionObserverEntry.prototype,
                "isIntersecting",
                {
                  get() {
                    return this.intersectionRatio > 0;
                  },
                }
              ),
            (K.__observeInView__ = !0));
          function te() {
            return (
              (te = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              te.apply(this, arguments)
            );
          }
          const ne = {
              tagName: R().string,
              event: R().string.isRequired,
              eventRegion: R().string,
              eventLabel: R().string,
              eventContext: R().string,
              onClick: R().func,
              data: R().object,
            },
            re = {};
          class ae extends a.PureComponent {
            constructor(e) {
              super(e), (this.wrapper = a.createRef());
            }
            componentDidMount() {
              var e, t;
              this.wrapper.current &&
                ((e = this.wrapper.current),
                (t = () => {
                  var e;
                  const {
                      event: t,
                      eventRegion: n,
                      eventLabel: r,
                      eventContext: a,
                      data: s,
                    } = this.props,
                    i = t + n + r,
                    o =
                      null == s || null === (e = s.card) || void 0 === e
                        ? void 0
                        : e.uri;
                  var l, c, d, u;
                  o
                    ? re[o] ||
                      (window.foundationTrack("impression", s), (re[o] = !0))
                    : re[i] ||
                      ((l = t),
                      (c = n),
                      (d = r),
                      (u = a),
                      "undefined" != typeof window &&
                        window.foundationTrack &&
                        window.foundationTrack("impression", {
                          module: {
                            name: l,
                            context: u,
                            region: c || "",
                            label: d || void 0,
                          },
                        }),
                      (re[i] = !0));
                }),
                window.__observeInView__ &&
                  (ee ||
                    (ee = new K.IntersectionObserver(
                      (e) => {
                        e.forEach((e) => {
                          e.isIntersecting && e.target[Q].forEach((t) => t(e));
                        });
                      },
                      { threshold: 0.4 }
                    )),
                  e[Q] ? e[Q].push(t) : ((e[Q] = [t]), ee.observe(e))));
            }
            render() {
              const { tagName: e, onClick: t } = this.props,
                n = e,
                r = {};
              return (
                Object.entries(this.props).forEach((e) => {
                  let [t, n] = e;
                  ne[t] || (r[t] = n);
                }),
                a.createElement(n, te({}, r, { ref: this.wrapper, onClick: t }))
              );
            }
          }
          (ae.propTypes = ne),
            (ae.defaultProps = {
              tagName: "div",
              eventRegion: "scroll-to",
              eventLabel: "",
              eventContext: "",
              onClick: () => {},
              data: null,
            });
          var se = ae,
            ie = () =>
              a.createElement(
                se
              ),
            oe = n(89273);
          function le() {
            return (
              (le = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              le.apply(this, arguments)
            );
          }
          const ce = (e) => {
            let {
              user: t,
              subscribeLinks: n,
              puzzles: [r],
              link: s,
            } = e;
            const i = { user: t, subscribeLinks: n };
            return r
              ? a.createElement(
                  se,
                  { event: "hub-mini" },
                  a.createElement(
                    oe.Z,
                    le(
                      {
                        type: "Featured",
                        puzzle: r,
                        title: r.title || "The Mini",
                        link: s,
                      },
                      i
                    )
                  )
                )
              : null;
          };
          ce.propTypes = {
            user: R().shape({}),
            subscribeLinks: R().shape({}),
            link: R().string,
            puzzles: R().arrayOf(R().shape({})),
          };
          var de = (0, m.qC)(
              Z,
              (0, i.$j)((e) => ({ subscribeLinks: e.subscribeLinks }))
            )(ce),
            ue = n(98087);
          function me(e) {
            let { width: t, height: n } = e;
            return a.createElement("div", {
              className: V()("loadingText", t, n),
            });
          }
          function pe() {
            return a.createElement("div", {
              className: "icon primary progressIcon",
            });
          }
          function he() {
            return a.createElement(
              "div",
              null,
              a.createElement(
                "div",
                { className: "featured standard loading-card" },
                a.createElement(pe, null),
                a.createElement(me, { width: "short", height: "thick" }),
                a.createElement(me, { width: "xlong" }),
                a.createElement(me, { width: "xlong", height: "thin" }),
                a.createElement(me, { width: "short", height: "small" })
              )
            );
          }
          function be() {
            return a.createElement(
              "div",
              null,
              a.createElement(
                "div",
                { className: "featured primary padding loading-card" },
                a.createElement(pe, null),
                a.createElement(me, { width: "xlong", height: "thick" }),
                a.createElement(me, { width: "short", height: "small" }),
                a.createElement(me, { width: "long", height: "thin" }),
                a.createElement(me, { width: "xlong", height: "thick" })
              )
            );
          }
          function ge() {
            return a.createElement(
              "div",
              { className: "featured standard tertiary" },
              a.createElement(me, { width: "xshort", height: "thick" }),
              a.createElement(me, { width: "xlong", height: "thin" }),
              a.createElement(me, { width: "long", height: "thick" }),
              a.createElement(me, { width: "xlong", height: "thick" }),
              a.createElement(me, { width: "long", height: "thick" }),
              a.createElement(me, { width: "xshort", height: "thick" }),
              a.createElement(me, { width: "long", height: "thin" }),
              a.createElement(me, { width: "xlong", height: "thick" }),
              a.createElement(me, { width: "long", height: "thick" }),
              a.createElement(me, { width: "long", height: "thin" }),
              a.createElement(me, { width: "xshort", height: "thick" })
            );
          }
          function fe() {
            return a.createElement(
              "div",
              { className: "island standard center" },
              a.createElement(me, { width: "mlong", height: "thick" }),
              a.createElement(me, { width: "mlong", height: "thick" }),
              a.createElement(me, { width: "xshort", height: "small" }),
              a.createElement(me, { width: "long", height: "thin" }),
              a.createElement(pe, null),
              a.createElement(me, { width: "long", height: "small" })
            );
          }
          function ve() {
            return a.createElement(
              "div",
              { className: "thumb standard island center loadingDay" },
              a.createElement(me, { width: "xshort", height: "medium" }),
              a.createElement(pe, null),
              a.createElement(me, { width: "xxshort", height: "medium" })
            );
          }
          function ye() {
            return a.createElement(
              "div",
              { className: "thumb standard island center loadingDayAccordion" },
              a.createElement(
                "div",
                { className: "leftAccordion" },
                a.createElement(pe, null)
              ),
              a.createElement(
                "div",
                { className: "rightAccordion" },
                a.createElement(me, { width: "xshort", height: "medium" }),
                a.createElement("br", null),
                a.createElement(me, { width: "xxshort", height: "medium" })
              )
            );
          }
          function we() {
            return a.createElement(
              "div",
              { className: "featured standard loading-card" },
              a.createElement(pe, null),
              a.createElement(me, { width: "long", height: "medium" }),
              a.createElement(me, { width: "short", height: "small" }),
              a.createElement(me, { width: "mlong", height: "small" }),
              a.createElement("hr", null),
              a.createElement(me, { width: "xlong", height: "small" })
            );
          }
          function Ee(e) {
            let { cardType: t, fade: n } = e;
            const r = {
              primary: a.createElement(be, null),
              secondary: a.createElement(he, null),
              tertiary: a.createElement(ge, null),
              bonus: a.createElement(fe, null),
              day: a.createElement(ve, null),
              dayAccordion: a.createElement(ye, null),
              mobileCrossword: a.createElement(we, null),
            };
            return a.createElement(
              "div",
              { className: V()({ "add-fade": n }) },
              r[t]
            );
          }
          const _e = (e) => {
              let { title: t, children: n, isMoarGamesVariant: r } = e;
              return a.createElement(
                "div",
                {
                  className: V()("alternate-card-phone", {
                    "moar-games-variant": r,
                    "loading-card": !0,
                  }),
                },
                a.createElement("h2", { className: "hub-welcome__title" }, t),
                n
              );
            },
            ke = (e) => {
              let {
                sponsorship: t,
                user: n,
                isMoarGamesVariant: r,
                progressLoaded: s,
              } = e;
              return t
                ? a.createElement(
                    _e,
                    { title: "Sponsored Puzzle", isMoarGamesVariant: r },
                    a.createElement(J, {
                      puzzleCollection: "promoPuzzle",
                      sponsorship: t,
                    })
                  )
                : s
                ? n.hasXwd
                  ? a.createElement(
                      _e,
                      { title: "Monthly Bonus", isMoarGamesVariant: r },
                      a.createElement(
                        "div",
                        {
                          className: "js-hub-tracker",
                          "data-track-hub": ue.yw,
                          role: "button",
                          tabIndex: 0,
                        },
                        a.createElement(de, {
                          puzzleCollection: "bonusPuzzle",
                          user: n,
                        })
                      )
                    )
                  : a.createElement(
                      _e,
                      { title: "More Games", isMoarGamesVariant: r },
                      a.createElement(ie, null)
                    )
                : a.createElement(
                    _e,
                    null,
                    a.createElement(Ee, { cardType: "bonus" })
                  );
            };
          (_e.propTypes = {
            title: R().string,
            children: R().node,
            isMoarGamesVariant: R().bool,
          }),
            (ke.propTypes = {
              user: R().shape({ hasXwd: R().bool }),
              progressLoaded: R().bool,
              sponsorship: R().shape({}),
              isMoarGamesVariant: R().bool,
            });
          var ze = (0, i.$j)((e) => ({
              sponsorship: e.sponsorship,
              subscribeLinks: e.subscribeLinks,
              isMoarGamesVariant: (0, U.uU)(e),
              progressLoaded: Boolean(e.puzzles.loaded && e.stats.loaded),
            }))(ke),
            Ne = n(21718),
            Oe = n.n(Ne),
            Te = n(54028),
            Pe = n.n(Te);
          const Se = (e) => {
            let t,
              { name: n, value: r } = e;
            try {
              t = Oe()(r, { isJSON: !0 });
            } catch (e) {
              t = Pe()(r);
            }
            return a.createElement("script", {
              type: "text/javascript",
              dangerouslySetInnerHTML: {
                __html: "window.".concat(n, " = ").concat(t),
              },
            });
          };
          function je() {
            return (
              (je = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              je.apply(this, arguments)
            );
          }
          Se.propTypes = {
            name: R().string,
            value: R().oneOfType([
              R().shape({}),
              R().string,
              R().number,
              R().bool,
            ]),
          };
          class Ce extends a.Component {
            getChildContext() {
              return { serverData: this.props };
            }
            render() {
              const { children: e } = this.props;
              return e;
            }
          }
          (Ce.defaultProps = { children: null }),
            (Ce.propTypes = { children: R().element }),
            (Ce.childContextTypes = { serverData: R().shape({}) });
          const Le = (e) => {
              const t = (t, n) => {
                const { serverData: r } = n;
                return a.createElement(e, je({}, r, t));
              };
              return (t.contextTypes = { serverData: R().shape({}) }), t;
            },
            De = Le((e) => {
              let { id: t, deviceType: n, position: r, compliance: s } = e;
              return n.isMobile || !s.ads
                ? null
                : a.createElement(
                    "div",
                    { className: "pz-section pz-section-filled pz-ad-box" },
                    a.createElement("div", {
                      className: "pz-ad place-ad",
                      id: t,
                      "data-position": r,
                    })
                  );
            });
          R().string,
            R().string,
            R().oneOfType([R().shape({}).isRequired, R().string]),
            R().func,
            R().func,
            R().func;
          const Me = Le((e) => {
              let { sponsorship: t } = e;
              return (
                t &&
                a.createElement(
                  "div",
                  { className: "pz-sponsored" },
                  "Supported by",
                  a.createElement(
                    "a",
                    {
                      className: "pz-sponsored__link",
                      href: t.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    a.createElement("div", {
                      className: "pz-sponsored__image",
                      style: { backgroundImage: "url(".concat(t.image, ")") },
                    })
                  )
                )
              );
            }),
            xe = (e) => {
              let {
                bannerHeadline: t,
                bannerText: n,
                bannerClassName: r,
                containerClassNames: s,
                callToAction: i,
                featuredLink: o,
                clickHandler: l,
              } = e;
              return a.createElement(
                "div",
                { className: V()("messaging-banner", s) },
                a.createElement(
                  "div",
                  { className: "messaging-banner__left" },
                  a.createElement("span", {
                    className: "pz-icon pz-icon-".concat(r),
                  })
                ),
                a.createElement(
                  "p",
                  {
                    className: "messaging-banner__right",
                    "data-testid": "messaging-banner-text",
                  },
                  t &&
                    a.createElement(
                      "span",
                      { className: "messaging-banner__headline" },
                      t
                    ),
                  o &&
                    a.createElement(
                      "span",
                      null,
                      a.createElement(
                        "a",
                        {
                          onClick: l,
                          className: "messaging-banner__featured-link",
                          href: o.link,
                        },
                        o.text
                      ),
                      " "
                    ),
                  a.createElement(
                    "span",
                    { className: "messaging-banner__text" },
                    n
                  ),
                  i &&
                    a.createElement(
                      "span",
                      null,
                      " ",
                      a.createElement(
                        "a",
                        {
                          onClick: l,
                          className: "messaging-banner__action",
                          href: i.link,
                        },
                        i.text
                      )
                    )
                )
              );
            };
          xe.propTypes = {
            bannerHeadline: R().string,
            bannerText: R().oneOfType([R().string, R().element]).isRequired,
            containerClassNames: R().arrayOf(R().string),
            bannerClassName: R().string,
            callToAction: R().shape({
              link: R().string.isRequired,
              text: R().string.isRequired,
            }),
            featuredLink: R().shape({
              link: R().string.isRequired,
              text: R().string.isRequired,
            }),
            clickHandler: R().func,
          };
          const Ae = () =>
              a.createElement("script", {
                id: "android-config",
                type: "text/javascript",
                dangerouslySetInnerHTML: { __html: "//[-NYTHYBRIDCONFIG-]" },
              }),
            Re = Le((e) => {
              let {
                env: t,
                assets: n,
                pageName: r,
                abraConfig: s,
                adUnitPath: i,
                featureFlags: o,
                sentryDSN: l,
                sentrySampleRate: c,
                commitHash: d,
                navigationLinks: u,
                purrDirectiveFormat: m,
                adManagerCode: p,
                abraCode: h,
                datadogRumApplicationId: b,
                datadogRumClientToken: g,
              } = e;
              return a.createElement(
                a.Fragment,
                null,
                r && a.createElement(Se, { name: "pageName", value: r }),
                a.createElement(Se, { name: "env", value: t }),
                a.createElement(Se, {
                  name: "abra",
                  value: { config: s, tests: {} },
                }),
                a.createElement(Se, { name: "adUnitPath", value: i }),
                a.createElement(Se, { name: "navigationLinks", value: u }),
                a.createElement(Se, { name: "featureFlags", value: o }),
                a.createElement(Se, {
                  name: "sentryConfig",
                  value: {
                    dsn: l,
                    release: d,
                    sampleRate: c,
                    environment: t.name,
                  },
                }),
                a.createElement(Se, {
                  name: "datadogRumConfig",
                  value: {
                    applicationId: b,
                    clientToken: g,
                    release: d,
                    environment: t.name,
                  },
                }),
                a.createElement(Se, { name: "purrDirectiveFormat", value: m }),
                a.createElement(Se, { name: "isCacheSafe", value: !0 }),
                a.createElement("div", { id: "ratio-hook" }),
                a.createElement("div", { id: "width-hook" }),
                n.scripts.map((e, t) => {
                  if (e.src)
                    return a.createElement("script", {
                      key: t,
                      defer: !0,
                      type: "text/javascript",
                      src: e.src,
                    });
                  if (e.inline)
                    return a.createElement("script", {
                      key: t,
                      id: e.id,
                      defer: !0,
                      type: "text/javascript",
                      dangerouslySetInnerHTML: { __html: e.inline },
                    });
                  throw new Error(
                    "bad script config ".concat(JSON.stringify(e))
                  );
                }),
                a.createElement("script", {
                  type: "text/javascript",
                  dangerouslySetInnerHTML: { __html: p },
                }),
                a.createElement("script", {
                  type: "text/javascript",
                  dangerouslySetInnerHTML: { __html: h },
                }),
                a.createElement(Ae, null)
              );
            });
          var Ie = Re,
            Ge = n(56610);
          const Ve = {
            "@context": "http://schema.org",
            "@type": "WebPage",
            publisher: {
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "NYT Games",
              url: "/crosswords",
              alternateName: [
                "NYTimes games",
                "New York Times games",
                "NYT games",
              ],
              sameAs: ["https://twitter.com/NYTGames"],
              parentOrganization: {
                "@context": "http://schema.org",
                "@type": "Organization",
                name: "The New York Times",
                url: "/",
                "@id": "/",
                sameAs: [
                  "https://www.facebook.com/nytimes/",
                  "https://twitter.com/nytimes",
                  "https://www.instagram.com/nytimes/",
                  "https://www.youtube.com/user/TheNewYorkTimes",
                  "https://www.linkedin.com/company/the-new-york-times",
                  "https://www.wikidata.org/wiki/Q9684",
                  "https://en.wikipedia.org/wiki/The_New_York_Times",
                ],
                logo: {
                  "@context": "http://schema.org",
                  "@type": "ImageObject",
                  url: "https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png",
                  height: 40,
                  width: 250,
                },
              },
            },
          };
          function qe() {
            return (
              (qe = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              qe.apply(this, arguments)
            );
          }
          var Fe = Le((e) => {
              var t, n, r, s, i;
              let { env: o, metadata: l, assets: c, titleOverride: d } = e;
              const u = "".concat(d || l.title, " - The New York Times");
              return a.createElement(
                "head",
                null,
                a.createElement("title", { "data-testid": "page-title" }, u),
                a.createElement("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1, minimal-ui",
                }),
                a.createElement("meta", {
                  httpEquiv: "Content-Type",
                  content: "text/html",
                  charSet: "utf-8",
                }),
                a.createElement("meta", {
                  httpEquiv: "X-UA-Compatible",
                  content: "IE=edge,chrome=1",
                }),
                a.createElement("meta", {
                  name: "version",
                  content: o.version,
                }),
                a.createElement("meta", {
                  name: "CG",
                  content: l.contentGroup,
                  "data-testid": "meta-cg",
                }),
                a.createElement("meta", {
                  name: "PT",
                  content: l.pageType,
                  "data-testid": "meta-pt",
                }),
                null === (t = l.linkTags) || void 0 === t
                  ? void 0
                  : t.map((e, t) => a.createElement("link", qe({ key: t }, e))),
                null === (n = l.metaTags) || void 0 === n
                  ? void 0
                  : n.map((e, t) =>
                      a.createElement(
                        "meta",
                        qe({ key: t }, e, { "data-testid": "meta" })
                      )
                    ),
                null === (r = l.metaTags) || void 0 === r
                  ? void 0
                  : r.map(
                      (e) =>
                        e.property &&
                        "og:url" === e.property &&
                        a.createElement("link", {
                          rel: "canonical",
                          href: e.content,
                        })
                    ),
                "puzzle hub" === (null == l ? void 0 : l.pageType)
                  ? a.createElement(
                      a.Fragment,
                      null,
                      a.createElement("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: { __html: JSON.stringify(Ve) },
                      }),
                      a.createElement("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                          __html: JSON.stringify({
                            "@type": "Game",
                            "@context": "http://schema.org",
                            inLanguage: "en-US",
                            description: "".concat(
                              null == l ? void 0 : l.title
                            ),
                          }),
                        },
                      })
                    )
                  : a.createElement("script", {
                      type: "application/ld+json",
                      dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                          "@type": "Game",
                          "@context": "http://schema.org",
                          inLanguage: "en-US",
                          description: "".concat(null == l ? void 0 : l.title),
                          alternateName: null == l ? void 0 : l.alternateName,
                          image: null == l ? void 0 : l.image,
                          sourceOrganization: {
                            "@context": "http://schema.org",
                            "@type": "Organization",
                            name: "The New York Times",
                            url: "/",
                            "@id": "/",
                            sameAs: [
                              "https://www.facebook.com/nytimes/",
                              "https://twitter.com/nytimes",
                              "https://www.instagram.com/nytimes/",
                              "https://www.youtube.com/user/TheNewYorkTimes",
                              "https://www.linkedin.com/company/the-new-york-times",
                              "https://www.wikidata.org/wiki/Q9684",
                              "https://en.wikipedia.org/wiki/The_New_York_Times",
                            ],
                            logo: {
                              "@context": "http://schema.org",
                              "@type": "ImageObject",
                              url: "https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png",
                              height: 40,
                              width: 250,
                            },
                          },
                        }),
                      },
                    }),
                null === (s = c.styles) || void 0 === s
                  ? void 0
                  : s.map((e, t) => {
                      if (e.src)
                        return a.createElement("link", {
                          key: t,
                          rel: "stylesheet",
                          type: "text/css",
                          href: e.src,
                        });
                      if (e.inline)
                        return a.createElement("style", {
                          key: t,
                          id: e.id,
                          dangerouslySetInnerHTML: { __html: e.inline },
                        });
                      throw new Error(
                        "bad style config ".concat(JSON.stringify(e))
                      );
                    }),
                null === (i = c.prefetch) || void 0 === i
                  ? void 0
                  : i.map((e, t) => {
                      if (e.src)
                        return a.createElement("link", {
                          key: t,
                          rel: "preload",
                          href: e.src,
                          as: e.as,
                        });
                      throw new Error(
                        "bad prefetch config ".concat(JSON.stringify(e))
                      );
                    }),
                a.createElement("script", {
                  type: "text/javascript",
                  dangerouslySetInnerHTML: { __html: (0, Ge.A)() },
                })
              );
            }),
            He = n(36105),
            Ue = n.n(He);
          const Be = (e) => "js-".concat(e),
            Ze = ["nytimes://login", "nytimes://createAccount"],
            Ye = (e, t) =>
              Ze.some((t) => e.startsWith(t)) ? e : "".concat(e).concat(t);
          function We() {
            return (
              (We = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              We.apply(this, arguments)
            );
          }
          var $e = (e) =>
            a.createElement(
              "button",
              We(
                {
                  type: "button",
                  className:
                    "pz-hybrid-back pz-hide-web pz-hide-play-tab pz-hide-newsreader-ios-hybrid",
                },
                e
              ),
              a.createElement(
                "span",
                { className: "pz-hybrid-back__text" },
                "Back"
              )
            );
          const Xe = () =>
              a.createElement(
                "svg",
                {
                  className: "pz-nav__logo",
                  width: "138",
                  height: "25",
                  viewBox: "0 0 138 25",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                a.createElement("rect", {
                  width: "138",
                  height: "25",
                  fill: "white",
                }),
                a.createElement("path", {
                  d: "M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z",
                  fill: "black",
                }),
                a.createElement("path", {
                  d: "M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z",
                  fill: "black",
                }),
                a.createElement("path", {
                  d: "M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z",
                  fill: "black",
                }),
                a.createElement("path", {
                  d: "M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z",
                  fill: "black",
                }),
                a.createElement("path", {
                  d: "M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z",
                  fill: "black",
                }),
                a.createElement("path", {
                  d: "M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z",
                  fill: "black",
                }),
                a.createElement("path", {
                  d: "M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z",
                  fill: "black",
                })
              ),
            Je = Le((e) => {
              let { navigationLinks: t, url: n, isTopSaleBanner: r } = e;
              const s = Ye(t.login, "&asset=navigation-bar"),
                i = a.createElement(
                  "a",
                  {
                    href: t.subscribe.default,
                    className: "pz-nav__button default ".concat(
                      Be("nav-subscribe"),
                      " pz-hide-sub"
                    ),
                    "data-track-label": "subscribe-nav",
                  },
                  "Subscribe"
                ),
                o =
                  (a.Fragment,
                  t.subscribe.default,
                  "pz-nav__button pz-hide-loading pz-hide-user-loading pz-hide-newsreader pz-hide-games-app pz-hide-hybrid pz-hide-ada pz-hide-sub pz-hide-digi subscribe js-sale-nav-tracker ".concat(
                    Be("nav-subscribe")
                  ),
                  t.subscribe.default,
                  "pz-nav__button pz-hide-loading pz-hide-user-loading pz-hide-newsreader pz-hide-games-app pz-hide-hybrid pz-hide-ada pz-hide-regi pz-hide-anon subscribe js-sale-nav-tracker ".concat(
                    Be("nav-subscribe")
                  ),
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      "a",
                      {
                        href: t.subscribe.default,
                        className:
                          "pz-nav__button pz-hide-loading pz-hide-user-loading pz-hide-newsreader pz-hide-games-app pz-hide-hybrid pz-hide-ada pz-hide-sub pz-hide-digi subscribe js-sale-nav-tracker ".concat(
                            Be("nav-subscribe")
                          ),
                        "data-track-label": "subscribe-nav-header",
                      },
                      "Subscribe for 50% Off"
                    ),
                    a.createElement(
                      "a",
                      {
                        href: t.subscribe.default,
                        className:
                          "pz-nav__button pz-hide-loading pz-hide-user-loading pz-hide-newsreader pz-hide-games-app pz-hide-hybrid pz-hide-ada pz-hide-sub pz-hide-regi pz-hide-anon subscribe js-sale-nav-tracker ".concat(
                            Be("nav-subscribe")
                          ),
                        "data-track-label": "subscribe-nav-header",
                      },
                      "Upgrade and Save"
                    )
                  )),
                l = a.createElement(
                  "a",
                  {
                    href: s,
                    className: "pz-nav__button white ".concat(
                      Be("nav-login"),
                      " pz-hide-regi pz-hide-sub pz-hide-digi"
                    ),
                    "data-track-label": "log-in-nav",
                  },
                  "Log In"
                ),
                c =
                  ("".concat(t.logout, "&asset=navigation-bar"),
                  "pz-nav__button gray ".concat(
                    Be("nav-logout"),
                    " pz-hide-anon"
                  ),
                  a.createElement(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Navigation menu button",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                      className:
                        "pz-nav__hamburger-helper pz-nav__hamburger pz-nav__hamburger-squeeze pz-hide-hybrid pz-hide-play-tab pz-hide-newsreader-android pz-hide-newsreader-ios",
                      id: Be("nav-burger"),
                    },
                    a.createElement(
                      "span",
                      { className: "pz-nav__hamburger-box" },
                      a.createElement("span", {
                        className: "pz-nav__hamburger-inner",
                      })
                    )
                  )),
                d = a.createElement($e, { id: Be("hybrid-back") }),
                u = a.createElement(
                  "a",
                  {
                    id: Be("logo-nav"),
                    className:
                      "pz-nav__title pz-h1 pz-hide-play-tab pz-hide-newsreader-android pz-hide-newsreader-ios",
                    href: t.hub,
                    "aria-label":
                      "New York Times Games Logo. Click for more puzzles",
                  },
                  a.createElement(Xe, null)
                );
              return a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "div",
                  { className: V()("pz-nav"), id: Be("global-nav") },
                  c,
                  d,
                  u,
                  a.createElement("div", {
                    className: "pz-nav__toolbar",
                    id: Be("mobile-toolbar"),
                  }),
                  a.createElement(
                    "div",
                    {
                      className: "pz-nav__actions pz-flex-row",
                      id: Be("nav-actions"),
                    },
                    i,
                    o,
                    l
                  )
                ),
                a.createElement("div", {
                  role: "menu",
                  "aria-label": "Navigation menu",
                  "aria-hidden": "true",
                  className:
                    "pz-nav-drawer pz-hide-hybrid pz-hide-play-tab pz-hide-newsreader-android pz-hide-newsreader-ios\n          ".concat(
                      r && "top-sale-banner-drawer"
                    ),
                  id: Be("nav-drawer"),
                })
              );
            });
          var Ke = Je;
          const Qe = (e) => {
            let { navigationLinks: t } = e;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "h4",
                { className: "pz-footer__section-header" },
                "About New York Times Games"
              ),
              a.createElement(
                "p",
                { className: "pz-footer__featured-text" },
                "Since the launch of The Crossword in 1942, The Times has captivated solvers by providing engaging word and logic games. In 2014, we introduced The Mini Crossword — followed by Spelling Bee, Letter Boxed and Tiles. In early 2022, we proudly added Wordle to our collection. Since then we have created Connections and Strands. We strive to offer puzzles for all skill levels that everyone can enjoy playing every day."
              ),
              a.createElement(
                "p",
                { className: "pz-footer__featured-text pz-hide-sub" },
                a.createElement(
                  "a",
                  {
                    href: t.subscribe.branding,
                    "data-track-label": "subscribe-now-footer",
                    className: Be("footer-tracking"),
                  },
                  "Subscribe now"
                ),
                " ",
                "for unlimited access."
              )
            );
          };
          Qe.propTypes = {
            navigationLinks: R().shape({
              subscribe: R().shape({ branding: R().string.isRequired })
                .isRequired,
            }).isRequired,
          };
          var et = Qe;
          const tt = (e) => {
            let { icon: t, className: n } = e;
            return a.createElement("i", {
              className: V()("pz-icon", "pz-icon-".concat(t), n),
            });
          };
          tt.propTypes = { icon: R().string.isRequired, className: R().string };
          var nt = tt;
          const rt = (e) => {
            let { navigationLinks: t } = e;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "h4",
                { className: "pz-footer__section-header" },
                "New York Times Games"
              ),
              a.createElement(
                "ul",
                { className: "pz-footer__list" },
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.daily,
                      "data-track-label": "daily-page-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "daily" }),
                    "The Crossword"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.mini,
                      "data-track-label": "mini-page-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "mini" }),
                    "The Mini Crossword"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.spellingBee,
                      "data-track-label": "spelling-bee-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "spelling-bee" }),
                    "Spelling Bee"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.wordle,
                      "data-track-label": "wordle-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "wordle" }),
                    "Wordle"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link pz-hide-newsreader" },
                  a.createElement(
                    "a",
                    {
                      href: t.strands,
                      "data-track-label": "strands-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "strands" }),
                    "Strands"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.connections,
                      "data-track-label": "connections-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "connections" }),
                    "Connections"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.tiles,
                      "data-track-label": "tiles-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "tiles" }),
                    "Tiles"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.letterBoxed,
                      "data-track-label": "letter-boxed-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "letter-boxed" }),
                    "Letter Boxed"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.sudoku,
                      "data-track-label": "sudoku-footer",
                      className: Be("footer-tracking"),
                    },
                    a.createElement(nt, { icon: "sudoku" }),
                    "Sudoku"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.hub,
                      "data-track-label": "all-games-footer",
                      className: Be("footer-tracking"),
                    },
                    "All Games"
                  )
                )
              )
            );
          };
          rt.propTypes = {
            navigationLinks: R().shape({
              daily: R().string.isRequired,
              mini: R().string.isRequired,
              spellingBee: R().string.isRequired,
              wordle: R().string.isRequired,
              strands: R().string.isRequired,
              connections: R().string.isRequired,
              tiles: R().string.isRequired,
              letterBoxed: R().string.isRequired,
              vertex: R().string.isRequired,
              sudoku: R().string.isRequired,
              hub: R().string.isRequired,
            }).isRequired,
          };
          var at = rt;
          const st = (e) => {
            let { navigationLinks: t } = e;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "h4",
                { className: "pz-footer__section-header" },
                "Crosswords"
              ),
              a.createElement(
                "ul",
                { className: "pz-footer__list" },
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.archive,
                      "data-track-label": "archive-footer",
                      className: Be("footer-tracking"),
                    },
                    "Crossword Archives"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.stats,
                      "data-track-label": "stats-footer",
                      className: Be("footer-tracking"),
                    },
                    "Statistics"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.leaderboards,
                      "data-track-label": "leaderboards-footer",
                      className: Be("footer-tracking"),
                    },
                    "Leaderboards"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.submission,
                      "data-track-label": "submit-crosswords-footer",
                      className: Be("footer-tracking"),
                    },
                    "Submit a Crossword"
                  )
                )
              )
            );
          };
          st.propTypes = {
            navigationLinks: R().shape({
              archive: R().string.isRequired,
              stats: R().string.isRequired,
              leaderboards: R().string.isRequired,
              submission: R().string.isRequired,
            }).isRequired,
          };
          var it = st;
          const ot = (e) => {
            let { navigationLinks: t } = e;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "h4",
                { className: "pz-footer__section-header" },
                "Community"
              ),
              a.createElement(
                "ul",
                { className: "pz-footer__list" },
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.wordplay,
                      "data-track-label": "wordplay-footer",
                      className: Be("footer-tracking"),
                    },
                    "Gameplay Stories"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.sbForum,
                      "data-track-label": "sb-forum-footer",
                      className: Be("footer-tracking"),
                    },
                    "Spelling Bee Forum"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.twitter,
                      "data-track-label": "twitter-footer",
                      className: Be("footer-tracking"),
                    },
                    "Games Twitter"
                  )
                )
              )
            );
          };
          ot.propTypes = {
            navigationLinks: R().shape({
              wordplay: R().string.isRequired,
              sbForum: R().string.isRequired,
              twitter: R().string.isRequired,
            }).isRequired,
          };
          var lt = ot;
          const ct = (e) => {
            let { navigationLinks: t } = e;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "h4",
                { className: "pz-footer__section-header" },
                "Learn More"
              ),
              a.createElement(
                "ul",
                { className: "pz-footer__list" },
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.faq,
                      "data-track-label": "faq-footer",
                      className: Be("footer-tracking"),
                    },
                    "FAQs"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link pz-hide-ios" },
                  a.createElement(
                    "a",
                    {
                      href: t.gift,
                      "data-track-label": "gift-subscription-footer",
                      className: Be("footer-tracking"),
                    },
                    "Gift Subscriptions"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link games-collection" },
                  a.createElement(
                    "a",
                    {
                      "data-medium": "footer",
                      "data-source": "nytimes-games",
                      href: "".concat(
                        t.shop,
                        "?utm_campaign=games_collection&utm_content=footer&utm_medium=referral&utm_source=nyt_games"
                      ),
                      "data-track-label": "times-store-footer",
                      className: Be("footer-tracking"),
                    },
                    "Shop the Games Collection"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement(
                    "a",
                    {
                      href: t.apps,
                      "data-track-label": "download-app-footer",
                      className: Be("footer-tracking"),
                    },
                    "Download the App"
                  )
                ),
                a.createElement(
                  "li",
                  { className: "pz-footer__link" },
                  a.createElement("span", { id: Be("feedback-link") })
                )
              )
            );
          };
          ct.propTypes = {
            navigationLinks: R().shape({
              faq: R().string.isRequired,
              gift: R().string.isRequired,
              shop: R().string.isRequired,
              apps: R().string.isRequired,
            }).isRequired,
          };
          var dt = ct;
          const ut = Le((e) => {
            let { navigationLinks: t, suppressFooterOnMobile: n } = e;
            return a.createElement(
              "footer",
              {
                className: V()("pz-footer pz-hide-loading", {
                  "pz-hide-mobile": n,
                }),
              },
              a.createElement(
                "div",
                { className: "pz-footer__wrapper" },
                a.createElement(
                  "section",
                  { className: "pz-footer__section pz-footer__about-us" },
                  a.createElement(et, { navigationLinks: t })
                ),
                a.createElement(
                  "section",
                  {
                    className: "pz-footer__section pz-footer__section-link-col",
                  },
                  a.createElement(at, { navigationLinks: t })
                ),
                a.createElement(
                  "section",
                  {
                    className: "pz-footer__section pz-footer__section-link-col",
                  },
                  a.createElement(it, { navigationLinks: t }),
                  a.createElement(lt, { navigationLinks: t })
                ),
                a.createElement(
                  "section",
                  {
                    className: "pz-footer__section pz-footer__section-link-col",
                  },
                  a.createElement(dt, { navigationLinks: t })
                ),
                a.createElement(
                  "section",
                  {
                    className:
                      "pz-footer__section pz-footer__legal pz-footer__section-link-col",
                  },
                  a.createElement("div", { id: Be("portal-footer-legal") })
                )
              )
            );
          });
          var mt = ut;
          const pt = "1_Show",
            ht = new Date("06/10/2024 10:00:00 GMT-0400"),
            bt = ht.getTime(),
            gt = new Date("07/22/2024 12:00:00 GMT-0400").getTime(),
            ft = new Date("06/24/2024 10:00:00 GMT-0400"),
            vt = new Date("07/08/2024 10:00:00 GMT-0400"),
            yt = new Date("07/18/2024 10:00:00 GMT-0400"),
            wt = new Date("07/20/2024 10:00:00 GMT-0400"),
            Et = new Date("07/21/2024 10:00:00 GMT-0400"),
            _t = {
              acqMessage: "Subscribe for 50% off",
              shortMessage: "Save 50% on Games",
              upgradeMessage: "Upgrade and save",
              campaignId: "89RW9",
              urgency: [
                {
                  color: "dark_yellow",
                  copy: "Final Hours",
                  shortCopy: "Final Hours",
                  startDate: new Date("07/21/2024 18:00:00 GMT-0400").getTime(),
                },
                {
                  color: "dark_yellow",
                  copy: "Ends Today",
                  shortCopy: "Ends Today",
                  startDate: Et.getTime(),
                },
                {
                  color: "dark_yellow",
                  copy: "Ends Tomorrow",
                  shortCopy: "Ends Tomorrow",
                  startDate: wt.getTime(),
                },
                {
                  color: "dark_yellow",
                  copy: "Ends Soon",
                  shortCopy: "Ends Soon",
                  startDate: yt.getTime(),
                },
                {
                  color: "green",
                  copy: "Time is running out",
                  shortCopy: "Time is running out",
                  startDate: vt.getTime(),
                },
                {
                  color: "green",
                  copy: "Offer Won’t Last",
                  shortCopy: "Offer Won’t Last",
                  startDate: ft.getTime(),
                },
                {
                  color: "black",
                  copy: "Limited Time Offer",
                  shortCopy: "Limited Time Offer",
                  startDate: ht.getTime(),
                },
              ],
            };
          function kt(e, t) {
            if (!t || !e) return e;
            const n = new URL(e);
            return (
              n.searchParams.set("campaignId", _t.campaignId), n.toString()
            );
          }
          const zt = new Date("02/27/2023 06:00:00 GMT-0400").getTime(),
            Nt = new Date("04/01/2023 10:00:00 GMT-0400").getTime(),
            Ot = [
              {
                copy: "Final Hours of the All Access Sale.",
                startDate: new Date("03/31/2023 13:00:00 GMT-0400").getTime(),
              },
              {
                copy: "The All Access Sale Ends Today.",
                startDate: new Date("03/31/2023 06:00:00 GMT-0400").getTime(),
              },
              {
                copy: "The All Access Sale Ends Tomorrow.",
                startDate: new Date("03/30/2023 06:00:00 GMT-0400").getTime(),
              },
              {
                copy: "The All Access Sale Ends Soon.",
                startDate: new Date("03/13/2023 06:00:00 GMT-0400").getTime(),
              },
              {
                copy: "The All Access Sale.",
                startDate: new Date("02/27/2023 06:00:00 GMT-0400").getTime(),
              },
            ];
          function Tt(e, t) {
            return function (n) {
              return (function (e, t, n) {
                var r, a;
                const s = null == e ? void 0 : e[t];
                let i = [];
                return (
                  null == s ||
                    null === (r = s.if) ||
                    void 0 === r ||
                    r.forEach((e) => {
                      e.hasOwnProperty("abtest_partition") &&
                        (i = e.abtest_partition);
                    }),
                  i &&
                    (null === (a = i) || void 0 === a ? void 0 : a.includes(n))
                );
              })(n, e, t);
            };
          }
          const Pt = Tt("MWD_phoenix_games_sale_nav", pt),
            St = Tt("MWD_phoenix_games_sale_cta", pt),
            jt = Tt("MWD_phoenix_games_sale_banner", pt);
          function Ct(e) {
            if (e && e.search) {
              const t = e.search("date-override"),
                n = e.substring(t);
              return new URLSearchParams(n).get("date-override");
            }
          }
          const Lt = (e) => {
            const t = Ct(e),
              n = new Date(t).getTime() || new Date().getTime();
            return n >= zt && n < Nt;
          };
          function Dt(e) {
            const t = Ct(e) || null,
              n = t ? new Date(t).getTime() : new Date().getTime();
            return n >= bt && n < gt;
          }
          function Mt(e) {
            const t = Ct(e),
              n = new Date(t).getTime() || new Date().getTime(),
              r = _t.urgency.find((e) => {
                let { startDate: t } = e;
                return n >= t && n < gt;
              });
            return {
              urgencyMessage: (null == r ? void 0 : r.copy) || "",
              shortUrgencyMessage: (null == r ? void 0 : r.shortCopy) || "",
              bannerColor: (null == r ? void 0 : r.color) || "#121212",
            };
          }
          const xt = (e) => {
            let { url: t, isDelta: n, navLinks: r } = e;
            const s = "undefined" == typeof window ? r : window.navigationLinks,
              i = Ye(s.login, "&asset=delta-mini-banner"),
              o = n ? i : "/subscription/games?campaignId=89RW9",
              l = n
                ? "Create an account or log in."
                : "Save on all of The Times, including Games.";
            return a.createElement(
              "a",
              {
                id: "top-sale-banner",
                href: o,
                rel: "noreferrer",
                className:
                  "pz-hide-loading pz-hide-user-loading pz-hide-newsreader pz-hide-games-app pz-hide-ada",
              },
              a.createElement(
                "div",
                { className: V()("top-sale-banner", { dark_yellow: n }) },
                a.createElement(
                  "div",
                  {
                    className: V()("top-sale-banner__copy", { small_font: n }),
                  },
                  a.createElement(
                    "span",
                    {
                      className: V()("top-sale-banner__urgency", {
                        downcase: n,
                      }),
                    },
                    n
                      ? "Track your stats and streaks."
                      : (function (e) {
                          const t = Ct(e),
                            n = new Date(t).getTime() || new Date().getTime(),
                            r = Ot.find((e) => {
                              let { startDate: t } = e;
                              return n >= t && n < Nt;
                            });
                          return r ? r.copy : "";
                        })(t)
                  ),
                  a.createElement(
                    "span",
                    { className: "top-sale-banner__text" },
                    l
                  )
                ),
                a.createElement("img", {
                  className: "top-sale-banner__icon",
                  src: "https://mwcm.nyt.com/dam/LP/games/banner/chevron-right.svg",
                  alt: "open banner",
                })
              )
            );
          };
          xt.propTypes = {
            url: R().string,
            isDelta: R().bool,
            navLinks: R().shape({ login: R().string }),
          };
          var At = xt;
          const Rt = "50% off your first year of Games.",
            It = "50% off your first year.",
            Gt =
              "/vi-assets/static-assets/images/MessageComponentLibrary/Chevron-Right-White.svg",
            Vt =
              "/vi-assets/static-assets/images/MessageComponentLibrary/Chevron-Right-Black.svg",
            qt = (e) => {
              const { url: t, subscribeUrl: n } = e,
                r = Mt(t);
              return a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "a",
                  {
                    href: n,
                    rel: "noreferrer",
                    className:
                      "pz-hide-loading pz-hide-user-loading pz-hide-ada pz-hide-games-app pz-hide-sub",
                    id: "games-sale-banner-a",
                    "data-testid": "games-sale-banner",
                  },
                  a.createElement(
                    "div",
                    {
                      className: V()(
                        "top-sale-banner games-sale-banner ".concat(
                          r.bannerColor
                        )
                      ),
                    },
                    a.createElement(
                      "div",
                      { className: V()("top-sale-banner__copy ") },
                      a.createElement("span", {
                        className: V()("top-sale-banner__urgency hide-on-xs"),
                        dangerouslySetInnerHTML: {
                          __html: "".concat(r.urgencyMessage, ": "),
                        },
                      }),
                      a.createElement("span", {
                        className: V()("top-sale-banner__urgency show-on-xs"),
                        dangerouslySetInnerHTML: {
                          __html: "".concat(r.shortUrgencyMessage, ": "),
                        },
                      }),
                      a.createElement(
                        "span",
                        { className: V()("hide-on-xs") },
                        Rt
                      ),
                      a.createElement(
                        "span",
                        { className: V()("show-on-xs") },
                        It
                      )
                    ),
                    a.createElement(
                      "div",
                      { className: "top-sale-banner__iconwrapper" },
                      "black" === r.bannerColor
                        ? a.createElement("img", {
                            className: "top-sale-banner__icon",
                            src: Gt,
                            alt: "open banner",
                          })
                        : a.createElement("img", {
                            className: "top-sale-banner__icon",
                            src: Vt,
                            alt: "open banner",
                          })
                    )
                  )
                )
              );
            };
          qt.propTypes = {
            url: R().string,
            subscribeUrl: R().string.isRequired,
          };
          const Ft = (e) => {
            const { url: t, subscribeUrl: n } = e,
              r = t.includes("/puzzles/vertex"),
              s = t.includes("/mini.html"),
              i = t.includes("/crosswords/game/daily"),
              o = Mt(t);
            return a.createElement(
              "a",
              {
                href: n,
                rel: "noreferrer",
                className: V()(
                  "pz-hide-loading pz-hide-user-loading pz-hide-ada pz-hide-sub",
                  {
                    "games-sale-banner-vertex": r,
                    "games-sale-banner-mini": s,
                    "games-sale-banner-daily": i,
                  }
                ),
                id: "cache-safe-games-sale-banner-a",
              },
              a.createElement(
                "div",
                {
                  className: V()(
                    "top-sale-banner",
                    "games-sale-banner",
                    o.bannerColor
                  ),
                },
                a.createElement(
                  "div",
                  { className: V()("top-sale-banner__copy ") },
                  a.createElement("span", {
                    className: V()("top-sale-banner__urgency hide-on-xs"),
                    dangerouslySetInnerHTML: {
                      __html: "".concat(o.urgencyMessage, ": "),
                    },
                  }),
                  a.createElement("span", {
                    className: V()("top-sale-banner__urgency show-on-xs"),
                    dangerouslySetInnerHTML: {
                      __html: "".concat(o.shortUrgencyMessage, ": "),
                    },
                  }),
                  a.createElement(
                    "span",
                    { className: "pz-hide-loading hide-on-xs" },
                    Rt
                  ),
                  a.createElement(
                    "span",
                    { className: "pz-hide-loading show-on-xs" },
                    It
                  ),
                  a.createElement(
                    "span",
                    {
                      className:
                        "pz-hide-loading pz-hide-regi pz-hide-anon pz-hide-sub pz-hide-digi",
                    },
                    "Save on all of The Times, including Games."
                  )
                ),
                a.createElement(
                  "div",
                  { className: "top-sale-banner__iconwrapper" },
                  "black" === o.bannerColor
                    ? a.createElement("img", {
                        className: "top-sale-banner__icon",
                        src: Gt,
                        alt: "open banner",
                      })
                    : a.createElement("img", {
                        className: "top-sale-banner__icon",
                        src: Vt,
                        alt: "open banner",
                      })
                )
              )
            );
          };
          Ft.propTypes = { url: R().string, subscribeUrl: R().string };
          const Ht = (e) => Lt(e),
            Ut = (e) => Dt(e),
            Bt = (e) => {
              let { url: t, subscribeUrl: n, navigationLinks: r } = e;
              const s = !Ht(t) && !Ut(t);
              return a.createElement(
                a.Fragment,
                null,
                s && a.createElement("div", { id: "delta-banner-portal" }),
                Ht(t) && a.createElement(At, { url: t, navLinks: r }),
                Ut(t) &&
                  a.createElement(Ft, { url: t, subscribeUrl: kt(n, !0) })
              );
            };
          Bt.propTypes = {
            url: R().string,
            subscribeUrl: R().string,
            navigationLinks: R().shape({
              login: R().string,
              gamesSalesBanner: R().string,
            }),
          };
          var Zt = Bt;
          const Yt = (e) => {
            let { isSubscriber: t, referrer: n, game: r, expiration: s } = e;
            const i = 1e3 * s;
            if (Date.now() > i || t || "/crosswords" !== n) return null;
            const o = p.find((e) => e.id === r),
              l = Ue()(i).format("MMMM Do");
            return a.createElement(xe, {
              containerClassNames: ["position-top", "centered"],
              bannerClassName: o.id,
              featuredLink: { text: o.name, link: o.url },
              bannerText: "is free to play until ".concat(l, "."),
            });
          };
          Yt.propTypes = {
            isSubscriber: R().bool.isRequired,
            referrer: R().string.isRequired,
            game: R().oneOf(p.map((e) => e.id)),
            expiration: R().number,
          };
          const Wt = (e, t) => e && Pt(t),
            $t = (e, t) => e && St(t),
            Xt = (e, t) => e && jt(t),
            Jt = (e) => {
              let { url: t, abraConfig: n } = e;
              const r = Dt(t);
              return {
                "pz-games-sale-banner": Xt(r, n),
                "pz-games-sale-nav": Wt(r, n),
                "pz-games-sale-cta": $t(r, n),
              };
            };
          function Kt() {
            return (
              (Kt = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              Kt.apply(this, arguments)
            );
          }
          function Qt(e, t) {
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
          function en(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Qt(Object(n), !0).forEach(function (t) {
                    var r, a, s, i;
                    (r = e),
                      (a = t),
                      (s = n[t]),
                      (a =
                        "symbol" ==
                        typeof (i = (function (e, t) {
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
                        })(a))
                          ? i
                          : i + "") in r
                        ? Object.defineProperty(r, a, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[a] = s);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Qt(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          R().shape({
            isLoggedIn: R().bool,
            hasDigi: R().bool,
            hasXwd: R().bool,
          }),
            R().string,
            R().shape({
              gamesAppPlatform: R().string,
              newsreaderAppPlatform: R().string,
            }),
            R().object,
            R().object,
            R().object,
            R().string,
            R().shape({ login: R().string }),
            Le((e) =>
              a.createElement(
                "html",
                { lang: "en-US" },
                a.createElement(Fe, e),
                a.createElement(
                  "body",
                  {
                    className: V()(
                      "pz-page pz-loading pz-user-loading",
                      { "pz-use-intercept": e.includeScreenIntercept },
                      Jt(en({}, e))
                    ),
                  },
                  a.createElement("div", { id: "portal-skip-nav" }),
                  a.createElement(
                    "header",
                    {
                      className: V()("pz-header pz-hide-loading", {
                        "pz-game-header": e.navProps && e.navProps.isGamePage,
                        "pz-has-messaging": e.hasMessaging,
                      }),
                    },
                    a.createElement(
                      Zt,
                      Kt({}, e, {
                        subscribeUrl: e.navigationLinks.subscribe.default,
                      })
                    ),
                    a.createElement(
                      Ke,
                      Kt({}, e.navProps, {
                        isTopSaleBanner: Ht(e.url),
                        hasMessaging: e.hasMessaging,
                        isGamesSale: Ut(e.url),
                      })
                    )
                  ),
                  e.includeScreenIntercept &&
                    a.createElement("div", { className: "pz-intercept" }),
                  a.createElement(
                    "div",
                    {
                      className: V()(
                        "pz-content pz-hide-loading",
                        e.contentClassName
                      ),
                    },
                    e.children
                  ),
                  a.createElement(mt, {
                    suppressFooterOnMobile: e.suppressFooterOnMobile,
                  }),
                  a.createElement(Ie, null)
                )
              )
            );
          Le((e) => {
            let { id: t, position: n } = e;
            return a.createElement(
              "div",
              {
                className:
                  "pz-section pz-section-filled pz-ad-box pz-desktop-only",
              },
              a.createElement("div", {
                className: "pz-ad place-ad",
                id: t,
                "data-position": n,
              })
            );
          });
          function tn() {
            return (
              (tn = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              tn.apply(this, arguments)
            );
          }
          R().node;
          var nn = (0, i.$j)((e) => {
              let { compliance: t, device: n } = e;
              return { compliance: t, deviceType: n };
            })((e) =>
              a.createElement(De, tn({ id: "ad-top", position: "top" }, e))
            ),
            rn = n(53789),
            an = n(14237),
            sn = n(68967);
          const on = (e, t) => Math.max(15, Math.round((80 * e) / t)),
            ln = (e) => ({ height: "".concat(e, "px") }),
            cn = (e) => {
              const { statsAndStreaks: t } = e;
              if (!t.streaks)
                return a.createElement(
                  se,
                  {
                    event: "hub-stats",
                    tagName: "article",
                    className: "hub-stats-card__puzzle-info",
                  },
                  a.createElement(
                    "a",
                    {
                      className:
                        "hub-stats-card__puzzle-info-content js-hub-tracker",
                      href: "/puzzles/stats",
                      "data-track-hub": ue.Nj,
                    },
                    a.createElement(
                      "div",
                      { className: "hub-stats-card__title" },
                      "My Average"
                    ),
                    a.createElement(
                      "div",
                      { className: "hub-stats-card__more-stats" },
                      "More Stats"
                    )
                  )
                );
              const { stats: n, streaks: r } = t,
                { currentStreak: s, longestStreak: i } = r,
                o = r.dateEnd,
                l = (new Date(o.replace(/-/g, "/")).getDay() + 6) % 7,
                c = n.statsByDay[l],
                {
                  thisWeeksTime: d,
                  avgTime: u,
                  bestTime: m,
                  latestDate: p,
                } = c,
                h = Math.max(d, u),
                b = on(u, h),
                g = on(m, h),
                f = on(d, h),
                v = o === p,
                y = !!u,
                w = !!s || !!i,
                E = a.createElement("div", {
                  className: "hub-stats-card__bar avg",
                  style: ln(b),
                }),
                _ = a.createElement(
                  "div",
                  { className: "hub-stats-card__bar best", style: ln(g) },
                  v ||
                    a.createElement(
                      "span",
                      { className: "hub-stats-card__time" },
                      (0, sn.$U)(m)
                    )
                ),
                k = a.createElement(
                  "div",
                  { className: "hub-stats-card__bar today", style: ln(f) },
                  a.createElement(
                    "span",
                    { className: "hub-stats-card__time" },
                    (0, sn.$U)(d)
                  )
                ),
                z = a.createElement(
                  "div",
                  { className: "hub-stats-card__no-stats" },
                  "Solve today’s crossword to see some more stats!"
                ),
                N = a.createElement(
                  "div",
                  { className: "hub-stats-card__streak-block" },
                  a.createElement(
                    "div",
                    { className: "hub-stats-card__streak-info" },
                    s,
                    a.createElement(
                      "div",
                      { className: "hub-stats-card__streak-type" },
                      "Current"
                    )
                  ),
                  a.createElement(
                    "div",
                    { className: "hub-stats-card__streak-info" },
                    i,
                    a.createElement(
                      "div",
                      { className: "hub-stats-card__streak-type" },
                      "Longest"
                    )
                  )
                );
              return a.createElement(
                "article",
                { className: "hub-stats-card__puzzle-info" },
                a.createElement(
                  "a",
                  {
                    className:
                      "hub-stats-card__puzzle-info-content js-hub-tracker",
                    href: "/puzzles/stats",
                    "data-track-hub": ue.Nj,
                  },
                  a.createElement(
                    "div",
                    { className: "hub-stats-card__title" },
                    "My Average"
                  ),
                  a.createElement(
                    "div",
                    { className: "hub-stats-card__chart-block" },
                    a.createElement(
                      "div",
                      { className: "hub-stats-card__bars-block" },
                      v && k,
                      y && _,
                      y && E,
                      y || z
                    ),
                    a.createElement(
                      "div",
                      { className: "hub-stats-card__day-of-week" },
                      y && c.label
                    )
                  ),
                  a.createElement(
                    "div",
                    {
                      className: w
                        ? "hub-stats-card__streak-title"
                        : "hub-stats-card__title",
                    },
                    "Streaks"
                  ),
                  w
                    ? N
                    : a.createElement(
                        "div",
                        {
                          className:
                            "hub-stats-card__no-stats hub-stats-card__no-streaks",
                        },
                        "No current streak"
                      ),
                  a.createElement(
                    "div",
                    { className: "hub-stats-card__more-stats" },
                    "More Stats"
                  )
                )
              );
            };
          cn.propTypes = {
            statsAndStreaks: R().shape({
              stats: R().shape({
                statsByDay: R().arrayOf(
                  R().shape({
                    thisWeeksTime: R().number.isRequired,
                    avgTime: R().number.isRequired,
                    bestTime: R().number.isRequired,
                    latestTime: R().number.isRequired,
                    label: R().string.isRequired,
                    latestDate: R().string.isRequired,
                  })
                ),
              }),
              streaks: R().shape({
                currentStreak: R().number.isRequired,
                longestStreak: R().number.isRequired,
              }),
            }),
          };
          var dn = (0, i.$j)((e) => {
            let { stats: t } = e;
            return {
              statsAndStreaks: { stats: t.dailyStats, streaks: t.streaks },
            };
          })(cn);
          const un = (e) => {
            let { sponsorship: t, hasXwd: n } = e;
            return t
              ? a.createElement(J, {
                  puzzleCollection: "promoPuzzle",
                  sponsorship: t,
                })
              : n
              ? a.createElement(dn, null)
              : a.createElement(ie, null);
          };
          un.propTypes = { hasXwd: R().bool, sponsorship: R().shape({}) };
          var mn = (0, i.$j)((e) => ({ sponsorship: e.sponsorship }))(un);
          function pn() {
            return (
              (pn = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              pn.apply(this, arguments)
            );
          }
          const hn = (e) => {
            let {
              puzzles: [t],
              user: n,
              subscribeLinks: r,
              section: s,
            } = e;
            const i = { user: n, subscribeLinks: r, section: s };
            return null;
          };
          hn.propTypes = {
            user: R().shape({}),
            subscribeLinks: R().shape({}),
            puzzles: R().arrayOf(R().shape({})),
            section: R().string,
          };
          var bn = (0, m.qC)(
            Z,
            (0, i.$j)((e) => ({ subscribeLinks: e.subscribeLinks }))
          )(hn);
          const gn = (e) => {
            let { os: t } = e,
              n = "";
            switch (t) {
              case "iOS":
                n =
                  "https://itunes.apple.com/us/app/nytimes-crossword-daily-word/id307569751?mt=8";
                break;
              case "Android":
                n =
                  "https://play.google.com/store/apps/details?id=com.nytimes.crossword&referrer=utm_source%3DAndroidReaderMini%26utm_medium%3DCongratsModule%26utm_term%3DgetTheApp%26utm_campaign%3DMiniUpsell&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
                break;
              default:
                n = "";
            }
            return a.createElement(
              se,
              {
                event: "hub-download-app",
                tagName: "a",
                href: n,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hub-link",
              },
              a.createElement("div", {
                className: V()(t.toLowerCase(), "js-hub-tracker"),
                "data-track-hub": ue.Wz,
                role: "button",
                "aria-label": "Download ".concat(t, " app"),
                tabIndex: 0,
              })
            );
          };
          gn.propTypes = { os: R().string };
          var fn = gn;
          const vn = (e) => {
            const t = Ue()(e),
              n = t.clone().subtract(1, "day");
            return "/"
              .concat((0, sn.p6)(n, "YYYY/MM/DD"), "/crosswords/daily-puzzle-")
              .concat((0, sn.p6)(t, "YYYY-MM-DD"), ".html");
          };
          var yn = Z((e) => {
            let {
              puzzles: [t],
              isMoarGamesVariant: n,
            } = e;
            return t
              ? a.createElement(
                  "a",
                  { href: vn(t.print_date), className: "hub-wordplay-link" },
                  "Read about today’s",
                  " ",
                  n ? "Crossword" : "puzzle"
                )
              : null;
          });
          const wn = (e) => {
            let { backgroundColor: t, children: n, className: r } = e;
            return a.createElement(
              "div",
              { className: V()(t, r, "section__section") },
              a.createElement("div", { className: "section__container" }, n)
            );
          };
          wn.propTypes = {
            backgroundColor: R().string,
            children: R().node,
            className: R().string,
          };
          var En = wn,
            _n = n(43401),
            kn = n(69802);
          var zn = n(155);
          const Nn = (e, t, n) => {
            const [r, a] = (e || "").split(".").map(Number);
            return !(r < t || (r === t && a < n));
          };
          var On = {
              flexContainer: "PillGrey-module_flexContainer__ODUKN",
              expandToRow:
                "PillGrey-module_expandToRow__aTomr PillGrey-module_flexContainer__ODUKN",
              mobileColumn: "PillGrey-module_mobileColumn__YpIYL",
              "visually-hidden": "PillGrey-module_visually-hidden__Hz7ml",
              pill: "PillGrey-module_pill__fJN18",
              default: "PillGrey-module_default__YL9K9",
              "top-right-edge": "PillGrey-module_top-right-edge__LLm7D",
              "top-right-edge-inner":
                "PillGrey-module_top-right-edge-inner__xGxjg",
              slideDown: "PillGrey-module_slideDown__wH1hZ",
              flyIn: "PillGrey-module_flyIn__MdsDx",
              flyOut: "PillGrey-module_flyOut__LQtPF",
              fadeIn: "PillGrey-module_fadeIn___mLnx",
            },
            Tn = (e) => {
              let {
                text: t = "New",
                position: n = "default",
                className: r = "",
              } = e;
              return a.createElement(
                "span",
                { className: V()(On.pill, On[n], r) },
                t
              );
            };
          const Pn = (e) => {
            let {
              id: t,
              name: n,
              description: r,
              url: s,
              subscribe: i,
              upsell: o,
              alwaysPlayable: l,
              newsreaderURL: c,
              isNewCard: d,
            } = e;
            const u = !!window.newsreaderAppPlatform,
              m = i && !l,
              p = (0, kn._7)() && void 0 !== c ? c : s;
            return u && "strands" === n.toLowerCase()
              ? null
              : a.createElement(
                  se,
                  {
                    event: "hub-".concat(t),
                    tagName: "a",
                    className: V()("hub-game-card", t, { subscribe: m }),
                    href: m ? i : p,
                  },
                  a.createElement(
                    "div",
                    {
                      role: "button",
                      tabIndex: 0,
                      className: "js-hub-tracker",
                      "data-track-hub": n,
                      "data-track-hub-context": t,
                    },
                    a.createElement(
                      "div",
                      {
                        className: V()("hub-game-card__cover", {
                          "hub-game-card__button__withPill": d,
                        }),
                      },
                      d && a.createElement(Tn, { position: "top-right-edge" }),
                      a.createElement("div", {
                        className: "hub-game-card__illustration",
                        "aria-label": n,
                        role: "img",
                      }),
                      a.createElement(
                        "h4",
                        { className: "hub-game-card__name" },
                        n
                      )
                    ),
                    a.createElement(
                      "div",
                      { className: "hub-game-card__content" },
                      a.createElement(
                        "p",
                        { className: "hub-game-card__description" },
                        m ? o : r
                      ),
                      a.createElement(
                        "div",
                        { className: "hub-game-card__button" },
                        m ? "Subscribe" : "Play"
                      )
                    )
                  )
                );
          };
          (Pn.propTypes = {
            id: R().string,
            url: R().string,
            name: R().string,
            upsell: R().string,
            subscribe: R().string,
            description: R().string,
            alwaysPlayable: R().bool,
            newsreaderURL: R().string,
            isNewCard: R().bool,
          }),
            (Pn.defaultProps = {
              upsell: "Challenge yourself with a new puzzle every day.",
            });
          var Sn = Pn;
          const jn = (e) => {
            let {
              id: t,
              name: n,
              url: r,
              subscribe: s,
              alwaysPlayable: i,
              multiLinkId: o,
              multiLinkUrl: l,
              multiLinkName: c,
              isNewMultiLink: d,
            } = e;
            const u = s && !i;
            return a.createElement(
              "div",
              {
                className: V()(
                  "hub-game-card",
                  "hub-dual-link",
                  "js-hub-tracker",
                  t,
                  { subscribe: u }
                ),
              },
              a.createElement(
                "div",
                { "data-track-hub": n, "data-track-hub-context": t },
                a.createElement(
                  se,
                  {
                    event: "hub-".concat(t),
                    tagName: "a",
                    href: u ? s : r,
                    className: V()(t, { subscribe: u }),
                    tabIndex: -1,
                  },
                  a.createElement(
                    "div",
                    { className: "hub-game-card__cover" },
                    a.createElement("div", {
                      className: "hub-game-card__illustration",
                      "aria-label": n,
                      role: "img",
                    }),
                    a.createElement(
                      "h4",
                      { className: "hub-game-card__name" },
                      n
                    )
                  )
                ),
                a.createElement(
                  "div",
                  { className: "hub-game-card__content" },
                  a.createElement(
                    se,
                    {
                      event: "hub-".concat(t),
                      tagName: "a",
                      href: u ? s : r,
                      className: V()(
                        "hub-game-card",
                        "hub-game-card__button",
                        t,
                        { subscribe: u }
                      ),
                    },
                    u ? "Subscribe" : "Play"
                  ),
                  a.createElement(
                    se,
                    {
                      event: "hub-".concat(o, "-").concat(t),
                      tagName: "a",
                      href: l,
                      className: V()(
                        "hub-game-card",
                        "hub-game-card__button",
                        "".concat(o, "-hub-").concat(t),
                        { "hub-game-card__button__withPill": d, subscribe: u }
                      ),
                      onClick: () => {
                        window.foundationTrack &&
                          window.foundationTrack("moduleInteraction", {
                            module: {
                              type: "click",
                              element: {
                                name: "hub",
                                label: "".concat(t, "-hub"),
                              },
                            },
                          });
                      },
                    },
                    d &&
                      a.createElement(Tn, {
                        text: "new",
                        position: "top-right-edge-inner",
                      }),
                    c
                  )
                )
              )
            );
          };
          jn.propTypes = {
            id: R().string,
            url: R().string,
            name: R().string,
            subscribe: R().string,
            alwaysPlayable: R().bool,
            multiLinkId: R().string,
            multiLinkUrl: R().string,
            multiLinkName: R().string,
            isNewMultiLink: R().bool,
          };
          var Cn = jn;
          function Ln() {
            return (
              (Ln = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              Ln.apply(this, arguments)
            );
          }
          function Dn(e, t) {
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
          function Mn(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Dn(Object(n), !0).forEach(function (t) {
                    var r, a, s, i;
                    (r = e),
                      (a = t),
                      (s = n[t]),
                      (a =
                        "symbol" ==
                        typeof (i = (function (e, t) {
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
                        })(a))
                          ? i
                          : i + "") in r
                        ? Object.defineProperty(r, a, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[a] = s);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Dn(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          const xn = (e) => {
            let { isMoarGamesVariant: t, subscribeLinks: n, ourGames: r } = e;
            const s =
                "undefined" != typeof window &&
                ("ios" === window.gamesAppPlatform ||
                "android" === window.gamesAppPlatform
                  ? Nn(window.gamesAppVersion, 4, 47)
                  : "android" !== window.newsreaderAppPlatform ||
                    Nn(window.newsreaderAppVersion, 10, 12)),
              { hasLoaded: i, userType: o } = (0, an.aF)(),
              [l, c] = (0, a.useState)(r),
              d =
                !(0, kn._7)() &&
                (!window.gamesAppPlatform ||
                  (0, _n.Cb)(window.gamesAppVersion, "5.15")),
              u = (0, zn.UF)();
            return (
              (0, a.useEffect)(() => {
                let e = g(o, n);
                u &&
                  (e = e.map((e) =>
                    "connections" === e.id
                      ? Mn(Mn({}, e), {}, { isMultiLink: !0 })
                      : Mn({}, e)
                  )),
                  d &&
                    (e = e.map((e) =>
                      "wordle" === e.id
                        ? Mn(Mn({}, e), {}, { isMultiLink: !0 })
                        : Mn({}, e)
                    )),
                  c(e);
              }, [i, o, d, u]),
              a.createElement(
                En,
                { className: "hub-our-games" },
                a.createElement(
                  "div",
                  { className: "hub-our-games__container" },
                  !t &&
                    a.createElement(
                      "h3",
                      { className: "section__header" },
                      "More Games"
                    ),
                  a.createElement(
                    "div",
                    { className: "hub-our-games__content" },
                    l.map((e) =>
                      s && e.isMultiLink
                        ? a.createElement(Cn, Ln({ key: e.id }, e))
                        : a.createElement(Sn, Ln({ key: e.id }, e))
                    )
                  )
                )
              )
            );
          };
          xn.propTypes = {
            isMoarGamesVariant: R().bool,
            subscribeLinks: R().object,
            ourGames: R().array,
          };
          var An = (0, i.$j)((e) => ({
            isMoarGamesVariant: (0, U.uU)(e),
            subscribeLinks: e.subscribeLinks,
            ourGames: (0, U.mh)(e),
          }))(xn);
          const Rn = /^8|^11$|^11\d{3}$/;
          const In =
            "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(
              ","
            );
          var Gn = (e) => In[e];
          const Vn = (e) => {
            let t,
              n,
              {
                todaysDate: r,
                streakLength: s,
                todaysDayIdx: i,
                lastStreakDate: o,
                verticalStreakLength: l,
                verticalStreakNextDate: c,
              } = e;
            if (!s && !l) return null;
            var d, u, m;
            (m = l),
              (u = s) >= 6 || u >= m
                ? ((t = "You’re on "
                    .concat(((d = s), Rn.test(d) ? "an" : "a"), " ")
                    .concat(s, " day streak!")),
                  (n = r !== o))
                : ((t =
                    l > 1
                      ? "You’ve solved "
                          .concat(l, " ")
                          .concat(Gn(i), "s in a row!")
                      : "You solved last ".concat(Gn(i), "!")),
                  (n = r === c));
            const p = a.createElement(
                a.Fragment,
                null,
                a.createElement("span", null, t),
                n && a.createElement("strong", null, "KEEP IT GOING")
              ),
              h = n
                ? a.createElement(
                    "a",
                    {
                      className: "hub-streak-encouragement",
                      href: "/crosswords/game/daily",
                    },
                    p
                  )
                : a.createElement(
                    "span",
                    { className: "hub-streak-encouragement" },
                    p
                  );
            return a.createElement("div", { className: "hub-wrap-message" }, h);
          };
          Vn.propTypes = {
            todaysDate: R().string,
            todaysDayIdx: R().number,
            streakLength: R().number,
            lastStreakDate: R().string,
            verticalStreakLength: R().number,
            verticalStreakNextDate: R().string,
          };
          var qn = (0, i.$j)((e) => ({
            todaysDate: (0, U.ut)(e),
            todaysDayIdx: (0, U.qY)(e),
            streakLength: (0, U.Dp)(e),
            lastStreakDate: (0, U.u5)(e),
            verticalStreakLength: (0, U.gs)(e),
            verticalStreakNextDate: (0, U.W_)(e),
          }))(Vn);
          const Fn = (e) => {
            let {
              isMoarGamesVariant: t,
              user: n,
              renderMini: r,
              renderDaily: s,
              renderGamesSection: i,
              renderAlternate: o,
              renderDownloadApp: l,
              renderPromotedLinks: c,
              renderAlternatePhone: d,
              hubDataloaded: u,
            } = e;
            return a.createElement(
              "div",
              {
                className: V()("hub-welcome", {
                  "promote-daily": u && (n.hasXwd || n.hasHd),
                  "moar-games-variant": t,
                }),
              },
              a.createElement(
                "div",
                { className: "hub-welcome__title today" },
                "Today’s Puzzles"
              ),
              a.createElement(
                "div",
                { className: "hub-welcome-sections" },
                a.createElement(
                  "div",
                  { className: "hub-welcome__section daily" },
                  s()
                ),
                a.createElement(
                  "div",
                  { className: "hub-welcome__section promoted-links" },
                  c()
                ),
                t &&
                  a.createElement(
                    "div",
                    { className: "hub-welcome__section games-section" },
                    i()
                  ),
                a.createElement(
                  "div",
                  { className: "hub-welcome__section mini" },
                  r()
                ),
                a.createElement(
                  "div",
                  { className: "hub-welcome__section alternate" },
                  o()
                ),
                a.createElement(
                  "div",
                  { className: "hub-welcome__section alternate-phone" },
                  d()
                )
              ),
              l &&
                a.createElement(
                  "div",
                  { className: "hub-welcome__section download-app" },
                  l()
                )
            );
          };
          Fn.propTypes = {
            isMoarGamesVariant: R().bool,
            user: R().shape({
              hasXwd: R().bool.isRequired,
              hasHd: R().bool.isRequired,
            }).isRequired,
            renderMini: R().func.isRequired,
            renderDaily: R().func.isRequired,
            renderGamesSection: R().func.isRequired,
            renderAlternate: R().func.isRequired,
            renderDownloadApp: R().func,
            renderPromotedLinks: R().func.isRequired,
            renderAlternatePhone: R().func.isRequired,
            hubDataloaded: R().bool,
          };
          var Hn = Fn;
          function Un(e) {
            let { cardType: t, fade: n } = e;
            return rn.tq
              ? a.createElement(Ee, { cardType: "mobileCrossword", fade: n })
              : a.createElement(Ee, { cardType: t, fade: n });
          }
          Un.propTypes = {
            cardType: R().string.isRequired,
            fade: R().bool.isRequired,
          };
          const Bn = (e) => {
            let { isMoarGamesVariant: t, device: n, hubDataLoaded: r } = e;
            const { userType: s, hasLoaded: i } = (0, an.aF)(),
              { hasXwd: o, regiId: l } = s,
              [c, d] = (0, a.useState)(!1),
              [u, m] = (0, a.useState)(!1);
            (0, a.useEffect)(() => {
              i &&
                r &&
                (d(!0),
                setTimeout(() => {
                  m(!0);
                }, 300));
            }, [r]);
            const p = n.os ? () => a.createElement(fn, { os: n.os }) : void 0;
            return a.createElement(Hn, {
              isMoarGamesVariant: t,
              user: s,
              hubDataloaded: r,
              renderDownloadApp: p,
              renderMini: () =>
                a.createElement(
                  a.Fragment,
                  null,
                  u
                    ? a.createElement(de, {
                        puzzleCollection: "miniPuzzle",
                        link: "/mini.html",
                        user: s,
                      })
                    : a.createElement(Un, { cardType: "secondary", fade: c })
                ),
              renderGamesSection: () => a.createElement(An, null),
              renderDaily: () =>
                a.createElement(
                  a.Fragment,
                  null,
                  u
                    ? a.createElement(bn, {
                        puzzleCollection: "dailyPuzzle",
                        section: "triptych",
                        user: s,
                      })
                    : a.createElement(Un, { cardType: "primary", fade: c })
                ),
              renderPromotedLinks: () =>
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(qn, null),
                  a.createElement(yn, {
                    puzzleCollection: "dailyPuzzle",
                    isMoarGamesVariant: t,
                  })
                ),
              renderAlternate: () =>
                a.createElement(
                  a.Fragment,
                  null,
                  u
                    ? a.createElement(mn, { hasXwd: o })
                    : a.createElement(Ee, { cardType: "tertiary", fade: c })
                ),
              renderAlternatePhone: () =>
                t
                  ? null
                  : a.createElement(
                      a.Fragment,
                      null,
                      u
                        ? a.createElement(ze, { user: s })
                        : a.createElement(Ee, { cardType: "tertiary", fade: c })
                    ),
            });
          };
          Bn.propTypes = {
            isMoarGamesVariant: R().bool,
            hubDataLoaded: R().bool,
            device: R().shape({ os: R().string }),
          };
          var Zn = (0, m.qC)(
            (0, i.$j)((e) => ({
              device: e.device,
              isMoarGamesVariant: (0, U.uU)(e),
              hubDataLoaded: Boolean(e.stats.loaded && e.puzzles.loaded),
            }))
          )(Bn);
          function Yn(e, t, n) {
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
          class Wn extends a.Component {
            constructor(e) {
              super(e),
                Yn(this, "componentDidMount", this.onView),
                Yn(this, "componentDidUpdate", this.onView),
                (this.state = { isOpen: e.startOpen || !1, hasBeenCalled: !1 });
            }
            shouldComponentUpdate(e, t) {
              const { isOpen: n } = this.state;
              return n !== t.isOpen;
            }
            onView() {
              const { onView: e } = this.props,
                { hasBeenCalled: t, isOpen: n } = this.state,
                r = !t;
              "function" == typeof e &&
                n &&
                (e(r), r && this.setState({ hasBeenCalled: !0 }));
            }
            toggle() {
              this.setState((e) => ({ isOpen: !e.isOpen }));
            }
            render() {
              const { title: e, children: t } = this.props,
                { isOpen: n } = this.state;
              return a.createElement(
                "div",
                {
                  className: V()("accordion__drawer", {
                    isOpen: n,
                    isClosed: !n,
                  }),
                },
                a.createElement(
                  "h6",
                  {
                    className: "accordion__drawerTitle",
                    onClick: () => this.toggle(),
                  },
                  e
                ),
                a.createElement(
                  "div",
                  { className: "accordion__drawerContent" },
                  t
                )
              );
            }
          }
          (Wn.propTypes = {
            startOpen: R().bool,
            onView: R().func,
            children: R().element,
            title: R().string,
          }),
            (Wn.defaultProps = {
              startOpen: !1,
              onView: () => {},
              children: null,
              title: "",
            });
          var $n = Wn,
            Xn = n(25361);
          const Jn = ["isCurrentTab", "title"];
          function Kn() {
            return (
              (Kn = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              Kn.apply(this, arguments)
            );
          }
          const Qn = (e) => {
            let { isCurrentTab: t, title: n } = e,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      a = {},
                      s = Object.keys(e);
                    for (r = 0; r < s.length; r++)
                      (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < s.length; r++)
                    (n = s[r]),
                      t.indexOf(n) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, n) &&
                          (a[n] = e[n]));
                }
                return a;
              })(e, Jn);
            return a.createElement(
              "button",
              Kn({ type: "button" }, r),
              a.createElement("span", null, n),
              t
                ? a.createElement(
                    "div",
                    { className: "active" },
                    a.createElement("span", null, n)
                  )
                : null
            );
          };
          Qn.propTypes = {
            isCurrentTab: R().bool,
            title: R().string.isRequired,
          };
          var er = Qn;
          const tr = ["children"];
          const nr = ["phone", "tablet", "desktop", "smallDevice"],
            rr = (e) =>
              Object.keys(e).reduce((t, n) => {
                if (!nr.includes(n))
                  throw new Error(
                    "Visibility expected one of ".concat(nr.join())
                  );
                return e[n] && t.push(n), t;
              }, []),
            ar = {
              children: R().oneOfType([
                R().element,
                R().string,
                R().arrayOf(R().element),
              ]),
              phone: R().bool,
              tablet: R().bool,
              desktop: R().bool,
              smallDevice: R().bool,
            },
            sr = (e) => {
              let { children: t } = e,
                n = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    a = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        a = {},
                        s = Object.keys(e);
                      for (r = 0; r < s.length; r++)
                        (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                      return a;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                      (n = s[r]),
                        t.indexOf(n) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (a[n] = e[n]));
                  }
                  return a;
                })(e, tr);
              return a.createElement(
                "div",
                { className: V()("hideOn", ...rr(n)) },
                t
              );
            };
          sr.propTypes = ar;
          var ir = n(98688);
          function or() {
            return (
              (or = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              or.apply(this, arguments)
            );
          }
          const lr = Z((e) => {
              let { puzzles: t, user: n, showProgress: r } = e;
              return a.createElement(
                "section",
                null,
                a.createElement(
                  "h2",
                  { className: "progress__sectionHeader" },
                  "Monthly Bonus"
                ),
                r
                  ? a.createElement(
                      se,
                      { event: "hub-monthly-bonus" },
                      a.createElement(oe.Z, {
                        puzzle: t[0],
                        user: n,
                        type: "Island",
                        section: "monthly-bonus",
                      })
                    )
                  : a.createElement(Ee, { cardType: "bonus" })
              );
            }),
            cr = () =>
              a.createElement(
                "div",
                { className: "progress__playMoreLink" },
                a.createElement(
                  "a",
                  { href: "/crosswords/archive" },
                  "PLAY MORE FROM THE ARCHIVE"
                )
              ),
            dr = (e) => {
              let {
                useStreakLines: t,
                puzzles: n,
                timeFormatter: r,
                streakDates: s,
                user: i,
                titleFormat: o = "ddd",
                children: l,
                isPending: c,
                className: d,
                section: u,
                setShowPlayMoreLink: m,
              } = e;
              const p = n.map((e) => e.print_date),
                h = r ? r(p) : [],
                b = t && s ? (0, sn.k$)(s, p) : [],
                g = !c && 0 === n.length;
              return (
                (0, a.useEffect)(() => {
                  "last-7-days" !== u && m(!g);
                }, [u, g]),
                g
                  ? a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(
                        "div",
                        {
                          className:
                            "expandToRow progress__noProgressContainer",
                          style: { minHeight: 162 },
                        },
                        l
                      )
                    )
                  : a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(
                        "div",
                        { className: d, style: { minHeight: 162 } },
                        n
                          .slice(0, 7)
                          .map((e, t) =>
                            a.createElement(
                              oe.Z,
                              or(
                                {
                                  key: e.puzzle_id,
                                  type: "Thumbnail",
                                  dateFormat: h[t],
                                  title: (0, sn.p6)(e.print_date, o),
                                  puzzle: e,
                                },
                                b[t],
                                { user: i, section: u }
                              )
                            )
                          )
                      ),
                      a.createElement(
                        "div",
                        { className: "progress__desktopOnly" },
                        a.createElement(cr, null)
                      )
                    )
              );
            };
          dr.propTypes = {
            puzzles: R().arrayOf(R().shape({})),
            timeFormatter: R().func,
            streakDates: R().arrayOf(R().arrayOf(R().string)),
            titleFormat: R().string,
            isPending: R().bool,
            children: R().oneOfType([R().element, R().string]),
            className: R().string,
            useStreakLines: R().bool,
            user: R().shape({}),
            section: R().string,
            setShowPlayMoreLink: R().func,
            collectionsLoaded: R().bool,
          };
          const ur = Z(
              (0, i.$j)((e) => ({
                streakDates: e.stats.streaks && e.stats.streaks.dates,
              }))(dr)
            ),
            mr = () =>
              a.createElement(
                "div",
                { className: "progress__noProgress" },
                a.createElement(
                  "p",
                  null,
                  "Choose from over 20 years of the puzzles in our archive."
                ),
                a.createElement(cr, null)
              ),
            pr = (e, t) =>
              a.createElement(
                "div",
                { className: e },
                [...Array(7)].map((e, n) =>
                  a.createElement(Ee, { key: n, cardType: t })
                )
              ),
            hr = () => {
              const e = {
                  Tab: a.createElement(er, { title: "Last 7 Days" }),
                  content: pr("expandToRow", "day"),
                  key: "last-7-loading",
                },
                t = {
                  Tab: a.createElement(er, { title: "In Progress" }),
                  content: pr("expandToRow", "day"),
                  key: "in-progress",
                };
              return a.createElement(Xn.Z, { tabs: [e, t] });
            },
            br = () => [
              a.createElement(
                $n,
                { key: "last-7", title: "Last 7 Days", startOpen: !0 },
                pr("progress__accordionContent", "dayAccordion")
              ),
              a.createElement(
                $n,
                { key: "recent", title: "In Progress" },
                pr("progress__accordionContent", "dayAccordion")
              ),
            ],
            gr = (e) => {
              let {
                fetchRecent: t,
                hubDataLoaded: n,
                collectionsLoaded: r,
              } = e;
              const [s, i] = (0, a.useState)(!0),
                [o, l] = (0, a.useState)(!1),
                { userType: c, hasLoaded: d } = (0, an.aF)(),
                { regiId: u, hasXwd: m } = c;
              o || (l(!0), t(u));
              const p = d && n && r,
                h = [
                  a.createElement(
                    $n,
                    { key: "last-7", title: "Last 7 Days", startOpen: !0 },
                    a.createElement(ur, {
                      useStreakLines: !0,
                      puzzleCollection: "weeklyPuzzles",
                      timeFormatter: sn.Ov,
                      titleFormat: "dddd",
                      className: "progress__accordionContent",
                      user: c,
                      section: "last-7-days",
                      setShowPlayMoreLink: i,
                    })
                  ),
                ],
                b = [
                  {
                    Tab: a.createElement(er, { title: "Last 7 Days" }),
                    content: a.createElement(ur, {
                      useStreakLines: !0,
                      puzzleCollection: "weeklyPuzzles",
                      timeFormatter: sn.Ov,
                      className: "expandToRow",
                      user: c,
                      section: "last-7-days",
                      setShowPlayMoreLink: i,
                    }),
                    key: "last-7",
                  },
                ];
              return (
                m &&
                  (h.push(
                    a.createElement(
                      $n,
                      { key: "recent", title: "In Progress" },
                      a.createElement(
                        ur,
                        {
                          puzzleCollection: "recentPuzzles",
                          titleFormat: "dddd",
                          className: "progress__accordionContent",
                          user: c,
                          section: "in-progress",
                          setShowPlayMoreLink: i,
                        },
                        a.createElement(mr, null)
                      )
                    )
                  ),
                  b.push({
                    Tab: a.createElement(er, { title: "In Progress" }),
                    content: a.createElement(
                      ur,
                      {
                        puzzleCollection: "recentPuzzles",
                        className: "expandToRow",
                        user: c,
                        section: "in-progress",
                        setShowPlayMoreLink: i,
                      },
                      a.createElement(mr, null)
                    ),
                    key: "in-progress",
                  })),
                a.createElement(
                  En,
                  { backgroundColor: "white" },
                  c.hasXwd &&
                    a.createElement(
                      sr,
                      { phone: !0, smallDevice: !0 },
                      a.createElement(lr, {
                        puzzleCollection: "bonusPuzzle",
                        user: c,
                        showProgress: p,
                      })
                    ),
                  a.createElement(
                    "div",
                    { className: "progress__recentlyTabbedModule" },
                    a.createElement(
                      "div",
                      { className: "progress__mobileOnly" },
                      p ? h : a.createElement(br, null),
                      s && a.createElement(cr, null)
                    ),
                    a.createElement(
                      "div",
                      { className: "progress__tabGroup" },
                      p
                        ? a.createElement(Xn.Z, { tabs: b })
                        : a.createElement(hr, null)
                    )
                  )
                )
              );
            };
          gr.propTypes = {
            fetchRecent: R().func.isRequired,
            hubDataLoaded: R().bool,
            collectionsLoaded: R().bool,
          };
          var fr = (0, i.$j)(
            (e) => ({
              hubDataLoaded: Boolean(e.puzzles.loaded && e.stats.loaded),
              collectionsLoaded: Boolean(e.collections.loaded),
            }),
            (e, t) => {
              let { api: n } = t;
              return {
                fetchRecent: (t) => e((0, ir.up)(n.fetchRecentPuzzles, t)),
              };
            }
          )(gr);
          const vr = (e) => {
            let { children: t, className: n, title: r } = e;
            return a.createElement(
              En,
              { backgroundColor: "white" },
              a.createElement(
                "div",
                { className: V()("hub-guide-promo-section", n) },
                a.createElement("h3", { className: "hub-section-header" }, r),
                a.createElement(
                  "div",
                  { className: "hub-guide-promo-content" },
                  t
                )
              )
            );
          };
          vr.propTypes = {
            className: R().string,
            children: R().oneOfType([R().element, R().arrayOf(R().element)]),
            title: R().string,
          };
          const yr = (e) => {
            let { children: t, link: n } = e;
            return a.createElement(
              "a",
              {
                className: "hub-guide-promo-card js-hub-tracker",
                href: n,
                "data-track-hub": ue.W9,
              },
              a.createElement("div", {
                className: "hub-guide-promo-card-illustration",
              }),
              a.createElement(
                "div",
                { className: "hub-guide-promo-card-content" },
                t
              )
            );
          };
          yr.propTypes = { children: R().element, link: R().string };
          var wr = () =>
            a.createElement(
              vr,
              { title: "Featured Article" },
              a.createElement(
                yr,
                { link: "/guides/crosswords/how-to-solve-a-crossword-puzzle" },
                a.createElement(
                  se,
                  { tagName: "div", event: "hub-featured-article" },
                  a.createElement(
                    "h2",
                    null,
                    "How to Solve ",
                    a.createElement("br", null),
                    "The New York Times Crossword"
                  ),
                  a.createElement("p", null, "A Guide by DEB AMLEN"),
                  a.createElement(
                    "p",
                    null,
                    "With patience and practice anyone can learn to solve crosswords.",
                    " ",
                    a.createElement(
                      "span",
                      { className: "hub-guide-promo-link" },
                      "Read More"
                    )
                  )
                )
              )
            );
          const Er = (e) => {
            let {
              user: t,
              track: n,
              title: r,
              isFree: s,
              puzzles: i,
              moreLink: o,
              subscribeLinks: l,
              puzzleCollection: c,
            } = e;
            return a.createElement(
              En,
              { backgroundColor: "white" },
              a.createElement(
                se,
                { event: n, tagName: "section", className: "hub-puzzle-group" },
                a.createElement("h2", { className: "hub-section-header" }, r),
                a.createElement(
                  "div",
                  { className: "hub-expand-to-row" },
                  i.map((e) =>
                    a.createElement(oe.Z, {
                      user: t,
                      type: "Island",
                      puzzle: e,
                      isFree: s,
                      key: e.puzzle_id,
                      collection: c,
                      subscribeLinks: l,
                      section: "variety-puzzles",
                    })
                  )
                ),
                o &&
                  a.createElement(
                    "div",
                    { className: "hub-puzzle-group__more-link" },
                    a.createElement("a", { href: o }, "MORE")
                  )
              )
            );
          };
          Er.propTypes = {
            isFree: R().bool,
            title: R().string,
            track: R().string,
            user: R().shape({}),
            moreLink: R().string,
            puzzleCollection: R().string,
            subscribeLinks: R().shape({}),
            puzzles: R().arrayOf(R().shape({})),
          };
          var _r = (0, m.qC)(
            Z,
            (0, i.$j)((e) => {
              let { user: t, subscribeLinks: n } = e;
              return { user: t, subscribeLinks: n };
            })
          )(Er);
          const kr = (e) => {
            let { subscribeLinks: t } = e;
            return a.createElement(
              "div",
              { className: "hub-mobile-stats__no-upsell-container" },
              a.createElement("p", null, "Want to see your personal stats?"),
              a.createElement(
                "div",
                { className: "hub-mobile-stats__chart-block" },
                a.createElement(
                  "div",
                  { className: "hub-mobile-stats__bars-block" },
                  a.createElement("div", { className: "grey" }),
                  a.createElement("div", { className: "grey" }),
                  a.createElement("div", { className: "grey" })
                )
              ),
              a.createElement(
                "a",
                { className: "hub-mobile-stats__sub-link", href: t.default },
                "Subscribe"
              )
            );
          };
          var zr = kr;
          function Nr() {
            return a.createElement(
              "div",
              { className: "hub-mobile-stats__stats-container" },
              a.createElement(
                "div",
                { className: "hub-mobile-stats__stats-chart-block" },
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "div",
                    { className: "hub-mobile-stats__stats-chart-label" },
                    "Mini"
                  ),
                  a.createElement(
                    "div",
                    {
                      className:
                        "hub-mobile-stats__stats-bars-block hub-mobile-stats__stats-loading",
                    },
                    a.createElement("div", {
                      className: "hub-mobile-stats__stats-bars-grey--xshort",
                    }),
                    a.createElement("div", {
                      className: "hub-mobile-stats__stats-bars-grey--short",
                    })
                  )
                ),
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "div",
                    { className: "hub-mobile-stats__stats-chart-label" },
                    "Daily"
                  ),
                  a.createElement(
                    "div",
                    {
                      className:
                        "hub-mobile-stats__stats-bars-block hub-mobile-stats__stats-loading",
                    },
                    a.createElement("div", {
                      className: "hub-mobile-stats__stats-bars-grey--xshort",
                    }),
                    a.createElement("div", {
                      className: "hub-mobile-stats__stats-bars-grey--short",
                    })
                  )
                )
              ),
              a.createElement(
                "a",
                {
                  href: "/puzzles/stats",
                  className: "hub-mobile-stats__stats-more",
                },
                "More"
              )
            );
          }
          kr.propTypes = { subscribeLinks: R().shape({ default: R().string }) };
          const Or = (e) => {
            let { statsAndStreaks: t, subscribeLinks: n, statsLoaded: r } = e;
            const { userType: s, hasLoaded: i } = (0, an.aF)(),
              { stats: o, streaks: l, miniStats: c } = t,
              d = i && r,
              u = (i && !s.hasXwd) || (d && !l),
              m = a.createElement(
                "div",
                { className: "hub-mobile-stats__no-stats" },
                "No Data"
              );
            if (!d)
              return a.createElement(
                "div",
                { className: "hub-mobile-stats__container" },
                a.createElement("h2", null, "Statistics"),
                a.createElement(Nr, null)
              );
            if (u)
              return a.createElement(
                "div",
                { className: "hub-mobile-stats__container" },
                a.createElement("h2", null, "Statistics"),
                a.createElement(zr, { user: s, subscribeLinks: n })
              );
            const { bestTime: p, todaysTime: h } = c,
              b = l.dateEnd,
              g = (new Date(b.replace(/-/g, "/")).getDay() + 6) % 7,
              f = o.statsByDay[g],
              { thisWeeksTime: v, avgTime: y, bestTime: w } = f,
              E = Math.max(v, y),
              _ = on(w, E),
              k = on(p, h),
              z = on(v, E),
              N = on(h, h),
              O = !!w,
              T = !!p,
              P = !v && !O,
              S = a.createElement(
                "div",
                { className: "hub-mobile-stats__best daily", style: ln(_) },
                a.createElement(
                  "span",
                  { className: "hub-mobile-stats__time" },
                  (0, sn.$U)(w)
                )
              ),
              j = a.createElement(
                "div",
                { className: "hub-mobile-stats__today daily", style: ln(z) },
                a.createElement(
                  "span",
                  { className: "hub-mobile-stats__time" },
                  (0, sn.$U)(v)
                )
              ),
              C = a.createElement(
                "div",
                { className: "hub-mobile-stats__best mini", style: ln(k) },
                a.createElement(
                  "span",
                  { className: "hub-mobile-stats__time" },
                  (0, sn.$U)(p)
                )
              ),
              L = a.createElement(
                "div",
                { className: "hub-mobile-stats__today mini", style: ln(N) },
                a.createElement(
                  "span",
                  { className: "hub-mobile-stats__time" },
                  (0, sn.$U)(h)
                )
              );
            return a.createElement(
              "div",
              {
                "data-track-hub": ue.Nj,
                className: "hub-mobile-stats__container js-hub-tracker",
              },
              a.createElement("h2", null, "Statistics"),
              a.createElement(
                "div",
                { className: "hub-mobile-stats__stats-container" },
                a.createElement(
                  "div",
                  { className: "hub-mobile-stats__stats-chart-block" },
                  a.createElement(
                    "div",
                    null,
                    a.createElement(
                      "div",
                      { className: "hub-mobile-stats__stats-chart-label" },
                      "Mini"
                    ),
                    a.createElement(
                      "div",
                      {
                        className: V()("hub-mobile-stats__stats-bars-block", {
                          "hub-mobile-stats__no-stats-block": !T,
                        }),
                      },
                      !!h && L,
                      T ? C : m
                    )
                  ),
                  a.createElement(
                    "div",
                    null,
                    a.createElement(
                      "div",
                      { className: "hub-mobile-stats__stats-chart-label" },
                      "Daily"
                    ),
                    a.createElement(
                      "div",
                      {
                        className: V()("hub-mobile-stats__stats-bars-block", {
                          "hub-mobile-stats__no-stats-block": P,
                        }),
                      },
                      P && m,
                      !!v && j,
                      O && S
                    )
                  )
                ),
                a.createElement(
                  "a",
                  {
                    href: "/puzzles/stats",
                    className: "hub-mobile-stats__stats-more",
                  },
                  "More"
                )
              )
            );
          };
          var Tr = (0, i.$j)((e) => ({
            statsAndStreaks: {
              stats: e.stats.dailyStats,
              streaks: e.stats.streaks,
              miniStats: e.stats.miniStats,
            },
            statsLoaded: e.stats.loaded,
            subscribeLinks: e.subscribeLinks,
          }))(Or);
          Or.propTypes = {
            subscribeLinks: R().shape({}),
            statsAndStreaks: R().shape({
              stats: R().shape({
                statsByDay: R().arrayOf(
                  R().shape({
                    thisWeeksTime: R().number.isRequired,
                    avgTime: R().number.isRequired,
                    bestTime: R().number.isRequired,
                    latestTime: R().number.isRequired,
                    label: R().string.isRequired,
                    latestDate: R().string.isRequired,
                  })
                ),
              }),
              streaks: R().shape({
                currentStreak: R().number.isRequired,
                longestStreak: R().number.isRequired,
                dateEnd: R().string.isRequired,
              }),
              miniStats: R().shape({
                bestDate: R().string.isRequired,
                bestTime: R().number.isRequired,
                todaysDate: R().string.isRequired,
                todaysTime: R().number.isRequired,
              }),
            }),
            statsLoaded: R().bool,
          };
          var Pr = n(37861);
          const Sr = (e) => {
            const { id: t, position: n, deviceType: r = {}, compliance: s } = e,
              { isMobile: i } = r;
            return i && s.ads
              ? a.createElement(
                  "div",
                  { className: "ad-container pz-section pz-section-filled" },
                  a.createElement("div", {
                    className: "inner-ad-container place-ad",
                    id: t,
                    "data-position": n,
                  })
                )
              : null;
          };
          Sr.propTypes = {
            id: R().string,
            position: R().string,
            deviceType: R().shape({ isMobile: R().bool }),
            compliance: R().shape({ ads: R().bool }),
          };
          var jr = Sr;
          const Cr = (e) => {
            const t = document.body.clientWidth < 768;
            return t &&
              window.location.search &&
              window.location.search.includes("moarGames=1")
              ? w.mS
              : !1 === w.Eh
              ? w._D
              : t
              ? w.mS
              : void 0 !== e
              ? !1 === w.Eh || e.isTablet
                ? w._D
                : e.isMobile && !e.newsreaderAppPlatform
                ? w.mS
                : w._D
              : void 0;
          };
          var Lr = (0, i.$j)((e) => {
            let { sponsorship: t } = e;
            return { sponsorship: t };
          })((e) => a.createElement(Me, e));
          const Dr = (e) => {
            let {
              hubVariant: t,
              api: n,
              fetchStatsAndStreaks: r,
              fetchAllPuzzleProgress: s,
              recallPrintPreferences: i,
              isMoarGamesVariant: o,
              updateVariant: l,
              device: c,
              compliance: d,
              updateStatsLoaded: u,
              updatePuzzlesLoaded: m,
              progressLoaded: p,
            } = e;
            const { userType: h, hasLoaded: b } = (0, an.aF)(),
              { regiId: g, hasXwd: f } = h;
            (0, a.useLayoutEffect)(() => {
              const e = Cr(c);
              l(e);
            }, []),
              (0, a.useEffect)(() => {
                if (b && g && !p) s(h), r(g), i(g);
                else if (b && !g) return u(), void m();
              }, [b, g]),
              (0, a.useEffect)(() => {
                const e = (function (e, t, n) {
                  var r,
                    a,
                    s,
                    i = null,
                    o = 0;
                  n || (n = {});
                  var l = function () {
                    (o = !1 === n.leading ? 0 : Date.now()),
                      (i = null),
                      (s = e.apply(r, a)),
                      i || (r = a = null);
                  };
                  return function () {
                    var t = Date.now();
                    o || !1 !== n.leading || (o = t);
                    var c = 500 - (t - o);
                    return (
                      (r = this),
                      (a = arguments),
                      c <= 0 || c > 500
                        ? (i && (clearTimeout(i), (i = null)),
                          (o = t),
                          (s = e.apply(r, a)),
                          i || (r = a = null))
                        : i || !1 === n.trailing || (i = setTimeout(l, c)),
                      s
                    );
                  };
                })(() => {
                  const e = Cr(c);
                  e !== t && l(e);
                });
                return (
                  window.addEventListener("resize", e),
                  () => {
                    window.removeEventListener("resize", e);
                  }
                );
              }, [t]);
            const v = a.createElement(
                a.Fragment,
                null,
                a.createElement(Lr, null),
                a.createElement(Zn, { showStatsAndStreaks: !0 }),
                c.isMobile
                  ? a.createElement(jr, {
                      id: "ad-mid1",
                      position: "mid1",
                      deviceType: c,
                      compliance: d,
                    })
                  : a.createElement(nn, null),
                !o && a.createElement(An, null),
                o && a.createElement(ze, { user: h }),
                a.createElement(fr, { api: n }),
                a.createElement(Tr, null),
                a.createElement(wr, null)
              ),
              y = a.createElement(
                a.Fragment,
                null,
                c.isMobile ? null : a.createElement(nn, null),
                a.createElement(Lr, null),
                a.createElement(Zn, null),
                c.isMobile
                  ? a.createElement(jr, {
                      id: "ad-mid1",
                      position: "mid1",
                      deviceType: c,
                      compliance: d,
                    })
                  : null,
                !o && a.createElement(An, null),
                a.createElement(Tr, null),
                a.createElement(wr, null),
                a.createElement(_r, {
                  track: "free-puzzles",
                  title: "Free From Our Archive",
                  puzzleCollection: "freePuzzles",
                  moreLink: "/crosswords/archive",
                })
              ),
              w = a.createElement(
                a.Fragment,
                null,
                a.createElement(Lr, null),
                a.createElement(Zn, null),
                c.isMobile
                  ? a.createElement(jr, {
                      id: "ad-mid1",
                      position: "mid1",
                      deviceType: c,
                      compliance: d,
                    })
                  : a.createElement(nn, null),
                a.createElement(fr, { api: n }),
                a.createElement(wr, null),
                !o && a.createElement(An, null),
                a.createElement(Tr, null),
                o && a.createElement(ze, { user: h }),
                a.createElement(_r, {
                  track: "free-puzzles",
                  title: "Free From Our Archive",
                  puzzleCollection: "freePuzzles",
                  moreLink: "/crosswords/archive",
                })
              );
            return a.createElement(
              a.Fragment,
              null,
              ((e) => {
                let { hasXwd: t, hasHd: n } = e;
                return t ? v : n ? w : y;
              })(h),
              a.createElement(Pr.Z, null),
              a.createElement(jr, {
                id: "ad-bottom",
                adUnitPath: "crosswords",
                position: "bottom",
                deviceType: c,
                compliance: d,
              })
            );
          };
          Dr.propTypes = {
            api: R().shape({
              fetchAllStats: R().func,
              fetchPuzzleProgress: R().func,
            }),
            fetchAllPuzzleProgress: R().func.isRequired,
            fetchStatsAndStreaks: R().func.isRequired,
            recallPrintPreferences: R().func.isRequired,
            isMoarGamesVariant: R().bool,
            hubVariant: R().string,
            updateVariant: R().func,
            updateStatsLoaded: R().func,
            updatePuzzlesLoaded: R().func,
            compliance: R().shape({ ads: R().bool }),
            device: R().shape({ isMobile: R().bool }),
          };
          var Mr = (0, i.$j)(
            (e) => ({
              isMoarGamesVariant: (0, U.uU)(e),
              hubVariant: e.hubVariant,
              device: e.device,
              compliance: e.compliance,
              progressLoaded: Boolean(e.puzzles.loaded),
            }),
            (e, t) => {
              let { api: n } = t;
              return {
                updateVariant: (t) => e({ type: w.Gs, payload: t }),
                updatePuzzlesLoaded: () => {
                  e({ type: w.cL, payload: { loaded: !0 } });
                },
                updateStatsLoaded: () => {
                  e({ type: w.Bk });
                },
                recallPrintPreferences: (t) => {
                  e((0, ir.Vr)(t));
                },
                fetchStatsAndStreaks: (t) => e((0, ir.py)(n.fetchAllStats, t)),
                fetchAllPuzzleProgress: (t) =>
                  e((0, ir.TY)(n.fetchPuzzleProgress, t)),
              };
            }
          )(Dr);
          const xr = (e) => {
            let { api: t } = e;
            return a.createElement(
              I.Z,
              { id: "hub-modal" },
              a.createElement(Mr, { api: t })
            );
          };
          xr.propTypes = {
            api: R().shape({
              fetchAllStats: R().func,
              fetchRecentPuzzles: R().func,
              fetchPuzzleProgress: R().func,
            }),
          };
          var Ar = xr;
          function Rr() {
            return (
              (Rr = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              Rr.apply(this, arguments)
            );
          }
          const Ir = window.__HUB_PROPS__;
          delete window.__HUB_PROPS__;
          const {
              hubVariant: Gr,
              hubPuzzles: Vr,
              deviceType: qr,
              compliance: Fr,
              sponsorship: Hr,
              navigationLinks: Ur,
            } = Ir,
            Br = ((e) => {
              let {
                hubVariant: t,
                compliance: n,
                deviceType: r,
                sponsorship: a,
                subscribeLinks: s,
                hubPuzzles: i = {},
              } = e;
              const o = [(0, m.md)(u.Z, v.l)];
              return (
                "undefined" != typeof window &&
                  window.__REDUX_DEVTOOLS_EXTENSION__ &&
                  o.push(window.__REDUX_DEVTOOLS_EXTENSION__()),
                (0, m.MT)(
                  O,
                  P(
                    P(
                      P({}, w.E3),
                      {},
                      {
                        hubVariant: t,
                        compliance: n,
                        sponsorship: a,
                        subscribeLinks: s,
                        device: r,
                      },
                      (0, f.Z)(i)
                    ),
                    {},
                    { ourGames: g({}, s) }
                  ),
                  (0, m.qC)(...o)
                )
              );
            })({
              hubVariant: Gr,
              hubPuzzles: Vr,
              deviceType: qr,
              compliance: Fr,
              sponsorship: Hr,
              subscribeLinks: Ur.subscribe,
            });
          Br.dispatch((0, ir.no)(o.Uh));
          const Zr = document.getElementById("hub-root");
          (0, s.s)(Zr).render(
            a.createElement(
              a.Fragment,
              null,
              a.createElement(l.Z, null),
              a.createElement(
                d.E,
                null,
                a.createElement(
                  i.zt,
                  { store: Br },
                  a.createElement(Ar, Rr({}, Ir, { api: r, device: o.Uh })),
                  a.createElement(c.Z, null)
                )
              )
            )
          );
        },
        98688: function (e, t, n) {
          n.d(t, {
            MY: function () {
              return p;
            },
            Pk: function () {
              return m;
            },
            TY: function () {
              return g;
            },
            Vr: function () {
              return u;
            },
            no: function () {
              return f;
            },
            py: function () {
              return h;
            },
            rr: function () {
              return c;
            },
            up: function () {
              return b;
            },
          });
          var r = n(11466),
            a = n.n(r),
            s = n(5126),
            i = n(30735),
            o = n(38471),
            l = n(24074);
          const c = (e, t) => ({ type: l.WI, payload: { [e]: t } }),
            d = { opacity: 100, layout: "standard" },
            u = (e) => (t, n) => {
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : l.pA;
                return a()
                  .getItem("".concat(e, "#preferences"))
                  .then((e) => (e.printPrefs ? e : d))
                  .catch(() => d);
              })(e).then((e) => {
                t({ type: l.n, payload: e.printPrefs });
              });
            },
            m = (e, t) => (n) =>
              n({ type: l.MC, payload: { opacity: e, regiId: t } }),
            p = (e, t) => (n) =>
              n({ type: l.Tl, payload: { layout: e, regiId: t } }),
            h = (e, t) => (n, r) =>
              e(t)
                .then((e) => {
                  n({ type: l.Bk, payload: e });
                })
                .catch((e) => {
                  s.Z.error("fetch stats and streaks failed: ".concat(e.stack));
                }),
            b = (e, t) => (n, r) =>
              e(t)
                .then((e) => {
                  n({ type: l.hz, payload: (0, i.Z)({ recentPuzzles: e }) });
                })
                .catch((e) => {
                  s.Z.error("fetch recent puzzles failed: ".concat(e.stack));
                }),
            g = (e, t) => (n, r) => {
              const { puzzles: a } = r(),
                { regiId: i } = t;
              if (!i) return Promise.resolve({});
              const c = Object.keys(a).filter(o.Z);
              return e(i, c)
                .then((e) => {
                  n({ type: l.cL, payload: e });
                })
                .catch((e) => {
                  s.Z.error(
                    "fetch hub puzzles progress failed: ".concat(e.stack)
                  );
                });
            },
            f = (e) => (t) => {
              e.get()
                .then((e) => {
                  e.os && t({ type: l.l8, payload: e.os.family });
                })
                .catch((e) => console.error("Failed to fetch device os", e));
            };
        },
        24074: function (e, t, n) {
          n.d(t, {
            $N: function () {
              return r;
            },
            Bk: function () {
              return i;
            },
            E3: function () {
              return v;
            },
            Eh: function () {
              return b;
            },
            Gs: function () {
              return s;
            },
            MC: function () {
              return d;
            },
            Tl: function () {
              return u;
            },
            WI: function () {
              return m;
            },
            _D: function () {
              return g;
            },
            _h: function () {
              return p;
            },
            cL: function () {
              return l;
            },
            hz: function () {
              return o;
            },
            l8: function () {
              return a;
            },
            mS: function () {
              return f;
            },
            n: function () {
              return c;
            },
            pA: function () {
              return h;
            },
          });
          const r = "GET_USER_ID",
            a = "GET_DEVICE_OS",
            s = "SET_HUB_VARIANT",
            i = "GET_STATS_AND_STREAKS",
            o = "GET_PUZZLE_COLLECTIONS",
            l = "UPDATE_PUZZLES_PROGRESS",
            c = "LOAD_PRINT_PREFS",
            d = "CHANGE_BLOCK_OPACITY",
            u = "CHANGE_PRINT_LAYOUT",
            m = "CHANGE_PRINT_OPTION",
            p = "SELECT_PUZZLE",
            h = "anon",
            b = !0,
            g = "HUB_VARIANT_DEFAULT",
            f = "HUB_VARIANT_MOAR_GAMES",
            v = {
              user: {},
              stats: {},
              device: {},
              puzzles: {},
              ourGames: [],
              compliance: {},
              collections: {},
              sponsorship: null,
              subscribeLinks: {},
            };
        },
        12282: function (e, t, n) {
          n.d(t, {
            Dp: function () {
              return p;
            },
            W_: function () {
              return f;
            },
            gs: function () {
              return g;
            },
            li: function () {
              return l;
            },
            mh: function () {
              return c;
            },
            p6: function () {
              return v;
            },
            qY: function () {
              return u;
            },
            u5: function () {
              return h;
            },
            uU: function () {
              return o;
            },
            ut: function () {
              return d;
            },
          });
          var r = n(40826),
            a = n(36105),
            s = n.n(a),
            i = n(24074);
          const o = (e) => {
              let { hubVariant: t } = e;
              return t === i.mS;
            },
            l = (e) => e.puzzles,
            c = (e) => e.ourGames,
            d = (0, r.P1)([(e) => e.collections, l], (e, t) => {
              const n = t[e.dailyPuzzle && e.dailyPuzzle[0]];
              return n && n.print_date;
            }),
            u = (0, r.P1)(d, (e) => (e ? new Date(e).getUTCDay() : void 0)),
            m = (e) => e.stats && e.stats.streaks,
            p = (0, r.P1)(m, (e) => (e && e.currentStreak) || 0),
            h = (0, r.P1)(m, (e) => {
              if (!e || !e.dates) return;
              const t = e.dates[e.dates.length - 1] || [];
              return t[t.length - 1];
            }),
            b = (0, r.P1)(
              [m, u],
              (e, t) => (e && e.verticalStreaks && e.verticalStreaks[t]) || {}
            ),
            g = (0, r.P1)(b, (e) => e.length || 0),
            f = (0, r.P1)(b, (e) => e.nextDate || void 0),
            v = (0, r.P1)(
              (e) => e.printOptions.selectedPuzzle,
              (e) => {
                const t = s()(e.printDate).format("MMMM"),
                  n = s()(e.printDate).format("YYYY"),
                  r = s()(e.printDate).format("D");
                return "".concat(t, " ").concat(r, ", ").concat(n);
              }
            );
        },
        25941: function (e, t, n) {
          n.d(t, {
            B_: function () {
              return r;
            },
            nx: function () {
              return a;
            },
          });
          const r = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "_",
                n = "";
              for (let r = 0; r < e.length; r += 1)
                n += e[r] === t ? e[(r += 1)].toUpperCase() : e[r];
              return n;
            },
            a = (e) => {
              switch (!0) {
                case !e:
                  return e;
                case Array.isArray(e):
                  return e.map(a);
                case "object" == typeof e:
                  return Object.entries(e).reduce((e, t) => {
                    let [n, s] = t;
                    return Object.assign(e, { [r(n)]: a(s) });
                  }, {});
                default:
                  return e;
              }
            };
        },
        38471: function (e, t) {
          t.Z = (e) =>
            "PDF" !== e.format_type &&
            !Object.prototype.hasOwnProperty.call(e, "percent_filled");
        },
        30735: function (e, t, n) {
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
          function a(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? r(Object(n), !0).forEach(function (t) {
                    var r, a, s, i;
                    (r = e),
                      (a = t),
                      (s = n[t]),
                      (a =
                        "symbol" ==
                        typeof (i = (function (e, t) {
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
                        })(a))
                          ? i
                          : i + "") in r
                        ? Object.defineProperty(r, a, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[a] = s);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
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
            Z: function () {
              return l;
            },
          });
          const s = [
              "mini_puzzle",
              "tips_and_tricks_mini_puzzles",
              "free_mini_from_archive",
              "free_puzzles",
            ],
            i = (e) => a(a({}, e), {}, { isFree: !0 });
          var o = n(25941),
            l = (e) =>
              Object.entries(
                ((e) => {
                  const t = Object.entries(e).reduce((e, t) => {
                    let [n, r] = t;
                    return a(a({}, e), {
                      [n]: s.includes(n) ? (r || []).map(i) : r || [],
                    });
                  }, {});
                  return (
                    t.free_puzzles &&
                      t.free_mini_from_archive &&
                      ((t.free_puzzles = [
                        ...t.free_puzzles,
                        ...t.free_mini_from_archive,
                      ]),
                      delete t.free_mini_from_archive),
                    delete t.free_products,
                    t
                  );
                })(e)
              ).reduce(
                (e, t) => {
                  let [n, r] = t;
                  if (!Array.isArray(r)) return e;
                  const a = (0, o.B_)(n);
                  return (
                    (e.collections[a] = []),
                    r.forEach((t) => {
                      e.collections[a].push(t.puzzle_id),
                        (e.puzzles[t.puzzle_id] = t);
                    }),
                    e
                  );
                },
                { puzzles: {}, collections: {} }
              );
        },
        68967: function (e, t, n) {
          n.d(t, {
            $U: function () {
              return u;
            },
            Ov: function () {
              return l;
            },
            k$: function () {
              return d;
            },
            p6: function () {
              return o;
            },
          });
          var r = n(36105),
            a = n.n(r);
          n(47812);
          const s = /(\w*)\{nyt-(\w+)\}(\w*)/g,
            i = {
              m: (e) => {
                const t = e.format("MMMM"),
                  n = "September" === t ? "Sept" : t.substring(0, 3);
                return t.length > 4 ? "".concat(n, ".") : t;
              },
            },
            o = (e, t) => {
              if (!e) return "";
              const n = a()(e),
                r = ((e, t) =>
                  t.replace(s, (t, n, r) => {
                    const a = i[r];
                    if (!a)
                      throw new Error(
                        'Unrecognized NYT time: "'.concat(r, '"')
                      );
                    return "[".concat(a(e), "]");
                  }))(n, t);
              return n.format(r);
            },
            l = (e) =>
              e.map((t, n) => {
                return (
                  (r = t),
                  (s = e[n - 1]) && a()(r).format("MM") === a()(s).format("MM")
                    ? "D"
                    : "{nyt-m} D"
                );
                var r, s;
              }),
            c = (e) => (t) => {
              let [n, r] = t;
              return e.isBetween(n, r, "day", "[]");
            },
            d = (e, t) =>
              t.map((t) =>
                ((e, t) => {
                  const n = e.filter((e) => e.length > 1),
                    r = a()(t),
                    s = r.clone().subtract(1, "day"),
                    i = r.clone().add(1, "day"),
                    o = n.some(c(r));
                  return {
                    hasStreakBefore: o && n.some(c(s)),
                    hasStreakAfter: o && n.some(c(i)),
                  };
                })(e, t)
              ),
            u = (e) => {
              const t = (e) => (e < 10 ? "0" : "") + e;
              if (!e) return "";
              const n = Math.floor(e / 3600),
                r = Math.floor((e / 60) % 60),
                a = e % 60;
              let s = "";
              return (s = n ? [n, t(r), t(a)] : [r, t(a)]), s.join(":");
            };
        },
        74638: function (e, t, n) {
          n.d(t, {
            l9: function () {
              return r.l;
            },
            Bt: function () {
              return r.B;
            },
          });
          var r = n(59807),
            a = n(2652),
            s = n.n(a);
          s().shape({
            author: s().string,
            editor: s().string,
            formatType: s().string,
            percentFilled: s().number,
            printDate: s().string,
            publishType: s().string,
            puzzleId: s().number,
            solved: s().bool,
            star: s().string,
            title: s().string,
            version: s().number,
          });
        },
        69802: function (e, t, n) {
          function r() {
            return !(void 0 === window || !window.isHybridWebView);
          }
          function a() {
            return !(void 0 === window || !window.newsreaderAppPlatform);
          }
          n.d(t, {
            Xj: function () {
              return r;
            },
            _7: function () {
              return a;
            },
          });
        },
        65489: function (e, t, n) {
          n.d(t, {
            Be: function () {
              return w.B;
            },
            LW: function () {
              return c.LW;
            },
            N1: function () {
              return p.N;
            },
            OB: function () {
              return a.OB;
            },
            T0: function () {
              return a.T0;
            },
            Tv: function () {
              return m.Tv;
            },
            Uh: function () {
              return l.U;
            },
            abra: function () {
              return h.Fi;
            },
            hX: function () {
              return c.hX;
            },
            iU: function () {
              return a.iU;
            },
            j: function () {
              return c.j;
            },
            j0: function () {
              return a.j0;
            },
            kh: function () {
              return a.kh;
            },
            ob: function () {
              return c.ob;
            },
            wC: function () {
              return i.wC;
            },
          });
          var r = n(74395),
            a = n(22042),
            s = n(96303),
            i = n(31069),
            o = n(73649),
            l = n(67719),
            c = n(41586),
            d = n(48198),
            u = n(33104),
            m = n(89936),
            p = n(27489),
            h = n(42714),
            b = n(6756),
            g = n(49808),
            f = n(72811),
            v = n(73972),
            y = n(53212),
            w = n(93251);
          if (
            ((0, p.Z)(),
            (0, c.U9)(),
            (0, m.ZP)(d.win.sentryConfig),
            (0, f.Z)(d.win.datadogRumConfig),
            (0, r.Z)(),
            h.Fi.init(),
            d.win.isHybridWebView ||
              "wordle" === d.win.pageName ||
              l.U.initialize(),
            "connections" === d.win.pageName &&
              "prod" !== d.win.env.name &&
              (0, y.Z)(),
            (0, o.t6)(),
            (0, l.q)(),
            a.G7)
          )
            d.win.dataLayer = [];
          else {
            const e = (0, s.pg)();
            if (!e) {
              const e = "DFP_Prebid_0624",
                t = h.Fi.getVariant(e);
              t && h.Fi.reportExposure(e),
                (0, s.He)(),
                (0, s.I5)(t),
                (0, b.Z)((0, s.Qx)()),
                (0, v.YU)();
            }
            d.win.addEventListener("load", () => {
              (0, i.IX)(),
                (0, u.Z)(),
                e || (0, s.YY)((0, g.Z)(d.win), h.Fi.getTests()),
                (0, c.Sv)();
            });
          }
        },
        96303: function (e, t, n) {
          n.d(t, {
            He: function () {
              return z;
            },
            I5: function () {
              return k;
            },
            Qx: function () {
              return N;
            },
            YY: function () {
              return O;
            },
            pg: function () {
              return E;
            },
            vv: function () {
              return T;
            },
          });
          var r = n(53789),
            a = n(84329),
            s = n(59924),
            i = n(40821),
            o = n(45873),
            l = n(22042),
            c = n(12058),
            d = n(10431),
            u = n(48198),
            m = n(49817),
            p = n(88307),
            h = n(28395),
            b = n(85899),
            g = n(46710),
            f = n(29919),
            v = n(39385);
          function y(e, t) {
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
                ? y(Object(n), !0).forEach(function (t) {
                    var r, a, s, i;
                    (r = e),
                      (a = t),
                      (s = n[t]),
                      (a =
                        "symbol" ==
                        typeof (i = (function (e, t) {
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
                        })(a))
                          ? i
                          : i + "") in r
                        ? Object.defineProperty(r, a, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[a] = s);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : y(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          const E = () => {
            var e, t, n;
            return (
              !(
                !window.gamesAppPlatform ||
                null === (t = window.config) ||
                void 0 === t ||
                !t.AdRequirements ||
                ("phone" ===
                  (null === (n = window.config) || void 0 === n
                    ? void 0
                    : n.AdRequirements.plat) &&
                  ["wordle", "connections"].includes(window.pageName || ""))
              ) ||
              (window.isMobileDevice &&
                ![
                  "wordle",
                  "hub",
                  "connections",
                  "mini-page",
                  "spelling-bee",
                  "strands",
                ].includes(window.pageName || "")) ||
              "adluce-socrates" ===
                (null === (e = window) ||
                void 0 === e ||
                null === (e = e.purrDirectives) ||
                void 0 === e
                  ? void 0
                  : e.PURR_AdConfiguration_v3)
            );
          };
          u.win.AdSlot4 = u.win.AdSlot4 || {
            cmd: [],
            init: () => null,
            events: { subscribe: () => ({ remove: () => {} }) },
            refreshAds: () => null,
          };
          const _ = u.win.AdSlot4,
            k = (e) => (0, p.Z)(_, (0, l.j0)(), (0, b.Z)(e));
          function z() {
            document.querySelectorAll("body.pz-mobile").length &&
              document
                .querySelectorAll(".pz-desktop-only .place-ad")
                .forEach((e) => {
                  e.classList.remove("place-ad");
                });
          }
          const N = () => ({
              plat: (0, i.Z)(),
              prop: (0, o.Z)(),
              typ: "games",
              sov: a.Z,
              vp: (0, s.Z)(r.bf.value),
            }),
            O = function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
              !u.win.isHybridWebView && !u.win.nyt_et && n < 10
                ? setTimeout(O, 5, e, t, n + 1)
                : _.cmd.push(() => {
                    var n;
                    if (E()) return;
                    g._k.forEach((e) => {
                      _.events.subscribe({
                        name: e,
                        scope: "all",
                        callback: (0, f.Y)(e),
                      });
                    });
                    const r = (0, l.vl)("ad-keywords"),
                      a = c.Z.current,
                      s = w(
                        w(
                          w(
                            w({}, N()),
                            {},
                            { page_view_id: a },
                            r ? { adv: r } : {}
                          ),
                          null === (n = window) ||
                            void 0 === n ||
                            null === (n = n.config) ||
                            void 0 === n
                            ? void 0
                            : n.AdRequirements
                        ),
                        {},
                        { abra_dfp: (0, m.Z)(t) }
                      );
                    var i, o, p, b;
                    _.init({
                      adTargeting: s,
                      adUnitPath: ""
                        .concat("29390238/NYT/crosswords", "/")
                        .concat(e),
                      sizeMapping: (0, h.ZP)(e, window && window.innerHeight),
                    }),
                      window.isHybridWebView &&
                        window.gamesAppPlatform &&
                        (null === (i = window) ||
                          void 0 === i ||
                          null === (i = i.NativeBridge) ||
                          void 0 === i ||
                          null === (o = i.getPageViewID) ||
                          void 0 === o ||
                          o
                            .call(i)
                            .then((e) => {
                              var t;
                              let {
                                values: { pageViewID: n },
                              } = e;
                              null === (t = _.updateAdReq) ||
                                void 0 === t ||
                                t.call(_, { page_view_id: n });
                            })
                            .catch(() => {
                              console.warn(
                                "NativeBridge getPageViewID request failed"
                              );
                            }),
                        null === (p = window) ||
                          void 0 === p ||
                          null === (p = p.NativeBridge) ||
                          void 0 === p ||
                          null === (b = p.addEventListener) ||
                          void 0 === b ||
                          b.call(p, v.nN, (e) => {
                            var t, n;
                            null != e &&
                              null !== (t = e.detail) &&
                              void 0 !== t &&
                              t.pageViewID &&
                              (null === (n = _.updateAdReq) ||
                                void 0 === n ||
                                n.call(_, {
                                  page_view_id: e.detail.pageViewID,
                                }));
                          })),
                      _.events.subscribe({
                        name: "AdRendered",
                        scope: "all",
                        callback: (e) => {
                          let { slot: t, size: n } = e;
                          if (t) {
                            const e = u.JU.getElementById(t.getSlotElementId());
                            n && 0 === n[1]
                              ? e && (0, d.cn)(e, "fluid")
                              : e && (0, d.IV)(e, "fluid");
                          }
                        },
                      });
                  });
            },
            T = (e) => {
              try {
                var t, n;
                null === (t = window) ||
                  void 0 === t ||
                  null === (t = t.AdSlot4) ||
                  void 0 === t ||
                  null === (n = t.updateAdReq) ||
                  void 0 === n ||
                  n.call(t, { sub: e });
              } catch (t) {
                console.error(
                  "Could not refresh ads entitlement: ".concat(e),
                  t
                );
              }
            };
        },
        43401: function (e, t, n) {
          n.d(t, {
            Cb: function () {
              return i;
            },
            Og: function () {
              return a;
            },
            Ys: function () {
              return s;
            },
            mo: function () {
              return r;
            },
          });
          const r = () => "ios" === window.newsreaderAppPlatform,
            a = () =>
              ("android" === window.gamesAppPlatform ||
                "android" === window.newsreaderAppPlatform) &&
              window.isHybridWebView,
            s = () =>
              ("ios" === window.gamesAppPlatform || r()) &&
              window.isHybridWebView,
            i = (e, t) => {
              if (!e || !t) return !1;
              const [n, r = 0, a = 0] = e.split(".").map(Number),
                [s, i = 0, o = 0] = t.split(".").map(Number);
              return (
                n > s ||
                (!(n < s) && (r > i || (!(r < i) && (a > o || !(a < o)))))
              );
            };
        },
        54988: function (e, t, n) {
          n.d(t, {
            Bj: function () {
              return a;
            },
            Gk: function () {
              return r;
            },
          });
          const r = new Date("06/10/2024 10:00:00 GMT-0400"),
            a = (r.getTime(), new Date("07/22/2024 12:00:00 GMT-0400")),
            s = (a.getTime(), new Date("06/24/2024 10:00:00 GMT-0400")),
            i = new Date("07/08/2024 10:00:00 GMT-0400"),
            o = new Date("07/18/2024 10:00:00 GMT-0400"),
            l = new Date("07/20/2024 10:00:00 GMT-0400"),
            c = new Date("07/21/2024 10:00:00 GMT-0400");
          new Date("07/21/2024 18:00:00 GMT-0400").getTime(),
            c.getTime(),
            l.getTime(),
            o.getTime(),
            i.getTime(),
            s.getTime(),
            r.getTime();
        },
        80565: function (e, t, n) {
          n.d(t, {
            F2: function () {
              return m;
            },
          });
          const r = () => new URLSearchParams(window.location.search),
            a = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return e.includes("Reader/") || /nyt[-_]?android/i.test(e);
            },
            s = function () {
              return /nyt[-_]?ios/i.test(
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ""
              );
            },
            i = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              const t = r(),
                n = t.get("embed") || "",
                i = t.get("rid") || "",
                o = e || navigator.userAgent;
              return ["ios", "ipad", "iphone"].includes(n) || i || s(o)
                ? "ios"
                : ["android", "androidtab", "androidphone"].includes(n) || a(o)
                ? "android"
                : "";
            },
            o = function () {
              return (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ""
              ).includes("Crosswords/");
            },
            l = function () {
              return (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ""
              ).includes("nyt_xwords_ios/");
            },
            c = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              const t = r(),
                n = e || navigator.userAgent;
              return l(n) ||
                "games" === t.get("hybrid") ||
                "games-ios" === t.get("embed")
                ? "ios"
                : o(n) || "games-android" === t.get("embed")
                ? "android"
                : "";
            },
            d = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return (
                /i(Phone|Pad|Pod)/i.test(e) ||
                l(e) ||
                s(e) ||
                (function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window.navigator;
                  return (
                    /iPad/.test(e.platform) ||
                    ("MacIntel" === e.platform && e.maxTouchPoints > 1)
                  );
                })()
              );
            },
            u = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return /android/i.test(e) || o(e) || a(e);
            },
            m = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window;
              const t =
                (arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "") || navigator.userAgent;
              void 0 === e.newsreaderAppPlatform &&
                (e.newsreaderAppPlatform = i()),
                void 0 === e.gamesAppPlatform && (e.gamesAppPlatform = c()),
                void 0 === e.isPlayTab &&
                  (e.isPlayTab = (function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "";
                    const t = r(),
                      n = e || navigator.userAgent;
                    return "playTab" === t.get("entry") && "ios" === i(n);
                  })()),
                void 0 === e.isIOSDevice && (e.isIOSDevice = d(t)),
                void 0 === e.isAndroidDevice && (e.isAndroidDevice = u(t)),
                void 0 === e.isMobileDevice &&
                  (e.isMobileDevice = (function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "";
                    return (
                      (function () {
                        const e =
                          (arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "") ||
                          navigator.userAgent ||
                          navigator.vendor ||
                          (window.opera ? "opera" : "");
                        return (
                          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                            e
                          ) ||
                          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            e.substr(0, 4)
                          )
                        );
                      })(e) ||
                      d(e) ||
                      u(e)
                    );
                  })(t)),
                void 0 === e.gamesAppVersion &&
                  (e.gamesAppVersion = (function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "",
                      t = arguments.length > 1 ? arguments[1] : void 0;
                    let n;
                    return (
                      "ios" === t
                        ? (n = e.match(
                            /nyt[-_]?xwords[-_]?ios\/(?:AppVersion\(string: "|.{0})([0-9]+\.[0-9]+(\.[0-9]+)?).*/i
                          ))
                        : "android" === t &&
                          (n = e.match(
                            /Crosswords\/([0-9]+\.[0-9]+(\.[0-9]+)?)/i
                          )),
                      n && n.length >= 2 ? n[1] : ""
                    );
                  })(t, e.gamesAppPlatform)),
                void 0 === e.newsreaderAppVersion &&
                  (e.newsreaderAppVersion = (function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "";
                    return (
                      (function () {
                        const e = (
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : ""
                        ).match(/nyt[-_]?ios\/([0-9]+\.[0-9]+(\.[0-9]+)?)/i);
                        return e && e.length >= 2 ? e[1] : "";
                      })(e) ||
                      (function () {
                        let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "";
                        const t = e.match(
                          /Reader\/([0-9]+\.[0-9]+(\.[0-9]+)?)/i
                        );
                        if (t && t.length >= 2) return t[1];
                        const n = e.match(
                          /nyt[-_]?android\/([0-9]+\.[0-9]+(\.[0-9]+)?)/i
                        );
                        return n && n.length >= 2 ? n[1] : "";
                      })(e) ||
                      ""
                    );
                  })(t));
              const n = r();
              if (void 0 === e.isHybridWebView) {
                const n = e.pageName || "";
                e.isHybridWebView =
                  (function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "";
                    const t = r();
                    return e.includes("Reader/") || Boolean(t.get("hybrid"));
                  })(t) ||
                  (void 0 !== e.NYTG &&
                    ((e) =>
                      !![
                        "connections",
                        "wordle",
                        "sudoku",
                        "tiles",
                        "letter-boxed",
                        "spelling-bee",
                        "strands",
                      ].find((t) => e.includes(t)))(n) &&
                    !!c());
              }
              "mock" === n.get("bridge") && (e.isHybridWebView = !0);
            };
        },
        53789: function (e, t, n) {
          n.d(t, {
            bf: function () {
              return o;
            },
            tq: function () {
              return i;
            },
          });
          var r = n(80565);
          const a = [
            "transitionend",
            "webkitTransitionEnd",
            "oTransitionEnd",
            "msTransitionEnd",
          ].find((e) => "on".concat(e.toLowerCase()) in window);
          function s(e) {
            const t = [],
              n = document.getElementById(e),
              r = {
                value: null == n ? void 0 : n.offsetWidth,
                subscribe(e) {
                  return (
                    t.push(e),
                    function () {
                      t.splice(t.indexOf(e), 1);
                    }
                  );
                },
              };
            return (
              null == n ||
                n.addEventListener(
                  a,
                  function () {
                    const e = null == n ? void 0 : n.offsetWidth;
                    var a;
                    if (((a = e), (r.value = a), !t.length)) return;
                    let s = t.length;
                    for (; s > 0; ) (s -= 1), t[s](e);
                  },
                  !1
                ),
              r
            );
          }
          (0, r.F2)(),
            (() => {
              if (!window.isCacheSafe) return;
              const e = document.querySelector("body"),
                t = document.querySelector('[name="viewport"]'),
                n = [];
              window.isMobileDevice
                ? (n.push("pz-mobile"),
                  window.isIOSDevice && n.push("pz-mobile-ios"),
                  window.isAndroidDevice && n.push("pz-mobile-android"))
                : n.push("pz-desktop");
              const r = !(void 0 === window || !window.isHybridWebView),
                a = !(void 0 === window || !window.newsreaderAppPlatform);
              r &&
                (n.push("pz-hybrid"),
                null == t ||
                  t.setAttribute(
                    "content",
                    "width=device-width, initial-scale=1, minimal-ui, maximum-scale=1, user-scalable=no"
                  )),
                window.gamesAppPlatform
                  ? (n.push("pz-games-app"),
                    n.push("pz-games-app-".concat(window.gamesAppPlatform)))
                  : a
                  ? (n.push("pz-newsreader"),
                    n.push("pz-".concat(window.newsreaderAppPlatform)),
                    window.isPlayTab && n.push("pz-play-tab"),
                    r &&
                      n.push(
                        "pz-newsreader-".concat(
                          window.newsreaderAppPlatform,
                          "-hybrid"
                        )
                      ))
                  : n.push("pz-web"),
                null == e || e.classList.add(...n);
            })();
          const i = document.body.classList.contains("pz-mobile"),
            o = (s("ratio-hook"), s("width-hook"));
        },
        14237: function (e, t, n) {
          n.d(t, {
            aF: function () {
              return r.Z;
            },
          }),
            n(89526),
            n(73961),
            n(65489),
            n(43373),
            n(34797),
            n(29954),
            n(89385),
            n(46147);
          var r = n(71687);
          n(40679);
        },
        40679: function (e, t, n) {
          n(89526), n(71687);
        },
      },
      n = {};
    function r(e) {
      var a = n[e];
      if (void 0 !== a) return a.exports;
      var s = (n[e] = { id: e, loaded: !1, exports: {} });
      return t[e].call(s.exports, s, s.exports, r), (s.loaded = !0), s.exports;
    }
    (r.m = t),
      (e = []),
      (r.O = function (t, n, a, s) {
        if (!n) {
          var i = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (n = e[d][0]), (a = e[d][1]), (s = e[d][2]);
            for (var o = !0, l = 0; l < n.length; l++)
              (!1 & s || i >= s) &&
              Object.keys(r.O).every(function (e) {
                return r.O[e](n[l]);
              })
                ? n.splice(l--, 1)
                : ((o = !1), s < i && (i = s));
            if (o) {
              e.splice(d--, 1);
              var c = a();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        s = s || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
        e[d] = [n, a, s];
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, { a: t }), t;
      }),
      (r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.nmd = function (e) {
        return (e.paths = []), e.children || (e.children = []), e;
      }),
      (function () {
        var e = { 2488: 0, 6711: 0 };
        r.O.j = function (t) {
          return 0 === e[t];
        };
        var t = function (t, n) {
            var a,
              s,
              i = n[0],
              o = n[1],
              l = n[2],
              c = 0;
            if (
              i.some(function (t) {
                return 0 !== e[t];
              })
            ) {
              for (a in o) r.o(o, a) && (r.m[a] = o[a]);
              if (l) var d = l(r);
            }
            for (t && t(n); c < i.length; c++)
              (s = i[c]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
            return r.O(d);
          },
          n = (self.webpackChunk_xwords_phoenix =
            self.webpackChunk_xwords_phoenix || []);
        n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
      })();
    var a = r.O(
      void 0,
      [7091, 8842, 73, 741, 5232, 3550, 8810, 7382, 7422, 6122, 7562],
      function () {
        return r(53581);
      }
    );
    a = r.O(a);
  })();
//# sourceMappingURL=hub.2408cb9cd0643a53f558.js.map
