function star1() {
    for(var i=0; i<10; i++) {
        for(var j=0; j<=i; j++) {
            document.write('*');
        }
        document.write('<br>');
    }
}
window.onload = function () {
    star1();
}
