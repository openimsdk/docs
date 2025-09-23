function createButton() {
  const button = document.createElement('div');
  button.id = "wiseengage-guests-embed-button";
  
  // 初始化样式
  Object.assign(button.style, {
    overflow: "hidden",
    position: "fixed",
    userSelect: "none",
    right: "20px",
    bottom: "40px",
    zIndex: "9999",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  });
  button.style.backgroundColor = '#2160fd'
  button.style.padding = '8px'
  const iconImgEl = document.createElement('img');
  iconImgEl.src = '/logo/iframe-enter-icon-logo.svg';
  iconImgEl.style.width = '100%';
  iconImgEl.style.height = '100%';
  button.appendChild(iconImgEl);

  return button;
}

function createIframe() {
  const iframeWrap = document.createElement('div');
  const iframe = document.createElement('iframe');

  iframeWrap.id = "wiseengage-guests-embed-iframe-wrap";
  iframe.id = "wiseengage-guests-embed-iframe";

  Object.assign(iframeWrap.style, {
    position: "fixed",
    zIndex: "10000",
    borderRadius: "10px",
    boxShadow: "0px 10px 30px rgba(150, 150, 150, 0.2), 0px 0px 0px 1px rgba(150, 150, 150, 0.2)",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: "scale(0)",
    transformOrigin: "right bottom",
    opacity: 0,
  });

  Object.assign(iframe.style, {
    width: "100%",
    height: "100%",
  });

  return { iframeWrap, iframe };
}

(function () {
  console.log('[IFRAME] hello, embed injected')

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  let isMinMode = false;
  let isInit = false;
  let isLoadIframe = false;

  // DEBUG:
  const iframeSrc = "https://web.rentsoft.cn";
  const allowedOrigins = [iframeSrc];

  const { iframeWrap, iframe } = createIframe();
  const button = createButton();

  function initUI() {
    document.body.appendChild(iframeWrap);
    document.body.appendChild(button);
    isInit = true;

    adjustIframeStyleForSmallScreens();
  }

  const fireToIframe = (event, data) => {
    iframe.contentWindow?.postMessage({ event, data }, '*');
  };

  button.onclick = function () {
    console.log('[embed] click button')

    const isMinWidth = window.matchMedia("(max-width: 768px)").matches || isMobile;
    const isHidden = iframeWrap.style.transform === "scale(0)";
    
    if (isHidden) {
      if (!isLoadIframe) {
        iframe.src = iframeSrc;
        iframeWrap.appendChild(iframe);
        isLoadIframe = true;
      }
      fireToIframe('openIframe', isMinWidth);
      iframeWrap.style.transform = "scale(1)";
      iframeWrap.style.opacity = 1;
    } else {
      iframeWrap.style.transform = "scale(0)";
      iframeWrap.style.opacity = 0;
    }
    if (isMinWidth && isHidden) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
  };

  let isGetConfig = false;
  const rpc = setupParentRPCListener({
    allowedOrigins: allowedOrigins, // ★ 必填：子页面来源
    debug: true,
    handler: async function ({ action, data }) {
      if (action === 'closeIframe') {
        iframeWrap.style.transform = "scale(0)";
        iframeWrap.style.opacity = 0;  
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
      if (action === 'toogleSize') {
        iframeWrap.style.width = isMinMode ? "720px" : "420px";
        iframeWrap.style.height = isMinMode ? "80vh" : "60vh";
        isMinMode = !isMinMode;
      }
      if (action === 'getConfig') {
        console.log('get config', data, isGetConfig);
        if(isGetConfig) return;
        document.body.appendChild(button);
        isGetConfig = true;
      }
    },
  });

  // 在页面关闭/刷新时清理监听，避免内存泄漏，并使变量被有效使用
  try {
    window.addEventListener('beforeunload', function () {
      try {
        if (rpc && typeof rpc.dispose === 'function') {
          rpc.dispose();
        }
      } catch (e) {
        /* ignore dispose errors */
        console.error(e);
      }
    });
  } catch (e) {
    /* ignore addEventListener errors */
    console.error(e);
  }

  window.onload = initUI;

  function adjustIframeStyleForSmallScreens() {
    if (!isInit) return;
    const isMinWidth = window.matchMedia("(max-width: 768px)").matches || isMobile;
    const isHidden = iframeWrap.style.transform === "scale(0)";

    if (isMinWidth) {
      Object.assign(iframeWrap.style, {
        width: "100%",
        height: "100%",
        right: "0",
        bottom: "0",
        left: "0",
        top: "0",
        borderRadius: "0",
        boxShadow: "none",
      });
      if (!isHidden) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        fireToIframe('resizeIframe', true);
      }
    } else {
      Object.assign(iframeWrap.style, {
        width: isMinMode ? "420px" : "640px",
        height: isMinMode ? "60vh" : "80vh",
        right: "20px",
        bottom: "100px",
        left: "unset",
        top: "unset",
        borderRadius: "10px",
        boxShadow: "0px 10px 30px rgba(150, 150, 150, 0.2), 0px 0px 0px 1px rgba(150, 150, 150, 0.2)",
      });
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      fireToIframe('resizeIframe', false);
    }
  }    

  window.addEventListener('resize', adjustIframeStyleForSmallScreens);
})();

// parent-rpc.js
/**
 * 在父页面注册一个 RPC 监听器，安全响应来自 iframe 的请求。
 * - allowedOrigins: 白名单来源数组（必填！）
 * - handler: async ({ action, data, event }) => any 业务处理函数
 * - respondTTL: 已响应请求ID的记忆时长，防止重复响应（ms）
 * - debug: 打印调试日志
 * 
 * 使用指南：
 * ```js
 * import { setupParentRPCListener } from "/parent-rpc.js";
 * const rpc = setupParentRPCListener({
 *   allowedOrigins: ["https://child.example.com"], // ★ 必填：子页面来源
 *   debug: true,
 *   handler: async ({ action, data }) => {
 *     switch (action) {
 *       case "ping":
 *         return { pong: true, now: Date.now() };
 *       case "sum":
 *         const { a, b } = data;
 *         return { sum: a + b };
 *       default:
 *         throw new Error("Unknown action: " + action);
 *     }
 *   },
 * });
 * 
 * // 如果需要移除监听：
 * // rpc.dispose();
 * ```
 */
function setupParentRPCListener({
  allowedOrigins,
  handler,
  respondTTL = 60_000,
  debug = false,
} = {}) {
  if (!Array.isArray(allowedOrigins) || allowedOrigins.length === 0) {
    throw new Error("[setupParentRPCListener] 'allowedOrigins' is required.");
  }
  if (typeof handler !== "function") {
    throw new Error("[setupParentRPCListener] 'handler' must be a function.");
  }

  const responded = new Map(); // id -> expireAt

  const gc = () => {
    const now = Date.now();
    for (const [id, expireAt] of responded.entries()) {
      if (expireAt <= now) responded.delete(id);
    }
  };
  const gcTimer = setInterval(gc, Math.min(respondTTL, 10_000));

  function log(...args) { if (debug) console.log("[ParentRPC]", ...args); }

  function isAllowedOrigin(origin) {
    return allowedOrigins.includes(origin);
  }

  function isValidRequest(data) {
    return data
      && data.__rpc === true
      && data.dir === "REQUEST"
      && typeof data.id === "string"
      && typeof data.action === "string";
  }

  async function onMessage(event) {
    try {
      const { origin, data, source } = event;
      if (!isAllowedOrigin(origin)) return;
      if (!isValidRequest(data)) return;

      const { id, action, payload } = data;

      // 去重同一请求ID（例如 iframe 重试导致的重复投递）
      if (responded.has(id)) {
        log("duplicate request id, ignoring:", id);
        return;
      }

      log("request <-", { id, origin, action, payload });

      let result, isError = false, errorMsg = "";
      try {
        result = await handler({ action, data: payload, event });
      } catch (e) {
        isError = true;
        errorMsg = e?.message || String(e);
      }

      const response = isError
        ? { __rpc: true, dir: "RESPONSE", id, ok: false, error: { message: errorMsg } }
        : { __rpc: true, dir: "RESPONSE", id, ok: true, result };

      // 回复给来源窗口（通常是 iframe.contentWindow）
      if (source && typeof source.postMessage === "function") {
        source.postMessage(response, origin);
        responded.set(id, Date.now() + respondTTL);
        log("response ->", { id, ok: !isError });
      }
    } catch (err) {
      log("onMessage error:", err);
    }
  }

  window.addEventListener("message", onMessage);

  return {
    dispose() {
      clearInterval(gcTimer);
      window.removeEventListener("message", onMessage);
      responded.clear();
    }
  };
}
