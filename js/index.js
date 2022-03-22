function visitLink(path) {
  localStorage.setItem(path, +(localStorage.getItem(path) || 0) + 1);
}

function viewResults() {
  const four = 4;

  const $divContent = document.querySelector('#content');
  const $div = document.createElement('div');
  const $ul = document.createElement('ul');

  $div.id = 'visited-links';
  $ul.className = 'ul-visited-links';

  if (document.getElementById('visited-links') === null) {
    $divContent.appendChild($div);
    $div.appendChild($ul);

    for (let i = 1; i < four; i++) {
      let $li = document.createElement('li');
      $li.className = 'li-visited-links';

      $li.innerText = `You visited Page${i} ${localStorage.getItem(`Page${i}`) || 0} time(s)`;
      $ul.appendChild($li);
    }
  }

  localStorage.clear();
}
