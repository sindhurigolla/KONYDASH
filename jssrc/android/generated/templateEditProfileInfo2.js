function initializetemplateEditProfileInfo2() {
    FlexContainer060764c0cde7d4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer060764c0cde7d4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0e5617e1a52574a"
    }, {}, {});
    FlexContainer060764c0cde7d4d.setDefaultUnit(kony.flex.DP);
    var Image081203e63fbf643 = new kony.ui.Image2({
        "height": "30dp",
        "id": "Image081203e63fbf643",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "15dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0c981bd3b128e47 = new kony.ui.Label({
        "centerY": "50px",
        "id": "Label0c981bd3b128e47",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel045bc9599fecf4b",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer060764c0cde7d4d.add(Image081203e63fbf643, Label0c981bd3b128e47);
}