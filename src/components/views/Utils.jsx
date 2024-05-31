export function degrees_to_radians(degrees){
  var pi = Math.PI;
  return degrees * (pi/180);
}

export function getAge(day, month, year){
  var today = new Date();
  var birthDate = new Date(Date.UTC(year, month-1, day));
  var age = today.getFullYear() - birthDate.getFullYear();
  if(
    today.getMonth() < birthDate.getMonth() ||
    (
      today.getMonth() == birthDate.getMonth() &&
      today.getDay() < today.getDay()
    )
  ){
    age--;
  }
  return age
}