document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").addEventListener("keyup",function(){
        let val = this.value;
       localStorage.setItem("name", val)
    })
})

// function countdown() {
//         var seconds = 60;
//         function tick() {
//           var counter = document.getElementById("counter");
//           seconds--;
//           counter.innerHTML =
//             "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//           if (seconds > 0) {
//             setTimeout(tick, 1000);
//           } else {
//             window.location.href = 'page3.html';
//             document.getElementById("counter").innerHTML = "";
//           }
//         }
//         tick();
//       }
//       countdown();


$(function(){
    //state default radio ':checked' property there:
    $("input:radio:first").prop("checked", true);

    $("#radio1 input:radio").click(function() {
        alert("clicked");
    });

    // overwrite radio ':checked' property there (if exists in localStorage) :
    $('input[type=radio]').each(function(){
        var state = JSON.parse( localStorage.getItem('radio_'  + this.id) );

        if (state) this.checked = state.checked;
    });
});

$(window).bind('unload', function(){
    $('input[type=radio]').each(function(){
        localStorage.setItem(
            'radio_' + this.id, JSON.stringify({checked: this.checked})
        );
    });
});



