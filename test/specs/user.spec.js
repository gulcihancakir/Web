import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
// import '../firebase'
import UyeGiris from '../../components/UyeGiris'



const localVue = createLocalVue()
localVue.use(Vuex)
describe('UyeGiris', () => {
    let wrapper;
    const mockFunction = jest.fn();
  
    describe('openLogin==true iken ', () => {
        beforeEach(() => {
            wrapper = mount(UyeGiris, {
                localVue,
                data() {
                    return {
                        email: 'test@test.com',
                        password: '123456',
                        // isAlreadyLogged: false,
                    };
                },
                store: new Vuex.Store({
                    actions: {
                        signInAction: mockFunction,
                    },

                }),
                mocks: {
                    $router: {
                        push: jest.fn()
                    }
                },
                propsData: {
                    openLogin: true
                },
                stubs: {
                    NuxtLink: RouterLinkStub
                },
            });
        });
        it("Şifremi Unuttum Gözükmesi", () => {
            expect(wrapper.text()).toContain("Şifremi Unuttum");
        });
        it('giriş yap butonuna basılabilir ve basılınca login fonksiyonun çağrılması', async () => {
            let loginButton = wrapper.find("#Loginbtn");
            loginButton.trigger("click").then(() => {
                expect(mockFunction).toHaveBeenCalled();
            });
        });
    //    Kontrol edilecek
        it("Successfull Login", () => {
            let loginButton = wrapper.find(".userLoginBtn");
            loginButton.trigger("click").then(() => {
                expect(wrapper.text()).toContain("Bu sayfaya erişemezsiniz");
            });
        });
        // it("Gözükmemeli: Şifremi Unuttum", () => {
        //     let loginButton = wrapper.find(".userLoginBtn");
        //     loginButton.trigger("click").then(() => {
        //         expect(wrapper.text()).toContain("Şifremi Unuttum");
        //     });
        });
     });
  
