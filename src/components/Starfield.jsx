import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const starCanvasRef = useRef(null);
  const beamCanvasRef = useRef(null);

  useEffect(() => {
    const starCanvas = starCanvasRef.current;
    const beamCanvas = beamCanvasRef.current;
    if (!starCanvas || !beamCanvas) return;

    const sctx = starCanvas.getContext('2d');
    const bctx = beamCanvas.getContext('2d');
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0;
    let stars = [];
    let shooters = [];
    let beams = [];
    let scrollY = window.scrollY;
    let mouseX = 0.5, mouseY = 0.5;
    let densityMul = 1;
    let beamIntensity = 0.55;
    let accents = ['#00f0ff', '#ff2bd6', '#8a5cff'];
    let rafId;

    function hex2rgba(hex, a) {
      const h = hex.replace('#', '');
      const r = parseInt(h.slice(0, 2), 16);
      const g = parseInt(h.slice(2, 4), 16);
      const b = parseInt(h.slice(4, 6), 16);
      return `rgba(${r},${g},${b},${a})`;
    }

    function seedStars() {
      const base = Math.floor((W * H) / 3200);
      const count = Math.max(60, Math.floor(base * densityMul));
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * W,
        y: Math.random() * H * 1.6,
        z: Math.random(),
        r: Math.random() * 1.4 + 0.2,
        tw: Math.random() * Math.PI * 2,
        ts: 0.6 + Math.random() * 1.6,
        hue: Math.random() < 0.85 ? 'w' : (Math.random() < 0.5 ? 'c' : 'm'),
      }));
    }

    function seedBeams() {
      beams = [
        { x: W * 0.22, w: W * 0.18, color: accents[0], phase: 0, speed: 0.0006 },
        { x: W * 0.72, w: W * 0.22, color: accents[1], phase: 1, speed: 0.0004 },
        { x: W * 0.50, w: W * 0.14, color: accents[2], phase: 2, speed: 0.0008 },
      ];
    }

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      for (const c of [starCanvas, beamCanvas]) {
        c.width = W * DPR;
        c.height = H * DPR;
        c.style.width = W + 'px';
        c.style.height = H + 'px';
        c.getContext('2d').setTransform(DPR, 0, 0, DPR, 0, 0);
      }
      seedStars();
      seedBeams();
    }

    function maybeShoot() {
      if (reduced) return;
      if (shooters.length < 2 && Math.random() < 0.006) {
        const fromLeft = Math.random() < 0.5;
        shooters.push({
          x: fromLeft ? -20 : W + 20,
          y: Math.random() * H * 0.7,
          vx: (fromLeft ? 1 : -1) * (5 + Math.random() * 5),
          vy: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: 80 + Math.random() * 40,
          color: Math.random() < 0.5 ? accents[0] : accents[1],
        });
      }
    }

    function drawStars(t) {
      sctx.clearRect(0, 0, W, H);
      const g = sctx.createRadialGradient(W * 0.7, H * 0.2, 0, W * 0.7, H * 0.2, Math.max(W, H) * 0.7);
      g.addColorStop(0, 'rgba(138,92,255,0.08)');
      g.addColorStop(0.4, 'rgba(0,240,255,0.03)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      sctx.fillStyle = g;
      sctx.fillRect(0, 0, W, H);

      const parallax = scrollY * 0.15;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const py = ((s.y - parallax * (0.3 + s.z * 1.2)) % (H * 1.6) + H * 1.6) % (H * 1.6);
        if (py > H + 4) continue;
        const tw = (Math.sin(t * 0.001 * s.ts + s.tw) + 1) * 0.5;
        const alpha = 0.35 + tw * 0.55 * (0.4 + s.z * 0.6);
        let col;
        if (s.hue === 'c') col = `rgba(0,240,255,${alpha})`;
        else if (s.hue === 'm') col = `rgba(255,43,214,${alpha})`;
        else col = `rgba(220,230,255,${alpha})`;
        
        sctx.fillStyle = col;
        const r = s.r * (0.6 + s.z * 0.8);
        sctx.beginPath();
        sctx.arc(s.x, py, r, 0, Math.PI * 2);
        sctx.fill();
        
        if (r > 1.4) {
          sctx.fillStyle = col.replace(/[\d.]+\)$/, (alpha * 0.18).toFixed(3) + ')');
          sctx.beginPath();
          sctx.arc(s.x, py, r * 4, 0, Math.PI * 2);
          sctx.fill();
        }
      }

      maybeShoot();
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.x += sh.vx; sh.y += sh.vy; sh.life++;
        const a = Math.max(0, 1 - sh.life / sh.maxLife);
        const tailX = sh.x - sh.vx * 8;
        const tailY = sh.y - sh.vy * 8;
        const grad = sctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        grad.addColorStop(0, sh.color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        sctx.strokeStyle = grad;
        sctx.lineWidth = 1.8;
        sctx.globalAlpha = a;
        sctx.beginPath();
        sctx.moveTo(sh.x, sh.y);
        sctx.lineTo(tailX, tailY);
        sctx.stroke();
        sctx.globalAlpha = 1;
        if (sh.life > sh.maxLife || sh.x < -50 || sh.x > W + 50) {
          shooters.splice(i, 1);
        }
      }
    }

    function drawBeams(t) {
      bctx.clearRect(0, 0, W, H);
      const baseAlpha = beamIntensity;
      for (const b of beams) {
        const sway = Math.sin(t * b.speed + b.phase) * 60;
        const cx = b.x + sway + (mouseX - 0.5) * 30;
        const grad = bctx.createLinearGradient(cx, 0, cx, H);
        const c = b.color;
        grad.addColorStop(0, hex2rgba(c, 0));
        grad.addColorStop(0.4, hex2rgba(c, 0.18 * baseAlpha));
        grad.addColorStop(0.7, hex2rgba(c, 0.10 * baseAlpha));
        grad.addColorStop(1, hex2rgba(c, 0));
        bctx.fillStyle = grad;
        
        const r = bctx.createRadialGradient(cx, H * 0.55, 0, cx, H * 0.55, b.w * 1.4);
        r.addColorStop(0, hex2rgba(c, 0.25 * baseAlpha));
        r.addColorStop(0.5, hex2rgba(c, 0.06 * baseAlpha));
        r.addColorStop(1, hex2rgba(c, 0));
        bctx.fillStyle = r;
        bctx.fillRect(cx - b.w, 0, b.w * 2, H);
        
        bctx.fillStyle = hex2rgba(c, 0.10 * baseAlpha);
        bctx.fillRect(cx - 0.6, 0, 1.2, H);
      }
    }

    function frame(t) {
      drawStars(t);
      drawBeams(t);
      rafId = requestAnimationFrame(frame);
    }

    const onScroll = () => { scrollY = window.scrollY; };
    const onMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    resize();
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <canvas id="starfield" ref={starCanvasRef} />
      <canvas id="beams" ref={beamCanvasRef} />
      <div className="grid-overlay" />
      <div className="scanlines" />
    </>
  );
};

export default Starfield;
