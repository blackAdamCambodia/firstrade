<template>
    <div id="loginpage" >
        <div class="header absolute z-10 overflow-hidden top-0 bg-white w-full py-8">
            <div class="content ">
                <a href="/">
                    <div class="header_logo"></div>
                </a>
                <div class="homelink"><a href="/">{{ $t('login_page.return_to_homepage') }}</a></div>
            </div>
        </div>
        <div class="container">
            <div class="loginbox br">
                <div class="content br text-left">
                    <form name="loginForm" id="loginForm" action="/login" method="post" target="_top"
                        autocomplete="off" class="br">
                        <input type="hidden" name="redirect" value="">
                        <input type="hidden" name="ft_locale" value="en-us">
                        <input type="hidden" name="login.x" value="Log In">
                        <div class="title text-primary text-lg">{{ $t('login_page.login_to_your_account') }}</div>
                        <div class="logerrormsg br" style="display:none"></div>
                        <br>
                        <div class="loginInput">
                            <label for="username">{{ $t('login_page.User_ID') }}</label><br>
                            <input type="text" maxlength="40" autocomplete="off" id="username" name="username">
                        </div><br>
                        <div class="passwordInput">
                            <label for="password">{{ $t('login_page.password') }}</label><br>
                            <input type="password" maxlength="40" style="" autocomplete="off" id="password" name="password">
                        </div>
                        <div id="forgetpass"><a target="_top" href="/sc_scripts/loginsupport/en-us/1/">{{ $t('login_page.need_login_help') }}</a>
                        </div>
                        <br><br>
                        <select name="destination_page" id="destination_page" class="destination_page"
                            onchange="setFTdefaultCookie()">
                            <option value="home">{{ $t('login_page.select_start_page') }}</option>
                            <option value="home">Home</option>
                            <option value="acctbalance">Balances</option>
                            <option value="acctpositions">Positions</option>
                            <option value="stock_order">Stock &amp; ETF Trading</option>
                            <option value="option_order">Option Trading</option>
                            <option value="orderstatus">Order Status</option>
                            <option value="accthistory">Account History</option>
                        </select>
                        <input type="submit" id="loginButton" value="Login" class="btn btn-primary"><br>
                        <div class="openaccount text-center"><a href="/SignUp">{{ $t('login_page.open_an_account') }}</a></div>
                    </form>
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="info">
                <div class="contact br">
                    <div class="content text-left">
                        <div class="title">Need Help?</div>
                        <p><a href="mailto:service@firstrade.com" target="_blank" rel="noopener">Email us</a></p>
                        <p><b>Toll Free</b><br>1-800-869-8800</p>
                        <p><b>Overseas</b><br>1-718-961-6600</p>
                    </div>
                </div>
                <div class="mobile br">
                    <div class="content" style="padding: 0;">
                        <div class="background"><a
                                href="https://play.google.com/store/apps/details?id=com.firstrade.android" target="_blank"
                                rel="noopener">
                                <div id="android"></div>
                            </a><a href="http://itunes.apple.com/app/firstrade/id405325225?mt=8" target="_blank"
                                rel="noopener">
                                <div id="apple"></div>
                            </a></div>
                    </div>
                </div>
            </div>
            <div class="promo"><a href="/trading/pricing" target="_blank" rel="noopener"><img
                        id="promo_img" src="/images/ban_invlogin_0.png"></a></div>
        </div>
        <div class="footer">
            <div class="content py-6">
                <p><a id="open-modal">{{ $t('login_page.recommended_browsers') }}</a></p>
                <p>Language Services:&nbsp;&nbsp;<a id="traditional"
                        href="/cgi-bin/login?ft_locale=zh-tw">繁體</a>&nbsp;&nbsp;<a id="simplified"
                        href="/cgi-bin/login?ft_locale=zh-cn">简体</a></p>
                <p>{{ $t('login_page.please_review_our') }} <a target="_blank" rel="noopener"
                        href="/legal/privacy"> {{ $t('footer.privacy_policy') }}</a> and <a target="_blank"
                        rel="noopener" href="/legal/terms"> {{ $t('footer.terms_conditions') }}</a>.<br>
                        {{ $t('login_page.firstrade_securities_inc') }} <a target="_blank" rel="noopener"
                        href="http://www.finra.org">FINRA</a>/<a target="_blank" rel="noopener"
                        href="http://www.sipc.org">SIPC</a>.<br>
                        {{ $t('login_page.system_response_and_access_times') }}</p>
            </div>
        </div>
        <!-- The Modal -->
        <div id="browserModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">×</span>
                <div class="text-left py-4">
                    <p>Firstrade.com is best viewed using the following browsers:</p>
                    <ul class="list-disc list-inside py-4">
                        <li><a href="https://www.google.com/intl/en-us/chrome/browser-tools/" target="_blank"
                                rel="noopener noreferrer">Chrome</a></li>
                        <li><a href="https://www.microsoft.com/en-us/edge" target="_blank"
                                rel="noopener noreferrer">Edge</a></li>
                        <li><a href="https://www.mozilla.org/en-us/firefox/new/" target="_blank"
                                rel="noopener noreferrer">Firefox</a></li>
                        <li><a href="https://support.apple.com/en-us/HT204416" target="_blank"
                                rel="noopener noreferrer">Safari</a></li>
                    </ul>
                    <p>If your browser is not listed here, we highly recommend that you upgrade at your earliest
                        convenience.</p>
                </div>
            </div>
        </div> <!-- end of modal -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            isLogin: false,
    }
}
}
</script>
<style scoped>
#loginpage,
#securelogin {
    margin: 1em auto;
}

.header {
    border-bottom: none;
    margin-bottom: 1em;
}

.header .content,
.footer .content,
.container {
    overflow: hidden;
    position: relative;
    max-width: 960px;
    min-width: 960px;
    width: auto;
    margin: auto;
    /* display: flex;
    justify-content: space-between;
    padding:0 15px; */
}

.header_logo {
    float: left;
    background: url(/images/ftlogo-blue.svg) no-repeat top left;
    width: 180px;
    height: 35px;
}

a {
    color: #0066cc;
    cursor: pointer;
    text-decoration: none;
}

.homelink {
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 5px;
    font-size: 13px;
}

#loginpage .loginbox {
    float: left;
    background-color: #DEE8F5;
    font-size: 14px;
    height: 344px;
    width: 265px;
    border: none;
    line-height: 16px;
    box-shadow: 1px 1px 6px rgba(0, 0, 41, 0.15);
}

.br {
    border-radius: 4px;
}

.loginbox .content {
    height: 294px;
    border: none;
    margin: 0;
    background-color: #DEE8F5;
    padding: 20px;
}

.container .content {
    padding: 12px 20px 10px 20px;
    overflow: hidden;
    font-size: 13px;
}

#forgetpass {
    float: right;
    font-size: 11px;
    margin-top: 2px;
}

#loginButton {
    height: 30px;
    width: 100%;
    margin: 9px 0px;
    background: #4A8BDD url(/images/login_lock.svg) no-repeat left 78px center;
    background-size: 12px;
    padding: 0 0 0 15px;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-size: 13px;
}

.btn-primary {
    color: #fff;
    background-color: #4A8BDD;
    border-color: #4A8BDD;
}

.btn {
    display: inline-block;
    padding: 4px 20px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.loginbox label,
.subtitle {
    font-size: 14px;
    font-weight: 700;
    color: #2A528E;
}

input[type="text"],
input[type="password"] {
    border: 1px solid #B7BAC3;
    background-color: #fff;
    border-radius: 4px;
    height: 30px;
    font-size: 14px;
    line-height: 1.42857143;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
}

select {
    width: 100%;
    font-size: 13px;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    border: 1px solid #B7BAC3;
    height: 30px;
    color: #454545;
}

#loginpage .info {
    float: left;
    width: 20%;
    margin: 0% 1%;
    overflow: hidden;
}

#loginpage .info .contact {
    margin-bottom: 10px;
    background-color: #E8E9EC;
    box-shadow: 1px 1px 6px rgba(0, 0, 41, 0.15);
}

.contact .title {
    font-size: 15px;
    margin: 5px 0;
}

.content p {
    font-size: 12px;
    color: #454545;
    line-height: 1.1rem;
    padding: 4px 0;
}

#loginpage .info .mobile .background {
    background: url(/images/login-jumppage_ios20.png) no-repeat center top;
    background-size: cover;
    height: 168px;
    position: relative;
}

#loginpage .promo {
    float: left;
    width: 50%;

}
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 140px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    font-size: 14px;
}
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
</style>