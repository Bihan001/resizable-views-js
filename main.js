(function () {
  // horizontal direction
  (function resizableX() {
    const resizers = document.querySelectorAll('.resizer-x');
    resizers.forEach((resizer) => {
      resizer.addEventListener('mousedown', onmousedown);
      resizer.addEventListener('touchstart', ontouchstart);

      // for mobile
      function ontouchstart(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = -1));
        resizer.addEventListener('touchmove', ontouchmove);
        resizer.addEventListener('touchend', ontouchend);
      }
      function ontouchmove(e) {
        e.preventDefault();
        const clientX = e.touches[0].clientX;
        const deltaX = clientX - (resizer._clientX || clientX);
        resizer._clientX = clientX;
        const l = resizer.previousElementSibling;
        const r = resizer.nextElementSibling;
        // LEFT
        if (deltaX < 0) {
          const w = Math.round(parseInt(getComputedStyle(l).width) + deltaX);
          l.style.flex = `0 ${w < 10 ? 0 : w}px`;
          r.style.flex = '1 0';
        }
        // RIGHT
        if (deltaX > 0) {
          const w = Math.round(parseInt(getComputedStyle(r).width) - deltaX);
          r.style.flex = `0 ${w < 10 ? 0 : w}px`;
          l.style.flex = '1 0';
        }
      }
      function ontouchend(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = 1));
        resizer.removeEventListener('touchmove', ontouchmove);
        resizer.removeEventListener('touchend', ontouchend);
        delete e._clientX;
      }

      // for desktop
      function onmousedown(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = -1));
        document.addEventListener('mousemove', onmousemove);
        document.addEventListener('mouseup', onmouseup);
      }
      function onmousemove(e) {
        e.preventDefault();
        const clientX = e.clientX;
        const deltaX = clientX - (resizer._clientX || clientX);
        resizer._clientX = clientX;
        const l = resizer.previousElementSibling;
        const r = resizer.nextElementSibling;
        // LEFT
        if (deltaX < 0) {
          const w = Math.round(parseInt(getComputedStyle(l).width) + deltaX);
          l.style.flex = `0 ${w < 10 ? 0 : w}px`;
          r.style.flex = '1 0';
        }
        // RIGHT
        if (deltaX > 0) {
          const w = Math.round(parseInt(getComputedStyle(r).width) - deltaX);
          r.style.flex = `0 ${w < 10 ? 0 : w}px`;
          l.style.flex = '1 0';
        }
      }
      function onmouseup(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = 1));
        document.removeEventListener('mousemove', onmousemove);
        document.removeEventListener('mouseup', onmouseup);
        delete e._clientX;
      }
    });
  })();

  // vertical direction
  (function resizableY() {
    const resizers = document.querySelectorAll('.resizer-y');
    resizers.forEach((resizer) => {
      resizer.addEventListener('mousedown', onmousedown);
      resizer.addEventListener('touchstart', ontouchstart);

      // for mobile
      function ontouchstart(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = -1));
        resizer.addEventListener('touchmove', ontouchmove);
        resizer.addEventListener('touchend', ontouchend);
      }
      function ontouchmove(e) {
        e.preventDefault();
        const clientY = e.touches[0].clientY;
        const deltaY = clientY - (resizer._clientY || clientY);
        resizer._clientY = clientY;
        const t = resizer.previousElementSibling;
        const b = resizer.nextElementSibling;
        // UP
        if (deltaY < 0) {
          const h = Math.round(parseInt(getComputedStyle(t).height) + deltaY);
          t.style.flex = `0 ${h < 10 ? 0 : h}px`;
          b.style.flex = '1 0';
        }
        // DOWN
        if (deltaY > 0) {
          const h = Math.round(parseInt(getComputedStyle(b).height) - deltaY);
          b.style.flex = `0 ${h < 10 ? 0 : h}px`;
          t.style.flex = '1 0';
        }
      }
      function ontouchend(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = 1));
        resizer.removeEventListener('touchmove', ontouchmove);
        resizer.removeEventListener('touchend', ontouchend);
        delete e._clientY;
      }

      // for desktop
      function onmousedown(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = -1));
        document.addEventListener('mousemove', onmousemove);
        document.addEventListener('mouseup', onmouseup);
      }
      function onmousemove(e) {
        e.preventDefault();
        const clientY = e.clientY;
        const deltaY = clientY - (resizer._clientY || clientY);
        resizer._clientY = clientY;
        const t = resizer.previousElementSibling;
        const b = resizer.nextElementSibling;
        // UP
        if (deltaY < 0) {
          const h = Math.round(parseInt(getComputedStyle(t).height) + deltaY);
          t.style.flex = `0 ${h < 10 ? 0 : h}px`;
          b.style.flex = '1 0';
        }
        // DOWN
        if (deltaY > 0) {
          const h = Math.round(parseInt(getComputedStyle(b).height) - deltaY);
          b.style.flex = `0 ${h < 10 ? 0 : h}px`;
          t.style.flex = '1 0';
        }
      }
      function onmouseup(e) {
        e.preventDefault();
        document.querySelectorAll('iframe').forEach((item) => (item.style.zIndex = 1));
        document.removeEventListener('mousemove', onmousemove);
        document.removeEventListener('mouseup', onmouseup);
        delete e._clientY;
      }
    });
  })();
})();
