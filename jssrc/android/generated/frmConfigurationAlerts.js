function addWidgetsfrmConfigurationAlerts() {
    frmConfigurationAlerts.setDefaultUnit(kony.flex.DP);
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
    var imgMenuClose = new kony.ui.Image2({
        "height": "20dp",
        "id": "imgMenuClose",
        "isVisible": true,
        "left": "90%",
        "right": "10%",
        "skin": "slImage",
        "src": "close.png",
        "top": "10dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    flxMenuProfileDetailsContainer.add(imgMenuClose, imgMenuProfilePic, flxLineContainer, labelUsername);
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
        "onClick": AS_FlexContainer_a588b9e71b9742aebffe0380368a19e4,
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
        "onClick": AS_FlexContainer_ee8f55ad02d342f191bf5375fdfed578,
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
        "onClick": AS_FlexContainer_a66ed9705de94959be69c62b1a384546,
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
        "onClick": AS_FlexContainer_8ef19e47f2354316b1f89c22fcd535bb,
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
        "onClick": AS_FlexContainer_9d72f4836ee541a68d96baf5b0ec83a5,
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
        "onClick": AS_FlexContainer_25ec93bda16e4c60b78a79cf85e4f67a,
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
        "onClick": AS_FlexContainer_63fef7d56a5e440081baaa77754b8fcd,
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
        "onClick": AS_FlexContainer_12c6cd43d0aa4aa5872109a382429f6f,
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
        "onTouchStart": AS_Image_d62b9c31d7eb4957b13c8e7c455c5c1b,
        "skin": "slImage",
        "src": "icons_03.png",
        "top": "20%",
        "width": "12%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var labelConfigurationAdmissionAlerts = new kony.ui.Label({
        "centerY": "50%",
        "id": "labelConfigurationAdmissionAlerts",
        "isVisible": true,
        "left": "20%",
        "skin": "skinActionBarHeader",
        "text": "Configuration Admission Alerts",
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
    var flxBodyScrollCointer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxBodyScrollCointer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBodyScrollCointer.setDefaultUnit(kony.flex.DP);
    var TabConfigurationAdmissionAlerts = new kony.ui.TabPane({
        "activeSkin": "tabCanvas",
        "activeTabs": [0],
        "height": "100%",
        "id": "TabConfigurationAdmissionAlerts",
        "inactiveSkin": "tabCanvasInactive",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "left": "0dp",
        "top": "0%",
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
    var tabDirectAdmission = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabDirectAdmission",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "slTab",
        "tabName": "Direct Admission",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabDirectAdmission.setDefaultUnit(kony.flex.DP);
    var flxPsychAdmissionContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPsychAdmissionContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPsychAdmissionContainer.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinConfigurationAlertsHeader",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d.setDefaultUnit(kony.flex.DP);
    var CopylabelPsychAdmission032ac767f58c74c = new kony.ui.Label({
        "id": "CopylabelPsychAdmission032ac767f58c74c",
        "isVisible": true,
        "left": "5%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail057d679da186d46 = new kony.ui.Label({
        "id": "CopylabelPsychEmail057d679da186d46",
        "isVisible": true,
        "left": "45%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText08723ef5ecfae41 = new kony.ui.Label({
        "id": "CopylabelPsychText08723ef5ecfae41",
        "isVisible": true,
        "left": "60%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Text",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification0a04bbcb77a844b = new kony.ui.Label({
        "id": "CopylabelPsyncAppNotification0a04bbcb77a844b",
        "isVisible": true,
        "left": "70%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "AppNotiifcation",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d.add(CopylabelPsychAdmission032ac767f58c74c, CopylabelPsychEmail057d679da186d46, CopylabelPsychText08723ef5ecfae41, CopylabelPsyncAppNotification0a04bbcb77a844b);
    var CopysegmentPsychAdmission03cfd4ed9fe0f46 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable Pending discharges"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Physician Accept"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "SAC Auto Accept"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Physician Denied"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Assigend"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Arrived"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Notshow"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Discharged"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "CopysegmentPsychAdmission03cfd4ed9fe0f46",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxTemplateRowConfigurationAlertsContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "10%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxTemplateRowConfigurationAlertsContainer": "flxTemplateRowConfigurationAlertsContainer",
            "imgAppNotificaion": "imgAppNotificaion",
            "imgEmail": "imgEmail",
            "imgText": "imgText",
            "labelTemplateRow": "labelTemplateRow"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPsychAdmissionContainer.add(CopyflxPsychAdmissionHeaderContainer0d5022215c04a4d, CopysegmentPsychAdmission03cfd4ed9fe0f46);
    tabDirectAdmission.add(flxPsychAdmissionContainer);
    TabConfigurationAdmissionAlerts.addTab("tabDirectAdmission", "Direct Admission", null, tabDirectAdmission, null);
    var tabPsychAdmission = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "150%",
        "id": "tabPsychAdmission",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "slTab",
        "tabName": "Psych Admission",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabPsychAdmission.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionContainer0def2ccf1489349 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "72.49%",
        "id": "CopyflxPsychAdmissionContainer0def2ccf1489349",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionContainer0def2ccf1489349.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer0a2fc92c8ef4047 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxPsychAdmissionHeaderContainer0a2fc92c8ef4047",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinConfigurationAlertsHeader",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionHeaderContainer0a2fc92c8ef4047.setDefaultUnit(kony.flex.DP);
    var CopylabelPsychAdmission0392b5174400544 = new kony.ui.Label({
        "id": "CopylabelPsychAdmission0392b5174400544",
        "isVisible": true,
        "left": "5%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail07e6841e1b77041 = new kony.ui.Label({
        "id": "CopylabelPsychEmail07e6841e1b77041",
        "isVisible": true,
        "left": "45%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText06d10c5d9fd4247 = new kony.ui.Label({
        "id": "CopylabelPsychText06d10c5d9fd4247",
        "isVisible": true,
        "left": "60%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Text",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification0b52bb593fff047 = new kony.ui.Label({
        "id": "CopylabelPsyncAppNotification0b52bb593fff047",
        "isVisible": true,
        "left": "70%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "AppNotiifcation",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer0a2fc92c8ef4047.add(CopylabelPsychAdmission0392b5174400544, CopylabelPsychEmail07e6841e1b77041, CopylabelPsychText06d10c5d9fd4247, CopylabelPsyncAppNotification0b52bb593fff047);
    var CopysegmentPsychAdmission0d842f445bf6d44 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable Pending discharges"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Physician Accept"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "SAC Auto Accept"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Physician Denied"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Assigend"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Arrived"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Notshow"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Discharged"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "CopysegmentPsychAdmission0d842f445bf6d44",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxTemplateRowConfigurationAlertsContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "10%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxTemplateRowConfigurationAlertsContainer": "flxTemplateRowConfigurationAlertsContainer",
            "imgAppNotificaion": "imgAppNotificaion",
            "imgEmail": "imgEmail",
            "imgText": "imgText",
            "labelTemplateRow": "labelTemplateRow"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxPsychAdmissionContainer0def2ccf1489349.add(CopyflxPsychAdmissionHeaderContainer0a2fc92c8ef4047, CopysegmentPsychAdmission0d842f445bf6d44);
    tabPsychAdmission.add(CopyflxPsychAdmissionContainer0def2ccf1489349);
    TabConfigurationAdmissionAlerts.addTab("tabPsychAdmission", "Psych Admission", null, tabPsychAdmission, null);
    var tabEDReferral = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "tabEDReferral",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "slTab",
        "tabName": "ED Referral",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabEDReferral.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionContainer0afa7bde2381444 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxPsychAdmissionContainer0afa7bde2381444",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionContainer0afa7bde2381444.setDefaultUnit(kony.flex.DP);
    var CopyflxPsychAdmissionHeaderContainer0df8afdac619044 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxPsychAdmissionHeaderContainer0df8afdac619044",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinConfigurationAlertsHeader",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxPsychAdmissionHeaderContainer0df8afdac619044.setDefaultUnit(kony.flex.DP);
    var CopylabelPsychAdmission03cbc23a6feaf4d = new kony.ui.Label({
        "id": "CopylabelPsychAdmission03cbc23a6feaf4d",
        "isVisible": true,
        "left": "5%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Type",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychEmail020655b9cfd8b4e = new kony.ui.Label({
        "id": "CopylabelPsychEmail020655b9cfd8b4e",
        "isVisible": true,
        "left": "45%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsychText075aff286f3d440 = new kony.ui.Label({
        "id": "CopylabelPsychText075aff286f3d440",
        "isVisible": true,
        "left": "60%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "Text",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylabelPsyncAppNotification09b404342c77741 = new kony.ui.Label({
        "id": "CopylabelPsyncAppNotification09b404342c77741",
        "isVisible": true,
        "left": "70%",
        "skin": "sknAconfigurationAlertsHeader",
        "text": "AppNotiifcation",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxPsychAdmissionHeaderContainer0df8afdac619044.add(CopylabelPsychAdmission03cbc23a6feaf4d, CopylabelPsychEmail020655b9cfd8b4e, CopylabelPsychText075aff286f3d440, CopylabelPsyncAppNotification09b404342c77741);
    var CopysegmentPsychAdmission094c0087e384d47 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Unavilable Pending discharges"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Physician Accept"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "SAC Auto Accept"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Physician Denied"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Bed Assigend"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Arrived"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Notshow"
        }, {
            "imgAppNotificaion": "imagedrag.png",
            "imgEmail": "imagedrag.png",
            "imgText": "imagedrag.png",
            "labelTemplateRow": "Patient Discharged"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "CopysegmentPsychAdmission094c0087e384d47",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxTemplateRowConfigurationAlertsContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "10%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxTemplateRowConfigurationAlertsContainer": "flxTemplateRowConfigurationAlertsContainer",
            "imgAppNotificaion": "imgAppNotificaion",
            "imgEmail": "imgEmail",
            "imgText": "imgText",
            "labelTemplateRow": "labelTemplateRow"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxPsychAdmissionContainer0afa7bde2381444.add(CopyflxPsychAdmissionHeaderContainer0df8afdac619044, CopysegmentPsychAdmission094c0087e384d47);
    tabEDReferral.add(CopyflxPsychAdmissionContainer0afa7bde2381444);
    TabConfigurationAdmissionAlerts.addTab("tabEDReferral", "ED Referral", null, tabEDReferral, null);
    flxBodyScrollCointer.add(TabConfigurationAdmissionAlerts);
    flxBodyContainer.add(flxBodyScrollCointer);
    flxContainer1.add(flxActionbarContainer, flxBodyContainer);
    frmConfigurationAlerts.add(flxMenuContainer, flxContainer1);
};

function frmConfigurationAlertsGlobals() {
    frmConfigurationAlerts = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmConfigurationAlerts,
        "enabledForIdleTimeout": false,
        "id": "frmConfigurationAlerts",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
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
    frmConfigurationAlerts.info = {
        "kuid": "3b35a92be3cd4556a58b224a47a8d314"
    };
};