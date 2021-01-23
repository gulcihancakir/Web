import { shallowMount,mount, config, RouterLinkStub, createLocalVue  } from '@vue/test-utils';
import Vuex from 'vuex';
import '../firebase'
// import UyeOl from '../../components/UyeOl'
import sepet from '../../components/sepet'
import { getters, mutations, state } from "../../store";


describe("sepet.vue", () => {
    describe("Sepet boşken", () => {
      config.mocks["$store"] = {
        state: { ...state },
        getters: {
          ...getters
        },
        mutations: {
          ...mutations
        }
      };
      it("Sepetinizde Ürün Bulunamadı", () => {
        let wrapper = shallowMount(sepet);
        expect(wrapper.text()).toContain("Sepetinizde Ürün Bulunamadı");
      });
    });
    describe("Sepet Dolu iken", () => {
      let wrapper;
      const localVue = createLocalVue()
      localVue.use(Vuex)
  
      const store = new Vuex.Store({
        state: {
            cart: [ {"id":0,"pid":5,"quantity":1},
            {"id":1,"pid":9,"quantity":1}],
          products: [ {
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
            "id": 9,
            "title": "Geniş Yakalı Trençkot",
            "price": 299,
            "image": "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/genis-yakali-trenckot-a00d.jpg",
            "bilgi2": "Premium kalite sınıfı bir üründür.",
            "Renk": "Siyah",
            "Kumas": "%52 pamuk  %48 pes",
            "Mevsim": "Baharlık",
            "bilgi1": [
                "Astarlı,cepli,kemerlidir.",
                "Geniş yakalıdır.",
                "Kış aylarında da kalın kazaklar ile kullanabilmeniz için geniş kesimli ve geniş kollu olarak tasarlanmıştır.",
                "Standart bedendir.36-46 bedene kadar uyumludur.",
                "Beden genişliği: 120 cm",
                "Boy: yaklaşık 117 cm",
                "Yırtmaç boyu :30 cm "
            ],
            "stock": 10
        },
          ],
        
        },
        getters: getters
        
      })
      wrapper = mount(sepet, {
        stubs: {
          NuxtLink: RouterLinkStub
        },
        store,
        localVue,
        
      })
      describe("Gözükecekler", () => {
        it("Belden Büzgülü Puffer Mont", () => {
          expect(wrapper.text()).toContain("Belden Büzgülü Puffer Mont");
        });
        it("Geniş Yakalı Trençkot", () => {
          expect(wrapper.text()).toContain("Geniş Yakalı Trençkot");
        });
     
      });
    });
  });
