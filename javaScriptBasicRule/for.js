var fruits = 'Apples'
switch (fruits) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }

  var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0:
    console.log('Momin');
  case 1:
    console.log('Azad');
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break;
    case 5:
        console.log(5);
  case 1:  
    console.log('1');
}

var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}
