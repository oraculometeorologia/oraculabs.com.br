import { version, unref, inject, defineComponent, computed, ref, h, resolveComponent, useSSRContext, createApp, reactive, hasInjectionContext, getCurrentInstance, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, isReadonly, mergeProps, defineAsyncComponent, isRef, isShallow, isReactive, toRaw, withCtx, createTextVNode } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/vue/index.mjs';
import { $fetch } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unctx/dist/index.mjs';
import { hasProtocol, parseURL, parseQuery, withTrailingSlash, withoutTrailingSlash, withQuery, isScriptProtocol, joinURL, isEqual, stringifyParsedURL, stringifyQuery } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/ufo/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/h3/dist/index.mjs';
import { getActiveHead } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/@unhead/shared/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderSuspense, ssrRenderVNode, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/vue/server-renderer/index.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/destr/dist/index.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/scule/dist/index.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/klona/dist/index.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unstorage/drivers/memory.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/runner/work/oraculabs.com.br/oraculabs.com.br/frontend/node_modules/pathe/dist/index.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.7.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const parallels = [];
  const errors = [];
  for (const plugin of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin);
    if (plugin.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const globalMiddleware = [];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = parseURL(fullPath.toString());
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const router_CaKIoANnI2 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      error: []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false)
          ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const router = {
      currentRoute: route,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => window.history.go(-1),
      go: (delta) => window.history.go(delta),
      forward: () => window.history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", {
      functional: true,
      props: {
        to: String,
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          var _a;
          const route2 = router.resolve(props.to);
          return props.custom ? (_a = slots.default) == null ? void 0 : _a.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    });
    nuxtApp._route = route;
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        var _a;
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
        }
        nuxtApp._processingMiddleware = true;
        if (!((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext)) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey] = handler;
}
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* @__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$2 = /* @__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const plugins = [
  router_CaKIoANnI2,
  unhead_KgADcZ0jPj,
  components_plugin_KR1HBZs4kY,
  revive_payload_server_eJ33V7gbc6
];
const _imports_0$1 = "" + __publicAssetsURL("images/logos_oraculo/logo-oraculo-meteorologia-purple.png");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$e = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg bg-light navbar-light sticky-top" }, _attrs))} data-v-b375a234><div class="container" data-v-b375a234>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "#",
    to: { hash: "#top" },
    class: "navbar-brand",
    id: "logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img id="navbar-logo"${ssrRenderAttr("src", _imports_0$1)} data-v-b375a234${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            id: "navbar-logo",
            src: _imports_0$1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" data-v-b375a234><span class="navbar-toggler-icon" data-v-b375a234></span></button><div class="collapse navbar-collapse" id="navmenu" data-v-b375a234><ul class="navbar-nav ms-auto" data-v-b375a234><li class="nav-item" data-v-b375a234>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { hash: "#produtos" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Produtos e serviços`);
      } else {
        return [
          createTextVNode("Produtos e serviços")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-b375a234>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { hash: "#quem-somos" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Quem somos`);
      } else {
        return [
          createTextVNode("Quem somos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-b375a234>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { hash: "#clientes" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Clientes e parceiros`);
      } else {
        return [
          createTextVNode("Clientes e parceiros")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></nav>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-b375a234"]]);
const _imports_0 = "" + __publicAssetsURL("images/logos_oraculo/logo-oraculo-meteorologia-white.png");
const _sfc_main$d = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "text-dark px-5 pb-5 text-center",
    id: "hero"
  }, _attrs))} data-v-8cf4f02c><div class="container" data-v-8cf4f02c><div data-v-8cf4f02c><img id="hero-logo"${ssrRenderAttr("src", _imports_0)} data-v-8cf4f02c><h1 data-v-8cf4f02c>Previsão meteorológica sob demanda</h1></div></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-8cf4f02c"]]);
const _sfc_main$c = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "p-5",
    id: "produtos"
  }, _attrs))}><div class="container"><div class="p-5 text-center"><h2 class="h1">Principais produtos e serviços</h2></div><div class="row text-center"><div class="col-lg card m-3 p-5 hover-effect-light-gray"><div class="pb-2"><i class="bi bi-database h1"></i></div><h3 class="card-title h3">Banco de dados meteorológicos</h3><p class="card-text"> Desenvolvemos todo o processo de Download, tratamento e disponibilização de diversos modelos meteorológicos via interface web ou via API para o sistema de sua preferência </p></div><div class="col-lg card m-3 p-5 hover-effect-light-gray"><div class="pb-2"><i class="bi bi-cloud-arrow-up-fill h1"></i></div><h3 class="card-title h3">Infraestrutura local ou em nuvem</h3><p> Preparamos toda a insfraestrutura de armazenamento de dados e atualização automática das previsões, podendo ser em sistema cloud ou em seu próprio data center. </p></div></div><div class="row text-center"><div class="col-lg card m-3 p-5 hover-effect-light-gray"><div class="pb-2"><i class="bi bi-laptop h1"></i></div><h3 class="card-title h3">Interfaces web dinâmicas</h3><p> Criamos todos os dashboards (de forma customizada) para visualização das previsões de forma independente (só previsões) ou relacionamos como dados e informações de seu negócio (personalizado). </p></div><div class="col-lg card m-3 p-5 hover-effect-light-gray"><div class="pb-2"><i class="bi bi-graph-up-arrow h1"></i></div><h3 class="card-title h3">Análise e tratamento de dados</h3><p> Realizamos diversos tipos de análises estatísticas tanto de meteorologia quanto da relação dela com seu negócio. Tenha os dados corrigidos e as informações adaptadas para as necessidades do seu negócio. </p></div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProdutosCards.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$b = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-5 text-dark bg-blue" }, _attrs))}><div class="pt-5"><div class="row justify-content-center"><div class="text-center pb-5 row justify-content-center"><h2 class="p-2 header">Como a meteorologia pode me ajudar?</h2><p class="pt-4 font-size col-7"> Se sua demanda é afetada pelas variações do tempo e do clima, você pode ter informações antecipadas para otimizar sua produção, estoque, logística ou venda. </p></div></div><div class="row ms-5 me-5 border-top pb-5"><div class="col-5"><h4 class="pt-3">Meteorologia para todas as decisões</h4><p class="pt-4 font-size"> As variáveis meteorológicas, em seus diferentes níveis temporais, influenciam o humor e o consumo das pessoas, afetando todos os setores da indústria.As variáveis meteorológicas, em seus diferentes níveis temporais, influenciam </p><p class="pb-4"><span class="fs-5 hover-animation">Saiba mais</span><i class="bi bi-chevron-right"></i></p></div></div><div class="row ms-5 me-5 border-top pb-5"><div class="col-5"><h4 class="pt-3">Consultoria meteorológica</h4><p class="pt-4 font-size"> Para desenvolver um projeto, montamos uma equipe dedicada para desenvolver soluções baseadas em modelagem meteorológica, interfaces web e análises estatísticas. </p><p class="pb-4"><span class="fs-5 hover-animation">Saiba mais</span><i class="bi bi-chevron-right"></i></p></div></div><div class="row ms-5 me-5 border-top pb-5"><div class="col-5"><h4 class="pt-3">Observação de dados para previsão de demanda</h4><p> Quando relacionamos demandas passadas com a meteorologia, começamos a entender como podemos otimizar a oferta. </p><p class="pb-4"><span class="fs-5 hover-animation">Saiba mais</span><i class="bi bi-chevron-right"></i></p></div></div></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ComoPodeAjudar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$a = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "p-5 bg-light",
    id: "quem-somos"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-4 text-center"><h3>Quem somos</h3><p>Somos especialistas em estrutura meteorológica, formada por doutores em meteorologia, física e oceanografia, acreditamos que seu negócio terá grandes diferenciais com nossas soluções.</p><p>Fundação: 2015 Razão social: IGAM4 Consultoria Científica e Tecnológica Ltda.Localização: São Paulo/ SP</p></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuemSomos.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$9 = {
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    const clients = [
      {
        imgUrl: "logo-chilli-beans.webp",
        alt: "Chilli Beans Logo"
      },
      {
        imgUrl: "logo-fapesp.webp"
      },
      {
        imgUrl: "logo-lots-group-scania.webp"
      },
      {
        imgUrl: "logo-omega-energia.webp"
      },
      {
        imgUrl: "logo-sebrae.webp"
      },
      {
        imgUrl: "logo-startup-farm.webp"
      },
      {
        imgUrl: "logo-uniggel-sementes.webp"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "clientes" }, _attrs))}><div class="container p-5 text-dark text-center"><h3 class="pb-3">Clientes | Parceiros</h3><div class="row"><!--[-->`);
      ssrRenderList(clients, (value) => {
        _push(`<div class="col-3 p-3"><img${ssrRenderAttr("src", "/images/clients/logos/" + value.imgUrl)} alt="" class="w-5 client-logo"></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clients.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$9;
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container p-5 text-dark text-center border mt-5 mb-5" }, _attrs))} data-v-0b9a5df8><h3 data-v-0b9a5df8>Fale Conosco!</h3><form data-v-0b9a5df8><div class="row m-2" data-v-0b9a5df8><input type="text" placeholder="Nome" class="form-control col m-2" data-v-0b9a5df8><input type="text" placeholder="Sobrenome" class="form-control col m-2" data-v-0b9a5df8></div><div class="row m-2" data-v-0b9a5df8><input type="email" placeholder="E-mail" class="form-control col m-2" data-v-0b9a5df8></div><div class="row m-2" data-v-0b9a5df8><input type="text" placeholder="Empresa" class="form-control col m-2" data-v-0b9a5df8><input type="text" placeholder="Website" class="form-control col m-2" data-v-0b9a5df8></div><div class="row m-2" data-v-0b9a5df8><textarea name="text" id="" cols="" rows="6" placeholder="Conte-nos..." class="form-control col m-2" data-v-0b9a5df8></textarea></div><div class="row m-2" data-v-0b9a5df8><input type="text" placeholder="Como nos conheceu" class="form-control col m-2" data-v-0b9a5df8></div><button type="button" class="btn btn-primary mt-3 px-5 py-2" data-v-0b9a5df8>Enviar</button></form></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaleConosco.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-0b9a5df8"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container d-flex justify-content-around p-5" }, _attrs))} data-v-a2271baa><div class="heading-container d-flex align-items-center" data-v-a2271baa><h4 class="h2" data-v-a2271baa>Assine nossa newsletter</h4></div><div class="form-container" data-v-a2271baa><form action="" class="d-flex flex-column" data-v-a2271baa><input type="text" placeholder="Nome" class="mb-3 p-2" data-v-a2271baa><input type="email" placeholder="E-mail" class="p-2" data-v-a2271baa></form></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Newsletter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-a2271baa"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo-container col row" }, _attrs))} data-v-b4685d7c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "#",
    to: { hash: "#top" },
    class: "link text-decoration-none text-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="icon-container text-center align-middle justify-content-center d-flex align-items-center" data-v-b4685d7c${_scopeId}><i class="icon bi bi-chevron-up" data-v-b4685d7c${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", { class: "icon-container text-center align-middle justify-content-center d-flex align-items-center" }, [
            createVNode("i", { class: "icon bi bi-chevron-up" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/VoltarParaTopo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b4685d7c"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo-container col row" }, _attrs))} data-v-1ea558e5><a href="whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" title="Share on whatsapp" class="link text-decoration-none d-flex justify-content-end" data-v-1ea558e5><div class="icon-container text-center d-flex align-middle justify-content-center align-items-center" data-v-1ea558e5><i class="icon bi bi-whatsapp" data-v-1ea558e5></i></div></a></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Whatsapp.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1ea558e5"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_ButtonVoltarParaTopo = __nuxt_component_0;
  const _component_ButtonWhatsapp = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-local fixed-bottom row justify-content-between" }, _attrs))} data-v-90e84a7c>`);
  _push(ssrRenderComponent(_component_ButtonVoltarParaTopo, null, null, _parent));
  _push(ssrRenderComponent(_component_ButtonWhatsapp, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FixedComponents.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-90e84a7c"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-dark text-white pt-5 pb-5" }, _attrs))} data-v-dad46089><div class="container pt-5" data-v-dad46089><div class="row pb-5" data-v-dad46089><div class="col-3" data-v-dad46089><div class="logo-container pb-4" data-v-dad46089>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { hash: "#top" },
    class: "img-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="logo" data-v-dad46089${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "",
            class: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><p data-v-dad46089>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore enim, nesciunt itaque est alias!</p></div><div class="col-3" data-v-dad46089><h4 class="pb-3" data-v-dad46089>Nossos Serviços</h4><ul data-v-dad46089><li class="pb-3" data-v-dad46089>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { hash: "#quem-somos" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sobre nós`);
      } else {
        return [
          createTextVNode("Sobre nós")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="pb-3" data-v-dad46089>Nosso trabalho</li><li class="pb-3" data-v-dad46089>Help center</li></ul></div><div class="col-3" data-v-dad46089><h4 class="pb-3" data-v-dad46089>Contato</h4><ul data-v-dad46089><li class="pb-3" data-v-dad46089>Telefone: <br data-v-dad46089>(11) 96473-7564</li><li class="pb-3" data-v-dad46089>Email: <a href="mailto: contato@oraculo.me" target="_blank" style="${ssrRenderStyle({ "color": "#FFFFF6" })}" data-v-dad46089>contato@oraculo.me</a></li></ul></div><div class="col-3" data-v-dad46089><h4 class="pb-3" data-v-dad46089>Nos siga</h4><p data-v-dad46089><a href="https://www.linkedin.com/company/or%C3%A1culo-meteorologia/" class="icon-link me-3" data-v-dad46089><i class="bi bi-linkedin" data-v-dad46089></i></a><a href="https://www.instagram.com/oraculo.me" class="icon-link mx-3" data-v-dad46089><i class="bi bi-instagram" data-v-dad46089></i></a><a href="https://www.facebook.com/oraculo.me" class="icon-link mx-3" data-v-dad46089><i class="bi bi-facebook" data-v-dad46089></i></a><a href="https://www.youtube.com/@oraculometeorologia8345" class="icon-link mx-3" data-v-dad46089><i class="bi bi-youtube" data-v-dad46089></i></a></p></div></div><div class="row py-5 border-top" data-v-dad46089><p data-v-dad46089><span class="copyright" data-v-dad46089>©</span> <span class="direitos-reservados" data-v-dad46089>Oráculo Meteorologia</span> - 2023</p></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterApp.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dad46089"]]);
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0$1;
      const _component_Hero = __nuxt_component_1$1;
      const _component_ProdutosCards = __nuxt_component_2;
      const _component_ComoPodeAjudar = __nuxt_component_3;
      const _component_QuemSomos = __nuxt_component_4;
      const _component_Clients = __nuxt_component_5;
      const _component_FaleConosco = __nuxt_component_6;
      const _component_Newsletter = __nuxt_component_7;
      const _component_FixedComponents = __nuxt_component_8;
      const _component_FooterApp = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-80d7fd90><div id="top" data-v-80d7fd90></div>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_ProdutosCards, null, null, _parent));
      _push(ssrRenderComponent(_component_ComoPodeAjudar, null, null, _parent));
      _push(ssrRenderComponent(_component_QuemSomos, null, null, _parent));
      _push(ssrRenderComponent(_component_Clients, null, null, _parent));
      _push(ssrRenderComponent(_component_FaleConosco, null, null, _parent));
      _push(ssrRenderComponent(_component_Newsletter, null, null, _parent));
      _push(`<div data-v-80d7fd90>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FixedComponents, null, null, _parent));
      _push(ssrRenderComponent(_component_FooterApp, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-80d7fd90"]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-404-dabdff7e.mjs').then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-500-e991f108.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-02525563.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, __nuxt_component_0$2 as a, createError as c, entry$1 as default, injectHead as i, resolveUnrefHeadInput as r };
//# sourceMappingURL=server.mjs.map
