function validateForm() {
  var start = document.getElementById("start_date").value;
  var end = document.getElementById("end_date").value;

  if (!isStartDateBeforeEndDate(start, end)) {
    alert("End date must be after start date");
    return false;
  }

  return true;
}

function isStartDateBeforeEndDate(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);

  return start < end;
}