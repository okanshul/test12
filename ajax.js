function ajaxsubmit(url, mathod, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(mathod, url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    
}