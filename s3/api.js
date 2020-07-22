
function post_notificationSignup(formID) {
    $form = $("#" + formID);
    $.ajax({
        type: "POST",
        url: "TODO",
        data: $form.serialize(),
        success: function (data) {
            alert(data)
        },
        dataType: "json"
    });
}

function post_eat(formID) {
    $form = $("#" + formID);
    $.ajax({
        type: "POST",
        url: "https://no9h6u4g64.execute-api.us-east-1.amazonaws.com/api/eat",
        data: $form.serialize(),
        success: function (data) {
            alert(data)
        },
        dataType: "json"
    });
}

function get_eat(divID) {
    var div = $("#" + divID);
    $.ajax({
        type: "GET",
        url: "https://no9h6u4g64.execute-api.us-east-1.amazonaws.com/api/eat",
        success: function (data) {
            div.empty();
            div.append(data);
        },
        dataType: "json"
    });
}
