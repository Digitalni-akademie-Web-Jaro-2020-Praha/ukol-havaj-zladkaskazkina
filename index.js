function Person(name, uspory) {
  this.name = name;
  this.uspory = uspory;
}
const osoba1 = new Person('Anna', 30000);
const osoba2 = new Person('Kate', 37000);

const name1 = document.querySelector('.name1'),
  name2 = document.querySelector('.name2'),
  savings1 = document.querySelector('.save1'),
  savings2 = document.querySelector('.save2'),
  cost = document.querySelector('.cost'),
  checkBtn = document.querySelector('.check-btn'),
  respond = document.querySelector('.response');


let holidayCost = 0;
let halfCost = 0;

function checkIt() {
  event.preventDefault();
  osoba1.name = name1.value;
  osoba2.name = name2.value;
  osoba1.uspory = +savings1.value;
  osoba2.uspory = +savings2.value;

  holidayCost = +cost.value;
  halfCost = holidayCost / 2;

  if ((osoba1.uspory + osoba2.uspory) >= holidayCost) {
    if ((osoba1.uspory >= halfCost) && (osoba2.uspory >= halfCost)) {
      respond.innerHTML = `<h2>You save enough to have a great holiday! You have ${osoba1.uspory + osoba2.uspory}</h2>`;
    } else if (osoba1.uspory < halfCost) {
      respond.innerHTML = `<h2>You could go, but ${osoba1.name} has to pay ${halfCost - osoba1.uspory}</h2>`;
    } else {
      respond.innerHTML = `<h2>You could go, but ${osoba2.name} has to pay ${halfCost - osoba2.uspory}</h2>`;
    }
  } else {
    if ((osoba1.uspory < halfCost) && (osoba2.uspory < halfCost)) {
      respond.innerHTML = `<h2>Try to save extra ${holidayCost - (osoba1.uspory + osoba2.uspory)}! 
      ${osoba1.name} has to save extra ${halfCost - osoba1.uspory} and 
              ${osoba2.name} has to save extra ${halfCost - osoba2.uspory}</h2>`;
    } else if (osoba1.uspory < halfCost) {
      respond.innerHTML = `<h2>${osoba1.name} has to save extra ${halfCost - osoba1.uspory}</h2>`;
    } else {
      respond.innerHTML = `<h2>${osoba2.name} has to save extra ${halfCost - osoba2.uspory}</h2>`;
    }
  }
}

checkBtn.addEventListener('click', checkIt);
