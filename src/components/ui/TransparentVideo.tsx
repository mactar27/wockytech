"use client";

import { useEffect, useRef } from "react";

interface TransparentVideoProps {
  src: string;
  className?: string;
}

export function TransparentVideo({ src, className }: TransparentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let active = true;

    const processFrame = () => {
      if (!active) return;

      if (!video.paused && !video.ended && video.videoWidth > 0) {
        if (canvas.width !== video.videoWidth) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = frame.data;
        const l = data.length;

        for (let i = 0; i < l; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Threshold for removing dark background box pixels completely
          if (r < 34 && g < 38 && b < 58) {
            data[i + 3] = 0; // 100% Transparent
          }
        }

        ctx.putImageData(frame, 0, 0);
      }

      if ("requestVideoFrameCallback" in video) {
        (video as unknown as { requestVideoFrameCallback: (cb: () => void) => void }).requestVideoFrameCallback(processFrame);
      } else {
        requestAnimationFrame(processFrame);
      }
    };

    video.play().catch(() => {});
    processFrame();

    return () => {
      active = false;
    };
  }, [src]);

  return (
    <div className={`relative flex items-center justify-center ${className || ""}`}>
      {/* Hidden source video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="hidden"
      />
      {/* 100% Transparent Real-Time Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_50px_rgba(59,130,246,0.35)]"
      />
    </div>
  );
}
