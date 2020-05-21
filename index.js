'use strict';

let osoba1 = {
  name: 'Alena',
  uspory: 53000
};
let osoba2 = {
  name: 'Karolína',
  uspory: 68000
};
function checkIt() {
  if ((osoba1.uspory + osoba2.uspory) >= 100000) {
    alert('Lets go!');
    if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
      console.log('You are a great team!');
    } else if (osoba1.uspory < 50000) {
      console.log(`${osoba1.name} has to pay ${50000 - osoba1.uspory}`);
    } else {
      console.log(`${osoba2.name} has to pay ${50000 - osoba2.uspory}`);
    }
  } else {
    alert(`Try to save more! You need extra ${100000 - (osoba1.uspory + osoba2.uspory)}`);
    if (osoba1.uspory < 50000) {
      console.log(`${osoba1.name} has to save extra ${50000 - osoba1.uspory}`);
    } else {
      console.log(`${osoba2.name} has to save extra ${50000 - osoba2.uspory}`);
    }
  }
}

