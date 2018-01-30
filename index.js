(() => {
  console.log('bookmarklet starting');
  let paragraph = document.getElementsByTagName('p');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].innerHTML = 'you\'re hacked';
  }
})();