window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").className = "scroll";
    document.getElementById("aboutNav").className = "scrollText";
    document.getElementById("workNav").className = "scrollText";
    document.getElementById("serviceNav").className = "scrollText";
    document.getElementById("contactNav").className = "scrollText";
  } else {
    document.getElementById("navbar").className = "";
    document.getElementById("aboutNav").className = "aTagNavItems";
    document.getElementById("workNav").className = "aTagNavItems";
    document.getElementById("serviceNav").className = "aTagNavItems";
    document.getElementById("contactNav").className = "aTagNavItems";
    // document.getElementById("aboutNav").classList.remove("scrollText");
    // document.getElementById("workNav").classList.remove("scrollText");
    // document.getElementById("serviceNav").classList.remove("scrollText");
    // document.getElementById("contactNav").classList.remove("scrollText");
  }
}