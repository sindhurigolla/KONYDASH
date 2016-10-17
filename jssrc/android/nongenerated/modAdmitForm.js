function onClickSelectClinic() {
    var pForm = kony.application.getCurrentForm();
    //Visible
    pForm.selectTabsNoteBtn.isVisible = true;
    pForm.selectClinicDropContainer.isVisible = true;
    //Hide
    pForm.admitFormTabSection.isVisible = false;
    pForm.selectFormTypeDropDown.isVisible = false;
}

function onClickSelectFormType() {
    //Visible
    var pForm = kony.application.getCurrentForm();
    //Visible
    pForm.selectTabsNoteBtn.isVisible = true;
    pForm.selectFormTypeDropDown.isVisible = true;
    //Hide
    pForm.admitFormTabSection.isVisible = false;
    pForm.selectClinicDropContainer.isVisible = false;
}

function showadmitFrom() {
    var pForm = kony.application.getCurrentForm();
    //Visible
    pForm.admitFormTabSection.isVisible = true;
    //Hide
    pForm.selectTabsNoteBtn.isVisible = false;
    pForm.selectClinicDropContainer.isVisible = false;
    pForm.selectFormTypeDropDown.isVisible = false;
}