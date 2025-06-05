import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-29809245-a5ea-4687-af79-952998abab22': getInheritedConfiguration({ ...require('@/components/plugins/plugin-29809245-a5ea-4687-af79-952998abab22/ww-config.js').default, name: 'plugin-29809245-a5ea-4687-af79-952998abab22' }),
'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb': getInheritedConfiguration({ ...require('@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/ww-config.js').default, name: 'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...require('@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js').default, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba': getInheritedConfiguration({ ...require('@/components/elements/element-aeb78b9a-6fb6-4c49-931d-faedcfad67ba/ww-config.js').default, name: 'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...require('@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js').default, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...require('@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js').default, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...require('@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js').default, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...require('@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js').default, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5': getInheritedConfiguration({ ...require('@/components/elements/element-9256b033-f4e8-4ab4-adce-dac3a940d7f5/ww-config.js').default, name: 'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5' }),
'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff': getInheritedConfiguration({ ...require('@/components/elements/element-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff/ww-config.js').default, name: 'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...require('@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js').default, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-cf63c911-3951-4ab7-ba8f-37e7fa30e09d': getInheritedConfiguration({ ...require('@/components/elements/element-cf63c911-3951-4ab7-ba8f-37e7fa30e09d/ww-config.js').default, name: 'wwobject-cf63c911-3951-4ab7-ba8f-37e7fa30e09d' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...require('@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js').default, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...require('@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js').default, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...require('@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js').default, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7': getInheritedConfiguration({ ...require('@/components/elements/element-14723a21-0178-4d92-a7e9-d1dfeaec29a7/ww-config.js').default, name: 'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7' }),
'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340': getInheritedConfiguration({ ...require('@/components/elements/element-1b1e2173-9b78-42cc-a8ee-a6167caea340/ww-config.js').default, name: 'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340' }),
'wwobject-57831abf-83ad-49ad-ba97-3bd30b035710': getInheritedConfiguration({ ...require('@/components/elements/element-57831abf-83ad-49ad-ba97-3bd30b035710/ww-config.js').default, name: 'wwobject-57831abf-83ad-49ad-ba97-3bd30b035710' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
