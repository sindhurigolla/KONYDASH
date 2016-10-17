function initializetemplateRowConfigurationAlerts() {
    flxTemplateRowConfigurationAlertsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxTemplateRowConfigurationAlertsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    flxTemplateRowConfigurationAlertsContainer.setDefaultUnit(kony.flex.DP);
    var labelTemplateRow = new kony.ui.Label({
        "id": "labelTemplateRow",
        "isVisible": true,
        "left": "5%",
        "skin": "skinTemplateCongigurationAlerts",
        "text": "Label",
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
    var imgEmail = new kony.ui.Image2({
        "id": "imgEmail",
        "isVisible": true,
        "left": "45%",
        "skin": "slImage",
        "src": "notification_settings_15.png",
        "top": "10dp",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgText = new kony.ui.Image2({
        "id": "imgText",
        "isVisible": true,
        "left": "60%",
        "skin": "slImage",
        "src": "notification_settings_03.png",
        "top": "10dp",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgAppNotificaion = new kony.ui.Image2({
        "id": "imgAppNotificaion",
        "isVisible": true,
        "left": "80%",
        "skin": "slImage",
        "src": "notification_settings_14.png",
        "top": "10dp",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTemplateRowConfigurationAlertsContainer.add(labelTemplateRow, imgEmail, imgText, imgAppNotificaion);
}