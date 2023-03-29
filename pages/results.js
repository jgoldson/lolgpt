var __awaiter =
    (this && this.__awaiter) ||
    function (e, o, a, u) {
      return new (a = a || Promise)(function (i, t) {
        function n(e) {
          try {
            s(u.next(e));
          } catch (e) {
            t(e);
          }
        }
        function r(e) {
          try {
            s(u.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value) instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })
              ).then(n, r);
        }
        s((u = u.apply(e, o || [])).next());
      });
    },
  __generator =
    (this && this.__generator) ||
    function (i, n) {
      var r,
        s,
        o,
        e,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (e = { next: t(0), throw: t(1), return: t(2) }),
        "function" == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this;
          }),
        e
      );
      function t(t) {
        return function (e) {
          return (function (t) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((r = 1),
                  s &&
                    (o =
                      2 & t[0]
                        ? s.return
                        : t[0]
                        ? s.throw || ((o = s.return) && o.call(s), 0)
                        : s.next) &&
                    !(o = o.call(s, t[1])).done)
                )
                  return o;
                switch (((s = 0), o && (t = [2 & t[0], o.value]), t[0])) {
                  case 0:
                  case 1:
                    o = t;
                    break;
                  case 4:
                    return a.label++, { value: t[1], done: !1 };
                  case 5:
                    a.label++, (s = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = 0 < (o = a.trys).length && o[o.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === t[0] && (!o || (t[1] > o[0] && t[1] < o[3]))) {
                      a.label = t[1];
                      break;
                    }
                    if (6 === t[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = t);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(t);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                t = n.call(i, a);
              } catch (e) {
                (t = [6, e]), (s = 0);
              } finally {
                r = o = 0;
              }
            if (5 & t[0]) throw t[1];
            return { value: t[0] ? t[1] : void 0, done: !0 };
          })([t, e]);
        };
      }
    };
function GetQueueIdWhenRedirectedToTarget() {
  var e = window;
  return e.queueViewModel && e.queueViewModel.getIsRedirectedToTarget
    ? e.queueViewModel.getIsRedirectedToTarget()
      ? e.queueViewModel.getQueueId()
      : void 0
    : null;
}
!(function (e) {
  var t;
  (function (e) {
    var t =
      ((i.retry = function (i, e, n, r) {
        var s = 1,
          o = function () {
            return e(function (e, t) {
              t && s++ < i ? setTimeout(o, r(s, t)) : n(e, t);
            });
          };
        o();
      }),
      i);
    function i() {}
    e.RetryHelper = t;
    var n =
      ((r.isCookieEnabled = function () {
        if (navigator.cookieEnabled) return !0;
        document.cookie = "cookietest=1";
        var e = -1 != document.cookie.indexOf("cookietest=");
        return (
          (document.cookie =
            "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
          e
        );
      }),
      r);
    function r() {}
    e.CookieHelper = n;
    var s =
      ((o.prototype.logAjaxCallError = function (e, t, i, n, r, s) {
        void 0 === s && (s = null);
        var o = {
          AjaxErrorStatus: n,
          AjaxErrorThrown: r,
          HttpStatus: i.status,
        };
        window.logger.Error(
          { Page: t, Message: e, ResponseText: i.responseText, Ex: s },
          2075,
          this.eventId,
          this.customerId,
          "",
          o,
          i
        );
      }),
      o);
    function o(e, t) {
      (this.eventId = e), (this.customerId = t);
    }
    e.AjaxLogger = s;
    var a,
      u,
      l,
      c,
      h =
        ((d.prototype.getUserId = function () {
          return (
            this.userId ||
              (this.userId = $("#queue-it_log").attr("data-userid")),
            this.userId
          );
        }),
        (d.prototype.shouldLog = function (e) {
          return (
            null === e ||
            ((0 !== e.status || 0 !== e.readyState) &&
              503 !== e.status &&
              504 !== e.status)
          );
        }),
        (d.prototype.Log = function (e, t) {
          if ((void 0 === t && (t = null), this.shouldLog(t)))
            try {
              if (
                (console.info(
                  e.LogMessageInfo.Message +
                    (e.LogMessageInfo.Ex ? e.LogMessageInfo.Ex.message : "")
                ),
                !this.logContainer &&
                  ((this.logContainer = $("#queue-it_log")),
                  (this.userId = this.logContainer.attr("data-userid")),
                  (this.proxyUrl = this.logContainer.attr("data-proxyurl")),
                  (this.assemblyVersion = this.logContainer.attr(
                    "data-assemblyversion"
                  )),
                  !this.proxyUrl))
              )
                return;
              var i = {};
              e.LogMessageInfo.Ex &&
                e.LogMessageInfo.Ex.stack &&
                (i.StackTrace = e.LogMessageInfo.Ex.stack),
                e.LogMessageInfo.Ex &&
                  e.LogMessageInfo.Ex.message &&
                  (i.ErrorMessage = e.LogMessageInfo.Ex.message),
                e.LogMessageInfo.Message ||
                  (e.LogMessageInfo.Message = "Unexpected Error");
              var n = window.queueViewModel,
                r = e.CustomerId;
              !r && n && (r = n.customerId);
              var s = e.EventId;
              !s && n && (s = n.eventId);
              var o = e.QueueId;
              !o &&
                n &&
                n.queueId &&
                (o = $.isFunction(n.queueId) ? n.queueId() : n.queueId);
              var a = navigator ? navigator.userAgent : "";
              this.logToProxy({
                Id: e.Id,
                AssemblyVersion: this.assemblyVersion,
                QueueId: o,
                CustomerId: r,
                EventId: s,
                Message: e.LogMessageInfo.Message,
                Page: e.LogMessageInfo.Page,
                ResponseText: e.LogMessageInfo.ResponseText,
                Level: e.Level,
                Severity: e.Severity,
                Exception: i,
                UserId: this.userId,
                Service: "JavaScript(queuefront)",
                Url: window.location.href,
                UserAgent: a,
                PlatformInfo: window.getClientInfo(),
                Timestamp: new Date().toISOString(),
                CustomInfo: e.CustomInfo,
              });
            } catch (e) {
              console.debug(e);
            }
        }),
        (d.prototype.Critical = function (e, t, i, n, r, s, o) {
          void 0 === i && (i = ""),
            void 0 === n && (n = ""),
            void 0 === r && (r = ""),
            void 0 === s && (s = null),
            void 0 === o && (o = null),
            (t += 3e4),
            this.Log(
              {
                Id: t,
                LogMessageInfo: e,
                Severity: l[l.Critical],
                QueueId: r,
                CustomerId: n,
                EventId: i,
                CustomInfo: s,
                Level: a[a.Fatal],
              },
              o
            );
        }),
        (d.prototype.Error = function (e, t, i, n, r, s, o) {
          void 0 === i && (i = ""),
            void 0 === n && (n = ""),
            void 0 === r && (r = ""),
            void 0 === s && (s = null),
            void 0 === o && (o = null),
            (t += 3e4),
            this.Log(
              {
                Id: t,
                LogMessageInfo: e,
                Severity: l[l.Error],
                QueueId: r,
                CustomerId: n,
                EventId: i,
                CustomInfo: s,
                Level: a[a.Error],
              },
              o
            );
        }),
        (d.prototype.Warning = function (e, t, i, n, r, s, o) {
          void 0 === i && (i = ""),
            void 0 === n && (n = ""),
            void 0 === r && (r = ""),
            void 0 === s && (s = null),
            void 0 === o && (o = null),
            (t += 3e4),
            this.Log(
              {
                Id: t,
                LogMessageInfo: e,
                Severity: l[l.Warning],
                QueueId: r,
                CustomerId: n,
                EventId: i,
                CustomInfo: s,
                Level: a[a.Warning],
              },
              o
            );
        }),
        (d.prototype.Debug = function (e, t, i, n, r, s, o) {
          void 0 === i && (i = ""),
            void 0 === n && (n = ""),
            void 0 === r && (r = ""),
            void 0 === s && (s = null),
            void 0 === o && (o = null),
            (t += 2e4),
            this.Log(
              {
                Id: t,
                LogMessageInfo: e,
                Severity: l[l.Debug],
                QueueId: r,
                CustomerId: n,
                EventId: i,
                CustomInfo: s,
                Level: a[a.Debug],
              },
              o
            );
        }),
        (d.prototype.Business = function (e, t, i, n, r, s, o) {
          void 0 === i && (i = ""),
            void 0 === n && (n = ""),
            void 0 === r && (r = ""),
            void 0 === s && (s = null),
            void 0 === o && (o = null),
            (t += 1e4),
            this.Log(
              {
                Id: t,
                LogMessageInfo: e,
                Severity: l[l.Information],
                QueueId: r,
                CustomerId: n,
                EventId: i,
                CustomInfo: s,
                Level: a[a.Information],
              },
              o
            );
        }),
        (d.prototype.logToProxy = function (t) {
          try {
            var e = this.objectToQuery(t, "");
            $("head").append(
              '<script type="text/javascript" src="' +
                this.proxyUrl +
                "?" +
                e +
                '"></script>'
            );
          } catch (e) {
            window &&
              window.console &&
              "function" == typeof window.console.log &&
              (console.log(
                "Failed to log to datadog because of exception:\n" + e
              ),
              console.log("Failed log data:", t));
          }
        }),
        (d.prototype.objectToQuery = function (e, t) {
          var i = "";
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              if (!e[n]) continue;
              i && (i += "&"),
                "object" == typeof e[n]
                  ? (i += this.objectToQuery(e[n], n))
                  : (i +=
                      t +
                      n.substr(0, 1).toUpperCase() +
                      n.substr(1) +
                      "=" +
                      encodeURIComponent(e[n]));
            }
          return i;
        }),
        d);
    function d() {
      var r = window.onerror,
        i = console.warn,
        s = this;
      (console.warn = function (e) {
        if (e) {
          var t = new Error().stack;
          e.toString().startsWith("JQMIGRATE") &&
            s.Warning(
              {
                Message: e,
                Page: window.location.href,
                Ex: {
                  message: e + ", url: '" + window.location,
                  name: "Warning",
                  stack: t,
                },
              },
              2076
            ),
            i && "function" == typeof i && i.apply(window, arguments);
        }
      }),
        (window.onerror = function (e, t, i, n) {
          ("Script error." === e && !t) ||
            s.Critical(
              {
                Message: "Unhandled Exception in window.onerror",
                Ex: {
                  message: e + ", url: '" + t + "', line: " + i + ", col: " + n,
                  name: "UnhandledException",
                },
              },
              null,
              null,
              null
            ),
            r && "function" == typeof r && r.apply(window, arguments);
        });
    }
    (e.Logger = h),
      ((u = a = e.ErrorLevel || (e.ErrorLevel = {}))[(u.Fatal = 1)] = "Fatal"),
      (u[(u.Error = 2)] = "Error"),
      (u[(u.Warning = 4)] = "Warning"),
      (u[(u.Information = 8)] = "Information"),
      (u[(u.Debug = 16)] = "Debug"),
      ((c = l = e.ErrorSeverity || (e.ErrorSeverity = {}))[(c.Critical = 1)] =
        "Critical"),
      (c[(c.Error = 2)] = "Error"),
      (c[(c.Warning = 4)] = "Warning"),
      (c[(c.Information = 8)] = "Information"),
      (c[(c.Debug = 16)] = "Debug");
    var p,
      g,
      f =
        ((m.isWebPushSupported = function () {
          return "serviceWorker" in navigator && "PushManager" in window;
        }),
        (m.registerForPush = function (s) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, r;
            return __generator(this, function (e) {
              switch (e.label) {
                case 0:
                  if (!this.isWebPushSupported()) return [3, 14];
                  e.label = 1;
                case 1:
                  return (
                    e.trys.push([1, 12, , 13]),
                    [4, navigator.serviceWorker.register("serviceWorker.js")]
                  );
                case 2:
                  return e.sent(), [4, navigator.serviceWorker.ready];
                case 3:
                  (t = e.sent()), (e.label = 4);
                case 4:
                  return (
                    e.trys.push([4, 6, , 11]),
                    [4, m.getSubscriptionObject(t, s)]
                  );
                case 5:
                  return [2, e.sent()];
                case 6:
                  return (i = e.sent()), [4, t.pushManager.getSubscription()];
                case 7:
                  return (n = e.sent()) ? [4, n.unsubscribe()] : [3, 10];
                case 8:
                  return e.sent(), [4, m.getSubscriptionObject(t, s)];
                case 9:
                  return [2, e.sent()];
                case 10:
                  return console.log(i), [3, 11];
                case 11:
                  return [3, 13];
                case 12:
                  return (r = e.sent()), console.log(r), [3, 13];
                case 13:
                  return [3, 15];
                case 14:
                  console.log("Browser does not support Push Notification!"),
                    (e.label = 15);
                case 15:
                  return [2, null];
              }
            });
          });
        }),
        (m.urlBase64ToUint8Array = function (e) {
          for (
            var t = (e + "=".repeat((4 - (e.length % 4)) % 4))
                .replace(/\-/g, "+")
                .replace(/_/g, "/"),
              i = window.atob(t),
              n = new Uint8Array(i.length),
              r = 0;
            r < i.length;
            ++r
          )
            n[r] = i.charCodeAt(r);
          return n;
        }),
        (m.getSubscriptionObject = function (n, r) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i;
            return __generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    n.pushManager.subscribe({
                      userVisibleOnly: !0,
                      applicationServerKey: m.urlBase64ToUint8Array(r),
                    }),
                  ];
                case 1:
                  return (
                    (t = e.sent()),
                    (i = JSON.parse(JSON.stringify(t))),
                    console.log(t),
                    [
                      2,
                      {
                        Endpoint: i.endpoint,
                        P256DH: i.keys.p256dh,
                        Auth: i.keys.auth,
                        PublicKey: r,
                      },
                    ]
                  );
              }
            });
          });
        }),
        m);
    function m() {}
    (e.PushSubscriptionManager = f),
      (window.logger = new h()),
      ((g = p = e.KeyCode || (e.KeyCode = {}))[(g.Tab = 9)] = "Tab"),
      (g[(g.Enter = 13)] = "Enter"),
      (g[(g.Shift = 16)] = "Shift"),
      (g[(g.Escape = 27)] = "Escape"),
      (g[(g.ArrowLeft = 37)] = "ArrowLeft"),
      (g[(g.ArrowUp = 38)] = "ArrowUp"),
      (g[(g.ArrowRight = 39)] = "ArrowRight"),
      (g[(g.ArrowDown = 40)] = "ArrowDown"),
      (g[(g.PageUp = 33)] = "PageUp"),
      (g[(g.PageDown = 34)] = "PageDown"),
      (g[(g.End = 35)] = "End"),
      (g[(g.Home = 36)] = "Home"),
      (g[(g.Alt = 18)] = "Alt");
    var y =
      ((v.focusTrapperArray = new Array()),
      (v.addFocusTrapper = function (e, t, i, n) {
        return (
          void 0 === i && (i = null),
          void 0 === n && (n = null),
          v.focusTrapperArray.push(new v(e, t, i))
        );
      }),
      v);
    function v(e, t, i, n) {
      void 0 === i && (i = null), void 0 === n && (n = null);
      var r = this;
      (this.handleActive = function () {
        r.initialFocusedElement = $(":focus");
        var e = $(r.modalContainerSelector).find(r.tabbableElements);
        (r.keysPressed = r.resetKeysPressed()),
          r.setFocusOnLastElement(e),
          $(window).on("keydown", r.closeModalWithEscapeKey),
          $(window).on("keydown", { elements: e }, r.limitTabToModal),
          $(window).on(
            "keyup",
            { elements: e },
            r.registerFocusOnFirstAndLastElementInModal
          );
      }),
        (this.handleInactive = function () {
          $(r.initialFocusedElement).focus(),
            $(window).off("keydown", r.closeModalWithEscapeKey),
            $(window).off("keydown", r.limitTabToModal),
            $(window).off("keyup", r.registerFocusOnFirstAndLastElementInModal);
        }),
        (this.limitTabToModal = function (e) {
          if (e.keyCode !== p.Tab && e.keyCode !== p.Shift)
            return e.keyCode === p.Enter &&
              e.target.className === r.modalCloseButtonClass
              ? void e.preventDefault()
              : void 0;
          (r.keysPressed[e.keyCode] = !0),
            1 === e.data.elements.length && r.keysPressed[p.Tab]
              ? (e.preventDefault(), e.data.elements.first().focus())
              : r.keysPressed[p.Tab] &&
                r.keysPressed[p.Shift] &&
                r.isFirstElement
              ? (e.preventDefault(), e.data.elements.last().focus())
              : r.keysPressed[p.Tab] &&
                !r.keysPressed[p.Shift] &&
                r.isLastElement &&
                (e.preventDefault(), e.data.elements.first().focus());
        }),
        (this.registerFocusOnFirstAndLastElementInModal = function (e) {
          (e.keyCode !== p.Tab && e.keyCode !== p.Shift) ||
            ((r.keysPressed[e.keyCode] = !1),
            e.data.elements.first().is(":focus")
              ? ((r.isFirstElement = !0), (r.isLastElement = !1))
              : e.data.elements.last().is(":focus")
              ? ((r.isFirstElement = !1), (r.isLastElement = !0))
              : ((r.isFirstElement = !1), (r.isLastElement = !1)));
        }),
        (this.closeModalWithEscapeKey = function (e) {
          e.keyCode === p.Escape && r.isModalVisible(!1);
        }),
        (this.setFocusOnLastElement = function (e) {
          (r.isFirstElement = !1),
            (r.isLastElement = !0),
            setTimeout(function () {
              return e.last().focus();
            });
        }),
        (this.resetKeysPressed = function () {
          return { 9: !1, 16: !1 };
        }),
        (this.isModalVisible = t),
        (this.tabbableElements = null != i ? i : "input, [tabindex=0], button"),
        (this.modalContainerSelector = e),
        (this.modalCloseButtonClass = null != n ? n : "btn-close"),
        this.isModalVisible.subscribe(function (e) {
          return e ? r.handleActive() : r.handleInactive();
        });
    }
    e.FocusTrapper = y;
  })((t = e.Queue || (e.Queue = {})).Helpers || (t.Helpers = {}));
})((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n() {}
    (t = e.Tools || (e.Tools = {})),
      (n.prototype.getCookie = function (e) {
        var t = ("; " + document.cookie).split("; " + e + "=");
        if (2 == t.length) return t.pop().split(";").shift();
      }),
      (i = n),
      (t.CookieUtil = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    function t() {
      var o = this;
      (this.post = function (e, t, i, n, r) {
        var s = !0;
        null != r && r && (s = !1),
          $.ajax({
            type: "POST",
            url: e,
            async: s,
            data: o.serialize(t),
            success: function (e) {
              i(e);
            },
            error: function (e, t, i) {
              n(e, t, i);
            },
            dataType: "json",
            contentType: "application/json",
          });
      }),
        (this.get = function (e, t, i) {
          $.ajax({
            type: "GET",
            url: e,
            success: function (e) {
              t(e);
            },
            error: function (e) {
              i(e);
            },
            dataType: "json",
            contentType: "application/json",
          });
        }),
        (this.serialize = function (e) {
          return JSON.stringify(e);
        });
    }
    (e.Tools || (e.Tools = {})).HttpUtil = t;
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n() {}
    (t = e.Tools || (e.Tools = {})),
      (n.prototype.padRight = function (e, t) {
        return this.pad(e, t, !1);
      }),
      (n.prototype.padLeft = function (e, t) {
        return this.pad(e, t, !0);
      }),
      (n.prototype.pad = function (e, t, i) {
        return void 0 === t
          ? e
          : i
          ? (e + t).slice(-e.length)
          : (t + e).substring(0, e.length);
      }),
      (i = n),
      (t.StringUtil = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    !(function (e) {
      var f =
        ((t.prototype.isEnqueueTokenError = function () {
          return (
            this.response.invalidQueueitEnqueueToken ||
            this.response.missingCustomDataKey ||
            this.response.customDataUniqueKeyViolation
          );
        }),
        (t.prototype.getErrorCode = function () {
          return this.response.invalidQueueitEnqueueToken
            ? 9
            : this.response.missingCustomDataKey
            ? 10
            : this.response.customDataUniqueKeyViolation
            ? 11
            : void 0;
        }),
        t);
      function t(e) {
        this.response = e;
      }
      e.EnqueueError = f;
      var m = function (e) {
        this.ajaxError = e;
      };
      e.EnqueueAjaxError = m;
      var y = function (e) {
        this.ajaxError = e;
      };
      e.EnqueueServerBusyError = y;
      var i =
        ((n.prototype.tryToEnqueue = function (i, n, r, s, o, a, u) {
          return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    $.ajax({
                      type: "POST",
                      dataType: "json",
                      contentType: "application/json",
                      data: JSON.stringify({
                        challengeSessions: n,
                        layoutName: r,
                        customUrlParams: s,
                        targetUrl: o,
                        CustomDataEnqueue: a,
                        QueueitEnqueueToken: u,
                        Referrer: document.referrer,
                      }),
                      url: i,
                      headers: {
                        "x-queueit-qpage-referral": document.referrer,
                      },
                    }),
                  ];
                case 1:
                  if ((t = e.sent()).serverIsBusy)
                    throw new y({
                      Message: "Server is busy",
                      AjaxErrorLog: null,
                      JqXHR: null,
                    });
                  return [2, t];
              }
            });
          });
        }),
        (n.prototype.enqueue = function (a, u, l, c, h, d, p, g) {
          return __awaiter(this, void 0, void 0, function () {
            var t,
              i,
              n,
              r,
              s,
              o = this;
            return __generator(this, function (e) {
              switch (e.label) {
                case 0:
                  (t = function (t) {
                    return polly()
                      .waitAndRetry([
                        400, 800, 1300, 1900, 2600, 3400, 4300, 5300, 6400,
                        7600,
                      ])
                      .executeForPromise(function () {
                        return __awaiter(o, void 0, void 0, function () {
                          return __generator(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return [
                                  4,
                                  this.tryToEnqueue(t, a, u, l, c, p, g),
                                ];
                              case 1:
                                return [2, e.sent()];
                            }
                          });
                        });
                      });
                  }),
                    (i =
                      "spa-api/queue/" +
                      this.customerId +
                      "/" +
                      this.eventId +
                      "/enqueue?cid=" +
                      (h || "")),
                    d && (i = i + "&scv=" + d),
                    (e.label = 1);
                case 1:
                  return e.trys.push([1, 3, , 4]), [4, t(i)];
                case 2:
                  return (n = e.sent()), [3, 4];
                case 3:
                  throw (
                    ((r = e.sent()),
                    (s = r) instanceof y
                      ? r
                      : new m({
                          Message: "Unable to enqueue",
                          AjaxErrorLog: {
                            HttpStatus: s.status,
                            AjaxErrorStatus: s.statusText,
                            AjaxErrorThrown: s.responseText,
                          },
                          JqXHR: s,
                        }))
                  );
                case 4:
                  if (n.challengeFailed) throw new f(n);
                  if (n.redirectUrl) return [2, n];
                  if (n.queueId) return [2, n];
                  throw new f(n);
              }
            });
          });
        }),
        n);
      function n(e, t) {
        (this.customerId = e), (this.eventId = t);
      }
      e.Enqueuer = i;
    })(e.Queue || (e.Queue = {}));
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n(e, t) {
      var i = this;
      (this.inQueueView = e),
        (this.initialInqueueInfo = t),
        (this.updateEmailBtnSelector = "#aUpdateEmail"),
        (this.btnDisabledClass = "btn-disabled"),
        (this.inQueueVM = e),
        (this.inqueueInfo = t),
        (this.queueNumberVisibleByLayout = e.layout.queueNumberVisible()),
        (this.usersAheadVisibleByLayout =
          e.layout.usersInLineAheadOfYouVisible()),
        (this.relativeTimeVisibleByLayout = e.layout.whichIsInVisible()),
        (this.absoluteTimeVisibleByLayout =
          e.layout.expectedServiceTimeVisible()),
        (this.dynamicMessageVisibleByLayout = e.layout.dynamicMessageVisible()),
        (this.reminderFormVisibleByLayout = e.layout.reminderVisible()),
        (this.connectionLost = ko.observable(!1)),
        this.connectionLost.subscribe(function () {
          return i.connectionLostChange();
        }),
        (this.javascriptDisabled = ko.observable()),
        this.javascriptDisabled.subscribe(function () {
          return i.javascriptDisabledChange();
        }),
        (this.queuePaused = ko.observable(!1)),
        this.queuePaused.subscribe(function () {
          return i.queuePausedChange();
        }),
        (this.firstInLine = ko.observable(!1)),
        this.firstInLine.subscribe(function () {
          return i.firstInLineChange();
        }),
        (this.serviceSoon = ko.observable(!1)),
        this.serviceSoon.subscribe(function () {
          return i.serviceSoonChange();
        }),
        (this.redirectModal = this.inQueueVM.showConfirmRedirectDialog),
        this.redirectModal.subscribe(function () {
          return i.redirectModalChange();
        }),
        (this.hideDynamicMessage = ko.observable()),
        this.hideDynamicMessage.subscribe(function () {
          return i.hideDynamicMessageChange();
        }),
        (this.reminderEmailStatus = ko.observable()),
        this.reminderEmailStatus.subscribe(function () {
          return i.reminderEmailStatusChange();
        });
    }
    (t = e.Queue || (e.Queue = {})),
      (n.prototype.connectionLostChange = function () {
        this.inQueueVM.isRunning(!this.inQueueVM.isRunning());
      }),
      (n.prototype.javascriptDisabledChange = function () {
        $("#noscript").toggle(), $("#wrapper").toggle();
      }),
      (n.prototype.queuePausedChange = function () {
        this.redirectModal() && this.redirectModal(!1),
          (this.inqueueInfo.layout.queueIsPausedVisible =
            !this.inqueueInfo.layout.queueIsPausedVisible),
          this.absoluteTimeVisibleByLayout &&
            (this.inqueueInfo.layout.expectedServiceTimeVisible =
              !this.inqueueInfo.layout.expectedServiceTimeVisible),
          this.relativeTimeVisibleByLayout &&
            (this.inqueueInfo.layout.whichIsInVisible =
              !this.inqueueInfo.layout.whichIsInVisible),
          this.inQueueVM.refresh(this.inqueueInfo);
      }),
      (n.prototype.firstInLineChange = function () {
        this.serviceSoon() && this.serviceSoon(!1),
          this.usersAheadVisibleByLayout &&
            (this.inqueueInfo.layout.usersInLineAheadOfYouVisible =
              !this.inqueueInfo.layout.usersInLineAheadOfYouVisible),
          (this.inqueueInfo.layout.firstInLineVisible =
            !this.inqueueInfo.layout.firstInLineVisible),
          this.inQueueVM.refresh(this.inqueueInfo);
      }),
      (n.prototype.serviceSoonChange = function () {
        this.absoluteTimeVisibleByLayout &&
          (this.inqueueInfo.layout.expectedServiceTimeVisible =
            !this.inqueueInfo.layout.expectedServiceTimeVisible),
          this.relativeTimeVisibleByLayout &&
            (this.inqueueInfo.layout.whichIsInVisible =
              !this.inqueueInfo.layout.whichIsInVisible),
          this.inQueueVM.refresh(this.inqueueInfo),
          this.serviceSoon() && this.inQueueVM.layout.servicedSoonVisible(!0);
      }),
      (n.prototype.redirectModalChange = function () {
        if (this.redirectModal()) {
          var e = new Date();
          this.inQueueVM.ticket.windowStartTime(
            e.getHours() + (e.getMinutes() < 10 ? ":0" : ":") + e.getMinutes()
          );
        }
      }),
      (n.prototype.hideDynamicMessageChange = function () {
        this.dynamicMessageVisibleByLayout &&
          ((this.inqueueInfo.layout.dynamicMessageVisible =
            !this.inqueueInfo.layout.dynamicMessageVisible),
          this.inQueueVM.refresh(this.inqueueInfo));
      }),
      (n.prototype.reminderEmailStatusChange = function () {
        "success" == this.reminderEmailStatus()
          ? (this.inQueueVM.notifyEmailUpdateResult(
              "We will send you an e-mail containing a link to your place in the queue, and another e-mail when it is time for you to return to the queue. E-mails may be delayed, moved to your spam folder, or lost due to reasons beyond our control, so we recommend that you check your status in the queue frequently.",
              "Success"
            ),
            $(this.updateEmailBtnSelector).addClass(this.btnDisabledClass))
          : ($(this.updateEmailBtnSelector).removeClass(this.btnDisabledClass),
            this.inQueueVM.notifyEmailUpdateResult(
              "Error subscribing",
              "Error"
            ));
      }),
      (n.prototype.hideReminderStatusMessage = function () {
        this.reminderEmailStatus(""),
          $("#divEmailStatusFrame").hide(),
          $(this.updateEmailBtnSelector).removeClass(this.btnDisabledClass);
      }),
      (n.prototype.simulateBeforeToQueueTransition = function () {
        $("#defaultCountdown").countdown("option", { until: 2 }),
          $("#MainPart_pProgressbarBox_Holder_Larger").hide(),
          setTimeout(function () {
            $("#MainPart_pProgressbarBox_Holder_Larger").show();
          }, 5e3);
      }),
      (n.prototype.minimizeWindow = function () {
        $("#PreviewQueueStatesDiv").toggleClass("min");
      }),
      (i = n),
      (t.PreviewQueueStateVM = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n(e) {
      (this.options = e),
        (this.isActive = ko.observable(!1)),
        (this.logger = new t.Helpers.AjaxLogger(e.eventId, e.customerId)),
        (this.isBeforeOrIdle = e.isBeforeOrIdle),
        (this.isPreview = e.isPreview),
        (this.updateFraudProtectionInterval = 6e4),
        (this.challengeSolveTimeoutInterval = 3e5),
        (this.challengeRedirectUrls = new t.ChallengeRedirectUrls(
          this.options
        ));
    }
    (t = e.Queue || (e.Queue = {})),
      (n.prototype.init = function (e) {
        void 0 === e && (e = !1),
          this.isPreview ||
            (e &&
              ((this.updateFraudProtectionInterval = 6e5),
              (this.challengeSolveTimeoutInterval = 6e5)),
            this.setActive(),
            this.startFraudProtectionCheck());
      }),
      (n.prototype.setActive = function () {
        this.isActive(!0);
      }),
      (n.prototype.setInactive = function () {
        this.isActive(!1);
      }),
      (n.prototype.startFraudProtectionCheck = function () {
        this.isActive() &&
          (this.updateFraudProtectionTimer(), this.updateChallengeSolveTimer());
      }),
      (n.prototype.updateFraudProtectionTimer = function () {
        var e = this;
        setTimeout(function () {
          e.getFraudProtectionStatus();
        }, this.updateFraudProtectionInterval);
      }),
      (n.prototype.updateChallengeSolveTimer = function () {
        var e = this;
        setTimeout(function () {
          e.challengeSolveTimeout();
        }, this.challengeSolveTimeoutInterval);
      }),
      (n.prototype.getFraudProtectionStatus = function () {
        var r = this;
        if (this.isActive()) {
          var e =
            "/spa-api/fraudprotection/status?c=" +
            this.options.customerId +
            "&e=" +
            this.options.eventId;
          $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            url: e,
            success: function (e) {
              e && e.redirectUrl
                ? (document.location.href = e.redirectUrl)
                : ((r.isInErrorState = !1),
                  (r.updateFraudProtectionInterval = 6e4),
                  r.updateFraudProtectionTimer());
            },
            error: function (e, t, i) {
              r.isInErrorState = !0;
              var n = e.status + " status code received on ";
              r.isBeforeOrIdle
                ? (n += "before/idle page")
                : (n += "queue page"),
                r.logger.logAjaxCallError(
                  "Error getting fraud protection status",
                  "FraudProtection",
                  e,
                  t,
                  i,
                  { message: n, name: "FraudprotectionGetStatusError" }
                ),
                !e ||
                  (503 !== e.status && 504 !== e.status) ||
                  ((r.updateFraudProtectionInterval *= 1.25),
                  12e4 < r.updateFraudProtectionInterval &&
                    (r.updateFraudProtectionInterval = 12e4)),
                r.updateFraudProtectionTimer();
            },
          });
        }
      }),
      (n.prototype.challengeSolveTimeout = function () {
        this.isActive() &&
          (this.isInErrorState ||
            (document.location.href =
              this.challengeRedirectUrls.getTimeoutRedirectUrl()));
      }),
      (i = n),
      (t.FraudProtection = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var d, t;
    function i(e, t, i, n) {
      void 0 === i && (i = "three-bar-loader-container"),
        void 0 === n && (n = "hidden"),
        (this.options = e),
        (this.userId = t),
        (this.animationElementId = i),
        (this.cssHiddenClass = n),
        (this.challengeRunSequence = []),
        (this.hasInitializedChallengeRunners = !1),
        (this.challengeVerifier = new d.ChallengeVerifier(
          e.customerId,
          e.eventId,
          e.challengeVerifyEndpoint
        )),
        (this.fraudProtection = new d.FraudProtection(this.options));
    }
    (d = e.Queue || (e.Queue = {})),
      (i.prototype.init = function () {
        this.fraudProtection.init(
          this.options.showInviteOnlyEmailVerificationChallenge
        ),
          this.initRunSequence();
      }),
      (i.prototype.initRunSequence = function () {
        for (var e = 0, t = this.options.challenges; e < t.length; e++) {
          var i = t[e];
          switch (i.name) {
            case d.ChallengeType.Recaptcha:
              this.challengeRunSequence.push(
                new d.RecaptchaRun(
                  i.hasAnimation,
                  this.options,
                  d.RecaptchaType.Normal
                )
              );
              break;
            case d.ChallengeType.RecaptchaInvisible:
              this.challengeRunSequence.push(
                new d.RecaptchaRun(
                  i.hasAnimation,
                  this.options,
                  d.RecaptchaType.Invisible
                )
              );
              break;
            case d.ChallengeType.ProofOfWork:
              this.challengeRunSequence.push(
                new d.ProofOfWorkRun(i.hasAnimation, this.options, this.userId)
              );
              break;
            case d.ChallengeType.BotDetect:
              this.challengeRunSequence.push(
                new d.BotDetectRun(i.hasAnimation, this.options, this.userId)
              );
              break;
            case d.ChallengeType.InviteOnlyEmailVerification:
              this.challengeRunSequence.push(
                new d.InviteOnlyEmailVerificationChallengeRun(
                  i.hasAnimation,
                  this.options
                )
              );
              break;
            default:
              var n = new Error(
                "Challenge type ".concat(i.name, " is not defined")
              );
              throw (
                (window.logger.Error(
                  {
                    Message: "Challenge type not supported",
                    Ex: n,
                    Page: "InqueuePage",
                  },
                  2050,
                  this.options.eventId,
                  this.options.customerId,
                  this.options.queueId || ""
                ),
                n)
              );
          }
        }
      }),
      (i.prototype.isInitialized = function () {
        return this.hasInitializedChallengeRunners;
      }),
      (i.prototype.runChallenges = function (h) {
        return __awaiter(this, void 0, void 0, function () {
          var t, i, n, r, s, o, a, u, l, c;
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.hasInitializedChallengeRunners) return [3, 5];
                e.label = 1;
              case 1:
                return (
                  e.trys.push([1, 3, , 4]),
                  [4, this.initializeChallengeRunners()]
                );
              case 2:
                return e.sent(), [3, 4];
              case 3:
                return [2, e.sent()];
              case 4:
                (this.hasInitializedChallengeRunners = !0), (e.label = 5);
              case 5:
                (i =
                  !h || ("notVerified" !== h.type && "verifyError" !== h.type)
                    ? ((t = []), [])
                    : ((t = h.verifiedSessions), h.verifiedChallengeTypes)),
                  (r = 0),
                  (s = this.challengeRunSequence),
                  (e.label = 6);
              case 6:
                return r < s.length
                  ? ((o = s[r]),
                    0 <= i.indexOf(o.getName())
                      ? [3, 10]
                      : [4, this.runChallenge(o)])
                  : [3, 11];
              case 7:
                return (
                  (a = e.sent()),
                  this.options.isPreview
                    ? [3, 10]
                    : "success" != a.type ||
                      "InviteOnlyEmailVerification" !== a.challengeDetails
                    ? [3, 8]
                    : ((n = a.solution),
                      i.push(o.getName()),
                      o.cleanup(),
                      [3, 10])
                );
              case 8:
                return d.isRunAllRetriesUsedResult(a)
                  ? [
                      2,
                      {
                        type: "retriesUsedUpError",
                        challengeType: o.getName(),
                      },
                    ]
                  : d.isRunErrorResult(a)
                  ? [
                      2,
                      {
                        type: "providerError",
                        errorChallengeType: o.getName(),
                        message: a.message,
                        verifiedChallengeTypes: i,
                        verifiedSessions: t,
                      },
                    ]
                  : ((u = o.getChallengeVerifyProvider()),
                    [
                      4,
                      this.challengeVerifier.verify(
                        u,
                        a.sessionId,
                        a.challengeDetails,
                        a.solution,
                        a.solverStats
                      ),
                    ]);
              case 9:
                if (
                  ((l = e.sent()),
                  this.hideAnimation(),
                  d.isVerifierVerifiedResponse(l) &&
                    (t.push(l.sessionInfo), i.push(o.getName()), o.cleanup()),
                  d.isVerifierNotVerifiedResponse(l))
                )
                  return [
                    2,
                    {
                      type: "notVerified",
                      errorChallengeType: o.getName(),
                      message: l.message,
                      verifiedSessions: t,
                      verifiedChallengeTypes: i,
                    },
                  ];
                if (d.isVerifierErrorResponse(l))
                  return [
                    2,
                    {
                      type: "verifyError",
                      errorChallengeType: o.getName(),
                      message: l.message,
                      verifiedSessions: t,
                      verifiedChallengeTypes: i,
                      error: l.error,
                    },
                  ];
                e.label = 10;
              case 10:
                return r++, [3, 6];
              case 11:
                return (
                  this.fraudProtection.setInactive(),
                  (c = { type: "success", sessions: t }),
                  this.options.showInviteOnlyEmailVerificationChallenge &&
                    (c.enqueueTokenFromChallenge = n),
                  [2, c]
                );
            }
          });
        });
      }),
      (i.prototype.runChallenge = function (t) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  t.shouldDisplayAnimation() && this.displayAnimation(),
                  [4, t.run()]
                );
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }),
      (i.prototype.initializeChallengeRunners = function () {
        return __awaiter(this, void 0, void 0, function () {
          var t, i, n, r;
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                for (
                  t = [], i = 0, n = this.challengeRunSequence;
                  i < n.length;
                  i++
                )
                  (r = n[i]), t.push(r.init());
                return [4, Promise.all(t)];
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (i.prototype.displayAnimation = function () {
        this.animationIsVisible() ||
          this.animationElement.classList.remove(this.cssHiddenClass);
      }),
      (i.prototype.hideAnimation = function () {
        this.animationIsVisible() &&
          this.animationElement.classList.add(this.cssHiddenClass);
      }),
      (i.prototype.animationIsVisible = function () {
        return (
          this.animationElement ||
            (this.animationElement = document.getElementById(
              this.animationElementId
            )),
          !this.animationElement.classList.contains(this.cssHiddenClass)
        );
      }),
      (t = i),
      (d.ChallengeRunner = t);
  })((QueueIt = QueueIt || {}));
var DYNAMIC_MESSAGE_LAST_UPDATED_TIMER_SELECTOR =
  "#MainPart_h2MessageOnQueueTicketRelativeTime";
!(function (e) {
  !(function (c) {
    var e =
      ((t.prototype.runChallenges = function (u, l) {
        return __awaiter(this, void 0, void 0, function () {
          var t,
            i,
            n,
            r,
            s,
            o,
            a = this;
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  e.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (i) {
                      return polly()
                        .waitAndRetry([300, 900, 2700, 8100, 1e4])
                        .executeForPromise(function () {
                          return __awaiter(a, void 0, void 0, function () {
                            var t;
                            return __generator(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, u.runChallenges(i)];
                                case 1:
                                  return (
                                    (t = e.sent()),
                                    c.isRunnerSuccessResult(t)
                                      ? [2, t]
                                      : [2, Promise.reject(t)]
                                  );
                              }
                            });
                          });
                        });
                    })(),
                  ]
                );
              case 1:
                return [2, e.sent()];
              case 2:
                return (
                  (t = e.sent()),
                  (s = r = i = void 0),
                  null != t &&
                    ((o = t),
                    c.isRunnerInitErrorResult(o) &&
                      ((i =
                        "Initialization of challenges failed. Redirecting to error page"),
                      (n = l.getChallengeInitErrorRedirectUrl(o))),
                    c.isRunnerProviderErrorResult(o) &&
                      ((i =
                        "Challenge script run threw error. Redirecting to error page"),
                      (n = l.getGeneralErrorRedirectUrl(o))),
                    c.isRunnerVerifyErrorResult(o) &&
                      ((i = "Error verifying challenge"),
                      (n = l.getGeneralErrorRedirectUrl(o)),
                      o.error &&
                        o.error.innerError &&
                        ((r = o.error.innerError.AjaxErrorLog),
                        (s = o.error.innerError.JqXHR))),
                    c.isRunnerRetriesErrorResult(o) &&
                      ((i =
                        "Challenge retries used up. Redirecting to error page"),
                      (o.message = i),
                      (n = l.getRetriesUsedUpRedirectUrl(o))),
                    c.isRunnerNotVerifiedResult(o) &&
                      ((i = "Challenge not verified"),
                      (r = {
                        innerMessage: o.message,
                        challengeType: o.errorChallengeType,
                      }),
                      (n = l.getTimeoutRedirectUrl()))),
                  window.logger.Error(
                    { Message: i, Ex: t, Page: "InqueuePage" },
                    2069,
                    this.eventId,
                    this.customerId,
                    r,
                    s
                  ),
                  setTimeout(function () {
                    return (document.location.href = n);
                  }, 200),
                  [3, 3]
                );
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.listenChildFrame = function () {
        var t = this,
          i = this;
        window.addEventListener
          ? window.addEventListener(
              "message",
              function (e) {
                return t.receiveMessageSafe(e, i);
              },
              !1
            )
          : window.attachEvent &&
            window.attachEvent("onmessage", function (e) {
              return t.receiveMessageSafe(e, i);
            });
      }),
      (t.prototype.receiveMessageSafe = function (e, t) {
        var i;
        try {
          if (!(i = JSON.parse(e.data))) return;
        } catch (e) {
          return;
        }
        this.receiveMessage(i, t);
      }),
      (t.prototype.modelUpdated = function (e) {
        this.callbackArray.push(e);
      }),
      (t.prototype.notifyFrames = function (e) {
        var t = document.getElementById("toppanel_iframe"),
          i = document.getElementById("leftpanel_iframe"),
          n = document.getElementById("rightpanel_iframe"),
          r = document.getElementById("middlepanel_iframe"),
          s = document.getElementById("bottompanel_iframe"),
          o = document.getElementById("sidebar_iframe");
        this.notifyMainFrame(e),
          this.notifyFrame(t, e),
          this.notifyFrame(i, e),
          this.notifyFrame(n, e),
          this.notifyFrame(r, e),
          this.notifyFrame(s, e),
          this.notifyFrame(o, e);
      }),
      (t.prototype.notifyMainFrame = function (e) {
        var t = window.queueUserInfoClient;
        if (t && t.refresh)
          try {
            t.refresh(e.toString());
          } catch (e) {
            window.logger.Error(
              { Message: "Error notifying main frame", Ex: e },
              2071,
              this.eventId,
              this.customerId
            );
          }
      }),
      (t.prototype.notifyFrame = function (e, t) {
        if (e && e.contentWindow)
          try {
            e.contentWindow.postMessage(t.toString(), "*");
          } catch (e) {
            window.logger.Error(
              { Message: "Error notifying frames", Ex: e },
              2072,
              this.eventId,
              this.customerId
            );
          }
      }),
      (t.prototype.doCallbacks = function (e) {
        for (var t = 0; t < this.callbackArray.length; t++)
          try {
            $.isFunction(this.callbackArray[t]) && this.callbackArray[t](e);
          } catch (e) {
            window.logger.Warning(
              { Message: "Error in custom layout modelUpdated calback", Ex: e },
              2073,
              this.eventId,
              this.customerId
            );
          }
      }),
      (t.prototype.pageReady = function (e) {
        this.statusChangeCallbackArray.push(e);
      }),
      (t.prototype.doStatusChangeCallbacks = function (e) {
        for (var t = 0; t < this.statusChangeCallbackArray.length; t++)
          try {
            $.isFunction(this.statusChangeCallbackArray[t]) &&
              this.statusChangeCallbackArray[t](e);
          } catch (e) {
            window.logger.Warning(
              { Message: "Error in custom layout pageReady callback", Ex: e },
              2074,
              this.eventId,
              this.customerId
            );
          }
      }),
      (t.prototype.initializeDynamicMessageLastUpdatedTimer = function (e, t) {
        var i = $;
        i.countdown.setDefaults(i.countdown.regional[t]),
          i(DYNAMIC_MESSAGE_LAST_UPDATED_TIMER_SELECTOR).countdown({
            since: -e,
            format: "dhm",
            layout:
              '{d<}<span class="countup_value days">{dnn}</span> <span class="countup_label days">{dl}</span> {d>}{h<}<span class="countup_value hours">{hnn}</span> <span class="countup_label hours">{hl}</span>{h>}<span class="countup_value minutes"> {mn} </span><span class="countup_label minutes">{ml}</span>',
          });
      }),
      (t.prototype.setDynamicMessageLastUpdatedTime = function (e) {
        $(DYNAMIC_MESSAGE_LAST_UPDATED_TIMER_SELECTOR).countdown("option", {
          since: -e,
        });
      }),
      (t.prototype.onReady = function (e) {
        this.doStatusChangeCallbacks(e);
      }),
      t);
    function t(e, t) {
      (this.callbackArray = []),
        (this.statusChangeCallbackArray = []),
        (this.customerId = e),
        (this.eventId = t),
        (this.logger = new c.Helpers.AjaxLogger(t, e)),
        (this.userId = new c.Helpers.Logger().getUserId()),
        this.listenChildFrame(),
        (this.queueIdLinkTabIndex = ko.computed(function () {
          return null;
        }));
    }
    c.ViewBase = e;
    var i =
      ((n.prototype.toString = function () {
        return JSON.stringify(this);
      }),
      n);
    function n(e) {
      this.messageType = e;
    }
    c.FrameDto = i;
  })(e.Queue || (e.Queue = {}));
})((QueueIt = QueueIt || {}));
var QueueIt,
  __extends =
    (this && this.__extends) ||
    (function () {
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          })(e, t);
      };
      return function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((i.prototype = t.prototype), new i()));
      };
    })(),
  PAGE_ID = "after";
!(function (e) {
  var i, n, t;
  function r(e) {
    var t = n.call(this, e.customerId, e.eventId) || this;
    return (
      (t.jsErrors = 0),
      (t.updateInterval = 5e3),
      (t.creole = new Parse.Simple.Creole({ forIE: document.all })),
      (t.queueId = e.queueId),
      (t.language = e.language),
      (t.layoutName = e.layoutName),
      (t.message = ko.observable()),
      (t.tags = e.tags),
      (t.languageSelector = new i.LanguageSelector({
        languages: e.languages,
        languageSelectorVisible: e.languageSelectorVisible,
        selectedLanguage: e.language,
      })),
      t
    );
  }
  (i = e.Queue || (e.Queue = {})),
    (n = i.ViewBase),
    __extends(r, n),
    (r.prototype.ajaxGetMessage = function () {
      var n = this;
      $.ajax({
        type: "GET",
        contentType: "application/json",
        url:
          "/spa-api/after/" +
          this.customerId +
          "/" +
          this.eventId +
          "/" +
          this.queueId +
          "/status?cid=" +
          this.language +
          "&l=" +
          this.layoutName,
        success: function (e) {
          var t = e.redirectUrl;
          t
            ? (document.location.href = t)
            : (n.refreshClientInfo(e), (n.jsErrors = 0));
        },
        error: function (e, t, i) {
          (n.jsErrors = n.jsErrors + 1),
            n.logger.logAjaxCallError(
              "Error getting status on after page",
              "AfterPage",
              e,
              t,
              i
            );
        },
      });
    }),
    (r.prototype.updateTimer = function () {
      var e = this;
      setTimeout(function () {
        e.ajaxGetMessage(), e.updateTimer();
      }, this.updateInterval);
    }),
    (r.prototype.getCreole = function () {
      return this.creole;
    }),
    (r.prototype.init = function () {
      this.notifyFrames(
        new i.UpdateQueueFrameDto(
          null,
          null,
          PAGE_ID,
          new Array(),
          null,
          null,
          this.tags
        )
      ),
        this.updateTimer();
    }),
    (r.prototype.refreshClientInfo = function (e) {
      (this.updateInterval = e.updateInterval ? e.updateInterval : 5e3),
        e.message && e.message.text
          ? this.message(
              new i.Message(e.message, this.setDynamicMessageLastUpdatedTime)
            )
          : this.message(null);
    }),
    (r.prototype.receiveMessage = function (e, t) {
      switch (e.messageType) {
        case "RequestRefresh":
          return void this.notifyFrames(
            new i.UpdateQueueFrameDto(
              null,
              null,
              PAGE_ID,
              new Array(),
              null,
              null,
              this.tags
            )
          );
        default:
          return;
      }
    }),
    (r.prototype.onReady = function () {
      this.initializeDynamicMessageLastUpdatedTimer(60, this.language),
        n.prototype.onReady.call(this, PAGE_ID);
    }),
    (t = r),
    (i.AfterView = t);
})((QueueIt = QueueIt || {})),
  (function (N) {
    !(function (s) {
      var n =
        ((e.ENTERED_QUEUE_GOT_QUEUEID = "EnteredQueueGotQueueId"),
        (e.QUEUEID_ALREADY_EXIST = "QueueIdAlreadyExist"),
        (e.INVALID_CAPTCHA_TOKEN = "InvalidCaptchaToken"),
        (e.MISSING_CUSTOM_DATA_KEY = "MissingCustomDataKey"),
        (e.UNIQUE_KEY_VIOLATION = "UniqueKeyViolation"),
        (e.UNEXPECTED_FAILURE_TO_ENQUEUE = "UnexpectedFailureToEnqueue"),
        (e.IDLE_QUEUE_ILLEGAL_ACTION = "IdleQueueIllegalAction"),
        (e.CUSTOM_DATA_UPDATED = "CustomDataUpdated"),
        (e.MISSING_QUEUE_ID = "MissingQueueId"),
        (e.UNEXPECTED_FAILURE_TO_UPDATE = "UnexpectedFailureToUpdate"),
        (e.INVALID_QUEUEIT_ENQUEUE_TOKEN = "InvalidQueueitEnqueueToken"),
        (e.SERVER_IS_BUSY = "ServerBusyError"),
        e);
      function e() {}
      var i,
        r = ((i = s.FrameDto), __extends(t, i), t);
      function t(e) {
        var t = i.call(this, n.ENTERED_QUEUE_GOT_QUEUEID) || this;
        return (t.queueId = e), t;
      }
      s.EnteredQueueGotQueueIdDto = r;
      var o,
        a = ((o = s.FrameDto), __extends(u, o), u);
      function u() {
        return o.call(this, n.IDLE_QUEUE_ILLEGAL_ACTION) || this;
      }
      s.IdleQueueIllegalActionDto = a;
      var l,
        c = ((l = s.FrameDto), __extends(h, l), h);
      function h(e, t) {
        var i = l.call(this, n.QUEUEID_ALREADY_EXIST) || this;
        return (i.queueId = e), (i.enqueueParams = t), i;
      }
      s.QueueIdAlreadyExistDto = c;
      var d,
        p = ((d = s.FrameDto), __extends(g, d), g);
      function g() {
        return d.call(this, n.MISSING_QUEUE_ID) || this;
      }
      s.MissingQueueIdForUpdateDto = p;
      var f,
        m = ((f = s.FrameDto), __extends(y, f), y);
      function y(e) {
        var t = f.call(this, n.INVALID_CAPTCHA_TOKEN) || this;
        return (t.enqueueParams = e), t;
      }
      s.InvalidCaptchaTokenDto = m;
      var v,
        I = ((v = s.FrameDto), __extends(b, v), b);
      function b(e) {
        var t = v.call(this, n.MISSING_CUSTOM_DATA_KEY) || this;
        return (t.enqueueParams = e), t;
      }
      s.MissingCustomDataKeyDto = I;
      var w,
        E = ((w = s.FrameDto), __extends(T, w), T);
      function T(e) {
        var t = w.call(this, n.UNIQUE_KEY_VIOLATION) || this;
        return (t.enqueueParams = e), t;
      }
      s.UniqueKeyViolationDto = E;
      var S,
        C = ((S = s.FrameDto), __extends(q, S), q);
      function q() {
        return S.call(this, n.CUSTOM_DATA_UPDATED) || this;
      }
      s.CustomDataUpdatedDto = C;
      var _,
        k = ((_ = s.FrameDto), __extends(R, _), R);
      function R(e) {
        var t = _.call(this, n.SERVER_IS_BUSY) || this;
        return (t.enqueueParams = e), t;
      }
      s.ServerIsBusyDto = k;
      var P,
        U = ((P = s.FrameDto), __extends(V, P), V);
      function V(e) {
        var t = P.call(this, n.UNEXPECTED_FAILURE_TO_ENQUEUE) || this;
        return (t.enqueueParams = e), t;
      }
      s.UnexpectedFailureToEnqueueDto = U;
      var Q,
        x = ((Q = s.FrameDto), __extends(D, Q), D);
      function D() {
        return Q.call(this, n.UNEXPECTED_FAILURE_TO_UPDATE) || this;
      }
      s.UnexpectedFailureToUpdateDto = x;
      var L,
        A = ((L = s.FrameDto), __extends(F, L), F);
      function F(e) {
        var t = L.call(this, n.INVALID_QUEUEIT_ENQUEUE_TOKEN) || this;
        return (t.enqueueParams = e), t;
      }
      s.InvalidQueueitEnqueueTokenMessage = A;
      var M =
        ((O.prototype.doEnqueueIfReady = function () {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, n, r;
            return __generator(this, function (e) {
              switch (e.label) {
                case 0:
                  if (this.options.isPreview) return [2];
                  if (
                    (this.options.showChallenges && !this.challengeSessions) ||
                    (this.options.isQueueitEnqueueTokenRequired &&
                      !this.queueitEnqueueToken) ||
                    (this.options.requireKey &&
                      !this.options.isQueueitEnqueueTokenRequired &&
                      !this.customDataEnqueue)
                  )
                    return [3, 4];
                  e.label = 1;
                case 1:
                  return (
                    e.trys.push([1, 3, , 4]),
                    [
                      4,
                      this.enqueuer.enqueue(
                        this.challengeSessions,
                        this.options.layout,
                        this.options.customUrlParams,
                        this.options.targetUrl,
                        this.options.culture,
                        this.softblockValidationSessionInfo,
                        this.customDataEnqueue,
                        this.queueitEnqueueToken
                      ),
                    ]
                  );
                case 2:
                  return (t = e.sent()), this.onEnqueuePostSuccess(t), [3, 4];
                case 3:
                  return (
                    (i = e.sent()),
                    (r = n = i),
                    n.response
                      ? this.onEnqueuePostFailure(n.response)
                      : i instanceof s.EnqueueServerBusyError
                      ? (window.logger.Error(
                          {
                            Message:
                              "Error on SDK enqueue. Exceeded retries and server was busy.",
                            Ex: {
                              message: "Server was busy",
                              name: "EnqueueException",
                            },
                          },
                          2098,
                          this.options.eventId,
                          this.options.customerId,
                          ""
                        ),
                        this.onEnqueueTriesFailed(!0))
                      : (window.logger.Error(
                          {
                            Message: "Ajax error on SDK enqueue.",
                            Ex: {
                              message: r.ajaxError.Message,
                              name: "EnqueueException",
                            },
                          },
                          2051,
                          this.options.eventId,
                          this.options.customerId,
                          "",
                          r.ajaxError.AjaxErrorLog,
                          r.ajaxError.JqXHR
                        ),
                        this.onEnqueueTriesFailed()),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }),
        O);
      function O(e, t, i) {
        var n = this;
        (this.options = e),
          (this.frameNotifier = t),
          (this.http = new N.Tools.HttpUtil()),
          (this.setCaptchaSession = function (t) {
            return __awaiter(n, void 0, void 0, function () {
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (this.challengeSessions = t), [4, this.doEnqueueIfReady()]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (this.receiveMessage = function (o) {
            return __awaiter(n, void 0, void 0, function () {
              var t, i, n, r, s;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return this.isMessageFromCaptcha(o.origin)
                      ? [2]
                      : ((t = o.data), (i = t.Key), t.Type ? [3, 1] : [2]);
                  case 1:
                    return "Enqueue" != t.Type && "Update" != t.Type
                      ? [3, 7]
                      : this.options.isIdle
                      ? (this.notify(new a()), [2])
                      : ((n = t.Email),
                        (r = this.getAllKeyValues(t.CustomData)),
                        "Enqueue" != t.Type
                          ? [3, 5]
                          : this.inqueueView.hasQueueId() && i
                          ? (this.notify(
                              new c(
                                this.inqueueView.queueId(),
                                this.getEnqueueParams()
                              )
                            ),
                            [3, 4])
                          : [3, 2]);
                  case 2:
                    return (
                      (this.customDataEnqueue = {
                        Email: n,
                        Key: i,
                        CustomData: r,
                      }),
                      [4, this.doEnqueueIfReady()]
                    );
                  case 3:
                    e.sent(), (e.label = 4);
                  case 4:
                    return [3, 6];
                  case 5:
                    "Update" == t.Type &&
                      (this.inqueueView.hasQueueId()
                        ? ((s = "/api/customdata/"
                            .concat(this.options.customerId, "/")
                            .concat(this.options.eventId, "/")
                            .concat(this.inqueueView.queueId(), "/update")),
                          this.http.post(
                            s,
                            this.buildUpdateCustomDataDto(n, r),
                            this.onUpdateCustomDataSuccess,
                            this.onUpdateCustomDataFailed
                          ))
                        : this.notify(new p())),
                      (e.label = 6);
                  case 6:
                    return [3, 9];
                  case 7:
                    return "QueueitEnqueueToken" != t.Type
                      ? [3, 9]
                      : this.options.isPreview
                      ? [2]
                      : this.inqueueView.hasQueueId()
                      ? (this.notify(
                          new c(
                            this.inqueueView.queueId(),
                            this.getEnqueueParams()
                          )
                        ),
                        [2])
                      : t.QueueitEnqueueToken
                      ? ((this.queueitEnqueueToken = t.QueueitEnqueueToken),
                        [4, this.doEnqueueIfReady()])
                      : (this.notify(new A(this.getEnqueueParams())), [2]);
                  case 8:
                    e.sent(), (e.label = 9);
                  case 9:
                    return [2];
                }
              });
            });
          }),
          (this.isMessageFromCaptcha = function (e) {
            return "https://www.google.com" == e;
          }),
          (this.onUpdateCustomDataSuccess = function () {
            n.notify(new C());
          }),
          (this.onUpdateCustomDataFailed = function (e, t, i) {
            n.logger.logAjaxCallError(
              "Error updating custom data",
              "enqueue/customData",
              e,
              t,
              i
            ),
              n.notify(new x());
          }),
          (this.onEnqueuePostSuccess = function (e) {
            e.redirectUrl
              ? (document.location.href = e.redirectUrl)
              : e.queueId &&
                (n.notify(new r(e.queueId)),
                n.inqueueView.setQueueId(e.queueId),
                n.inqueueView.notifyFrames(
                  new s.UpdateQueueFrameDto(
                    null,
                    null,
                    null,
                    null,
                    null,
                    e.queueId,
                    null
                  )
                ),
                $("body").removeClass("queueit-enqueue-token-required"),
                $("body").removeClass("key-required"),
                n.inqueueView.continueAfterResolvingQueueId());
          }),
          (this.onEnqueueTriesFailed = function (e) {
            void 0 === e && (e = !1),
              e
                ? n.notify(new k(n.getEnqueueParams()))
                : n.notify(new U(n.getEnqueueParams()));
          }),
          (this.onEnqueuePostFailure = function (e) {
            e.challengeFailed
              ? (n.notify(new m(n.getEnqueueParams())),
                n.logWarning(
                  "Failed to enqueue with CustomData. Invalid captcha verification token"
                ))
              : e.missingCustomDataKey
              ? (n.notify(new I(n.getEnqueueParams())),
                n.logWarning("Failed to enqueue. CustomDataKey is missing"))
              : e.customDataUniqueKeyViolation
              ? (n.notify(new E(n.getEnqueueParams())),
                n.logWarning("Failed to enqueue. CustomDataKey is not unique"))
              : e.invalidQueueitEnqueueToken &&
                (n.notify(new A(n.getEnqueueParams())),
                n.logWarning(
                  "Failed to enqueue. QueueitEnqueueToken is not valid."
                ));
          }),
          (this.getEnqueueParams = function () {
            return {
              targetUrl: n.options.targetUrl,
              layoutName: n.options.layout,
            };
          }),
          (this.buildUpdateCustomDataDto = function (e, t) {
            return { Email: e, EventId: n.options.eventId, CustomData: t };
          }),
          (this.getAllKeyValues = function (e) {
            for (
              var t = JSON.stringify(e).replace(/[{}"\[\]]/g, ""),
                i = [],
                n = "",
                r = "",
                s = 0;
              s < t.length;
              s++
            ) {
              var o = t.substr(s, 1);
              ":" == o
                ? ((n = r), (r = ""))
                : "," == o
                ? (i.push({ Key: n, Value: r }), (r = ""))
                : (r += o);
            }
            return (
              0 < n.length && 0 < r.length && i.push({ Key: n, Value: r }), i
            );
          }),
          (this.notify = function (e) {
            window.customDataClient
              ? window.customDataClient.notifyDirect(e)
              : window.queueitEnqueueTokenClient
              ? window.queueitEnqueueTokenClient.notifyDirect(e)
              : window.queueUserManager &&
                window.queueUserManager.notifyDirect(e),
              n.frameNotifier.notifyFrames(e);
          }),
          (this.listenOnFrames = function () {
            window.addEventListener
              ? window.addEventListener("message", n.receiveMessage, !1)
              : window.attachEvent &&
                window.attachEvent("onmessage", function (e) {
                  return n.receiveMessage;
                });
          }),
          (this.logWarning = function (e) {
            window.logger.Warning(
              { Message: e },
              2052,
              n.options.eventId,
              n.options.customerId
            );
          }),
          (this.logger = new s.Helpers.AjaxLogger(e.eventId, e.customerId)),
          this.listenOnFrames(),
          (this.inqueueView = t),
          (this.softblockValidationSessionInfo = i),
          (this.enqueuer = new s.Enqueuer(
            this.options.customerId,
            this.options.eventId
          ));
      }
      s.CustomData = M;
    })(N.Queue || (N.Queue = {}));
  })((QueueIt = QueueIt || {})),
  (function (s) {
    !(function (i) {
      var n,
        e =
          ((n = i.ViewBase),
          __extends(t, n),
          (t.prototype.receiveMessage = function (e, t) {
            "RequestRefresh" === e.messageType &&
              this.notifyFrames(
                new i.UpdateQueueFrameDto(
                  null,
                  null,
                  "error",
                  new Array(),
                  this.options.targetUrl,
                  null,
                  this.options.tags
                )
              );
          }),
          t);
      function t(e) {
        var t = n.call(this, e.customerId, e.eventId) || this;
        return (
          (t.options = e),
          t.notifyFrames(
            new i.UpdateQueueFrameDto(
              null,
              null,
              "error",
              new Array(),
              t.options.targetUrl,
              null,
              t.options.tags
            )
          ),
          (t.languageSelector = new i.LanguageSelector({
            languages: e.languages,
            languageSelectorVisible: e.languageSelectorVisible,
            selectedLanguage: e.culture,
          })),
          (t.detailExpander = new r()),
          t
        );
      }
      i.ErrorView = e;
      var r = function () {
        var i = this;
        (this.onClickOrEnterExpandDetails = function (e, t) {
          ("click" !== t.type && t.keyCode !== s.Queue.Helpers.KeyCode.Enter) ||
            i.isDetailsExpanded(!i.isDetailsExpanded());
        }),
          (this.isDetailsExpanded = ko.observable(!1));
      };
      i.DetailExpander = r;
    })(s.Queue || (s.Queue = {}));
  })((QueueIt = QueueIt || {})),
  (function (h) {
    !(function (n) {
      var a = "application/json",
        s = "#aUpdateEmail";
      function e(e) {
        for (
          var t = decodeURIComponent(e),
            i = new Array(),
            n = 0,
            r = t.split("&");
          n < r.length;
          n++
        ) {
          var s = r[n].split("=");
          if (2 == s.length) {
            var o =
              s[0].length >= "t_".length ? s[0].substr("t_".length) : s[0];
            i.push(new l(o, s[1]));
          }
        }
        return i;
      }
      n.getTargetUrlParams = e;
      var u,
        r = ((u = n.FrameDto), __extends(t, u), t);
      function t(e, t, i, n, r, s, o) {
        var a = u.call(this, "UpdateQueue") || this;
        return (
          isNaN(e) || (a.queueNumber = e),
          isNaN(t) || (a.usersInLineAheadOfYou = t),
          i && (a.pageId = i),
          (a.targetUrlParams = n),
          (a.targetUrl = r),
          s && (a.queueId = s),
          (a.tags = o),
          a
        );
      }
      n.UpdateQueueFrameDto = r;
      var l = function (e, t) {
        (this.key = e), (this.value = t);
      };
      n.TargetUrlParam = l;
      var o,
        i =
          ((o = n.ViewBase),
          __extends(c, o),
          (c.prototype.get_firstInLine = function () {
            return this._firstInLine;
          }),
          (c.prototype.set_firstInLine = function (e) {
            this._firstInLine != e &&
              (this._firstInLine = e) &&
              window.welcomeAudioPlayer &&
              this.playWelcomeSound();
          }),
          (c.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t,
                i = this;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      this.initQueueViewSession(),
                      this.set_firstInLine(
                        "FirstInLine" == this.options.inqueueInfo.forecastStatus
                      ),
                      this.doCallbacks(this.options.inqueueInfo),
                      (this.layout = new n.Layout(
                        this.options.inqueueInfo.layout,
                        this.options,
                        this.get_firstInLine()
                      )),
                      (this.texts = new n.InQueueTexts({
                        inQueueTexts: this.options.inqueueInfo.texts,
                        isBeforeOrIdle: this.options.isBeforeOrIdle,
                        secondsToStart:
                          this.options.inqueueInfo.ticket.secondsToStart,
                      })),
                      (this.languageSelector = new n.LanguageSelector({
                        languages: this.options.languages,
                        languageSelectorVisible:
                          this.layout.languageSelectorVisible.toString(),
                        selectedLanguage: this.options.culture,
                      })),
                      this.ticket.refresh(this.options.inqueueInfo.ticket),
                      this.options.inqueueInfo.message &&
                        this.options.inqueueInfo.message.text &&
                        this.message(
                          new n.Message(
                            this.options.inqueueInfo.message,
                            this.setDynamicMessageLastUpdatedTime
                          )
                        ),
                      this.options.isBeforeOrIdle || this.initSoundTrack(),
                      this.notifyFrames(
                        new r(
                          this.options.isBeforeOrIdle
                            ? null
                            : parseInt(
                                this.options.inqueueInfo.ticket.queueNumber
                              ),
                          this.options.isBeforeOrIdle
                            ? null
                            : parseInt(
                                this.options.inqueueInfo.ticket
                                  .usersInLineAheadOfYou
                              ),
                          this.options.isBeforeOrIdle ? "before" : "queue",
                          this.getTargetUrlParams(),
                          this.options.targetUrl,
                          this.queueId(),
                          this.options.inqueueInfo.texts.tags
                        )
                      ),
                      this.setupBlinkingDot(),
                      (this.customData = new n.CustomData(
                        this.options,
                        this,
                        this.tryGetSoftblockValidationsessionInfofromUrl()
                      )),
                      (t = this.getQueryStringParam(
                        this.originalUrl,
                        "enqueuetoken"
                      )),
                      this.options.isPreview
                        ? [2]
                        : this.options.isIdle || this.hasQueueId()
                        ? (this.start(), [2])
                        : this.options.isIdle || this.hasQueueId()
                        ? [3, 7]
                        : (this.options
                            .showInviteOnlyEmailVerificationChallenge &&
                            this.options.isQueueitEnqueueTokenRequired &&
                            !t &&
                            ((this.options.showChallenges = !0),
                            this.options.challenges.push({
                              name: "InviteOnlyEmailVerification",
                              hasAnimation: !1,
                            })),
                          this.options.showChallenges
                            ? ((this.challengeRedirectUrls =
                                new n.ChallengeRedirectUrls(this.options)),
                              (this.challengeRunner = new n.ChallengeRunner(
                                this.options,
                                this.userId
                              )),
                              this.challengeRunner.init(),
                              this.runChallenges(
                                this.challengeRunner,
                                this.challengeRedirectUrls
                              ).then(function (e) {
                                return i.challengeCallback(e, t);
                              }),
                              [3, 7])
                            : [3, 1])
                    );
                  case 1:
                    return !this.options.requireKey ||
                      this.options.isQueueitEnqueueTokenRequired
                      ? [3, 2]
                      : [3, 7];
                  case 2:
                    return this.options.isQueueitEnqueueTokenRequired &&
                      this.isCustomerUsingEnqueueTokenV1()
                      ? [3, 7]
                      : [3, 3];
                  case 3:
                    return !this.options.isQueueitEnqueueTokenRequired ||
                      this.isCustomerUsingEnqueueTokenV1()
                      ? [3, 5]
                      : [4, this.enqueue(void 0, t)];
                  case 4:
                    return e.sent(), [3, 7];
                  case 5:
                    return [4, this.enqueue(void 0, t)];
                  case 6:
                    e.sent(), (e.label = 7);
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (c.prototype.isCustomerUsingEnqueueTokenV1 = function () {
            var e = this.getQueryStringParam(this.originalUrl, "qet");
            return (
              this.options.isCustomerUsingEnqueueTokenFormatV1 || null != e
            );
          }),
          (c.prototype.enqueue = function (l, c) {
            return __awaiter(this, void 0, void 0, function () {
              var t,
                i,
                n,
                r,
                s,
                o,
                a,
                u = this;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    (t = this.tryGetSoftblockValidationsessionInfofromUrl()),
                      (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 3, , 4]),
                      [
                        4,
                        this.enqueuer.enqueue(
                          l,
                          this.options.layout,
                          this.options.customUrlParams,
                          this.options.targetUrl,
                          this.options.culture,
                          t,
                          void 0,
                          c
                        ),
                      ]
                    );
                  case 2:
                    return (i = e.sent()).redirectUrl
                      ? ((document.location.href = i.redirectUrl), [2])
                      : (l &&
                          $("body")
                            .removeClass(this.challengeClass)
                            .addClass(this.challengeSolvedClass),
                        c &&
                          ($("body").removeClass(
                            "queueit-enqueue-token-required"
                          ),
                          $("body").removeClass("key-required")),
                        this.onQueueIdReceived(i.queueId),
                        [3, 4]);
                  case 3:
                    if (((n = e.sent()), (s = r = n), r.response)) {
                      if (r.response.challengeFailed) throw r;
                      window.logger.Error(
                        {
                          Message: "Error on enqueue",
                          Ex: {
                            message: JSON.stringify(r.response),
                            name: "EnqueueException",
                          },
                        },
                        2061,
                        this.options.eventId,
                        this.options.customerId,
                        ""
                      );
                    } else s.ajaxError && window.logger.Error({ Message: "Error on enqueue", Ex: { message: s.ajaxError.Message, name: "EnqueueException" } }, 2062, this.options.eventId, this.options.customerId, "", s.ajaxError.AjaxErrorLog, s.ajaxError.JqXHR);
                    return (
                      r.response && r.isEnqueueTokenError()
                        ? ((o = window.location.search.substring(
                            1,
                            window.location.search.length
                          )),
                          (a = r.getErrorCode()),
                          this.redirector.redirect(
                            "/error?er=".concat(a, "&").concat(o)
                          ))
                        : (this.isRunning(!1),
                          setTimeout(function () {
                            u.enqueue(l, c);
                          }, 15e3)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (c.prototype.getTargetUrlParams = function () {
            return e(this.options.customUrlParams);
          }),
          (c.prototype.start = function () {
            this.updateTimer(), this.updateCheckTimer();
          }),
          (c.prototype.getCreole = function () {
            return this.creole;
          }),
          (c.prototype.refresh = function (e) {
            !e.isBeforeOrIdle &&
              this.isBeforeOrIdle() &&
              (this.trySwitchBeforePageToQueue(),
              this.isBeforeOrIdle(e.isBeforeOrIdle)),
              this.isBeforeOrIdle()
                ? this.refreshBeforeStatusUpdate(e)
                : this.refreshGetForecast(e);
          }),
          (c.prototype.refreshBeforeStatusUpdate = function (e) {
            this.doCallbacks(e),
              this.notifyFrames(
                new r(
                  null,
                  null,
                  e.pageId,
                  this.getTargetUrlParams(),
                  this.options.targetUrl,
                  null,
                  null != e.texts ? e.texts.tags : null
                )
              ),
              (this.updateInterval = e.updateInterval ? e.updateInterval : 4e4);
            var t = e.ticket.secondsToStart;
            $("#defaultCountdown").countdown("option", { until: t }),
              this.ticket.refresh(e.ticket),
              (this.lastLayoutVersion = e.layoutVersion),
              (this.lastLayoutName = e.layoutName),
              e.layout && this.layout.refresh(e.layout, !1),
              e.texts &&
                (this.texts.styleSheets != e.texts.styleSheets &&
                  this.cssReplacer.replace(e.texts.styleSheets),
                this.texts.refresh({
                  inQueueTexts: e.texts,
                  isBeforeOrIdle: e.isBeforeOrIdle,
                  secondsToStart: e.ticket.secondsToStart,
                }),
                this.languageSelector.refreshLanguageSelector(
                  e.texts,
                  this.layout.languageSelectorVisible()
                )),
              this.updateDynamicMessage(e.message);
          }),
          (c.prototype.refreshGetForecast = function (e) {
            ("NotReadyYet" !== this.inqueueStatus &&
              e.forecastStatus &&
              "NotReadyYet" === e.forecastStatus) ||
              (this.get_firstInLine() && "FirstInLine" !== e.forecastStatus) ||
              ((this.updateInterval = e.updateInterval),
              (this.inqueueStatus = e.forecastStatus),
              "NotReadyYet" === this.inqueueStatus && this.notReadyCount++,
              10 <= this.notReadyCount &&
                ((this.isRedirected = !0), this.redirector.redirect()),
              this.doCallbacks(e),
              this.notifyFrames(
                new r(
                  Number(e.ticket.queueNumber),
                  Number(e.ticket.usersInLineAheadOfYou),
                  e.pageId,
                  this.getTargetUrlParams(),
                  this.options.targetUrl,
                  null,
                  null != e.texts ? e.texts.tags : null
                )
              ),
              this.isRedirectPromptDialogConfirmed ||
                e.ticket.queuePaused ||
                "FirstInLine" !== this.inqueueStatus ||
                (!this.layout.isRedirectPromptDialogEnabled &&
                  !this.isClientInactive()) ||
                (this.ticket.windowStartTime() &&
                  (this.updateInterval = Math.max(
                    this.updateInterval,
                    this.waitingStateUpdateInterval
                  )),
                this.showConfirmRedirectDialog(!0),
                this.message(null),
                (this.isRedirectPromptDialogConfirmed = !1)),
              "FirstInLine" === this.inqueueStatus && this.set_firstInLine(!0),
              this.ticket.refresh(e.ticket),
              this.layout.refresh(e.layout, this.get_firstInLine()),
              e.texts &&
                (e.texts.styleSheets !== this.texts.styleSheets &&
                  this.cssReplacer.replace(e.texts.styleSheets),
                this.texts.refresh({
                  inQueueTexts: e.texts,
                  isBeforeOrIdle: e.isBeforeOrIdle,
                  secondsToStart: e.ticket.secondsToStart,
                }),
                this.languageSelector.refreshLanguageSelector(
                  e.texts,
                  this.layout.languageSelectorVisible()
                )),
              this.updateDynamicMessage(e.message),
              (this.lastLayoutVersion >= e.layoutVersion &&
                this.lastLayoutName == e.layoutName) ||
                (this.initSoundTrack(),
                (this.lastLayoutVersion = e.layoutVersion),
                (this.lastLayoutName = e.layoutName)));
          }),
          (c.prototype.updateDynamicMessage = function (e) {
            var t = null != this.message();
            e && e.text
              ? (t && e.id === this.message().id) ||
                this.message(
                  new h.Queue.Message(e, this.setDynamicMessageLastUpdatedTime)
                )
              : t && this.message(void 0);
          }),
          (c.prototype.updateTimer = function () {
            var e = this;
            setTimeout(function () {
              (e.lastTryUpdate = new Date()),
                e.isBeforeOrIdle() ||
                  e.showConfirmRedirectDialog() ||
                  e.isRedirectPromptDialogConfirmed ||
                  e.isClientInactive(e.detector.isHidden()),
                e.ajaxGetStatus();
            }, this.updateInterval);
          }),
          (c.prototype.initSoundTrack = function () {
            var t = this;
            if (!window.welcomeAudioPlayer && this.texts.isWelcomeSoundEnabled)
              try {
                (this._logSoundPlayerInfo.SoundPlayer_setup_IsCalled = !0),
                  window.soundManager.setup({
                    url: "/css/sound",
                    debugMode: !1,
                    preferFlash: !1,
                    onready: function () {
                      t._logSoundPlayerInfo.SoundPlayer_onready_IsCalled = !0;
                      try {
                        (window.welcomeAudioPlayer =
                          window.soundManager.createSound({
                            url: t.texts.welcomeSoundUrls,
                          })),
                          t.get_firstInLine() && t.playWelcomeSound();
                      } catch (e) {
                        window.logger.Error(
                          {
                            Message: "Error initing sound file",
                            Ex: e,
                            Page: "InqueuePage",
                          },
                          2063,
                          t.eventId,
                          t.customerId,
                          t.options.queueId || ""
                        ),
                          (t._logSoundPlayerInfo.SoundPlayer_onready_Exception =
                            !0);
                      }
                    },
                  });
              } catch (e) {
                window.logger.Error(
                  {
                    Message: "Error setuping soundmanager",
                    Ex: e,
                    Page: "InqueuePage",
                  },
                  2064,
                  this.eventId,
                  this.customerId,
                  this.options.queueId || ""
                );
              }
          }),
          (c.prototype.playWelcomeSound = function (e) {
            var t = this;
            try {
              (this._soundIsPlayingFlag = !0),
                setTimeout(function () {
                  t._soundIsPlayingFlag = !1;
                }, 1e4),
                this.texts.isWelcomeSoundEnabled &&
                  (window.welcomeAudioPlayer
                    ? window.welcomeAudioPlayer.play({
                        onfinish: function () {
                          (t._soundIsPlayingFlag = !1), e && e();
                        },
                      })
                    : window.logger.Debug(
                        {
                          Message: "Not expected case in playing welcome sound",
                        },
                        2065,
                        this.eventId,
                        this.customerId,
                        this.options.queueId || "",
                        this._logSoundPlayerInfo
                      ));
            } catch (e) {
              (this._soundIsPlayingFlag = !1),
                window.logger.Error(
                  {
                    Message: "Error playing sound",
                    Ex: e,
                    Page: "InqueuePage",
                  },
                  2066,
                  this.eventId,
                  this.customerId,
                  this.options.queueId || ""
                );
            }
          }),
          (c.prototype.updateCheckTimer = function () {
            var e = this;
            setInterval(function () {
              6e4 < new Date().getTime() - e.lastTryUpdate.getTime() &&
                setTimeout(function () {
                  12e4 < new Date().getTime() - e.lastTryUpdate.getTime() &&
                    e.redirector.redirect();
                }, 6e4),
                3 < e.jsErrorCount && e.isRunning(!1);
            }, 2e3);
          }),
          (c.prototype.setupBlinkingDot = function () {
            var e = this;
            setInterval(function () {
              0 == e.jsErrorCount
                ? $("#defaultViewPb1").toggleClass("active")
                : $("#defaultViewPb1").removeClass("active");
            }, 2e3);
          }),
          (c.prototype.getTargetUrlHash = function () {
            return this.getQueryStringParam(this.originalUrl, "thash");
          }),
          (c.prototype.ajaxGetStatus = function (e, r) {
            var s = this;
            if (
              (void 0 === e && (e = this.isRedirectPromptDialogConfirmed),
              !this.isRedirected)
            ) {
              if (this._soundIsPlayingFlag) return void this.updateTimer();
              var t = this.hasQueueId()
                  ? null
                  : this.getQueryStringParam(this.originalUrl, "enqueuetoken"),
                i = this.hasQueueId()
                  ? null
                  : this.getQueryStringParam(this.originalUrl, "qet"),
                n =
                  "/spa-api/queue/" +
                  this.options.customerId +
                  "/" +
                  this.options.eventId +
                  "/" +
                  this.options.queueId +
                  "/status?cid=" +
                  (this.options.culture ? this.options.culture : "") +
                  "&l=" +
                  (this.options.layout ? this.options.layout : "") +
                  (i ? "&qet=" + i : "") +
                  (t ? "&enqueuetoken=" + t : "");
              this.options.sdkVersion &&
                (n += "&sdkv=" + this.options.sdkVersion),
                (n += this.queueViewSession);
              var o = this;
              $.ajax({
                type: "POST",
                dataType: "json",
                beforeSend: function (e) {
                  o.queueItemInfoHelper.setHeaderFromCache(
                    o.options.queueId,
                    e
                  );
                },
                contentType: a,
                data: JSON.stringify({
                  targetUrl: this.options.targetUrl,
                  targetUrlHash: this.getTargetUrlHash(),
                  customUrlParams: this.options.customUrlParams,
                  layoutVersion: this.lastLayoutVersion,
                  layoutName: this.lastLayoutName,
                  isClientRedayToRedirect: this.isBeforeOrIdle()
                    ? null
                    : this.GetClientReadyToRedirect(e),
                  isBeforeOrIdle: this.isBeforeOrIdle(),
                }),
                url: n,
                success: function (e, t, i) {
                  try {
                    if (
                      (o.queueItemInfoHelper.tryCacheHeader(
                        o.options.queueId,
                        i
                      ),
                      e.redirectUrl)
                    ) {
                      if (e.redirectUrl && !e.isRedirectToTarget)
                        return void (document.location.href = e.redirectUrl);
                      if (e.isRedirectToTarget)
                        return void s.redirectToTarget(e);
                    } else e.redirectUrl || s.refresh(e);
                    (s.jsErrorCount = 0), s.isRunning(!0);
                  } catch (e) {
                    s.jsErrorCount++,
                      window.logger.Error(
                        {
                          Message:
                            "Error refreshing client data based on GetStatus call",
                          Ex: e,
                          Page: "InqueuePage",
                        },
                        2067,
                        s.eventId,
                        s.customerId,
                        s.options.queueId || ""
                      );
                  } finally {
                    r && r(), s.updateTimer();
                  }
                },
                error: function (e, t, i) {
                  var n = e.status + " status code received on ";
                  s.isBeforeOrIdle()
                    ? (n += "before/idle page")
                    : (n += "queue page"),
                    s.logger.logAjaxCallError(
                      "Error calling GetStatus endpoint",
                      "InqueuePage",
                      e,
                      t,
                      i,
                      { message: n, name: "GetStatusError" }
                    );
                  try {
                    $.isFunction(s.options.errorCallback) &&
                      s.options.errorCallback();
                  } finally {
                    s.jsErrorCount++,
                      !e ||
                        (503 !== e.status && 504 !== e.status) ||
                        ((s.updateInterval *= 1.25),
                        2e5 < s.updateInterval && (s.updateInterval = 2e5)),
                      r && r(),
                      s.updateTimer();
                  }
                },
              });
            }
          }),
          (c.prototype.redirectToTarget = function (e) {
            var t = this;
            if (
              ((this.isRedirected = !0),
              (this.isRedirectedToTarget = e.isRedirectToTarget),
              this.get_firstInLine())
            )
              this.redirector.redirect(e.redirectUrl, e.isRedirectToTarget);
            else {
              this._firstInLine = !0;
              var i = setTimeout(function () {
                t.redirector.redirect(e.redirectUrl, e.isRedirectToTarget);
              }, 1e4);
              this.ticket.setProgressBar(100),
                this.playWelcomeSound(function () {
                  clearTimeout(i),
                    t.redirector.redirect(e.redirectUrl, e.isRedirectToTarget);
                });
            }
          }),
          (c.prototype.showWebPushRegisterUpdateResult = function (e, t) {
            $("#divWebPushStatusFrame")
              .removeClass()
              .show()
              .addClass(
                "Success" == t
                  ? "submit_success alert alert-success"
                  : "submit_failure alert alert-error"
              )
              .delay(6e4)
              .fadeOut()
              .click(function () {
                $(this).stop(!0, !0).fadeOut();
              }),
              $("#divWebPushStatus").html(e);
          }),
          (c.prototype.notifyEmailUpdateResult = function (e, t) {
            $("#divEmailStatusFrame")
              .removeClass()
              .show()
              .addClass(
                "Success" == t
                  ? "submit_success alert alert-success"
                  : "submit_failure alert alert-error"
              )
              .delay(6e4)
              .fadeOut()
              .click(function () {
                $(this).stop(!0, !0).fadeOut();
              }),
              $("#divEmailStatus").html(e);
          }),
          (c.prototype.registerForWebPush = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t,
                r = this;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      n.Helpers.PushSubscriptionManager.registerForPush(
                        this.webPushPublicKey
                      ),
                    ];
                  case 1:
                    return (
                      (t = e.sent()) && t.Endpoint
                        ? $.ajax({
                            type: "POST",
                            dataType: "json",
                            contentType: a,
                            data: JSON.stringify(t),
                            url:
                              "spa-api/queue/" +
                              this.options.customerId +
                              "/" +
                              this.options.eventId +
                              "/" +
                              this.options.queueId +
                              "/registerforwebpush/?cid=" +
                              (this.options.culture
                                ? this.options.culture
                                : "") +
                              "&l=" +
                              this.options.layout,
                            success: function (e) {
                              r.showWebPushRegisterUpdateResult(
                                e.Message,
                                e.Status
                              ),
                                r.toggleButton("#aRegisterForWebPush", !0);
                            },
                            error: function (e, t, i) {
                              r.showWebPushRegisterUpdateResult(
                                "Error subscribing for web push",
                                "error"
                              );
                              var n = e.status + " status code received";
                              r.logger.logAjaxCallError(
                                "Error subscribing to web push",
                                "InqueuePage",
                                e,
                                t,
                                i,
                                { message: n, name: "UpdateWebPushError" }
                              );
                            },
                          })
                        : this.showWebPushRegisterUpdateResult(
                            "Error subscribing for web push, Browser does not support Push Notification",
                            "error"
                          ),
                      [2]
                    );
                }
              });
            });
          }),
          (c.prototype.setActiveClient = function () {
            var e = this;
            this.isClientInactive(!1),
              this.showConfirmRedirectDialog(!1),
              this.options.isPreview ||
                this.ajaxGetStatus(!0, function () {
                  e.isRedirectPromptDialogConfirmed = !0;
                });
          }),
          (c.prototype.GetClientReadyToRedirect = function (e) {
            return (
              e ||
              (!this.layout.isRedirectPromptDialogEnabled &&
                !this.isClientInactive())
            );
          }),
          (c.prototype.challengeCallback = function (n, r) {
            return __awaiter(this, void 0, void 0, function () {
              var t, i;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return this.options.isPreview
                      ? (this.queueId(this.guid()),
                        $("body")
                          .removeClass(this.challengeClass)
                          .addClass(this.challengeSolvedClass),
                        [2])
                      : ((t = n),
                        !this.options.isQueueitEnqueueTokenRequired ||
                        this.isCustomerUsingEnqueueTokenV1()
                          ? [3, 2]
                          : (this.options
                              .showInviteOnlyEmailVerificationChallenge &&
                              !r &&
                              t.enqueueTokenFromChallenge &&
                              (r = t.enqueueTokenFromChallenge),
                            [4, this.enqueue(t.sessions, r)]));
                  case 1:
                    return e.sent(), [3, 10];
                  case 2:
                    if (this.requireKey || this.isQueueitEnqueueTokenRequired)
                      return [3, 8];
                    e.label = 3;
                  case 3:
                    return (
                      e.trys.push([3, 5, , 7]), [4, this.enqueue(t.sessions)]
                    );
                  case 4:
                    return e.sent(), [3, 7];
                  case 5:
                    return (
                      e.sent(),
                      [
                        4,
                        this.runChallenges(
                          this.challengeRunner,
                          this.challengeRedirectUrls
                        ),
                      ]
                    );
                  case 6:
                    return (i = e.sent()), this.challengeCallback(i), [3, 7];
                  case 7:
                    return [3, 10];
                  case 8:
                    return (
                      $("body")
                        .removeClass(this.challengeClass)
                        .addClass(this.challengeSolvedClass),
                      [4, this.customData.setCaptchaSession(t.sessions)]
                    );
                  case 9:
                    e.sent(), (e.label = 10);
                  case 10:
                    return [2];
                }
              });
            });
          }),
          (c.prototype.onQueueIdReceived = function (e) {
            this.setQueueId(e),
              this.notifyFrames(
                new r(null, null, null, null, null, this.queueId(), null)
              ),
              this.initialWindowLocation(null),
              this.continueAfterResolvingQueueId();
          }),
          (c.prototype.continueAfterResolvingQueueId = function () {
            this.removeURLParameter(this.originalUrl, "scv"),
              this.removeURLParameter(this.originalUrl, "enqueuetoken");
            var e = -1 === window.location.href.indexOf("?") ? "?" : "&",
              t = window.location.href + e + "q=" + this.queueId();
            window.history.replaceState
              ? window.history.replaceState(null, document.title, t)
              : (window.location.href = t),
              this.removeQueueIdParameter(),
              this.options.isPreview || this.start();
          }),
          (c.prototype.isClientInBeforeState = function () {
            return "before" === $("body").attr("data-pageid");
          }),
          (c.prototype.trySwitchBeforePageToQueue = function () {
            this.isClientInBeforeState() &&
              ($("body")
                .attr("data-pageid", "queue")
                .addClass("queue")
                .removeClass("prequeue")
                .removeClass("before")
                .removeClass("idle"),
              this.doStatusChangeCallbacks("queue"),
              this.texts.switchBeforeToQueueTexts(),
              this.isBeforeOrIdle(!1));
          }),
          (c.prototype.onReady = function () {
            var e = this;
            this.hasQueueId() &&
              this.removeURLParameter(this.originalUrl, "scv"),
              this.removeQueueIdParameter();
            var t,
              i = this.options.culture;
            if (
              ((t = this.isBeforeOrIdle() ? "before" : "queue"),
              this.isBeforeOrIdle())
            ) {
              var n = $;
              n.countdown.setDefaults(n.countdown.regional[i]);
              var r = this.ticket.secondsToStart();
              n("#defaultCountdown").countdown({
                until: r,
                format: "dhmS",
                layout:
                  '{d<}{dnn} <span class="countdown_label">{dl}</span>{d>} {h<}{hnn} <span class="countdown_label">{hl}</span>{h>} {m<}{mnn} <span class="countdown_label">{ml}</span>{m>} {snn} <span class="countdown_label">{sl}</span>',
                expiryText:
                  '<div class="finished">' +
                  this.texts.countdownFinishedText +
                  " </div>",
                onExpiry: function () {
                  return e.trySwitchBeforePageToQueue();
                },
              }),
                0 === r && this.trySwitchBeforePageToQueue();
            }
            var s = this.message() ? this.message().timeSpanSeconds : 60;
            this.initializeDynamicMessageLastUpdatedTimer(s, i),
              o.prototype.onReady.call(this, t);
          }),
          (c.prototype.removeQueueIdParameter = function () {
            this.initialWindowLocation() ||
              this.initialWindowLocation(window.location.toString());
            var e = window.location.href.indexOf("&q=");
            if (-1 != e && this.hasEventCookie()) {
              var t = window.location.href.substr(e, 39),
                i = window.location.href.replace(t, "");
              window.history.replaceState &&
                window.history.replaceState(null, document.title, i);
            }
          }),
          (c.prototype.hasEventCookie = function () {
            var e =
              "Queue-it-" +
              new h.Tools.StringUtil().padRight(
                Array(21).join("_"),
                this.customerId
              ) +
              this.eventId;
            return null != new h.Tools.CookieUtil().getCookie(e);
          }),
          (c.prototype.receiveMessage = function (e, t) {
            switch (e.messageType) {
              case "RequestRefresh":
                return void this.notifyFrames(
                  new r(
                    this.isBeforeOrIdle()
                      ? null
                      : parseInt(t.ticket.queueNumber()),
                    this.isBeforeOrIdle()
                      ? null
                      : t.ticket.usersInLineAheadOfYou(),
                    this.isBeforeOrIdle() ? "before" : "queue",
                    this.getTargetUrlParams(),
                    this.options.targetUrl,
                    this.queueId(),
                    null != this.options.inqueueInfo.texts
                      ? this.options.inqueueInfo.texts.tags
                      : null
                  )
                );
              default:
                return;
            }
          }),
          (c.prototype.toggleButton = function (e, t) {
            $(e).prop("disabled", t),
              t
                ? $(e).addClass("btn-disabled")
                : $(e).removeClass("btn-disabled");
          }),
          (c.prototype.toggleQueueIdLinkModal = function (e, t) {
            if ($(t.target).hasClass("btn-close")) t.stopPropagation();
            else if ($(t.target).parents(".modal-content").length) return;
            this.clipboard || (this.clipboard = new ClipboardJS(".btn")),
              this.queueIdLinkModalVisible(!this.queueIdLinkModalVisible());
          }),
          (c.prototype.onEnterToggleQueueIdLinkModal = function (e, t) {
            t.keyCode === h.Queue.Helpers.KeyCode.Enter &&
              this.toggleQueueIdLinkModal(e, t);
          }),
          (c.prototype.guid = function () {
            function e() {
              return Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
            }
            return (
              e() +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              e() +
              e()
            );
          }),
          (c.prototype.getQueryStringParam = function (e, t) {
            for (
              var i = 0, n = e.substring(e.indexOf("?") + 1).split("&");
              i < n.length;
              i++
            ) {
              var r = n[i];
              if (r.split("=")[0] == t) return r.split("=")[1];
            }
          }),
          (c.prototype.tryGetSoftblockValidationsessionInfofromUrl =
            function () {
              return this.getQueryStringParam(this.originalUrl, "scv");
            }),
          (c.prototype.removeURLParameter = function (e, t) {
            var i = e.split("?");
            if (window.history.replaceState && 2 <= i.length) {
              for (
                var n = encodeURIComponent(t) + "=",
                  r = i[1].split(/[&;]/g),
                  s = r.length;
                0 < s--;

              )
                -1 !== r[s].lastIndexOf(n, 0) && r.splice(s, 1);
              var o = i[0] + (0 < r.length ? "?" + r.join("&") : "");
              window.history.replaceState(null, document.title, o);
            }
          }),
          (c.prototype.initQueueViewSession = function () {
            this.queueViewSession =
              "&seid=" + this.guid() + "&sets=" + this.getSessionTS();
          }),
          (c.prototype.getSessionTS = function () {
            return (
              Date.now ||
                (Date.now = function () {
                  return new Date().getTime();
                }),
              Date.now().toString()
            );
          }),
          c);
      function c(e) {
        var r = o.call(this, e.customerId, e.eventId) || this;
        return (
          (r._firstInLine = !1),
          (r._soundIsPlayingFlag = !1),
          (r.isRedirectPromptDialogConfirmed = null),
          (r._logSoundPlayerInfo = {
            SoundPlayer_setup_IsCalled: !1,
            SoundPlayer_onready_IsCalled: !1,
            SoundPlayer_onready_Exception: !1,
          }),
          (r.waitingStateUpdateInterval = 6e4),
          (r.originalUrl = window.location.href),
          (r.challengeSolvedClass = "challenge-solved"),
          (r.challengeClass = "challenge"),
          (r.getStatus = function () {
            return r.inqueueStatus;
          }),
          (r.getIsRedirectedToTarget = function () {
            return r.isRedirectedToTarget;
          }),
          (r.getQueueId = function () {
            return r.options.queueId;
          }),
          (r.setQueueId = function (e) {
            (r.options.queueId = e), r.queueId(e);
          }),
          (r.updateNotify = function () {
            r.toggleButton(s, !0),
              $("#MainPart_inpEmailAddress").on(
                "change keyup paste",
                function () {
                  r.toggleButton(s, !1);
                }
              ),
              $.ajax({
                type: "POST",
                dataType: "json",
                contentType: a,
                data: JSON.stringify({
                  email: r.emailAddress(),
                  targetUrl: r.options.targetUrl,
                  targetUrlHash: r.getTargetUrlHash(),
                  customUrlParams: r.options.customUrlParams,
                  layoutName: r.options.layout,
                }),
                url:
                  "spa-api/queue/" +
                  r.options.customerId +
                  "/" +
                  r.options.eventId +
                  "/" +
                  r.options.queueId +
                  "/updateemail/?cid=" +
                  (r.options.culture ? r.options.culture : ""),
                success: function (e) {
                  r.notifyEmailUpdateResult(e.Message, e.Status);
                },
                error: function (e, t, i) {
                  r.toggleButton(s, !1),
                    r.notifyEmailUpdateResult("Error subscribing", "error");
                  var n = e.status + " status code received";
                  r.logger.logAjaxCallError(
                    "Error subscribing to e-mail notification",
                    "InqueuePage",
                    e,
                    t,
                    i,
                    { message: n, name: "UpdateEmailError" }
                  );
                },
              });
          }),
          (r.options = e),
          (r.enqueuer = new n.Enqueuer(r.options.customerId, r.eventId)),
          (r.inqueueStatus = "NotReadyYet"),
          (r.notReadyCount = 0),
          (r.jsErrorCount = 0),
          (r.lastTryUpdate = new Date()),
          (r.lastLayoutVersion = e.layoutVersion),
          (r.lastLayoutName = e.layout),
          (r.requireKey = e.requireKey),
          (r.isQueueitEnqueueTokenRequired = e.isQueueitEnqueueTokenRequired),
          (r.detector = new n.InactivityDetector()),
          (r.queueItemInfoHelper = new n.QueueItemInfoHelper()),
          (r.webPushPublicKey = e.webPushPublicKey),
          (r.redirector = {
            redirect: function (e) {
              e ? (window.location.href = e) : window.location.reload();
            },
          }),
          (r.cssReplacer = {
            replace: function (e) {
              $("head> link").filter("[href$='.css']").remove(),
                $("head").append(e);
            },
          }),
          (r.creole = new Parse.Simple.Creole({ forIE: document.all })),
          (r.isBeforeOrIdle = ko.observable(e.isBeforeOrIdle)),
          (r.queueIdLinkTabIndex = ko.computed(function () {
            return r.isBeforeOrIdle() ? null : "0";
          })),
          r.isBeforeOrIdle()
            ? (r.updateInterval = 5e3)
            : (r.updateInterval = 2e3),
          (r.showConfirmRedirectDialog = ko.observable(!1)),
          (r.queueIdLinkModalVisible = ko.observable(!1)),
          (r.message = ko.observable(void 0)),
          (r.queueId = ko.observable(e.queueId)),
          (r.hasQueueId = ko.computed(function () {
            return "00000000-0000-0000-0000-000000000000" != r.queueId();
          })),
          (r.isRunning = ko.observable(!0)),
          (r.isRedirected = !1),
          (r.isRedirectedToTarget = !1),
          (r.emailAddress = ko.observable(null)),
          (r.isClientInactive = ko.observable(!1)),
          (r.ticket = new n.Ticket(null)),
          (r.initialWindowLocation = ko.observable("")),
          h.Queue.Helpers.FocusTrapper.addFocusTrapper(
            "#queueIdLinkModal",
            r.queueIdLinkModalVisible
          ),
          h.Queue.Helpers.FocusTrapper.addFocusTrapper(
            "#divConfirmRedirectModal",
            r.showConfirmRedirectDialog
          ),
          r
        );
      }
      n.InQueueView = i;
    })(h.Queue || (h.Queue = {}));
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n() {
      var e = this;
      try {
        document.addEventListener(
          "visibilitychange",
          function () {
            return e.handleVisibilityChange();
          },
          !1
        );
      } catch (e) {
        window.logger.Debug(
          { Message: "Error in adding visibilitychange", Ex: e },
          2053
        );
      }
      try {
        document.addEventListener(
          "mozvisibilitychange",
          function () {
            return e.handleVisibilityChange();
          },
          !1
        );
      } catch (e) {
        window.logger.Debug(
          { Message: "Error in adding mozvisibilitychange", Ex: e },
          2054
        );
      }
      try {
        document.addEventListener(
          "webkitvisibilitychange",
          function () {
            return e.handleVisibilityChange();
          },
          !1
        );
      } catch (e) {
        window.logger.Debug(
          { Message: "Error in adding webkitvisibilitychange", Ex: e },
          2055
        );
      }
      try {
        document.addEventListener(
          "msvisibilitychange",
          function () {
            return e.handleVisibilityChange();
          },
          !1
        );
      } catch (e) {
        window.logger.Debug(
          { Message: "Error in adding msvisibilitychange", Ex: e },
          2056
        );
      }
    }
    (t = e.Queue || (e.Queue = {})),
      (n.prototype.handleVisibilityChange = function () {
        var e = document;
        this._isHidden =
          e.hidden || e.mozHidden || e.webkitHidden || e.msHidden;
      }),
      (n.prototype.isHidden = function () {
        return this._isHidden;
      }),
      (i = n),
      (t.InactivityDetector = i);
  })((QueueIt = QueueIt || {})),
  (function (i) {
    var e, t;
    function n(e) {
      (this.body = ko.observable()),
        (this.disclaimerText = ko.observable()),
        (this.header = ko.observable()),
        (this.queueBody = ko.observable()),
        (this.queueHeader = ko.observable()),
        (this.bottompanelIFrameSrc = ko.observable()),
        (this.leftpanelIFrameSrc = ko.observable()),
        (this.logoSrc = ko.observable()),
        (this.middlepanelIFrameSrc = ko.observable()),
        (this.rightpanelIFrameSrc = ko.observable()),
        (this.sidepanelIFrameSrc = ko.observable()),
        (this.toppanelIFrameSrc = ko.observable()),
        (this.whatIsThisUrl = ko.observable()),
        (this.cookiesInfoClass = ko.observable()),
        (this.cookiesInfoText = ko.observable()),
        (this.cookiesInfoTooltip = ko.observable()),
        this.refresh(e);
    }
    (e = i.Queue || (i.Queue = {})),
      (n.prototype.refresh = function (e) {
        var t = e.inQueueTexts;
        t &&
          ((this.welcomeSoundUrls = t.welcomeSoundUrls),
          (this.isWelcomeSoundEnabled =
            this.welcomeSoundUrls && 0 < this.welcomeSoundUrls.length),
          e.isBeforeOrIdle && 0 === e.secondsToStart
            ? (this.body() != t.queueBody && this.body(t.queueBody),
              this.header() != t.queueHeader && this.header(t.queueHeader))
            : (this.body() != t.body && this.body(t.body),
              this.header() != t.header && this.header(t.header)),
          this.disclaimerText() != t.disclaimerText &&
            this.disclaimerText(t.disclaimerText),
          this.queueBody() != t.queueBody && this.queueBody(t.queueBody),
          this.queueHeader() != t.queueHeader &&
            this.queueHeader(t.queueHeader),
          this.logoSrc() != t.logoSrc && this.logoSrc(t.logoSrc),
          (this.styleSheets = t.styleSheets),
          this.sidepanelIFrameSrc() != t.sidepanelIFrameSrc &&
            this.sidepanelIFrameSrc(t.sidepanelIFrameSrc),
          this.toppanelIFrameSrc() != t.toppanelIFrameSrc &&
            this.toppanelIFrameSrc(t.toppanelIFrameSrc),
          this.rightpanelIFrameSrc() != t.rightpanelIFrameSrc &&
            this.rightpanelIFrameSrc(t.rightpanelIFrameSrc),
          this.middlepanelIFrameSrc() != t.middlepanelIFrameSrc &&
            this.middlepanelIFrameSrc(t.middlepanelIFrameSrc),
          this.leftpanelIFrameSrc() != t.leftpanelIFrameSrc &&
            this.leftpanelIFrameSrc(t.leftpanelIFrameSrc),
          this.bottompanelIFrameSrc() != t.bottompanelIFrameSrc &&
            this.bottompanelIFrameSrc(t.bottompanelIFrameSrc),
          this.whatIsThisUrl() != t.whatIsThisUrl &&
            this.whatIsThisUrl(t.whatIsThisUrl),
          this.countdownFinishedText != t.countdownFinishedText &&
            (this.countdownFinishedText = t.countdownFinishedText),
          i.Queue.Helpers.CookieHelper.isCookieEnabled()
            ? (this.cookiesInfoText() != t.cookiesAllowedInfoText &&
                this.cookiesInfoText(t.cookiesAllowedInfoText),
              this.cookiesInfoTooltip() != t.cookiesAllowedInfoTooltip &&
                this.cookiesInfoTooltip(t.cookiesAllowedInfoTooltip),
              "cookiesAllowed" != this.cookiesInfoClass() &&
                this.cookiesInfoClass("cookiesAllowed"))
            : (this.cookiesInfoText() != t.cookiesNotAllowedInfoText &&
                this.cookiesInfoText(t.cookiesNotAllowedInfoText),
              this.cookiesInfoTooltip() != t.cookiesNotAllowedInfoTooltip &&
                this.cookiesInfoTooltip(t.cookiesNotAllowedInfoTooltip),
              "cookiesNotAllowed" != this.cookiesInfoClass() &&
                this.cookiesInfoClass("cookiesNotAllowed")));
      }),
      (n.prototype.switchBeforeToQueueTexts = function () {
        this.body(this.queueBody()), this.header(this.queueHeader());
      }),
      (t = n),
      (e.InQueueTexts = t);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var o, t;
    function i(e) {
      var s = this;
      (this.whenClosedPreventChangeWithKeyboard = function (e, t) {
        var i = t.altKey,
          n = t.keyCode === o.Helpers.KeyCode.ArrowDown,
          r = t.keyCode === o.Helpers.KeyCode.ArrowUp;
        return !(!i || (!n && !r)) || !!s.isKeyAllowed(t.keyCode);
      }),
        (this.isKeyAllowed = function (e) {
          return (
            e !== o.Helpers.KeyCode.ArrowUp &&
            e !== o.Helpers.KeyCode.ArrowRight &&
            e !== o.Helpers.KeyCode.ArrowDown &&
            e !== o.Helpers.KeyCode.ArrowLeft &&
            e !== o.Helpers.KeyCode.PageUp &&
            e !== o.Helpers.KeyCode.PageDown &&
            e !== o.Helpers.KeyCode.Home &&
            e !== o.Helpers.KeyCode.End
          );
        }),
        (this.languages = ko.observableArray()),
        (this.languageSelectorVisible = ko.observable()),
        (this.selectedLanguage = ko.observable(e.selectedLanguage)),
        this.refreshLanguageSelector(e, Boolean(e.languageSelectorVisible));
    }
    (o = e.Queue || (e.Queue = {})),
      (i.prototype.changeLanguage = function () {
        var e = document.location.href,
          t = e.split("?");
        if (2 <= t.length) {
          for (
            var i = encodeURIComponent("cid") + "=",
              n = t[1].split(/[&;]/g),
              r = n.length - 1;
            0 <= r;
            r--
          )
            -1 !== n[r].lastIndexOf(i, 0) && n.splice(r, 1);
          e = t[0] + "?" + n.join("&");
        }
        document.location.href = e + "&cid=" + this.selectedLanguage();
      }),
      (i.prototype.refreshLanguageSelector = function (e, t) {
        var i = this;
        if ((this.languageSelectorVisible(t), e.languages)) {
          for (var n = [], r = 0; r < e.languages.length; ++r)
            n.push({ text: e.languages[r].Text, value: e.languages[r].Value }),
              e.languages[r].Selected &&
                this.selectedLanguage(e.languages[r].Value);
          JSON.stringify(this.languages()) !== JSON.stringify(n) &&
            (this._selectedLanguageSubscribe &&
              this._selectedLanguageSubscribe.dispose(),
            this.languages.removeAll(),
            this.languages(n),
            (this._selectedLanguageSubscribe = this.selectedLanguage.subscribe(
              function () {
                return i.changeLanguage();
              }
            )));
        }
      }),
      (t = i),
      (o.LanguageSelector = t);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n(e, t, i) {
      var n = this;
      (this.servicedSoonDelayLengthMS = 15e3),
        (this.firstInLineTimeStamp = null),
        (this.bottomPanelVisible = ko.observable()),
        (this.dynamicMessageVisible = ko.observable()),
        (this.expectedServiceTimeVisible = ko.observable()),
        (this.firstInLineVisible = ko.observable()),
        (this.leftPanelVisible = ko.observable()),
        (this.middlePanelVisible = ko.observable()),
        (this.queueIsPausedVisible = ko.observable()),
        (this.queueNumberVisible = ko.observable()),
        (this.queueNumberLoadingVisible = ko.observable()),
        (this.reminderEmailVisible = ko.observable()),
        (this.reminderVisible = ko.observable()),
        (this.rightPanelVisible = ko.observable()),
        (this.servicedSoonVisible = ko.observable()),
        (this.sidePanelVisible = ko.observable()),
        (this.topPanelVisible = ko.observable()),
        (this.usersInLineAheadOfYouVisible = ko.observable()),
        (this.usersInQueueVisible = ko.observable()),
        (this.logoVisible = ko.observable()),
        (this.whichIsInVisible = ko.observable()),
        (this.progressVisible = ko.observable()),
        (this.servicedSoonDelayVisible = ko.observable(!1)),
        (this.languageSelectorVisible = ko.observable()),
        (this.shouldShowReminder = ko.computed(function () {
          return !!n.reminderVisible() && n.reminderEmailVisible();
        })),
        this.refresh(e, i);
    }
    (t = e.Queue || (e.Queue = {})),
      (n.prototype.refresh = function (e, t) {
        e &&
          ((this.isRedirectPromptDialogEnabled =
            e.isRedirectPromptDialogEnabled),
          this.bottomPanelVisible(e.bottomPanelVisible),
          this.dynamicMessageVisible(e.dynamicMessageVisible),
          this.expectedServiceTimeVisible(e.expectedServiceTimeVisible && !t),
          this.firstInLineVisible(t || e.firstInLineVisible),
          this.leftPanelVisible(e.leftPanelVisible),
          this.middlePanelVisible(e.middlePanelVisible),
          this.queueIsPausedVisible(e.queueIsPausedVisible),
          this.queueNumberVisible(e.queueNumberVisible),
          this.queueNumberLoadingVisible(e.queueNumberLoadingVisible),
          this.reminderEmailVisible(e.reminderEmailVisible),
          this.reminderVisible(e.reminderVisible),
          this.rightPanelVisible(e.rightPanelVisible),
          this.servicedSoonVisible(t && !e.queueIsPausedVisible),
          this.sidePanelVisible(e.sidePanelVisible),
          this.topPanelVisible(e.topPanelVisible),
          this.usersInLineAheadOfYouVisible(
            e.usersInLineAheadOfYouVisible && !t
          ),
          this.usersInQueueVisible(e.usersInQueueVisible),
          this.logoVisible(e.logoVisible),
          this.whichIsInVisible(e.whichIsInVisible && !t),
          this.progressVisible(e.progressVisible),
          this.languageSelectorVisible(e.languageSelectorVisible),
          t && null == this.firstInLineTimeStamp
            ? (this.firstInLineTimeStamp = new Date())
            : t &&
              null != this.firstInLineTimeStamp &&
              !this.servicedSoonDelayVisible() &&
              Date.now() - this.firstInLineTimeStamp.valueOf() >
                this.servicedSoonDelayLengthMS &&
              this.servicedSoonDelayVisible(!0));
      }),
      (i = n),
      (t.Layout = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    function t(e, t) {
      (this.header = null == e ? null : e.header),
        (this.id = null == e ? null : e.id),
        (this.text = null == e ? null : e.text),
        (this.timestamp =
          e && e.timestamp ? new Date(e.timestamp) : new Date()),
        (this.timestampFormatted = null == e ? null : e.timestampFormatted),
        (this.timeZonePostfix = null == e ? null : e.timeZonePostfix),
        (this.timeSpanSeconds =
          null == e ? null : 60 < e.timeSpanSeconds ? e.timeSpanSeconds : 60),
        t(this.timeSpanSeconds);
    }
    (e.Queue || (e.Queue = {})).Message = t;
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n() {
      this.cache = {};
    }
    (t = e.Queue || (e.Queue = {})),
      (n.prototype.tryCacheHeader = function (e, t) {
        if (e && t) {
          var i = t.getResponseHeader(n.HeaderName);
          i && (this.cache[e] = i);
        }
      }),
      (n.prototype.setHeaderFromCache = function (e, t) {
        if (e && t) {
          var i = this.cache[e];
          i && t.setRequestHeader(n.HeaderName, i);
        }
      }),
      (n.HeaderName = "X-Queueit-Queueitem-V1"),
      (i = n),
      (t.QueueItemInfoHelper = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var i, n, t;
    function r(e) {
      var t = n.call(this, e.customerId, e.eventId) || this;
      return (
        (t.pageId = "softblock"),
        (t._options = e),
        t.notifyFrames(
          new i.UpdateQueueFrameDto(
            null,
            null,
            t.pageId,
            new Array(),
            null,
            null,
            t._options.tags
          )
        ),
        (t.challengeRedirectUrls = new i.ChallengeRedirectUrls(e)),
        (t.challengeRunner = new i.ChallengeRunner(e, t.userId)),
        t.challengeRunner.init(),
        t
          .runChallenges(t.challengeRunner, t.challengeRedirectUrls)
          .then(function (e) {
            return t.challengeCallback(e);
          }),
        t
      );
    }
    (i = e.Queue || (e.Queue = {})),
      (n = i.ViewBase),
      __extends(r, n),
      (r.prototype.challengeCallback = function (i) {
        return __awaiter(this, void 0, void 0, function () {
          var t;
          return __generator(this, function (e) {
            return (
              null != (t = i) &&
                (window.location.href = ""
                  .concat(decodeURIComponent(this._options.inqueueUrl), "&scv=")
                  .concat(encodeURIComponent(JSON.stringify(t.sessions[0])))),
              [2]
            );
          });
        });
      }),
      (r.prototype.receiveMessage = function (e) {
        "RequestRefresh" === e.messageType &&
          this.notifyFrames(
            new i.UpdateQueueFrameDto(
              null,
              null,
              "softblock",
              new Array(),
              null,
              null,
              this._options.tags
            )
          );
      }),
      (t = r),
      (i.SoftblockViewModel = t);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n(e) {
      var t = this;
      (this.isReady = !1),
        (this.expectedServiceTime = ko.observable()),
        (this.lastUpdated = ko.observable()),
        (this.queueNumber = ko.observable()),
        (this.usersInLineAheadOfYou = ko.observable()),
        (this.whichIsIn = ko.observable()),
        (this.progress = ko.observable(0.01)),
        (this.timeZonePostfix = ko.observable()),
        (this.windowStartTime = ko.observable()),
        (this.eventStartTimeFormatted = ko.observable()),
        (this.secondsToStart = ko.observable()),
        (this.usersInQueue = ko.observable(0)),
        this.refresh(e),
        $(window).on("load", function () {
          (t.isReady = !0), t.setProgressBar(100 * t.progress());
        });
    }
    (t = e.Queue || (e.Queue = {})),
      (n.prototype.refresh = function (e) {
        if (e) {
          this.expectedServiceTime() != e.expectedServiceTime &&
            this.expectedServiceTime(e.expectedServiceTime),
            this.lastUpdated() != e.lastUpdated &&
              this.lastUpdated(e.lastUpdated),
            this.queueNumber() != e.queueNumber &&
              this.queueNumber(e.queueNumber);
          var t = parseInt(e.usersInLineAheadOfYou);
          this.usersInLineAheadOfYou() != t &&
            (isNaN(this.usersInLineAheadOfYou()) ||
              isNaN(t) ||
              this.usersInLineAheadOfYou() > t) &&
            this.usersInLineAheadOfYou(t),
            this.whichIsIn() != e.whichIsIn && this.whichIsIn(e.whichIsIn),
            null != e.progress &&
              e.progress != this.progress() &&
              (this.progress(e.progress),
              this.setProgressBar(100 * this.progress())),
            this.timeZonePostfix(e.timeZonePostfix),
            !this.windowStartTime() &&
              e.windowStartTime &&
              this.windowStartTime(e.windowStartTime),
            this.eventStartTimeFormatted(e.eventStartTimeFormatted),
            this.secondsToStart(e.secondsToStart),
            this.usersInQueue(e.usersInQueue);
        }
      }),
      (n.prototype.setProgressBar = function (e) {
        this.isReady && window.progressBar(e, $(".progressbar"));
      }),
      (i = n),
      (t.Ticket = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var o, t;
    function i(e, t, i) {
      (this.hasAnimation = e),
        (this.options = t),
        (this.userId = i),
        (this.hasRun = !1),
        (this.loadedCallbackName = "loadChallengeWidget"),
        (this.scriptSource = this.options.botDetectSource),
        (this.host = this.options.botDetectHost),
        (this.challengeVerifyProvider = "botdetect"),
        (this.culture = t.culture);
    }
    (o = e.Queue || (e.Queue = {})),
      (i.prototype.getName = function () {
        return o.ChallengeType.BotDetect;
      }),
      (i.prototype.getChallengeVerifyProvider = function () {
        return this.challengeVerifyProvider;
      }),
      (i.prototype.shouldDisplayAnimation = function () {
        return this.hasAnimation;
      }),
      (i.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
          var s = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (t, i) {
                window[s.loadedCallbackName] = function () {
                  if (window.botdetect) t();
                  else {
                    var e = {
                      type: "initError",
                      message: "botdetect is not found in window",
                      challengeType: o.ChallengeType.BotDetect,
                    };
                    i(e);
                  }
                  delete window[s.loadedCallbackName];
                };
                var n = document.createElement("script"),
                  r = document.head || document.getElementsByTagName("head")[0];
                (n.async = !0),
                  (n.src = s.scriptSource),
                  n.setAttribute("data-host", s.host),
                  (n.type = "text/javascript"),
                  (n.defer = !0),
                  (n.onerror = function () {
                    var e = {
                      type: "initError",
                      message: "Failed to load script",
                      challengeType: o.ChallengeType.BotDetect,
                      blockedUrl: s.scriptSource,
                    };
                    r.removeChild(n), i(e);
                  }),
                  r.appendChild(n);
              }),
            ];
          });
        });
      }),
      (i.prototype.canRetry = function () {
        return botdetect.canRetry();
      }),
      (i.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.hasRun
                  ? this.canRetry()
                    ? [4, this.internalRetry()]
                    : [2, { type: "allRetriesUsed" }]
                  : [3, 2];
              case 1:
                return [2, e.sent()];
              case 2:
                return [4, this.internalRun()];
              case 3:
                return [2, e.sent()];
            }
          });
        });
      }),
      (i.prototype.internalRun = function () {
        return __awaiter(this, void 0, void 0, function () {
          var r = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (t) {
                (r.internalResolve = function (e) {
                  (r.hasRun = !0), t(e);
                }),
                  botdetect.render("challenge-container", {
                    callback: function (e, t, i, n) {
                      (r.hasRun = !0),
                        r.resolver({
                          type: "success",
                          sessionId: e,
                          challengeDetails: t,
                          solution: i,
                          solverStats: n,
                        });
                    },
                    errorHandler: function (e) {
                      r.resolver({ type: "error", message: e });
                    },
                    culture: r.options.culture,
                  });
              }),
            ];
          });
        });
      }),
      (i.prototype.internalRetry = function () {
        return __awaiter(this, void 0, void 0, function () {
          var t = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (e) {
                (t.internalResolve = e), botdetect.reset();
              }),
            ];
          });
        });
      }),
      (i.prototype.cleanup = function () {}),
      (i.prototype.resolver = function (e) {
        this.internalResolve(e);
      }),
      (t = i),
      (o.BotDetectRun = t);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var r, t;
    function i(e) {
      this.options = e;
    }
    (r = e.Queue || (e.Queue = {})),
      (i.prototype.getTimeoutRedirectUrl = function () {
        return this.appendOptionsToRedirectUrl(
          "/fraudprotection/challengesolvetimeout"
        );
      }),
      (i.prototype.getRetriesUsedUpRedirectUrl = function (e) {
        return (
          this.appendOptionsToRedirectUrl(
            "/fraudprotection/challengeretriesusedup"
          ) +
          "&challengeType="
            .concat(e.challengeType, "& message=")
            .concat(e.message)
        );
      }),
      (i.prototype.getGeneralErrorRedirectUrl = function (e) {
        return (
          this.appendOptionsToRedirectUrl(
            "/fraudprotection/challengegeneralerror"
          ) +
          "&challengeType="
            .concat(e.errorChallengeType, "&message=")
            .concat(e.message)
        );
      }),
      (i.prototype.getChallengeInitErrorRedirectUrl = function (e) {
        return (
          this.appendOptionsToRedirectUrl(
            "/fraudprotection/challengeiniterror"
          ) +
          "&challengeType="
            .concat(e.challengeType, "&blockedUrl=")
            .concat(encodeURIComponent(e.blockedUrl))
        );
      }),
      (i.prototype.appendOptionsToRedirectUrl = function (e) {
        return (
          (e += "?c=" + this.options.customerId + "&e=" + this.options.eventId),
          this.options.targetUrl && (e += "&t=" + this.options.targetUrl),
          this.options.layout && (e += "&l=" + this.options.layout),
          this.options.customUrlParams && (e = this.addTargetUrlParams(e)),
          e
        );
      }),
      (i.prototype.addTargetUrlParams = function (e) {
        for (
          var t = 0, i = r.getTargetUrlParams(this.options.customUrlParams);
          t < i.length;
          t++
        ) {
          var n = i[t];
          e += "&t_" + n.key + "=" + n.value;
        }
        return e;
      }),
      (t = i),
      (r.ChallengeRedirectUrls = t);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t;
    ((t = e.Queue || (e.Queue = {})).isRunErrorResult = function (e) {
      return "error" === e.type;
    }),
      (t.isRunAllRetriesUsedResult = function (e) {
        return "allRetriesUsed" === e.type;
      });
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    ((t = e.Queue || (e.Queue = {})).isRunnerSuccessResult = function (e) {
      return "success" === e.type;
    }),
      (t.isRunnerInitErrorResult = function (e) {
        return "initError" === e.type;
      }),
      (t.isRunnerNotVerifiedResult = function (e) {
        return "notVerified" === e.type;
      }),
      (t.isRunnerVerifyErrorResult = function (e) {
        return "providerError" === e.type;
      }),
      (t.isRunnerRetriesErrorResult = function (e) {
        return "retriesUsedUpError" === e.type;
      }),
      (t.isRunnerProviderErrorResult = function (e) {
        return "providerError" === e.type;
      }),
      ((i = t.ChallengeType || (t.ChallengeType = {})).None = "None"),
      (i.Recaptcha = "Recaptcha"),
      (i.RecaptchaInvisible = "RecaptchaInvisible"),
      (i.ProofOfWork = "ProofOfWork"),
      (i.ProofOfWorkAlias = "POW"),
      (i.BotDetect = "BotDetect"),
      (i.InviteOnlyEmailVerification = "InviteOnlyEmailVerification");
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var d, t;
    function i(e, t, i) {
      (this.customerId = e),
        (this.eventId = t),
        (this.challengeVerifyEndpoint = i);
    }
    (d = e.Queue || (e.Queue = {})),
      (i.prototype.verify = function (a, u, l, c, h) {
        return __awaiter(this, void 0, void 0, function () {
          var t,
            i,
            n,
            r,
            s,
            o = this;
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                (t = function (t) {
                  return polly()
                    .waitAndRetry([300, 900, 2700, 8100, 1e4])
                    .executeForPromise(function () {
                      return __awaiter(o, void 0, void 0, function () {
                        return __generator(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [
                                4,
                                $.ajax({
                                  type: "POST",
                                  dataType: "json",
                                  contentType: "application/json",
                                  data: JSON.stringify({
                                    challengeType: a,
                                    sessionId: u,
                                    challengeDetails: l,
                                    solution: btoa(JSON.stringify(c)),
                                    stats: h,
                                    customerId: this.customerId,
                                    eventId: this.eventId,
                                    version: 6,
                                  }),
                                  url: t,
                                }),
                              ];
                            case 1:
                              return [2, e.sent()];
                          }
                        });
                      });
                    });
                }),
                  (e.label = 1);
              case 1:
                return (
                  e.trys.push([1, 3, , 4]), [4, t(this.challengeVerifyEndpoint)]
                );
              case 2:
                return ((i = e.sent()).responseType = "verified"), [3, 4];
              case 3:
                return (
                  (n = e.sent()),
                  (r = { responseType: "error" }),
                  void 0 !== (s = n).status
                    ? (r.error = new d.ChallengeVerifyAjaxError({
                        Message: "Unable to verify",
                        AjaxErrorLog: {
                          HttpStatus: s.status,
                          AjaxErrorStatus: s.statusText,
                          AjaxErrorThrown: s.responseText,
                        },
                        JqXHR: s,
                      }))
                    : (r.error = new d.ChallengeVerifyAjaxError({
                        Message: n,
                        AjaxErrorLog: null,
                        JqXHR: null,
                      })),
                  [3, 4]
                );
              case 4:
                return null != i && i.isVerified
                  ? [2, i]
                  : [
                      2,
                      {
                        responseType: "notVerified",
                        message: i.sessionInfo
                          ? "Challenge not verified"
                          : "No challenge session info returned",
                      },
                    ];
            }
          });
        });
      }),
      (t = i),
      (d.ChallengeVerifier = t);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t;
    function i(e) {
      this.innerError = e;
    }
    ((t = e.Queue || (e.Queue = {})).ChallengeVerifyAjaxError = i),
      (t.isVerifierVerifiedResponse = function (e) {
        return "verified" === e.responseType;
      }),
      (t.isVerifierErrorResponse = function (e) {
        return "error" === e.responseType;
      }),
      (t.isVerifierNotVerifiedResponse = function (e) {
        return "notVerified" === e.responseType;
      });
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var t, i;
    function n(e, t, i) {
      void 0 === i && (i = "challenge-container"),
        (this.hasAnimation = e),
        (this.targetContainerId = i),
        (this.challengeVerifyProvider = "inviteOnlyEmailVerification"),
        (this.scriptSource = t.inviteOnlyEmailVerificationSource),
        (this.host = t.inviteOnlyEmailVerificationHost),
        (this.culture = t.culture),
        (this.loadedCallbackName =
          "loadInviteOnlyEmailVerificationChallengeWidget");
    }
    (t = e.Queue || (e.Queue = {})),
      (n.prototype.getName = function () {
        return t.ChallengeType.InviteOnlyEmailVerification;
      }),
      (n.prototype.getChallengeVerifyProvider = function () {
        return this.challengeVerifyProvider;
      }),
      (n.prototype.shouldDisplayAnimation = function () {
        return this.hasAnimation;
      }),
      (n.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
          var r = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (e, t) {
                window[r.loadedCallbackName] = function () {
                  window.inviteOnlyEmailVerification
                    ? e()
                    : t({
                        type: "initError",
                        message:
                          "inviteOnlyEmailVerification is not found in window",
                      }),
                    delete window[r.loadedCallbackName];
                };
                var i = document.createElement("script"),
                  n = document.head || document.getElementsByTagName("head")[0];
                (i.async = !0),
                  (i.src = r.scriptSource),
                  i.setAttribute("data-host", r.host),
                  (i.type = "text/javascript"),
                  (i.defer = !0),
                  (i.onerror = function () {
                    var e = {
                      type: "initError",
                      message: "Failed to load script",
                      blockedUrl: r.scriptSource,
                    };
                    n.removeChild(i), t(e);
                  }),
                  n.appendChild(i);
              }),
            ];
          });
        });
      }),
      (n.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.internalRun()];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }),
      (n.prototype.internalRun = function () {
        return __awaiter(this, void 0, void 0, function () {
          var i = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (t, e) {
                (i.internalResolve = function (e) {
                  t(e);
                }),
                  window.inviteOnlyEmailVerification.render(
                    i.targetContainerId,
                    {
                      InviteOnlyEmailVerificationCallback: i.internalResolve,
                      culture: i.culture,
                      host: i.host,
                    }
                  );
              }),
            ];
          });
        });
      }),
      (n.prototype.cleanup = function () {
        for (
          var e = document.getElementById(this.targetContainerId);
          e.firstChild && e.removeChild(e.firstChild);

        );
      }),
      (i = n),
      (t.InviteOnlyEmailVerificationChallengeRun = i);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    var o, t;
    function i(e, t, i) {
      (this.hasAnimation = e),
        (this.options = t),
        (this.userId = i),
        (this.hasRun = !1),
        (this.loadedCallbackName =
          "__proofofworkOnload" + Math.random().toString().substring(2)),
        (this.scriptSource = this.options.proofOfWorkSource),
        (this.host = this.options.proofOfWorkHost),
        (this.challengeVerifyProvider = "proofofwork");
    }
    (o = e.Queue || (e.Queue = {})),
      (i.prototype.getName = function () {
        return o.ChallengeType.ProofOfWork;
      }),
      (i.prototype.getChallengeVerifyProvider = function () {
        return this.challengeVerifyProvider;
      }),
      (i.prototype.shouldDisplayAnimation = function () {
        return this.hasAnimation;
      }),
      (i.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
          var s = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (t, i) {
                window[s.loadedCallbackName] = function () {
                  if (window.queueitProofOfWork) t();
                  else {
                    var e = {
                      type: "initError",
                      message: "queueitProofOfWork is not found in window",
                      challengeType: o.ChallengeType.ProofOfWork,
                    };
                    i(e);
                  }
                  delete window[this.loadedCallbackName];
                };
                var n = document.createElement("script"),
                  r = document.head || document.getElementsByTagName("head")[0];
                (n.async = !0),
                  (n.src = s.scriptSource),
                  (n.type = "text/javascript"),
                  (n.defer = !0),
                  n.setAttribute("data-name", "queueitProofOfWork"),
                  n.setAttribute("data-onload", s.loadedCallbackName),
                  n.setAttribute("data-host", s.host),
                  (n.onerror = function () {
                    var e = {
                      type: "initError",
                      message: "Failed to load script",
                      challengeType: o.ChallengeType.ProofOfWorkAlias,
                      blockedUrl: s.scriptSource.startsWith("http")
                        ? s.scriptSource
                        : document.location.origin + s.scriptSource,
                    };
                    r.removeChild(n), i(e);
                  }),
                  r.appendChild(n);
              }),
            ];
          });
        });
      }),
      (i.prototype.canRetry = function () {
        return queueitProofOfWork.canRetry();
      }),
      (i.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.hasRun
                  ? this.canRetry()
                    ? [4, this.internalRetry()]
                    : [2, { type: "allRetriesUsed" }]
                  : [3, 2];
              case 1:
                return [2, e.sent()];
              case 2:
                return [4, this.internalRun()];
              case 3:
                return [2, e.sent()];
            }
          });
        });
      }),
      (i.prototype.internalRun = function () {
        return __awaiter(this, void 0, void 0, function () {
          var r = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (t) {
                (r.internalResolve = function (e) {
                  (r.hasRun = !0), t(e);
                }),
                  queueitProofOfWork.execute({
                    callback: function (e, t, i, n) {
                      r.resolver({
                        type: "success",
                        sessionId: e,
                        challengeDetails: t,
                        solution: i,
                        solverStats: n,
                      });
                    },
                    errorHandler: function (e) {
                      r.resolver({ type: "error", message: e });
                    },
                    userId: r.userId,
                    tags: {
                      CustomerId: r.options.customerId,
                      EventId: r.options.eventId,
                    },
                  });
              }),
            ];
          });
        });
      }),
      (i.prototype.internalRetry = function () {
        return __awaiter(this, void 0, void 0, function () {
          var t = this;
          return __generator(this, function (e) {
            return [
              2,
              new Promise(function (e) {
                (t.internalResolve = e), queueitProofOfWork.retry();
              }),
            ];
          });
        });
      }),
      (i.prototype.cleanup = function () {}),
      (i.prototype.resolver = function (e) {
        this.internalResolve(e);
      }),
      (t = i),
      (o.ProofOfWorkRun = t);
  })((QueueIt = QueueIt || {})),
  (function (e) {
    !(function (o) {
      var a, e;
      ((e = a = o.RecaptchaType || (o.RecaptchaType = {}))[(e.Normal = 0)] =
        "Normal"),
        (e[(e.Invisible = 1)] = "Invisible");
      var t =
        ((i.prototype.setupForNormal = function (e) {
          this.challengeVerifyProvider = "recaptcha";
        }),
        (i.prototype.setupForInvisible = function (e) {
          this.challengeVerifyProvider = "recaptcha-invisible";
        }),
        (i.prototype.getName = function () {
          return this.recaptchaType === a.Normal
            ? o.ChallengeType.Recaptcha
            : o.ChallengeType.RecaptchaInvisible;
        }),
        (i.prototype.getChallengeVerifyProvider = function () {
          return this.challengeVerifyProvider;
        }),
        (i.prototype.shouldDisplayAnimation = function () {
          return this.hasAnimation;
        }),
        (i.prototype.init = function () {
          return __awaiter(this, void 0, void 0, function () {
            var s = this;
            return __generator(this, function (e) {
              return [
                2,
                new Promise(function (t, i) {
                  window[s.loadedCallbackName] = function () {
                    if (window.recaptcha) t();
                    else {
                      var e = {
                        type: "initError",
                        message: "recaptcha is not found in window",
                        challengeType:
                          s.type === a.Normal
                            ? o.ChallengeType.Recaptcha
                            : o.ChallengeType.RecaptchaInvisible,
                      };
                      i(e);
                    }
                    delete window[s.loadedCallbackName];
                  };
                  var n = document.createElement("script"),
                    r =
                      document.head || document.getElementsByTagName("head")[0];
                  (n.async = !0),
                    (n.src = s.scriptSource),
                    n.setAttribute("data-host", s.host),
                    (n.type = "text/javascript"),
                    (n.defer = !0),
                    (n.onerror = function () {
                      var e = {
                        type: "initError",
                        message: "Failed to load script",
                        challengeType:
                          s.type === a.Normal
                            ? o.ChallengeType.Recaptcha
                            : o.ChallengeType.RecaptchaInvisible,
                        blockedUrl: s.scriptSource,
                      };
                      r.removeChild(n), i(e);
                    }),
                    r.appendChild(n);
                }),
              ];
            });
          });
        }),
        (i.prototype.canRetry = function () {
          return recaptcha.canRetry();
        }),
        (i.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.hasRun
                    ? this.canRetry()
                      ? [4, this.internalRetry()]
                      : [2, { type: "allRetriesUsed" }]
                    : [3, 2];
                case 1:
                  return [2, e.sent()];
                case 2:
                  return [4, this.internalRun()];
                case 3:
                  return [2, e.sent()];
              }
            });
          });
        }),
        (i.prototype.internalRun = function () {
          return __awaiter(this, void 0, void 0, function () {
            var r = this;
            return __generator(this, function (e) {
              return [
                2,
                new Promise(function (t, i) {
                  (r.internalResolve = function (e) {
                    (r.hasRun = !0), t(e);
                  }),
                    recaptcha.render("challenge-container", {
                      callback: function (e, t, i, n) {
                        (r.hasRun = !0),
                          r.resolver({
                            type: "success",
                            sessionId: e,
                            challengeDetails: t,
                            solution: i,
                            solverStats: n,
                          });
                      },
                      errorHandler: function (e) {
                        r.resolver({ type: "error", message: e });
                      },
                      scriptLoadErrorHandler: function () {
                        var e = {
                          type: "initError",
                          message: "Failed to load script",
                          challengeType:
                            r.type === a.Normal
                              ? o.ChallengeType.Recaptcha
                              : o.ChallengeType.RecaptchaInvisible,
                          blockedUrl: r.scriptSource,
                        };
                        i(e);
                      },
                      culture: r.culture,
                      invisible: r.type === a.Invisible,
                      host: r.host,
                    });
                }),
              ];
            });
          });
        }),
        (i.prototype.cleanup = function () {
          for (
            var e = document.getElementById(this.targetContainerId);
            e.firstChild && e.removeChild(e.firstChild);

          );
        }),
        (i.prototype.resolver = function (e) {
          this.internalResolve(e);
        }),
        (i.prototype.internalRetry = function () {
          return __awaiter(this, void 0, void 0, function () {
            var t = this;
            return __generator(this, function (e) {
              return [
                2,
                new Promise(function (e) {
                  (t.internalResolve = e), recaptcha.reset();
                }),
              ];
            });
          });
        }),
        i);
      function i(e, t, i, n) {
        void 0 === n && (n = "challenge-container"),
          (this.hasAnimation = e),
          (this.recaptchaType = i),
          (this.targetContainerId = n),
          (this.hasRun = !1),
          i === a.Invisible
            ? this.setupForInvisible(t)
            : this.setupForNormal(t),
          (this.type = i),
          (this.scriptSource = t.reCaptchaSource),
          (this.host = t.reCaptchaHost),
          (this.culture = t.culture),
          (this.loadedCallbackName = "loadChallengeWidget");
      }
      o.RecaptchaRun = t;
    })(e.Queue || (e.Queue = {}));
  })((QueueIt = QueueIt || {}));
