import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import { getters, createStore } from "../../store";
import Navigation from "../../components/Navigation.vue"

describe("Kategorileri listele", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            "categories": [
                {
                    "id": 1,
                    "title": "ÜST",
                    "category_child": [
                        {
                            "sub_categori_id": 1,
                            "sub_categori_title": "TUNİK",
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "ALT",
                    "category_child": [
                        {
                            "sub_categori_id": 3,
                            "sub_categori_title": "PANTOLON",
                        },
                        {
                            "sub_categori_id": 4,
                            "sub_categori_title": "ETEK"

                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "ELBİSE",

                },

                {
                    "id": 4,
                    "title": "DIŞ GİYİM",

                },

                {
                    "id": 5,
                    "title": "İÇ GİYİM",


                },
                {
                    "id": 6,
                    "title": "DENİM",

                },
                {
                    "id": 6,
                    "title": "AKSESUAR",

                },
            ]
        },
        getters: getters
    })
    wrapper = mount(Navigation, {
        stubs: {
            NuxtLink: RouterLinkStub
        }, store, localVue
    })
    describe("Listelenmesi gereken başlıklar", () => {

        it("ÜST", () => {
            expect(wrapper.text()).toContain("ÜST");
        });
        it("ALT", () => {
            expect(wrapper.text()).toContain("ALT");
        });
        it("DIŞ GİYİM", () => {
            expect(wrapper.text()).toContain("DIŞ GİYİM");
        });
        it("İÇ GİYİM", () => {
            expect(wrapper.text()).toContain("İÇ GİYİM");
        });
        it("DENİM", () => {
            expect(wrapper.text()).toContain("DENİM");
        });
        it("AKSESUAR", () => {
            expect(wrapper.text()).toContain("AKSESUAR");
        });

    });





})