(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const RADIUS = 90;

  const init = (canvas) => {
    const g = canvas.getContext("2d");
    if (!g) return;
    const word = canvas.dataset.word || "Andrea0x";
    const dim = canvas.hasAttribute("data-dim");
    const rest = dim ? parseFloat(canvas.dataset.dim) || 0.07 : 0.2;
    const REVEAL = dim ? 240 : 0;

    let w = 0;
    let h = 0;
    let hx, hy, x, y, vx, vy;
    let count = 0;
    const pointer = { x: -9999, y: -9999 };
    let visible = false;
    let raf = 0;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = Math.round(w);
      off.height = Math.round(h);
      const o = off.getContext("2d", { willReadFrequently: true });
      const left = canvas.dataset.align === "start";
      const fit = left ? 1 : 0.92;
      let size = Math.min(w * 0.2, dim ? h * 1.15 : 260);
      o.font = `600 ${size}px Geist, system-ui, sans-serif`;
      const measured = o.measureText(word).width;
      if (measured > w * fit) {
        size *= (w * fit) / measured;
        o.font = `600 ${size}px Geist, system-ui, sans-serif`;
      }
      o.textAlign = left ? "left" : "center";
      o.fillStyle = "#fff";
      if (dim) {
        const m = o.measureText(word);
        o.fillText(word, left ? 2 + m.actualBoundingBoxLeft : w / 2, (h + m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2);
      } else {
        o.textBaseline = "middle";
        o.fillText(word, w / 2, h - size * 0.62);
      }

      const data = o.getImageData(0, 0, off.width, off.height).data;
      const step = w < 700 ? 3 : 4;
      const pts = [];
      for (let yy = 0; yy < off.height; yy += step) {
        for (let xx = 0; xx < off.width; xx += step) {
          if (data[(yy * off.width + xx) * 4 + 3] > 128) pts.push(xx, yy);
        }
      }
      count = pts.length / 2;
      hx = new Float32Array(count);
      hy = new Float32Array(count);
      x = new Float32Array(count);
      y = new Float32Array(count);
      vx = new Float32Array(count);
      vy = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        hx[i] = pts[i * 2];
        hy[i] = pts[i * 2 + 1];
        x[i] = reduced ? hx[i] : hx[i] + (Math.random() - 0.5) * w * 0.6;
        y[i] = reduced ? hy[i] : hy[i] + (Math.random() - 0.5) * h * 0.8;
      }
      if (reduced) draw();
      else start();
    };

    const tick = () => {
      const r2 = RADIUS * RADIUS;
      let energy = 0;
      for (let i = 0; i < count; i++) {
        const dx = x[i] - pointer.x;
        const dy = y[i] - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < r2) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d / RADIUS) * (dim ? 1.8 : 3.2);
          vx[i] += (dx / d) * f;
          vy[i] += (dy / d) * f;
        }
        vx[i] += (hx[i] - x[i]) * 0.045;
        vy[i] += (hy[i] - y[i]) * 0.045;
        vx[i] *= 0.84;
        vy[i] *= 0.84;
        x[i] += vx[i];
        y[i] += vy[i];
        energy += Math.abs(vx[i]) + Math.abs(vy[i]);
      }
      return energy;
    };

    const draw = () => {
      g.clearRect(0, 0, w, h);
      const near = [];
      const hot = [];
      const rv2 = REVEAL * REVEAL;
      g.fillStyle = `rgba(242, 239, 232, ${rest})`;
      for (let i = 0; i < count; i++) {
        if (vx[i] * vx[i] + vy[i] * vy[i] >= 0.25) hot.push(i);
        else if (rv2 && (x[i] - pointer.x) ** 2 + (y[i] - pointer.y) ** 2 < rv2) near.push(i);
        else g.fillRect(x[i], y[i], 1.6, 1.6);
      }
      for (const i of near) {
        const k = 1 - Math.sqrt((x[i] - pointer.x) ** 2 + (y[i] - pointer.y) ** 2) / REVEAL;
        g.fillStyle = `rgba(242, 239, 232, ${rest + k * 0.3})`;
        g.fillRect(x[i], y[i], 1.6, 1.6);
      }
      g.fillStyle = `rgba(242, 164, 119, ${dim ? 0.42 : 0.85})`;
      for (const i of hot) g.fillRect(x[i] - 0.4, y[i] - 0.4, 2.2, 2.2);
    };

    const loop = () => {
      const energy = tick();
      draw();
      raf = 0;
      if (visible && (pointer.x > -999 || energy > count * 0.01)) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (visible && !raf && !reduced) raf = requestAnimationFrame(loop);
    };

    if (fine && !reduced) {
      const section = canvas.closest("section") || canvas.parentElement;
      section.addEventListener("pointermove", (e) => {
        const r = canvas.getBoundingClientRect();
        pointer.x = e.clientX - r.left;
        pointer.y = e.clientY - r.top;
        start();
      });
      section.addEventListener("pointerleave", () => {
        pointer.x = -9999;
        pointer.y = -9999;
        start();
      });
    }

    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      raf = 0;
      start();
    }).observe(canvas);

    let rt = 0;
    let lastW = window.innerWidth;
    window.addEventListener("resize", () => {
      if (window.innerWidth === lastW && dim) return;
      lastW = window.innerWidth;
      clearTimeout(rt);
      rt = setTimeout(build, 160);
    });

    (document.fonts?.ready || Promise.resolve()).then(build);
  };

  document.querySelectorAll("canvas.particle-word").forEach(init);
})();
