function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function PlaySound(melody) {
    var path = "media\\"
    var snd = new Audio(path + melody + ".mp3");
    snd.play();
  }