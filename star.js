function surreal_star_mountain() {
    for(var i=0; i<10; i++) {
        for(var j=0; j<i+1; j++) {
            document.write('&nbsp;');
        }
        for(var j=10 - i; j>=0; j--) {
            document.write('*');
        }
    document.write('<br>');
    }
}

function real_star_mountain() {
    for(var i=0; i<10; i++) {
        for(var j=10 - i; j>=0; j--) {
            document.write('&nbsp;');
        }
        for(var j=0; j<i+1; j++) {
            document.write('*');
        }        
        document.write('<br>');
     }
}

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
    real_star_mountain();
    surreal_star_mountain();
}
