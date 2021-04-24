window.addEventListener('DOMContentLoaded', () => {
  (function helloWorld() {
    alert('hello, world!!!');
  })();
  // helloWorld();

  // const button1 = document.querySelector('#button1');
  // button2 = document.querySelector('#button2');
  // const block1 = document.querySelector('#block1');
  const blocks = document.querySelectorAll('.inner .col-sm');

  function toggle(block, className) {
    $(block).toggleClass(className);
    // block.classList.toggle(className);
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

  // button1.addEventListener('click', () => {
  //   $('#block1').toggleClass('hidden');
  //   // block1.classList.toggle('hidden');
  // });

  // button2.addEventListener('click', () => {
  //   blocks.forEach((block) => {
  //     toggle(block, 'first');
  //     toggle(block, 'two');
  //   });
  // });
});
