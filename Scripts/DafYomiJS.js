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
    
}); 
