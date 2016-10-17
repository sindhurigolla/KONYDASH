function addWidgetsfrmRegister() {
    frmRegister.setDefaultUnit(kony.flex.DP);
    var flxregisterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxregisterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxregisterContainer.setDefaultUnit(kony.flex.DP);
    var flxHeaderConinter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxHeaderConinter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinActionBar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderConinter.setDefaultUnit(kony.flex.DP);
    var labelDash = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelDash",
        "isVisible": true,
        "left": "10dp",
        "skin": "skinActionBarHeader",
        "text": "DASH",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgSetting = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSetting",
        "isVisible": true,
        "left": "85%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeaderConinter.add(labelDash, imgSetting);
    var flxBodyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyContainer.setDefaultUnit(kony.flex.DP);
    var flxScrollContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0ed6dbdc7701248",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScrollContainer.setDefaultUnit(kony.flex.DP);
    var imgDashReg = new kony.ui.Image2({
        "centerX": "50%",
        "height": "150dp",
        "id": "imgDashReg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "dashlogo.png",
        "top": "5%",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxRegFormContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxRegFormContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "right": "10%",
        "skin": "CopyslFbox02e75e6e03ebb41",
        "top": "40%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxRegFormContainer.setDefaultUnit(kony.flex.DP);
    var btnBackToLogin = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "btnBackToLogin",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_d22dedf3acd9423b9c41844e5190d531,
        "skin": "addBtnSkin1",
        "text": "Back to login",
        "top": "5dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label08f659d173fd844 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label08f659d173fd844",
        "isVisible": true,
        "left": "78dp",
        "skin": "slLabel",
        "text": "Register",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "40dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer058cffe21941742 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "FlexContainer058cffe21941742",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09b2313577dc94d",
        "top": "80dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer058cffe21941742.setDefaultUnit(kony.flex.DP);
    FlexContainer058cffe21941742.add();
    var TextField0bb21819a195246 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "TextField0bb21819a195246",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "First Name*",
        "right": "100%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "100dp",
        "width": "80%",
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
    var CopyTextField048c59dc2aafa41 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField048c59dc2aafa41",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Last Name*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "150dp",
        "width": "80%",
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
    var CopyTextField05d06947a43e84e = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField05d06947a43e84e",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Email Address*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "200dp",
        "width": "80%",
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
    var CopyTextField070ff7f19aa764e = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField070ff7f19aa764e",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Preferred Username*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "250dp",
        "width": "80%",
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
    var Label08d494911138c43 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label08d494911138c43",
        "isVisible": true,
        "left": "10%",
        "right": 10,
        "skin": "CopyslLabel03ce55cca781148",
        "text": "Where do you worrk?*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "300dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var RadioButtonGroup01045c989661047 = new kony.ui.RadioButtonGroup({
        "centerX": "50%",
        "height": "150dp",
        "id": "RadioButtonGroup01045c989661047",
        "isVisible": true,
        "left": "10%",
        "masterData": [
            ["rbg1", "Hospital"],
            ["rbg2", "FSED"],
            ["rbg3", "Urgent Care"],
            ["Key522", "PCP Office"],
            ["Key430", "Other"]
        ],
        "right": "10%",
        "skin": "slRadioButtonGroup",
        "top": "350dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer08fbc3db241e844 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer08fbc3db241e844",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "right": "10%",
        "skin": "CopyslFbox0c85e24dc7b4e4e",
        "top": "520dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexContainer08fbc3db241e844.setDefaultUnit(kony.flex.DP);
    var FlexContainer07f15095083554c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer07f15095083554c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5dp",
        "skin": "CopyslFbox011b601cf7ce749",
        "top": "5dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    FlexContainer07f15095083554c.setDefaultUnit(kony.flex.DP);
    var Label01f14d48753b143 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label01f14d48753b143",
        "isVisible": true,
        "left": "5dp",
        "right": "5dp",
        "skin": "slLabel",
        "text": "A U 8 5 W",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer07f15095083554c.add(Label01f14d48753b143);
    var Image0c6b5287844cc44 = new kony.ui.Image2({
        "height": "50dp",
        "id": "Image0c6b5287844cc44",
        "isVisible": true,
        "left": "80%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer08fbc3db241e844.add(FlexContainer07f15095083554c, Image0c6b5287844cc44);
    var CopyTextField098426de55b3447 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "CopyTextField098426de55b3447",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Enter Text Here*",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "600dp",
        "width": "80%",
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
    var CheckBoxGroup0de39f4ba45da49 = new kony.ui.CheckBoxGroup({
        "height": "170dp",
        "id": "CheckBoxGroup0de39f4ba45da49",
        "isVisible": true,
        "left": "10%",
        "masterData": [
            ["cbg1", "I want here more about Direct Admission System for Hospital offers,products and services"]
        ],
        "right": "10%",
        "skin": "slCheckBoxGroup",
        "top": "650dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0619542a7f1d944 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "Button0619542a7f1d944",
        "isVisible": true,
        "left": "20%",
        "right": "20%",
        "skin": "slButtonGlossBlue",
        "text": "Register",
        "top": "830dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0d9c624b17e764b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "FlexContainer0d9c624b17e764b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox055b440af01ec45",
        "top": "880dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0d9c624b17e764b.setDefaultUnit(kony.flex.DP);
    FlexContainer0d9c624b17e764b.add();
    var RichText0521ebe0f144644 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichText0521ebe0f144644",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslRichText01b16713e6e324c",
        "text": "IF THERE ARE ISSUES WITH THIS SITE,PLEASE CALL HCA CONTINENTAL TO ADMIN\n(909)-806-1800",
        "top": "900dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 6],
        "paddingInPixel": false
    }, {});
    flxRegFormContainer.add(btnBackToLogin, Label08f659d173fd844, FlexContainer058cffe21941742, TextField0bb21819a195246, CopyTextField048c59dc2aafa41, CopyTextField05d06947a43e84e, CopyTextField070ff7f19aa764e, Label08d494911138c43, RadioButtonGroup01045c989661047, FlexContainer08fbc3db241e844, CopyTextField098426de55b3447, CheckBoxGroup0de39f4ba45da49, Button0619542a7f1d944, FlexContainer0d9c624b17e764b, RichText0521ebe0f144644);
    flxScrollContainer.add(imgDashReg, flxRegFormContainer);
    flxBodyContainer.add(flxScrollContainer);
    flxregisterContainer.add(flxHeaderConinter, flxBodyContainer);
    frmRegister.add(flxregisterContainer);
};

function frmRegisterGlobals() {
    frmRegister = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRegister,
        "enabledForIdleTimeout": false,
        "id": "frmRegister",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmRegister.info = {
        "kuid": "2009436c05454dd2b794ade3e07a66a2"
    };
};