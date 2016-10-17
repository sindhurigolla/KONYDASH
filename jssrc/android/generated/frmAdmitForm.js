function addWidgetsfrmAdmitForm() {
    frmAdmitForm.setDefaultUnit(kony.flex.DP);
    var flxMenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-80%",
        "right": 0,
        "skin": "sknMenu",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxMenuContainer.setDefaultUnit(kony.flex.DP);
    var flxMenuProfileDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxMenuProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
    var imgMenuProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100dp",
        "id": "imgMenuProfilePic",
        "isVisible": true,
        "left": "20dp",
        "skin": "slImage",
        "src": "icons_07.png",
        "top": "20dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLineContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "flxLineContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinLine",
        "top": "148dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineContainer.setDefaultUnit(kony.flex.DP);
    flxLineContainer.add();
    var labelUsername = new kony.ui.Label({
        "centerX": "50%",
        "id": "labelUsername",
        "isVisible": true,
        "left": 98,
        "skin": "skinMenuLabel",
        "text": "Swaraj RC",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "120dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMenuProfileDetailsContainer.add(imgMenuProfilePic, flxLineContainer, labelUsername);
    var flxMenuItemsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "flxMenuItemsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMenuItemsContainer.setDefaultUnit(kony.flex.DP);
    var flxDashBoardContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxDashBoardContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDashBoardContainer.setDefaultUnit(kony.flex.DP);
    var imgDashBoard = new kony.ui.Image2({
        "height": "75%",
        "id": "imgDashBoard",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_03.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDashBoard = new kony.ui.Label({
        "height": "100%",
        "id": "labelDashBoard",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "DashBoard",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDashBoardContainer.add(imgDashBoard, labelDashBoard);
    var flxDischargeNotificationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxDischargeNotificationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_67a27fdcfebb44b3b8ac9aef2ccb1eb9,
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDischargeNotificationContainer.setDefaultUnit(kony.flex.DP);
    var imgDischargeNotification = new kony.ui.Image2({
        "height": "75%",
        "id": "imgDischargeNotification",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_07.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelDischargeNotification = new kony.ui.Label({
        "height": "100%",
        "id": "labelDischargeNotification",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Discharge Notifications",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDischargeNotificationContainer.add(imgDischargeNotification, labelDischargeNotification);
    var flxAdmittCointer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxAdmittCointer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_024973cfb1894aca8e13c231afbc7865,
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAdmittCointer.setDefaultUnit(kony.flex.DP);
    var imgAdmit = new kony.ui.Image2({
        "height": "75%",
        "id": "imgAdmit",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_11.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelAdmit = new kony.ui.Label({
        "height": "100%",
        "id": "labelAdmit",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Admit",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAdmittCointer.add(imgAdmit, labelAdmit);
    var flxSupportContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxSupportContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_5d0e152fd99c4272830ac288c269dba9,
        "skin": "slFbox",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSupportContainer.setDefaultUnit(kony.flex.DP);
    var imgSupport = new kony.ui.Image2({
        "height": "75%",
        "id": "imgSupport",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_15.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelSupport = new kony.ui.Label({
        "height": "100%",
        "id": "labelSupport",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Support",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSupportContainer.add(imgSupport, labelSupport);
    var flxProfileContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_aaf86923215e4a92a119634f089970c5,
        "skin": "slFbox",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProfileContainer.setDefaultUnit(kony.flex.DP);
    var imgProfile = new kony.ui.Image2({
        "height": "75%",
        "id": "imgProfile",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_19.png",
        "top": "5%",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelProfile = new kony.ui.Label({
        "height": "100%",
        "id": "labelProfile",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Profile",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxProfileContainer.add(imgProfile, labelProfile);
    var flxConfigarationAlertsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxConfigarationAlertsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_1a63faba19cd414eae9c626a95b8bcfc,
        "skin": "slFbox",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxConfigarationAlertsContainer.setDefaultUnit(kony.flex.DP);
    var imgConfigureAdmissionAlertsl = new kony.ui.Image2({
        "height": "75%",
        "id": "imgConfigureAdmissionAlertsl",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_23.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelConfigureAdmissionAlerts = new kony.ui.Label({
        "height": "100%",
        "id": "labelConfigureAdmissionAlerts",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Configure Admission Alerts",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxConfigarationAlertsContainer.add(imgConfigureAdmissionAlertsl, labelConfigureAdmissionAlerts);
    var flxAlerttoneSettings = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxAlerttoneSettings",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_30f636a5a4094653b0fb1598e0e80631,
        "skin": "slFbox",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAlerttoneSettings.setDefaultUnit(kony.flex.DP);
    var imgAlertToneSettings = new kony.ui.Image2({
        "height": "75%",
        "id": "imgAlertToneSettings",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_27.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelAlerttoneSettings = new kony.ui.Label({
        "height": "100%",
        "id": "labelAlerttoneSettings",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "Alert Tone Settings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAlerttoneSettings.add(imgAlertToneSettings, labelAlerttoneSettings);
    var flxLogoutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxLogoutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_8960a695ebd74039a2a182ca7741ae0d,
        "skin": "slFbox",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLogoutContainer.setDefaultUnit(kony.flex.DP);
    var imgLogout = new kony.ui.Image2({
        "height": "75%",
        "id": "imgLogout",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menu_31.png",
        "top": "5dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelLogout = new kony.ui.Label({
        "height": "100%",
        "id": "labelLogout",
        "isVisible": true,
        "left": "25%",
        "skin": "skinMenuLabel",
        "text": "LogOut",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLogoutContainer.add(imgLogout, labelLogout);
    flxMenuItemsContainer.add(flxDashBoardContainer, flxDischargeNotificationContainer, flxAdmittCointer, flxSupportContainer, flxProfileContainer, flxConfigarationAlertsContainer, flxAlerttoneSettings, flxLogoutContainer);
    flxMenuContainer.add(flxMenuProfileDetailsContainer, flxMenuItemsContainer);
    var flxContainer1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxContainer1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": 0,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContainer1.setDefaultUnit(kony.flex.DP);
    var flxActionbarContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxActionbarContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinActionBar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxActionbarContainer.setDefaultUnit(kony.flex.DP);
    var imgMenuOpen = new kony.ui.Image2({
        "height": "50%",
        "id": "imgMenuOpen",
        "isVisible": true,
        "left": "5%",
        "onTouchStart": AS_Image_db3627a978ed4da4a0d98d21365b3c92,
        "skin": "slImage",
        "src": "icons_03.png",
        "top": "20%",
        "width": "12%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelConfigurationAdmissionAlerts = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelConfigurationAdmissionAlerts",
        "isVisible": true,
        "left": "20%",
        "skin": "skinActionBarHeader",
        "text": "Direct Admit Form",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxActionbarContainer.add(imgMenuOpen, labelConfigurationAdmissionAlerts);
    var flxBodyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxBodyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": 0,
        "skin": "skinBody",
        "top": "10.03%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyContainer.setDefaultUnit(kony.flex.DP);
    var flexAdmitFormContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexAdmitFormContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexAdmitFormContainer.setDefaultUnit(kony.flex.DP);
    var admitFormHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "admitFormHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "admitFormHDSkin",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitFormHeader.setDefaultUnit(kony.flex.DP);
    var admitTabSectionMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "admitTabSectionMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    admitTabSectionMain.setDefaultUnit(kony.flex.DP);
    var selectClinicTab = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "selectClinicTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_627d5a4635d74ac6b25de8bcbc9914fa,
        "skin": "slFbox",
        "top": "10dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    selectClinicTab.setDefaultUnit(kony.flex.DP);
    var clinicImgID = new kony.ui.Image2({
        "centerX": "50%",
        "height": "40dp",
        "id": "clinicImgID",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "clinicicon1.png",
        "top": "6dp",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tabList1 = new kony.ui.Label({
        "id": "tabList1",
        "isVisible": true,
        "left": "0dp",
        "skin": "tabListSkin",
        "text": "Select Clinic",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "55dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    selectClinicTab.add(clinicImgID, tabList1);
    var selectClinicTab2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "selectClinicTab2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchStart": AS_FlexContainer_d197f2480f534774aaf67307793bb7b7,
        "right": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    selectClinicTab2.setDefaultUnit(kony.flex.DP);
    var formTypeImgID = new kony.ui.Image2({
        "centerX": "50%",
        "height": "40dp",
        "id": "formTypeImgID",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "formtypeicon.png",
        "top": "6dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tabList2 = new kony.ui.Label({
        "id": "tabList2",
        "isVisible": true,
        "left": "0dp",
        "skin": "tabListSkin",
        "text": "Select Form Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "55dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    selectClinicTab2.add(formTypeImgID, tabList2);
    var tabDevider = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "tabDevider",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "tabDeviderSkin",
        "top": "10dp",
        "width": "2dp",
        "zIndex": 1
    }, {}, {});
    tabDevider.setDefaultUnit(kony.flex.DP);
    tabDevider.add();
    admitTabSectionMain.add(selectClinicTab, selectClinicTab2, tabDevider);
    admitFormHeader.add(admitTabSectionMain);
    var selectTabsNoteBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "selectTabsNoteBtn",
        "isVisible": true,
        "left": "20dp",
        "right": "20dp",
        "skin": "noteButtonSkin1",
        "text": "Please select Clinic and Form type",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var selectClinicDropContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "selectClinicDropContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    selectClinicDropContainer.setDefaultUnit(kony.flex.DP);
    var selectClinicListID = new kony.ui.ListBox({
        "height": "40dp",
        "id": "selectClinicListID",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "select clinic name here"],
            ["lb2", "HCL"],
            ["lb3", "GOIO"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "select clinic name here"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "selecticon.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var selectBorder = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "selectBorder",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    selectBorder.setDefaultUnit(kony.flex.DP);
    selectBorder.add();
    var tabActiveIcon1 = new kony.ui.Image2({
        "height": "7dp",
        "id": "tabActiveIcon1",
        "isVisible": true,
        "left": "80dp",
        "skin": "slImage",
        "src": "activeicon.png",
        "top": "-1dp",
        "width": "12dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    selectClinicDropContainer.add(selectClinicListID, selectBorder, tabActiveIcon1);
    var selectFormTypeDropDown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "selectFormTypeDropDown",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    selectFormTypeDropDown.setDefaultUnit(kony.flex.DP);
    var selectFormTypeListId = new kony.ui.ListBox({
        "height": "40dp",
        "id": "selectFormTypeListId",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "select form type here"],
            ["lb2", "HCL"],
            ["lb3", "GOIO"]
        ],
        "onSelection": AS_ListBox_9345a658d386424baa49f10cd05e8cbf,
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "select form type here"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "selecticon.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var selectBorder1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "selectBorder1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    selectBorder1.setDefaultUnit(kony.flex.DP);
    selectBorder1.add();
    var tabActiveIcon2 = new kony.ui.Image2({
        "height": "7dp",
        "id": "tabActiveIcon2",
        "isVisible": true,
        "left": "75%",
        "skin": "slImage",
        "src": "activeicon.png",
        "top": "-1dp",
        "width": "12dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    selectFormTypeDropDown.add(selectFormTypeListId, selectBorder1, tabActiveIcon2);
    var admitFormTabSection = new kony.ui.TabPane({
        "activeSkin": "tabColorSkin",
        "activeTabs": [0],
        "centerX": "50%",
        "height": "80%",
        "id": "admitFormTabSection",
        "inactiveSkin": "CopytabCanvasInactive0a17bff67241244",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "left": "0dp",
        "top": "20%",
        "viewConfig": {
            "collapsibleViewConfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "collapsibleviewconfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "tabViewConfig": {
                "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                "image1": "tableftarrow.png",
                "image2": "tabrightarrow.png"
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
        "width": "100%",
        "zIndex": 1
    }, {
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tabHeaderHeight": 64
    });
    var TestpatientTab = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "TestpatientTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "slTab",
        "tabName": "Patient",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    TestpatientTab.setDefaultUnit(kony.flex.DP);
    var innerTabRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "innerTabRow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "innerTabRowSkin",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    innerTabRow.setDefaultUnit(kony.flex.DP);
    var btnMandatory = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnMandatory",
        "isVisible": true,
        "left": "0dp",
        "skin": "btnWhite",
        "text": "* Only Mandatory",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnPreferred = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnPreferred",
        "isVisible": true,
        "left": "40%",
        "skin": "btnWhite",
        "text": "Preferred",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnAll = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnAll",
        "isVisible": true,
        "left": "80%",
        "right": "0dp",
        "skin": "btnAllSkin",
        "text": "All",
        "top": "-1dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    innerTabRow.add(btnMandatory, btnPreferred, btnAll);
    var patientMandatorySection = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "patientMandatorySection",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "pagingEnabled": false,
        "right": "2%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "15%",
        "verticalScrollIndicator": true,
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    patientMandatorySection.setDefaultUnit(kony.flex.DP);
    var etFirstName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_WORDS,
        "height": "10%",
        "id": "etFirstName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "First Name",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5%",
        "width": "100%",
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
    var etLastName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "10%",
        "id": "etLastName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Last Name",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "20%",
        "width": "100%",
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
    var RadioButtonGroup1 = new kony.ui.RadioButtonGroup({
        "height": "41dp",
        "id": "RadioButtonGroup1",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["rbg1", "Male"],
            ["rbg2", "Female"]
        ],
        "selectedKey": "rbg2",
        "selectedKeyValue": ["rbg2", "Female"],
        "skin": "RadioButtonGroup1Skin",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tickedImage": "radioselected1.png",
        "untickedImage": "radiounselected1.png"
    });
    var DOBCalander = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateComponents": [25, 8, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 25,
        "formattedDate": "25/08/2016",
        "height": "40dp",
        "hour": 0,
        "id": "DOBCalander",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 8,
        "placeholder": "Date of Birth(mm-dd-yyyy)",
        "seconds": 0,
        "skin": "CopyslCalendar0df7d1e1015ca4a",
        "top": "40%",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "100%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var etAdmittingHospital = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "etAdmittingHospital",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Admitting Hospital",
        "secureTextEntry": false,
        "skin": "textFieldSkin1",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "50%",
        "width": "100%",
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
    var fieldRowSection5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "fieldRowSection5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "fieldRowSectionSkin",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fieldRowSection5.setDefaultUnit(kony.flex.DP);
    var patientAdmitHSP = new kony.ui.Label({
        "id": "patientAdmitHSP",
        "isVisible": true,
        "left": "0dp",
        "skin": "fieldLabelSkin",
        "text": "Admitting Group",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var patientAdmitHSPSelectBx = new kony.ui.ListBox({
        "height": "40dp",
        "id": "patientAdmitHSPSelectBx",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "Select Hospital"],
            ["lb2", "Dallas Test Hospital - Dallas"],
            ["lb3", "Test Phani Hospital"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Select Hospital"],
        "skin": "patientAdmitHSPSelectBxSkin",
        "top": "25dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "selecticon.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    fieldRowSection5.add(patientAdmitHSP, patientAdmitHSPSelectBx);
    var patientSubmit1 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "15%",
        "id": "patientSubmit1",
        "isVisible": true,
        "left": "0dp",
        "skin": "submitColorSkin",
        "text": "Submit",
        "top": "80%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    patientMandatorySection.add(etFirstName, etLastName, RadioButtonGroup1, DOBCalander, etAdmittingHospital, fieldRowSection5, patientSubmit1);
    TestpatientTab.add(innerTabRow, patientMandatorySection);
    admitFormTabSection.addTab("TestpatientTab", "Patient", null, TestpatientTab, null);
    var TestDiagnosTab = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "150dp",
        "id": "TestDiagnosTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "slTab",
        "tabName": "Diagnostics",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    TestDiagnosTab.setDefaultUnit(kony.flex.DP);
    TestDiagnosTab.add();
    admitFormTabSection.addTab("TestDiagnosTab", "Diagnostics", null, TestDiagnosTab, null);
    var TestRecommendTab = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "150dp",
        "id": "TestRecommendTab",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "slTab",
        "tabName": "Recommendations",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    TestRecommendTab.setDefaultUnit(kony.flex.DP);
    TestRecommendTab.add();
    admitFormTabSection.addTab("TestRecommendTab", "Recommendations", null, TestRecommendTab, null);
    flexAdmitFormContainer.add(admitFormHeader, selectTabsNoteBtn, selectClinicDropContainer, selectFormTypeDropDown, admitFormTabSection);
    flxBodyContainer.add(flexAdmitFormContainer);
    flxContainer1.add(flxActionbarContainer, flxBodyContainer);
    frmAdmitForm.add(flxMenuContainer, flxContainer1);
};

function frmAdmitFormGlobals() {
    frmAdmitForm = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAdmitForm,
        "enabledForIdleTimeout": false,
        "id": "frmAdmitForm",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
    frmAdmitForm.info = {
        "kuid": "a61f86b4fb384227b844ba626c644872"
    };
};