import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import UrunDetayBezerUrunler from "../../components/UrunDetayBenzerUrunler"
import Vuex from "vuex"
import { getters } from "../../store";


describe("Verilen ürünlerin listelenmesi", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state:{
            products:[ {
                "id": 2,
                "title": "Uzun Puffer Mont",
                "price": 289,
                "image": "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/uzun-puffer-mont-0a5b.jpg",
                "bilgi2": "Premium kalite sınıfı bir üründür.",
                "Renk": "Siyah",
                "Kumas": "Elyaf dolgulu kumaş",
                "Mevsim": "Kışlık",
                "bilgi1": [
                    "Astarlıdır",
                    "Ceplidir",
                    "Fermuarlıdır",
                    " Fermuarlıdır.",
                    "Beden seçenekleri:",
                    "S: 34-36 beden ile uyumludur. Göğüs: 116 cm",
                    "M: 38-40 beden ile uyumludur. ",
                    "L: 42 beden ile uyumludur. "
                ],
                "category": "ÜST",
                "stock": 10
            },
            {
                "id": 3,
                "title": "Uzun Puffer Mont",
                "price": 289,
                "image": "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/uzun-puffer-mont-266b.jpg",
                "bilgi2": "Premium kalite sınıfı bir üründür.",
                "Renk": "Camel",
                "Kumas": "Elyaf dolgulu kumaş",
                "Mevsim": "Kışlık",
                "bilgi1": [
                    "Astarlıdır",
                    "Ceplidir",
                    "Fermuarlıdır",
                    " Fermuarlıdır.",
                    "Beden seçenekleri:",
                    "S: 34-36 beden ile uyumludur. Göğüs: 116 cm",
                    "M: 38-40 beden ile uyumludur. ",
                    "L: 42 beden ile uyumludur. "
                ],
                "category": "ÜST",
                "stock": 10
            },
            {
                "id": 4,
                "title": "Belden Büzgülü Puffer Mont",
                "price": 349,
                "image": "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/belden-buzgulu-puffer-mont-2045.jpg",
                "bilgi2": "Premium kalite sınıfı bir üründür.",
                "Renk": "Siyah",
                "Kumas": "Elyaf dolgulu kumaş",
                "Mevsim": "Kışlık",
                "bilgi1": [
                    "Astarlıdır",
                    "Ceplidir",
                    "Çıtçıtlıdır",
                    "Kapüşonu portatiftir. Çıkabilmektedir.",
                    "Belinde bulunan ip ile büzerek veya büzmeden kullanılabilmektedir.",
                    "Boy: ortalama 91 cm",
                    "Beden seçenekleri:",
                    "Standart: 36-42 beden ile uyumludur. Göğüs: 120 cm"
                ],
                "stock": 10
            },
            {
                "id": 5,
                "title": "Belden Büzgülü Puffer Mont",
                "price": 349,
                "image": "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/belden-buzgulu-puffer-mont-17ed.jpg",
                "bilgi2": "Premium kalite sınıfı bir üründür.",
                "Renk": "Kırık Beyaz",
                "Kumas": "Elyaf dolgulu kumaş",
                "Mevsim": "Kışlık",
                "bilgi1": [
                    "Astarlıdır",
                    "Ceplidir",
                    "Çıtçıtlıdır",
                    "Kapüşonu portatiftir. Çıkabilmektedir.",
                    "Belinde bulunan ip ile büzerek veya büzmeden kullanılabilmektedir.",
                    "Boy: ortalama 91 cm",
                    "Beden seçenekleri:",
                    "Standart: 36-42 beden ile uyumludur. Göğüs: 120 cm"
                ],
                "stock": 10
            },
            {
                "id": 6,
                "title": "İçi Kürklü Deri Pantolon",
                "price": 149,
                "image": "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/ici-kurklu-deri-pantolon-6163.jpg",
                "bilgi2": "Premium kalite sınıfı bir üründür.",
                "Renk": "Siyah",
                "Kumas": "İçi kürk ile kaplı suni deri",
                "Mevsim": "Kışlık",
                "bilgi1": [
                    "Yüksek bellidir.",
                    "Ceplidir.",
                    "Boy: 98 cm",
                    "Beden seçenekleri:",
                    "S: 34 beden ile uyumludur. Bel: 62 cm",
                    "M: 36 beden ile uyumludur. ",
                    "L: 38 beden ile uyumludur. "
                ],
                "boy": [
                    " 98 cm"
                ],
                "beden": [
                    {
                        "S": "34-36 "
                    },
                    {
                        "M": "38-40 "
                    },
                    {
                        "L": "42 "
                    }
                ],
                "stock": 10
            },
            {
                "id": 7,
                "title": "İçi Kürklü Deri Pantolon",
                "price": 149,
                "image": "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/ici-kurklu-deri-pantolon-9ffe.jpg",
                "bilgi2": "Premium kalite sınıfı bir üründür.",
                "Renk": "Acı kahve",
                "Kumas": "İçi kürk ile kaplı suni deri",
                "Mevsim": "Kışlık",
                "bilgi1": [
                    "Yüksek bellidir.",
                    "Ceplidir.",
                    "Boy: 98 cm",
                    "Beden seçenekleri:",
                    "S: 34 beden ile uyumludur. Bel: 62 cm",
                    "M: 36 beden ile uyumludur. ",
                    "L: 38 beden ile uyumludur. "
                ],
                "stock": 10
            },
        ]

        },
        getters:getters

    })
    wrapper = mount(UrunDetayBezerUrunler, {
        stubs: {
            NuxtLink: RouterLinkStub
        },
        store,
        localVue
    })
    describe("Liste Kontrolü", () => {

        it("Uzun Puffer Mont", () => {
            expect(wrapper.text()).toContain("Uzun Puffer Mont");
        });

        it("Belden Büzgülü Puffer Mont", () => {
            expect(wrapper.text()).toContain("Belden Büzgülü Puffer Mont");
        });
    });
});