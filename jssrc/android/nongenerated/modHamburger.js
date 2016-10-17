function hamburger() {
    var pForm = kony.application.getCurrentForm();
    // console.log("1-------------------------");
    // alert(pForm.flxMenu.left);
    if (pForm.flxMenuContainer.left == '0%') {
        // console.log("2-------------------------");
        //do some thing here
        closeMenu();
    } else {
        //   console.log("3-------------------------");
        openMenu();
    }
}

function openMenu() {
    // console.log("4-------------------------");
    var pForm = kony.application.getCurrentForm();
    try {
        pForm.flxMenuContainer.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.7
        }, {
            "animationEnd": function() {}
        });
        pForm.flxContainer1.animate(kony.ui.createAnimation({
            "100": {
                "left": "85%",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.7
        }, {
            "animationEnd": function() {}
        });
        pForm.flxContainer1.setEnabled(true);
        /* if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "android"){
      pForm.flxContainer1.setEnbaled(true);
    }else{
       pForm.flxContainer1.setEnbaled(false);
	}*/
    } catch (err) {}
}

function closeMenu() {
    // console.log("5-------------------------");
    var pForm = kony.application.getCurrentForm();
    if (pForm == "frmHome") {}
    pForm.flxMenuContainer.animate(kony.ui.createAnimation({
        "100": {
            "left": "-85%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.7
    }, {
        "animationEnd": function() {}
    });
    pForm.flxContainer1.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.7
    }, {
        "animationEnd": function() {}
    });
    pForm.flxMenuContainer.setEnabled(true);
}