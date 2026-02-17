function ajaxsubmit(url, mathod, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(mathod, url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    
    try {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }
    } catch (e) {
        console.log(e);
    }
}