import React from 'react';

/**
 * Animated Cargo Plane that glides across the upper sky
 */
export const SkyCargoPlane = () => {
  return (
    <div className="absolute top-6 left-0 right-0 h-28 pointer-events-none overflow-hidden z-0">
      <div className="animate-plane-flight inline-flex items-center gap-3">
        {/* Contrail / Vapor stream */}
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-white/50 to-white/80 rounded-full blur-[1px]"></div>
        
        {/* Modern Cargo Jet Silhouette */}
        <div className="relative">
          <svg 
            width="72" 
            height="32" 
            viewBox="0 0 120 54" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm transform rotate-[-4deg]"
          >
            {/* Plane Body */}
            <path 
              d="M116 26C116 28 108 32 96 32H38L14 48H6L18 32H6L2 26L6 20H18L6 4H14L38 20H96C108 20 116 24 116 26Z" 
              fill="#0b283d" 
              opacity="0.85"
            />
            {/* Main Wing (Swept) */}
            <path 
              d="M58 24L32 4H44L76 24H58Z" 
              fill="#009f63" 
            />
            {/* Cockpit Window Accent */}
            <path 
              d="M102 23C104 23 108 24 108 25C108 26 104 27 102 27Z" 
              fill="#cce4d8" 
            />
            {/* Lower Wing */}
            <path 
              d="M52 28L30 46H42L70 28H52Z" 
              fill="#071b29" 
            />
            {/* Engine Pod */}
            <rect x="50" y="32" width="14" height="4" rx="2" fill="#009f63" />
          </svg>

          {/* Pulsing Navigation Beacon Light */}
          <span className="absolute top-2 right-6 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        </div>
      </div>
    </div>
  );
};

/**
 * Animated Container Cargo Ship sailing peacefully along the horizon
 */
export const SeaCargoShip = () => {
  return (
    <div className="w-full relative h-20 overflow-hidden pointer-events-none z-0">
      {/* Dynamic ocean water ripples */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#c6e3d7]/60 to-transparent"></div>
      
      {/* Ship Container */}
      <div className="animate-ship-sail absolute bottom-2 left-0">
        <div className="animate-ship-bob relative inline-flex items-end">
          {/* Bow wake water splash */}
          <div className="w-8 h-2 bg-gradient-to-l from-white/70 to-transparent rounded-full mb-0.5 animate-pulse"></div>

          {/* Cargo Vessel SVG */}
          <svg 
            width="170" 
            height="48" 
            viewBox="0 0 200 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            {/* Ship Hull (Modern Bow Bulb & Red Keel Line) */}
            <path 
              d="M10 44L28 54H180L196 44H10Z" 
              fill="#071b29" 
            />
            <path 
              d="M10 44H196L192 40H18L10 44Z" 
              fill="#b91c1c" 
            />

            {/* Containers Stack Layer 1 */}
            <rect x="36" y="28" width="18" height="12" rx="1" fill="#009f63" />
            <rect x="56" y="28" width="18" height="12" rx="1" fill="#0b283d" />
            <rect x="76" y="28" width="18" height="12" rx="1" fill="#0284c7" />
            <rect x="96" y="28" width="18" height="12" rx="1" fill="#009f63" />
            <rect x="116" y="28" width="18" height="12" rx="1" fill="#0b283d" />
            <rect x="136" y="28" width="18" height="12" rx="1" fill="#0284c7" />

            {/* Containers Stack Layer 2 */}
            <rect x="42" y="16" width="18" height="12" rx="1" fill="#0284c7" />
            <rect x="62" y="16" width="18" height="12" rx="1" fill="#009f63" />
            <rect x="82" y="16" width="18" height="12" rx="1" fill="#0b283d" />
            <rect x="102" y="16" width="18" height="12" rx="1" fill="#0284c7" />
            <rect x="122" y="16" width="18" height="12" rx="1" fill="#009f63" />

            {/* Bridge / Superstructure & Radar Tower */}
            <rect x="156" y="12" width="22" height="28" rx="2" fill="#e2efe9" stroke="#071b29" strokeWidth="1" />
            <rect x="160" y="16" width="14" height="4" rx="1" fill="#0b283d" />
            <path d="M166 12V2M163 4H169" stroke="#071b29" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="166" cy="2" r="1.5" fill="#009f63" />

            {/* Stern Wake */}
            <path d="M182 50C188 52 196 52 200 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {/* Stern water ripples */}
          <div className="w-14 h-1.5 bg-gradient-to-r from-white/80 to-transparent rounded-full mb-0.5 ml-[-6px]"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * Animated Road Freight Trailer Truck for Ground Transit
 */
export const HighwayTransitTruck = () => {
  return (
    <div className="relative py-2 overflow-hidden">
      <div className="flex items-center gap-1">
        <svg 
          width="110" 
          height="38" 
          viewBox="0 0 130 46" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cargo Container on Trailer */}
          <rect x="4" y="6" width="82" height="26" rx="2" fill="#0b283d" stroke="#009f63" strokeWidth="1" />
          <line x1="24" y1="8" x2="24" y2="30" stroke="#1d435e" strokeWidth="1" />
          <line x1="44" y1="8" x2="44" y2="30" stroke="#1d435e" strokeWidth="1" />
          <line x1="64" y1="8" x2="64" y2="30" stroke="#1d435e" strokeWidth="1" />
          
          {/* Guillén Corona mini container branding */}
          <rect x="30" y="15" width="30" height="8" rx="1" fill="#009f63" />
          <text x="34" y="21" fill="white" fontSize="5" fontWeight="bold" fontFamily="sans-serif">G.C. & ASOC</text>

          {/* Chassis & Coupler */}
          <rect x="6" y="32" width="112" height="3" fill="#334155" />

          {/* Truck Cabin */}
          <path d="M88 12H108L118 24V34H88V12Z" fill="#009f63" />
          {/* Windshield */}
          <path d="M96 14H106L114 23H96V14Z" fill="#e2f4ea" />
          {/* Headlight */}
          <rect x="116" y="28" width="2" height="3" rx="1" fill="#facc15" />

          {/* Wheels with spin hubs */}
          <circle cx="20" cy="36" r="6" fill="#1e293b" />
          <circle cx="20" cy="36" r="2.5" fill="#94a3b8" />
          <circle cx="34" cy="36" r="6" fill="#1e293b" />
          <circle cx="34" cy="36" r="2.5" fill="#94a3b8" />

          <circle cx="76" cy="36" r="6" fill="#1e293b" />
          <circle cx="76" cy="36" r="2.5" fill="#94a3b8" />
          
          <circle cx="106" cy="36" r="6" fill="#1e293b" />
          <circle cx="106" cy="36" r="2.5" fill="#94a3b8" />
        </svg>
      </div>

      {/* Dashed animated road line beneath */}
      <svg width="100%" height="6" className="mt-1">
        <line 
          x1="0" 
          y1="3" 
          x2="100%" 
          y2="3" 
          stroke="#009f63" 
          strokeWidth="2" 
          strokeDasharray="6 6" 
          className="animate-road-dash opacity-60" 
        />
      </svg>
    </div>
  );
};
