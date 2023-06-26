// document.addEventListener("contextmenu",function(e){
//     e.preventDefault();
// });
// document.onkeydown=function (e) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode  == "I".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode  == "C".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode  == "J".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode  == "U".charCodeAt(0)) {
//         return false;
//     }
// }



// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
document.addEventListener("copy", function (event) {
    event.preventDefault();
    alert("This content is protected.");
    document.body.style.pointerEvents = "auto";
});


// Disable right-click context menu
window.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("This content is protected.");

});

// Disable all access shortcut keys to access developer tool
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 83 || event.keyCode == 8 || event.keyCode == 9
        || event.keyCode ==
        13
        || event.keyCode ==
        18
        || event.keyCode ==
        19
        || event.keyCode ==
        20
        || event.keyCode ==
        27
        || event.keyCode ==
        33
        || event.keyCode ==
        32
        || event.keyCode ==
        34
        || event.keyCode ==
        35
        || event.keyCode ==
        36
        || event.keyCode ==
        37
        || event.keyCode ==
        38
        || event.keyCode ==
        39
        || event.keyCode ==
        40
        || event.keyCode ==
        44
        || event.keyCode ==
        45
        || event.keyCode ==
        46
        || event.keyCode ==
        48
        || event.keyCode ==
        49
        || event.keyCode ==
        50
        || event.keyCode ==
        51
        || event.keyCode ==
        52
        || event.keyCode ==
        53
        || event.keyCode ==
        54
        || event.keyCode ==
        55
        || event.keyCode ==
        56
        || event.keyCode ==
        57
        || event.keyCode ==
        65
        || event.keyCode ==
        66
        || event.keyCode ==
        67
        || event.keyCode ==
        68
        || event.keyCode ==
        69
        || event.keyCode ==
        70
        || event.keyCode ==
        71
        || event.keyCode ==
        72
        || event.keyCode ==
        73
        || event.keyCode ==
        74
        || event.keyCode ==
        75
        || event.keyCode ==
        76
        || event.keyCode ==
        77
        || event.keyCode ==
        78
        || event.keyCode ==
        79
        || event.keyCode ==
        80
        || event.keyCode ==
        81
        || event.keyCode ==
        82
        || event.keyCode ==
        83
        || event.keyCode ==
        84
        || event.keyCode ==
        85
        || event.keyCode ==
        86
        || event.keyCode ==
        87
        || event.keyCode ==
        88
        || event.keyCode ==
        89
        || event.keyCode ==
        90
        || event.keyCode ==
        91
        || event.keyCode ==
        92
        || event.keyCode ==
        93
        || event.keyCode ==
        96
        || event.keyCode ==
        97
        || event.keyCode ==
        98
        || event.keyCode ==
        99
        || event.keyCode ==
        100
        || event.keyCode ==
        101
        || event.keyCode ==
        102
        || event.keyCode ==
        103
        || event.keyCode ==
        104
        || event.keyCode ==
        105
        || event.keyCode ==
        106
        || event.keyCode ==
        107
        || event.keyCode ==
        109
        || event.keyCode ==
        110
        || event.keyCode ==
        111
        || event.keyCode == 112
        || event.keyCode ==
        113
        || event.keyCode ==
        114
        || event.keyCode ==
        115
        || event.keyCode ==
        116
        || event.keyCode ==
        117
        || event.keyCode ==
        118
        || event.keyCode ==
        119
        || event.keyCode ==
        120
        || event.keyCode ==
        121
        || event.keyCode ==
        122
        || event.keyCode ==
        123
        || event.keyCode ==
        144
        || event.keyCode ==
        145
        || event.keyCode ==
        182
        || event.keyCode ==
        183
        || event.keyCode ==
        186
        || event.keyCode ==
        187
        || event.keyCode ==
        188
        || event.keyCode ==
        189
        || event.keyCode ==
        190 || event.keyCode == 191 || event.keyCode == 219 || event.keyCode == 220 || event.keyCode == 221 || event.keyCode == 222)) {
        event.preventDefault();
        alert("This content is protected.");
    }
});

// Disable cursor access to developer tool
document.addEventListener("mousemove", function (event) {
    if (event.clientX < 0 || event.clientY < 0 || (event.clientX > window.innerWidth || event.clientY > window.innerHeight)) {
        alert("This content is protected.");
    }
});
