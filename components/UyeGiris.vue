<template>
  <div id="mainHolder_divUserLoginContent" class="centerCountuserLoginContent">
    <div id="divUyeGirisContent">
      <div class="userDivRow">
        <div class="userDivLeft">
          <div class="userLeftBox">
            <div>
              <span class="spanTitle"> Üye Girişi </span>
              <form @submit.prevent="login" >
                <div class="userWrapper emailDiv">
                  <input
                    class="textbox txtUyeGirisEmail"
                    id="txtUyeGirisEmail"
                    name="txtUyeGirisEmail"
                    required="required"
                    type="text"
                    member-user-name-validate="true"
                    placeholder="E-posta"
                    v-model="email"
                  />
                  <!-- <label class="isRequired alert alert-danger displayNone">
                  Bu Alan Zorunludur</label>
                

                <label class="mailRequired alert alert-danger displayNone">
                  Lütfen E-posta Adresinizi Kontrol Ediniz.</label>
                

                <label
                  class="userNameLengthNotValid alert alert-danger displayNone">
                
                  Lütfen geçerli bir numara girin.</label>
                

                <label class="onlyNumber alert alert-danger displayNone">
                  Lütfen geçerli bir numara girin.</label> -->

                  <div class="userWrapper passDiv">
                    <input
                      class="textbox txtUyeGirisPassword"
                      id="txtUyeGirisPassword"
                      name="txtUyeGirisPassword"
                      ng-required="true"
                      type="password"
                      placeholder="Şifre"
                      v-model="password"
                    />
                    <!-- <label class="isRequired alert alert-danger displayNone">
                    Bu Alan Zorunludur</label>
                   -->
                    <div class="userWrapper otpDiv" style="display: none">
                      <input
                        class="textbox"
                        id="txtUyeGirisOtp"
                        name="txtUyeGirisOtp"
                        placeholder="OTP"
                      />
                      <!-- <label class="isRequired alert alert-danger"
                        >Bu Alan Zorunludur</label
                      > -->

                      <input
                        class="textbox"
                        id="txtUyeGirisOtp"
                        name="txtUyeGirisOtp"
                        placeholder="OTP"
                      />

                      <!-- <label class="isRequired alert alert-danger"
                        >Bu Alan Zorunludur</label
                      > -->
                    </div>
                    <div
                      class="userWrapper xIDDiv divUyeGirisIDDiv"
                      style="display: none"
                    >
                      <img id="imgTicimaxCaptcha" src="#" />
                      <a
                        href="#"
                        style="font-size: 17px; margin-left: 10px"
                        onclick="GuvenlikKoduYenile()"
                      >
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                      </a>
                      <input
                        class="textbox"
                        type="text"
                        id="txtGuvenlikKodu"
                        name="txtGuvenlikKodu"
                        placeholder="Güvenlik Kodu"
                      />
                      <!-- <label class="isRequired alert alert-danger displayNone"
                        >Hatalı güvenlik kodu, lütfen tekrar deneyiniz.</label
                      > -->
                    </div>

                    <button
                      type="submit"
                      class="userLoginBtn button"
                      id="Loginbtn"
                      @click="login()"
                    >
                      <span>Giriş Yap</span>
                    </button>

                    <!-- <a
                      class="userSignUp"
                      href="/UyeOl.aspx"
                      style="display: none"
                      >Üye değilsen ÜYE OL</a
                    > -->

                    <div class="abc">
                      <label class="uyeGirisBeniHatirla">
                        <input
                          type="checkbox"
                          id="chkUyeGiriRememberMe"
                          name="chkUyeGiriRememberMe"
                        />
                        <span class="spanBeniHatırla">Beni Hatırla</span>
                      </label>
                      <a href="" class="userPassBtn"> Şifremi Unuttum</a>
                    </div>
                    <div class="socialMediaLoginButtons"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import actions from "@/store/index";
import firebase from "firebase";
import {mapActions} from 'vuex'
export default {
  name: "login",
  data() {
    return {
        isAlreadyLogged: false,
      email: "",
      password: "",
    };
  },
  // props: {
  //   openLogin: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  created(){
   this.OnStateChanged();
  },
  methods: {

  
     ...mapActions({
  
      loginn: "signInAction",
    }),
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      
      
      console.log(user);
      // this.$store.dispatch("signInAction", user);
      this.loginn({email:this.email,password:this.password}).then(() => {
        this.OnStateChanged();});
      
    },
    OnStateChanged() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // this.isAlreadyLogged = true;
          alert("Giriş yapılmıştır On state changed")
          
         } 
        //  else this.isAlreadyLogged = false;
      });
    },
    
  },
};
</script>
<style scoped>
.userDivLeft {
  width: 585px;
  float: left;
}
.userLeftBox {
  margin-top: 30px;
  padding: 30px;
  margin-left: 50px;
  background-color: #fff;
  border: 1px solid #eee;
}
.abc {
  width: 430px;
}
.spanTitle {
  display: block;
  margin-bottom: 20px;
  font-size: 26px;
  font-family: segoe ui, Tahoma, Geneva, Verdana, sans-serif;
}
.col-xs-1,
.col-sm-1,
.col-md-1,
.col-lg-1,
.col-xs-2,
.col-sm-2,
.col-md-2,
.col-lg-2,
.col-xs-3,
.col-sm-3,
.col-md-3,
.col-lg-3,
.col-xs-4,
.col-sm-4,
.col-md-4,
.col-lg-4,
.col-xs-5,
.col-sm-5,
.col-md-5,
.col-lg-5,
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6,
.col-xs-7,
.col-sm-7,
.col-md-7,
.col-lg-7,
.col-xs-8,
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xs-9,
.col-sm-9,
.col-md-9,
.col-lg-9,
.col-xs-10,
.col-sm-10,
.col-md-10,
.col-lg-10,
.col-xs-11,
.col-sm-11,
.col-md-11,
.col-lg-11,
.col-xs-12,
.col-sm-12,
.col-md-12,
.col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 5px;
  padding-left: 5px;
}
.col-xs-12 {
  width: 100%;
}
body,
td,
th,
input,
textarea,
select,
a {
  font-size: 12px;
}

* {
  margin: 0;
  outline: 0;
  padding: 0;
}
/* 
body {
    color: #000;
    font-family: open sans,sans-serif;
    font-weight: 400;
} */

.userWrapper {
  margin-bottom: 10px;
}
.userWrapper input {
  letter-spacing: 0.3px;
  background-color: #fff;
  height: auto;
  border-radius: 0;
  box-shadow: none;
  padding: 15px 0;
  border: 1px solid #eee;
  font-weight: 400;
  color: #555;
  width: 100%;
  text-indent: 15px;
  line-height: 1;
}
.uyeGirisBeniHatirla > input {
  width: 14px;
}

.spanBeniHatırla {
  line-height: normal;
  font-size: 12px;
  font-family: segoe ui, Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
}

.textbox,
.selectboxx {
  color: #666;
  display: block;
  margin: 0 0 8px;
  font-size: 12px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 11px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  transition-duration: 0.2s, 0.2s;
  -webkit-transition-duration: 0.2s, 0.2s;
}

.userLoginBtn {
  width: 100%;
  float: none;
  text-align: center;
  margin-top: 20px;
  clear: left;

  padding: 15px 0;
}
.userLoginBtn,
.userSignBtn {
  cursor: pointer;
  border: 0;
  border-radius: 0;
  height: auto;

  line-height: normal;
  font-weight: 500;
  font-size: 13px;
  font-family: segoe ui, Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.6px;

  display: block;
  margin: 10px 0 0;
  margin-top: 10px;
}

.button {
  cursor: pointer;
  background: none repeat scroll 0 0 #111;
  color: #fff;
  font-size: 12px;
  margin: 0 0 8px;
  padding: 11px 5px;
  border: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
button {
  -webkit-appearance: none;
}

.a {
  cursor: pointer;
}
.a {
  color: #666;
}
.uyeGirisBeniHatirla {
  float: left;
  /* margin: 10px 0;
line-height: normal;
font-size: 12px;
font-family: segoe ui,Tahoma,Geneva,Verdana,sans-serif; */
  width: 250px;
}
.userPassBtn {
  /* margin: 10px 0; */
  color: rgb(109, 105, 105);
  float: right;
  line-height: normal;
  font-family: segoe ui, Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
}
.userPassBtn,
.userSignBtn,
.userSignUp,
.userLogin {
  text-align: left;
  text-decoration: underline;
}
.socialMediaLoginButtons {
  clear: both;
}
</style>