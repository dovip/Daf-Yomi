$(document).ready(function () {
    // Send an AJAX request 
    var d = new Date();
    var dateKey = d.getDate() + '' + (d.getMonth() + 1) + '' + d.getFullYear();
    $.ajax({
        url: "http://ec2-50-17-140-246.compute-1.amazonaws.com/Daf%20Yomi/api/Pages/GetPageByDate?key=" + dateKey,
        type: 'GET',
        dataType: 'jsonp',
        success: function (data) {
            if (data != null) {
                $("#daf").append(data.PageData);
                $("#date").append(data.Date);
                $("#dafNumber").append(data.DafNumber);
            }
        }
    });

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("menubutton", onMenuKeyDown, false);
    }
    function onMenuKeyDown() {
        alert("press on menu");
    }
}); 
