import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"0789ebc3-5a15-47b5-afa8-e08f4e15669f","homePageId":"bdecf0ec-a65c-43c2-8515-4cb04c7d8f44","authPluginId":null,"baseTag":{},"defaultTheme":"light","langs":[{"lang":"pt","default":true}],"background":{"backgroundColor":"var(--42f57814-22c7-4b67-8b6a-1afd9bf122d6,#070814)","backgroundImage":"public/images/00f67f34-609b-4e28-b979-b314915e6b30.jpeg?_wwcv=7"},"workflows":[],"pages":[{"id":"bdecf0ec-a65c-43c2-8515-4cb04c7d8f44","linkId":"bdecf0ec-a65c-43c2-8515-4cb04c7d8f44","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"9a82e7e5-c950-4b2e-9565-04f268d5351b","sectionTitle":"Top","linkId":"61a57f76-7ae0-4bc8-a4d3-44a60f239540"},{"uid":"83a49626-4a10-46f0-9ace-592bbd460345","sectionTitle":"H1","linkId":"e71e79f7-224e-464f-a27f-e80b5150a815"},{"uid":"d57466bc-ef07-4f9b-bc70-a0953ef9ccf8","sectionTitle":"Services","linkId":"d1e7869b-d26b-493a-9408-4e2e51770a4d"},{"uid":"c8ae0bb0-20c8-4264-8655-937f5c063695","sectionTitle":"How We Work","linkId":"04920c9a-e47c-447f-8ba6-2c76ee7faaa7"},{"uid":"87d06a32-0da5-4564-aa22-83151cc48e49","sectionTitle":"Feedback","linkId":"4f40be00-a76f-4bbe-b3e9-7b3b84a58be8"},{"uid":"509cd3d4-0385-43ec-86b6-7b73fd677a5f","sectionTitle":"Lead Form","linkId":"b8591a27-d1dc-43bd-bcca-dce63b2497ff"},{"uid":"e7c185cf-eb13-4f4e-ab69-0f73ea1636ad","sectionTitle":"Alert","linkId":"6ba17449-a56e-4ce8-849b-e59ebe9ccd2e"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Softhaus — Desenvolvimento Ágil e Inteligente"},"meta":{"desc":{"pt":"Criamos sistemas sob medida com agilidade, inteligência e tecnologia low-code. Lançamos produtos prontos para escalar."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/00f67f34-609b-4e28-b979-b314915e6b30.jpeg?_wwcv=7"}],"plugins":[{"id":"29809245-a5ea-4687-af79-952998abab22","name":"Airtable","namespace":"airtable"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 7;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const PREVIEW_URL = process.env.VUE_APP_PREVIEW_URL || '';
const WW_ENV = process.env.WW_ENV || '';

const isProd =
    !window.location.host.includes( //TODO: add staging2 ?
        '-staging.' + (WW_ENV === 'staging' ? PREVIEW_URL : '')
    ) && !window.location.host.includes(PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
