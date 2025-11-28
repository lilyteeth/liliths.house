//                    ╭────────────────────────────────────╮
//                    │ shamelessly stolen from kyouma.net │
//                    ╰────────────────────────────────────╯
(function() {
  var title = document.title,
    animSeq = ["/", "$", "\\", "|", "$"],
    animIndex = 0,
    titleIndex = 0;

  function doInverseSpinZeroPitch() {
    var loadTitle = title.substring(0, titleIndex);
    if (titleIndex > title.length) {
      animIndex = 0;
      titleIndex = 0
    }
    if (animIndex > 3) {
      titleIndex++;
      animIndex = 0
    }
    document.title = loadTitle + animSeq[animIndex];
    animIndex++
  }
  window.setInterval(doInverseSpinZeroPitch, 50);
})();

const sites = document.querySelectorAll('[id^=page-]');
sites.forEach((site) => {
    console.log(site);
  site.querySelectorAll('[class^=nav-]').forEach((button) => {
    button.addEventListener('click', _ => {
      site.style.display = 'none';
      document.querySelector(`#page-${button.className.replace('nav-', '')}`).style.display = '';
    });
  });
});
