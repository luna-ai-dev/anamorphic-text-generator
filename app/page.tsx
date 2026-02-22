"use client";

import React, { useState } from 'react';
import { Type, Download, Copy, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

export default function AnamorphicTextGenerator() {
  const [texts, setTexts] = useState({
    tilt0: 'I LOVE',
    tilt45L: 'MY',
    tilt45R: 'JOB',
    tilt90: 'AI RULES'
  });

  const handleChange = (key: string, val: string) => {
    setTexts(prev => ({ ...prev, [key]: val }));
  };

  return (
    <div className="min-h-screen bg-[#f0f0f7] text-slate-900 font-sans p-4 md:p-12 overflow-x-hidden selection:bg-sky-500/30">
      <main className="relative z-10 max-w-5xl mx-auto">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl rotate-3">
              <Type size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black italic tracking-tighter text-slate-900">
                SECRET.DECRYPT
              </h1>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em]">Multi-Axis Anamorphic Layering</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
                <Layers size={14} /> Message Layers
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Vertical Layer (0°)</label>
                  <input 
                    type="text" value={texts.tilt0} onChange={e => handleChange('tilt0', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Diagonal Left (45°L)</label>
                  <input 
                    type="text" value={texts.tilt45L} onChange={e => handleChange('tilt45L', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Diagonal Right (45°R)</label>
                  <input 
                    type="text" value={texts.tilt45R} onChange={e => handleChange('tilt45R', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all font-bold text-slate-900"
                  />
                </div>
              </div>

              <button className="w-full mt-10 bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm uppercase italic tracking-tighter shadow-lg active:scale-95">
                 <ShieldCheck size={18} /> Generate Secret
              </button>
            </div>
          </div>

          {/* Canvas Preview Column */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden aspect-[3/4] flex flex-col items-center justify-center">
              
              {/* Card Header Decoration */}
              <div className="absolute top-10 w-full text-center">
                <p className="text-[#a03050] font-serif text-xl font-medium">A secret message for you today...</p>
              </div>

              {/* THE ENCRYPTION CORE - The "Factor X" Fix */}
              <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                
                {/* Layer 1: Vertical Stretch (Centered Cross) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center text-black font-serif font-black select-none"
                  style={{ 
                    fontSize: '12rem', 
                    transform: 'scaleY(15) scaleX(0.08)',
                    letterSpacing: '-0.05em'
                  }}
                >
                  {texts.tilt0}
                </div>

                {/* Layer 2: 45 Degree Left Skew */}
                <div 
                  className="absolute inset-0 flex items-center justify-center text-black font-serif font-black select-none"
                  style={{ 
                    fontSize: '10rem', 
                    transform: 'rotate(-45deg) scaleY(12) scaleX(0.06)',
                    letterSpacing: '-0.1em'
                  }}
                >
                  {texts.tilt45L}
                </div>

                {/* Layer 3: 45 Degree Right Skew */}
                <div 
                  className="absolute inset-0 flex items-center justify-center text-black font-serif font-black select-none"
                  style={{ 
                    fontSize: '10rem', 
                    transform: 'rotate(45deg) scaleY(12) scaleX(0.06)',
                    letterSpacing: '-0.1em'
                  }}
                >
                  {texts.tilt45R}
                </div>

              </div>

              {/* Card Footer Decoration */}
              <div className="absolute bottom-10 w-full px-12 text-center">
                <p className="text-[9px] text-slate-400 font-medium leading-relaxed max-w-[240px] mx-auto uppercase tracking-tighter">
                  Instruction: Hold card at a 5 degree angle from the horizontal... look in the 3 directions...
                </p>
              </div>

              {/* Card Border */}
              <div className="absolute inset-4 border-4 border-[#101040] pointer-events-none rounded-[2.2rem]" />
            </div>

            <div className="mt-8 p-6 bg-slate-900 rounded-[2rem] text-slate-400 text-xs italic leading-relaxed border border-white/5">
              "To view correctly: Tilt your screen back almost flat and look from the bottom edge (0°), then rotate the phone/screen 45° and repeat."
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        body {
          background-color: #f0f0f7;
        }
      `}</style>
    </div>
  );
}
