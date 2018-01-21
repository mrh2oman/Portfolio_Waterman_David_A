  var config = {
    apiKey: "AIzaSyCsAf9l1KfjuVpm2cdVD6z8xIcjd_4hHtQ",
    authDomain: "my-new-project-cf87b.firebaseapp.com",
    databaseURL: "https://my-new-project-cf87b.firebaseio.com",
    projectId: "my-new-project-cf87b",
    storageBucket: "my-new-project-cf87b.appspot.com",
    messagingSenderId: "257872785373"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  };

  var modal2 = document.getElementById('myModal2');
  

  var img2 = document.getElementById('myImg2');
  var modalImg2 = document.getElementById("img02");
  var captionText2 = document.getElementById("caption2");
  img.onclick = function() {
      modal2.style.display = "block";
      modalImg2.src = this.src;
      captionText2.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  };
