//      ----------------  Page Cursor  -------------------
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
                t.style.top = n.clientY + "px",
                e.style.left = n.clientX + "px",
                e.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
}
function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
//      ------------------------------------------------

$(document).ready(function () {
        $('.generate-btn').click(function () {
                var randomColor = ""
                var characters = '0123456789abcdef'

                for (i = 0; i < 6; i++) {
                        randomColor = randomColor + characters[Math.floor(Math.random() * 16)]
                }
                $('#inputField').val("#" + randomColor)
                $('#inputField').css('color', $('#inputField').val())
                $('.color-preview').css('background-color', $('#inputField').val())
                $('.copy-btn').css('background-color', $('#inputField').val())
                $('input').css('borderColor', $('#inputField').val())



        });
        function add() {
                $(".alert-msg").addClass("slide-effect");
        }
        function remove() {
                $(".alert-msg").removeClass("slide-effect");
        }

        $(".copy-btn").click(function () {
                $("#inputField").select();
                document.execCommand("copy");

                add();
                setTimeout(remove, 2000);

                $(".code").text($("#inputField").val());
        });


});























// js 
// js
// js
// js
// js 
// js
// js
// js
// js 
// js
// js
// js
// js 
// js
//  === Contact Me ===
//  Github: "https://github.com/gabrielkristesashvili"
//  fb: "https://www.facebook.com/gabrielkristesashvili/"
//  === ========== ===
// js 
// js
// js
// js
// js 
// js
// js
// js
// js 
// js
// js
// js
// js 
// js