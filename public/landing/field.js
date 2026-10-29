(() => {
  const canvas = document.getElementById("field");
  if (!canvas) return;
  const g = canvas.getContext("2d");
  if (!g) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const GAP = 28;
  const SIGMA = 150;
  const PULL = 26;

  let w = 0;
  let h = 0;
  let cols = 0;
  let rows = 0;
  let ox = 0;
  let oy = 0;
  let px = [];
  let py = [];
  let near = [];

  const target = { x: -9999, y: -9999, active: false };
  const p = { x: -9999, y: -9999 };
  let lastMove = 0;
  let running = true;
  let raf = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / GAP) + 1;
    rows = Math.ceil(h / GAP) + 1;
    ox = (w - (cols - 1) * GAP) / 2;
    oy = (h - (rows - 1) * GAP) / 2;
    const n = cols * rows;
    px = new Float32Array(n);
    py = new Float32Array(n);
    near = new Float32Array(n);
    if (reduced) draw(0);
  };

  const draw = (t) => {
    const idle = !target.active || t - lastMove > 2600;
    if (idle) {
      const s = t * 0.00012;
      target.x = w * (0.5 + 0.32 * Math.sin(s * 2.1));
      target.y = h * (0.42 + 0.22 * Math.sin(s * 3.3 + 1.2));
    }
    const k = idle ? 0.02 : 0.12;
    if (p.x < -999) {
      p.x = target.x;
      p.y = target.y;
    }
    p.x += (target.x - p.x) * k;
    p.y += (target.y - p.y) * k;

    const inv = 1 / (2 * SIGMA * SIGMA);
    const strength = idle ? PULL * 0.55 : PULL;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const bx = ox + c * GAP;
        const by = oy + r * GAP;
        const dx = p.x - bx;
        const dy = p.y - by;
        const d2 = dx * dx + dy * dy;
        const f = Math.exp(-d2 * inv);
        const d = Math.sqrt(d2) || 1;
        const m = Math.min(strength * f, d * 0.6);
        px[i] = bx + (dx / d) * m;
        py[i] = by + (dy / d) * m;
        near[i] = f;
      }
    }

    g.clearRect(0, 0, w, h);

    g.lineWidth = 1;
    g.strokeStyle = "rgba(242, 239, 232, 0.035)";
    g.beginPath();
    for (let r = 0; r < rows; r++) {
      const i0 = r * cols;
      g.moveTo(px[i0], py[i0]);
      for (let c = 1; c < cols; c++) g.lineTo(px[i0 + c], py[i0 + c]);
    }
    for (let c = 0; c < cols; c++) {
      g.moveTo(px[c], py[c]);
      for (let r = 1; r < rows; r++) g.lineTo(px[r * cols + c], py[r * cols + c]);
    }
    g.stroke();

    for (let i = 0; i < px.length; i++) {
      const f = near[i];
      const a = 0.1 + f * 0.55;
      const s = 0.9 + f * 1.3;
      g.fillStyle = f > 0.08 ? `rgba(242, 164, 119, ${a})` : `rgba(242, 239, 232, ${a})`;
      g.fillRect(px[i] - s / 2, py[i] - s / 2, s, s);
    }
  };

  const loop = (t) => {
    draw(t);
    if (running) raf = requestAnimationFrame(loop);
  };

  if (fine) {
    window.addEventListener(
      "pointermove",
      (e) => {
        target.x = e.clientX;
        target.y = e.clientY;
        target.active = true;
        lastMove = performance.now();
      },
      { passive: true },
    );
    document.addEventListener("pointerleave", () => (target.active = false));
  }

  document.addEventListener("visibilitychange", () => {
    if (reduced) return;
    running = !document.hidden;
    cancelAnimationFrame(raf);
    if (running) raf = requestAnimationFrame(loop);
  });

  let rt = 0;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(resize, 120);
  });

  resize();
  if (!reduced) raf = requestAnimationFrame(loop);
  document.body.classList.add("field-on");
})();
