import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_29809245_a5ea_4687_af79_952998abab22 from '@/components/plugins/plugin-29809245-a5ea-4687-af79-952998abab22/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-29809245-a5ea-4687-af79-952998abab22', plugin_29809245_a5ea_4687_af79_952998abab22);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"5e58ebe6-5b3e-4f61-b2ed-b858fd324007":"hsl(235, 48%, 7%)","b199241a-e162-419f-9127-560b428f91d1":"hsl(235, 26%, 11%)","d2d844c2-bf91-47f0-a745-9f93e78bc296":"#F7F7F7","63664c2c-5999-484c-94ef-4d289d0833ec":"#232424","3360a63e-ed3e-466e-9342-ca12698ee6b6":"#373839","0f1cda4c-8e44-4f0f-bc47-0a0bf2a3adc6":"#0887D4","0b6e367e-4d31-4abf-8c5a-fc7e4041e400":"#0990E2","03fd5d07-f759-4627-818b-172362897915":"hsl(225, 29%, 13%)","3abf5ee7-c8e6-4db3-8660-2dc1f10a6836":"#71797A","71bd8f74-129b-4779-96de-0fa498c397ab":"#606B6D","bd47b8c7-fcc4-4be6-b5d2-a16314db16c9":"#F7F7F7","33a2ad92-b237-458d-b944-b287d4c3fe8d":"#BCC0C1","42f57814-22c7-4b67-8b6a-1afd9bf122d6":"#070814","befd22f8-c602-46a9-abb5-967900f6d975":"#C0C3D8","811974c9-da01-47a4-ba50-786b13f4df2c":"hsl(235, 26%, 9%)","9603b124-9666-43c9-bb0d-73ed3f1524f3":"hsl(235, 22%, 16%)","ae3fdc11-4dde-4a73-adf7-3f501832dab9":"#F6F6F9","91913df4-1838-4741-8d14-e8c57d31c51f":"#070814","a06fa988-49e6-4246-b03d-61bc29ab9a00":"hsl(240, 20%, 92%)"} : {"5e58ebe6-5b3e-4f61-b2ed-b858fd324007":"hsl(235, 48%, 7%)","b199241a-e162-419f-9127-560b428f91d1":"hsl(235, 26%, 11%)","d2d844c2-bf91-47f0-a745-9f93e78bc296":"#F7F7F7","63664c2c-5999-484c-94ef-4d289d0833ec":"#232424","3360a63e-ed3e-466e-9342-ca12698ee6b6":"#373839","0f1cda4c-8e44-4f0f-bc47-0a0bf2a3adc6":"#0887D4","0b6e367e-4d31-4abf-8c5a-fc7e4041e400":"#0990E2","03fd5d07-f759-4627-818b-172362897915":"hsl(225, 29%, 13%)","3abf5ee7-c8e6-4db3-8660-2dc1f10a6836":"#71797A","71bd8f74-129b-4779-96de-0fa498c397ab":"#606B6D","bd47b8c7-fcc4-4be6-b5d2-a16314db16c9":"#F7F7F7","33a2ad92-b237-458d-b944-b287d4c3fe8d":"#BCC0C1","42f57814-22c7-4b67-8b6a-1afd9bf122d6":"#070814","befd22f8-c602-46a9-abb5-967900f6d975":"#C0C3D8","811974c9-da01-47a4-ba50-786b13f4df2c":"hsl(235, 26%, 9%)","9603b124-9666-43c9-bb0d-73ed3f1524f3":"hsl(235, 22%, 16%)","ae3fdc11-4dde-4a73-adf7-3f501832dab9":"#F6F6F9","91913df4-1838-4741-8d14-e8c57d31c51f":"#070814","a06fa988-49e6-4246-b03d-61bc29ab9a00":"hsl(240, 20%, 92%)"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"83fc9205-7629-4ad8-857c-44e8118081df":"2px","e44b7e81-f880-45f6-bbac-d2ebcf5ce67f":"4px","902fe16c-9a50-401c-9e34-5c9ac199f4bd":"8px","36620b76-fe70-4bc7-bb60-f1f81da9054d":"12px","d1477934-0941-4bb4-a7e2-5af9fdc30407":"16px","75c5f0b5-be69-45bd-a6d3-1be42d970269":"20px","99b178fd-ad4f-4304-b505-67ccbfdcfbaf":"24px","b683da6a-80bf-4e11-ba27-e1d43927cc1f":"32px","c6ec1111-295b-48bf-bf82-8ab0eeefa029":"40px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"010441cb-2213-40e2-b61d-7abbc5e86808":"500 40px/48px var(--ww-default-font-family, sans-serif)","81543343-c1c0-4e2f-b5ae-c82f6d510fba":"500 32px/40px var(--ww-default-font-family, sans-serif)","eeab54aa-3994-4286-b714-a53b8494b9fc":"500 28px/36px var(--ww-default-font-family, sans-serif)","54a62763-2872-4548-a6c6-ecb50817d81e":"500 24px/32px var(--ww-default-font-family, sans-serif)","35c57565-6186-4a62-8234-5222c912722d":"500 24px/32px var(--ww-default-font-family, sans-serif)","d83c346f-b5c8-4c1d-85e5-fd1204131965":"500 20px/28px var(--ww-default-font-family, sans-serif)","500eb095-0df7-457f-9e47-a07a37edc40a":"500 22px/30px var(--ww-default-font-family, sans-serif)","1211122b-69bb-4dfe-90f9-9dc446163172":"400 56px/64px var(--ww-default-font-family, sans-serif)","3ba979b0-0640-476e-823f-b668f8588bb2":"500 18px/24px var(--ww-default-font-family, sans-serif)","5aa9c28d-4337-439a-9c5e-4a8da0838002":"500 18px/24px var(--ww-default-font-family, sans-serif)","38a49f30-37ad-4930-891c-98bdc1e2fb5a":"500 12px/18px var(--ww-default-font-family, sans-serif)","55bac52f-188e-4907-a9ad-c0ce9dab8ccd":"400 14px/22px var(--ww-default-font-family, sans-serif)","1da524df-cd2a-4fc2-a3e4-0fc3c38b8720":"500 32px/40px var(--ww-default-font-family, sans-serif)","2fa2edc3-318f-4135-9b54-abc270607128":"500 16px/24px var(--ww-default-font-family, sans-serif)","3ba4e6f9-e23c-4808-b243-21b9fcba14b4":"500 14px/22px var(--ww-default-font-family, sans-serif)","334af0b4-69fb-4e43-8532-52550aeab23e":"400 12px/16px var(--ww-default-font-family, sans-serif)","bc261c2b-80b3-4187-b339-75bacd8ad228":"300 18px/30px var(--ww-default-font-family, sans-serif)","89a919b7-b9ff-47a5-a722-d128b35e40dc":"600 68px/74px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes( //TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
