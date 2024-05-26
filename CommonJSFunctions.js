﻿function SearchGridUI(SearchButtonID, TableID, IsScroll) {

    var prm = Sys.WebForms.PageRequestManager.getInstance();
    // $("select").select2({ dropdownAutoWidth: 'true' });
    //$('#ajax').on('hidden.bs.modal', function () {
    //    $(this).removeData('bs.modal');
    //});

    if (prm != null) {
        if (IsScroll == 1) {
            prm.add_beginRequest(function (sender, e) {
                var isAsync = sender._postBackSettings.async;
                var controlId = sender._postBackSettings.sourceElement.id;
                if (controlId == SearchButtonID) {
                    ScrollToSearch(controlId);
                }
            });
        }
        ApplyJSToTable(TableID, true);
        prm.add_endRequest(function () {
            ApplyJSToTable(TableID, true);
            //$("select").select2({ dropdownAutoWidth: 'true' });
        });
    }
}

function GNGridUI(TableID, IsSearchBox) {

    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (prm != null) {

        ApplyJSToTable(TableID, IsSearchBox);
        prm.add_endRequest(function () {
            ApplyJSToTable(TableID, IsSearchBox);
        });
    }
}

function GNGridUIScrollY(TableID, IsSearchBox) {

    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (prm != null) {

        ApplyJSToTableScrollY(TableID, IsSearchBox);
        prm.add_endRequest(function () {
            ApplyJSToTableScrollY(TableID, IsSearchBox);
        });
    }
}


function CheckToDelete() {
    var checkedValues = $('input:checkbox:checked').map(function () {
        return this.value;
    }).get();

    if (checkedValues == "") {
        alert("No Row Selected");
        return false;
    }
    else {
        //var result = window.confirm("Are you sure want to delete ?");
        //return result;
    }
}
function ScrollToSearch(controlId) {
    $('html, body').animate({
        scrollTop: ($('#' + controlId).first().offset().top)
    }, 500);
}





var specialKeys = new Array();
specialKeys.push(8); //Backspace
specialKeys.push(9);

$(".Numeric").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
    if (ret == false)
        return false;
})

//$(".ScrollToSave").click(function (e) {
//    // Do client side button click stuff here.
//    $('html, body').animate({
//        scrollTop: ($('#'+e.target.id).first().offset().top)
//    }, 500);
//});

$(".Alphabet").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || specialKeys.indexOf(keyCode) != -1);
    if (ret == false)
        return false;
})

$(".NumericDash").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var charCode = (e.which) ? e.which : event.keyCode
    if (charCode != 45 && charCode > 31 && (charCode < 48 || charCode > 57) || specialKeys.indexOf(keyCode) != -1)
        return false;
})



$(".DateOnly").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var charCode = (e.which) ? e.which : event.keyCode
    if (charCode != 45 && charCode > 31 && (charCode < 48 || charCode > 57) || specialKeys.indexOf(keyCode) != -1)
        return false;
})


$(".Decimal").keypress(function (e) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var charCode = (e.which) ? e.which : event.keyCode;
    if (parseInt($(this).val().indexOf(".")) > 0 && charCode == 46)
        return false;
    if ((charCode != 46 || $(element).val().indexOf('.') != -1)      // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57))
        return false;
})

/* Start Percentage up to 100 */
$('.Percentage').keyup(function () {
    if ($(this).val() > 100) {
        //alert("No numbers above 100");
        $(this).val('100');
    }
});
/*END Percentage up to 100 */


/* Start Height up to 7 Feet */
$('.Heightmax').keyup(function () {
    if ($(this).val() > 7) {
        //alert("No numbers above 100");
        $(this).val('7');
    }
});
/*END Height up to 7 Feet */

/* Start Weight up to 200 KG */
$('.Weightmax').keyup(function () {
    if ($(this).val() > 200) {
        //alert("No numbers above 100");
        $(this).val('200');
    }
});
/*END Weight up to 200 KG */
//$('.decimal').keyup(function () {
//    var val = $(this).val();
//    if (isNaN(val)) {
//        val = val.replace(/[^0-9\.]/g, '');
//        if (val.split('.').length > 2)
//            val = val.replace(/\.+$/, "");
//    }
//    $(this).val(val);
//});
function IsDecimal(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    if (keycode == 9) { }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }
}
function IsValidDecimal(control, key) {
    var val = control.value;
    var code = key.keyCode || key.which;
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    if (code == 46) {
        if (val.indexOf('.') > 0)
            return false;
    }

    var keycode = (key.which) ? key.which : key.keyCode;
    if (keycode == 9) { }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }

    return true;
}

function IsDecimal100(control, key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    if (control.value > 99) {
        control.value = "100";
        return false;
    }
    else if (keycode == 9) {

    }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57) || specialKeys.indexOf(keycode) != -1) {
        return false;
    }
    return true;
}

function IsNumeric(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    if (keycode == 9) { }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57) || specialKeys.indexOf(keycode) != -1) {
        return false;
    }
    return true;
}

function IsDigit(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    var keycode = (key.which) ? key.which : key.keyCode;

    if ($.inArray(keycode, specialKeys) != -1) {
        return true;
    }
    else if (keycode < 48 || keycode > 57) {
        return false;
    }
    return true;
}


function Decimal2Digits(evt, element) {

    var controlKeys = [8, 9, 13];
    var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
    //var specialKeys = new Array();
    //specialKeys.push(8); //Backspace
    //specialKeys.push(9);

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
        isControlKey ||     //Allow Special Charcter
        (charCode == 45 && $(element).val().indexOf('-') == -1 && $(element).val() == '') || //Allow Dash Only At First Position
        (charCode == 46 && $(element).val().indexOf('.') == -1)) //Allow Dot Only Once
    {
        return true;
    }

    if (charCode < 48 || charCode > 57) {
        return false;
    }

    if ($(element).val().indexOf('.') > 0) {
        splitval = $(element).val().split(".");
        if (splitval[1].length >= 2)
            return false;
        else
            return true;
    }

    return true;
}


function IsDigitAndDash(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    specialKeys.push(45);
    //getting key code of pressed key


    var keycode = (key.which) ? key.which : key.keyCode;

    if (keycode == 45 || keycode == 109)
        return true;

    if (keycode == 9) { }
    else if ((keycode < 48 || keycode > 57) || (typeof (keyCode) != "undefined" && specialKeys.indexOf(keyCode) != -1)) {
        return false;
    }
    return true;
}

function IsDigitDashComma(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    specialKeys.push(45);
    //getting key code of pressed key

    var keycode = (key.which) ? key.which : key.keyCode;

    if (keycode == 45 || keycode == 44)
        return true;

    if (keycode == 9) { }
    else if ((keycode < 48 || keycode > 57) || specialKeys.indexOf(keyCode) != -1) {
        return false;
    }
    return true;
}




$(".Required").on("blur keypress", function () {
    if ($(this).val() == "") {
        $(this).css("border", "1px solid #e26a73");
        // $(this).focus();
    }
    else {
        $(this).css("border", "1px solid #e5e5e5");
    }
});

/* Start Prevent From Copy Paste*/

$(document).ready(function () {
    $('.nopaste').bind('copy paste cut', function (e) {
        e.preventDefault(); //disable cut,copy,paste        
    });
});

/* End Prevent From Copy Paste*/


$('.TitleCase').keyup(function () {
    $(this).val(toTitleCase($(this).val()));
});

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}


function DisplayNameFormat(FirstName, LastName, MiddleName, Format) {

    var Name = '';

    if (Format == "LFM") {
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
    }
    else if (Format == "FLM") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
    }
    else if (Format == "FML") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
    }
    else if (Format == "MFL") {
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
    }
    else if (Format == "LMF") {
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }
    else if (Format == "MLF") {
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }
    else if (Format == "FL") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
    }
    else if (Format == "F") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }
    else if (Format == "LF") {
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }

    return Name.trim().toUpperCase();
}


//var initPickers = function () {
//    //init date pickers
//    $('.date-picker').datepicker({
//        rtl: Metronic.isRTL(),
//        autoclose: true,
//        todayHighlight: true,
//        startDate: "01-01-1900"
//    });
//}
//initPickers();

function GetColumnIndex(ColumnName, TableID) {
    var SelectedIndex = -1;
    var ColumnIndex = 0;

    if ($('#' + TableID + ' tbody tr').length > 0) {
        $('#' + TableID + ' thead tr th').each(function () {
            if (this !== undefined) {
                if ($.trim(this.innerHTML).toString() == ColumnName.toString()) {
                    SelectedIndex = ColumnIndex;

                }
            }
            ColumnIndex++
        });
    }
    return SelectedIndex;
}


function FooterSection(ColumnName, OperationType, TableID) {

    var ColumnIndex = 0, SelectedIndex = 0, Total = 0, ColumnValue = 0, TotalRow = 0, Result = 0;
    TotalRow = $('#' + TableID + ' tbody tr').length;

    if (parseInt(TotalRow) > 0) {

        SelectedIndex = GetColumnIndex(ColumnName, TableID);
        $('#' + TableID + ' tbody tr').each(function () {
            if (!this.rowIndex) return;

            console.log(this.cells[SelectedIndex]);
            if (this.cells[SelectedIndex] != undefined) {
                if (this.cells[SelectedIndex].innerHTML != NaN)
                    ColumnValue = parseFloat(this.cells[SelectedIndex].innerHTML);

                Total = Total + ColumnValue;
            }
        });

        if (OperationType == "Sum")
            Result = Total;

        if (OperationType == "Avg") {
            var avg = parseFloat(Total) / parseFloat(TotalRow);
            Result = avg;
        }

        $('#' + TableID + ' tfoot tr').each(function () {
            this.cells[SelectedIndex].innerHTML = Result;
        });
    }
}


$(document).on('keypress', 'input', function (e) {
    if (e.keyCode == 13 && e.target.type !== 'submit') {
        var inputs = $(this).parents("form").eq(0).find(":input");
        var idx = inputs.index(this);

        if (idx == inputs.length - 1) {
            inputs[0].select()
        } else {
            inputs[idx + 1].focus(); //  handles submit buttons
            inputs[idx + 1].select();
        }
        return false;
    }
});


function GNWebKeyEvents(key, AddControlID, SearchControlID) {
    switch (key) {
        case 118:
            $("#" + SearchControlID).click();
            return false;
        case 119:
            $(".First").focus();
            return false;
        case 120:
            var href = $("#" + AddControlID).attr('href');
            window.location.replace(href);
            return false;
        default:
            //alert(key.toString())
            return true;
    }
}


/* Practical Exam */

function IsValidPracticalMarks(event, control, PassingMarks, MaxMarks) {
    if (control.value == "") {
        //alert("Enter Marks");
        control.focus;

        return false;
    }
    else if (control.value < PassingMarks) {
        if (!confirm("Are you sure want to enter marks less than passing marks"))
            control.focus();
    }
    else if (control.value > MaxMarks) {
        alert("Enter less than " + MaxMarks);
        control.focus();
        return false;
    }
    else {
        return true;
    }
}

function IsValidISBNISSN(e, type, control) {
    alert(type.val());
}

$('a.modalButton').on('click', function (e) {
    var src = $(this).attr('href');
    var target = $(this).attr('data-target');
    $(target + " iframe").attr({
        'src': src
    });
    e.preventDefault();
});

$('.modal').on('hidden.bs.modal', function () {
    $(".modal iframe").attr({
        'src': 'about:blank'
    });
});

function closemyModal() {
    $('.modal').modal('hide');
}

function closeModalAndRefreshPage() {
    $('.modal').modal('hide');
    location.reload();
}

function ConvertToDefaultCurrency(number) {
    var preferCulture = 'en-IN';
    var formatedNumber = '';
    if ($.isNumeric(number))
        formatedNumber = number.toLocaleString(preferCulture);
    return formatedNumber;
}

function GNConfirmYesNo(sender, message) {
    if ($(sender).attr("confirmed") == "true") { return true; }

    bootbox.confirm({
        message: '<h1 class="text-center">' + message + '</h1>',
        className: 'scale animated',
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (confirmed) {
            if (confirmed) {
                $(sender).attr("confirmed", confirmed).trigger("click");
            }
        }
    });

    return false;
}


function GNConfirmYesNoWithRemarks(sender, message, hfID) {
    if ($(sender).attr("confirmed") == "true") { return true; }

    if (document.getElementById(hfID) != null)
        document.getElementById(hfID).value = null;

    localStorage.removeItem("GNConfirmYesNohfID");
    localStorage.setItem('GNConfirmYesNohfID', hfID);
    bootbox.confirm({
        message: "<h1 class='text-center'>" + message + "</h1><hr/><label class='sbold'>Remarks</label> <textarea rows='2' placeholder='Remarks' class='form-control' id='fname' onkeyup='GNConfirmYesNoAddRemarks(this.value)' onkeypress='GNConfirmYesNoAddRemarks(this.value)' name='fname' required >",
        className: 'scale animated',
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (confirmed) {
            if (confirmed) {
                $(sender).attr("confirmed", confirmed).trigger("click");
            }
        }
    });

    return false;
}

function GNConfirmYesNoAddRemarks(val) {
    if (document.getElementById(localStorage.getItem('GNConfirmYesNohfID')) != null) {
        document.getElementById(localStorage.getItem('GNConfirmYesNohfID')).value = val;
    }
}

function GNConfirmYesNoLinkButton(sender, message) {

    if (message == '') { message = message; }
    if ($(sender).attr('confirmOK') == '1') { return true; }

    bootbox.confirm({
        message: '<h1 class="text-center">' + message + '</h1>',
        className: 'scale animated',
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $(sender).attr('confirmOK', '1');
                sender.click();
            }
            else {
                $(sender).attr('confirmOK', '0');
            }
        }
    });

    return false;
}


function GNAlertSavedSuccessfully(sender, message, URL) {
    if ($(sender).attr("confirmed") == "true") { return true; }

    bootbox.confirm({
        message: '<h1 class="text-center"><b>' + message + '</b> Saved Successfully </h1>',
        className: 'scale animated',
        closeButton: false,
        buttons: {
            confirm: {
                label: 'Ok',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger hide'
            }
        },
        callback: function (confirmed) {
            if (confirmed) {
                $(sender).attr("confirmed", confirmed).trigger("click");
                if (URL.length > 0)
                    window.location.href = URL;
            }
        }
    });

    return false;
}


function GNAlert(sender, message, URL) {
    if ($(sender).attr("confirmed") == "true") { return true; }

    bootbox.confirm({
        message: message,
        className: 'scale animated',
        closeButton: false,
        buttons: {
            confirm: {
                label: 'Ok',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger hide'
            }
        },
        callback: function (confirmed) {
            if (confirmed) {
                $(sender).attr("confirmed", confirmed).trigger("click");
                if (URL.length > 0)
                    window.location.href = URL;
            }
        }
    });

    return false;
}


function ConfirmYesNo(sender, message) {
    if ($(sender).attr("confirmed") == "true") { return true; }

    bootbox.confirm({
        message: '<h1 class="text-center">' + message + '</h1>',
        className: 'scale animated',
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (confirmed) {
            if (confirmed) {
                $(sender).attr("confirmed", confirmed).trigger("click");
            }
        }
    });

    return false;
}

function GNClearhfAutoComplete(ControlClientID) {

    var ctrl = event.ctrlKey ? event.ctrlKey : ((key === 17) ? true : false); // ctrl detection
    var key = event.which || event.keyCode; // keyCode detection

    //if (event.keyCode == 8 || key == 8 || event.keyCode == 46 || key == 46) {
    //    $get(ControlClientID).value = "";
    //}
    if (event.keyCode == 9 || event.keyCode == 13 || event.ctrlKey) {
        //Tab Key & Enter Key Press Kare to Clear nai karvanu
    }
    else if (key == 67 && ctrl) {
        //Control & C Press Kare to Clear nai karvanu
    }
    else
        $get(ControlClientID).value = "";
}


function IsAnyCheckBoxChecked(sender, FieldName, message) {
    var elements = document.body.getElementsByTagName("input");
    var CheckedCount = 0;
    for (i = 0; i < elements.length; i++) {

        if (elements[i].type == "checkbox") {

            if (elements[i].checked == true)
                CheckedCount++;

        }
    }
    if (parseInt(CheckedCount) > 0) {
        return ConfirmYesNo(sender, message);
    }
    else {
        alert("Please select at least one " + FieldName);
        return false;
    }
}

/*Confirmation Functions*/

function GNConfirmWithCheckBox(FieldName, message) {


    var elements = document.body.getElementsByTagName("input");
    var CheckedCount = 0;
    var IsRemarksEntered = false;

    for (i = 0; i < elements.length; i++) {

        if (elements[i].type == "checkbox") {

            if (elements[i].checked == true)
                CheckedCount++;

        }
    }
    if (parseInt(CheckedCount) > 0) {

        return confirm(message);
    }
    else {
        alert("Please select at least one " + FieldName);
        return false;
    }
}

function GNConfirmWithTextBoxClassName(TextBoxClassName, TextBoxName, ForName, message) {


    var elements = document.body.getElementsByClassName(TextBoxClassName);
    var EnteredCount = 0;
    var IsRemarksEntered = false;

    for (i = 0; i < elements.length; i++) {

        if (elements[i].type == "text") {

            if (elements[i].value != null && elements[i].value != "")
                EnteredCount++;

        }
    }
    if (parseInt(EnteredCount) > 0) {

        return confirm(message);
    }
    else {
        alert("Please enter " + TextBoxName + " at least for one " + ForName);
        return false;
    }
}


function GNConfirmWithCheckBoxRemarks(sender, FieldName, message, txtRemarks, RemarksDiplayName) {


    var elements = document.body.getElementsByTagName("input");
    var CheckedCount = 0;
    var IsRemarksEntered = false;

    for (i = 0; i < elements.length; i++) {

        if (elements[i].type == "checkbox") {

            if (elements[i].checked == true)
                CheckedCount++;

        }
    }
    if (parseInt(CheckedCount) > 0) {

        if (txtRemarks != null) {
            var Remarks = document.getElementById(txtRemarks).value;
            if (Remarks != null && Remarks != "")
                IsRemarksEntered = true;
            else {
                alert("Please enter " + RemarksDiplayName);
                IsRemarksEntered = false;
            }
        }
        else
            IsRemarksEntered = true;

        if (IsRemarksEntered == true)
            return confirm(message);
    }
    else {
        alert("Please select at least one " + FieldName);
        return false;
    }
}

/*Confirmation Functions*/

function GNScrollToTop() {
    $('html, body').animate({
        scrollTop: ($('#h3PageHeader').first().offset().top)
    }, 500);
}


//function GetConfirmationBoxOnApprovedRecord(e,Operation,TableName) {
//    e.preventDefault();
//    var elm = e.target;
//    var confirmation = confirm('Are you sure you want to ' + Operation + ' approved ' + TableName + '?');
//    if (confirmation) {
//        elm.parentElement.parentElement.remove();
//        return true;
//    } else {
//        return false;
//    }
//}

function GetConfirmationBoxOnApprovedRecord(e, Operation, TableName, ID, sender) {
    e.preventDefault();
    //var confirmation = confirm('Are you sure you want to ' + Operation + ' approved ' + TableName + '?');
    var confirmation = GNConfirmYesNo(sender, 'Are you sure you want to ' + Operation + ' approved <b>' + TableName + '?</b>');

    if (confirmation) {
        var href = $('#' + ID + '').prop('href');
        window.location.href = href;
    } else {

    }
}

//Keyur: Multiple Tables in the Same Page (Repeater)
function SearchGridUIByClass(TableClass, IsSearch) {

    var prm = Sys.WebForms.PageRequestManager.getInstance();
    if (prm != null) {
        ApplyJSToTableByClass(TableClass, IsSearch);
        prm.add_endRequest(function () {
            ApplyJSToTableByClass(TableClass, IsSearch);
        });
    }
}

function ButtonClickWithShortcut(e, Control, Modifierkeys, AlphabetKey) {
    let IsProperShortcutPressed = false;
    if (e.key.toLowerCase() == AlphabetKey) {
        if (Modifierkeys == "alt" && e.altKey)
            IsProperShortcutPressed = true;
        else if (Modifierkeys == "ctrl" && e.ctrlKey)
            IsProperShortcutPressed = true;
        else if (Modifierkeys == "shift" && e.shiftKey)
            IsProperShortcutPressed = true;

        if (IsProperShortcutPressed)
            document.getElementById(Control).click();
    }
}

function SaveWithShortcut(e, Control) {
    let IsProperShortcutPressed = false;
    let Modifierkeys = "alt";
    let AlphabetKey = "s";
    if (e.key.toLowerCase() == AlphabetKey) {
        if (Modifierkeys == "alt" && e.altKey)
            IsProperShortcutPressed = true;
        else if (Modifierkeys == "ctrl" && e.ctrlKey)
            IsProperShortcutPressed = true;
        else if (Modifierkeys == "shift" && e.shiftKey)
            IsProperShortcutPressed = true;

        if (IsProperShortcutPressed)
            document.getElementById(Control).click();
    }
}

function PrintWithShortcut(e, Control) {
    let IsProperShortcutPressed = false;
    let Modifierkeys = "alt";
    let AlphabetKey = "p";
    if (e.key.toLowerCase() == AlphabetKey) {
        if (Modifierkeys == "alt" && e.altKey)
            IsProperShortcutPressed = true;
        else if (Modifierkeys == "ctrl" && e.ctrlKey)
            IsProperShortcutPressed = true;
        else if (Modifierkeys == "shift" && e.shiftKey)
            IsProperShortcutPressed = true;

        if (IsProperShortcutPressed)
            document.getElementById(Control).click();
    }
}

// ADDED BY DEVANG MEHTA ON 22-02-2024 AS PER DU TICKET: 19337
$(document).on('keydown', '.timepicker', function (e) {
    if (e.which === 9) { // Tab key code
        $(this).timepicker('hideWidget');
    }
});
