<template>
  <div>
    <div class="userRightBox">
      <span class="spanTittle">Hızlı Üyelik</span>
      <div class="userWrapper nameDiv">
        <input
          class="textbox"
          id="txtQuickName"
          name="txtQuickName"
          type="text"
          placeholder="Adınız"
        />
        <span class="alert alert-danger isRequired displayNone"
          >Lütfen Adınızı Giriniz.</span
        >
      </div>
      <div class="userWrapper lastDiv">
        <input
          class="textbox"
          id="txtQuickLastName"
          name="txtQuickLastName"
          type="text"
          placeholder="Soyadınız"
        />
        <span class="alert alert-danger isRequired displayNone"
          >Lütfen Soyadınızı Giriniz.</span
        >
      </div>
      <div class="userWrapper emailDiv">
        <input
          class="textbox"
          id="txtQuickEmail"
          name="txtQuickEmail"
          type="email"
          placeholder="E-posta"
        />
        <span class="alert alert-danger isRequired displayNone"
          >Lütfen E-posta Adresinizi Giriniz.</span
        >
        <span class="alert alert-danger mailRequired displayNone"
          >Lütfen E-posta Adresinizi Kontrol Ediniz.</span
        >
      </div>
      <div class="userWrapper passDiv">
        <input
          class="textbox"
          id="txtQuickPass"
          name="txtQuickPass"
          type="password"
          placeholder="Şifre"
        />
        <span class="alert alert-danger isRequired displayNone"
          >Lütfen Şifrenizi Giriniz..</span
        >
      </div>
      <div class="userWrapper telDiv">
        <div class="intl-tel-input">
          <div class="flag-container">
            <div tabindex="0" class="selected-flag" title="Türkiye: +90">
              <div class="iti-flag tr"></div>
              <div class="arrow"></div>
            </div>
            <!-- <ul class="country-list hide">
              <li
                class="country preferred active highlight"
                data-dial-code="90"
                data-country-code="tr"
              >
                <div class="flag"><div class="iti-flag tr"></div></div>
                <span class="country-name">Türkiye</span
                ><span class="dial-code">+90</span>
              </li>
            
            </ul> -->
          </div>
          <input
            class="textbox ticiTelInput"
            id="txtQuickTel"
            name="txtQuickTel"
            type="tel"
            autocomplete="off"
            
          />
        </div>
        <span class="alert alert-danger isRequired displayNone"
          >Lütfen Cep Telefonu Numaranızı Giriniz.</span
        >
      </div>
      <span class="alert alert-danger isRequired displayNone"
        >Lütfen Cep Telefonu Numaranızı Giriniz.</span
      >
      <div class="userWrapper xIDDiv divHizliUyelikIDDiv" style="display: none">
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
        <label class="isRequired alert alert-danger displayNone"
          >Hatalı güvenlik kodu, lütfen tekrar deneyiniz.</label
        >
      </div>
      <div class="userMail">
        <input type="checkbox" id="chkMailPermission" /><label
          for="chkMailPermission"
          >Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak
          istiyorum.</label
        >
      </div>
      <div class="userSms">
        <input type="checkbox" id="chkSmsPermission" /><label
          for="chkSmsPermission"
          >Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak
          istiyorum.</label
        >
      </div>
      <div class="userSozlesmeDiv">
        <input id="chkSozlesme" type="checkbox" />
        <label for="chkSozlesme"
          ><strong
            ><a href="" target="" style="color: #ff0000"
              >Üyelik koşullarını</a
            ></strong
          >
          ve
          <strong
            ><a href="" target="_blank" style="color: #ff0000"
              >kişisel verilerimin korunmasını</a
            ></strong
          >
          kabul ediyorum.</label
        >
      </div>
      <span class="alert alert-danger displayNone spnSozlesmeValidation"
        >Bu Alan Zorunludur</span
      >
      <button
        type="button"
        class="userLoginBtn QuickMember button"
        onclick="UyeOl()"
      >
        <span>Üye Ol</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.userRightBox {
  float: right;
}

.intl-tel-input .selected-flag .iti-flag {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}
.iti-flag.tr {
    height: 14px;
    background-position: -5065px 0;
}
.iti-flag {
    width: 20px;
    height: 15px;
    box-shadow: 0 0 1px 0 #888;
    background-image: url(https://www.minikterzi.com/Scripts/formatPhone/img/flags.png);
    background-repeat: no-repeat;
    background-color: #dbdbdb;
    background-position: 20px 0;
}
.intl-tel-input .selected-flag .arrow {
    position: absolute;
  
    top: 50%;
    margin-top: -2px;
    right: 4px;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #555;
    cursor: pointer;
}
.intl-tel-input input,  .intl-tel-input input[type="tel"] {
    position: relative;
    z-index: 0;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-left: 48px !important;
    margin-left: 0;
    transition: background-color 100ms ease-out;
}
.intl-tel-input .selected-flag {
    z-index: 1;
    position: relative;
    width: 42px;
    height: 100%;
    padding: 0 0 0 8px;
}
.textbox:focus,
select:focus {
  background-color: #f1f1f1;
}

.userRightBox {
  margin: 30px;
  padding: 30px;
  width: 525px;
  height: 553;
/* margin-left:600px ; */
  background-color: #fff;
  border: 1px solid #eee;
 
}
.spanTittle {
  display: block;
  margin-bottom: 20px;
  font-size: 26px;
  font-family: segoe ui, Tahoma, Geneva, Verdana, sans-serif;
}
* {
  box-sizing: border-box;
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
.intl-tel-input {
  position: relative;
}
.intl-tel-input {
  width: 100%;
}
.intl-tel-input input,
.intl-tel-input input[type="text"],
.intl-tel-input input[type="tel"] {
  position: relative;
  width:100%;
  z-index: 0;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-left: 48px !important;
  margin-left: 0;
  transition: background-color 100ms ease-out;
}
.dinamikFormContainer .intl-tel-input input,
.intl-tel-input input[type="text"],
.intl-tel-input input[type="tel"] {
  border: solid 1px #e5e5e5;
  height: 40px;
  line-height: 40px;
  border-radius: 0;
  box-shadow: none;
  margin: 0;

  float: none;
  color: #666;
  font-size: 14px;
}
.intl-tel-input .flag-container {
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1px;
}

.userWrapper {
  margin-bottom: 10px;
}
.alert-danger {
  background-color: transparent;
  border: 0;
  color: red;
  font-family: segoe ui, Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  font-weight: 400;
  padding: 0;
  margin: 0;
}
.displayNone {
  display: none;
}
.alert {
  width: 100%;
}
.textbox,
.selectboxx {
  display: block;
  margin: 0 0 8px;
  font-size: 12px;

  box-sizing: border-box;
}
* {
  margin: 0;
  outline: 0;
  padding: 0;
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
.userMail input,
.userSms input,
.userSozlesmeDiv input {
  float: left;
  width: 17px;
  margin-top: 0;
  margin-left: 0;
}
body {
  color: #000;
  font-family: open sans, sans-serif;
  font-weight: 400;
}
.userMail,
.userSms,
.userSozlesmeDiv {
  width: 100%;
  margin-bottom: 5px;
}
.userMail input,
.userSms input,
.userSozlesmeDiv input {
  float: left;
  width: 17px;
  margin-top: 0;
  margin-left: 0;
}
.userMail label,
.userSms label,
.userSozlesmeDiv label {
  /* float: left; */
  width: 90%;
  line-height: 12px;
  font-size: 11px;
  font-family: segoe ui, Tahoma, Geneva, Verdana, sans-serif;
} 
.userLoginBtn {
  width: 100%;
  float: none;
  text-align: center;
  margin-top: 20px;
  clear: left;

  padding: 15px 0;
}
.button {
  cursor: pointer;
  background: none repeat scroll 0 0 #111;
  color: #fff;
}
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
}
.intl-tel-input .country-list .country.highlight {
    background-color: rgba(0,0,0,.05);
}
.intl-tel-input .country-list .country {
    padding: 5px 10px;
}
.intl-tel-input .country-list {
    list-style: none;
 white-space: nowrap;
}


</style>