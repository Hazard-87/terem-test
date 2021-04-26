window.addEventListener('DOMContentLoaded', () => {
  (function helloWorld() {
    alert('hello, world!!!');
  })();

  const blocks = document.querySelectorAll('.inner .col-sm');

  function toggle(block, className) {
    $(block).toggleClass(className);
  }

  $('#button1').click(() => {
    toggle('#block1', 'hidden');
  });

  $('#button2').click(() => {
    blocks.forEach((block) => {
      toggle(block, 'first');
      toggle(block, 'two');
    });
  });
});
