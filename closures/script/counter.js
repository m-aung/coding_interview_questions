
const counterClicker = document.createElement('input');
counterClicker.type = 'button';
counterClicker.value = 'Count';
counterClicker.className = 'button';
document.body.append(counterClicker);
const increment = counter();
const dashboard = document.getElementById('counter')
document.addEventListener('DOMContentLoaded', () => {
  dashboard.innerHTML = increment()
});
counterClicker.addEventListener('click', () => { 
 dashboard.innerHTML = increment()
});

function counter() {
  let count = 0;
  return function() {
    return count++;
  };
}