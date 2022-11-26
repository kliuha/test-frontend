import Vue from "vue";

import Vuetify, {
    VApp,
    VCard,
    VImg,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VBtn,
    VPagination,
    VTextarea
} from "vuetify/lib";

Vue.use(Vuetify, {
    components: {
        VApp,
        VCard,
        VImg,
        VCardTitle,
        VCardSubtitle,
        VCardText,
        VCardActions,
        VBtn,
        VPagination,
        VTextarea
    }
})

export default new Vuetify