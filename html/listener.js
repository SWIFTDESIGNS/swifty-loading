//Edit these 4 variables only!
var discord = 'https://discord.gg/sjAwVPT2zp';                //your discord link
var website = '';                                             //link to your website etc
var tabex = '';                                               //link to your tabex
var servername = 'Server Name'                                //text in centered in middle of the screen
var footer = 'swifty-scripts-2023';                           //text is under the buttons tab | @ is added already

//don't touch unless you know what your doing.

$(function () {
    document.getElementById('bf').textContent = `@${footer}`;
    document.getElementById('name-tag').textContent = servername;
    document.querySelectorAll('#dbtn').forEach(element => {
        element.addEventListener('click', e => {
        window.invokeNative('openUrl', discord);
        })
      })

    document.querySelectorAll('#wbtn').forEach(element => {
        element.addEventListener('click', e => {
        window.invokeNative('openUrl', website);
        })
      })

    document.querySelectorAll('#tbtn').forEach(element => {
        element.addEventListener('click', e => {
        window.invokeNative('openUrl', tabex);
        })
      } )

      function musicontrol() {
        var audio = document.getElementById("backaudio");
        audio.paused? audio.play() : audio.pause();
      }

      window.addEventListener("keydown", function(e) {
      var x = e.keyCode;
      if (x === 32) { // pressed 'p'
        musicontrol();
      }  
      });
})