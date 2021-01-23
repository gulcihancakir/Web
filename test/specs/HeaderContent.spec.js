import { mount, config,RouterLinkStub } from "@vue/test-utils";
import HeaderContent from "../../components/HeaderContent.vue";
import { mutations, actions, state, getters } from "../../store/index";

config.mocks["$store"] = {
    state: { ...state },
    getters: {
         ...getters
    },
    actions: {
        "signOutAction": { ...actions }
    },
    mutations: {
        ...mutations
    }
};

describe("Kullanıcı girişi olmadığında gözükmesi gereken", () => {
    let wrapper = mount(HeaderContent, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("Üye Girişi Olduğunda", () => {
        expect(wrapper.text()).toContain("Çıkış Yap");
    });
});
describe("Gözükmemesi gereken", () => {
    let wrapper = mount(HeaderContent, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("Üye Girişi Olmadığında", () => {
        expect(wrapper.text()).not.toContain("Üye Girişi");
    });
});