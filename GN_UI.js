﻿function ApplyJSToTable(tableid, IsSearchBox) {
    var table = $('#' + tableid);
    $("#" + tableid + "").dataTable().fnDestroy();
    // begin first table
    table.dataTable({

        // Internationalisation. For more info refer to http://datatables.net/manual/i18n
        "language": {
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },
            "emptyTable": "No data available in table",
            // "info": "Showing _START_ to _END_ of _TOTAL_ records",
            "infoEmpty": "No records found",
            //"infoFiltered": "(filtered1 from _MAX_ total records)",

            "infoFiltered": "(filtered _TOTAL_ from _MAX_ total entries)",


            "lengthMenu": "Show _MENU_",
            "search": "Search:",
            "zeroRecords": "No matching records found"//,
            //"paginate": {
            //    "previous": "Prev",
            //    "next": "Next",
            //    "last": "Last",
            //    "first": "First"
            //}
        },
        "searching": IsSearchBox,
        "bLengthChange": false,
        //"bStateSave": false, // save datatable state(pagination, sort, etc) in cookie.
        "paging": false,
        "bSort": true,
        "info": false,
        "infoFiltered": true,
        "aaSorting": [],
        // Or you can use remote translation file
        //"language": {
        //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
        //},

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
        // So when dropdowns used the scrollable div should be removed. 
        //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

        "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

        //"lengthMenu": [
        //    [5, 15, 20, -1],
        //    [5, 15, 20, "All"] // change per page values here
        //],
        // set the initial value
        //"pageLength": 5,
        //"pagingType": "bootstrap_full_number",
        "columnDefs": [
            {  // set default column settings
                'orderable': false,
                //'targets': [0]
                'targets': ['nosort', 'nosortsearch']
            },
            {
                "searchable": false,
                'targets': ['nosort', 'nosortsearch']
            },
            {
                "className": "dt-right",
                //"targets": [2]
            }
        ],
        //"order": [
        //    [1, "asc"]
        //] // set first column as a default sort by asc
    });



}

function ApplyJSToTableScrollY(tableid, IsSearchBox) {
    var table = $('#' + tableid);
    $("#" + tableid + "").dataTable().fnDestroy();
    
    // begin first table
    table.dataTable({
        "scrollY": "300px",
        "scrollCollapse": true,
        // Internationalisation. For more info refer to http://datatables.net/manual/i18n
        "language": {
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },
            "emptyTable": "No data available in table",
            "infoEmpty": "No records found",
            "infoFiltered": "(filtered _TOTAL_ from _MAX_ total entries)",
            "lengthMenu": "Show _MENU_",
            "search": "Search:",
            "zeroRecords": "No matching records found"//,
            
        },

        "searching": IsSearchBox,
        "bLengthChange": false,
        "bStateSave": false, // save datatable state(pagination, sort, etc) in cookie.
        //"bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.
        "paging": false,
        "bSort": true,
        "info": false,
        "infoFiltered": true,
        "aaSorting": [],
        // Or you can use remote translation file
        //"language": {
        //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
        //},

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
        // So when dropdowns used the scrollable div should be removed. 
        //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

        

        //"lengthMenu": [
        //    [5, 15, 20, -1],
        //    [5, 15, 20, "All"] // change per page values here
        //],
        // set the initial value
        //"pageLength": 5,
        //"pagingType": "bootstrap_full_number",
        "columnDefs": [
            {  // set default column settings
                'orderable': false,
                //'targets': [0]
                'targets': ['nosort', 'nosortsearch']
            },
            {
                "searchable": false,
                'targets': ['nosort', 'nosortsearch']
            },
            {
                "className": "dt-right",
                //"targets": [2]
            }
        ],
        //"order": [
        //    [1, "asc"]
        //] // set first column as a default sort by asc
    });



}

//Old Metronic Version 3.7 List Page Table Design Function

function ApplyJSToTable2(tableid) {
    var table=$("#"+tableid+"");

    $.extend(true, $.fn.DataTable.TableTools.classes, {
        "container": "btn-group tabletools-dropdown-on-portlet",
        "buttons": {
            "normal": "btn btn-sm default",
            "disabled": "btn btn-sm default disabled"
        },
        "collection": {
            "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
        }
    });
    $("#"+tableid+"").dataTable().fnDestroy();
    $("#"+tableid+"").dataTable({
        "language": {
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },
            "emptyTable": "No data available in table",
            //"info": "Showing _TOTAL_ entries",

            "infoEmpty": "No entries found",
            "infoFiltered": "(filtered _TOTAL_ from _MAX_ total entries)",
            "lengthMenu": "Show _MENU_ entries",
            "search": "Search",
            "zeroRecords": "No matching records found"
        },

        "bLengthChange": false,
        //"bStateSave": false, // save datatable state(pagination, sort, etc) in cookie.
        "paging": false,
        "bSort": true,
        "info": false,
        "infoFiltered": true,
        //dom: 'T<"clear">lfrtip',
        //dom: 'T<"clear">lfrtip<"clear spacer">T',
        //tableTools: {
        //    "aButtons": [ "copy", "print" ]
        //},
        "aaSorting": [],

        //"tableTools": {

        //    "sSwfPath": "http://localhost:2585/assets/global/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",

        //"aButtons": [

        //    {
        //    "sExtends": "pdf",
        //    "sButtonText": "PDF",
        //    "bSelectedOnly": true,
        //    "oSelectorOpts": { filter: 'applied', order: 'current' },
        //    "mColumns": [2, 3, 4, 5]
        //}, {
        //    "sExtends": "csv",
        //    "sButtonText": "CSV",
        //    "mColumns": [2, 3, 4, 5]
        //}, {
        //    "sExtends": "xls",
        //    "sButtonText": "Excel",
        //    "mColumns":[2,3,4,5]
        //}, {
        //    "sExtends": "print",
        //    "mColumns":[2],
        //    "oSelectorOpts": { filter: 'applied', order: 'current' },
        //    "sMessage": 'Click print or cancel <button>Print</button>',
        //    "bShowAll": false

        //},
        // {
        //     'sExtends': 'copy',
        //     "oSelectorOpts": { filter: 'applied', order: 'current' },
        //     "mColumns": [2, 3, 4, 5]
        // },
        //], "sRowSelect": "multi"
        // },

        //"columns": [{
        //    "orderable": false
        //}, {
        //    "orderable": true
        //}, {
        //    "orderable": true
        //}, {
        //    "orderable": true
        //}, {
        //    "orderable": true
        //}, {
        //    "orderable": true
        //}, {
        //    "orderable": false
        //}, {
        //    "orderable": false
        //}, {
        //    "orderable": false
        //}, {
        //    "orderable": false
        //}, {
        //    "orderable": false
        //}],
        //"lengthMenu": [
        //    [5, 15, 20, -1],
        //    [5, 15, 20, "All"] // change per page values here
        //],
        // set the initial value
        //"pageLength": 5,
        //"pagingType": "bootstrap_full_number",

        "language": {
            "search": "Search In Grid: "
            //"lengthMenu": "  _MENU_ records",
            //"paginate": {
            //    "previous": "Prev",
            //    "next": "Next",
            //    "last": "Last",
            //    "first": "First"
            //}
        },
        "columnDefs": [{  // set default column settings
            'orderable': false,
            'targets': ['nosort', 'nosortsearch']
        }, {
            "searchable": false,
            "targets": ['nosearch', 'nosortsearch']
        }]

        //"order": [
        //    [1, "nosort"]
        //] // set first column as a default sort by asc

    })
}



function initpumistablescroll(tableid) {
    var table=$("#"+tableid+"");
    $("#"+tableid+"").dataTable().fnDestroy();

    var oTable=table.dataTable({
        "dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // datatable layout without  horizobtal scroll
        "scrollY": "300",
        "deferRender": true,
        //"order": [
        //    [0, 'asc']
        //],
        "bPaginate": false,
        "info": false,
        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],
        "pageLength": 10, // set the initial value
        "columnDefs": [{  // set default column settings
            'orderable': false,
            'targets': ['nosort', 'nosortsearch']
        }, {
            "searchable": false,
            "targets": ['nosearch', 'nosortsearch']
        }]
    });
}

function initpumistablescrollNoSearch(tableid) {
    var table=$("#"+tableid+"");
    $("#"+tableid+"").dataTable().fnDestroy();

    var oTable=table.dataTable({
        "dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // datatable layout without  horizobtal scroll
        "scrollY": "300",
        "deferRender": true,
        "aaSorting": [],
        "order": [],
        //"order": [
        //    [0, 'asc']
        //],
        "bPaginate": false,
        "info": false,
        bFilter: false,
        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],
        //"sScrollX": "100%",
        "pageLength": 10, // set the initial value
        "columnDefs": [{  // set default column settings
            'orderable': false,
            'targets': ['nosort', 'nosortsearch']
        }, {
            "searchable": false,
            "targets": ['nosearch', 'nosortsearch']
        }] // set the initial value  
    });
}


//function CheckAll() {
//    $("input:checkbox[class=group-checkable]").each(function () {
//        if ($(this).is(":checked")) {
//            $(this).prop("checked", false);
//            $("#MasterCheckBox").prop("checked", false);
//        }
//        else {
//            $(this).prop("checked", true);
//            $("#MasterCheckBox").prop("checked", true);
//        }
//        //alert("Id: " + $(this).attr("id") + " Value: " + $(this).val() + " Checked: " + $(this).is(":checked"));
//    });
//}

//function CheckAll() {
//    var $allCheckbox = $('.allCheckbox :checkbox');
//    var $checkboxes = $('.singleCheckbox :checkbox');
//    if ($allCheckbox.is(':checked')) {
//        $checkboxes.attr('checked', 'checked');
//        $checkboxes.parent().addClass('checked');
//    }
//    else {
//        $checkboxes.removeAttr('checked');
//        $checkboxes.parent().removeClass('checked');
//    }
//}


// Function Created By Keyur To Enable Checkboxes Check all at all places
function CheckAll() {
    var IsSpan=false;
    var startLoop=0;
    var Checkboxes=document.getElementsByClassName("group-checkable");
    if(Checkboxes[0].parentNode.nodeName.toLowerCase()=="span") {
        startLoop=1;
    }
    for(var i=startLoop; i<Checkboxes.length; i++) {
        var inputbox=Checkboxes[i].querySelectorAll("input");
        for(var j=0; j<inputbox.length; j++) {
            if(inputbox[j].parentNode.nodeName.toLowerCase()=="span") {
                IsSpan=true;
                if ($("#MasterCheckBox").prop('checked')) {
                    inputbox[j].checked = true;
                    //if (typeof inputbox[j].parentNode.onchange === 'function')
                    //    inputbox[j].parentNode.onchange();
                }
                else {
                    inputbox[j].checked = false;
                    //if (typeof inputbox[j].parentNode.onchange === 'function')
                    //    inputbox[j].parentNode.onchange();
                }
            }
            else
                break;
        }
        if(IsSpan==false) {
            if($("#MasterCheckBox").prop('checked'))
                Checkboxes[i].checked=true;
            else
                Checkboxes[i].checked=false;
        }
    }
}

function CheckAllInstance2() {
    var IsSpan=false;
    var startLoop=0;
    var Checkboxes=document.getElementsByClassName("group-checkable-instance2");
    if(Checkboxes[0].parentNode.nodeName.toLowerCase()=="span") {
        startLoop=1;
    }
    for(var i=startLoop; i<Checkboxes.length; i++) {
        var inputbox=Checkboxes[i].querySelectorAll("input");
        for(var j=0; j<inputbox.length; j++) {
            if(inputbox[j].parentNode.nodeName.toLowerCase()=="span") {
                IsSpan=true;
                if ($("#MasterCheckBoxInstance2").prop('checked')) {
                    inputbox[j].checked = true;
                    //if (typeof inputbox[j].parentNode.onchange === 'function')
                    //    inputbox[j].parentNode.onchange();
                }
                else
                    inputbox[j].checked = false; {
                    //if (typeof inputbox[j].parentNode.onchange === 'function')
                    //    inputbox[j].parentNode.onchange();
                }
            }
            else
                break;
        }
        if(IsSpan==false) {
            if($("#MasterCheckBoxInstance2").prop('checked'))
                Checkboxes[i].checked=true;
            else
                Checkboxes[i].checked=false;
        }
    }
}

function CheckAllInstance3() {
    var IsSpan=false;
    var startLoop=0;
    var Checkboxes=document.getElementsByClassName("group-checkable-instance3");
    if(Checkboxes[0].parentNode.nodeName.toLowerCase()=="span") {
        startLoop=1;
    }
    for(var i=startLoop; i<Checkboxes.length; i++) {
        var inputbox=Checkboxes[i].querySelectorAll("input");
        for(var j=0; j<inputbox.length; j++) {
            if(inputbox[j].parentNode.nodeName.toLowerCase()=="span") {
                IsSpan=true;
                if ($("#MasterCheckBoxInstance3").prop('checked')) {
                    inputbox[j].checked = true;
                    //if (typeof inputbox[j].parentNode.onchange === 'function')
                    //    inputbox[j].parentNode.onchange();
                }
                else {
                    inputbox[j].checked = false;
                    //if (typeof inputbox[j].parentNode.onchange === 'function')
                    //    inputbox[j].parentNode.onchange();
                }
            }
            else
                break;
        }
        if(IsSpan==false) {
            if($("#MasterCheckBoxInstance3").prop('checked'))
                Checkboxes[i].checked=true;
            else
                Checkboxes[i].checked=false;
        }
    }
}


function CheckASPAll() {
    var IsSpan=false;
    var Checkboxes=document.getElementsByClassName("group-checkable");
    for(var i=1; i<Checkboxes.length; i++) {
        var inputbox=Checkboxes[i].querySelectorAll("input");
        for(var j=0; j<inputbox.length; j++) {
            if(inputbox[j].parentNode.nodeName.toLowerCase()=="span") {
                IsSpan=true;
                if($("#MasterCheckBox").prop('checked'))
                    inputbox[j].checked=true;
                else
                    inputbox[j].checked=false;
            }
            else
                break;
        }
        if(IsSpan==false) {
            if($("#MasterCheckBox").prop('checked'))
                Checkboxes[i].checked=true;
            else
                Checkboxes[i].checked=false;
        }
    }
}

function CheckAll_V1() {
    var $allCheckbox=$('.allCheckbox :checkbox');
    var $checkboxes=$('.singleCheckbox :checkbox');
    if($allCheckbox.is(':checked')) {
        $checkboxes.attr('checked', 'checked');
        //$checkboxes.parent().addClass('checked');
    }
    else {
        $checkboxes.removeAttr('checked');
        // $checkboxes.parent().removeClass('checked');
    }
}


function CheckAll2() {
    var $allCheckbox=$('.allCheckbox2 :checkbox');
    var $checkboxes=$('.singleCheckbox2 :checkbox');
    if($allCheckbox.is(':checked')) {
        $checkboxes.attr('checked', 'checked');
        $checkboxes.parent().addClass('checked');
    }
    else {
        $checkboxes.removeAttr('checked');
        $checkboxes.parent().removeClass('checked');
    }
}

function CheckAll3() {
    var $allCheckbox=$('.allCheckbox3 :checkbox');
    var $checkboxes=$('.singleCheckbox3 :checkbox');
    if($allCheckbox.is(':checked')) {
        $checkboxes.attr('checked', 'checked');
        $checkboxes.parent().addClass('checked');
    }
    else {
        $checkboxes.removeAttr('checked');
        $checkboxes.parent().removeClass('checked');
    }
}

function CheckAll4() {
    var $allCheckbox=$('.allCheckbox4 :checkbox');
    var $checkboxes=$('.singleCheckbox4 :checkbox');
    if($allCheckbox.is(':checked')) {
        $checkboxes.attr('checked', 'checked');
        $checkboxes.parent().addClass('checked');
    }
    else {
        $checkboxes.removeAttr('checked');
        $checkboxes.parent().removeClass('checked');
    }
}


//function cbChange() {
//    var $checkboxes = this;
//    if ($allCheckbox.is(':checked')) {
//        $checkboxes.attr('checked', 'checked');
//        $checkboxes.parent().addClass('checked');
//    }
//    else {
//        $checkboxes.removeAttr('checked');
//        $checkboxes.parent().removeClass('checked');
//    }
//}

$('.date-picker-nofuture').datepicker({
    startDate: "01-01-1900",
    endDate: "new date()",
    autoclose: true,
    todayHighlight: true
});

$('.date-picker-nopastdate').datepicker({
    startDate: "new date()",
    autoclose: true,
    todayHighlight: true
});

$('.datetime-picker-nopastdate').datetimepicker({
    startDateTime: "new date()",
    autoclose: true,
    todayHighlight: true,
    isRTL: App.isRTL(),
    format: "dd-mm-yyyy HH:ii P",
    autoclose: true,
    showMeridian: false,
    fontAwesome: true,
    pickerPosition: (App.isRTL() ? "bottom-right" : "bottom-left"),
    todayBtn: true,
    todayHighlight: true
});

$('.date-picker').datepicker({
    startDate: "01-01-1900",
    autoclose: true,
    todayHighlight: true
});

$('.date-picker-minDate1900').datepicker({
    startDate: "01-01-1900",
    endDate: "new date()",
    autoclose: true,
    todayHighlight: true
});

//end #demo_3

// Aadhar No Validation By Keyur
$(document).ready(function() {
    var AadharNo;
    var LeftPart;
    $(".GNAadharNo").keydown(function(event) {
        var txtCurrentControl=$(this);

        if (txtCurrentControl.val().length == 4 && event.keyCode != 8) {
            AadharNo=txtCurrentControl.val().slice(0, 4);
            AadharNo+=" ";
            txtCurrentControl.val(AadharNo);
        }


        if (txtCurrentControl.val().length == 9 && event.keyCode != 8) {
            LeftPart=txtCurrentControl.val().slice(0, 5);
            AadharNo=txtCurrentControl.val().slice(5, 9);
            AadharNo+=" ";
            AadharNo=LeftPart+AadharNo;
            txtCurrentControl.val(AadharNo);
        }
    });
});


//Keyur: Multiple Tables in the Same Page (Repeater)
function ApplyJSToTableByClass(tableclass, IsSearchBox) {
    $(document).ready(function () {
        $("." + tableclass).each(function () {
            var table = $(this);
            $(table).dataTable().fnDestroy();
            table.dataTable({
                "language": {
                    "aria": {
                        "sortAscending": ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    },
                    "emptyTable": "No data available in table",
                    "infoEmpty": "No records found",
                    "infoFiltered": "(filtered _TOTAL_ from _MAX_ total entries)",


                    "lengthMenu": "Show _MENU_",
                    "search": "Search:",
                    "zeroRecords": "No matching records found"//,
                },
                "searching": IsSearchBox,
                "bLengthChange": false,
                "paging": false,
                "bSort": true,
                "info": false,
                "infoFiltered": true,
                "aaSorting": [],
                "bStateSave": true,
                "columnDefs": [
                    {
                        'orderable': false,
                        'targets': ['nosort', 'nosortsearch']
                    },
                    {
                        "searchable": false,
                        'targets': ['nosort', 'nosortsearch']
                    },
                    {
                        "className": "dt-right",
                    }
                ],
            });
        });
    });
}
