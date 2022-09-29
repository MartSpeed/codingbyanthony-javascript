let age = [5, 13, 23, 35, 70];

for (let i = 0; i < age.length; ++i) {
  if (age[i] < 6) {
    console.log(age[i] + ' ' + 'free');
  } else if (age[i] >= 6 && age[i] < 18) {
    console.log(age[i] + ' ' + 'child discount');
  } else if (age[i] > 17 && age[i] < 27) {
    console.log(age[i] + ' ' + 'student discount');
  } else if (age[i] > 27 && age[i] < 67) {
    console.log(age[i] + ' ' + 'full price');
  } else if (age[i] > 66) {
    console.log(age[i] + ' ' + 'senior citizen discount');
  }
}