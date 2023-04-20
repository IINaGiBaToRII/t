const liElements = document.querySelectorAll('li input[data-correct="1"]');
liElements.forEach(li => {
  const label = li.nextElementSibling;
  if (label && label.nodeName === 'LABEL') {
    const newEl = document.createElement('span');
    newEl.innerText = '.';
    label.insertAdjacentElement('beforebegin', newEl);
  }
});
