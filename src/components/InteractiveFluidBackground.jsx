import React, { useEffect, useRef } from 'react';

/**
 * Native, lightweight interactive maritime & aviation fluid canvas
 * When the user moves the cursor, an agile cargo aircraft follows the flight vector,
 * banking smoothly and leaving twin atmospheric contrails across the pastel sky.
 * 100% native, zero external dependencies, 60 FPS hardware accelerated.
 */
export const InteractiveFluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse & Aircraft flight dynamics
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      prevX: width / 2,
      prevY: height / 2,
      vx: 0,
      vy: 0,
      speed: 0,
      isHovering: false,
    };

    const plane = {
      x: width / 2,
      y: height / 2,
      angle: -Math.PI / 4,
    };

    // Dual atmospheric contrails (vapor streams from wingtips)
    let contrailLeft = [];
    let contrailRight = [];

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      // Check if cursor is over the hero section
      if (
        e.clientY >= rect.top - 20 &&
        e.clientY <= rect.bottom + 20 &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        mouse.targetX = currentX;
        mouse.targetY = currentY;
        mouse.isHovering = true;
      } else {
        mouse.isHovering = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Fluid background wave lines (Brand pastel colors)
    const waves = [
      { color: 'rgba(0, 159, 99, 0.08)', speed: 0.008, amplitude: 30, frequency: 0.002, offset: 0 },
      { color: 'rgba(2, 132, 199, 0.06)', speed: 0.012, amplitude: 38, frequency: 0.0018, offset: 2 },
      { color: 'rgba(11, 40, 61, 0.04)', speed: 0.006, amplitude: 24, frequency: 0.0025, offset: 4 },
      { color: 'rgba(0, 159, 99, 0.05)', speed: 0.014, amplitude: 20, frequency: 0.003, offset: 1 }
    ];

    // Floating micro-particles for air & sea routes
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: Math.random() > 0.5 ? 'rgba(0, 159, 99, 0.25)' : 'rgba(2, 132, 199, 0.25)'
    }));

    let step = 0;

    const render = () => {
      step += 1;

      // Smooth mouse interpolation
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;
      mouse.vx = mouse.x - mouse.prevX;
      mouse.vy = mouse.y - mouse.prevY;
      mouse.speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      // Airplane flight orientation (banks smoothly in flight direction)
      plane.x = mouse.x;
      plane.y = mouse.y;

      if (mouse.speed > 0.4) {
        const flightAngle = Math.atan2(mouse.vy, mouse.vx);
        let angleDiff = flightAngle - plane.angle;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        plane.angle += angleDiff * 0.18;
      }

      // Calculate wingtip emitter positions for twin contrails
      const wingSpan = 15;
      const wingBack = 6;
      const cosA = Math.cos(plane.angle);
      const sinA = Math.sin(plane.angle);

      const leftTipX = plane.x - wingBack * cosA - (-wingSpan) * sinA;
      const leftTipY = plane.y - wingBack * sinA + (-wingSpan) * cosA;

      const rightTipX = plane.x - wingBack * cosA - (wingSpan) * sinA;
      const rightTipY = plane.y - wingBack * sinA + (wingSpan) * cosA;

      // Emit twin contrail vapor puffs when moving
      if (mouse.isHovering && mouse.speed > 0.6) {
        contrailLeft.push({
          x: leftTipX,
          y: leftTipY,
          age: 0,
          maxAge: 32,
          size: Math.min(18, 3.5 + mouse.speed * 1.2),
        });

        contrailRight.push({
          x: rightTipX,
          y: rightTipY,
          age: 0,
          maxAge: 32,
          size: Math.min(18, 3.5 + mouse.speed * 1.2),
        });
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw gentle flowing background waves
      waves.forEach((w, idx) => {
        ctx.beginPath();
        ctx.fillStyle = w.color;

        const baseY = height * (0.34 + idx * 0.18);
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        for (let x = 0; x <= width; x += 18) {
          const dx = x - plane.x;
          const dy = baseY - plane.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 320) * 38;

          const y = baseY + 
            Math.sin(x * w.frequency + step * w.speed + w.offset) * w.amplitude +
            Math.cos((x + step * 0.5) * 0.001) * 12 - 
            (mouse.isHovering ? influence * Math.sin(dx * 0.012) : 0);

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      });

      // 2. Draw Twin Contrails (Estelas de vapor de las alas)
      const renderContrail = (list, colorCenter) => {
        if (list.length > 1) {
          // Connected ribbon stream
          ctx.beginPath();
          ctx.moveTo(list[0].x, list[0].y);
          for (let i = 1; i < list.length; i++) {
            const pt = list[i];
            const progress = pt.age / pt.maxAge;
            const alpha = (1 - progress) * 0.3;
            ctx.lineTo(pt.x, pt.y);
            ctx.strokeStyle = `rgba(0, 159, 99, ${alpha})`;
            ctx.lineWidth = Math.max(1, pt.size * (1 - progress) * 0.6);
          }
          ctx.stroke();

          // Soft expanding vapor puffs
          for (let i = list.length - 1; i >= 0; i--) {
            const pt = list[i];
            pt.age += 1;
            pt.size += 0.4;
            const progress = pt.age / pt.maxAge;
            const alpha = (1 - progress) * 0.22;

            if (progress < 1) {
              const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, pt.size);
              grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 1.5})`);
              grad.addColorStop(0.4, `${colorCenter}${alpha})`);
              grad.addColorStop(1, 'rgba(237, 246, 244, 0)');

              ctx.beginPath();
              ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
              ctx.fillStyle = grad;
              ctx.fill();
            }
          }
        }
      };

      renderContrail(contrailLeft, 'rgba(0, 159, 99, ');
      renderContrail(contrailRight, 'rgba(2, 132, 199, ');

      contrailLeft = contrailLeft.filter(p => p.age < p.maxAge);
      contrailRight = contrailRight.filter(p => p.age < p.maxAge);

      // 3. Draw The Cargo Airplane following cursor with banking physics
      if (mouse.isHovering) {
        ctx.save();
        ctx.translate(plane.x, plane.y);
        ctx.rotate(plane.angle);

        // Soft altitude shadow beneath
        ctx.fillStyle = 'rgba(11, 40, 61, 0.08)';
        ctx.beginPath();
        ctx.ellipse(-2, 8, 16, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Airplane Swept Wings (Corporate Emerald)
        ctx.fillStyle = '#009f63';
        ctx.beginPath();
        ctx.moveTo(3, 0);
        ctx.lineTo(-6, -16); // Left wingtip
        ctx.lineTo(-10, -15);
        ctx.lineTo(-3, 0);
        ctx.lineTo(-10, 15);
        ctx.lineTo(-6, 16); // Right wingtip
        ctx.closePath();
        ctx.fill();

        // Airplane Main Fuselage Body (Corporate Navy)
        ctx.fillStyle = '#0b283d';
        ctx.beginPath();
        ctx.moveTo(16, 0); // Nose cone
        ctx.bezierCurveTo(10, -2.5, -6, -2.8, -14, -2);
        ctx.lineTo(-16, 0); // Tail
        ctx.bezierCurveTo(-6, 2.8, 10, 2.5, 16, 0);
        ctx.closePath();
        ctx.fill();

        // Tail Stabilizers (Aletas traseras)
        ctx.fillStyle = '#071b29';
        ctx.beginPath();
        ctx.moveTo(-11, 0);
        ctx.lineTo(-15, -6);
        ctx.lineTo(-17, -5);
        ctx.lineTo(-15, 0);
        ctx.lineTo(-17, 5);
        ctx.lineTo(-15, 6);
        ctx.closePath();
        ctx.fill();

        // Cockpit Glass Accent
        ctx.fillStyle = '#cce4d8';
        ctx.beginPath();
        ctx.ellipse(10, 0, 2.8, 1.2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Blinking Navigation Wingtip Lights (Aviation Standard: Port Red, Starboard Green)
        const isBlinking = Math.sin(step * 0.16) > 0.1;
        if (isBlinking) {
          // Left Wingtip (Red Beacon)
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(-7, -16, 1.8, 0, Math.PI * 2);
          ctx.fill();

          // Right Wingtip (Green Beacon)
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(-7, 16, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // 4. Draw route connection particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Attract softly to flight path
        const dx = p.x - plane.x;
        const dy = p.y - plane.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && mouse.isHovering) {
          p.x += (dx / dist) * 1.5;
          p.y += (dy / dist) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
