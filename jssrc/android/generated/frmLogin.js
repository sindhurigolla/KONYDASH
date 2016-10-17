function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0d5c7b9eaef914c",
        "top": "10%",
        "width": "90%"
    }, {}, {});
    flxContainer.setDefaultUnit(kony.flex.DP);
    var flexForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flexForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3%",
        "onTouchStart": AS_FlexContainer_cbc88e48a3cc4f27a0b5377d7f9d2845,
        "right": "3%",
        "skin": "slBorder",
        "top": "60dp",
        "width": "98%"
    }, {}, {});
    flexForm.setDefaultUnit(kony.flex.DP);
    var txtUsr = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtUsr",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "CopyslTextBox01e08f9b55a5b48",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "17dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtPass = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtPass",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "CopyslTextBox01e08f9b55a5b48",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "17dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var horFlexC1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "horFlexC1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    horFlexC1.setDefaultUnit(kony.flex.DP);
    var chkRemember = new kony.ui.CheckBoxGroup({
        "height": "50dp",
        "id": "chkRemember",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["chkRememebr", "Remember Me"]
        ],
        "selectedKeyValues": [
            ["chkRememebr", "Remember Me"]
        ],
        "selectedKeys": ["chkRememebr"],
        "skin": "slChkboxremeber",
        "top": "7dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelForgotPassword = new kony.ui.Label({
        "centerX": 50,
        "height": "50dp",
        "id": "labelForgotPassword",
        "isVisible": true,
        "left": "50%",
        "right": 0,
        "skin": "skinLabelRegister",
        "text": "Forgot Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    horFlexC1.add(chkRemember, labelForgotPassword);
    var btnLogin = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slBtnFocus",
        "height": "40dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_1690e2e3b85347399e26c117c7f58d61,
        "skin": "slLoginSkin1",
        "text": "Sign In",
        "top": "7dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelRegister = new kony.ui.Label({
        "centerX": "50%",
        "id": "labelRegister",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Label_2d2b38ea30bc4f928977703820b9ecbd,
        "skin": "skinLabelRegister",
        "text": "Don't have account? Register",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 10, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblAnnounce = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblAnnounce",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel039251fa175404a",
        "text": "By clicking \"Sign in\" above, I accept the term & condition",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btAnn2 = new kony.ui.Label({
        "centerX": "50%",
        "id": "btAnn2",
        "isVisible": true,
        "left": "135dp",
        "skin": "sknLabel1",
        "text": "IF THERE ARE ISSUES WITH THE SITE, PLEASE CALL HCA TRANSFER CENTER TO ADMIT (187) 777-7422",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "255dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgStrm = new kony.ui.Image2({
        "centerX": "50%",
        "id": "imgStrm",
        "isVisible": true,
        "left": "0dp",
        "src": "footer.png",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label057fe168f411241 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label057fe168f411241",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel009e9aae34bd145",
        "text": "Privacy Policy",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexForm.add(txtUsr, txtPass, horFlexC1, btnLogin, labelRegister, lblAnnounce, btAnn2, imgStrm, Label057fe168f411241);
    flxContainer.add(flexForm);
    var imgLogo = new kony.ui.Image2({
        "centerX": "48.15%",
        "height": "100dp",
        "id": "imgLogo",
        "imageWhenFailed": "pageondot.png",
        "isVisible": true,
        "left": "123dp",
        "src": "dashlogo.png",
        "top": "20dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText0edfdb231ea7a45 = new kony.ui.RichText({
        "id": "CopyRichText0edfdb231ea7a45",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText0405b9b85b7284c",
        "text": "Note: By clicking “Sign In” above, I accept the following:\n\nYou are about to access an HCA - Information Technology & Services, Inc. (IT&S) approved computer system. This system is to be used only by authorized users of IT&S, its customers and affiliates. As a user of this system, you have no expectation of privacy rights or ownership in anything you may create, store, send or receive on this system. By proceeding, your use of this system\n1) constitutes your agreement that IT&S and/or your company may consent to law enforcement officials and agencies accessing information regarding your use of this network\n2) constitutes your consent to monitoring, retrieval, and disclosure of any information within this system for all purposes deemed appropriate by IT&S, including enforcement of rules concerning unacceptable uses of this system\n3) constitutes your agreement to comply with all privacy, security and other policies and procedures of IT&S and your company\nIf you have any questions about what constitutes an acceptable use by you, please consult the written policies provided by IT&S and your company.",
        "top": "115%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmLogin.add(flxContainer, imgLogo, CopyRichText0edfdb231ea7a45);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onTouchStart": AS_Form_860a385b41dc4c28a7415ecfcad6141b,
        "postShow": AS_Form_86e2a34cbe254dd5a6ec8f71738a3e6d,
        "preShow": AS_Form_0e33096cf18d4c02bb2059660bea59de,
        "skin": "CopyslForm086125e91c9f340"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": false,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmLogin.info = {
        "kuid": "d09416a89ffb4e328392a59c58abf608"
    };
};