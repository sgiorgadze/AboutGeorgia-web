var AboutGergia = (function()
{
    function headerShowHide() {
        window.onscroll = function () { scrollFunction() };
        
        function scrollFunction() {
            showHideTopHeader();
        }
        
        function showHideTopHeader() {
            if (document.body.scrollTop > 38 || document.documentElement.scrollTop > 38) {
                document.getElementById("header-top").classList.remove("show1");
                document.getElementById("header-bottom").classList.add("darken");
                //document.getElementById("logo").style.fontSize = "25px";
            } else {
                document.getElementById("header-top").classList.add("show1");
                document.getElementById("header-bottom").classList.remove("darken");
            }
        }
    }

    return {
        Init: function() {
            headerShowHide();
        }
    };
})();
