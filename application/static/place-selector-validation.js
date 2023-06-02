function validateForm() {
  var place = document.getElementById("place").value;

  if (place === 'none') {
    alert("Please, select valid place!");
    return false;
  }

  return true;
}