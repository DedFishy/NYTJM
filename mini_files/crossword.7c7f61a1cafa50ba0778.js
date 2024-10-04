! function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "07f21d86-f992-449a-b7da-ed21698cfa63", e._sentryDebugIdIdentifier = "sentry-dbid-07f21d86-f992-449a-b7da-ed21698cfa63");
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
        id: "90199bea12d0307073a61899b1597cc5c29360f3"
    },
    function () {
        var e, t = {
                61320: function (e, t, n) {
                    "use strict";
                    n(31405), n(37422);
                    var r = n(89526),
                        a = n(24470),
                        o = n(76359),
                        i = n(65489),
                        l = n(65046),
                        s = n(28425),
                        c = n(63482),
                        u = n(72669),
                        d = n(16441);
                    const p = "crossword/progress/APPLY_PROGRESS",
                        m = "crossword/progress/RECALC_COUNTS",
                        f = ["cells", "status", "timer", "selection"],
                        b = "crossword/transient/PUZZLE_READY",
                        h = "crossword/transient/PUZZLE_SYNCED",
                        g = "crossword/transient/ESCAPE_PUZZLE",
                        v = e => ({
                            type: h,
                            payload: {
                                commitID: e
                            }
                        }),
                        y = "crossword/cell/CHECK",
                        w = "crossword/cell/CLEAR",
                        E = "crossword/cell/REVEAL",
                        _ = "crossword/cell/GUESS",
                        O = e => !!e.guess,
                        k = e => ![0, 4].includes(e.type),
                        P = e => k(e) && !O(e),
                        S = e => e && e.confirmed,
                        x = e => !S(e),
                        j = (e, t) => {
                            const {
                                answer: n,
                                moreAnswers: r
                            } = e;
                            if (!r) return n ? n === t : !t;
                            const {
                                valid: a = []
                            } = r, o = a.concat(n);
                            return !(!o.includes(" ") && !o.includes("") || t) || o.includes(t);
                        },
                        C = e => j(e, e.guess || ""),
                        T = e => k(e) && !C(e),
                        D = e => x(e) && k(e),
                        N = e => O(e) && x(e),
                        L = e => N(e) && (e => !e.checked || e.modified)(e),
                        I = e => t => !!(e => e.checked && !e.modified && x(e))(t) || !e.skipFilled || !!P(t) || !e.skipPenciled && t.penciled,
                        A = "crossword/selection/NAVIGATE",
                        z = "crossword/selection/SELECT_CELL",
                        R = "crossword/selection/SELECT_CLUE",
                        M = "crossword/selection/SWITCH_DIRECTION",
                        G = () => ({
                            type: M
                        }),
                        B = e => ({
                            type: A,
                            payload: {
                                direction: e
                            }
                        }),
                        U = (e, t) => {
                            const n = "ClueStart";
                            return t ? {
                                type: A,
                                payload: {
                                    direction: n
                                }
                            } : {
                                type: R,
                                payload: {
                                    index: e,
                                    direction: n
                                }
                            };
                        },
                        H = "crossword/status/SET_INITIAL_CELL_STATUS",
                        W = "crossword/status/RESET_GAME",
                        F = "crossword/status/DEBUG_REVEAL",
                        Y = "crossword/status/MARK_SOLVED",
                        q = "crossword/status/ENABLE_AUTOCHECK",
                        $ = "crossword/status/DISABLE_AUTOCHECK",
                        V = "crossword/status/TRACK_PROGRESS",
                        Z = "crossword/status/MARK_FILLED",
                        X = "crossword/status/UNMARK_FILLED",
                        K = e => e[Math.floor(Math.random() * e.length)];
                    var J = n(40826);
                    const Q = e => e.user,
                        ee = (0, J.P1)(Q, e => {
                            let {
                                settings: t
                            } = e;
                            return t;
                        }),
                        te = (0, J.P1)(Q, e => {
                            let {
                                printPrefs: t
                            } = e;
                            return t;
                        }),
                        ne = (0, J.P1)(Q, e => {
                            let {
                                access: t
                            } = e;
                            return t;
                        }),
                        re = (0, J.P1)(ne, e => {
                            let {
                                canAccessPuzzle: t
                            } = e;
                            return t;
                        }),
                        ae = (0, J.P1)(ne, e => {
                            let {
                                isAccessDataAvailable: t
                            } = e;
                            return t;
                        });
                    const oe = (e, t) => {
                            const n = Math.floor(e / t) * t;
                            return [n, n + t - 1];
                        },
                        ie = e => [0, e.length - 1];
                    var le = n(36105),
                        se = n.n(le);
                    const ce = (e, t) => e + (t ? se()().unix() - t : 0),
                        ue = e => {
                            const t = Math.floor(e / 3600),
                                n = Math.floor(e % 3600 / 60),
                                r = n < 10 ? "0".concat(n) : n,
                                a = Math.floor(e % 60),
                                o = a < 10 ? "0".concat(a) : a;
                            return t > 0 ? [t, r, o].join(":") : "".concat(n, ":").concat(o);
                        },
                        de = /(\w*)\{nyt-(\w+)\}(\w*)/g,
                        pe = {
                            m: e => {
                                const t = e.format("MMMM"),
                                    n = "September" === t ? "Sept" : t.substring(0, 3);
                                return t.length > 4 ? "".concat(n, ".") : t;
                            }
                        },
                        me = (e, t) => {
                            if (!e) return "";
                            const n = se()(e),
                                r = ((e, t) => t.replace(de, (t, n, r) => {
                                    const a = pe[r];
                                    if (!a) throw new Error('Unrecognized NYT time: "'.concat(r, '"'));
                                    return "[".concat(a(e), "]");
                                }))(n, t);
                            return n.format(r);
                        },
                        fe = /Easy\sMode\sNo.\s+[0-9]\d*$/,
                        be = e => e && e.length > 1 ? e[0].toUpperCase() + e.slice(1) : "",
                        he = e => "cell-id-".concat(e),
                        ge = e => e && 0 !== e.length ? 1 === e.length ? e[0].toString() : [e.slice(0, -1).join(", ")].concat(e.slice(-1).map(e => e.toString())).join(" and ") : "",
                        ve = e => undefined === e ? "By" : fe.test(e) ? "Grid by" : "By",
                        ye = e => {
                            const t = "Edited by";
                            return undefined === e ? t : fe.test(e) ? "Clues by" : t;
                        },
                        we = e => e.cells,
                        Ee = (0, J.P1)(we, e => e.map(e => 4 === e.type)),
                        _e = e => e.clues,
                        Oe = e => e.puzzle.data,
                        ke = e => e.puzzle.hasLoaded,
                        Pe = e => e.puzzle.error,
                        Se = (0, J.P1)(Oe, e => (null == e ? undefined : e.meta) || null),
                        xe = (0, J.P1)(Oe, e => (null == e ? undefined : e.board) || null),
                        je = (0, J.P1)(Oe, e => (null == e ? undefined : e.clueLists) || []),
                        Ce = (0, J.P1)(Oe, e => (null == e ? undefined : e.overlays) || null),
                        Te = (0, J.P1)(Oe, e => (null == e ? undefined : e.dimensions) || null),
                        De = (0, J.P1)(Se, e => null == e ? undefined : e.id),
                        Ne = (0, J.P1)(Se, e => null == e ? undefined : e.title),
                        Le = (0, J.P1)(Se, e => (null == e ? undefined : e.publishStream) || ""),
                        Ie = (0, J.P1)(Le, e => "mini" === e),
                        Ae = (0, J.P1)(Se, e => null == e ? undefined : e.publicationDate),
                        ze = (0, J.P1)([Le, Ae, Ne, Pe], (e, t, n, r) => {
                            if (r) return 403 === r.status ? "Subscription Required" : 404 === r.status ? "Page Not Found" : "Oops! Something went wrong.";
                            const a = !e;
                            let o = "MMMM D, YYYY";
                            "bonus" === e ? o = "MMMM YYYY" : "daily" === e && (o = "dddd, MMMM D, YYYY");
                            const i = "mini" === e ? "Daily ".concat(be(e)) : be(e || "special"),
                                l = a || "bonus" === e;
                            let s = "".concat(i, " Crossword Puzzle");
                            return !a && t && (s = "".concat(me(t, o), " ").concat(s)), l ? "".concat(s, " - ").concat(n) : s;
                        }),
                        Re = e => e.selection,
                        Me = (0, J.P1)(Re, e => e.cell),
                        Ge = (0, J.P1)([we, Me], (e, t) => "number" == typeof t ? e[t] : null),
                        Be = (0, J.P1)([_e, Re], (e, t) => "number" == typeof t.clue ? e[t.clue] : null),
                        Ue = ((0, J.P1)([je, Re], (e, t) => "number" == typeof t.clueList ? e[t.clueList] : null), (0, J.P1)(Re, e => e.clueCells)),
                        He = (0, J.P1)(Re, e => e.relatedCells);
                    function We(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Fe(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? We(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Ye = (e, t, n) => {
                            const r = e.find(e => n(t[e]));
                            if (undefined !== r) return t[r];
                        },
                        qe = () => 0,
                        $e = (e, t) => t.length - 1,
                        Ve = e => e - 1,
                        Ze = e => e + 1,
                        Xe = (e, t, n) => {
                            const r = t.clueCells[n],
                                a = e[r];
                            return Fe(Fe({}, t), {}, {
                                cell: r,
                                cellClues: a.clues
                            });
                        },
                        Ke = (e, t) => {
                            let {
                                cells: n,
                                selection: r
                            } = e;
                            const {
                                cell: a,
                                clueCells: o
                            } = r;
                            if (!o.length) return null;
                            const i = t(o.indexOf(a), o);
                            return Xe(n, r, i);
                        },
                        Je = function (e) {
                            var t;
                            let n = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
                            const r = ee(e),
                                {
                                    cells: a,
                                    clues: o,
                                    selection: i
                                } = e,
                                l = I(r),
                                s = o[i.clue],
                                c = n ? "prev" : "next";
                            let u, d;
                            u = s ? s[c] : n ? o.length - 1 : 0;
                            let p = o[u];
                            do {
                                if (d = Ye(p.cells, a, l), d) break;
                                p = o[p[c]];
                            } while (p.index !== u);
                            const m = d ? d.index : p.cells[0];
                            return {
                                cell: m,
                                cellClues: a[m].clues,
                                clue: p.index,
                                clueCells: p.cells,
                                clueList: null !== (t = p.list) && undefined !== t ? t : null,
                                relatedCells: [],
                                relatedClues: []
                            };
                        };
                    function Qe(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function et(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Qe(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    var tt = (e, t, n) => {
                        switch (t) {
                        case "Up":
                        case "Down":
                        case "Left":
                        case "Right":
                            return ((e, t, n) => {
                                var r, a;
                                const {
                                    cells: o,
                                    clues: i,
                                    puzzle: l,
                                    selection: s
                                } = e, c = ((e, t, n, r, a) => {
                                    if ("number" != typeof r || r < 1) throw new Error("gridwidth must be a positive number");
                                    let o, i;
                                    switch (t) {
                                    case "Up":
                                        o = -r, i = ie(n);
                                        break;
                                    case "Down":
                                        o = r, i = ie(n);
                                        break;
                                    case "Right":
                                        o = 1, i = oe(e, r);
                                        break;
                                    case "Left":
                                        o = -1, i = oe(e, r);
                                    }
                                    if (o && i)
                                        for (let t = e + o; t >= i[0] && t <= i[1]; t += o)
                                            if (a(n[t])) return n[t];
                                })(s.cell || 0, t, o, (null === (r = l.data) || undefined === r ? undefined : r.dimensions.columnCount) || 0, k);
                                if (!c) return null;
                                const u = ((e, t, n) => {
                                    if (0 === e.clues.length) return {
                                        index: null,
                                        cells: [],
                                        list: n
                                    };
                                    if (1 === e.clues.length) return t[e.clues[0]];
                                    const r = e.clues,
                                        a = r.map(e => t[e].list),
                                        o = (i = n, a.reduce((e, t) => t === i ? t : e === i ? e : "number" == typeof i && (t < i && e < i || t > i && e > i) ? Math.min(t, e) : Math.max(t, e)));
                                    var i;
                                    const l = a.findIndex(e => e === o);
                                    return t[r[l]];
                                })(c, i, undefined !== n ? n : s.clueList);
                                return et(et({}, s), {}, {
                                    cell: c.index,
                                    cellClues: c.clues,
                                    clue: u.index,
                                    clueCells: u.cells,
                                    clueList: null !== (a = u.list) && undefined !== a ? a : null
                                });
                            })(e, t, n);
                        default:
                            return ((e, t) => {
                                switch (t) {
                                case "ClueStart":
                                    return Ke(e, qe);
                                case "ClueEnd":
                                    return Ke(e, $e);
                                case "Advance":
                                    return (e => {
                                        const t = ee(e),
                                            {
                                                cells: n,
                                                selection: r
                                            } = e,
                                            {
                                                cell: a,
                                                clueCells: o
                                            } = r,
                                            i = I(t),
                                            l = Ge(e),
                                            s = !!l && l.guess,
                                            c = (p = a, (d = o).slice(d.indexOf(p) + 1)),
                                            u = 0 === c.length;
                                        var d, p;
                                        if (s && !u) return Ke(e, Ze);
                                        const m = t.jumpBack ? c.concat(((e, t) => e.slice(0, e.indexOf(t)))(o, a)) : c,
                                            f = Ye(m, n, i);
                                        return f ? Xe(n, r, o.indexOf(f.index)) : t.autoAdvance ? Je(e) : null;
                                    })(e);
                                case "Backspace":
                                    return (e => {
                                        var t;
                                        const n = ee(e),
                                            {
                                                cells: r,
                                                clues: a,
                                                selection: o
                                            } = e,
                                            {
                                                cell: i,
                                                clue: l,
                                                clueCells: s
                                            } = o;
                                        if (null === i || 0 !== s.indexOf(i)) return Ke(e, Ve);
                                        if (!n.backspaceAcrossWords) return null;
                                        const c = (u = a, d = a[l], u[u.indexOf(d) - 1] || u[u.length - 1]);
                                        var u, d;
                                        const p = c.cells,
                                            m = r[p[p.length - 1]];
                                        return Fe(Fe({}, o), {}, {
                                            cell: m.index,
                                            cellClues: m.clues,
                                            clue: c.index,
                                            clueCells: p,
                                            clueList: null !== (t = c.list) && undefined !== t ? t : null
                                        });
                                    })(e);
                                case "NextClue":
                                    return Je(e);
                                case "PreviousClue":
                                    return Je(e, true);
                                default:
                                    return null;
                                }
                            })(e, t);
                        }
                    };
                    function nt(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function rt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? nt(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const at = /[Up|Down]$/,
                        ot = ["Across", "Down"],
                        it = (e, t) => {
                            var n;
                            return ot.includes(null === (n = t[e]) || undefined === n ? undefined : n.name);
                        },
                        lt = e => {
                            var t;
                            let {
                                cells: n,
                                clues: r
                            } = e;
                            const a = n.find(P) || n.find(k),
                                [o = null] = (null == a ? undefined : a.clues) || [],
                                i = r[o];
                            return {
                                cell: null !== (t = null == a ? undefined : a.index) && undefined !== t ? t : null,
                                cellClues: (null == a ? undefined : a.clues) || [],
                                clue: o,
                                clueCells: (null == i ? undefined : i.cells) || [],
                                clueList: (null == i ? undefined : i.list) || 0,
                                relatedCells: [],
                                relatedClues: []
                            };
                        },
                        st = (e, t) => {
                            var n;
                            let {
                                cells: r,
                                clues: a
                            } = e;
                            const o = a[t],
                                i = o.cells.map(e => r[e]).find(e => P(e)),
                                l = i ? i.index : o.cells[0];
                            return {
                                cell: l,
                                cellClues: r[l].clues,
                                clue: o.index,
                                clueCells: o.cells,
                                clueList: null !== (n = o.list) && undefined !== n ? n : null,
                                relatedCells: [],
                                relatedClues: []
                            };
                        },
                        ct = function (e) {
                            var t;
                            let n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
                            const {
                                clues: r
                            } = e, a = n || e.selection, {
                                clue: o,
                                cellClues: i
                            } = a;
                            if (i.length < 2) return a;
                            var l, s;
                            const c = r[s = o, (l = i)[(l.indexOf(s) + 1) % l.length]];
                            return rt(rt({}, a), {}, {
                                clueCells: c.cells,
                                clue: c.index,
                                clueList: null !== (t = c.list) && undefined !== t ? t : null
                            });
                        },
                        ut = (e, t) => {
                            const {
                                puzzle: {
                                    data: n
                                },
                                selection: {
                                    clueList: r
                                }
                            } = e;
                            return !!n && n.clueLists[r].name !== (at.test(t) ? "Down" : "Across");
                        },
                        dt = {
                            ShiftArrowUp: "PreviousClue",
                            ShiftArrowDown: "NextClue",
                            ShiftArrowLeft: "PreviousClue",
                            ShiftArrowRight: "NextClue"
                        };
                    function pt(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function mt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? pt(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    var ft = e => t => n => {
                        const r = ((e, t) => {
                            let n = null;
                            switch (t.type) {
                            case p:
                                "selection" in t.payload && (n = t.payload.selection || null);
                                break;
                            case b:
                                n = (e => {
                                    const {
                                        selection: t
                                    } = e;
                                    return null == t.cell ? lt(e) : null;
                                })(e);
                                break;
                            case W:
                                n = lt(e);
                                break;
                            case F:
                            case z:
                                n = ((e, t) => {
                                    var n;
                                    let {
                                        cells: r,
                                        clues: a,
                                        selection: o
                                    } = e;
                                    const i = r[t],
                                        {
                                            clueList: l
                                        } = o,
                                        {
                                            clues: s
                                        } = i,
                                        c = s.find(e => a[e].list === l),
                                        u = c ? a[c] : a[s[0]];
                                    return u ? {
                                        cell: t,
                                        cellClues: s,
                                        clue: u.index,
                                        clueCells: u.cells,
                                        clueList: null !== (n = u.list) && undefined !== n ? n : null,
                                        relatedCells: [],
                                        relatedClues: []
                                    } : {
                                        cell: t,
                                        cellClues: [],
                                        clue: null,
                                        clueCells: [],
                                        clueList: l,
                                        relatedCells: [],
                                        relatedClues: []
                                    };
                                })(e, t.payload.index);
                                break;
                            case R:
                                n = st(e, t.payload.index);
                                break;
                            case M:
                                n = ct(e);
                                break;
                            case A: {
                                const {
                                    direction: r
                                } = t.payload;
                                n = null != r && r.startsWith("Arrow") ? ((e, t) => {
                                    const n = Q(e),
                                        {
                                            settings: {
                                                onSwitch: r
                                            }
                                        } = n,
                                        {
                                            puzzle: {
                                                data: a
                                            },
                                            selection: {
                                                cellClues: o,
                                                clueList: i
                                            }
                                        } = e;
                                    if (!a) return null;
                                    if (ut(e, t)) {
                                        const n = 0 === o.length,
                                            l = "move" === r || n || !it(i, a.clueLists) ? tt(e, t.substring(5)) : null;
                                        return ct(e, l);
                                    }
                                    return tt(e, t.substring(5));
                                })(e, r) : null != r && r.startsWith("Shift") ? ((e, t) => {
                                    const {
                                        puzzle: {
                                            data: n
                                        },
                                        cells: r,
                                        selection: {
                                            clueList: a
                                        }
                                    } = e, o = t.replace("ShiftArrow", "");
                                    if (!n) return null;
                                    if (null == a || !it(a, n.clueLists)) {
                                        const t = at.test(o) ? n.clueLists.findIndex(e => "Down" === e.name) || 0 : n.clueLists.findIndex(e => "Across" === e.name) || 0;
                                        return tt(e, o, t);
                                    }
                                    if (ut(e, t)) {
                                        const t = tt(e, o);
                                        if (!t) return null;
                                        const n = e => !P(r[e]);
                                        return t.clueCells.every(n) ? t : st(e, t.clue);
                                    }
                                    return tt(e, dt[t] || "");
                                })(e, r) : tt(e, r);
                                break;
                            }
                            case _:
                                n = tt(e, "Advance");
                                break;
                            default:
                                return null;
                            }
                            return n ? (n = ((e, t) => {
                                let {
                                    clues: n
                                } = e;
                                const r = n[t.clue];
                                let a = [],
                                    o = [];
                                return r && (o = r.relatives || [], a = o.map(e => n[e]).reduce((e, t) => e.concat(t.cells), [])), rt(rt({}, t), {}, {
                                    relatedCells: a,
                                    relatedClues: o
                                });
                            })(e, n), n) : null;
                        })(e.getState(), n);
                        return t(r ? mt(mt({}, n), {}, {
                            selection: r
                        }) : n);
                    };
                    const bt = "crossword/modal/OPEN_MODAL",
                        ht = "crossword/modal/CLOSE_MODAL",
                        gt = "crossword/modal/REMOVE_MODAL",
                        vt = (e, t) => ({
                            type: bt,
                            payload: {
                                name: e,
                                config: t
                            }
                        }),
                        yt = e => ({
                            type: ht,
                            payload: {
                                isCancelled: e
                            }
                        }),
                        wt = () => ({
                            type: gt
                        }),
                        Et = "crossword/timer/RESUME_TIMER",
                        _t = "crossword/timer/PAUSE_TIMER",
                        Ot = "crossword/timer/COMMIT_PROGRESS",
                        kt = (e, t) => e === Et || e === Ot ? {
                            type: e,
                            payload: {
                                now: se()().unix()
                            }
                        } : {
                            type: e,
                            payload: {
                                now: se()().unix(),
                                isLeavingGame: t
                            }
                        },
                        Pt = () => kt(Et),
                        xt = "crossword/toolbar/TOGGLE_PENCIL_MODE",
                        jt = "crossword/toolbar/ENTER_REBUS_MODE",
                        Ct = "crossword/toolbar/EXIT_REBUS_MODE",
                        Tt = "crossword/toolbar/UPDATE_REBUS",
                        Dt = "crossword/toolbar/TOGGLE_HELP_MENU",
                        Nt = () => ({
                            type: xt
                        }),
                        Lt = e => ({
                            type: Dt,
                            payload: {
                                menu: e
                            }
                        }),
                        It = e => ({
                            type: Tt,
                            payload: e
                        });
                    function At(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function zt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? At(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Rt = (e, t, n, r, a, o, l) => {
                            const s = {
                                module: zt({
                                    name: e,
                                    context: t,
                                    element: {
                                        name: n || "",
                                        label: "string" == typeof r ? r : JSON.stringify(r),
                                        url: l || undefined
                                    }
                                }, a && {
                                    label: a
                                }),
                                eventData: {
                                    pageType: "game",
                                    type: o ? "ob_click" : "click",
                                    trigger: "module",
                                    status: ""
                                }
                            };
                            (0, i.j)("moduleInteraction", s);
                        },
                        Mt = (e, t, n, r) => {
                            (0, i.j)("impression", {
                                module: {
                                    name: e,
                                    context: r,
                                    region: t || "",
                                    label: n || undefined
                                }
                            });
                        };
                    let Gt = function (e) {
                        return e.Letter = "LETTER_SCOPE", e.Unchecked = "UNCHECKED_SCOPE", e.Word = "WORD_SCOPE", e.Puzzle = "PUZZLE_SCOPE", e.Fifty = "FIFTY_SCOPE", e.SeventyFive = "SEVENTYFIVE_SCOPE", e;
                    }({});
                    const Bt = (e, t, n, r, a) => {
                        switch (e) {
                        case Gt.Unchecked:
                            Rt("click", t, n, "".concat(r, "-incomplete"));
                            break;
                        case Gt.Letter:
                            Rt("click", t, n, "".concat(r, "-square"));
                            break;
                        case Gt.Word:
                            Rt("click", t, n, "".concat(r, "-word"), a);
                            break;
                        case Gt.Puzzle:
                            Rt("click", t, n, "".concat(r, "-puzzle"));
                        }
                    };
                    var Ut = e => t => n => {
                        const r = e.getState(),
                            a = Ie(e.getState()),
                            o = De(r) || 0,
                            i = a ? "mini-page" : "game-page";
                        switch (n.type) {
                        case E: {
                            const e = (n.payload.cellsInScope || []).map(e => r.cells[e].answer).join("");
                            Bt(n.payload.scope, o, i, "reveal", e);
                            break;
                        }
                        case y:
                            Bt(n.payload.scope, o, i, "check");
                            break;
                        case w:
                            Bt(n.payload.scope, o, i, "clear");
                            break;
                        case xt:
                            ((e, t, n) => {
                                const r = n.toolbar.inPencilMode ? "pen" : "pencil";
                                Rt("click", e, t, r);
                            })(o, i, r);
                            break;
                        case ht:
                            ((e, t, n, r) => {
                                var a;
                                const o = (null === (a = r.modal.config) || undefined === a ? undefined : a.actionType) || "",
                                    i = e.type !== gt && "isCancelled" in e.payload && e.payload.isCancelled || false;
                                [w, W].includes(o) && i && Rt("click", t, n, "clear-cancel");
                            })(n, o, i, r);
                            break;
                        case W:
                            Rt("click", o, i, "clear-confirm");
                            break;
                        case _t:
                            Rt("click", o, i, "stop-timer");
                            break;
                        case Et:
                            Rt("click", o, i, "start-timer");
                        }
                        return t(n);
                    };
                    const Ht = e => {
                            var t, n;
                            return null !== (t = null === (n = e.meter) || undefined === n ? undefined : n.data) && undefined !== t ? t : null;
                        },
                        Wt = e => {
                            var t, n;
                            return null !== (t = null === (n = e.meter) || undefined === n ? undefined : n.hasLoaded) && undefined !== t && t;
                        };
                    function Ft(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Yt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ft(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ft(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    (0, J.P1)(Ht, e => {
                        var t;
                        return null !== (t = null == e ? undefined : e.granted) && undefined !== t ? t : null;
                    }), (0, J.P1)(Ht, e => {
                        var t;
                        return null !== (t = null == e ? undefined : e.grantReason) && undefined !== t ? t : null;
                    });
                    let qt = function (e) {
                        return e.standard = "standard", e.southpaw = "southpaw", e.large_print = "large_print", e;
                    }({});
                    const $t = {
                            onSwitch: "stay",
                            jumpBack: true,
                            skipFilled: true,
                            skipPenciled: false,
                            showTimer: true,
                            suppressDisqualificationWarnings: false,
                            forceGoldStarEligibility: false,
                            speedUpSyncInterval: false,
                            suppressAutocheckNotice: false
                        },
                        Vt = Yt(Yt({}, $t), {}, {
                            spaceTriggers: "toggle",
                            backspaceAcrossWords: true,
                            autoAdvance: true,
                            soundOn: false
                        }),
                        Zt = Yt(Yt({}, $t), {}, {
                            spaceTriggers: "clear",
                            backspaceAcrossWords: false,
                            autoAdvance: false,
                            soundOn: true,
                            showMilestones: true
                        }),
                        Xt = {
                            opacity: 100,
                            layout: qt.standard
                        },
                        Kt = "crossword/user/CHANGE_SETTING",
                        Jt = "crossword/user/LOAD_SETTINGS",
                        Qt = "crossword/user/RESET_TO_DEFAULTS",
                        en = "crossword/user/LOAD_PRINT_PREFS",
                        tn = "crossword/user/CHANGE_BLOCK_OPACITY",
                        nn = "crossword/user/CHANGE_PRINT_LAYOUT",
                        rn = "crossword/user/USER_TYPE_LOADED",
                        an = "crossword/user/SET_USER_ACCESS",
                        on = "crossword/user/ACCESS_DATA_AVAILABLE",
                        ln = e => ({
                            type: Kt,
                            payload: e
                        }),
                        sn = e => ({
                            type: an,
                            payload: e
                        });
                    var cn = function (e) {
                        return e.GRANT_S1 = "User has Xwd entitlement", e.GRANT_S2 = "User has shortz mode enabled", e.GRANT_S3 = "User is playing a free puzzle", e.GRANT_S4 = "Meter granted", e.DENY_S1 = "Meter did not grant", e.DENY_S2 = "No meter data available. Puzzle has not been detected as free", e.DENY_S3 = "No puzzle data available. No meter data available", e;
                    }(cn || {});
                    const un = e => t => n => {
                            const r = e.getState(),
                                a = t(n),
                                o = e.getState();
                            if (ae(r)) return a;
                            if (Pe(o)) return a;
                            if (!ke(o)) return a;
                            if (Ie(o)) return a;
                            if (!Wt(o)) return a;
                            if (n.type === on) {
                                switch ((e => {
                                    let {
                                        meter: t,
                                        puzzle: n,
                                        access: r
                                    } = e;
                                    return r.userType.hasXwd ? cn.GRANT_S1 : r.userType.inShortzMode ? cn.GRANT_S2 : null !== n ? n.freePuzzle ? cn.GRANT_S3 : null !== t ? t.granted ? cn.GRANT_S4 : cn.DENY_S1 : cn.DENY_S2 : cn.DENY_S3;
                                })({
                                    meter: Ht(o),
                                    puzzle: Se(o),
                                    access: ne(o)
                                })) {
                                case cn.DENY_S1:
                                case cn.DENY_S2:
                                    e.dispatch(sn(false));
                                    break;
                                case cn.DENY_S3:
                                    break;
                                case cn.GRANT_S1:
                                case cn.GRANT_S2:
                                case cn.GRANT_S3:
                                case cn.GRANT_S4:
                                    e.dispatch(sn(true));
                                    break;
                                default:
                                    e.dispatch(sn(false));
                                }
                            }
                            return a;
                        },
                        dn = (0, n(59391).Z)();
                    var pn = r.createContext(dn);
                    const mn = "crossword/stats/GET_STATS",
                        fn = function () {},
                        bn = {
                            log: fn,
                            info: fn,
                            warn: fn,
                            error: fn,
                            dir: fn,
                            time: fn,
                            timeEnd: fn,
                            trace: fn,
                            assert: fn,
                            debug: fn,
                            table: fn,
                            group: fn,
                            groupCollapsed: fn,
                            groupEnd: fn,
                            clear: fn,
                            count: fn,
                            timeStamp: fn
                        };
                    Object.keys(bn).forEach(e => {
                        bn[e] = function () {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            const a = "function" == typeof n ? n() : n;
                            console[e](...a);
                        };
                    });
                    var hn = bn;
                    function gn(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function vn(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? gn(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const yn = (e, t, n) => n.every(n => e[n] === t[n]),
                        wn = (e, t) => t.reduce((t, n) => vn(vn({}, t), {}, {
                            [n]: e[n]
                        }), {}),
                        En = e => {
                            let t = "";
                            for (let n = 0; n < e.length; n += 1) t += "_" === e[n] ? e[n += 1].toUpperCase() : e[n];
                            return t;
                        },
                        _n = e => {
                            switch (true) {
                            case !e:
                                return e;
                            case Array.isArray(e):
                                return e.map(_n);
                            case "object" == typeof e:
                                return Object.entries(e).reduce((e, t) => {
                                    let [n, r] = t;
                                    return Object.assign(e, {
                                        [En(n)]: _n(r)
                                    });
                                }, {});
                            default:
                                return e;
                            }
                        },
                        On = () => Math.random().toString(36).slice(2, 8),
                        kn = "".concat(i.OB.edge, "/svc/crosswords"),
                        Pn = (e, t) => {
                            const {
                                method: n,
                                url: r,
                                data: a = null,
                                isSync: o
                            } = e;
                            return t.inShortzMode && hn.info("info: API CALL ".concat(JSON.stringify(e, null, 2))), i.Be.request(n, r, {
                                data: a,
                                isSync: o
                            });
                        },
                        Sn = e => {
                            const t = "".concat(kn, "/v3/").concat(e.regiId, "/stats-and-streaks.json?date_start=2014-01-01&start_on_monday=true");
                            return Pn({
                                method: "GET",
                                url: t
                            }, e).then(e => _n({
                                dailyStats: e.results.stats,
                                streaks: e.results.streaks
                            })).catch(e => {
                                hn.error("failed to fetch stats and streaks", e);
                            });
                        },
                        xn = e => {
                            const t = "".concat(kn, "/v3/").concat(e.regiId, "/mini-stats.json?date_start=2014-01-01&start_on_monday=true");
                            return Pn({
                                method: "GET",
                                url: t
                            }, e).then(e => _n({
                                miniStats: e.results
                            })).catch(e => {
                                hn.error("failed to fetch mini stats", e);
                            });
                        },
                        jn = e => e.status,
                        Cn = (0, J.P1)(jn, e => e.currentProgress),
                        Tn = (0, J.P1)(jn, e => e.isSolved),
                        Dn = (0, J.P1)(jn, e => e.autocheckEnabled),
                        Nn = e => {
                            let {
                                cells: t,
                                status: n
                            } = e;
                            const r = t.filter(e => k(e)).length;
                            return (r - ((null == n ? undefined : n.blankCells) || 0)) / r;
                        },
                        Ln = (0, J.P1)([we, jn], (e, t) => Nn({
                            cells: e,
                            status: t
                        })),
                        In = (0, J.P1)([jn, Se, ee], (e, t, n) => {
                            let {
                                firsts: r
                            } = e;
                            if (!t) return false;
                            switch (true) {
                            case "daily" !== t.publishStream:
                                return false;
                            case n.forceGoldStarEligibility:
                                return true;
                            case !!r.revealed:
                            case !!r.timerReset:
                            case !!r.checked:
                            case se()().isAfter(t.goldStarCutoff):
                                return false;
                            default:
                                return true;
                            }
                        }),
                        An = (0, J.P1)([Ce, Tn], (e, t) => {
                            if (!e) return "";
                            const {
                                beforeStart: n,
                                afterSolve: r
                            } = e;
                            return t && r || n;
                        }),
                        zn = [w, E, _, F, W],
                        Rn = {
                            reached: false,
                            seen: false,
                            text: "3/4 Done!",
                            threshold: 0.75
                        },
                        Mn = {
                            reached: false,
                            seen: false,
                            text: "Halfway!",
                            threshold: 0.5
                        };
                    var Gn = e => t => n => {
                            const r = e.getState(),
                                a = t(n),
                                o = e.getState();
                            if (n.type === b && In(o)) {
                                (e => t => e.isLoggedIn ? (e => Promise.all([xn(e), Sn(e)]).then(e => e.reduce((e, t) => Object.assign(e, t), {})))(e).then(e => t({
                                    type: mn,
                                    payload: e
                                })).catch(e => {
                                    hn.error("fetch stats and streaks failed: ".concat(e.stack));
                                }) : Promise.resolve({}))(n.payload.user)(e.dispatch, e.getState, null);
                            }
                            if (!ee(o).showMilestones) return a;
                            if (!zn.includes(n.type)) return a;
                            const i = Ln(r),
                                l = Ln(o);
                            if (i === l) return a;
                            if (((e, t) => {
                                    [Rn, Mn].forEach(n => {
                                        const {
                                            threshold: r
                                        } = n, a = e <= r && r < t;
                                        (a || t <= r && r < e) && Object.assign(n, {
                                            reached: a,
                                            seen: false
                                        });
                                    });
                                })(i, l), ((e, t) => {
                                    const n = ((e, t) => {
                                            const n = Be(e),
                                                r = n && _e(t)[n.index];
                                            return (null == n ? undefined : n.unfilledCount) && !(null != r && r.unfilledCount);
                                        })(e, t),
                                        r = jn(t).incorrectCells <= 0;
                                    return n && !r;
                                })(r, o)) {
                                const e = (e => {
                                    const {
                                        index: t
                                    } = Ge(e);
                                    return e => {
                                        const n = e.reached && !e.seen;
                                        return n && ((e, t) => {
                                            const {
                                                text: n
                                            } = e;
                                            dn.emit("milestone", {
                                                text: n,
                                                idx: t
                                            }), e.seen = true;
                                        })(e, t), n;
                                    };
                                })(r);
                                e(Rn) || e(Mn);
                            }
                            return a;
                        },
                        Bn = n(11466),
                        Un = n.n(Bn);
                    /iPad|iPhone|Safari/.test(navigator.userAgent) && Un().config({
                        driver: Un().LOCALSTORAGE
                    });
                    const Hn = "anon",
                        Wn = (e, t) => "".concat(e || Hn, "@").concat(t),
                        Fn = e => {
                            const t = (new Date).getTime() - 2592e5;
                            (e => Un().getItem("".concat(e, "#lastPlayed")))(e).then(n => {
                                (n && n <= t || null === n) && (e => {
                                    Un().removeItem("".concat(e, "#lastPlayed")), Un().removeItem(e);
                                })(e);
                            });
                        },
                        Yn = e => "".concat(e, "#pendingCommits"),
                        qn = (e, t, n) => {
                            (e => Un().getItem(Yn(e)).then(e => e || undefined))(e).then(function () {
                                let r = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
                                n ? r[t] = n : delete r[t], Object.keys(r).length ? Un().setItem(Yn(e), r).catch(e => {
                                    console.error("error setting commit key", e);
                                }) : (e => {
                                    Un().removeItem(Yn(e)).catch(e => {
                                        console.error("error clearing pending commits", e);
                                    });
                                })(e);
                            });
                        };
                    let $n;
                    const Vn = function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Hn;
                            return Un().getItem("".concat(e, "#preferences"));
                        },
                        Zn = "crossword/puzzle/PUZZLE_LOADED",
                        Xn = "crossword/puzzle/PUZZLE_ERROR",
                        Kn = e => ({
                            type: Xn,
                            payload: {
                                status: e
                            }
                        });
                    function Jn(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Qn(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Jn(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jn(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const er = e => {
                            if (!D(e)) return e;
                            const t = C(e);
                            return Qn(Qn({}, e), {}, {
                                confirmed: true,
                                checked: e.checked && t,
                                penciled: false,
                                revealed: !t,
                                guess: e.answer
                            });
                        },
                        tr = e => {
                            if (!L(e)) return e;
                            const t = C(e);
                            return Qn(Qn({}, e), {}, {
                                confirmed: t,
                                checked: !t || e.checked,
                                penciled: !t && e.penciled,
                                modified: false
                            });
                        },
                        nr = (e, t, n) => {
                            const {
                                inPencilMode: r = false,
                                fromRebus: a = false,
                                autocheckEnabled: o = false
                            } = n || {};
                            if (S(e) && !a) return e;
                            const i = Qn(Qn({}, e), {}, {
                                guess: t,
                                penciled: r,
                                modified: e.checked,
                                confirmed: false
                            });
                            return o ? tr(i) : i;
                        },
                        rr = e => N(e) ? nr(e, "") : e,
                        ar = e => Qn(Qn({}, e), {}, {
                            penciled: false,
                            revealed: false,
                            checked: false,
                            confirmed: false,
                            modified: false,
                            guess: ""
                        }),
                        or = ["guess", "checked", "confirmed", "modified", "revealed", "penciled"],
                        ir = (e, t, n, r) => e.map(e => {
                            if (!k(e) || !n.includes(e.index)) return e;
                            const a = t(e);
                            return yn(e, a, or) ? a : Qn(Qn({}, a), {}, {
                                timestamp: r
                            });
                        });
                    function lr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function sr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? lr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const cr = [...or, "timestamp"],
                        ur = (e, t) => {
                            let {
                                cells: n,
                                status: r,
                                timer: a
                            } = t;
                            const {
                                firsts: o,
                                isSolved: i,
                                autocheckEnabled: l
                            } = r, {
                                userID: s,
                                deviceID: c,
                                puzzleID: u
                            } = e, d = {
                                deviceID: c,
                                puzzleID: u,
                                userID: s ? parseInt(s) : null
                            }, {
                                sessionElapsedTime: p,
                                resetSinceLastCommit: m
                            } = a, f = n.map(e => e.timestamp || Infinity).sort()[0] - 1 || 0, b = ((e, t) => e.map(e => k(e) ? sr(sr({}, wn(e, cr)), {}, {
                                timestamp: e.timestamp ? e.timestamp - t : undefined
                            }) : {
                                blank: true
                            }))(n, f), h = On(), g = sr(sr({}, d), {}, {
                                commitID: h,
                                timestamp: se()().unix(),
                                minGuessTime: f,
                                timerDiff: p,
                                reset: m,
                                solved: i,
                                board: {
                                    cells: b
                                },
                                firsts: o,
                                autocheckEnabled: l
                            });
                            return ((e, t, n) => {
                                qn(e, t, n);
                            })(e.userID, h, g), g;
                        },
                        dr = (e, t) => {
                            const n = {
                                guess: "",
                                label: "",
                                penciled: false,
                                checked: false,
                                confirmed: false,
                                revealed: false,
                                modified: false
                            };
                            return e.map(e => e.blank ? sr(sr({}, n), {}, {
                                type: 0,
                                clues: [],
                                index: e.index,
                                answer: e.answer
                            }) : (e.timestamp && (e.timestamp += t), sr(sr({}, n), e)));
                        },
                        pr = e => {
                            if (!e || !e.calcs) return Promise.reject();
                            const {
                                board: t,
                                minGuessTime: n,
                                calcs: r,
                                firsts: a,
                                lastCommitID: o,
                                userID: i,
                                autocheckEnabled: l = false
                            } = e, {
                                secondsSpentSolving: s = 0,
                                solved: c = false,
                                eligible: u = false
                            } = r;
                            return ((e, t) => {
                                qn(e, t);
                            })(i, o), Promise.resolve({
                                lastCommitID: o,
                                cells: t ? dr(t.cells, n) : [],
                                status: {
                                    firsts: a,
                                    isSolved: c,
                                    isGoldStarEligible: u,
                                    autocheckEnabled: l
                                },
                                timer: {
                                    totalElapsedTime: s
                                }
                            });
                        },
                        mr = e => e.timer,
                        fr = (0, J.P1)(mr, e => e.totalElapsedTime),
                        br = (0, J.P1)(mr, e => e.sessionStartTimestamp),
                        hr = (0, J.P1)([fr, br], ce),
                        gr = [h, Y, Et, _t, A, z, R, M, _, E, w, y, Ot, W, q, $],
                        vr = [_, E, w, y, W],
                        yr = [W, Ot];
                    var wr = e => {
                        let t, n, r = false;
                        const a = () => {
                                r && (r = false, e.dispatch(kt(Ot)));
                            },
                            o = function () {
                                let e = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
                                clearInterval(t), t = window.setInterval(a, e ? 5e3 : 3e5);
                            };
                        return "object" == typeof window && o(), t => a => {
                            const {
                                type: i
                            } = a;
                            if (i === b) return n = a.payload.user, t(a);
                            const l = e.getState(),
                                s = mr(l),
                                c = ee(l),
                                u = t(a);
                            if (!n) return u;
                            const d = e.getState(),
                                p = mr(d),
                                m = ee(d),
                                h = De(d),
                                g = n.inShortzMode;
                            if (h) {
                                if (c.speedUpSyncInterval !== m.speedUpSyncInterval && o(m.speedUpSyncInterval), gr.includes(i)) {
                                    const t = wn(d, f);
                                    ((e, t, n) => {
                                        const r = Wn(e, t);
                                        Un().setItem(r, n).catch(e => {
                                                console.error("error storing game", e);
                                            }),
                                            function (e) {
                                                let t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : (new Date).getTime();
                                                Un().setItem("".concat(e, "#lastPlayed"), t);
                                            }(r);
                                    })(n.regiId, h, t), g && hn.log("info: PERSISTED LOCAL GAME due to", a.type);
                                    const o = yr.includes(i),
                                        c = p.isLeavingGame,
                                        u = !s.sessionStartTimestamp,
                                        m = !p.sessionStartTimestamp,
                                        b = l.status.isSolved,
                                        {
                                            isSolved: y
                                        } = d.status,
                                        w = o || !u && m || !b && y && m;
                                    vr.includes(i) && (r = true), w && n.isLoggedIn && n.regiId && (g && hn.time("info: PERSISTED REMOTE GAME"), ($n ? Promise.resolve($n) : Un().getItem("deviceID").then(e => ($n = e || "".concat(On(), "-web"), e || Un().setItem("deviceID", $n).catch(e => {
                                        console.error("error setting device id", e);
                                    }), $n))).then(r => {
                                        (function (e, t, n) {
                                            let r = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
                                            const a = {
                                                now: se()().unix(),
                                                commits: [ur(e, n)]
                                            };
                                            return function (e, t) {
                                                let n = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
                                                const r = "".concat(kn, "/v6/game"),
                                                    a = "".concat(r, ".json");
                                                return Pn({
                                                    method: "PUT",
                                                    url: a,
                                                    data: t,
                                                    isSync: n
                                                }, e).catch(e => {
                                                    hn.error("Failed to fetch puzzle progress: ", e);
                                                });
                                            }(t, a, r).then(e => (console.groupCollapsed("[XWD on Progress] syncGameState"), console.log("Persisting progress to progress endpoint - /svc/crosswords/v6/game.json"), console.dir({
                                                user: t,
                                                data: a
                                            }), console.groupEnd(), e)).then(pr).catch(() => {
                                                console.error("Failed to sync game state");
                                            });
                                        }({
                                            deviceID: r,
                                            puzzleID: h,
                                            userID: n.regiId
                                        }, n, t, !!c).then(t => {
                                            e.dispatch(v(null == t ? undefined : t.lastCommitID)), g && hn.timeEnd("info: PERSISTED REMOTE GAME");
                                        }));
                                    }).catch(e => {
                                        console.error("Failed to generate device ID:", e);
                                    }));
                                }
                                return u;
                            }
                        };
                    };
                    const Er = [Kt, Qt, tn, nn];
                    var _r = e => {
                            let t;
                            return n => r => {
                                const {
                                    type: a
                                } = r;
                                if (a === b) return t = r.payload.user, n(r);
                                const o = n(r);
                                return t && Er.includes(a) && ((e, t) => {
                                    const {
                                        printPrefs: n,
                                        settings: r
                                    } = e;
                                    Un().setItem("".concat(t.regiId || Hn, "#preferences"), {
                                        printPrefs: n,
                                        settings: r
                                    }).catch(e => {
                                        console.error("error storing user prefs", e);
                                    });
                                })(Q(e.getState()), t), o;
                            };
                        },
                        Or = n(96205);
                    function kr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Pr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? kr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    function Sr(e) {
                        var t, n;
                        return "" === (null == e ? undefined : e.answer) || " " === (null == e ? undefined : e.answer) || (null == e || null === (t = e.moreAnswers) || undefined === t ? undefined : t.valid.includes("")) || (null == e || null === (n = e.moreAnswers) || undefined === n ? undefined : n.valid.includes(" "));
                    }
                    const xr = {
                        name: null,
                        config: null,
                        isClosing: false
                    };
                    const jr = {
                        cell: null,
                        clueCells: [],
                        clue: null,
                        cellClues: [],
                        clueList: null,
                        relatedCells: [],
                        relatedClues: []
                    };
                    function Cr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Tr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Cr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Dr = (e, t, n) => e[t] ? e : Tr(Tr({}, e), {}, {
                        [t]: n
                    });
                    var Nr = (0, u.UY)({
                        firsts: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case p:
                                return Tr(Tr({}, e), t.payload.status.firsts);
                            case b:
                                return Dr(e, "opened", t.payload.now);
                            case Y:
                                return Dr(e, "solved", t.payload.now);
                            case E:
                                return Dr(e, "revealed", t.payload.now);
                            case y:
                            case q:
                                return Dr(e, "checked", t.payload.now);
                            case w:
                                return Dr(e, "cleared", t.payload.now);
                            case W:
                                return Dr(e, "timerReset", t.payload.now);
                            default:
                                return e;
                            }
                        },
                        isSolved: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case W:
                                return false;
                            case Y:
                                return true;
                            case p:
                                return t.payload.status.isSolved || false;
                            default:
                                return e;
                            }
                        },
                        isFilled: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
                            switch ((arguments.length > 1 ? arguments[1] : undefined).type) {
                            case Z:
                                return true;
                            case X:
                                return false;
                            default:
                                return e;
                            }
                        },
                        autocheckEnabled: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case p:
                                return t.payload.status.autocheckEnabled || false;
                            case q:
                                return true;
                            case $:
                                return false;
                            default:
                                return e;
                            }
                        },
                        blankCells: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case _:
                                return e + (t.payload.blankDelta || 0);
                            case H:
                            case m:
                                return t.payload.cells.filter(P).length;
                            case F:
                            case E:
                            case w: {
                                const {
                                    blankDeltas: n
                                } = t.payload;
                                return e + n.reduce((e, t) => e + t, 0);
                            }
                            case W:
                                return t.payload.affectedCells.length;
                            default:
                                return e;
                            }
                        },
                        incorrectCells: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case _:
                                return e + (t.payload.incorrectDelta || 0);
                            case H:
                            case m:
                                return t.payload.cells.filter(T).length;
                            case F:
                            case E:
                            case w: {
                                const {
                                    incorrectDeltas: n
                                } = t.payload;
                                return e + n.reduce((e, t) => e + t, 0);
                            }
                            case W:
                                return t.payload.affectedCells.length;
                            default:
                                return e;
                            }
                        },
                        lastCommitID: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            return t.type === h && t.payload.commitID || e;
                        },
                        currentProgress: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case V:
                                return t.payload.currentProgress;
                            case p:
                                return Math.floor(Nn(t.payload) / 0.2);
                            case W:
                                return 0;
                            default:
                                return e;
                            }
                        }
                    });
                    function Lr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Ir(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Lr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Ar = {
                        sessionStartTimestamp: undefined,
                        totalElapsedTime: 0,
                        sessionElapsedTime: 0,
                        resetSinceLastCommit: false
                    };
                    function zr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Rr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? zr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Mr = {
                        activeMenu: null,
                        inPencilMode: false,
                        inRebusMode: false,
                        rebusValue: ""
                    };
                    function Gr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Br(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Gr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Ur = {
                        isReady: false,
                        isSynced: false,
                        doEscape: false
                    };
                    function Hr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Wr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Hr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Fr = {
                        settings: Vt,
                        printPrefs: Xt,
                        access: {
                            userType: {},
                            isAccessDataAvailable: false,
                            canAccessPuzzle: null
                        }
                    };
                    function Yr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function qr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Yr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const $r = "crossword/printOptions/CHANGE_PRINT_OPTION";
                    function Vr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Zr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Vr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Xr = {
                        version: "puzzle",
                        showBlack: false,
                        showSpoiler: true
                    };
                    function Kr(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Jr(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Kr(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kr(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Qr = {
                        data: null,
                        hasLoaded: false,
                        error: null
                    };
                    const ea = "crossword/meter/METER_LOADED",
                        ta = "crossword/meter/METER_ERROR",
                        na = e => ({
                            type: ta,
                            payload: {
                                status: e
                            }
                        });
                    function ra(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function aa(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ra(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const oa = {
                        data: null,
                        hasLoaded: false,
                        error: null
                    };
                    let ia = function (e) {
                        return e[e.PENDING = -1] = "PENDING", e[e.LEGACY_ONLY = 0] = "LEGACY_ONLY", e[e.LEGACY_WITH_STATE = 1] = "LEGACY_WITH_STATE", e[e.STATE_ONLY = 2] = "STATE_ONLY", e;
                    }({});
                    const la = {
                        phase: ia.PENDING
                    };
                    const sa = (0, u.UY)({
                        cells: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case Zn:
                                return t.payload.cells;
                            case p:
                                return e.map(e => k(e) ? Qn(Qn({}, e), t.payload.cells[e.index]) : e);
                            case W:
                                return ir(e, ar, t.payload.affectedCells, t.payload.now);
                            case F:
                                return ir(e, e => t.payload.index <= e.index ? ar(e) : (e => Qn(Qn({}, e), {}, {
                                    guess: e.answer,
                                    checked: false
                                }))(e), t.payload.affectedCells, t.payload.now);
                            case _: {
                                const n = "number" == typeof t.payload.index ? [t.payload.index] : [];
                                return ir(e, e => nr(e, t.payload.value, t.payload), n, t.payload.now);
                            }
                            case w:
                                return ir(e, rr, t.payload.affectedCells, t.payload.now);
                            case E:
                                return ir(e, er, t.payload.affectedCells, t.payload.now);
                            case y:
                            case q:
                                return ir(e, tr, t.payload.affectedCells, t.payload.now);
                            default:
                                return e;
                            }
                        },
                        clues: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case Zn:
                                return t.payload.clues;
                            case m: {
                                const {
                                    cells: e,
                                    clues: n
                                } = t.payload;
                                return n.map(t => {
                                    const n = t.cells.map(t => Sr(e[t]) ? null : e[t]).filter(e => !!e).filter(P).length;
                                    return Pr(Pr({}, t), {}, {
                                        unfilledCount: n
                                    });
                                });
                            }
                            case _: {
                                const {
                                    cells: n,
                                    index: r,
                                    blankDelta: a = 0
                                } = t.payload;
                                return e.map(e => "number" == typeof r && e.cells.includes(r) && a && !Sr(n[r]) ? Pr(Pr({}, e), {}, {
                                    unfilledCount: e.unfilledCount + a
                                }) : e);
                            }
                            case W:
                                return e.map(e => Pr(Pr({}, e), {}, {
                                    unfilledCount: e.cells.length
                                }));
                            case w:
                            case E:
                            case F: {
                                const {
                                    cells: n,
                                    blankDeltas: r,
                                    affectedCells: a
                                } = t.payload;
                                return e.map(e => {
                                    const t = r.filter((t, n) => {
                                        return r = a[n], e.cells.includes(r);
                                        var r;
                                    }).map((e, t) => {
                                        const r = a[t];
                                        return Sr(n[r]) ? 0 : e;
                                    }).reduce((e, t) => e + t, e.unfilledCount);
                                    return Pr(Pr({}, e), {}, {
                                        unfilledCount: t
                                    });
                                });
                            }
                            default:
                                return e;
                            }
                        },
                        meter: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : oa,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case ea:
                                return aa(aa({}, e), {}, {
                                    data: t.payload.meterResponse,
                                    hasLoaded: true,
                                    error: null
                                });
                            case ta:
                                return aa(aa({}, e), {}, {
                                    hasLoaded: true,
                                    error: t.payload
                                });
                            default:
                                return e;
                            }
                        },
                        modal: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : xr,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case bt:
                                return {
                                    name: t.payload.name, config: t.payload.config || null, isClosing: false
                                };
                            case ht:
                                return {
                                    name: e.name, config: e.config, isClosing: true
                                };
                            case gt:
                                return xr;
                            default:
                                return e;
                            }
                        },
                        printOptions: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Xr,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            return t.type === $r ? Zr(Zr({}, e), t.payload) : e;
                        },
                        puzzle: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Qr,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case Zn:
                                return Jr(Jr({}, e), {}, {
                                    data: t.payload.puzzle,
                                    hasLoaded: true,
                                    error: null
                                });
                            case Xn:
                                return Jr(Jr({}, e), {}, {
                                    hasLoaded: true,
                                    error: t.payload
                                });
                            default:
                                return e;
                            }
                        },
                        selection: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : jr,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            return "selection" in t && t.selection || e;
                        },
                        stats: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            return t.type === mn ? qr(qr({}, e), t.payload) : e;
                        },
                        status: Nr,
                        timer: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Ar,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case p:
                                return Ir(Ir({}, e), t.payload.timer);
                            case h:
                                return Ir(Ir({}, e), {}, {
                                    resetSinceLastCommit: false
                                });
                            case Et:
                                return Ir(Ir({}, e), {}, {
                                    sessionStartTimestamp: t.payload.now,
                                    sessionElapsedTime: 0
                                });
                            case _t: {
                                const {
                                    now: n,
                                    isLeavingGame: r
                                } = t.payload, {
                                    sessionStartTimestamp: a,
                                    totalElapsedTime: o
                                } = e, i = a ? n - a : 0;
                                return Ir(Ir({}, e), {}, {
                                    sessionElapsedTime: i,
                                    sessionStartTimestamp: undefined,
                                    totalElapsedTime: o + i,
                                    isLeavingGame: r
                                });
                            }
                            case Ot: {
                                const {
                                    sessionStartTimestamp: n,
                                    totalElapsedTime: r
                                } = e, {
                                    now: a
                                } = t.payload, o = n ? a - n : 0;
                                return Ir(Ir({}, e), {}, {
                                    sessionElapsedTime: o,
                                    sessionStartTimestamp: a,
                                    totalElapsedTime: r + o,
                                    isLeavingGame: false
                                });
                            }
                            case W:
                                return {
                                    totalElapsedTime: 0, sessionElapsedTime: 0, sessionStartTimestamp: t.payload.now, resetSinceLastCommit: true
                                };
                            case Y:
                                return Ir(Ir({}, e), {}, {
                                    sessionElapsedTime: 0
                                });
                            default:
                                return e;
                            }
                        },
                        toolbar: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Mr,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case jt:
                                return Rr(Rr({}, e), {}, {
                                    inRebusMode: true,
                                    rebusValue: t.payload.initialValue
                                });
                            case Ct:
                                return Rr(Rr({}, e), {}, {
                                    inRebusMode: false,
                                    rebusValue: ""
                                });
                            case Tt:
                                return Rr(Rr({}, e), {}, {
                                    rebusValue: t.payload
                                });
                            case xt:
                                return Rr(Rr({}, e), {}, {
                                    inPencilMode: !e.inPencilMode
                                });
                            case "crossword/toolbar/PENCIL_MODE_ON":
                                return Rr(Rr({}, e), {}, {
                                    inPencilMode: true
                                });
                            case "crossword/toolbar/PENCIL_MODE_OFF":
                                return Rr(Rr({}, e), {}, {
                                    inPencilMode: false
                                });
                            case Dt: {
                                const {
                                    menu: n
                                } = t.payload;
                                return Rr(Rr({}, e), {}, {
                                    activeMenu: n === e.activeMenu ? null : n
                                });
                            }
                            default:
                                return e;
                            }
                        },
                        transient: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Ur,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case b:
                                return Br(Br({}, e), {}, {
                                    isReady: true
                                });
                            case h:
                                return Br(Br({}, e), {}, {
                                    isSynced: true
                                });
                            case g:
                                return Br(Br({}, e), {}, {
                                    doEscape: t.payload
                                });
                            default:
                                return e;
                            }
                        },
                        user: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Fr,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            switch (t.type) {
                            case Kt:
                                return Wr(Wr({}, e), {}, {
                                    settings: Wr(Wr({}, e.settings), t.payload)
                                });
                            case Jt:
                            case Qt:
                                return Wr(Wr({}, e), {}, {
                                    settings: Wr({}, t.payload)
                                });
                            case en:
                                return Wr(Wr({}, e), {}, {
                                    printPrefs: t.payload
                                });
                            case nn:
                            case tn:
                                return Wr(Wr({}, e), {}, {
                                    printPrefs: Wr(Wr({}, e.printPrefs), t.payload)
                                });
                            case rn:
                                return Wr(Wr({}, e), {}, {
                                    access: Wr(Wr({}, e.access), {}, {
                                        userType: Wr(Wr({}, e.access.userType), t.payload)
                                    })
                                });
                            case an:
                                return Wr(Wr({}, e), {}, {
                                    access: Wr(Wr({}, e.access), {}, {
                                        canAccessPuzzle: t.payload
                                    })
                                });
                            case on:
                                return Wr(Wr({}, e), {}, {
                                    access: Wr(Wr({}, e.access), {}, {
                                        isAccessDataAvailable: t.payload
                                    })
                                });
                            default:
                                return e;
                            }
                        },
                        moogle: Or.b,
                        rollout: function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : la,
                                t = arguments.length > 1 ? arguments[1] : undefined;
                            return "crossword/modal/SET_ROLLOUT" === t.type ? {
                                phase: t.payload.phase
                            } : e;
                        }
                    });
                    function ca(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function ua(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ca(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ca(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    n(47812);
                    const da = /\d{4}-\d{2}-\d{2}/,
                        pa = (e, t) => {
                            if (t.platforms && !t.platforms.web) return e;
                            const n = t.text.replace(/\n\n/g, "<br><br>"),
                                r = ua(ua({}, t), {}, {
                                    text: n
                                });
                            return e.concat(r);
                        };
                    function ma(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function fa(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ma(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ma(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const ba = new RegExp(/^.+?(?=<img)/),
                        ha = new RegExp(/<img/),
                        ga = new RegExp(/^\[aria-label\]/),
                        va = (e, t) => fa(fa({}, e), {}, {
                            index: t
                        }),
                        ya = (e, t, n) => fa(fa({}, e), {}, {
                            prev: 0 === t ? n.length - 1 : t - 1,
                            next: t === n.length - 1 ? 0 : t + 1
                        }),
                        wa = e => fa({
                            type: 0,
                            clues: [],
                            confirmed: false,
                            checked: false,
                            penciled: false,
                            revealed: false,
                            modified: false,
                            guess: ""
                        }, e),
                        Ea = e => {
                            const {
                                text: [t]
                            } = e, n = (e => !(!e.formatted || !ha.test(e.formatted) || (e.formatted = e.formatted.replace(ba, ""), 0)))(t), r = (e => e.formatted ? ga.test(e.plain) ? (e.plain = e.plain.replace(ga, "").trimStart(), e.plain) : e.formatted : e.plain)(t);
                            return fa(fa({
                                list: 0,
                                cells: []
                            }, e), {}, {
                                text: t.formatted || t.plain,
                                unfilledCount: e.cells ? e.cells.length : Infinity,
                                isImageClue: n,
                                alternativeAriaLabelText: r
                            });
                        };
                    function _a(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Oa(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? _a(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _a(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const ka = (e, t) => {
                        return Oa(Oa({}, e), {}, {
                            attributes: (n = e.attributes || [], n.reduce((e, t) => {
                                let {
                                    name: n,
                                    value: r
                                } = t;
                                if ("fill" === n) return e;
                                let a = n.startsWith("data") ? n : n.replace(/-([a-z])/, (e, t) => t.toUpperCase());
                                return "class" === n && (a = "className"), Oa(Oa({}, e), {}, {
                                    [a]: r || null
                                });
                            }, {})),
                            children: e.children ? e.children.map(ka) : [],
                            index: t
                        });
                        var n;
                    };
                    var Pa = e => {
                            const {
                                height: t,
                                width: n
                            } = e;
                            return {
                                rowCount: t,
                                columnCount: n,
                                aspectRatio: n / t,
                                cellSize: Math.floor(500 / n)
                            };
                        },
                        Sa = function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
                            const {
                                beforeStart: n,
                                afterSolve: r
                            } = t, a = t => null == t ? "" : (e[t - 1] || {}).uri || "";
                            return {
                                beforeStart: a(n),
                                afterSolve: a(r)
                            };
                        };
                    function xa(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function ja(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? xa(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xa(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    var Ca = (e, t) => {
                        let n, {
                            publicationDate: r,
                            publishStream: a
                        } = t;
                        if ("daily" !== a) return e;
                        switch (me(r, "MMMDDYYYY")) {
                        case "Feb021995":
                            n = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
                            break;
                        case "Nov022004":
                            n = [225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 237, 238, 239];
                            break;
                        case "Oct302014":
                            n = [0, 1, 2, 13, 14, 15, 16, 17, 30, 31, 32, 47, 208, 223, 224, 225, 238, 239, 240, 241, 242, 253, 254, 255];
                            break;
                        case "Jan062015":
                            n = [60, 61, 62, 88, 89, 135, 136, 162, 163, 164];
                            break;
                        case "Feb142018":
                            n = [0, 1, 6, 7, 8, 9, 10, 15, 16, 17, 24, 25, 26, 33, 42, 170, 186, 187, 188, 202, 203, 204, 205, 206, 218, 219, 220, 221, 222, 223, 224, 234, 235, 236, 237, 238, 239, 240, 241, 242, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 282, 283, 284, 285, 286, 287, 288];
                            break;
                        default:
                            return e;
                        }
                        return e.map((e, t) => ja(ja({}, e), {}, {
                            type: n.includes(t) ? 4 : e.type
                        }));
                    };
                    const Ta = ["assets", "body"],
                        Da = ["SVG"];
                    function Na(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function La(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Na(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Na(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    function Ia(e, t) {
                        if (null == e) return {};
                        var n, r, a = function (e, t) {
                            if (null == e) return {};
                            var n, r, a = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                        }
                        return a;
                    }
                    var Aa = (e, t) => {
                        const {
                            assets: n,
                            body: [r]
                        } = e, a = Ia(e, Ta), {
                            SVG: o
                        } = r, i = Ia(r, Da), l = ((e, t) => {
                            return ua(ua({
                                category: 0
                            }, e), {}, {
                                goldStarCutoff: (n = e.publicationDate, (e => "string" == typeof e && da.exec(e))(n) ? se().tz(n, "America/Los_Angeles").endOf("day").format() : se()({
                                    year: 3e3
                                }).format()),
                                notes: e.notes ? e.notes.reduce(pa, []) : e.notes,
                                publishStream: t
                            });
                            var n;
                        })(a, t), s = (e => {
                            const t = e.cells.map(wa).map(va),
                                n = e.clues.map(Ea).map(ya).map(va),
                                r = e.clueLists.map(t => ((e, t) => {
                                    const n = e.clues.map(e => t[e]);
                                    return fa(fa({}, e), {}, {
                                        cells: n.reduce((e, t) => e.concat(t.cells || []), [])
                                    });
                                })(t, e.clues)).map(ya).map(va);
                            return fa(fa({}, e), {}, {
                                clues: n,
                                cells: t,
                                clueLists: r
                            });
                        })(i);
                        return La(La({
                            meta: l
                        }, s), {}, {
                            cells: Ca(s.cells, l),
                            dimensions: Pa(i.dimensions),
                            board: (c = o, ka(c)),
                            overlays: Sa(n, i.overlays)
                        });
                        var c;
                    };
                    const za = ["cells", "clues"];
                    const Ra = (e, t) => (n, r) => {
                        ke(r()) || i.Be.get("".concat(kn, "/v6/puzzle/").concat(e, ".json"), {
                            withStatus: true,
                            headers: {
                                "X-Games-Auth-Bypass": "true"
                            }
                        }).then(e => {
                            if (200 === e.status) {
                                const r = Aa(e, t),
                                    {
                                        cells: a,
                                        clues: o
                                    } = r,
                                    i = function (e, t) {
                                        if (null == e) return {};
                                        var n, r, a = function (e, t) {
                                            if (null == e) return {};
                                            var n, r, a = {},
                                                o = Object.keys(e);
                                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                            return a;
                                        }(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                                        }
                                        return a;
                                    }(r, za);
                                n(((e, t, n) => ({
                                    type: Zn,
                                    payload: {
                                        cells: e,
                                        clues: t,
                                        puzzle: n
                                    }
                                }))(a, o, i)), n((e => ({
                                    type: H,
                                    payload: {
                                        cells: e
                                    }
                                }))(a));
                            } else n(Kn(e.status));
                        }).catch(e => {
                            console.error(e), n(Kn(e.status));
                        });
                    };
                    var Ma = n(28229);
                    let Ga = function (e) {
                            return e.OPEN = "OPEN", e.METERING = "METERING", e.BUCKET_LIMIT = "BUCKET_LIMIT", e.METER_LIMIT = "METER_LIMIT", e.FREE_CLICK = "FREE_CLICK", e.COUNTED = "COUNTED", e.FB_TOP = "FB_TOP", e.UNLOCKED_ARTICLE_CODE = "UNLOCKED_ARTICLE_CODE", e.WHITELISTED = "WHITELISTED", e.SUBSCRIBER = "SUBSCRIBER", e.IP = "IP", e.REFERRER = "REFERRER", e.FREETIME = "FREETIME", e;
                        }({}),
                        Ba = function (e) {
                            return e.WEB = "Games-web", e.ANDROID_NEWS = "Games-Android-NR", e.ANDROID_XWD = "Games-Android", e.IOS_NEWS = "Games-iOS-NR", e.IOS_XWD = "Games-iOS", e;
                        }({});
                    function Ua(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Ha(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ua(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ua(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Wa = {
                            cache: {
                                granted: true,
                                grantReason: Ga.METERING,
                                loggedIn: false,
                                hash: "0",
                                isOffline: true
                            },
                            url: null
                        },
                        Fa = () => {
                            const {
                                newsreaderAppPlatform: e,
                                gamesAppPlatform: t
                            } = window;
                            return e ? "ios" === e ? Ba.IOS_NEWS : Ba.ANDROID_NEWS : t ? "ios" === t ? Ba.IOS_XWD : Ba.ANDROID_XWD : Ba.WEB;
                        },
                        Ya = e => {
                            Wa.cache = Ha({}, e);
                        },
                        qa = {
                            isMeterInDebugMode: false,
                            mockResponse: {
                                loggedIn: true,
                                grantReason: Ga.IP,
                                granted: true,
                                isOffline: true
                            }
                        };
                    function $a(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Va(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? $a(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $a(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Za = e => {
                        let t, n = window.location.href;
                        undefined !== e && ({
                            puzzleUrl: n = window.location.href,
                            level: t
                        } = e);
                        const r = (e => {
                            if (!Wa.url) {
                                const t = new URL(e),
                                    n = "".concat(t.origin + t.pathname),
                                    r = Fa();
                                Wa.url = "".concat(i.OB.meter, "/meter.js?sourceApp=").concat(r, "&url=").concat(n);
                            }
                            return Wa.url;
                        })(n);
                        let a = {};
                        return undefined !== t && (a = Va(Va({}, a), {}, {
                            headers: {
                                "NYT-M-Level": window.btoa(t.toString())
                            }
                        })), qa.isMeterInDebugMode || "1_meter" !== (null === (o = window.abra) || undefined === o || null === (l = o.getVariant) || undefined === l ? undefined : l.call(o, "GAMES_meterIntegration_0228")) ? ((e, t) => ((0, Ma.Z)("Mock request made to Meter service", [e, t], qa.mockResponse), Ya(qa.mockResponse), Promise.resolve(qa.mockResponse)))(n, t) : i.Be.get(r, a).then(e => {
                            (0, Ma.Z)("Meter service request succeeded", [r, n, t], e);
                            const a = Va(Va({}, e), {}, {
                                isOffline: false
                            });
                            return Ya(a), a;
                        }).catch(e => ((0, Ma.Z)("Meter service request failed", [r, n, t], e), (() => {
                            const e = Ha({}, Wa.cache),
                                t = Va(Va({}, e), {}, {
                                    isOffline: true
                                });
                            var n;
                            return !(n = t).granted || n.grantReason !== Ga.IP && n.grantReason !== Ga.SUBSCRIBER && n.grantReason !== Ga.OPEN && n.grantReason !== Ga.REFERRER && n.grantReason !== Ga.FREETIME ? (0, Ma.Z)("Game is instructed not fail open due to previous grantReason", [e.grantReason]) : (0, Ma.Z)("Game is instructed to fail open based on previous grantReason", [e.grantReason]), t;
                        })()));
                        var o, l;
                    };
                    var Xa = n(38918),
                        Ka = n(63448);
                    const Ja = (0, J.P1)(e => e.rollout, e => e.phase);
                    var Qa = function (e) {
                        return e[e.NoStar = 0] = "NoStar", e[e.Blue = 1] = "Blue", e[e.Gold = 2] = "Gold", e;
                    }(Qa || {});
                    const eo = () => {
                            var e;
                            const {
                                stream: t
                            } = null !== (e = window.gameData) && undefined !== e ? e : {};
                            let n;
                            switch (t) {
                            case "daily":
                            case "mini":
                            case "promo":
                            case "bonus":
                                n = "crossword_".concat(t);
                                break;
                            default:
                                n = "crossword_undated";
                            }
                            return n;
                        },
                        to = {
                            game: eo(),
                            selectPuzzleIdOrSettings: e => {
                                const t = De(e);
                                return t ? t.toString() : "";
                            },
                            selectMoogleState: e => e.moogle,
                            shouldSave: (e, t) => {
                                const n = Ja(e);
                                return !(n !== ia.LEGACY_WITH_STATE && n !== ia.STATE_ONLY || t.type !== Et && t.type !== _t && t.type !== bt && t.type !== W || (console.log("[XWD on State] Will save state due to action", t.type, t.payload), 0));
                            },
                            selectPersistedState: e => {
                                const t = {
                                    cells: [],
                                    penciled: [],
                                    checked: [],
                                    revealed: [],
                                    modified: [],
                                    correct: [],
                                    isSolved: Tn(e),
                                    playTimeSeconds: fr(e),
                                    isAutocheckEnabled: Dn(e),
                                    isTimerReset: !!jn(e).firsts.timerReset,
                                    completionFraction: Nn({
                                        cells: we(e),
                                        status: jn(e)
                                    }),
                                    star: 0
                                };
                                we(e).forEach(e => {
                                    const {
                                        index: n,
                                        guess: r,
                                        penciled: a,
                                        checked: o,
                                        revealed: i,
                                        modified: l
                                    } = e;
                                    t.cells.push({
                                        index: n,
                                        guess: r
                                    }), a && t.penciled.push(n), o && t.checked.push(n), i && t.revealed.push(n), l && t.modified.push(n), C(e) && t.correct.push(n);
                                }), Tn(e) && "crossword_daily" === eo() ? In(e) ? t.star = Qa.Gold : t.star = Qa.Blue : t.star = Qa.NoStar;
                                const n = Ja(e);
                                return (n === ia.LEGACY_WITH_STATE || n === ia.STATE_ONLY) && (console.groupCollapsed("[XWD on State] selectPersistedState"), console.log("Persisting state to state service"), console.dir(t), console.groupEnd()), t;
                            },
                            insertProgress: e => (t, n) => {
                                Ja(n()) === ia.LEGACY_WITH_STATE ? (console.groupCollapsed("[XWD on State Phase: LEGACY_WITH_STATE] insertProgress invoked"), console.table(e), console.groupEnd()) : ia.STATE_ONLY;
                            }
                        },
                        no = ((0, Ka.L)(to), (0, Xa.d)(to)),
                        ro = undefined !== window.__REDUX_DEVTOOLS_EXTENSION__;
                    function ao(e) {
                        let {
                            filename: t,
                            stream: n
                        } = e;
                        const r = [(0, u.md)(d.Z, _r, wr, ft, Gn, Ut, un, no)];
                        ro && r.push(window.__REDUX_DEVTOOLS_EXTENSION__());
                        const a = (0, u.MT)(sa, (0, u.qC)(...r));
                        return a.dispatch(Ra(t, n)), a.dispatch((e, t) => {
                            var n;
                            const r = Wt(t()),
                                a = !!window.newsreaderAppPlatform,
                                o = "mini" === (null === (n = window.gameData) || undefined === n ? undefined : n.stream);
                            if (r || a || o) return e(na(0));
                            Za().then(t => {
                                t.isOffline ? e(na(0)) : e({
                                    type: ea,
                                    payload: {
                                        meterResponse: t
                                    }
                                });
                            }).catch(t => {
                                console.error(t), e(na(t.status));
                            });
                        }), a;
                    }
                    var oo = n(64403),
                        io = n.n(oo),
                        lo = n(53789),
                        so = n(14237);
                    const co = e => e.modal,
                        uo = (0, J.P1)(co, e => e.name),
                        po = (0, J.P1)(uo, e => !!e),
                        mo = (0, J.P1)(co, e => e.config || {
                            actionType: "",
                            scope: null,
                            needToWarn: false
                        }),
                        fo = (0, J.P1)(co, e => e.isClosing),
                        bo = (e, t) => {
                            const n = (e => {
                                    switch (e) {
                                    case Gt.Fifty:
                                        return 0.5;
                                    case Gt.SeventyFive:
                                        return 0.75;
                                    default:
                                        return 1;
                                    }
                                })(t),
                                r = e.filter(e => k(e));
                            return r[Math.ceil(r.length * n - 1)].index;
                        },
                        ho = (e, t) => {
                            const {
                                cells: n,
                                selection: r
                            } = e;
                            return n && n.filter((e, n) => {
                                switch (t) {
                                case Gt.Letter:
                                    return r && r.cell === n;
                                case Gt.Word:
                                    return r && r.clueCells.includes(n);
                                case Gt.Puzzle:
                                default:
                                    return true;
                                }
                            });
                        },
                        go = e => {
                            let {
                                cells: t,
                                clues: n,
                                selection: r
                            } = e;
                            return (r ? r.clueCells.map(e => t && t[e]) : []).filter(e => {
                                const t = null == e ? undefined : e.clues.filter(e => e !== (null == r ? undefined : r.clue));
                                return null == t ? undefined : t.some(e => n && n[e].unfilledCount > 0);
                            });
                        },
                        vo = (e, t) => (t === Gt.Unchecked ? go : ho)(e, t),
                        yo = (e, t, n) => {
                            const r = vo(e, n),
                                a = (e => {
                                    switch (e) {
                                    case y:
                                    case q:
                                        return L;
                                    case E:
                                        return D;
                                    case F:
                                    case W:
                                        return k;
                                    default:
                                        return N;
                                    }
                                })(t);
                            return null == r ? undefined : r.filter(a);
                        },
                        wo = (e, t, n, r) => S(e) && !r ? 0 : t !== n ? t ? 1 : -1 : 0,
                        Eo = (e, t, n) => wo(e, !t, P(e), !!n),
                        _o = (e, t, n) => wo(e, !j(e, t), T(e), !!n),
                        Oo = e => (t, n) => {
                            const r = n(),
                                a = Le(r),
                                o = De(r),
                                i = fr(r);
                            o && (0 === i && Rt("click", o, "mini" === a ? "mini-page" : "game-page", "start-game"), t({
                                type: b,
                                payload: {
                                    now: se()().unix(),
                                    user: e
                                }
                            }));
                        },
                        ko = () => (e, t) => {
                            const n = t(),
                                r = we(n),
                                a = _e(n);
                            e({
                                type: m,
                                payload: {
                                    cells: r,
                                    clues: a
                                }
                            });
                        };
                    let Po = function (e) {
                        return e.Start = "Start", e.Pause = "Pause", e.Info = "Info", e.Settings = "Settings", e.Rats = "Rats", e.Congrats = "Congrats", e.Print = "Print", e.Confirmation = "Confirmation", e.Share = "Share", e;
                    }({});
                    const So = e => e.toolbar,
                        xo = (0, J.P1)(So, e => e.inPencilMode),
                        jo = (0, J.P1)(So, e => e.inRebusMode),
                        Co = (0, J.P1)(So, e => e.rebusValue),
                        To = (0, J.P1)(So, e => e.activeMenu),
                        Do = () => (e, t) => {
                            const n = t(),
                                r = Ge(n),
                                a = Ie(n);
                            if (!S(r)) {
                                const t = De(n);
                                Rt("click", t, a ? "mini-page" : "game-page", "rebus"), e((o = (null == r ? undefined : r.guess) || "", {
                                    type: jt,
                                    payload: {
                                        initialValue: o
                                    }
                                }));
                            }
                            var o;
                        },
                        No = e => (t, n) => {
                            const r = n(),
                                a = Co(r);
                            if (e) {
                                const e = function () {
                                    return (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "").toUpperCase().trim();
                                }(a);
                                t(zo(e, true));
                            }
                            t({
                                type: Ct
                            });
                        },
                        Lo = () => (e, t) => {
                            const n = t();
                            e(jo(n) ? No(true) : Do());
                        },
                        Io = [20, 40, 60, 80],
                        Ao = () => (e, t) => {
                            const {
                                status: n
                            } = t(), {
                                incorrectCells: r,
                                blankCells: a,
                                isFilled: o
                            } = n;
                            let i = "";
                            const l = 0 === a,
                                s = 0 === r,
                                c = l && !s,
                                u = !l;
                            s ? (i = Y, e(vt(Po.Congrats))) : c && !o ? (i = Z, e(vt(Po.Rats))) : u && o && (i = X), e((e, t) => {
                                const n = t(),
                                    r = De(n),
                                    a = Cn(n),
                                    o = fr(n),
                                    i = br(n);
                                if (!r) return;
                                const l = Ie(n) ? "mini-page" : "game-page",
                                    s = Ln(n),
                                    c = Math.floor(s / 0.2),
                                    u = ce(o, i);
                                if (c > a) {
                                    for (let e = a; e < c && e < Io.length; e += 1) Rt("complete", r, l, "".concat(Io[e], "%-complete"), "".concat(u));
                                    e({
                                        type: V,
                                        payload: {
                                            currentProgress: c
                                        }
                                    });
                                }
                            }), i && e({
                                type: i,
                                payload: {
                                    now: se()().unix()
                                }
                            });
                        },
                        zo = (e, t) => (n, r) => {
                            const a = r(),
                                {
                                    isSolved: o,
                                    autocheckEnabled: i
                                } = jn(a),
                                l = we(a);
                            if (o) return;
                            const s = Ge(a),
                                {
                                    inPencilMode: c
                                } = a.toolbar;
                            n({
                                type: _,
                                payload: {
                                    blankDelta: s && Eo(s, e),
                                    incorrectDelta: s && _o(s, e),
                                    index: s && s.index,
                                    inPencilMode: c,
                                    autocheckEnabled: i,
                                    value: e,
                                    fromRebus: !!t,
                                    now: se()().unix(),
                                    cells: l
                                }
                            }), n(Ao());
                        },
                        Ro = (e, t) => (n, r) => {
                            const a = r(),
                                o = vo(a, t),
                                i = yo(a, e, t),
                                l = ((e, t) => {
                                    switch (e) {
                                    case F:
                                        return e => e.index >= t ? "" : e.answer;
                                    case E:
                                        return e => e.answer;
                                    default:
                                        return () => "";
                                    }
                                })(e, bo(a.cells, t)),
                                s = e === F,
                                c = we(a),
                                u = {
                                    scope: null != t ? t : undefined,
                                    cellsInScope: o.map(e => e.index),
                                    affectedCells: i.map(e => e.index),
                                    blankDeltas: i.map(e => Eo(e, l(e), s)),
                                    incorrectDeltas: i.map(e => _o(e, l(e), s)),
                                    now: se()().unix(),
                                    cells: c
                                };
                            s && Object.assign(u, {
                                index: bo(a.cells, t)
                            }), n({
                                type: e,
                                payload: u
                            }), e === W && n(ko()), n(Ao());
                        },
                        Mo = function (e) {
                            let t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
                            return (n, r) => {
                                const a = r(),
                                    o = In(a),
                                    {
                                        suppressDisqualificationWarnings: i
                                    } = ee(a),
                                    {
                                        isSolved: l
                                    } = jn(a);
                                if (l) return void(e === W && (n(No(false)), n(Ro(e, t))));
                                const s = t === Gt.Puzzle && e !== y,
                                    c = [y, E, W, q].includes(e) && o && !i;
                                return n(c || s ? vt(Po.Confirmation, {
                                    needToWarn: c,
                                    actionType: e,
                                    scope: t
                                }) : Ro(e, t));
                            };
                        },
                        Go = () => (e, t) => {
                            const n = t(),
                                r = De(n),
                                a = Ie(n) ? "mini-page" : "game-page";
                            Dn(n) ? (e({
                                type: $
                            }), Rt("gameplay", r, a, "auto-check", "turn-off")) : (e(Mo(q)), Rt("gameplay", r, a, "auto-check", "turn-on"));
                        },
                        Bo = e => (t, n) => {
                            const r = n(),
                                a = De(r);
                            if (!a) return;
                            const o = ((e, t) => Un().getItem(Wn(e.regiId, t)))(e, a).catch(() => (hn.debug("error fetching local progress"), null)),
                                i = ((e, t, n) => {
                                    const r = e.isLoggedIn ? ((e, t) => {
                                        const n = "".concat(kn, "/v6/game/").concat(t),
                                            r = "".concat(n, ".json");
                                        return Pn({
                                            method: "GET",
                                            url: r
                                        }, e);
                                    })(e, t).then(e => n(e)) : Promise.resolve(null);
                                    return r;
                                })(e, a, pr).catch(() => (hn.debug("error fetching remote progress"), null));
                            Promise.all([o, i]).then(n => {
                                var r;
                                let [a, o] = n;
                                const i = ((e, t) => {
                                        var n;
                                        return !t || !t.lastCommitID || (null == e || null === (n = e.status) || undefined === n ? undefined : n.lastCommitID) === t.lastCommitID;
                                    })(a, o),
                                    l = i ? a : o,
                                    s = i ? null == a || null === (r = a.status) || undefined === r ? undefined : r.lastCommitID : null == o ? undefined : o.lastCommitID;
                                l && t((e => (t, n) => {
                                    t({
                                        type: p,
                                        payload: e
                                    }), t(ko());
                                })(l)), t(((e, t) => (n, r) => {
                                    n(v(t));
                                    const a = r(),
                                        o = ee(a);
                                    if (lo.tq) return;
                                    const {
                                        status: i
                                    } = a;
                                    o.showTimer && !i.isSolved || n(Oo(e));
                                })(e, s));
                            });
                        },
                        Uo = () => (e, t) => {
                            const {
                                user: n
                            } = t(), {
                                settings: r
                            } = n;
                            return e("toggle" === r.spaceTriggers ? G() : zo(""));
                        },
                        Ho = () => Mo(w, Gt.Letter),
                        Wo = () => (e, t) => {
                            const n = t(),
                                r = yo(n, w, Gt.Letter);
                            0 === (null == r ? undefined : r.length) && e(B("Backspace")), e(Ho());
                        },
                        Fo = () => vt(Po.Pause),
                        Yo = (e, t) => t < 33 || t > 126 && t < 161 ? null : e.length > 1 ? String.fromCharCode(t).toUpperCase() : e.toUpperCase();
                    function qo(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function $o(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? qo(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qo(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Vo = e => e.transient,
                        Zo = (0, J.P1)(Vo, e => e.isReady),
                        Xo = (0, J.P1)(Vo, e => e.doEscape);
                    var Ko = n(73961),
                        Jo = n(22042),
                        Qo = n(38661),
                        ei = n(20090);
                    const ti = (0, J.P1)(e => e.stats, e => e.streaks),
                        ni = (0, J.P1)(ti, e => (null == e ? undefined : e.currentStreak) || 0);
                    var ri = n(69202);
                    const ai = [{
                            id: 14177,
                            anchor: "monday-level-easy"
                        }, {
                            id: 14050,
                            anchor: "fill-in-the-blanks"
                        }, {
                            id: 14041,
                            anchor: "tense"
                        }, {
                            id: 14044,
                            anchor: "tense"
                        }, {
                            id: 14045,
                            anchor: "tense"
                        }, {
                            id: 14042,
                            anchor: "tense"
                        }, {
                            id: 14047,
                            anchor: "partners"
                        }, {
                            id: 14046,
                            anchor: "partners"
                        }, {
                            id: 14043,
                            anchor: "partners"
                        }, {
                            id: 14048,
                            anchor: "question-marks"
                        }, {
                            id: 14049,
                            anchor: "question-marks"
                        }, {
                            id: 14051,
                            anchor: "question-marks"
                        }, {
                            id: 14052,
                            anchor: "question-marks"
                        }, {
                            id: 14053,
                            anchor: "rebus"
                        }],
                        oi = ai.map(e => e.id),
                        ii = e => {
                            const t = ai.find(t => t.id === e);
                            return t ? t.anchor : "";
                        };
                    var li = n(57256),
                        si = n(89064),
                        ci = n(9861);
                    function ui(e) {
                        let {
                            buttons: t,
                            close: n,
                            wrapperClassName: a = ""
                        } = e;
                        return r.createElement("div", {
                            className: io()("xwd__modal--button-container", a)
                        }, t.map(e => {
                            return e.link ? (t = e, r.createElement("a", {
                                key: t.label,
                                href: t.link,
                                onClick: t.clickHandler,
                                className: io()("xwd__modal--button", t.className),
                                tabIndex: 0
                            }, r.createElement("div", {
                                role: "button",
                                "aria-label": t.label
                            }, r.createElement("span", null, t.label)))) : (e => r.createElement("button", {
                                key: e.label,
                                type: "button",
                                onClick: e.clickHandler || n,
                                className: io()("pz-moment__button", e.className),
                                disabled: !!e.disabled,
                                "aria-disabled": !!e.disabled,
                                "aria-label": e.label
                            }, r.createElement("span", null, e.label)))(e);
                            var t;
                        }));
                    }
                    function di(e, t, n) {
                        var r;
                        return (t = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (undefined !== n) {
                                var r = n.call(e, "string");
                                if ("object" != typeof r) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        }(t)) ? r : r + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }) : e[t] = n, e;
                    }
                    class pi extends r.Component {
                        constructor(e) {
                            super(e), di(this, "focusRef", undefined), di(this, "frozenFocus", undefined), di(this, "isOpen", undefined), di(this, "closeWithoutPropagation", e => {
                                const {
                                    close: t
                                } = this.props;
                                e.preventDefault(), e.stopPropagation(), t();
                            }), di(this, "onKeyDown", e => {
                                const {
                                    handleKeyDown: t,
                                    keyConfig: n
                                } = this.props, {
                                    key: r,
                                    ctrlKey: a,
                                    metaKey: o,
                                    target: i
                                } = e;
                                if (t && t(r), a || o) return;
                                const l = null == n ? undefined : n[r];
                                if (l) return l(e, this.focusRef.current);
                                if (["Enter", "NumpadEnter", "Escape"].includes(r)) {
                                    if ("Enter" === r && "A" === (null == i ? undefined : i.nodeName)) return;
                                    return this.closeWithoutPropagation(e);
                                }
                            }), di(this, "componentDidMount", () => {
                                this.focusRef.current && this.focusRef.current.focus({
                                    preventScroll: true
                                });
                            }), di(this, "componentWillUnmount", () => {
                                this.frozenFocus instanceof HTMLElement && this.frozenFocus.focus({
                                    preventScroll: true
                                });
                            }), di(this, "handleBackgroundClick", e => {
                                const {
                                    close: t,
                                    ignoreBackgroundClick: n
                                } = this.props;
                                n || e.target === e.currentTarget && t();
                            }), di(this, "handleAnimationEnd", e => {
                                const {
                                    onRemove: t
                                } = this.props;
                                "SlideOut" === e.animationName && (0, Ko.flushSync)(() => t());
                            }), di(this, "trapFocus", () => {
                                var e;
                                const t = null === (e = this.focusRef) || undefined === e ? undefined : e.current;
                                if (this.isOpen && t) {
                                    const e = t.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)');
                                    if (!e) return;
                                    const n = e[0],
                                        r = e[e.length - 1],
                                        a = e => {
                                            "Tab" === e.key && (e.shiftKey && document.activeElement === n ? (e.preventDefault(), r.focus()) : e.shiftKey || document.activeElement !== r || (e.preventDefault(), n.focus()));
                                        };
                                    return t.addEventListener("keydown", a), () => {
                                        t.removeEventListener("keydown", a);
                                    };
                                }
                            }), this.focusRef = r.createRef(), this.frozenFocus = document.activeElement, this.isOpen = true;
                        }
                        render() {
                            const {
                                buttons: e,
                                children: t,
                                hideCloseX: n,
                                bodyClassName: a,
                                footer: o,
                                buttonsWrapperClassName: i,
                                showHeader: l,
                                closeLabel: s,
                                isClosing: c,
                                noAnimateOpen: u,
                                containerClassName: d,
                                overlayClassName: p,
                                dataTestId: m
                            } = this.props, f = r.createElement("div", {
                                role: "button",
                                "aria-label": s || "close",
                                className: "xwd__modal--close",
                                onClick: this.closeWithoutPropagation,
                                tabIndex: 0,
                                onKeyDown: this.onKeyDown,
                                "data-testid": "modal-close"
                            }, s, r.createElement(ci.Z, {
                                icon: "close"
                            }));
                            return r.createElement("div", {
                                role: "dialog",
                                "aria-modal": "true",
                                className: io()("modal-system-container", d),
                                "data-testid": null != m ? m : "modal-wrapper",
                                "aria-label": "modal"
                            }, r.createElement("div", {
                                className: "xwd__modal--wrapper"
                            }, r.createElement("div", {
                                id: "modalWrapper-overlay",
                                onClick: e => this.handleBackgroundClick(e),
                                className: io()("xwd__modal--overlay", p, {
                                    showHeader: l
                                })
                            }), r.createElement("div", {
                                className: io()("xwd__modal--body", a, {
                                    "animate-opening": !u,
                                    closing: c
                                }),
                                onAnimationEnd: this.handleAnimationEnd,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.trapFocus,
                                ref: this.focusRef,
                                tabIndex: 0
                            }, !n && f, r.createElement("article", {
                                className: "xwd__modal--content"
                            }, t, e && r.createElement(ui, {
                                buttons: e,
                                close: this.closeWithoutPropagation,
                                wrapperClassName: i
                            }), o))));
                        }
                    }
                    var mi = pi,
                        fi = e => {
                            let {
                                isMini: t,
                                isGold: n
                            } = e;
                            const a = !(window.isHybridWebView || window.gamesAppPlatform || window.newsreaderAppPlatform),
                                o = t && a,
                                i = !t && n ? "gold" : "blue",
                                l = "xwd__".concat(o ? "mini" : "puzzle", "-progress--").concat(i, "-star"),
                                s = o ? "mini__puzzle-icon" : "xwd__puzzle-icon";
                            return r.createElement("div", {
                                "data-star": n,
                                "data-testid": "puzzle-icon",
                                className: io()(s, l)
                            });
                        },
                        bi = n(2652),
                        hi = n.n(bi);
                    n(40245);
                    hi().shape({
                        context: hi().string,
                        elementName: hi().string.isRequired,
                        moduleLabel: hi().string.isRequired
                    }), hi().func, hi().string.isRequired, hi().func, hi().string, hi().oneOf(["connections", "connections-progress-0", "connections-progress-1", "connections-progress-2", "connections-progress-3", "connections-progress-won", "connections-progress-loss", "letter-boxed", "spelling-bee", "spelling-bee-birthday", "spelling-bee-gold-star", "spelling-bee-loved", "spelling-bee-ny-2024", "spelling-bee-ny-2025", "spelling-bee-ny-2026", "spelling-bee-ny-2027", "spelling-bee-ny-2028", "spelling-bee-ny-2029", "spelling-bee-ny-2030", "spelling-bee-queen", "spelling-bee-smarty", "spelling-bee-spooky", "spelling-bee-valentines", "strands", "sudoku", "tiles", "vertex"]), hi().oneOf(["small", "medium", "large"]);
                    const gi = e => {
                        let {
                            text: t,
                            size: n = "large",
                            font: a = "karnak",
                            level: o = "1"
                        } = e;
                        const i = "h".concat(o),
                            l = io()("pz-moment__title", n, a);
                        return r.createElement(i, {
                            className: l
                        }, t);
                    };
                    gi.propTypes = {
                        text: hi().string,
                        size: hi().oneOf(["extra-small", "small", "medium", "med-large", "large"]),
                        level: hi().oneOf(["1", "2", "3", "4"]),
                        font: hi().oneOf(["karnak", "franklin"])
                    };
                    const vi = e => {
                        let {
                            text: t,
                            variant: n = "default",
                            font: a = "karnak",
                            level: o = "1"
                        } = e;
                        const i = "h".concat(o),
                            l = io()("pz-moment__description", n, a);
                        return r.createElement(i, {
                            className: l,
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        });
                    };
                    vi.propTypes = {
                        text: hi().string,
                        variant: hi().oneOf(["default", "small", "extra-small"]),
                        font: hi().oneOf(["karnak", "franklin"]),
                        level: hi().oneOf(["1", "2", "3", "4"])
                    }, hi().oneOfType([hi().string, hi().node]), hi().node, hi().node;
                    hi().oneOf(["primary", "secondary", "transparent", "constant"]), hi().oneOf(["default", "wide", "disabled", "extra-wide", "extra-extra-wide", "link"]), hi().oneOf(["none", "locked", "checked"]), hi().bool, hi().func, hi().string, hi().string, hi().arrayOf(hi().string), hi().bool, hi().string, hi().arrayOf(hi().shape({
                        text: hi().string,
                        action: hi().func
                    })), hi().oneOfType([hi().node, hi().string]), hi().oneOf(["default", "vertical"]), hi().string, hi().string, hi().oneOf(Object.keys({
                        $black: "#000",
                        $white: "#fff",
                        $blue1: "#083aaa",
                        $blue2: "#2860d8",
                        $blue3: "#4f85e5",
                        $blue35: "#5aa0d5",
                        $blue4: "#a7d8ff",
                        $blue5: "#dcefff",
                        $blue7: "#477aaa",
                        $blue8: "#346eb7",
                        $purple1: "#5960ec",
                        "$error-red": "#ce2424",
                        $gray1: "#333",
                        $gray2: "#959595",
                        $gray3: "#ccc",
                        $gray4: "#dcdcdc",
                        $gray5: "#e6e6e6",
                        $gray6: "#f4f4f4",
                        $gray7: "#fafafa",
                        $gray8: "#c4c4c4",
                        $gray9: "#c2c2c2",
                        $gray10: "#d9d9d9",
                        $gray11: "#eee",
                        $newsGray10: "#dfdfdf",
                        $newsGray25: "#c7c7c7",
                        $newsGray50: "#8b8b8b",
                        $newsGray60: "#727272",
                        $newsGray85: "#363636",
                        $newsGray100: "#121212",
                        $blueGray1: "#787886",
                        $gold1: "#c4a200",
                        $gold2: "#e2c32f",
                        $yellow1: "#ffda00",
                        $green1: "#6dc3a1",
                        $statsPink: "#f93aa7",
                        $statsYellow: "#ffc600",
                        "$spelling-bee-yellow": "#f8cd05",
                        "$letter-boxed-pink": "#faa6a4",
                        "$vertex-tan": "#f7f5f6",
                        $bannerBlue: "#4d88f9",
                        "$daily-crossword-blue": "#6493e6",
                        "$mini-crossword-blue": "#95befa",
                        "$spelling-bee-gold": "#f7da21",
                        "$tiles-green": "#b5e352",
                        "$letter-boxed-red": "#FC716B",
                        "$vertex-turquoise": "#00a2b3",
                        "$sudoku-orange": "#fb9b00",
                        "$connections-periwinkle": "#B3A7FE",
                        "$strands-seafoam": "#C0DDD9",
                        "$zorse-green": "#CCE6AE",
                        "bg-moment": "var(--bg-moment)",
                        "sb-yellow": "var(--sb-yellow)"
                    })), hi().oneOfType([hi().arrayOf(hi().node), hi().element, hi().func]), hi().string;
                    var yi = n(22865),
                        wi = n.n(yi);
                    const Ei = (e, t) => {
                            if (!e || !t) return e;
                            const n = -1 === e.indexOf("?") ? "?" : "&";
                            return encodeURIComponent("".concat(e).concat(n, "smid=").concat(t));
                        },
                        _i = (e, t) => {
                            const n = "d=".concat(e, "&t=").concat(t),
                                r = wi()(n);
                            return {
                                shareUrl: "".concat("/badges/games/mini.html", "?").concat(n, "&c=").concat(r),
                                shareImageSrc: "".concat("/badges/games/mini.png", "?").concat(n, "&c=").concat(r)
                            };
                        },
                        Oi = encodeURIComponent("https://www.facebook.com/");
                    function ki(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Pi(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ki(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ki(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Si = {
                            iconClass: "NextGameButton-module_miniIcon__lVJRi",
                            cardEmphasisClass: "NextGameButton-module_miniArchiveCardEmphasis__YCk6O",
                            ctaText: "Play More in the Mini Archive",
                            trackingData: {
                                nameLabel: "archive",
                                labelContext: ""
                            }
                        },
                        xi = {
                            iconClass: "NextGameButton-module_connectionsArchiveIcon__B_cmJ",
                            cardEmphasisClass: "NextGameButton-module_connectionsArchiveCardEmphasis__MoyVp",
                            cardContainerClass: "NextGameButton-module_connectionsArchiveContainer__RkumQ",
                            ctaText: "Keep playing puzzles in the archive",
                            trackingData: {
                                nameLabel: "archive",
                                labelContext: ""
                            }
                        },
                        ji = {
                            "spelling-bee": {
                                iconClass: "NextGameButton-module_spellingBeeIcon__SZM9f",
                                cardEmphasisClass: "NextGameButton-module_spellingBeeCardEmphasis__WuupU",
                                ctaText: "Play Today’s Spelling Bee",
                                trackingData: {
                                    nameLabel: "next-game",
                                    labelContext: "spelling-bee"
                                }
                            },
                            "mini-archive": Si,
                            "archive-sb": Pi(Pi({}, Si), {}, {
                                cardContainerClass: "NextGameButton-module_archiveSBContainer__TjAQg"
                            }),
                            "connections-archive": xi,
                            "connections-archive-today": Pi(Pi({}, xi), {}, {
                                ctaText: "Explore the Connections archive"
                            })
                        };
                    var Ci = e => {
                            let {
                                nextGame: t,
                                url: n,
                                puzzleId: a,
                                fromGame: o,
                                hasNewLabel: i,
                                trackNextGameClick: l
                            } = e;
                            const {
                                ctaText: s,
                                cardEmphasisClass: c,
                                iconClass: u,
                                cardContainerClass: d,
                                trackingData: p
                            } = ji[t], {
                                nameLabel: m,
                                labelContext: f
                            } = p;
                            return (0, r.useEffect)(() => {
                                Mt(m, o, f);
                            }, []), r.createElement("div", {
                                className: io()("NextGameButton-module_nextGameCardContainer__VBiBH", d)
                            }, r.createElement("div", {
                                className: io()("NextGameButton-module_nextGameBase__Mxnf9")
                            }, r.createElement("a", {
                                href: n,
                                className: io()("NextGameButton-module_nextGameCardEmphasis__qW1dK", c),
                                onClick: () => {
                                    l ? l() : "mini-archive" === t ? Rt("congrats", a, o, m, "", true) : Rt("", f, o, m, "", true);
                                }
                            }, r.createElement("span", {
                                className: io()("NextGameButton-module_promoIcon__I9zlb", u)
                            }), r.createElement("div", {
                                className: io()("NextGameButton-module_nextGameCardText___XxRE")
                            }, r.createElement("span", {
                                className: io()("NextGameButton-module_nextGameCardDescription__WCuhF")
                            }, s), i && r.createElement("span", {
                                className: io()("NextGameButton-module_newLabel__ldHp7")
                            }, "NEW")), r.createElement("span", {
                                className: io()("NextGameButton-module_nextGameArrow__VYzXN")
                            }))));
                        },
                        Ti = n(80692);
                    const Di = "/subscription/games";
                    var Ni = n(86128),
                        Li = e => {
                            let {
                                message: t,
                                subscribeLinkContext: n,
                                subscribeButtonTxt: a,
                                eventLabel: o,
                                clickLabel: i
                            } = e;
                            const l = {
                                    spellingBee: () => {
                                        Rt("click", "", o, "spelling-bee"), window.location.href = "/puzzles/spelling-bee";
                                    },
                                    tiles: () => {
                                        Rt("click", "", o, "tiles"), window.location.href = "/puzzles/tiles";
                                    },
                                    hub: () => {
                                        window.location.href = Ti.t.hub;
                                    }
                                },
                                s = function (e) {
                                    let t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : window;
                                    if (!t || !t.navigationLinks || !t.navigationLinks.subscribe) return Di;
                                    const n = t.navigationLinks.subscribe;
                                    return e && n[e] ? n[e] : n.default || Di;
                                }(n, window);
                            return r.createElement("div", {
                                className: "xwd__promotional-content--subscriptionUpsell"
                            }, r.createElement("div", {
                                className: "xwd__promotional-content--minimodalMessage"
                            }, t), r.createElement("a", {
                                href: s,
                                onClick: e => {
                                    var t;
                                    const n = (null === (t = e.currentTarget) || undefined === t ? undefined : t.getAttribute("href")) || "",
                                        r = (0, Ni.I3)(n);
                                    i ? (0, l[i])() : n && r ? ((0, Ni.Hu)(n), Rt("click", "", o, "subscribe")) : n && !r && (window.location.href = n);
                                },
                                className: "xwd__promotional-content--link"
                            }, a || "Subscribe To Play"));
                        };
                    const Ii = () => ((0, r.useEffect)(() => {
                        Mt("next-game", "mini-page", "spelling-bee");
                    }, []), r.createElement("a", {
                        href: "/puzzles/spelling-bee",
                        className: "xwd__nextGameSuggestion--spellingBeeCardEmphasis xwd__nextGameSuggestion--spellingBeeBase",
                        onClick: () => {
                            Rt("", "spelling-bee", "mini-page", "next-game", "", true);
                        }
                    }, r.createElement(ci.Z, {
                        icon: "spelling-bee"
                    }), r.createElement("div", null, r.createElement("span", {
                        className: "xwd__nextGameSuggestion--gameTitle"
                    }, "Spelling Bee"), r.createElement("span", null, "Tackle ", r.createElement("strong", null, "today's puzzle."))), r.createElement(ci.Z, {
                        icon: "caret-right"
                    })));
                    var Ai = () => r.createElement("div", {
                        className: "xwd__nextGameSuggestion"
                    }, r.createElement("p", {
                        className: "xwd__nextGameSuggestion--text"
                    }, "Game for something new?", r.createElement("br", null), "Make as many words as you can with 7 letters."), r.createElement(Ii, null));
                    function zi(e) {
                        let {
                            appCta: t,
                            isMini: n,
                            hasXwd: a,
                            registeredNonSub: i
                        } = e;
                        const l = n ? "mini-modal" : "game-modal",
                            s = !!window.newsreaderAppPlatform,
                            c = !(window.isHybridWebView || window.gamesAppPlatform || window.newsreaderAppPlatform),
                            u = n && c,
                            d = u ? "mini-congrats-modal" : "daily-congrats-modal",
                            p = s && "Newsreader",
                            m = "".concat(n ? "mini" : "daily", "Congrats").concat(p),
                            f = (0, o.v9)(De),
                            b = !u && !a && !i;
                        return (0, r.useEffect)(() => {
                            a || Mt("softpaywall", d, t);
                        }, [a]), b ? r.createElement(Ai, null) : u ? r.createElement("div", null, r.createElement(Ci, {
                            nextGame: "archive-sb",
                            url: "/crosswords/archive/mini",
                            fromGame: "mini-page",
                            puzzleId: f
                        }), r.createElement(Ci, {
                            nextGame: "spelling-bee",
                            fromGame: "mini-page",
                            url: "/puzzles/spelling-bee"
                        })) : Li(i ? {
                            message: "Have you played our new matching game? It’s mesmerizing.",
                            eventLabel: l,
                            clickLabel: "tiles",
                            subscribeButtonTxt: "Try Tiles >>",
                            subscribeLinkContext: m
                        } : {
                            message: "Want to be a better solver? Up your game with puzzles for every skill level.",
                            eventLabel: l,
                            clickLabel: "hub",
                            subscribeButtonTxt: "More Puzzles",
                            subscribeLinkContext: m
                        });
                    }
                    const Ri = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
                    var Mi = e => Ri[e];
                    function Gi(e) {
                        let {
                            streakLength: t,
                            verticalStreakLength: n = 0,
                            dayIdx: a
                        } = e;
                        const o = t + 1,
                            i = n + 1;
                        let l;
                        var s;
                        return l = (s = o) >= 6 || s >= i ? "YOU HAVE A ".concat(o, "-DAY STREAK") : "".concat(i, " ").concat(Mi(a), "s in a row"), r.createElement("div", {
                            className: "xwd__congrats-modal--streakLength"
                        }, r.createElement("i", {
                            className: "xwd__congrats-modal--starIcon"
                        }), l);
                    }
                    var Bi = n(75593);
                    function Ui(e) {
                        let {
                            appCta: t,
                            HDTest: n
                        } = e;
                        const a = (0, o.v9)(De);
                        return r.createElement("button", {
                            type: "button",
                            onClick: n ? () => {
                                const e = (0, Bi.Q)();
                                window.open(e, "_blank"), Rt("congrats-modal", "game-page", "game-page", "download-app", "GUAC_HD_XWORD_UPSELL_TEST_245", undefined, undefined), localStorage.setItem("app-link-clicked", "true");
                            } : () => {
                                const e = (0, Bi.Q)();
                                window.open(e, "_blank"), Rt("click", "".concat(a), "mini-page", t), localStorage.setItem("app-link-clicked", "true");
                            },
                            className: "xwd__modal--subtle-button"
                        }, "Get the app");
                    }
                    function Hi(e) {
                        let {
                            displayAppLink: t,
                            appCta: n,
                            close: a,
                            dayIdx: i,
                            isMini: l,
                            streamLabel: s,
                            showTimer: c,
                            registeredNonSub: u,
                            hasXwd: d,
                            isGoldStarEligible: p,
                            formattedSolveTime: m,
                            streakLength: f,
                            verticalStreakLength: b = 0,
                            isMobile: h,
                            isNewsreader: g = false,
                            publicationDate: v,
                            solveTime: y,
                            navigateBack: w,
                            isClosing: E,
                            onRemove: _
                        } = e;
                        const O = (0, o.v9)(De),
                            k = !(window.isHybridWebView || window.gamesAppPlatform || window.newsreaderAppPlatform),
                            P = l && k,
                            S = !d || P,
                            x = r.createElement("span", null, "in ", r.createElement("span", {
                                className: "xwd__bold"
                            }, m)),
                            [j, C] = (0, r.useState)(false);
                        (0, r.useEffect)(() => {
                            navigator.canShare && navigator.canShare({
                                title: "NYTimes",
                                text: "Test share",
                                url: ""
                            }) && C(true);
                        }, []);
                        const T = (0, o.I0)(),
                            D = () => {
                                const e = /iPad|iPhone/.test(navigator.userAgent);
                                if (j && e) {
                                    const {
                                        shareUrl: e
                                    } = _i(v, y);
                                    navigator.share({
                                        title: "I solved the daily mini!",
                                        url: "".concat(e, "&smid=na-share")
                                    }).then(() => {
                                        Rt("share-tools", undefined, "native-share", "share");
                                    }).catch(e => console.warn("Sharing Mini time failed", e)), a();
                                } else a(), Rt("congrats", O, "mini-page", "share"), T(vt(Po.Share));
                            },
                            {
                                userType: N
                            } = (0, so.aF)(),
                            [L, I] = (0, r.useState)(false),
                            [A, z] = (0, r.useState)(false),
                            R = (0, si.Z)("hdUpsellTest"),
                            M = (0, si.Z)("hdUpsellTestControl"),
                            {
                                reportExposure: G
                            } = (0, li.Z)();
                        (0, r.useEffect)(() => {
                            G("CONV_GUAC_XWord_HDUpsell_Test_0624"), !R && !M || l || (z(true), Mt("congrats-modal", "", "GUAC_HD_XWORD_UPSELL_TEST_245", "game-page")), R && !l && I(true);
                        }, [R, L, M]);
                        const B = l ? P ? [{
                                label: "Share your results",
                                clickHandler: D
                            }] : [{
                                label: "Share your results",
                                className: "secondary xwd__congrats-modal--shareButton",
                                clickHandler: D
                            }, {
                                label: "View all games",
                                clickHandler: w
                            }] : [{
                                label: "Admire your puzzle",
                                className: "secondary",
                                clickHandler: A ? () => (Rt("congrats-modal", "game-page", "game-page", "admire-puzzle", "GUAC_HD_XWORD_UPSELL_TEST_245", undefined, undefined), a()) : undefined
                            }, {
                                label: "View all games",
                                clickHandler: A ? () => (Rt("congrats-modal", "game-page", "game-page", "view-games", "GUAC_HD_XWORD_UPSELL_TEST_245", undefined, "/crosswords"), w()) : w
                            }],
                            U = s && "mini" === s.toLowerCase() ? r.createElement("div", {
                                className: P ? "xwd__center mini__congrats-modal--message" : "xwd__center xwd__congrats-modal--message"
                            }, "You solved", " ", r.createElement("span", {
                                className: "xwd__bold"
                            }, "The ", s), r.createElement("br", null), " ", c && x, ".") : r.createElement("div", {
                                className: "xwd__center xwd__congrats-modal--message"
                            }, "You solved a ", r.createElement("span", {
                                className: "xwd__bold"
                            }, s), r.createElement("br", null), "Crossword ", c && x, "."),
                            H = r.createElement("div", {
                                className: "xwd__center"
                            }, "You solved the crossword", r.createElement("br", null), c && x, "."),
                            W = r.createElement(r.Fragment, null, t && r.createElement(Ui, {
                                appCta: n,
                                HDTest: A
                            }), S && r.createElement(zi, {
                                isMini: l,
                                appCta: n,
                                registeredNonSub: u,
                                hasXwd: d
                            })),
                            F = l || !d || h && !g,
                            Y = "ios" === window.newsreaderAppPlatform;
                        return r.createElement(mi, {
                            bodyClassName: P ? "xwd__congrats-modal mini__congrats-modal" : "xwd__congrats-modal",
                            close: a,
                            buttons: h ? B.reverse() : B,
                            buttonsWrapperClassName: P ? "mini__congrats-modal--buttons-wrapper" : "xwd__congrats-modal--buttons-wrapper",
                            closeLabel: l ? "Back to puzzle" : undefined,
                            footer: F && W,
                            isClosing: E,
                            onRemove: _,
                            containerClassName: Y ? "container-with-inset" : ""
                        }, r.createElement("div", {
                            className: P ? "mini__congrats-modal--content" : "xwd__congrats-modal--content"
                        }, r.createElement(fi, {
                            isMini: l,
                            isGold: p
                        }), r.createElement(gi, {
                            size: "large",
                            text: "Congratulations!"
                        }), s ? U : H, p && (f > 0 || b > 0) && r.createElement(Gi, {
                            streakLength: f,
                            verticalStreakLength: b,
                            dayIdx: i || 0
                        })), L && r.createElement("div", {
                            className: "xwd__congrats-modal--homeDelivery_container"
                        }, r.createElement("hr", {
                            className: "xwd__congrats-modal--homeDelivery_divider"
                        }), r.createElement("a", {
                            href: "/subscription/home-delivery?source=crossword-complete",
                            onClick: () => {
                                Rt("congrats-modal", "game-page", "goto-subscribe", "Solve in pencil, too. - Enjoy the Crossword in print.", "GUAC_HD_XWORD_UPSELL_TEST_245", undefined, "/subscription/home-delivery?source=crossword-complete");
                            }
                        }, r.createElement("div", {
                            className: "xwd__congrats-modal--homeDelivery_testButton"
                        }, r.createElement("i", {
                            className: "xwd__congrats-modal--homeDelivery_newspaper_icon"
                        }), r.createElement("p", {
                            className: "xwd__congrats-modal--homeDelivery_main"
                        }, "Solve in pencil, too.", r.createElement("br", null), r.createElement("span", {
                            className: "xwd__congrats-modal--homeDelivery_sub"
                        }, "Enjoy the Crossword in print.")), r.createElement("i", {
                            className: "xwd__congrats-modal--homeDelivery_caret_icon"
                        })))));
                    }
                    function Wi(e) {
                        let {
                            displayAppLink: t,
                            appCta: n,
                            close: a,
                            showTimer: o,
                            puzzleId: i,
                            puzzleTitle: l,
                            formattedSolveTime: s,
                            isClosing: c,
                            onRemove: u
                        } = e;
                        const d = r.createElement("span", null, "in ", r.createElement("span", {
                                className: "xwd__bold"
                            }, s)),
                            p = "ios" === window.newsreaderAppPlatform;
                        return r.createElement(mi, {
                            buttons: [{
                                label: "Back to the guide",
                                link: "/guides/crosswords/how-to-solve-a-crossword-puzzle#".concat(ii(i))
                            }],
                            close: a,
                            footer: t && r.createElement(Ui, {
                                appCta: n
                            }),
                            isClosing: c,
                            onRemove: u,
                            containerClassName: p ? "container-with-inset" : ""
                        }, r.createElement("div", {
                            className: "xwd__congrats-modal--content"
                        }, r.createElement("div", {
                            className: "xwd__illustration"
                        }), r.createElement(gi, {
                            size: "large",
                            text: "Super Solving"
                        }), r.createElement("div", {
                            className: "xwd__center"
                        }, "You solved the", " ", r.createElement("span", {
                            className: "xwd__bold"
                        }, l), " Mini", " ", o && d, ".")));
                    }
                    class Fi extends r.Component {
                        constructor(e) {
                            super(e), this.state = {
                                dayIdx: null,
                                appLinkClicked: false
                            };
                        }
                        componentDidMount() {
                            const {
                                meta: e,
                                solveTime: t,
                                soundOn: n
                            } = this.props, r = "true" === localStorage.getItem("app-link-clicked"), a = (new Date).getDay(), o = "mini" === (null == e ? undefined : e.publishStream) ? "mini-page" : "game-page", i = document.getElementById("strut");
                            this.setState({
                                dayIdx: a,
                                appLinkClicked: r
                            }), n && i instanceof HTMLAudioElement && (null == i || i.play()), Rt("complete", null == e ? undefined : e.id, o, "100%-complete", "".concat(t)), "mini" === (null == e ? undefined : e.publishStream) && Mt("congrats-modal", "mini-page", this.shouldDisplayAppLink() ? "download-app" : undefined);
                        }
                        shouldDisplayAppLink() {
                            const {
                                user: {
                                    userType: {
                                        hasXwd: e
                                    }
                                }
                            } = this.props, {
                                appLinkClicked: t
                            } = this.state, n = !!window.newsreaderAppPlatform;
                            return lo.tq && e && !t && !n;
                        }
                        render() {
                            const {
                                close: e,
                                solveTime: t,
                                showTimer: n,
                                isGoldStarEligible: a,
                                user: {
                                    userType: o
                                },
                                meta: l,
                                streakLength: s,
                                streaks: c,
                                isClosing: u,
                                onRemove: d
                            } = this.props, {
                                dayIdx: p
                            } = this.state, m = i.abra.getVariant("GAMES_BackToPlayTab_1222"), f = !(window.isHybridWebView || window.gamesAppPlatform || window.newsreaderAppPlatform);
                            if (!l) return null;
                            const {
                                publicationDate: b,
                                publishStream: h,
                                title: g,
                                id: v
                            } = l, {
                                hasXwd: y,
                                isLoggedIn: w
                            } = o, E = ((e, t) => ["daily", "mini", "bonus"].includes(t) ? "daily" === t ? me(e, "dddd") : be(t) : "")(b, h), _ = (e => {
                                return e < 60 ? "".concat(t = e, 1 === t ? " second" : " seconds") : ue(e);
                                var t;
                            })(t), O = "mini" === h, k = oi.includes(v), P = !!window.newsreaderAppPlatform, S = w && !y, x = (!O || !f) && this.shouldDisplayAppLink(), j = lo.tq && !P ? "congrats-download-app" : "", C = r.createElement(Hi, {
                                displayAppLink: x,
                                appCta: j,
                                close: e,
                                dayIdx: p,
                                isMini: O,
                                streamLabel: E,
                                showTimer: n,
                                formattedSolveTime: _,
                                solveTime: t,
                                publicationDate: b,
                                registeredNonSub: S,
                                hasXwd: y,
                                isMobile: lo.tq,
                                isNewsreader: P,
                                isGoldStarEligible: a,
                                streakLength: s,
                                verticalStreakLength: (() => {
                                    const e = (null == c ? undefined : c.verticalStreaks) || [];
                                    if (e.length && p) return e[p].length || 0;
                                })(),
                                navigateBack: () => (0, ri.n)(m),
                                isClosing: u,
                                onRemove: d
                            });
                            return k ? r.createElement(Wi, {
                                displayAppLink: x,
                                appCta: j,
                                close: e,
                                showTimer: n,
                                puzzleId: v,
                                puzzleTitle: g || "",
                                formattedSolveTime: _,
                                isClosing: u,
                                onRemove: d
                            }) : C;
                        }
                    }
                    var Yi = (0, u.qC)(so.ns, (0, o.$j)(e => {
                        const t = ee(e),
                            n = Se(e),
                            {
                                showTimer: r,
                                soundOn: a
                            } = t,
                            o = In(e);
                        return {
                            solveTime: hr(e),
                            showTimer: r,
                            soundOn: a,
                            isGoldStarEligible: o,
                            meta: n,
                            streakLength: ni(e),
                            streaks: ti(e)
                        };
                    }))(Fi);
                    const qi = (0, r.createContext)({
                            isErsatzShortz: false,
                            inShortzMode: false,
                            setShortzMode: () => {}
                        }),
                        $i = e => {
                            let {
                                children: t
                            } = e;
                            const {
                                userType: {
                                    inShortzMode: n
                                }
                            } = (0, so.aF)(), [a, o] = (0, r.useState)(false);
                            (0, r.useEffect)(() => {
                                n && Un().getItem("shortz-toggle").then(e => {
                                    o(!!e);
                                });
                            }, [n]);
                            const i = (0, r.useCallback)(e => {
                                    o(e), (e => {
                                        Un().setItem("shortz-toggle", e).catch(e => {
                                            console.error("error setting shortz toggle state", e);
                                        });
                                    })(e);
                                }, [o]),
                                l = (0, r.useMemo)(() => ({
                                    isErsatzShortz: n,
                                    inShortzMode: n && a,
                                    setShortzMode: i
                                }), [n, a, i]);
                            return r.createElement(qi.Provider, {
                                value: l
                            }, t);
                        },
                        Vi = () => (0, r.useContext)(qi),
                        Zi = () => {
                            var e;
                            const t = null === (e = window.location) || undefined === e ? undefined : e.pathname;
                            return /tips-and-tricks/.test(t) ? "Tips & Tricks" : /special/.test(t) ? "Special Puzzle" : undefined;
                        },
                        Xi = function (e) {
                            let t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "";
                            return e ? e.replace(/ and /gi, " & ") : "daily" === t ? "The Crossword" : "The ".concat(be(t), " Crossword");
                        },
                        Ki = function (e) {
                            if ("bonus" === (arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "")) return me(e, "MMMM YYYY");
                            const t = me(e, "dddd"),
                                n = me(e, "MMMM D, YYYY");
                            return "".concat(t, ", ").concat(n);
                        };
                    function Ji(e) {
                        let {
                            constructors: t,
                            editor: n = "",
                            publicationDate: a,
                            title: i,
                            id: l
                        } = e;
                        const {
                            inShortzMode: s
                        } = Vi(), c = (0, o.v9)(Le), u = Xi(i, c), d = ge(t), p = Zi(), m = s && r.createElement(r.Fragment, null, r.createElement("a", {
                            className: "xwd__details--link",
                            href: "https://admin.games.prd.nyt.net/console/xwd/edit/".concat(l),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Edit #".concat(l)), " | ", r.createElement("a", {
                            className: "xwd__details--link",
                            href: "/svc/crosswords/v6/puzzle/".concat(l, ".json"),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "View JSON"));
                        return r.createElement("div", {
                            className: "xwd__details--container"
                        }, p ? r.createElement("div", {
                            className: "xwd__details--date"
                        }, p) : r.createElement(r.Fragment, null, r.createElement("div", {
                            className: "xwd__details--title"
                        }, u), r.createElement("div", {
                            className: "xwd__details--date"
                        }, Ki(a, c))), m, r.createElement("div", {
                            className: "xwd__details--byline"
                        }, d && r.createElement("span", null, "".concat(ve(i), " ").concat(d)), n && r.createElement("span", null, "".concat(ye(i), " ").concat(n))));
                    }
                    function Qi(e) {
                        const {
                            meta: {
                                constructors: t,
                                editor: n,
                                publishStream: a,
                                publicationDate: o,
                                title: i
                            },
                            isInfo: l = false
                        } = e, s = ge(t);
                        return r.createElement(r.Fragment, null, r.createElement("div", {
                            className: "xwd__start-modal--date"
                        }, Ki(o, a)), r.createElement("div", {
                            className: io()("xwd__details--byline", {
                                "xwd__details--byline-info": l
                            })
                        }, s && r.createElement("span", null, "".concat(ve(i), " ").concat(s)), n && r.createElement("span", null, "".concat(ye(i), " ").concat(n))));
                    }
                    var el = n(18540),
                        tl = n(85203),
                        nl = n(3254);
                    const rl = () => "undefined" != typeof window && (() => {
                            var e, t, n, r;
                            const a = /Tablet|iPad|GT-P|SM-T|Xoom|SC-|LG-V|Nexus 7|Nexus 10|KFAPWI|KFTHWI|KFOT|KFTBWI|SGP/i.test(null === (e = navigator) || undefined === e ? undefined : e.userAgent),
                                o = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (t = navigator) || undefined === t ? undefined : t.userAgent);
                            return !(null === (n = window) || undefined === n || null === (r = n.matchMedia) || undefined === r || null === (r = r.call(n, "(max-width: 640px)")) || undefined === r || !r.matches) && o && !a;
                        })() && !!window.isMobileDevice && !window.gamesAppPlatform && !window.newsreaderAppPlatform,
                        al = (e, t) => {
                            const n = "DFP_MiniSkip",
                                r = e(n);
                            return r && t(n), "1_Variant" === r;
                        },
                        ol = (e, t) => {
                            const n = e(nl.w);
                            return n && t(nl.w), n === nl.$;
                        };
                    var il = n(43972),
                        ll = e => {
                            let {
                                bodyClassName: t,
                                containerClassName: n,
                                close: a,
                                isClosing: o,
                                onRemove: i,
                                enableCountdown: l,
                                enableFadeIn: s
                            } = e;
                            const c = (0, r.useCallback)(() => {
                                a();
                            }, []);
                            return r.createElement(mi, {
                                noAnimateOpen: true,
                                ignoreBackgroundClick: true,
                                showHeader: true,
                                bodyClassName: t,
                                close: a,
                                isClosing: o,
                                onRemove: i,
                                containerClassName: io()("xwd__ad-modal-container", n)
                            }, r.createElement(il.Z, {
                                enableCountdown: l,
                                isSpecialAdUnit: true,
                                id: "intsl",
                                position: "intsl",
                                onClose: c,
                                ctaCopy: "Continue to The Mini Crossword",
                                skipButtonClassName: io()("xwd__ad-interstitial-skip-button"),
                                className: io()("xwd__ad-interstitial-container"),
                                delaySkip: s
                            }));
                        };
                    const sl = "CONV_GUAC_GAMES_MINI_WELCOME_SUBSCRIBE_CTA";
                    function cl(e) {
                        let {
                            notes: t
                        } = e;
                        const [n, a] = r.useState(false), o = r.createElement("p", {
                            key: "revealer",
                            className: "xwd__notes--revealer"
                        }, r.createElement("button", {
                            type: "button",
                            onClick: e => {
                                a(true), e.preventDefault();
                            }
                        }, "Reveal Answer"));
                        return t && t.length ? r.createElement("aside", {
                            className: "xwd__notes--wrapper"
                        }, r.createElement("h3", {
                            className: "xwd__notes--title"
                        }, "Note"), r.createElement("div", {
                            className: io()({
                                "xwd__notes--content-container": !lo.tq
                            })
                        }, t.map(e => {
                            const t = io()("xwd__notes--content", {
                                    "xwd__notes--spoiler": e.spoiler,
                                    "xwd__notes--spoiled": e.spoiler && n
                                }),
                                a = r.createElement("div", {
                                    key: e.text,
                                    className: t
                                }, e.spoiler && r.createElement("div", null, "ANSWER"), r.createElement("p", {
                                    id: "note-text",
                                    dangerouslySetInnerHTML: {
                                        __html: e.text
                                    }
                                }));
                            return e.spoiler && !n ? o : a;
                        }))) : null;
                    }
                    const ul = ["So close.", "Almost there.", "The end’s in sight.", "Nearly.", "Just about.", "Not far-off.", "Close, but not quite."],
                        dl = ["Confound it.", "Grrrr...", "Gee whiz!", "Fiddlesticks.", "Oh, crumbs!", "Horsefeathers.", "Aw, shucks!"];
                    function pl() {
                        return pl = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, pl.apply(this, arguments);
                    }
                    const ml = e => {
                        let {
                            type: t,
                            id: n,
                            name: a,
                            value: o,
                            label: i,
                            checked: l,
                            disabled: s,
                            onChange: c,
                            tabIndex: u = 0,
                            showSubText: d = false,
                            subText: p,
                            subTextClass: m
                        } = e;
                        const f = c ? {
                            defaultChecked: l,
                            onChange: c
                        } : {
                            checked: l,
                            readOnly: true
                        };
                        return r.createElement("label", {
                            htmlFor: n
                        }, r.createElement("input", pl({
                            type: t,
                            id: n,
                            name: a,
                            value: o,
                            disabled: s,
                            tabIndex: u
                        }, f)), r.createElement("span", null, i), d && r.createElement("div", {
                            className: m
                        }, p));
                    };
                    function fl() {
                        return fl = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, fl.apply(this, arguments);
                    }
                    const bl = e => r.createElement(ml, fl({}, e, {
                        type: "radio"
                    }));
                    function hl(e) {
                        let {
                            heading: t,
                            children: n
                        } = e;
                        return r.createElement("section", {
                            className: "xwd__settings-modal--section"
                        }, r.createElement("header", {
                            className: "xwd__settings-modal--heading"
                        }, t), n);
                    }
                    function gl(e) {
                        let {
                            onSwitch: t,
                            spaceTriggers: n
                        } = e;
                        return r.createElement(hl, {
                            heading: "After changing direction with arrow keys"
                        }, r.createElement("div", {
                            className: "xwd__settings-modal--inset"
                        }, r.createElement(bl, {
                            id: "switchStay",
                            name: "onSwitch",
                            value: "stay",
                            label: "Stay in the same square",
                            checked: "stay" === t
                        }), r.createElement(bl, {
                            id: "switchMove",
                            name: "onSwitch",
                            value: "move",
                            label: "Move in the direction of the arrow",
                            checked: "move" === t
                        })), r.createElement("header", {
                            className: "xwd__settings-modal--heading"
                        }, "Pressing the spacebar should"), r.createElement("div", {
                            className: "xwd__settings-modal--inset"
                        }, r.createElement(bl, {
                            id: "triggerClear",
                            name: "spaceTriggers",
                            value: "clear",
                            label: "Clear the current square and advance",
                            checked: "clear" === n
                        }), r.createElement(bl, {
                            id: "triggerToggle",
                            name: "spaceTriggers",
                            value: "toggle",
                            label: "Toggle between Across and Down",
                            checked: "toggle" === n
                        })));
                    }
                    function vl() {
                        return vl = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, vl.apply(this, arguments);
                    }
                    const yl = e => r.createElement(ml, vl({}, e, {
                        type: "checkbox"
                    }));
                    function wl(e) {
                        let {
                            backspaceAcrossWords: t
                        } = e;
                        return r.createElement(hl, {
                            heading: "At the start of a word"
                        }, r.createElement("div", {
                            className: "xwd__settings-modal--inset"
                        }, r.createElement(yl, {
                            name: "backspaceAcrossWords",
                            label: "Backspace into previous word",
                            checked: t
                        })));
                    }
                    function El(e) {
                        let {
                            subSettingsHandler: t,
                            skipFilled: n,
                            skipPenciled: a
                        } = e;
                        return r.useEffect(() => {
                            n || t("skipPenciled", false);
                        }, [n]), r.createElement(hl, {
                            heading: "Within a word"
                        }, r.createElement("div", {
                            className: "xwd__settings-modal--inset"
                        }, r.createElement(yl, {
                            name: "skipFilled",
                            label: "Skip over filled squares",
                            checked: n,
                            id: "skipFilled"
                        }), r.createElement("div", {
                            className: "xwd__settings-modal--indented"
                        }, r.createElement(yl, {
                            name: "skipPenciled",
                            label: "Even penciled-in squares",
                            disabled: !n,
                            checked: a,
                            id: "skipPenciled"
                        }))));
                    }
                    function _l(e) {
                        let {
                            jumpBack: t,
                            autoAdvance: n
                        } = e;
                        return r.createElement(hl, {
                            heading: "At the end of a word"
                        }, r.createElement("div", {
                            className: "xwd__settings-modal--inset"
                        }, r.createElement(yl, {
                            name: "jumpBack",
                            label: "Jump back to first blank in the word",
                            checked: t
                        }), r.createElement(yl, {
                            name: "autoAdvance",
                            label: "Jump to next clue (if not jumping back)",
                            checked: n
                        })));
                    }
                    function Ol(e) {
                        let {
                            soundOn: t,
                            showTimer: n,
                            suppressDq: a,
                            showMilestones: o
                        } = e;
                        return r.createElement(hl, {
                            heading: "Interactions"
                        }, r.createElement("div", {
                            className: "xwd__settings-modal--inset"
                        }, r.createElement(yl, {
                            name: "soundOn",
                            label: "Play sound on solve",
                            checked: t
                        }), r.createElement(yl, {
                            name: "showTimer",
                            label: "Show timer",
                            checked: n
                        }), r.createElement(yl, {
                            checked: a,
                            name: "suppressDisqualificationWarnings",
                            label: "Suppress disqualification warnings"
                        }), undefined !== o && r.createElement(yl, {
                            checked: o,
                            name: "showMilestones",
                            label: "Show puzzle milestones"
                        })));
                    }
                    function kl(e) {
                        let {
                            forceGoldStarEligibility: t,
                            speedUpSyncInterval: n,
                            suppressAutocheckNotice: a
                        } = e;
                        return r.createElement(hl, {
                            heading: "Debug Settings"
                        }, r.createElement("div", {
                            className: "xwd__settings-modal--inset"
                        }, r.createElement(yl, {
                            name: "forceGoldStarEligibility",
                            label: "Force Gold Star eligibility",
                            checked: t
                        }), r.createElement(yl, {
                            name: "speedUpSyncInterval",
                            label: "Speed up sync interval (5m->5s)",
                            checked: n
                        }), r.createElement(yl, {
                            name: "suppressAutocheckNotice",
                            label: "Autocheck notice already seen",
                            checked: a
                        })));
                    }
                    const Pl = e => "".concat("https://static01.nytimes.com/games/web/imgs/mobile/packs/pack_icons_").concat(e ? "shortz_favorites_2.png" : "themeless_puzzles_2.png");
                    function Sl() {
                        const {
                            inShortzMode: e,
                            isErsatzShortz: t,
                            setShortzMode: n
                        } = Vi();
                        return t ? r.createElement("span", {
                            role: "button",
                            className: "xwd__shortz-toggle",
                            title: (a = e, a ? "Exit Shortz Mode :(" : "Enter Shortz Mode!"),
                            onClick: () => n(!e)
                        }, r.createElement("img", {
                            src: Pl(e),
                            alt: "Shortz Mode"
                        })) : null;
                        var a;
                    }
                    const xl = "You can reveal or check a part of this puzzle, but this will exclude this puzzle from a streak.";
                    const jl = e => e.printOptions,
                        Cl = (0, J.P1)(Se, e => e && !e.category),
                        Tl = ((0, J.P1)(jl, e => e.version), e => e.printOptions.version),
                        Dl = (0, J.P1)(Se, e => {
                            if (!e) return false;
                            const {
                                category: t,
                                publicationDate: n
                            } = e, r = se()(n).tz("America/New_York").add({
                                days: 4,
                                hours: 22
                            }).format(), a = se()().tz("America/New_York").isSameOrAfter(r);
                            return 8 !== t || a;
                        }),
                        Nl = (0, J.P1)(Se, e => {
                            if (!e) return false;
                            const {
                                category: t,
                                publicationDate: n
                            } = e;
                            if (0 !== t) return false;
                            let r;
                            return "daily" === e.publishStream && (r = "2011-04-01", se()(n).isSameOrAfter("2011-04-01"));
                        }),
                        Ll = (0, J.P1)(Cl, Tl, (e, t) => !e || "newspaper" === t),
                        Il = (0, J.P1)(Cl, Tl, (e, t) => !e || "newspaper" === t),
                        Al = (0, J.P1)(Se, Tl, (e, t) => {
                            if (!e) return "";
                            const n = "solution" === t ? ".ans.pdf" : ".pdf";
                            return "".concat("/svc/crosswords/v2/puzzle/" + e.id + n);
                        }),
                        zl = (0, J.P1)(Se, e => {
                            if (!e) return "";
                            const t = se()(e.publicationDate).format("MMMM"),
                                n = se()(e.publicationDate).format("YYYY"),
                                r = se()(e.publicationDate).format("D");
                            return "".concat(t, " ").concat(r, ", ").concat(n);
                        }),
                        Rl = (0, J.P1)(Se, Tl, (e, t) => {
                            if (!e) return "";
                            const n = e.publishStream,
                                r = se()(e.publicationDate).format("MMMDDYY");
                            return "daily" !== n ? "" : "".concat("/svc/crosswords/v2/puzzle/print/" + r + ("solution" === t ? ".ans.pdf" : ".pdf"));
                        }),
                        Ml = (0, J.P1)(te, Il, (e, t) => {
                            const {
                                opacity: n,
                                layout: r
                            } = e, a = {};
                            return !t && n < 100 && (a.block_opacity = n), "southpaw" === r ? a.southpaw = true : "large_print" === r && (a.large_print = true), Object.keys(a).length > 0 ? "?".concat((o = a, Object.entries(o).map(e => e.join("=")).join("&"))) : "";
                            var o;
                        }),
                        Gl = (0, J.P1)(jl, Cl, Al, Rl, Ml, (e, t, n, r, a) => {
                            const o = t ? n : r;
                            switch (e.version) {
                            case "puzzle":
                            case "solution":
                                return "".concat(o).concat(a);
                            case "newspaper":
                                return "".concat(r).concat(a);
                            default:
                                return "".concat(n).concat(a);
                            }
                        });
                    var Bl = n(64572),
                        Ul = n.n(Bl);
                    const Hl = [".", ",", "?", "!", "'", "backspace", "next"],
                        Wl = ["rebus", "pencil", "switch"],
                        Fl = [
                            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                            ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                            ["prev", "secondary", "Z", "X", "C", "V", "B", "N", "M", "backspace", "next"], Wl
                        ],
                        Yl = [
                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                            ["-", "/", ":", ";", "(", ")", "$", "&", "@", '"'],
                            ["prev", "tertiary", ...Hl], Wl
                        ],
                        ql = [
                            ["[", "]", "{", "}", "#", "%", "^", "*", "+", "="],
                            ["_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•"],
                            ["prev", "primary", ...Hl], Wl
                        ],
                        $l = {
                            primary: Fl.map(e => e.join(" ")),
                            secondary: Yl.map(e => e.join(" ")),
                            tertiary: ql.map(e => e.join(" "))
                        },
                        Vl = ["backspace", "rebus", "pencil", "primary", "secondary", "tertiary", "prev", "next", "switch"],
                        Zl = ["backspace", "pencil", "prev", "next", "switch"],
                        Xl = ["prev", "next", "switch"],
                        Kl = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>\n<path d="M10 1L2 11L10 21" stroke="black" stroke-width="1.75" stroke-linecap="round"/>\n</svg>',
                        Jl = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>\n<path d="M1 1L9 11L1 21" stroke="black" stroke-width="1.75" stroke-linecap="round"/>\n</svg>',
                        Ql = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.66272 24.7502L4.36502 23.7288L3.34364 22.7074L2.32227 21.686L1.30089 23.3883L1.42005 24.631L2.66272 24.7502Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1127 0.995451C19.805 0.303159 20.9274 0.303157 21.6197 0.995451L25.0553 4.43099C25.7476 5.12328 25.7476 6.24571 25.0553 6.93801L8.72481 23.2685C8.5302 23.4631 8.29297 23.6097 8.03188 23.6967L2.87857 25.4145C1.49273 25.8764 0.174284 24.558 0.63623 23.1721L2.354 18.0188C2.44103 17.7577 2.58765 17.5205 2.78225 17.3259L19.1127 0.995451ZM20.784 1.83112C20.5533 1.60036 20.1791 1.60036 19.9484 1.83112L3.61792 18.1616C3.55306 18.2264 3.50418 18.3055 3.47517 18.3926L1.7574 23.5459C1.60342 24.0078 2.0429 24.4473 2.50485 24.2933L7.65816 22.5755C7.74519 22.5465 7.82427 22.4977 7.88913 22.4328L24.2196 6.10233C24.4504 5.87157 24.4504 5.49743 24.2196 5.26666L20.784 1.83112Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3874 9.76995L16.2805 4.66306L17.1162 3.82739L22.2231 8.93427L21.3874 9.76995Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.11008 23.0478L3.0032 17.9409L3.83887 17.1052L8.94575 22.2121L8.11008 23.0478Z" fill="black"/>\n</svg>',
                        es = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.526 1.19563C16.9165 0.805108 17.5497 0.805108 17.9402 1.19563L20.8472 4.10263C21.2378 4.49315 21.2377 5.12632 20.8472 5.51684L7.02915 19.3349C6.91937 19.4447 6.78555 19.5274 6.63827 19.5765L2.27778 21.03C1.49602 21.2906 0.75228 20.5468 1.01287 19.7651L2.46636 15.4046C2.51546 15.2573 2.59817 15.1235 2.70794 15.0137L16.526 1.19563Z" stroke="white"/>\n<line x1="2.89454" y1="14.8271" x2="7.21575" y2="19.1483" stroke="white"/>\n<path d="M13.5434 4.8859L17.1575 8.5L7.21563 18.4417L3.60153 14.8276L13.5434 4.8859Z" fill="white"/>\n<path d="M16.8795 1.54952C17.0748 1.35426 17.3913 1.35426 17.5866 1.54952L20.4936 4.45652C20.6889 4.65178 20.6889 4.96836 20.4936 5.16362L18.6576 6.99976L15.0435 3.38565L16.8795 1.54952Z" fill="white"/>\n<path d="M2.35426 14.6604C2.1896 14.8251 2.06554 15.0258 1.9919 15.2467L0.5384 19.6072C0.147522 20.7798 1.26313 21.8955 2.43577 21.5046L6.79626 20.0511C7.01718 19.9774 7.21792 19.8534 7.38258 19.6887L6.46671 19.1068L3.65799 20.0431L1.9999 18.385L2.93614 15.5763L2.35426 14.6604Z" fill="white"/>\n</svg>\n',
                        ts = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="7" height="7" rx="0.5" fill="black"/>\n<mask id="path-2-inside-1_1778_10736" fill="white">\n<rect y="9.5" width="7" height="7" rx="0.5"/>\n</mask>\n<rect y="9.5" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-2-inside-1_1778_10736)"/>\n<mask id="path-3-inside-2_1778_10736" fill="white">\n<rect y="19" width="7" height="7" rx="0.5"/>\n</mask>\n<rect y="19" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-3-inside-2_1778_10736)"/>\n<rect x="9.5" width="7" height="7" rx="0.5" fill="black"/>\n<rect x="19" width="7" height="7" rx="0.5" fill="black"/>\n</svg>',
                        ns = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="7" height="7" rx="0.5" fill="black"/>\n<rect y="9.5" width="7" height="7" rx="0.5" fill="black"/>\n<rect y="19" width="7" height="7" rx="0.5" fill="black"/>\n<mask id="path-4-inside-1_1778_10696" fill="white">\n<rect x="9.5" width="7" height="7" rx="0.5"/>\n</mask>\n<rect x="9.5" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-4-inside-1_1778_10696)"/>\n<mask id="path-5-inside-2_1778_10696" fill="white">\n<rect x="19" width="7" height="7" rx="0.5"/>\n</mask>\n<rect x="19" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-5-inside-2_1778_10696)"/>\n</svg>',
                        rs = '<svg width="28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10.2892 1.58579C10.6643 1.21071 11.173 1 11.7034 1H25.125C26.2296 1 27.125 1.89543 27.125 3V19C27.125 20.1046 26.2296 21 25.125 21H11.7034C11.173 21 10.6643 20.7893 10.2892 20.4142L1.58211 11.7071C1.19158 11.3166 1.19158 10.6834 1.58211 10.2929L10.2892 1.58579Z" stroke="black" stroke-width="1.25"/>\n<line x1="13.0089" y1="7.25" x2="20.9638" y2="15.205" stroke="black" stroke-width="1.25" stroke-linecap="round"/>\n<line x1="0.625" y1="-0.625" x2="11.875" y2="-0.625" transform="matrix(-0.707107 0.707107 0.707107 0.707107 22.2141 7.25)" stroke="black" stroke-width="1.25" stroke-linecap="round"/>\n</svg>\n';
                    function as() {
                        const [e, t] = r.useState("primary"), n = (0, o.v9)(jo), a = (0, o.v9)(xo), i = (0, o.v9)(Co), l = "".concat(n && "rebus", " ").concat(a && "pencil"), s = (0, o.v9)(Be), c = (0, o.I0)(), u = e => {
                            n && c(No(true)), c(B(e));
                        }, d = {
                            backspace: rs,
                            primary: "ABC",
                            secondary: "123",
                            tertiary: "#+=",
                            rebus: "Rebus",
                            pencil: a ? es : Ql,
                            prev: Kl,
                            next: Jl,
                            switch: "Across" === (null == s ? undefined : s.direction) ? ts : ns
                        };
                        return r.createElement(Ul(), {
                            baseClass: "xwd__keyboard",
                            layout: $l,
                            layoutName: e,
                            display: d,
                            buttonTheme: [{
                                class: "icon",
                                buttons: Zl.join(" ")
                            }, {
                                class: "custom",
                                buttons: Vl.join(" ")
                            }, {
                                class: "selected",
                                buttons: l
                            }, {
                                class: "tablet-only",
                                buttons: Xl.join(" ")
                            }],
                            preventDefault: true,
                            preventMouseDownDefault: true,
                            stopMouseDownPropagation: true,
                            onKeyPress: e => "primary" === e ? t("primary") : "secondary" === e ? t("secondary") : "tertiary" === e ? t("tertiary") : "backspace" === e ? c(n && i ? It(i.slice(0, -1)) : Wo()) : "rebus" === e ? c(Lo()) : "pencil" === e ? c(Nt()) : "prev" === e ? u("PreviousClue") : "next" === e ? u("NextClue") : "switch" === e ? c(G()) : "right" === e ? u("Right") : "left" === e ? u("Left") : void c(n ? It(i + e) : zo(e)),
                            disableButtonHold: true,
                            autoUseTouchEvents: true
                        });
                    }
                    function os(e, t, n) {
                        var r;
                        return (t = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (undefined !== n) {
                                var r = n.call(e, "string");
                                if ("object" != typeof r) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        }(t)) ? r : r + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }) : e[t] = n, e;
                    }
                    class is extends r.PureComponent {
                        constructor() {
                            super(...arguments), os(this, "interval", undefined), os(this, "pauseTimeout", undefined), os(this, "tick", undefined), os(this, "componentDidMount", () => {
                                const {
                                    pauseFailsafe: e
                                } = this.props;
                                window.addEventListener("visibilitychange", () => {
                                    document.hidden || "hidden" === document.visibilityState ? this.handleBlur() : this.handleFocus();
                                }), window.addEventListener("pagehide", () => {
                                    e();
                                }), window.addEventListener("blur", this.handleBlur), window.addEventListener("focus", this.handleFocus);
                            }), os(this, "componentDidUpdate", () => {
                                const {
                                    shouldBePaused: e
                                } = this.props;
                                e !== this.isPaused() && (e ? this.stopTicking() : this.startTicking());
                            }), os(this, "isPaused", () => !this.interval), os(this, "startTicking", () => {
                                const {
                                    clickHandler: e,
                                    start: t
                                } = this.props;
                                this.tick = Date.now(), this.interval = window.setInterval(() => {
                                    this.tick && Date.now() - this.tick > 1e4 ? e() : this.forceUpdate(), this.tick = Date.now();
                                }, 1e3), t();
                            }), os(this, "stopTicking", () => {
                                const {
                                    stop: e
                                } = this.props;
                                this.isPaused() || (this.interval && (this.interval = window.clearInterval(this.interval)), e());
                            }), os(this, "handleFocus", () => {
                                this.pauseTimeout && (window.clearTimeout(this.pauseTimeout), delete this.pauseTimeout);
                            }), os(this, "handleBlur", () => {
                                const {
                                    clickHandler: e,
                                    timerIsVisible: t
                                } = this.props;
                                t && !this.isPaused() && (lo.tq && document.hidden && e(), this.pauseTimeout || (this.pauseTimeout = window.setTimeout(e, 3e4)));
                            });
                        }
                        render() {
                            const {
                                clickHandler: e,
                                totalElapsedTime: t,
                                shouldBePaused: n,
                                sessionStartTimestamp: a,
                                timerIsVisible: o
                            } = this.props, i = ue(ce(t, a)), l = "Timer ".concat(n ? "Play" : "Pause", " Button"), s = r.createElement("button", {
                                type: "button",
                                onClick: () => !this.isPaused() && e(),
                                "aria-label": l
                            }, r.createElement("div", {
                                className: "timer-count"
                            }, i), !this.isPaused() && r.createElement(ci.Z, {
                                icon: "pause"
                            }));
                            return r.createElement("li", {
                                className: "xwd__tool--button xwd__timer--button"
                            }, o && s);
                        }
                    }
                    var ls = (0, o.$j)(e => {
                        const {
                            transient: t,
                            status: n,
                            timer: r
                        } = e, {
                            isReady: a
                        } = t, {
                            showTimer: o
                        } = ee(e), {
                            isSolved: i
                        } = n, {
                            totalElapsedTime: l,
                            sessionStartTimestamp: s
                        } = r, c = po(e);
                        return {
                            shouldBePaused: !a || c || i,
                            totalElapsedTime: l,
                            sessionStartTimestamp: s,
                            timerIsVisible: o
                        };
                    }, e => ({
                        start: () => e(Pt()),
                        stop: () => e(kt(_t, arguments.length > 0 && undefined !== arguments[0] && arguments[0])),
                        pauseFailsafe: () => e(kt(_t, arguments.length > 0 && undefined !== arguments[0] && arguments[0]))
                    }))(is);
                    function ss(e) {
                        let {
                            children: t,
                            isHidden: n
                        } = e;
                        const a = (0, r.useRef)(document.getElementById(i.Mk)),
                            o = (0, r.useRef)(document.getElementById("portal-game-toolbar")),
                            l = r.useRef(document.getElementById(i.xD));
                        r.useEffect(() => {
                            var e, t;
                            lo.tq && (n ? null === (e = l.current) || undefined === e || e.classList.remove(i.ec) : null === (t = l.current) || undefined === t || t.classList.add(i.ec));
                        }, [n]);
                        const s = lo.tq ? a.current : o.current;
                        return s ? (0, Ko.createPortal)(t, s) : r.createElement(r.Fragment, null, t);
                    }
                    function cs(e) {
                        const {
                            clickHandler: t,
                            icon: n,
                            ariaLabel: a,
                            label: o,
                            active: i,
                            open: l,
                            isAutocheckOn: s,
                            children: c
                        } = e, u = io()("xwd__tool--button", {
                            "xwd__tool--texty": !n,
                            "xwd__tool--active": i,
                            "xwd__tool--open": l,
                            "xwd__tool--autocheck": s
                        });
                        return r.createElement("li", {
                            className: u
                        }, r.createElement("button", {
                            type: "button",
                            "aria-label": a || o,
                            onClick: e => {
                                e.stopPropagation(), t(e);
                            }
                        }, !o && r.createElement("i", {
                            className: n,
                            "data-testid": "tool-icon"
                        }), o), c);
                    }
                    function us(e) {
                        const {
                            itemHandler: t,
                            items: n,
                            isAutocheckOn: a
                        } = e, [o, i] = (0, r.useState)(false), {
                            inShortzMode: l
                        } = Vi();
                        return r.createElement("ul", {
                            className: "xwd__menu--container",
                            "data-testid": "help-menu"
                        }, n.map(e => {
                            if (e.shortzOnly && !l) return null;
                            const n = !e.secondary,
                                s = o !== n,
                                c = a && e.disabledDuringAutocheck,
                                u = a && "Autocheck" === e.label;
                            return r.createElement("li", {
                                className: io()("xwd__menu--item", {
                                    "xwd__menu--item-disabled": c,
                                    "xwd__menu--item-checked": u,
                                    "xwd__menu--item-display": s,
                                    "xwd__menu--item-hide": !s
                                }),
                                key: e.label,
                                title: e.title
                            }, r.createElement("button", {
                                type: "button",
                                className: "xwd__menu--btnlink",
                                onClick: n => {
                                    ! function (e, t, n) {
                                        const {
                                            action: r,
                                            scope: a
                                        } = t;
                                        r ? n(r, a) : (i(!o), e.stopPropagation()), e.preventDefault();
                                    }(n, e, t);
                                }
                            }, e.label));
                        }));
                    }
                    function ds(e) {
                        const {
                            autoCheckEnabled: t,
                            activeMenu: n,
                            execute: a,
                            toggleMenuAction: o,
                            menuData: i
                        } = e;
                        return r.createElement("div", {
                            className: "xwd__toolbar--expandedMenu"
                        }, i.map(e => {
                            let {
                                label: i
                            } = e;
                            const {
                                items: l
                            } = e, s = i.toUpperCase(), c = "check" === i && t;
                            return i = c ? "autocheck" : i, r.createElement(cs, {
                                open: n === s,
                                label: i,
                                clickHandler: () => o("MENU", e.label.toUpperCase()),
                                isAutocheckOn: c,
                                key: i
                            }, r.createElement(us, {
                                items: l,
                                itemHandler: a,
                                isAutocheckOn: c
                            }));
                        }));
                    }
                    const ps = [{
                            label: "clear",
                            items: [{
                                action: w,
                                scope: Gt.Unchecked,
                                label: "Incomplete",
                                title: "Won’t clear letters that are part of completed crossing words"
                            }, {
                                action: w,
                                scope: Gt.Word,
                                label: "Word"
                            }, {
                                action: w,
                                scope: Gt.Puzzle,
                                label: "Puzzle"
                            }, {
                                action: W,
                                scope: Gt.Puzzle,
                                label: "Puzzle & Timer"
                            }]
                        }, {
                            label: "reveal",
                            items: [{
                                action: E,
                                scope: Gt.Letter,
                                label: "Square"
                            }, {
                                action: E,
                                scope: Gt.Word,
                                label: "Word"
                            }, {
                                action: E,
                                scope: Gt.Puzzle,
                                label: "Puzzle"
                            }, {
                                action: F,
                                scope: Gt.Fifty,
                                label: "49.9%",
                                shortzOnly: true
                            }, {
                                action: F,
                                scope: Gt.SeventyFive,
                                label: "74.9%",
                                shortzOnly: true
                            }, {
                                action: F,
                                label: "99.9%",
                                shortzOnly: true
                            }]
                        }, {
                            label: "check",
                            items: [{
                                action: Go,
                                label: "Autocheck"
                            }, {
                                action: y,
                                scope: Gt.Letter,
                                label: "Square",
                                disabledDuringAutocheck: true
                            }, {
                                action: y,
                                scope: Gt.Word,
                                label: "Word",
                                disabledDuringAutocheck: true
                            }, {
                                action: y,
                                scope: Gt.Puzzle,
                                label: "Puzzle",
                                disabledDuringAutocheck: true
                            }]
                        }],
                        ms = [{
                            action: Go,
                            label: "Autocheck"
                        }, {
                            action: y,
                            scope: Gt.Letter,
                            label: "Check Square",
                            disabledDuringAutocheck: true
                        }, {
                            action: y,
                            scope: Gt.Word,
                            label: "Check Word",
                            disabledDuringAutocheck: true
                        }, {
                            action: y,
                            scope: Gt.Puzzle,
                            label: "Check Puzzle",
                            disabledDuringAutocheck: true
                        }, {
                            action: F,
                            scope: Gt.Fifty,
                            label: "49.9%",
                            shortzOnly: true
                        }, {
                            action: F,
                            scope: Gt.SeventyFive,
                            label: "74.9%",
                            shortzOnly: true
                        }, {
                            action: F,
                            label: "99.9%",
                            shortzOnly: true
                        }, {
                            label: "More 〉"
                        }, {
                            action: w,
                            scope: Gt.Unchecked,
                            label: "Clear Incomplete",
                            secondary: true
                        }, {
                            action: w,
                            scope: Gt.Word,
                            label: "Clear Word",
                            secondary: true
                        }, {
                            action: W,
                            scope: Gt.Puzzle,
                            label: "Reset Puzzle",
                            secondary: true
                        }, {
                            action: E,
                            scope: Gt.Letter,
                            label: "Reveal Square",
                            secondary: true
                        }, {
                            action: E,
                            scope: Gt.Word,
                            label: "Reveal Word",
                            secondary: true
                        }, {
                            action: E,
                            scope: Gt.Puzzle,
                            label: "Reveal Puzzle",
                            secondary: true
                        }, {
                            label: "〈 Back",
                            secondary: true
                        }];
                    function fs() {
                        const {
                            inRebusMode: e,
                            activeMenu: t,
                            inPencilMode: n
                        } = (0, o.v9)(So), {
                            isSolved: a,
                            autocheckEnabled: i
                        } = (0, o.v9)(jn), {
                            notes: l
                        } = (0, o.v9)(Se) || {}, s = (0, o.v9)(Zo), c = !!window.newsreaderAppPlatform, u = lo.tq && !c, [d, p] = (0, r.useState)(false), m = (0, o.I0)(), f = (e, t) => {
                            m("function" == typeof e ? e() : Mo(e, t));
                        }, b = (e, t) => {
                            "PENCIL" === e ? m(Nt()) : "REBUS" === e ? m(Lo()) : t && m(Lt(t));
                        }, h = e => {
                            m(vt(e));
                        }, g = r.createElement("div", {
                            className: io()("xwd__toolbar--wrapper")
                        }, r.createElement("ul", {
                            className: "xwd__toolbar--tools"
                        }, !u && r.createElement("div", null, r.createElement(cs, {
                            clickHandler: () => h(Po.Settings),
                            icon: "xwd__toolbar_icon--settings-gear",
                            ariaLabel: "Puzzle Settings Menu"
                        })), r.createElement(ls, {
                            clickHandler: () => h(Po.Pause)
                        }), !lo.tq && r.createElement(cs, {
                            clickHandler: () => b("REBUS"),
                            label: "Rebus",
                            active: e
                        }), a ? r.createElement("div", {
                            className: io()("xwd__toolbar--mobileResetButton", lo.tq)
                        }, r.createElement(cs, {
                            clickHandler: () => f(W),
                            label: lo.tq ? "" : "Reset",
                            icon: lo.tq ? "xwd__toolbar_icon--reset-puzzle" : "",
                            ariaLabel: "Reset"
                        })) : r.createElement(ds, {
                            autoCheckEnabled: i,
                            activeMenu: t,
                            execute: f,
                            toggleMenuAction: b,
                            menuData: ps
                        }), lo.tq && r.createElement(cs, {
                            clickHandler: () => {
                                l && p(true), h(Po.Info);
                            },
                            icon: io()("xwd__toolbar_icon--info", {
                                "xwd__toolbar_icon--info-animation": l && l.length > 0 && !d
                            }),
                            ariaLabel: "Info"
                        }), !lo.tq && r.createElement(cs, {
                            clickHandler: () => b("PENCIL"),
                            icon: "xwd__toolbar_icon--pencil".concat(n ? "-active" : ""),
                            active: n
                        }), !a && r.createElement("div", {
                            className: "xwd__toolbar--condensedMenu"
                        }, r.createElement(cs, {
                            active: "MOBILE" === t,
                            icon: "xwd__toolbar_icon--cheat-menu".concat("MOBILE" === t || i ? "-active" : ""),
                            clickHandler: () => b("MENU", "MOBILE"),
                            isAutocheckOn: i,
                            ariaLabel: "Cheat Menu"
                        }, r.createElement(us, {
                            items: ms,
                            isAutocheckOn: i,
                            itemHandler: f
                        }))), u && r.createElement("div", null, r.createElement(cs, {
                            clickHandler: () => h(Po.Settings),
                            icon: "xwd__toolbar_icon--settings-gear",
                            ariaLabel: "Puzzle Settings Menu"
                        }))));
                        return r.createElement(ss, {
                            isHidden: !s
                        }, g);
                    }
                    function bs() {
                        return bs = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, bs.apply(this, arguments);
                    }
                    function hs(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function gs(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? hs(Object(n), true).forEach(function (t) {
                                vs(e, t, n[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hs(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    function vs(e, t, n) {
                        var r;
                        return (t = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (undefined !== n) {
                                var r = n.call(e, "string");
                                if ("object" != typeof r) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        }(t)) ? r : r + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }) : e[t] = n, e;
                    }
                    const ys = e => null == e ? undefined : e.text;
                    class ws extends r.PureComponent {
                        constructor(e) {
                            super(e), vs(this, "animate", undefined), vs(this, "canvas", undefined), vs(this, "timer", undefined), this.state = {
                                message: null
                            }, this.canvas = r.createRef(), this.handleMessage = this.handleMessage.bind(this);
                        }
                        componentDidMount() {
                            const {
                                emitter: e
                            } = this.props;
                            this.setupCanvas(), e.on("milestone", this.handleMessage);
                        }
                        componentWillUnmount() {
                            const {
                                emitter: e
                            } = this.props;
                            this.timer && clearTimeout(this.timer), e.off("milestone", this.handleMessage);
                        }
                        handleMessage(e) {
                            const {
                                message: t
                            } = this.state;
                            t || (this.setState({
                                message: e
                            }), this.animate && this.animate(), this.timer = setTimeout(() => {
                                this.timer = null, this.setState({
                                    message: null
                                });
                            }, 1470));
                        }
                        setupCanvas() {
                            this.animate = ((e, t) => {
                                const n = null == e ? undefined : e.getContext("2d");
                                if (n) return n.scale(2, 2), () => {
                                    let e = 0,
                                        t = 15;
                                    n.lineWidth = 4, n.lineCap = "round", n.strokeStyle = "#4F85E5";
                                    const r = (e, t) => {
                                            n.moveTo(e, 0), n.lineTo(e + Math.max(t, 0), 0);
                                        },
                                        a = () => {
                                            if (n.clearRect(0, 0, 70, 70), n.save(), n.translate(35, 35), t -= 1, e += 1.75, t >= -4) {
                                                n.beginPath();
                                                for (let a = 0; a < 8; a += 1) r(e, t), n.rotate(Math.PI / 4);
                                                n.stroke(), n.restore(), requestAnimationFrame(a);
                                            } else n.restore();
                                        };
                                    a();
                                };
                            })(this.canvas.current);
                        }
                        render() {
                            const {
                                boardId: e
                            } = this.props, {
                                message: t
                            } = this.state, n = t && ((e, t) => {
                                var n, r;
                                const a = null === (n = document.getElementById(he(e.idx))) || undefined === n ? undefined : n.getBoundingClientRect(),
                                    o = null === (r = document.getElementById(t)) || undefined === r ? undefined : r.getBoundingClientRect();
                                if (a && o) {
                                    const e = a.left - o.left,
                                        t = a.top - o.top;
                                    return {
                                        left: e + a.width / 2,
                                        top: t + a.height / 2
                                    };
                                }
                            })(t, e);
                            return r.createElement("div", {
                                className: io()("xwd__milestone", {
                                    xwd__show: !!t
                                }),
                                style: gs({}, n),
                                "data-testid": "milestone"
                            }, r.createElement("span", {
                                className: "xwd__pill"
                            }, t && ys && ys(t)), r.createElement("canvas", {
                                "data-testid": "milestone-canvas",
                                className: "xwd__canvas",
                                ref: this.canvas,
                                style: {
                                    width: 70,
                                    height: 70
                                },
                                width: 140,
                                height: 140
                            }));
                        }
                    }
                    var Es = e => r.createElement(pn.Consumer, null, t => r.createElement(ws, bs({
                            emitter: t
                        }, e))),
                        _s = n(41175),
                        Os = n.n(_s);
                    function ks(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Ps(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ks(Object(n), true).forEach(function (t) {
                                Ss(e, t, n[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ks(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    function Ss(e, t, n) {
                        var r;
                        return (t = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (undefined !== n) {
                                var r = n.call(e, "string");
                                if ("object" != typeof r) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        }(t)) ? r : r + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }) : e[t] = n, e;
                    }
                    const xs = (e, t, n) => Math.min(n, Math.max(t, e));
                    class js extends r.Component {
                        constructor(e) {
                            super(e), Ss(this, "wrapperRef", undefined), this.state = {
                                transitionTime: 0,
                                scale: 1,
                                x: 0,
                                y: 0,
                                prevScale: 1,
                                prevX: 0,
                                prevY: 0,
                                startDeltaX: 0,
                                startDeltaY: 0
                            }, this.wrapperRef = r.createRef(), this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this);
                        }
                        componentDidMount() {
                            if (!this.wrapperRef.current) return;
                            const e = new(Os())(this.wrapperRef.current, {
                                preventDefault: true
                            });
                            e.get("pinch").set({
                                enable: true
                            }), e.on("pinchstart panstart", this.handleStart), e.on("pinchmove panmove", this.handleMove), e.on("pinchend pinchcancel panend pancancel", this.handleEnd);
                        }
                        handleStart(e) {
                            this.setState({
                                transitionTime: 0,
                                startDeltaX: e.deltaX,
                                startDeltaY: e.deltaY
                            });
                        }
                        handleMove(e) {
                            this.setState(t => {
                                const {
                                    prevScale: n,
                                    prevX: r,
                                    prevY: a,
                                    startDeltaX: o,
                                    startDeltaY: i
                                } = t, {
                                    scale: l,
                                    deltaX: s,
                                    deltaY: c
                                } = e, u = n * l;
                                return Ps(Ps({}, t), {}, 1 === u && 1 === n ? {
                                    scale: u
                                } : {
                                    scale: u,
                                    x: r + (s - o),
                                    y: a + (c - i)
                                });
                            });
                        }
                        handleEnd() {
                            this.setState(e => {
                                let {
                                    x: t,
                                    y: n,
                                    scale: r
                                } = e;
                                const a = this.wrapperRef.current;
                                if (!a) return null;
                                const o = xs(r, 1, 2),
                                    i = Math.ceil((o - 1) * (a.clientWidth / 2)),
                                    l = Math.ceil((o - 1) * (a.clientHeight / 2)),
                                    s = xs(t, -i, i),
                                    c = xs(n, -l, l);
                                return {
                                    transitionTime: 0.5,
                                    scale: o,
                                    x: s,
                                    y: c,
                                    prevScale: o,
                                    prevX: s,
                                    prevY: c
                                };
                            });
                        }
                        createStyle() {
                            const {
                                scale: e,
                                x: t,
                                y: n,
                                transitionTime: r
                            } = this.state;
                            return {
                                transition: "transform ".concat(r, "s"),
                                transform: "translate(".concat(t, "px, ").concat(n, "px) scale(").concat(e, ")")
                            };
                        }
                        render() {
                            const {
                                children: e,
                                className: t
                            } = this.props;
                            return r.createElement("div", {
                                className: t,
                                ref: this.wrapperRef,
                                style: this.createStyle(),
                                "data-testid": "zoomable"
                            }, e);
                        }
                    }
                    function Cs() {
                        return Cs = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, Cs.apply(this, arguments);
                    }
                    function Ts(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Ds(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ts(Object(n), true).forEach(function (t) {
                                Ns(e, t, n[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ts(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    function Ns(e, t, n) {
                        var r;
                        return (t = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (undefined !== n) {
                                var r = n.call(e, "string");
                                if ("object" != typeof r) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        }(t)) ? r : r + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }) : e[t] = n, e;
                    }
                    class Ls extends r.PureComponent {
                        constructor(e) {
                            super(e), Ns(this, "ref", undefined), Ns(this, "value", undefined), Ns(this, "handleClick", e => {
                                const {
                                    type: t,
                                    clickHandler: n,
                                    openRebus: r
                                } = this.props;
                                null == e || e.persist(), "BLOCK" !== t && "EXTERNAL" !== t && (n(), 1 === (null == e ? undefined : e.button) && r());
                            }), Ns(this, "renderChild", (e, t) => {
                                const {
                                    isSolved: n,
                                    answer: a,
                                    guess: o
                                } = this.props, {
                                    attributes: i,
                                    content: l,
                                    name: s
                                } = e;
                                let c = i.fontSize;
                                const u = n ? a : o,
                                    d = "middle" === i.textAnchor;
                                d && u.length > 1 && (c /= u.length / 2);
                                const p = Ds(Ds({}, i), {}, {
                                    fontSize: c
                                });
                                return this.value = d ? "".concat(u) : "", r.createElement(s, Cs({
                                    key: t
                                }, p, {
                                    "data-testid": "cell-".concat(s)
                                }), r.createElement("text", {
                                    className: "xwd__cell--hidden",
                                    "aria-live": "polite"
                                }, this.value), l || u);
                            }), Ns(this, "renderAssistBadge", () => {
                                const {
                                    isChecked: e,
                                    isRevealed: t,
                                    isModified: n,
                                    isConfirmed: a,
                                    dimensions: o,
                                    index: i
                                } = this.props;
                                if (!e && !t) return null;
                                let l;
                                l = t ? "revealed" : n || a ? "modified" : "checked";
                                const {
                                    cellSize: s,
                                    columnCount: c
                                } = o, u = Math.floor(i / c), d = i % c;
                                return r.createElement("use", {
                                    xlinkHref: "#".concat(l),
                                    className: "xwd__assistance--".concat(l),
                                    x: s * d,
                                    y: s * u,
                                    "data-testid": "assist-badge"
                                });
                            }), this.ref = r.createRef(), this.value = "";
                        }
                        componentDidUpdate() {
                            const {
                                isSelected: e,
                                skipFocus: t
                            } = this.props;
                            e && this.ref.current && !t && document.activeElement !== this.ref.current && this.ref.current.focus();
                        }
                        render() {
                            const {
                                ariaLabel: e,
                                isSelected: t,
                                isInSelectedClue: n,
                                isRelated: a,
                                isPenciled: o,
                                isConfirmed: i,
                                background: l,
                                innards: s,
                                type: c,
                                index: u
                            } = this.props, d = {
                                "xwd__cell--selected": t,
                                "xwd__cell--highlighted": n,
                                "xwd__cell--related": a,
                                "xwd__cell--cell": "BLOCK" !== c,
                                "xwd__cell--block": "BLOCK" === c,
                                "xwd__cell--shaded": "SHADED" === c,
                                "xwd__cell--penciled": o,
                                "xwd__assistance--confirmed": i
                            };
                            return r.createElement("g", {
                                className: "xwd__cell",
                                onClick: this.handleClick,
                                onContextMenu: this.handleClick,
                                "data-testid": "cell-g"
                            }, r.createElement("rect", Cs({
                                role: "cell",
                                tabIndex: t ? 0 : -1,
                                "aria-label": e,
                                ref: this.ref,
                                id: he(u),
                                className: io()(d, "xwd__cell--nested")
                            }, l.attributes)), s.map(this.renderChild), this.renderAssistBadge());
                        }
                    }
                    var Is = Ls;
                    function As() {
                        return As = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, As.apply(this, arguments);
                    }
                    const zs = e => {
                            switch (e) {
                            case 1:
                                return "EMPTY";
                            case 2:
                                return "CIRCLED";
                            case 3:
                                return "SHADED";
                            case 4:
                                return "EXTERNAL";
                            default:
                                return "BLOCK";
                            }
                        },
                        Rs = {
                            Across: "A",
                            Down: "D",
                            Heart: "Heart",
                            Diagonal: "DG"
                        };
                    function Ms(e) {
                        let {
                            attributes: t,
                            cellBoard: n,
                            dimensions: a
                        } = e;
                        const i = (0, o.v9)(po),
                            l = (0, o.v9)(jo),
                            s = (0, o.v9)(Tn),
                            c = (0, o.v9)(we),
                            u = (0, o.v9)(Be),
                            d = (0, o.v9)(Me),
                            p = (0, o.v9)(Ue),
                            m = (0, o.v9)(He),
                            {
                                notes: f
                            } = (0, o.v9)(Se) || {},
                            b = (0, o.I0)(),
                            h = (/iPad|iPhone/.test(navigator.userAgent), r.useCallback(e => {
                                if (!u || !Object.keys(u).length) return f && f.length > 0 ? "No Clue, Notes: ".concat("cells".text, ", Answer: 1 letter, Letter: 1") : "No Clue, Answer: 1 letter, Letter: 1";
                                const {
                                    label: t,
                                    direction: n,
                                    text: r,
                                    alternativeAriaLabelText: a
                                } = u;
                                if (t && n && r) {
                                    const r = p.length,
                                        o = p.indexOf(e);
                                    return "".concat(t).concat(Rs[n] || n, ": ").concat(a, ", ") + "Answer: ".concat(r, " letters, ") + "Letter: ".concat(o + 1);
                                }
                                return "";
                            }, [u, p, f]));
                        return r.createElement("g", As({}, t, {
                            role: "table"
                        }), n.map(e => {
                            let {
                                children: t,
                                index: n
                            } = e;
                            if ("number" != typeof n) return;
                            const [o, ...u] = t, f = c[n], g = n === d;
                            return r.createElement(Is, {
                                key: n,
                                index: n,
                                dimensions: a,
                                background: o,
                                innards: u,
                                isSolved: s,
                                skipFocus: i || l,
                                answer: f.answer || "",
                                guess: f.guess || "",
                                type: zs(f.type),
                                isPenciled: f.penciled,
                                isChecked: f.checked,
                                isConfirmed: f.confirmed,
                                isModified: f.modified,
                                isRevealed: f.revealed,
                                isSelected: g,
                                isInSelectedClue: p.includes(n),
                                isRelated: m.includes(n),
                                ariaLabel: h(n),
                                clickHandler: () => b(((e, t) => t ? {
                                    type: M
                                } : {
                                    type: z,
                                    payload: {
                                        index: e
                                    }
                                })(n, g)),
                                openRebus: () => b(Lo())
                            });
                        }));
                    }
                    function Gs() {
                        return Gs = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, Gs.apply(this, arguments);
                    }
                    function Bs(e) {
                        let {
                            group: t,
                            grid: n,
                            frame: a,
                            dimensions: o,
                            externalCells: i
                        } = e;
                        if (i.some(e => e)) {
                            const e = ((e, t) => {
                                const {
                                    rowCount: n,
                                    columnCount: r,
                                    cellSize: a
                                } = e, o = e => e < r, i = e => e >= r * (n - 1), l = e => e % r == 0, s = e => e % r == r - 1, c = e => e - r, u = e => e + r, d = e => e - 1, p = e => e + 1, m = (e, t, n) => {
                                    return "M".concat((o = e, o % r * a + 3 + t), ",").concat((e => Math.floor(e / r) * a + 3)(e) + n);
                                    var o;
                                }, f = () => "l".concat(a, ",0"), b = () => "l0,".concat(a), h = e => m(e, 0, 0) + f(), g = e => m(e, 0, a) + f(), v = e => m(e, 0, 0) + b(), y = e => m(e, a, 0) + b();
                                return t.reduce((e, n, r) => {
                                    if (n) return e;
                                    const a = t => {
                                            e.lines += t(r);
                                        },
                                        m = t => {
                                            e.frame += t(r);
                                        },
                                        f = (e, n) => e(r) || t[n(r)],
                                        b = f(o, c),
                                        w = f(s, p),
                                        E = f(i, u),
                                        _ = f(l, d);
                                    return b && m(h), _ && m(v), w ? m(y) : a(y), E ? m(g) : a(g), e;
                                }, {
                                    frame: "",
                                    lines: ""
                                });
                            })(o, i);
                            return r.createElement("g", Gs({}, t, {
                                "data-testid": "board-g-group"
                            }), r.createElement("path", Gs({}, n, {
                                d: e.lines
                            })), r.createElement("path", Gs({}, a, {
                                d: e.frame,
                                strokeLinecap: "round"
                            })));
                        }
                        return r.createElement("g", Gs({}, t, {
                            "data-testid": "board-g-group"
                        }), r.createElement("path", n), r.createElement("rect", Gs({}, a, {
                            fill: "none"
                        })));
                    }
                    const Us = ["className"];
                    function Hs() {
                        return Hs = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, Hs.apply(this, arguments);
                    }
                    function Ws(e) {
                        let {
                            assistShapes: t = []
                        } = e;
                        return r.createElement("defs", null, t.map(e => {
                            const {
                                attributes: {
                                    id: t
                                },
                                children: n
                            } = e;
                            return r.createElement("g", {
                                id: "".concat(t),
                                key: t,
                                className: "xwd__assistance--".concat(t),
                                "data-testid": "defs-g"
                            }, n.map(e => {
                                const {
                                    attributes: {
                                        className: t
                                    },
                                    name: n
                                } = e, a = function (e, t) {
                                    if (null == e) return {};
                                    var n, r, a = function (e, t) {
                                        if (null == e) return {};
                                        var n, r, a = {},
                                            o = Object.keys(e);
                                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                        return a;
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                                    }
                                    return a;
                                }(e.attributes, Us);
                                return r.createElement(n, Hs({
                                    key: t
                                }, a, {
                                    className: "xwd__assistance--".concat(t)
                                }));
                            }));
                        }));
                    }
                    function Fs() {
                        return Fs = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, Fs.apply(this, arguments);
                    }
                    const Ys = "xwd-board";
                    var qs = e => {
                        let {
                            isMobile: t
                        } = e;
                        const n = (0, o.v9)(Ee),
                            a = (0, o.v9)(An),
                            i = (0, o.v9)(xe),
                            l = (0, o.v9)(Te),
                            s = (0, o.v9)(Ie);
                        if (!i || !l) return null;
                        const {
                            attributes: c,
                            children: u
                        } = i, [d, p, m] = u, {
                            attributes: f,
                            children: [b, h]
                        } = m;
                        return r.createElement("section", {
                            className: io()("xwd__board", {
                                xwd__mobile: t,
                                xwd__desktop: !t
                            }),
                            "aria-label": "Game Board"
                        }, r.createElement(js, {
                            className: "xwd__board--content"
                        }, r.createElement("svg", Fs({
                            id: Ys,
                            className: "xwd__svg",
                            preserveAspectRatio: "xMidYMin meet",
                            "aria-label": "Puzzle Board for the Crossword"
                        }, c), r.createElement("use", {
                            xlinkHref: "#checked"
                        }), r.createElement(Ws, {
                            assistShapes: d.children
                        }), r.createElement(Ms, {
                            attributes: p.attributes,
                            cellBoard: p.children,
                            dimensions: l
                        }), r.createElement(Bs, {
                            group: f,
                            grid: b.attributes,
                            frame: h.attributes,
                            externalCells: n,
                            dimensions: l
                        }), a && r.createElement("image", {
                            xlinkHref: "".concat(a),
                            width: "100%",
                            height: "100%",
                            className: "xwd__overlay",
                            "data-testid": "overlay"
                        })), !t && !s && r.createElement(Es, {
                            boardId: Ys
                        })));
                    };
                    function $s() {
                        const e = (0, o.v9)(De),
                            t = (0, o.I0)();
                        return r.createElement("button", {
                            type: "button",
                            className: "xwd__printtools--button",
                            onClick: () => {
                                t(vt(Po.Print)), Rt("daily-page", e, "game-page", "print-puzzle");
                            }
                        }, r.createElement(ci.Z, {
                            icon: "print-black"
                        }), r.createElement("span", {
                            className: "xwd__printtools--text"
                        }, "Print"));
                    }
                    const Vs = ["notes", "publishStream"];
                    function Zs() {
                        const e = (0, o.v9)(Se),
                            t = r.useRef(document.getElementById("portal-game-header")),
                            n = (0, o.v9)(Ie),
                            a = !!window.newsreaderAppPlatform,
                            i = !n && !a;
                        if (!t.current || !e) return null;
                        const {
                            notes: l,
                            publishStream: s
                        } = e, c = function (e, t) {
                            if (null == e) return {};
                            var n, r, a = function (e, t) {
                                if (null == e) return {};
                                var n, r, a = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                            }
                            return a;
                        }(e, Vs);
                        return (0, Ko.createPortal)(r.createElement("header", {
                            className: "xwd__header--wrapper"
                        }, r.createElement("div", {
                            className: io()("xwd__header--row", {
                                "xwd__header--fullwidth": n
                            })
                        }, r.createElement("div", {
                            className: "xwd__header--puzzle-details-container"
                        }, r.createElement(Ji, c), l && r.createElement(cl, {
                            notes: l
                        })), i && r.createElement("div", {
                            className: "xwd__header--tools-container"
                        }, r.createElement($s, null)))), t.current);
                    }
                    function Xs(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function Ks(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Xs(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xs(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const Js = e => {
                            const t = e.trim().toUpperCase().replace(" AND ", " and ");
                            return t.startsWith("BY ") ? t.replace("BY ", "By ") : "By ".concat(t);
                        },
                        Qs = e => e.byline ? Ks(Ks({}, e), {}, {
                            byline: Js(e.byline)
                        }) : Ks({}, e);
                    var ec = (e, t) => Pn({
                        method: "GET",
                        url: "".concat(kn, "/v6/editorial-content/puzzle/").concat(e, ".json")
                    }, t).then(e => (e.featuredArticle = Qs(e.featuredArticle), e.secondaryArticles = e.secondaryArticles.map(e => Qs(e)), e));
                    function tc(e) {
                        let {
                            children: t
                        } = e;
                        const n = (0, o.v9)(po);
                        return r.createElement("div", {
                            "aria-label": "Wordplay Section",
                            className: "xwd__editorial-content--subGameplayGrid",
                            tabIndex: n ? -1 : 0
                        }, r.createElement("div", {
                            className: "xwd__editorial-content--header"
                        }, r.createElement("a", {
                            href: "/column/wordplay",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "WORDPLAY")), r.createElement("div", {
                            className: "xwd__editorial-content--cardsContainer"
                        }, t));
                    }
                    function nc(e) {
                        let {
                            kicker: t,
                            headline: n,
                            byline: a,
                            summary: i,
                            thumbURL: l,
                            url: s = "/crosswords",
                            type: c = "secondaryCard"
                        } = e;
                        const u = (0, o.v9)(De);
                        return r.createElement("a", {
                            className: io()("xwd__editorial-content--".concat(c), "xwd__editorial-content--editorialCard"),
                            href: s,
                            onClick: () => Rt(s, u, "game-page", "wordplay-content", s),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            tabIndex: 0
                        }, l && r.createElement("div", {
                            className: "xwd__editorial-content--imgContainer"
                        }, r.createElement("img", {
                            src: l,
                            alt: n
                        })), r.createElement("div", {
                            className: "xwd__editorial-content--meta"
                        }, t && r.createElement("p", {
                            className: "xwd__editorial-content--kicker"
                        }, t), n && r.createElement("h2", null, n), i && r.createElement("p", {
                            className: "xwd__editorial-content--summary"
                        }, i), a && r.createElement("p", {
                            className: "xwd__editorial-content--byline"
                        }, a)));
                    }
                    function rc() {
                        const [e, t] = (0, r.useState)(undefined), n = (0, o.v9)(Ae), {
                            userType: a
                        } = (0, so.aF)(), i = (0, o.v9)(Ie);
                        (0, r.useEffect)(() => {
                            n && ec(n, a).then(e => {
                                t(e);
                            }).catch(e => {
                                hn.warn(e);
                            });
                        }, [n]);
                        const l = r.useRef(document.getElementById("portal-editorial-content"));
                        return i || lo.tq || !l.current || null == e || !e.featuredArticle ? null : (0, Ko.createPortal)(r.createElement("div", null, r.createElement(tc, null, r.createElement(nc, {
                            type: "featuredCard",
                            kicker: e.featuredArticle.kicker,
                            headline: e.featuredArticle.headline,
                            byline: e.featuredArticle.byline,
                            summary: e.featuredArticle.summary,
                            thumbURL: e.featuredArticle.thumbURL,
                            url: e.featuredArticle.url
                        }), e.secondaryArticles && e.secondaryArticles.map(e => r.createElement(nc, {
                            key: e.url,
                            type: "secondaryCard",
                            kicker: e.kicker,
                            headline: e.headline,
                            byline: e.byline,
                            summary: e.summary,
                            thumbURL: e.thumbURL,
                            url: e.url
                        })))), l.current);
                    }
                    function ac() {
                        const e = (0, o.v9)(Be),
                            t = (null == e ? undefined : e.text) || "",
                            n = (0, o.I0)(),
                            a = () => n(G()),
                            i = (e, t) => r.createElement("div", {
                                role: "button",
                                tabIndex: 0,
                                className: io()("xwd__clue-bar-mobile--jump", t),
                                onClick: e,
                                onKeyDown: t => "Enter" === t.key && e()
                            }, r.createElement("i", {
                                className: "xwd__clue-bar--chevron"
                            }));
                        return r.createElement("div", {
                            className: "xwd__clue-bar-mobile--bar"
                        }, i(() => n(B("PreviousClue")), "left"), r.createElement("div", {
                            role: "button",
                            className: io()("middle xwd__clue-format", {
                                "xwd__image-clue-format": null == e ? undefined : e.isImageClue
                            }),
                            tabIndex: 0,
                            onClick: a,
                            onKeyDown: e => "Enter" === e.key && a(),
                            dangerouslySetInnerHTML: {
                                __html: t
                            },
                            "aria-label": "switch direction"
                        }), i(() => n(B("NextClue"))));
                    }
                    function oc() {
                        const e = (0, o.v9)(Be);
                        if ((0, o.v9)(po)) return r.createElement("div", {
                            className: "xwd__clue-bar-desktop--bar obscured"
                        });
                        const {
                            label: t = "",
                            direction: n,
                            text: a = ""
                        } = e || {}, i = io()("xwd__clue-bar-desktop--text", "xwd__clue-format", {
                            long: a.length > 200
                        }), l = "".concat(t).concat(n ? n[0] : " ");
                        return r.createElement("div", {
                            className: "xwd__clue-bar-desktop--bar"
                        }, r.createElement("div", {
                            className: "xwd__clue-bar-desktop--number"
                        }, l), r.createElement("div", {
                            className: i,
                            dangerouslySetInnerHTML: {
                                __html: a
                            }
                        }));
                    }
                    function ic() {
                        return lo.tq ? r.createElement(ac, null) : r.createElement(oc, null);
                    }
                    function lc(e, t, n) {
                        var r;
                        return (t = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (undefined !== n) {
                                var r = n.call(e, "string");
                                if ("object" != typeof r) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        }(t)) ? r : r + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }) : e[t] = n, e;
                    }
                    class sc extends r.Component {
                        constructor(e) {
                            super(e), lc(this, "listRef", undefined), lc(this, "handleClick", () => {
                                const {
                                    clickHandler: e,
                                    index: t,
                                    isSelected: n
                                } = this.props;
                                "number" == typeof t && e && e(t, n);
                            }), this.listRef = (0, r.createRef)();
                        }
                        componentDidUpdate() {
                            const {
                                isHighlighted: e,
                                isSelected: t,
                                isModalOpen: n
                            } = this.props;
                            if (!e && !t || n) return;
                            const r = this.listRef.current,
                                a = null == r ? undefined : r.parentElement;
                            if (r && a) {
                                const e = r.offsetTop,
                                    t = a.offsetTop;
                                a.scrollTo({
                                    top: e - t,
                                    behavior: "smooth"
                                });
                            }
                        }
                        render() {
                            const {
                                hasNoUnfilledCells: e,
                                isHighlighted: t,
                                isRelated: n,
                                isSelected: a,
                                label: o,
                                text: i = "",
                                isImageClue: l
                            } = this.props, s = io()("xwd__clue--li", {
                                "xwd__clue--filled": e,
                                "xwd__clue--highlighted": t,
                                "xwd__clue--selected": a,
                                "xwd__clue--related": n
                            });
                            return r.createElement("li", {
                                className: s,
                                onClick: this.handleClick,
                                ref: this.listRef,
                                onKeyDown: e => {
                                    "Enter" === e.key && this.handleClick();
                                }
                            }, r.createElement("span", {
                                className: "xwd__clue--label"
                            }, o), r.createElement("span", {
                                className: io()("xwd__clue--text xwd__clue-format", {
                                    "xwd__clue--label--has-image": l
                                }),
                                dangerouslySetInnerHTML: {
                                    __html: i
                                }
                            }));
                        }
                    }
                    var cc = (0, o.$j)((e, t) => {
                        const n = Re(e),
                            r = _e(e),
                            {
                                index: a
                            } = t;
                        if ("number" == typeof a && r) {
                            const e = r[a],
                                t = n.cellClues.includes(a),
                                o = e.list === n.clueList,
                                i = t && o,
                                l = n.relatedClues.includes(a);
                            return {
                                hasNoUnfilledCells: e.unfilledCount <= 0,
                                isHighlighted: t && !i,
                                isSelected: i,
                                isRelated: l,
                                isImageClue: e.isImageClue
                            };
                        }
                        return {
                            hasNoUnfilledCells: false,
                            isHighlighted: false,
                            isSelected: false,
                            isRelated: false,
                            isImageClue: false
                        };
                    })(sc);
                    function uc(e) {
                        let {
                            list: t
                        } = e;
                        const n = (0, o.v9)(_e),
                            a = (0, o.v9)(po),
                            i = (0, o.I0)(),
                            l = (e, t) => {
                                i(U(e, t));
                            },
                            s = io()("xwd__clue-list--list", {
                                "xwd__clue-list--obscured": a
                            }),
                            c = "xwd__clue-list--wrapper".concat(lo.tq ? "-mobile" : "");
                        return r.createElement("div", {
                            className: c
                        }, r.createElement("h3", {
                            className: "xwd__clue-list--title"
                        }, t.name), r.createElement("ol", {
                            className: s
                        }, t.clues.map(e => {
                            const {
                                label: t,
                                text: o,
                                index: i,
                                direction: s
                            } = n[e];
                            return r.createElement(cc, {
                                clickHandler: l,
                                index: i,
                                label: t,
                                text: o,
                                key: "".concat(t).concat(s),
                                isModalOpen: a
                            });
                        })));
                    }
                    function dc(e) {
                        let {
                            lists: t
                        } = e;
                        return lo.tq ? r.createElement(r.Fragment, null, t.map(e => r.createElement(uc, {
                            list: e,
                            key: e.index
                        }))) : r.createElement("section", {
                            className: io()("xwd__layout--cluelists")
                        }, t.map(e => r.createElement(uc, {
                            list: e,
                            key: e.index
                        })));
                    }
                    function pc(e, t, n) {
                        var r;
                        return (t = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (undefined !== n) {
                                var r = n.call(e, "string");
                                if ("object" != typeof r) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        }(t)) ? r : r + "") in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }) : e[t] = n, e;
                    }
                    const mc = (e, t) => {
                        var n, r;
                        const a = (null === (n = document.getElementById(he(e))) || undefined === n ? undefined : n.getBoundingClientRect()) || {
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            },
                            {
                                width: o
                            } = (null === (r = t.current) || undefined === r ? undefined : r.getBoundingClientRect()) || {
                                width: 0
                            };
                        return a.width = Math.max(o, a.width), a;
                    };
                    class fc extends r.Component {
                        constructor(e) {
                            var t;
                            super(e), t = this, pc(this, "inputRef", undefined), pc(this, "invisibleRef", undefined), pc(this, "handleKeyDown", e => {
                                switch (e.key) {
                                case "Enter":
                                case "NumpadEnter":
                                    e.preventDefault(), this.saveAndExit();
                                    break;
                                case "Escape":
                                    this.saveAndExit(false);
                                    break;
                                case "Tab":
                                    e.preventDefault();
                                }
                                e.stopPropagation();
                            }), pc(this, "checkForExitMobile", e => {
                                const {
                                    key: t
                                } = e;
                                "Tab" === t && e.preventDefault();
                                let n = 0;
                                t && ["Escape", "Enter", "NumpadEnter"].includes(t) && (this.setState({
                                    visible: false
                                }), e.preventDefault(), n = 300), setTimeout(() => this.handleKeyDown(e), n);
                            }), pc(this, "shiftField", e => {
                                const t = e.target,
                                    {
                                        index: n
                                    } = this.props;
                                if (n && t && !lo.tq) {
                                    const {
                                        left: e,
                                        width: r
                                    } = mc(n, this.invisibleRef);
                                    let a = e + window.pageXOffset;
                                    t.offsetWidth > r && (a += r / 2 - t.offsetWidth / 2), t.style.left = "".concat(a, "px");
                                }
                                e.stopPropagation();
                            }), pc(this, "updateRebus", e => {
                                const t = e.target.value || "",
                                    {
                                        onRebusChange: n
                                    } = this.props;
                                n(t), this.shiftField(e);
                            }), pc(this, "saveAndExit", function () {
                                let e = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
                                const {
                                    exit: n
                                } = t.props;
                                n(e);
                            }), this.inputRef = (0, r.createRef)(), this.invisibleRef = (0, r.createRef)(), this.state = {
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0,
                                visible: false
                            };
                        }
                        componentDidMount() {
                            const {
                                index: e
                            } = this.props, {
                                current: t
                            } = this.inputRef;
                            lo.tq && this.setState({
                                visible: true
                            }), t && t.focus({
                                preventScroll: true
                            });
                            const {
                                height: n,
                                left: r,
                                top: a,
                                width: o
                            } = mc(e, this.invisibleRef);
                            this.setState({
                                width: o,
                                height: n,
                                left: r,
                                top: a
                            });
                        }
                        componentDidUpdate(e, t) {
                            const {
                                index: n
                            } = this.props, {
                                width: r
                            } = mc(n, this.invisibleRef);
                            r && t.width !== r && this.setState({
                                width: r
                            });
                        }
                        render() {
                            const {
                                value: e = "",
                                offset: t,
                                isSolved: n
                            } = this.props, {
                                height: a,
                                left: o,
                                top: i,
                                visible: l,
                                width: s
                            } = this.state, c = i - t, u = o + window.pageXOffset, d = lo.tq ? {
                                width: s
                            } : {
                                top: c,
                                left: u,
                                height: a,
                                width: s
                            };
                            return r.createElement("div", {
                                className: io()("xwd__rebus", {
                                    "xwd__rebus--mobile": lo.tq,
                                    "xwd__rebus--visible": l
                                })
                            }, lo.tq && r.createElement("div", null, "Rebus"), r.createElement("input", {
                                id: "rebus-input",
                                name: "rebus",
                                inputMode: lo.tq ? "none" : "text",
                                disabled: n,
                                ref: this.inputRef,
                                onChange: e => this.updateRebus(e),
                                onBlur: () => this.saveAndExit(true),
                                onKeyDown: e => {
                                    lo.tq ? (e.persist(), this.checkForExitMobile(e), e.stopPropagation()) : this.handleKeyDown(e);
                                },
                                onKeyPress: e => e.stopPropagation(),
                                className: "xwd__rebus--input",
                                style: d,
                                value: e
                            }), r.createElement("div", {
                                ref: this.invisibleRef,
                                className: "xwd__rebus--invisible",
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            }));
                        }
                    }
                    var bc = (0, o.$j)(e => {
                        const t = Ge(e);
                        return {
                            index: t ? t.index : -1,
                            value: e.toolbar.rebusValue,
                            isSolved: e.status.isSolved
                        };
                    }, e => ({
                        exit: t => e(No(t)),
                        onRebusChange: t => e(It(t))
                    }))(fc);
                    const hc = ["getIsClosing", "getOpenModalName", "modalMap", "onClose", "portalId", "onRemove"];
                    function gc() {
                        return gc = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, gc.apply(this, arguments);
                    }
                    function vc(e) {
                        let {
                            getIsClosing: t,
                            getOpenModalName: n,
                            modalMap: a,
                            onClose: i,
                            portalId: l,
                            onRemove: s
                        } = e, c = function (e, t) {
                            if (null == e) return {};
                            var n, r, a = function (e, t) {
                                if (null == e) return {};
                                var n, r, a = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                            }
                            return a;
                        }(e, hc);
                        const u = r.useRef(document.getElementById(l)),
                            d = (0, o.v9)(n),
                            p = (0, o.v9)(t),
                            m = (0, o.I0)();
                        if (!d) return null;
                        const f = a[d],
                            b = r.createElement(f, gc({
                                close: function () {
                                    return m(i(arguments.length > 0 && undefined !== arguments[0] && arguments[0]));
                                },
                                isClosing: p,
                                onRemove: () => m(s())
                            }, c));
                        return u.current ? (0, Ko.createPortal)(b, u.current) : b;
                    }
                    var yc = n(53248);
                    const wc = e => {
                        let {
                            winHeight: t,
                            winWidth: n
                        } = e;
                        const r = n / t;
                        return t <= 650 && r > 1.8 || t < 400 && r > 1;
                    };
                    var Ec = e => {
                        let {
                            inRebusMode: t = false
                        } = e;
                        const n = (0, yc.Z)(wc),
                            {
                                isSolved: a
                            } = ((0, o.v9)(po), (0, o.v9)(jn)),
                            l = (0, o.I0)();
                        return (0, r.useEffect)(() => {
                            n ? (l(kt(_t, arguments.length > 0 && undefined !== arguments[0] && arguments[0])), i.$A.deactivate()) : (l(Pt()), i.$A.activate());
                        }, [n]), !n || t ? null : r.createElement("div", {
                            className: "xwd__landscape-warning"
                        }, r.createElement(ci.Z, {
                            icon: "rotate"
                        }), r.createElement("p", null, "Oh no! We can’t fit everything on your screen.", r.createElement("br", null), r.createElement("span", null, "Please rotate your device.")));
                    };
                    const _c = ["nytimes://login", "nytimes://createAccount"],
                        Oc = (e, t) => _c.some(t => e.startsWith(t)) ? e : "".concat(e).concat(t),
                        kc = "1_Show",
                        Pc = new Date("06/10/2024 10:00:00 GMT-0400"),
                        Sc = Pc.getTime(),
                        xc = new Date("07/22/2024 12:00:00 GMT-0400").getTime(),
                        jc = new Date("06/24/2024 10:00:00 GMT-0400"),
                        Cc = new Date("07/08/2024 10:00:00 GMT-0400"),
                        Tc = new Date("07/18/2024 10:00:00 GMT-0400"),
                        Dc = new Date("07/20/2024 10:00:00 GMT-0400"),
                        Nc = new Date("07/21/2024 10:00:00 GMT-0400"),
                        Lc = new Date("07/21/2024 18:00:00 GMT-0400");
                    Lc.getTime(), Nc.getTime(), Dc.getTime(), Tc.getTime(), Cc.getTime(), jc.getTime(), Pc.getTime(), new Date("02/27/2023 06:00:00 GMT-0400").getTime();
                    const Ic = new Date("04/01/2023 10:00:00 GMT-0400").getTime(),
                        Ac = [{
                            copy: "Final Hours of the All Access Sale.",
                            startDate: new Date("03/31/2023 13:00:00 GMT-0400").getTime()
                        }, {
                            copy: "The All Access Sale Ends Today.",
                            startDate: new Date("03/31/2023 06:00:00 GMT-0400").getTime()
                        }, {
                            copy: "The All Access Sale Ends Tomorrow.",
                            startDate: new Date("03/30/2023 06:00:00 GMT-0400").getTime()
                        }, {
                            copy: "The All Access Sale Ends Soon.",
                            startDate: new Date("03/13/2023 06:00:00 GMT-0400").getTime()
                        }, {
                            copy: "The All Access Sale.",
                            startDate: new Date("02/27/2023 06:00:00 GMT-0400").getTime()
                        }];
                    function zc(e, t) {
                        return function (n) {
                            return function (e, t, n) {
                                var r, a;
                                const o = null == e ? undefined : e[t];
                                let i = [];
                                return null == o || null === (r = o.if) || undefined === r || r.forEach(e => {
                                    e.hasOwnProperty("abtest_partition") && (i = e.abtest_partition);
                                }), i && (null === (a = i) || undefined === a ? undefined : a.includes(n));
                            }(n, e, t);
                        };
                    }
                    function Rc(e) {
                        if (e && e.search) {
                            const t = e.search("date-override"),
                                n = e.substring(t);
                            return new URLSearchParams(n).get("date-override");
                        }
                    }
                    zc("MWD_phoenix_games_sale_nav", kc), zc("MWD_phoenix_games_sale_cta", kc), zc("MWD_phoenix_games_sale_banner", kc);
                    const Mc = e => {
                        let {
                            url: t,
                            isDelta: n,
                            navLinks: a
                        } = e;
                        const o = "undefined" == typeof window ? a : window.navigationLinks,
                            i = Oc(o.login, "&asset=delta-mini-banner"),
                            l = n ? i : "/subscription/games?campaignId=89RW9",
                            s = n ? "Create an account or log in." : "Save on all of The Times, including Games.";
                        return r.createElement("a", {
                            id: "top-sale-banner",
                            href: l,
                            rel: "noreferrer",
                            className: "pz-hide-loading pz-hide-user-loading pz-hide-newsreader pz-hide-games-app pz-hide-ada"
                        }, r.createElement("div", {
                            className: io()("top-sale-banner", {
                                dark_yellow: n
                            })
                        }, r.createElement("div", {
                            className: io()("top-sale-banner__copy", {
                                small_font: n
                            })
                        }, r.createElement("span", {
                            className: io()("top-sale-banner__urgency", {
                                downcase: n
                            })
                        }, n ? "Track your stats and streaks." : function (e) {
                            const t = Rc(e),
                                n = new Date(t).getTime() || (new Date).getTime(),
                                r = Ac.find(e => {
                                    let {
                                        startDate: t
                                    } = e;
                                    return n >= t && n < Ic;
                                });
                            return r ? r.copy : "";
                        }(t)), r.createElement("span", {
                            className: "top-sale-banner__text"
                        }, s)), r.createElement("img", {
                            className: "top-sale-banner__icon",
                            src: "https://mwcm.nyt.com/dam/LP/games/banner/chevron-right.svg",
                            alt: "open banner"
                        })));
                    };
                    Mc.propTypes = {
                        url: hi().string,
                        isDelta: hi().bool,
                        navLinks: hi().shape({
                            login: hi().string
                        })
                    };
                    var Gc = Mc;
                    function Bc(e) {
                        null == e || e.setAttribute("href", "#"), null == e || e.addEventListener("click", e => {
                            var t;
                            e.preventDefault(), null === (t = window.NativeBridge) || undefined === t || t.gamesAuthenticateUser("subscribe");
                        });
                    }
                    const Uc = {
                        [Po.Info]: function (e) {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const i = (0, o.v9)(Se);
                            if (!i) return null;
                            const {
                                notes: l,
                                publishStream: s,
                                title: c
                            } = i;
                            return r.createElement(mi, {
                                bodyClassName: "xwd__info-modal--wrapper",
                                close: t,
                                isClosing: n,
                                onRemove: a
                            }, r.createElement("div", {
                                className: "xwd__info-modal"
                            }, r.createElement(gi, {
                                size: "medium",
                                text: "Puzzle Info"
                            }), r.createElement(gi, {
                                size: "large",
                                text: Xi(c, s)
                            }), r.createElement(Qi, {
                                meta: i,
                                isInfo: true
                            })), l && r.createElement(cl, {
                                notes: l
                            }));
                        },
                        [Po.Settings]: function (e) {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const {
                                isErsatzShortz: i,
                                inShortzMode: l
                            } = Vi(), s = (0, o.v9)(ee), {
                                skipFilled: c,
                                backspaceAcrossWords: u,
                                skipPenciled: d,
                                autoAdvance: p,
                                jumpBack: m,
                                soundOn: f,
                                showTimer: b,
                                suppressDisqualificationWarnings: h,
                                showMilestones: g,
                                spaceTriggers: v,
                                onSwitch: y,
                                suppressAutocheckNotice: w,
                                speedUpSyncInterval: E,
                                forceGoldStarEligibility: _
                            } = s, O = (0, o.I0)(), k = (e, t) => {
                                O(ln({
                                    [e]: t
                                }));
                            }, P = [{
                                label: "Save and close",
                                clickHandler: () => t()
                            }, {
                                label: "Restore defaults",
                                disabled: (() => {
                                    const e = lo.tq ? Vt : Zt,
                                        t = Object.keys(e);
                                    return yn(e, s, t);
                                })(),
                                className: "pz-moment__button secondary",
                                clickHandler: () => {
                                    return O((e = lo.tq, {
                                        type: Qt,
                                        payload: e ? Vt : Zt
                                    }));
                                    var e;
                                }
                            }];
                            return r.createElement(mi, {
                                bodyClassName: "xwd__settings-modal--wrapper",
                                close: t,
                                keyConfig: {
                                    Escape: () => t()
                                },
                                buttons: P,
                                buttonsWrapperClassName: "xwd__settings-btns--wrapper",
                                isClosing: n,
                                onRemove: a
                            }, r.createElement("div", {
                                className: "xwd__settings-modal--title-container"
                            }, r.createElement(gi, {
                                size: "medium",
                                text: "Puzzle Settings"
                            }), i && r.createElement(Sl, null)), r.createElement("form", {
                                id: "settings-panel",
                                className: "xwd__settings-modal--form",
                                onChange: e => {
                                    const {
                                        target: t
                                    } = e, {
                                        checked: n,
                                        name: r,
                                        type: a,
                                        value: o
                                    } = t;
                                    k(r, "radio" === a ? o : n);
                                }
                            }, r.createElement("div", {
                                className: "xwd__settings-modal--column"
                            }, !lo.tq && r.createElement(gl, {
                                onSwitch: y,
                                spaceTriggers: v
                            }), r.createElement(wl, {
                                backspaceAcrossWords: u
                            }), r.createElement(El, {
                                subSettingsHandler: k,
                                skipFilled: c,
                                skipPenciled: d
                            })), r.createElement("div", {
                                className: "xwd__settings-modal--column"
                            }, r.createElement(_l, {
                                jumpBack: m,
                                autoAdvance: p
                            }), r.createElement(Ol, {
                                soundOn: f,
                                showTimer: b,
                                suppressDq: h,
                                showMilestones: g
                            }), l && r.createElement(kl, {
                                speedUpSyncInterval: E || false,
                                forceGoldStarEligibility: _ || false,
                                suppressAutocheckNotice: w || false
                            }))));
                        },
                        [Po.Rats]: e => {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const o = r.useRef(K(ul)),
                                i = r.useRef(K(dl));
                            return r.createElement(mi, {
                                buttons: [{
                                    label: "Keep trying"
                                }],
                                close: t,
                                bodyClassName: "xwd__rats-modal",
                                isClosing: n,
                                onRemove: a
                            }, r.createElement(gi, {
                                size: "large",
                                text: o.current
                            }), r.createElement(vi, {
                                text: "The puzzle is filled, but at least one square’s amiss. ".concat(i.current),
                                variant: "small"
                            }));
                        },
                        [Po.Congrats]: Yi,
                        [Po.Confirmation]: function (e) {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const {
                                actionType: i,
                                scope: l,
                                needToWarn: s
                            } = (0, o.v9)(mo), {
                                title: c,
                                text: u,
                                buttonLabel: d
                            } = ((e, t) => {
                                switch (e) {
                                case y:
                                    return {
                                        title: "Feeling stuck?", text: xl, buttonLabel: "Check anyway"
                                    };
                                case W:
                                    return t ? {
                                        title: "Resetting the timer will exclude this puzzle from a streak.",
                                        text: "Streaks are formed by solving The Crossword within a day of its publish date and without help.",
                                        buttonLabel: "Reset timer"
                                    } : {
                                        title: "",
                                        text: "Are you sure you want to start over?",
                                        buttonLabel: "Start over"
                                    };
                                case E:
                                    return t ? {
                                        title: "Feeling stuck?",
                                        text: xl,
                                        buttonLabel: "Reveal anyway"
                                    } : {
                                        title: "",
                                        text: "Are you sure you want to reveal the puzzle?",
                                        buttonLabel: "Reveal"
                                    };
                                case w:
                                    return {
                                        title: "", text: "Are you sure you want to erase the puzzle?", buttonLabel: "Erase"
                                    };
                                case q:
                                    return {
                                        title: "Feeling stuck?", text: xl, buttonLabel: "Use autocheck"
                                    };
                                default:
                                    return {
                                        title: "", text: "Are you sure you want to do that?", buttonLabel: "Confirm"
                                    };
                                }
                            })(i, s), p = (0, o.I0)(), m = e => {
                                p(ln({
                                    suppressDisqualificationWarnings: e
                                }));
                            }, f = () => {
                                t(true), s && m(false);
                            }, b = () => {
                                t(), p(Ro(i, l));
                            }, h = [{
                                label: "Never mind",
                                className: "secondary",
                                clickHandler: f
                            }, {
                                label: d,
                                clickHandler: b
                            }], g = {
                                Enter: b,
                                NumpadEnter: b,
                                Escape: f
                            }, v = r.createElement("div", {
                                className: "xwd__modal-confirm--warning"
                            }, r.createElement(gi, {
                                size: "medium",
                                text: c
                            }), r.createElement(vi, {
                                text: u,
                                variant: "small"
                            })), _ = s ? r.createElement("div", {
                                className: "xwd__modal-confirm--footer"
                            }, r.createElement(yl, {
                                name: "suppressDisqualificationWarnings",
                                label: "Don’t show again",
                                onChange: e => m(e.target.checked)
                            })) : null;
                            return r.createElement(mi, {
                                bodyClassName: "xwd__confirmation-modal--wrapper",
                                buttons: h,
                                keyConfig: g,
                                close: t,
                                footer: _,
                                isClosing: n,
                                onRemove: a
                            }, s ? v : r.createElement(vi, {
                                text: u,
                                variant: "small"
                            }));
                        },
                        [Po.Print]: function (e) {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const i = (0, o.I0)(),
                                {
                                    version: l,
                                    showBlack: s,
                                    showSpoiler: c
                                } = (0, o.v9)(jl),
                                {
                                    opacity: u,
                                    layout: d
                                } = (0, o.v9)(te),
                                p = (0, o.v9)(Se),
                                m = (0, o.v9)(Gl),
                                f = (0, o.v9)(zl),
                                b = (0, o.v9)(Ll),
                                h = (0, o.v9)(Il),
                                g = (0, o.v9)(Nl),
                                v = (0, o.v9)(Dl),
                                y = 0 === (null == p ? undefined : p.category),
                                w = e => {
                                    const {
                                        target: t
                                    } = e, {
                                        checked: n,
                                        name: r,
                                        type: a,
                                        value: o
                                    } = t;
                                    i((e => ({
                                        type: $r,
                                        payload: e
                                    }))({
                                        [r]: "radio" === a ? o : n
                                    }));
                                },
                                E = e => {
                                    const t = e || qt.standard;
                                    i((e => ({
                                        type: nn,
                                        payload: {
                                            layout: e
                                        }
                                    }))(t));
                                },
                                _ = () => window.open("".concat(m));
                            return r.createElement(mi, {
                                buttons: [{
                                    label: "Print",
                                    clickHandler: _
                                }],
                                keyConfig: {
                                    Enter: _,
                                    NumpadEnter: _
                                },
                                ignoreBackgroundClick: true,
                                close: t,
                                isClosing: n,
                                onRemove: a
                            }, r.createElement(gi, {
                                size: "medium",
                                text: "Print"
                            }), r.createElement("div", {
                                className: "xwd__print-modal--printModalContent"
                            }, (null == p ? undefined : p.formatType) && r.createElement("div", {
                                className: "xwd__print-modal--puzzleDetails"
                            }, r.createElement("div", {
                                className: "xwd__print-modal--puzzleTitle"
                            }, p.title || "Daily Puzzle"), r.createElement("div", {
                                className: "xwd__print-modal--puzzleDate"
                            }, f)), r.createElement("div", {
                                className: "xwd__print-modal--printOptions"
                            }, r.createElement("div", {
                                className: "xwd__print-modal--section"
                            }, r.createElement("div", {
                                className: "xwd__print-modal--left"
                            }, r.createElement(bl, {
                                type: "radio",
                                id: "puzzle",
                                name: "version",
                                value: "puzzle",
                                checked: "puzzle" === l,
                                onChange: w,
                                tabIndex: 0,
                                label: "Puzzle"
                            }), y && r.createElement("div", {
                                className: io()("xwd__print-modal--inset", {
                                    "xwd__print-modal--disabled": b
                                })
                            }, r.createElement(bl, {
                                type: "radio",
                                id: "standard",
                                name: "layout",
                                value: "standard",
                                checked: "standard" === d,
                                onChange: () => E(qt.standard),
                                disabled: b,
                                label: "Standard Layout"
                            }), r.createElement(bl, {
                                type: "radio",
                                id: "large_print",
                                name: "layout",
                                value: "large_print",
                                checked: "large_print" === d,
                                onChange: () => E(qt.large_print),
                                disabled: b,
                                label: "Large Print"
                            }), r.createElement(bl, {
                                type: "radio",
                                id: "southpaw",
                                name: "layout",
                                value: "southpaw",
                                checked: "southpaw" === d,
                                onChange: () => E(qt.southpaw),
                                disabled: b,
                                label: "Left-handed"
                            })), r.createElement(bl, {
                                type: "radio",
                                id: "solution",
                                name: "version",
                                value: "solution",
                                checked: "solution" === l,
                                onChange: w,
                                disabled: !v,
                                label: "Solution",
                                subText: "(available Thursday 10 p.m. ET)",
                                showSubText: !v,
                                subTextClass: "xwd__print-modal--subscript"
                            })), r.createElement("div", {
                                className: io()("xwd__print-modal--cellDarkness", {
                                    disabled: h
                                })
                            }, r.createElement(yl, {
                                onChange: e => {
                                    return t = e.target.checked, void i((e => ({
                                        type: tn,
                                        payload: {
                                            opacity: e
                                        }
                                    }))(t ? 30 : 100));
                                    var t;
                                },
                                type: "checkbox",
                                id: "opacity",
                                name: "opacity",
                                checked: u < 100,
                                disabled: h,
                                "aria-disabled": h,
                                label: "Ink Saver"
                            }), r.createElement("div", null, r.createElement("div", {
                                className: "xwd__print-modal--opacityIcon"
                            }, r.createElement("div", {
                                className: "xwd__print-modal--opacityReference"
                            }), r.createElement("div", {
                                className: "xwd__print-modal--userOpacity",
                                style: {
                                    opacity: u / 100
                                }
                            }))))), g && r.createElement("div", {
                                className: "xwd__print-modal--section"
                            }, r.createElement(bl, {
                                type: "radio",
                                id: "newspaper",
                                name: "version",
                                value: "newspaper",
                                checked: "newspaper" === l,
                                onChange: w,
                                label: "Newspaper Version"
                            })))));
                        },
                        [Po.Start]: function (e) {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const l = (0, o.v9)(Se),
                                s = (0, o.v9)(Ie),
                                c = (0, o.v9)(De),
                                {
                                    userType: u
                                } = (0, so.aF)(),
                                {
                                    getVariant: d,
                                    reportExposure: p
                                } = (0, li.Z)(),
                                [m, f] = r.useState(false),
                                [b, h] = r.useState(false),
                                g = (0, o.I0)(),
                                v = d("Conv_SubCon_Games_PLOPRO_EXPANSION_246"),
                                y = !!v && "0_Control" !== v,
                                w = d(sl),
                                E = Boolean(s && w && "1_subscribe_cta" === w);
                            (0, r.useEffect)(() => {
                                w && p(sl);
                            }, [w]);
                            const _ = () => {
                                    g(Oo(u)), t();
                                },
                                O = (0, r.useCallback)(() => {
                                    ! function () {
                                        let {
                                            isMini: e,
                                            entitlement: t
                                        } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
                                            isMini: false,
                                            entitlement: "anon"
                                        };
                                        const n = !t.includes("cr");
                                        return e && n && rl();
                                    }({
                                        isMini: s,
                                        entitlement: u.entitlement
                                    }) ? _(): f(true);
                                }, []);
                            r.useEffect(() => {
                                b && _();
                            }, [b]);
                            const k = "ios" === window.newsreaderAppPlatform,
                                P = s && tl.T4,
                                S = !s && tl.T4,
                                x = (0, tl.Bm)();
                            r.useEffect(() => {
                                (0, tl.Od)(), (0, tl.ts)(), S && Mt("welcome", "game-page", "download-app", null == c ? undefined : c.toString()), P && Mt("welcome", "mini-page", "download-app", null == c ? undefined : c.toString());
                            }, [S, P]);
                            const j = "anon" === u.entitlement || "reg" === u.entitlement,
                                C = rl() && s && !m,
                                T = d("Conv_MiniWelcome_AA_Test_424"),
                                D = d("CONV_SUBCON_Mini_Sub_Only_245_SUBCON_GROWTH_5-1"),
                                N = s && "1_variant" === D,
                                L = d("MAPS_wordleRegisNewsletterOptIn_0324");
                            r.useEffect(() => {
                                j && C && p("Conv_MiniWelcome_AA_Test_424");
                            }, [T]), r.useEffect(() => {
                                L && p("MAPS_wordleRegisNewsletterOptIn_0324");
                            }, [L]), r.useEffect(() => {
                                s && D && p("CONV_SUBCON_Mini_Sub_Only_245_SUBCON_GROWTH_5-1");
                            }, [D]);
                            const I = () => {
                                    s && v && p("Conv_SubCon_Games_PLOPRO_EXPANSION_246");
                                    let e = window.navigationLinks.register;
                                    y && (e = window.navigationLinks.loginOffer), null != L && null != e && (e = "".concat(e, "&display=,").concat(L)), window.navigationLinks.register && (Rt("", "", "mini-page", "register"), window.location.href = e);
                                },
                                A = () => {
                                    p(sl), Rt("click", c, "mini-page", "subscribe"), window.location.href = window.navigationLinks.subscribe.default;
                                };
                            if (!l) return null;
                            const {
                                title: z,
                                publishStream: R
                            } = l, M = !!(0, i.vl)("nl"), G = !u.isLoggedIn && !window.newsreaderAppPlatform && !M, B = ((e, t, n) => t && !e ? [{
                                label: "Subscribe",
                                clickHandler: () => {
                                    let e = window.navigationLinks.subscribe.default;
                                    null != L && null != e && (e = "".concat(e, "&display=,").concat(L)), window.navigationLinks.subscribe.default && (Rt("", "", "mini-page", "subscribe"), window.location.href = e);
                                }
                            }] : n ? E ? [{
                                label: "Create a free account",
                                clickHandler: I
                            }, {
                                className: "mini-welcome-subscribe-anon-cta_button",
                                label: "Subscribe",
                                clickHandler: A
                            }] : [{
                                label: "Create a free account",
                                clickHandler: I
                            }] : j && E ? [{
                                label: "Play"
                            }, {
                                className: "mini-welcome-subscribe-cta_button",
                                label: "Subscribe",
                                clickHandler: A
                            }] : [{
                                label: "Play"
                            }])(u.hasXwd, N, G), U = ((e, t, n) => t && !e ? r.createElement(vi, {
                                text: "Ready to start solving? <br> Subscribers enjoy full access.",
                                variant: "small"
                            }) : n ? r.createElement(vi, {
                                text: "Save your progress across devices and compare times with friends.",
                                variant: "small"
                            }) : r.createElement(vi, {
                                text: "Ready to start solving?"
                            }))(u.hasXwd, N, G), H = G ? N ? r.createElement("div", null, "Already a subscriber?", r.createElement("button", {
                                type: "button",
                                onClick: I,
                                className: "xwd__modal--subtle-button"
                            }, "Log in.")) : r.createElement("button", {
                                type: "button",
                                onClick: O,
                                className: "xwd__modal--subtle-button"
                            }, "Play without an account") : r.createElement(Qi, {
                                meta: l
                            });
                            const W = (0, tl.T4)(),
                                F = () => {
                                    const e = s ? "mini-page" : "game-page";
                                    (0, i.ob)({
                                        name: e,
                                        label: "welcome-download-app",
                                        context: c,
                                        region: "welcome",
                                        moduleLabel: "https://fpx3r.app.goo.gl/app-store"
                                    });
                                };
                            return m ? r.createElement(ll, {
                                bodyClassName: io()("xwd__start-modal", {
                                    mini: s
                                }),
                                close: () => {
                                    h(true);
                                },
                                containerClassName: io()("start-modal-container", {
                                    "ios-newsreader": k
                                }),
                                isClosing: n,
                                onRemove: a,
                                enableCountdown: al(d, p),
                                enableFadeIn: ol(d, p)
                            }) : r.createElement(mi, {
                                buttons: B,
                                close: O,
                                hideCloseX: true,
                                ignoreBackgroundClick: true,
                                bodyClassName: io()("xwd__start-modal", {
                                    mini: s
                                }),
                                footer: H,
                                showHeader: true,
                                isClosing: n,
                                onRemove: a,
                                noAnimateOpen: true,
                                containerClassName: io()("start-modal-container", {
                                    "ios-newsreader": k
                                })
                            }, r.createElement("i", {
                                className: io()("xwd__start-modal--icon", {
                                    mini: s
                                })
                            }), r.createElement(gi, {
                                size: "large",
                                text: Xi(z, R)
                            }), U, W ? !(0, tl.iJ)() && x ? r.createElement(el.j, {
                                ctaLink: "https://fpx3r.app.goo.gl/app-store",
                                newTab: true,
                                position: "fixed",
                                onClickLink: () => F(),
                                type: el.Z.GRID
                            }) : r.createElement(el.j, {
                                title: "Play ".concat(s ? "The Mini" : "The Crossword", " and more in the NYT Games app."),
                                icon: "crossword-app",
                                ctaLink: "https://fpx3r.app.goo.gl/app-store",
                                newTab: true,
                                position: "fixed",
                                onClickLink: () => F(),
                                type: el.Z.MULTI
                            }) : null);
                        },
                        [Po.Pause]: function (e) {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const i = (0, o.v9)(Se);
                            return i ? r.createElement(mi, {
                                buttons: [{
                                    label: "Continue"
                                }],
                                ignoreBackgroundClick: true,
                                hideCloseX: true,
                                close: t,
                                isClosing: n,
                                onRemove: a,
                                footer: r.createElement(Qi, {
                                    meta: i
                                }),
                                containerClassName: "pause-modal"
                            }, r.createElement(gi, {
                                size: "large",
                                text: "Your game is paused."
                            }), r.createElement(vi, {
                                text: "Ready to play?"
                            })) : null;
                        },
                        [Po.Share]: e => {
                            let {
                                close: t,
                                isClosing: n,
                                onRemove: a
                            } = e;
                            const [i, l] = (0, r.useState)(false), s = (0, r.useRef)(null), c = r.useRef(null), u = (0, o.v9)(hr), d = (0, o.v9)(Ae), {
                                shareUrl: p,
                                shareImageSrc: m
                            } = _i(d, u), f = encodeURIComponent("I solved the daily mini!");
                            return (0, r.useEffect)(() => () => {
                                clearTimeout(c.current);
                            }, []), r.createElement(mi, {
                                close: t,
                                isClosing: n,
                                onRemove: a,
                                bodyClassName: "xwd__share-modal"
                            }, r.createElement(gi, {
                                size: "large",
                                text: "Share Your Victory"
                            }), r.createElement("div", {
                                className: "xwd__share-modal_toutImageWrapper"
                            }, r.createElement("img", {
                                src: m,
                                alt: "social media achievement",
                                className: "xwd__share-modal_toutImage"
                            })), r.createElement("ul", {
                                className: "xwd__share-modal_shareNetworks"
                            }, r.createElement("li", {
                                className: "xwd__share-modal_shareItem"
                            }, r.createElement("button", {
                                ref: s,
                                type: "button",
                                "aria-label": "Copy Link",
                                id: "copyUrlId",
                                onClick: () => {
                                    if (s.current) {
                                        const e = "".concat(p, "&smid=").concat("url-share"),
                                            t = document.createElement("input");
                                        t.type = "text", t.value = e, s.current.append(t), t.select(), document.execCommand("copy"), t.remove(), l(true), Rt("share-tools", undefined, "share-url", "Permalink"), clearTimeout(c.current), c.current = setTimeout(() => {
                                            l(false);
                                        }, 5e3);
                                    }
                                },
                                className: io()("xwd__share-modal_shareLinkButton", {
                                    "xwd__share-modal_copiedLink": i
                                })
                            }, r.createElement("i", {
                                className: io()("xwd__share-modal_shareIcon", "link")
                            }), r.createElement("div", {
                                className: "xwd__share-modal_shareLink"
                            }, i ? "Copied" : "Copy Link"))), r.createElement("li", {
                                className: "xwd__share-modal_shareItem"
                            }, r.createElement("a", {
                                href: "https://www.facebook.com/dialog/feed?app_id=9869919170&link=".concat(Ei(p, "fb-share"), "&name=").concat(f, "&redirect_uri=").concat(Oi),
                                target: "_blank",
                                "aria-label": "Share on Facebook",
                                rel: "noopener noreferrer",
                                onClick: () => {
                                    Rt("share-tools", undefined, "share-facebook", "Facebook");
                                }
                            }, r.createElement("i", {
                                className: io()("xwd__share-modal_shareIcon", "facebook")
                            }), r.createElement("div", {
                                className: "xwd__share-modal_shareLink"
                            }, "Facebook"))), r.createElement("li", {
                                className: "xwd__share-modal_shareItem"
                            }, r.createElement("a", {
                                href: "https://twitter.com/intent/tweet?url=".concat(Ei(p, "tw-share"), "&text=").concat(f),
                                target: "_blank",
                                "aria-label": "Share on Twitter",
                                rel: "noopener noreferrer",
                                onClick: () => {
                                    Rt("share-tools", undefined, "share-twitter", "Twitter");
                                }
                            }, r.createElement("i", {
                                className: io()("xwd__share-modal_shareIcon", "twitter")
                            }), r.createElement("div", {
                                className: "xwd__share-modal_shareLink"
                            }, "Twitter"))), r.createElement("li", {
                                className: "xwd__share-modal_shareItem"
                            }, r.createElement("a", {
                                href: "https://t.me/share/url?url=".concat(Ei(p, "tel-share"), "&text=").concat(f, " via @nytimes"),
                                target: "_blank",
                                "aria-label": "Share on Telegram",
                                rel: "noopener noreferrer",
                                onClick: () => {
                                    Rt("share-tools", undefined, "share-telegram", "Telegram");
                                }
                            }, r.createElement("i", {
                                className: io()("xwd__share-modal_shareIcon", "telegram")
                            }), r.createElement("div", {
                                className: "xwd__share-modal_shareLink"
                            }, "Telegram"))), r.createElement("li", {
                                className: "xwd__share-modal_shareItem"
                            }, r.createElement("a", {
                                href: "https://api.whatsapp.com/send?text=".concat(f, "%20").concat(Ei(p, "wa-share")),
                                target: "_blank",
                                "aria-label": "Share on WhatsApp",
                                rel: "noopener noreferrer",
                                onClick: () => {
                                    Rt("share-tools", undefined, "share-whatsapp", "WhatsApp");
                                }
                            }, r.createElement("i", {
                                className: io()("xwd__share-modal_shareIcon", "whatsapp")
                            }), r.createElement("div", {
                                className: "xwd__share-modal_shareLink"
                            }, "Whatsapp")))));
                        }
                    };
                    function Hc(e) {
                        let {
                            clueLists: t,
                            inRebusMode: n,
                            doEscape: a,
                            puzzleEscaped: i,
                            isMobile: l
                        } = e;
                        const s = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            u = !!window.newsreaderAppPlatform,
                            d = "android" === window.newsreaderAppPlatform;
                        (0, r.useEffect)(() => {
                            const e = document.getElementById("games-sale-banner-a"),
                                t = document.getElementById("cache-safe-games-sale-banner-a");
                            window.isHybridWebView && window.NativeBridge && (Bc(e), Bc(t));
                        }, []), (0, r.useEffect)(() => {
                            s.current && a && !l && (s.current.focus(), i && i());
                        }, [a]);
                        const p = (0, r.useRef)(null),
                            [m, f] = (0, r.useState)(0);
                        (0, r.useEffect)(() => {
                            var e;
                            const t = (null === (e = p.current) || undefined === e ? undefined : e.getBoundingClientRect().top) || 0;
                            f(t);
                        }, [n]);
                        const {
                            willShowDeltaBanner: b,
                            portalEl: h
                        } = (() => {
                            const [e, t] = (0, r.useState)(false), n = document.querySelector("#delta-banner-portal"), {
                                hasLoaded: a,
                                userType: o
                            } = (0, so.aF)();
                            return (0, r.useEffect)(() => {
                                a && (o.isLoggedIn || window.isHybridWebView || window.newsreaderAppPlatform || t(!!Jo.l1 && !!n));
                            }, [a]), (0, r.useEffect)(() => {
                                if (e) {
                                    const t = document.querySelector("#js-nav-drawer");
                                    e ? null == t || t.classList.add("top-sale-banner-drawer") : null == t || t.classList.remove("top-sale-banner-drawer");
                                }
                            }, [e]), {
                                willShowDeltaBanner: e,
                                portalEl: n
                            };
                        })(), g = (0, o.I0)(), v = (0, o.v9)(po), y = (0, o.v9)(uo), {
                            isSolved: w
                        } = (0, o.v9)(jn), {
                            winWidth: E
                        } = (0, Qo.Z)();
                        return (0, r.useEffect)(() => {
                            w && g(kt(_t, arguments.length > 0 && undefined !== arguments[0] && arguments[0]));
                        }, [w]), (0, r.useEffect)(() => {
                            const e = document.getElementById("js-nav-burger"),
                                t = () => {
                                    null == e || !e.classList.contains("active") || v || w || g(vt(Po.Pause));
                                };
                            return null == e || e.addEventListener("click", t), () => {
                                null == e || e.removeEventListener("click", t);
                            };
                        }), (0, r.useEffect)(() => {
                            const e = document.getElementById("js-nav-burger"),
                                t = document.getElementById("js-global-nav"),
                                n = () => ((e, t, n, r) => {
                                    const a = (null == e ? undefined : e.classList.contains("active")) && (null == t ? undefined : t.classList.contains("show-mobile-toolbar")) && lo.tq && r <= 375;
                                    n || (a ? null == t || t.classList.remove("show-mobile-toolbar") : null == t || t.classList.add("show-mobile-toolbar"));
                                })(e, t, v && y === Po.Start, E);
                            return null == e || e.addEventListener("click", n), () => {
                                null == e || e.removeEventListener("click", n);
                            };
                        }, [v, y, E]), (0, r.useEffect)(() => {
                            if (l && !u) {
                                const e = () => {
                                    const e = c.current,
                                        t = document.getElementsByClassName("pz-header")[0].clientHeight || 0;
                                    if (e) {
                                        const n = window.innerHeight - t;
                                        e.setAttribute("style", "height:".concat(n, "px"));
                                    }
                                };
                                e();
                                const t = (0, ei.Ds)(e, 50);
                                return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
                            }
                        }, [l, b]), r.createElement("div", {
                            className: "xwd__layout_container",
                            ref: p
                        }, b && h && (0, Ko.createPortal)(r.createElement(Gc, {
                            url: document.location.href,
                            isDelta: true
                        }), h), l && r.createElement(Ec, {
                            inRebusMode: n
                        }), r.createElement(vc, {
                            getOpenModalName: uo,
                            getIsClosing: fo,
                            modalMap: Uc,
                            onClose: yt,
                            onRemove: wt,
                            portalId: "portal-game-modals"
                        }), !l && r.createElement(Zs, null), r.createElement(fs, null), r.createElement("div", {
                            className: io()({
                                "xwd__layout_container--mobile": l,
                                "xwd__layout--rebusmode": n,
                                "xwd__layout_container--mobile-newsreader": u,
                                "xwd__news-android": d
                            }),
                            ref: c
                        }, r.createElement("article", {
                            id: "puzzle",
                            "aria-label": "Main Puzzle Layout",
                            className: io()({
                                "xwd__layout_puzzle--mobile": l,
                                "xwd__layout_puzzle--desktop": !l
                            })
                        }, r.createElement("section", {
                            className: io()({
                                xwd__layout_clueBarAndBoard: !l,
                                "xwd__mobile_layout--board_container": l
                            }),
                            "aria-label": "Game Board with Clue Bar"
                        }, !l && r.createElement(ic, null), r.createElement(qs, {
                            isMobile: l
                        }), l && r.createElement("span", {
                            key: "breaker",
                            className: "xwd__layout_breaker",
                            "data-testid": "breaker"
                        })), t && r.createElement(dc, {
                            lists: t
                        })), n && r.createElement(bc, {
                            offset: m
                        }), l && r.createElement("div", {
                            className: "xwd__layout_controls--mobile",
                            "data-testid": "mobile-controls"
                        }, r.createElement(ic, null), r.createElement(as, null))), r.createElement(rc, null));
                    }
                    const Wc = e => {
                        let t, {
                            error: n,
                            navigationLinks: a,
                            subscriptionCampaign: o,
                            iconError: i,
                            iconSubscribe: l,
                            liraAsset: s,
                            userType: c,
                            documentTitle: u
                        } = e;
                        const d = Oc(a.login, "&asset=".concat(s));
                        switch (u && (document.title = u), n.status) {
                        case 401:
                        case 403:
                            t = r.createElement("div", {
                                className: "pz-error__message"
                            }, l && r.createElement("i", {
                                className: io()("pz-error__icon", l)
                            }), r.createElement("h1", null, "Subscribe to play."), r.createElement("p", null, "Get full access to The Crossword, created daily by Times experts, with a New York Times Games subscription."), r.createElement("a", {
                                className: "pz-error__button default",
                                href: a.subscribe[o]
                            }, "Subscribe"), r.createElement("a", {
                                className: "pz-error__button sale",
                                href: a.subscribe[o]
                            }, function (e) {
                                const t = Rc(window.location.href) || null,
                                    n = t ? new Date(t).getTime() : (new Date).getTime();
                                return n >= Sc && n < xc;
                            }() ? "sub" === (p = (null == c ? undefined : c.entitlement) || "") || "cr" === p ? "Upgrade and save" : "Subscribe for 50% off" : "Subscribe"), r.createElement("br", null), null != c && c.isLoggedIn ? null : r.createElement("p", null, r.createElement("a", {
                                className: "pz-error__link",
                                href: d
                            }, "Log in")));
                            break;
                        case 404:
                            t = r.createElement("div", {
                                className: "pz-error__message"
                            }, i && r.createElement("i", {
                                className: io()("pz-error__icon", i)
                            }), r.createElement("h1", null, "This page no longer exists."), r.createElement("a", {
                                className: "pz-error__button",
                                href: "/crosswords"
                            }, "Explore Our Games"));
                            break;
                        default:
                            t = r.createElement("div", {
                                className: "pz-error__message"
                            }, i && r.createElement("i", {
                                className: io()("pz-error__icon", i)
                            }), r.createElement("h1", null, "Our site is ", r.createElement("br", null), "playing games with us.", " "), r.createElement("p", null, "We’re working to solve an issue with our server. Try refreshing the page or check back soon. In the meantime, explore the Mini Crossword and more."), r.createElement("a", {
                                className: "pz-error__button",
                                href: "/crosswords"
                            }, "Play Games"));
                        }
                        var p;
                        return r.createElement("div", {
                            className: "pz-error"
                        }, t, 404 === n.status ? r.createElement("div", {
                            className: "pz-error-img-1",
                            alt: ""
                        }) : r.createElement("div", {
                            className: "pz-error-img",
                            alt: ""
                        }));
                    };
                    Wc.propTypes = {
                        error: hi().shape({
                            status: hi().number,
                            stack: hi().string
                        }).isRequired,
                        navigationLinks: hi().shape({
                            login: hi().string,
                            subscribe: hi().shape({})
                        }),
                        liraAsset: hi().string,
                        subscriptionCampaign: hi().string,
                        iconError: hi().string,
                        iconSubscribe: hi().string,
                        userType: hi().shape({
                            isLoggedIn: hi().bool,
                            entitlement: hi().string
                        }),
                        documentTitle: hi().string
                    }, Wc.defaultProps = {
                        liraAsset: "puzzle-paywall",
                        subscriptionCampaign: "default"
                    };
                    var Fc = Wc;
                    const Yc = (e, t) => {
                            e && e.classList.add(t);
                        },
                        qc = (e, t) => {
                            e && e.classList.remove(t);
                        },
                        $c = e => document.getElementsByClassName(e)[0],
                        Vc = function () {
                            let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "xwd__hide-when-no-data";
                            return (0, r.useEffect)(() => {
                                const t = $c("pz-game-title-bar"),
                                    n = $c("pz-game-toolbar");
                                return Yc(t, e), Yc(n, e), () => {
                                    qc(t, e), qc(n, e);
                                };
                            }, []);
                        };
                    function Zc(e) {
                        let {
                            error: t,
                            userType: n
                        } = e;
                        return Vc(), r.createElement(Fc, {
                            error: t,
                            navigationLinks: window.navigationLinks,
                            userType: n
                        });
                    }
                    var Xc = n(85171);
                    function Kc() {
                        var e;
                        Vc();
                        const t = "mini" === (null === (e = window.gameData) || undefined === e ? undefined : e.stream),
                            [n, a] = r.useState(false),
                            [o, i] = r.useState(10);
                        (0, Xc.Z)(() => a(true), 300),
                        function (e, t) {
                            const n = (0, r.useRef)(e);
                            (0, r.useLayoutEffect)(() => {
                                n.current = e;
                            }, [e]), (0, r.useEffect)(() => {
                                if (!t && 0 !== t) return;
                                const e = setInterval(() => n.current(), t);
                                return () => clearInterval(e);
                            }, [t]);
                        }(() => {
                            o < 100 && Math.random() < 0.16666666666666666 && i(o + 15 * Math.random());
                        }, n ? 30 : null);
                        const l = r.createElement("div", {
                            className: "xwd--loading-bar"
                        }, r.createElement("div", {
                            className: "xwd--loading-bar__fill",
                            style: {
                                right: "".concat(Math.max(100 - o, 0), "%")
                            }
                        }));
                        return r.createElement("div", {
                            className: io()("xwd__loading", {
                                mini: t
                            })
                        }, n && l);
                    }
                    var Jc = () => {
                        const e = (0, r.useRef)(null),
                            {
                                userType: t,
                                hasLoaded: n,
                                shortzHasLoaded: a
                            } = (0, so.aF)(),
                            i = (0, o.v9)(je),
                            l = (0, o.v9)(Zo),
                            s = (0, o.v9)(Xo),
                            c = (0, o.v9)(Tn),
                            u = (0, o.v9)(po),
                            d = (0, o.v9)(jo),
                            p = (0, o.v9)(ke),
                            m = (0, o.v9)(Wt),
                            f = (0, o.v9)(De),
                            b = (0, o.v9)(Pe),
                            h = (0, o.v9)(re),
                            v = (0, o.v9)(ae),
                            y = (0, o.v9)(ze),
                            w = (0, o.v9)(To),
                            [E, _] = (0, r.useState)(null),
                            O = (0, o.I0)(),
                            k = (0, r.useCallback)(e => {
                                const {
                                    action: t,
                                    payload: n
                                } = (e => {
                                    let t, n, {
                                        key: r,
                                        shiftKey: a
                                    } = e;
                                    switch (r) {
                                    case "Escape":
                                        t = a ? Fo : Do;
                                        break;
                                    case "Insert":
                                        t = Do;
                                        break;
                                    case "Tab":
                                    case "Enter":
                                    case "NumpadEnter":
                                        t = B, n = a ? "PreviousClue" : "NextClue";
                                        break;
                                    case " ":
                                        t = Uo;
                                        break;
                                    case "End":
                                        t = B, n = "ClueEnd";
                                        break;
                                    case "Home":
                                        t = B, n = "ClueStart";
                                        break;
                                    case "ArrowLeft":
                                    case "ArrowRight":
                                    case "ArrowUp":
                                    case "ArrowDown":
                                        t = B, n = a ? "Shift".concat(r) : r;
                                        break;
                                    case "Backspace":
                                        t = Wo;
                                        break;
                                    case "Delete":
                                        t = Ho, n = "Cell";
                                        break;
                                    default:
                                        return {};
                                    }
                                    return {
                                        action: t,
                                        payload: n
                                    };
                                })(e);
                                t && (O(t(n)), e.preventDefault(), e.stopPropagation());
                            }, []),
                            P = (0, r.useCallback)(e => {
                                const {
                                    action: t,
                                    payload: n,
                                    shiftKey: r
                                } = (e => {
                                    const {
                                        key: t,
                                        which: n,
                                        shiftKey: r
                                    } = e;
                                    return (e => {
                                        let {
                                            altKey: t,
                                            ctrlKey: n,
                                            metaKey: r
                                        } = e;
                                        return t || n || r;
                                    })(e) ? {} : (e.preventDefault(), {
                                        action: zo,
                                        payload: Yo(t, n),
                                        shiftKey: r
                                    });
                                })(e);
                                t && n && O(t(n, r));
                            }, []);
                        return (0, r.useEffect)(() => {
                            n && a && m && p && (O((e => ({
                                type: rn,
                                payload: e
                            }))(t)), v || O({
                                type: on,
                                payload: true
                            }));
                        }, [n, p, m, p, a]), (0, r.useEffect)(() => {
                            false === h && _({
                                status: 403
                            }), b && _(b);
                        }, [h, b]), (0, r.useEffect)(() => {
                            n && p && (O(((e, t) => n => {
                                const r = e ? Vt : Zt,
                                    a = t.regiId || "anon";
                                return Vn("".concat(a)).then(e => {
                                    const t = $o($o({}, r), e ? e.settings : {});
                                    n({
                                        type: Jt,
                                        payload: t
                                    });
                                }).catch(e => {
                                    hn.error(e), n({
                                        type: Jt,
                                        payload: r
                                    });
                                });
                            })(lo.tq, t)), O((e => t => {
                                Vn("".concat(e.regiId)).then(e => {
                                    t({
                                        type: en,
                                        payload: e && e.printPrefs || Xt
                                    });
                                }).catch(e => {
                                    hn.error(e), t({
                                        type: en,
                                        payload: Xt
                                    });
                                });
                            })(t)), O(Bo(t)));
                        }, [n, p, f]), (0, r.useEffect)(() => (window.scrollTo(0, 0), () => window.scrollTo(0, 0)), []), (0, r.useEffect)(() => {
                            (e => {
                                let {
                                    isReady: t,
                                    modalIsOpen: n,
                                    inRebusMode: r,
                                    ref: a
                                } = e;
                                const o = t && !(n || r);
                                if (a && (a.className = io()("xwd__franklin", {
                                        xwd__focused: o
                                    })), o) {
                                    const e = window.pageXOffset,
                                        t = window.pageYOffset;
                                    a && a.focus(), window.scrollTo(e, t);
                                }
                            })({
                                isReady: l,
                                modalIsOpen: u,
                                inRebusMode: d,
                                ref: e.current
                            });
                        }, [l, c, u, d]), (0, r.useEffect)(() => {
                            l || u || O(vt(Po.Start));
                        }, [l, u, O]), (0, r.useEffect)(() => {
                            p && (document.title = y);
                        }, [p, y]), v ? E ? r.createElement(Zc, {
                            error: E,
                            userType: t
                        }) : r.createElement("main", {
                            tabIndex: 0,
                            ref: e,
                            onKeyDown: e => {
                                u || k(e);
                            },
                            onKeyPress: e => {
                                u || P(e);
                            },
                            onClick: () => {
                                w && O(Lt(null));
                            }
                        }, r.createElement(Hc, {
                            clueLists: i,
                            doEscape: s,
                            puzzleEscaped: () => O({
                                type: g,
                                payload: false
                            }),
                            inRebusMode: d,
                            isMobile: lo.tq
                        })) : r.createElement(Kc, null);
                    };
                    try {
                        (() => {
                            const e = /(localforage\/)?([0-9]|anon)+@[0-9]+$/;
                            Un().keys().then(t => {
                                t.forEach(t => {
                                    t.match(e) && Fn(t);
                                });
                            });
                        })();
                    } catch (e) {}
                    const Qc = document.getElementById("pz-game-root");
                    (() => {
                        if ("ios" === window.newsreaderAppPlatform) {
                            var e, t;
                            const n = null === (e = document.querySelector('meta[name="viewport"]')) || undefined === e ? undefined : e.getAttribute("content"),
                                r = "".concat(n, ", viewport-fit=cover, maximum-scale=1, user-scalable=no");
                            null === (t = document.querySelector('meta[name="viewport"]')) || undefined === t || t.setAttribute("content", r);
                        }
                    })();
                    const eu = () => r.createElement(r.Fragment, null, r.createElement(l.Z, null), r.createElement(c.E, null, r.createElement($i, null, r.createElement(o.zt, {
                        store: ao((0, i.kw)())
                    }, r.createElement(Jc, null), r.createElement(s.Z, null)))));
                    (0, a.s)(Qc).render(r.createElement(eu, null));
                },
                65489: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        $A: function () {
                            return l.$A;
                        },
                        $g: function () {
                            return c.$g;
                        },
                        Be: function () {
                            return w.B;
                        },
                        Fg: function () {
                            return p.Fg;
                        },
                        Mk: function () {
                            return l.Mk;
                        },
                        N1: function () {
                            return m.N;
                        },
                        OB: function () {
                            return a.OB;
                        },
                        T0: function () {
                            return a.T0;
                        },
                        Tv: function () {
                            return p.Tv;
                        },
                        abra: function () {
                            return f.Fi;
                        },
                        ec: function () {
                            return l.ec;
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
                        kw: function () {
                            return E;
                        },
                        lY: function () {
                            return p.lY;
                        },
                        ob: function () {
                            return c.ob;
                        },
                        vl: function () {
                            return a.vl;
                        },
                        wC: function () {
                            return i.wC;
                        },
                        xD: function () {
                            return l.xD;
                        }
                    });
                    var r = n(74395),
                        a = n(22042),
                        o = n(96303),
                        i = n(31069),
                        l = n(73649),
                        s = n(67719),
                        c = n(41586),
                        u = n(48198),
                        d = n(33104),
                        p = n(89936),
                        m = n(27489),
                        f = n(42714),
                        b = n(6756),
                        h = n(49808),
                        g = n(72811),
                        v = n(73972),
                        y = n(53212),
                        w = n(93251);
                    if ((0, m.Z)(), (0, c.U9)(), (0, p.ZP)(u.win.sentryConfig), (0, g.Z)(u.win.datadogRumConfig), (0, r.Z)(), f.Fi.init(), u.win.isHybridWebView || "wordle" === u.win.pageName || s.U.initialize(), "connections" === u.win.pageName && "prod" !== u.win.env.name && (0, y.Z)(), (0, l.t6)(), (0, s.q)(), a.G7) u.win.dataLayer = [];
                    else {
                        const e = (0, o.pg)();
                        if (!e) {
                            const e = "DFP_Prebid_0624",
                                t = f.Fi.getVariant(e);
                            t && f.Fi.reportExposure(e), (0, o.He)(), (0, o.I5)(t), (0, b.Z)((0, o.Qx)()), (0, v.YU)();
                        }
                        u.win.addEventListener("load", () => {
                            (0, i.IX)(), (0, d.Z)(), e || (0, o.YY)((0, h.Z)(u.win), f.Fi.getTests()), (0, c.Sv)();
                        });
                    }
                    const E = () => u.win.gameData;
                },
                22152: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        f4: function () {
                            return a;
                        },
                        xw: function () {
                            return r;
                        }
                    });
                    const r = "GAMES_AppDLHoldout_0624",
                        a = "GAMES_generalAppDLCTARefresh_0824";
                },
                39385: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        CY: function () {
                            return l;
                        },
                        Jx: function () {
                            return i;
                        },
                        N$: function () {
                            return y;
                        },
                        N1: function () {
                            return v;
                        },
                        OD: function () {
                            return s;
                        },
                        kU: function () {
                            return r;
                        },
                        m$: function () {
                            return c;
                        },
                        nN: function () {
                            return h;
                        },
                        yL: function () {
                            return g;
                        }
                    });
                    const r = "gamesAuthenticateUser",
                        a = "gamesBackToHub",
                        o = "gamesCacheRefresh",
                        i = "getContextID",
                        l = "getPageViewID",
                        s = "gamesGetUserDetails",
                        c = "gamesInitializeState",
                        u = "setPullToRefreshEnabled",
                        d = "reportABExposure",
                        p = "sendAnalytic",
                        m = "gamesSendEmail",
                        f = "gamesSetNativeColorTheme",
                        b = "share",
                        h = "pageViewIDDidChange",
                        g = [r, a, o, i, l, s, c, u, d, p, m, f, b];
                    let v = function (e) {
                        return e.SUGGESTION = "suggest", e.FEEDBACK = "feedback", e.CUSTOM = "custom", e.LETTERBOXED = "feedback-letter-boxed", e.SUDOKU = "feedback-sudoku", e.TILES = "feedback-tiles", e.WORDLE = "feedback-wordle", e.CONNECTIONS = "feedback-connections", e;
                    }({});
                    const y = e => ({
                        [r]: t => e(r, {
                            type: t
                        }),
                        [a]: () => e(a),
                        [o]: () => e(o),
                        [i]: () => e(i),
                        [l]: () => e(l),
                        [s]: () => e(s),
                        [c]: () => e(c),
                        [u]: t => e(u, {
                            value: t
                        }),
                        [d]: t => e(d, {
                            testName: t
                        }),
                        [p]: (t, n) => e(p, {
                            eventName: t,
                            options: n || {}
                        }),
                        [m]: t => {
                            let {
                                type: n,
                                debugInfo: r,
                                emailTitle: a,
                                emailDestination: o
                            } = t;
                            return e(m, {
                                type: n,
                                debugInfo: r,
                                emailTitle: a,
                                emailDestination: o
                            });
                        },
                        [f]: t => e(f, {
                            theme: t
                        }),
                        [b]: (t, n, r) => e(b, {
                            url: t,
                            text: n,
                            title: r
                        })
                    });
                },
                73649: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        $A: function () {
                            return p;
                        },
                        Mk: function () {
                            return u;
                        },
                        ec: function () {
                            return d;
                        },
                        ku: function () {
                            return s;
                        },
                        t6: function () {
                            return l;
                        },
                        xD: function () {
                            return c;
                        }
                    });
                    var r = n(37226),
                        a = n(22042),
                        o = n(10431),
                        i = n(41586);
                    const l = () => {
                            (() => {
                                const e = (0, o.rI)((0, a.iU)("hybrid-back"));
                                e && window.isHybridWebView && window.NativeBridge && (0, o.Oo)(e, "click", () => {
                                    var e;
                                    "sudoku" !== (0, a.j0)() && (null === (e = window.NativeBridge) || undefined === e || e.gamesBackToHub());
                                });
                            })(), (() => {
                                if (window.isHybridWebView && window.NativeBridge) {
                                    const e = document.querySelectorAll(".".concat((0, a.iU)("nav-login"))),
                                        t = document.querySelectorAll(".".concat((0, a.iU)("nav-logout"))),
                                        n = document.querySelectorAll(".".concat((0, a.iU)("nav-subscribe"))),
                                        r = document.querySelectorAll(".".concat((0, a.iU)("nav-account-details"))),
                                        i = e => e.forEach(e => {
                                            (0, o.cn)(e, "hybrid-hidden");
                                        }),
                                        l = a => {
                                            const o = null == a ? undefined : a.isUserLoggedIn,
                                                l = null == a ? undefined : a.isSubscribed;
                                            o ? i(e) : (i(t), i(r)), l && i(n);
                                        };
                                    window.NativeBridge.gamesGetUserDetails().then(e => {
                                        if (!e.success) throw new Error(e.error);
                                        l(e.values.gamesGetUserDetails);
                                    }).catch(e => {
                                        console.error("Getting user details failed", e), i(t), i(r);
                                    }), (0, o.Oo)(window, "gamesUserCredentialChanged", e => {
                                        var t;
                                        l(null == e || null === (t = e.detail) || undefined === t || null === (t = t.values) || undefined === t ? undefined : t.gamesAuthenticateUser);
                                    });
                                    const s = (e, t) => {
                                        e.forEach(e => {
                                            (0, o.Oo)(e, "click", e => {
                                                var n;
                                                e.preventDefault(), null === (n = window.NativeBridge) || undefined === n || n.gamesAuthenticateUser(t).then(e => {
                                                    if (!e.success) throw new Error(e.error);
                                                    window.dispatchEvent(new CustomEvent("gamesUserCredentialChanged", {
                                                        detail: e
                                                    }));
                                                });
                                            });
                                        });
                                    };
                                    s(n, "subscribe"), s(e, "login");
                                }
                            })(), (() => {
                                var e;
                                const t = [...document.querySelectorAll(".top-sale-banner")],
                                    n = null === (e = document.querySelector(".top-sale-banner__urgency")) || undefined === e ? undefined : e.innerHTML,
                                    r = "".concat(null != n ? n : "", "50% off your first year of Games."),
                                    o = (0, a.j0)();
                                t.length > 0 && (0, i.j)("impression", {
                                    module: {
                                        name: "games-sale-banner",
                                        region: o,
                                        label: r
                                    },
                                    eventData: {
                                        page_type: "games-sale-banner"
                                    }
                                }), t.forEach(e => {
                                    e.addEventListener("click", () => {
                                        (0, i.j)("moduleInteraction", {
                                            module: {
                                                region: "",
                                                label: r,
                                                element: {
                                                    name: o,
                                                    label: "games-sale-banner"
                                                }
                                            },
                                            eventData: {
                                                pageType: "games-sale-banner",
                                                type: "tap"
                                            }
                                        });
                                    }, true);
                                });
                            })(), setTimeout(() => {
                                [...document.querySelectorAll(".js-hub-tracker")].forEach(e => {
                                    const t = e.dataset.trackHub,
                                        n = e.dataset.trackHubContext || null;
                                    e.addEventListener("click", () => {
                                        (0, r.d)(t, n);
                                    }, true);
                                });
                            }, 0);
                        },
                        s = e => {
                            let t = false,
                                n = -1;
                            const r = (0, o.rI)((0, a.iU)("nav-burger")),
                                l = (0, o.rI)((0, a.iU)("nav-drawer"));
                            if (!r || !l) return;
                            const s = [...l.querySelectorAll(".pz-nav-drawer__link"), ...l.querySelectorAll(".pz-nav__button")];
                            function c() {
                                t = true, r && l && ((0, o.cn)(l, "open"), (0, o.cn)(r, "active"), e || (0, i.ob)({
                                    name: (0, a.j0)(),
                                    label: "click-nav",
                                    context: null
                                }), (0, o.P$)(r, "aria-expanded", t.toString()), (0, o.P$)(l, "aria-hidden", (!t).toString()));
                            }
                            function u() {
                                t = false, r && l && ((0, o.IV)(l, "open"), (0, o.cn)(l, "closing"), setTimeout(() => {
                                    (0, o.IV)(l, "closing");
                                }, 500), (0, o.IV)(r, "active"), (0, o.P$)(r, "aria-expanded", t.toString()), (0, o.P$)(l, "aria-hidden", (!t).toString()));
                            }
                            (0, o.Oo)(r, "click", () => {
                                t ? u() : c(), r.blur();
                            }), (0, o.Oo)(r, "keydown", e => {
                                const {
                                    key: r,
                                    keyCode: a
                                } = e;
                                if ("Escape" !== r && "Esc" !== r) {
                                    if ("Enter" !== r && "Space" !== r && 32 !== a) return "ArrowDown" === r ? (e.preventDefault(), c(), n = 0, void s[n].focus()) : "ArrowUp" === r ? (e.preventDefault(), c(), n = s.length - 1, void s[n].focus()) : undefined;
                                    t ? u() : (c(), n = 0, s[n].focus());
                                } else u();
                            }), (0, o.Oo)(l, "keydown", e => {
                                const {
                                    key: t
                                } = e;
                                "Escape" !== t && "Esc" !== t || (u(), r.focus());
                            }), (0, o.rI)((0, a.iU)("logo-nav")).addEventListener("click", () => {
                                var t;
                                const n = {
                                    eventData: {
                                        pagetype: "game",
                                        trigger: "module",
                                        type: "click"
                                    },
                                    module: {
                                        name: "click",
                                        context: "",
                                        element: {
                                            name: null !== (t = window) && undefined !== t && null !== (t = t.location) && undefined !== t && t.pathname.startsWith("/puzzles/leaderboards") ? "your-leaderboard" : (0, a.j0)(),
                                            label: "games-logo"
                                        }
                                    }
                                };
                                e || (0, i.j)("moduleInteraction", n);
                            });
                            const d = document.querySelector("#js-nav-actions"),
                                p = null == d ? undefined : d.querySelectorAll("a.js-nav-subscribe")[0],
                                m = null == d ? undefined : d.querySelectorAll("a.js-nav-login")[0];
                            null == p || p.addEventListener("click", () => {
                                const t = (0, a.j0)();
                                e || (0, i.j)("moduleInteraction", {
                                    eventData: {
                                        pagetype: "game",
                                        trigger: "module",
                                        type: "ob_click"
                                    },
                                    module: {
                                        element: {
                                            name: t,
                                            label: "subscribe-header"
                                        }
                                    }
                                });
                            }), null == m || m.addEventListener("click", () => {
                                const t = (0, a.j0)();
                                e || (0, i.j)("moduleInteraction", {
                                    eventData: {
                                        pagetype: "game",
                                        trigger: "module",
                                        type: "ob_click"
                                    },
                                    module: {
                                        element: {
                                            name: t,
                                            label: "log-in-header"
                                        }
                                    }
                                });
                            });
                        },
                        c = (0, a.iU)("global-nav"),
                        u = (0, a.iU)("mobile-toolbar"),
                        d = "show-mobile-toolbar",
                        p = (document.querySelector(".pz-header"), (() => {
                            const e = (0, o.rI)(c),
                                t = (0, o.rI)(u);
                            let n = false;
                            return {
                                create(e) {
                                    (0, o.y5)(t, (e => e.map(e => e instanceof HTMLElement ? e : (e => {
                                        let t;
                                        const n = {
                                            class: "pz-mobile-nav__toolbar-item"
                                        };
                                        switch ("text" === e.type && e.id && (n.id = e.id), e.type) {
                                        case "button":
                                            t = "button", n.onClick = e.action;
                                            break;
                                        case "navigation":
                                            t = "a", n.href = e.url, n.target = window.isHybridWebView ? "_self" : "_blank", n.rel = "noreferrer", e.action && (n.onClick = e.action);
                                            break;
                                        default:
                                            t = "span", n.onClick = e.action;
                                        }
                                        const r = (0, o.dS)(t, n, e.value);
                                        if (e.icon) {
                                            const t = (0, o.dS)("i", {
                                                class: "pz-toolbar-icon ".concat(e.icon)
                                            });
                                            (0, o.jG)(r, t);
                                        }
                                        return r;
                                    })(e)))(e));
                                },
                                activate() {
                                    n || (n = true, (0, o.cn)(e, d));
                                },
                                deactivate() {
                                    n && (n = false, (0, o.IV)(e, d));
                                }
                            };
                        })());
                },
                41586: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        $g: function () {
                            return h;
                        },
                        Sv: function () {
                            return y;
                        },
                        U9: function () {
                            return _;
                        },
                        hX: function () {
                            return g;
                        },
                        j: function () {
                            return b;
                        },
                        ob: function () {
                            return w;
                        }
                    });
                    var r = n(26633),
                        a = n(48198),
                        o = n(10431),
                        i = n(22042),
                        l = n(12058),
                        s = n(93251);
                    function c(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    function u(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(n), true).forEach(function (t) {
                                var r, a, o, i;
                                r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (undefined !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r) return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return String(e);
                                }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : r[a] = o;
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }
                    const d = "dataLayer",
                        p = "games-crosswords";
                    a.win[d] = a.win[d] || [], window.isHybridWebView || a.win[d].push({
                        event: "gtm.js",
                        "gtm.start": (0, i.zO)()
                    });
                    const m = (0, o.R2)("link[rel=canonical]"),
                        f = m ? m.href : a.JU.location.href,
                        b = (e, t) => {
                            if (undefined !== typeof window)
                                if (window.isHybridWebView && window.NativeBridge) {
                                    const n = "moduleInteraction" === e ? "interaction" : e;
                                    if ("heartbeat" === n) return;
                                    window.NativeBridge.sendAnalytic(n, t);
                                } else a.win[d].push(u({
                                    event: e
                                }, t)), (e => {
                                    var t, n;
                                    if (!i.l1) return null;
                                    switch (e) {
                                    case "impression":
                                    case "moduleInteraction":
                                        null === (t = (n = window).nyt_et) || undefined === t || t.call(n, {
                                            subject: "page_update",
                                            fastly_headers: {
                                                b2b: "delta"
                                            }
                                        });
                                    }
                                })(e);
                        };
                    window.foundationTrack = b;
                    const h = (e, t, n, r, a, o, i) => {
                            const l = {
                                module: u({
                                    name: e,
                                    context: t,
                                    region: i || "",
                                    element: {
                                        name: n || "",
                                        label: "string" == typeof r ? r : JSON.stringify(r)
                                    }
                                }, a && {
                                    label: a
                                }),
                                eventData: {
                                    pageType: "game",
                                    type: o ? "ob_click" : "click",
                                    trigger: "module",
                                    status: ""
                                }
                            };
                            b("moduleInteraction", l);
                        },
                        g = (e, t, n, r) => {
                            b("impression", {
                                module: {
                                    name: e,
                                    context: r,
                                    region: t || "",
                                    label: n
                                }
                            });
                        },
                        v = (0, i.y5)(() => {
                            if (window.isHybridWebView) return null;
                            const e = (0, i.B2)({
                                    sourceApp: p,
                                    referrer: a.JU.referrer,
                                    assetUrl: f,
                                    caller_id: p
                                }),
                                t = "".concat(i.OB.tagx, "/svc/nyt/data-layer").concat(e);
                            return s.B.get(t);
                        }),
                        y = () => {
                            v.initialize();
                            const e = e => {
                                e && b("userDataReady", e), b("pageDataReady", {
                                    application: {
                                        name: p,
                                        environment: i.OB.name
                                    },
                                    asset: {
                                        url: f
                                    },
                                    pageview: {
                                        id: l.Z.current
                                    }
                                }), (() => {
                                    const e = (0, i.zO)();
                                    setInterval(() => {
                                        a.JU.hasFocus() && b("heartbeat", {
                                            pageview: {
                                                heartbeat: {
                                                    timeSincePageDataReady: (0, i.zO)() - e,
                                                    heartbeatInterval: 5e3
                                                }
                                            }
                                        });
                                    }, 5e3);
                                })();
                            };
                            v.get().then(e).catch(() => e());
                        },
                        w = e => {
                            let {
                                name: t,
                                label: n,
                                context: r,
                                element: a = null,
                                useBeacon: o = false,
                                medium: i = null,
                                source: l = null,
                                region: s = null,
                                moduleName: c = null,
                                moduleLabel: u = null
                            } = e;
                            "undefined" != typeof window && b("moduleInteraction", {
                                eventData: {
                                    pagetype: "game",
                                    trigger: "module",
                                    type: o ? "ob_click" : "click"
                                },
                                module: {
                                    type: "click",
                                    element: a || {
                                        name: t,
                                        label: n
                                    },
                                    context: r,
                                    label: u || n,
                                    medium: i,
                                    source: l,
                                    region: s,
                                    name: c
                                }
                            });
                        },
                        E = e => {
                            let {
                                name: t,
                                delta: n,
                                id: r
                            } = e;
                            const a = {
                                eventAction: "Web Vitals",
                                eventLabel: r,
                                pageview: {
                                    performance: {
                                        [t.toLowerCase()]: Math.round("CLS" === t ? 1e3 * n : n)
                                    }
                                }
                            };
                            b("performance", a);
                        },
                        _ = () => {
                            (0, r.mw)(E), (0, r.Fu)(E), (0, r.NO)(E), (0, r.Yn)(E);
                        };
                },
                54988: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        Bj: function () {
                            return a;
                        },
                        Gk: function () {
                            return r;
                        }
                    });
                    const r = new Date("06/10/2024 10:00:00 GMT-0400"),
                        a = (r.getTime(), new Date("07/22/2024 12:00:00 GMT-0400")),
                        o = (a.getTime(), new Date("06/24/2024 10:00:00 GMT-0400")),
                        i = new Date("07/08/2024 10:00:00 GMT-0400"),
                        l = new Date("07/18/2024 10:00:00 GMT-0400"),
                        s = new Date("07/20/2024 10:00:00 GMT-0400"),
                        c = new Date("07/21/2024 10:00:00 GMT-0400");
                    new Date("07/21/2024 18:00:00 GMT-0400").getTime(), c.getTime(), s.getTime(), l.getTime(), i.getTime(), o.getTime(), r.getTime();
                },
                83910: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        e_: function () {
                            return s;
                        },
                        iM: function () {
                            return c;
                        }
                    });
                    var r = n(42101);
                    function a(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), n.push.apply(n, r);
                        }
                        return n;
                    }
                    const o = function (e) {
                            let t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
                            try {
                                const n = window.localStorage.getItem(e);
                                return n ? JSON.parse(n) : t;
                            } catch (e) {
                                return console.error(e), t;
                            }
                        },
                        i = (e, t) => {
                            try {
                                return window.localStorage.setItem(e, JSON.stringify(t)), true;
                            } catch (e) {
                                return console.error(e), false;
                            }
                        },
                        l = (e, t, n) => {
                            const r = "games-".concat(t ? "settings" : "state");
                            return "".concat(r, "-").concat(e, "/").concat(n || "ANON");
                        },
                        s = function (e, t) {
                            let n = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
                            const i = e.selectPuzzleIdOrSettings(t),
                                s = (0, r.X)(e, t),
                                c = n ? undefined : (0, r.Mc)(e, t),
                                u = ((e, t, n, r) => {
                                    const a = l(e, n, r),
                                        i = o(a);
                                    return (null == i ? undefined : i.states.find(e => e.puzzleId === t)) || null;
                                })(e.game, i, s, c);
                            return u ? function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? a(Object(n), true).forEach(function (t) {
                                        var r, a, o, i;
                                        r = e, a = t, o = n[t], (a = "symbol" == typeof (i = function (e, t) {
                                            if ("object" != typeof e || !e) return e;
                                            var n = e[Symbol.toPrimitive];
                                            if (undefined !== n) {
                                                var r = n.call(e, "string");
                                                if ("object" != typeof r) return r;
                                                throw new TypeError("@@toPrimitive must return a primitive value.");
                                            }
                                            return String(e);
                                        }(a)) ? i : i + "") in r ? Object.defineProperty(r, a, {
                                            value: o,
                                            enumerable: true,
                                            configurable: true,
                                            writable: true
                                        }) : r[a] = o;
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                    });
                                }
                                return e;
                            }({
                                schemaVersion: u.schemaVersion,
                                timestamp: u.timestamp
                            }, u.data) : null;
                        },
                        c = (e, t) => (n, a) => {
                            const s = t.maxLocalStorageSize || 1,
                                c = (0, r.Mc)(t, a()),
                                u = (0, r.X)(t, a()),
                                d = l(t.game, u, c),
                                {
                                    states: p
                                } = o(d) || {
                                    states: []
                                };
                            if (p.find(t => t.puzzleId === e.puzzleId)) {
                                const t = {
                                    states: p.map(t => t.puzzleId === e.puzzleId ? e : t)
                                };
                                return i(d, t), null;
                            }
                            if (p.length >= s) {
                                const t = p.sort((e, t) => e.timestamp - t.timestamp)[0],
                                    n = {
                                        states: p.map(n => n.puzzleId === t.puzzleId ? e : n)
                                    };
                                return i(d, n), t;
                            }
                            const m = {
                                states: [...p, e]
                            };
                            return i(d, m), null;
                        };
                },
                14237: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                        aF: function () {
                            return r.Z;
                        },
                        ns: function () {
                            return a.Z;
                        }
                    }), n(89526), n(73961), n(65489), n(43373), n(34797), n(29954), n(89385), n(46147);
                    var r = n(71687),
                        a = n(40679);
                },
                40679: function (e, t, n) {
                    "use strict";
                    var r = n(89526),
                        a = n(71687);
                    function o() {
                        return o = Object.assign ? Object.assign.bind() : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }, o.apply(this, arguments);
                    }
                    t.Z = e => t => {
                        const n = (0, a.Z)();
                        return r.createElement(e, o({
                            user: n
                        }, t));
                    };
                },
                49674: function (e) {
                    function t(e) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t;
                    }
                    t.keys = function () {
                        return [];
                    }, t.resolve = t, t.id = 49674, e.exports = t;
                }
            },
            n = {};
        function r(e) {
            var a = n[e];
            if (undefined !== a) return a.exports;
            var o = n[e] = {
                id: e,
                loaded: false,
                exports: {}
            };
            return t[e].call(o.exports, o, o.exports, r), o.loaded = true, o.exports;
        }
        r.m = t, e = [], r.O = function (t, n, a, o) {
                if (!n) {
                    var i = Infinity;
                    for (u = 0; u < e.length; u++) {
                        n = e[u][0], a = e[u][1], o = e[u][2];
                        for (var l = true, s = 0; s < n.length; s++)(false & o || i >= o) && Object.keys(r.O).every(function (e) {
                            return r.O[e](n[s]);
                        }) ? n.splice(s--, 1) : (l = false, o < i && (i = o));
                        if (l) {
                            e.splice(u--, 1);
                            var c = a();
                            undefined !== c && (t = c);
                        }
                    }
                    return t;
                }
                o = o || 0;
                for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
                e[u] = [n, a, o];
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return r.d(t, {
                    a: t
                }), t;
            }, r.d = function (e, t) {
                for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: true,
                    get: t[n]
                });
            }, r.g = function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (e) {
                    if ("object" == typeof window) return window;
                }
            }(), r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, r.nmd = function (e) {
                return e.paths = [], e.children || (e.children = []), e;
            },
            function () {
                var e = {
                    630: 0,
                    3649: 0
                };
                r.O.j = function (t) {
                    return 0 === e[t];
                };
                var t = function (t, n) {
                        var a, o, i = n[0],
                            l = n[1],
                            s = n[2],
                            c = 0;
                        if (i.some(function (t) {
                                return 0 !== e[t];
                            })) {
                            for (a in l) r.o(l, a) && (r.m[a] = l[a]);
                            if (s) var u = s(r);
                        }
                        for (t && t(n); c < i.length; c++) o = i[c], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                        return r.O(u);
                    },
                    n = self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || [];
                n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
            }();
        var a = r.O(undefined, [7091, 8842, 73, 741, 7281, 5232, 1175, 1466, 8893, 8810, 7382, 7422, 6711, 7702, 6142, 2817], function () {
            return r(61320);
        });
        a = r.O(a);
    }();