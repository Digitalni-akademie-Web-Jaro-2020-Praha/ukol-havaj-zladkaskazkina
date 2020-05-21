const Person = {
  constructor: function (name, uspory) {
    this.name = 'name';
    this.uspory = 'uspory';
  }
};
//const name1 = document.querySelector('.name1');

const osoba1 = Object.create(Person);
osoba1.constructor('Alena', 53000);

const osoba2 = Object.create(Person);
osoba2.constructor('Karolina', 48000);

function checkIt() {
  if ((osoba1.uspory + osoba2.uspory) >= 100000) {
    alert('Lets go!');
    if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
      return 'You are a great team!';
    } else if (osoba1.uspory < 50000) {
      return `${osoba1.name} has to pay ${50000 - osoba1.uspory}`;
    } else {
      return `${osoba2.name} has to pay ${50000 - osoba2.uspory}`;
    }
  } else {
    alert(`Try to save more! You need extra ${100000 - (osoba1.uspory + osoba2.uspory)}`);
    if (osoba1.uspory < 50000 && osoba2.uspory < 50000) {
      return `${osoba1.name} has to save extra ${50000 - osoba1.uspory} and ${osoba2.name} has to save extra ${50000 - osoba2.uspory}`;
    } else if (osoba1.uspory < 50000) {
      return `${osoba1.name} has to save extra ${50000 - osoba1.uspory}`;
    } else {
      return `${osoba2.name} has to save extra ${50000 - osoba2.uspory}`;
    }
  }
}

