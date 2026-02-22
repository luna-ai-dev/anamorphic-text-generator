"use client";

import React, { useState } from 'react';
import { Type, Download, Copy, RefreshCw, Layers } from 'lucide-react';

export default function AnamorphicTextGenerator() {
  const [texts, setTexts] = useState({
    tilt0: 'ANAMORPHIC',
    tilt45L: 'SIDEWAYS',
    tilt45R: 'STRETCHED',
    tilt90: 'EXTREME'
  });

  const handleChange = (key: string, val: string) => {
    setTexts(prev => ({ ...prev, [key]: val }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans p-4 md:p-12 overflow-x-hidden selection:bg-sky-500/30">
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(14,165,233,0.1),_transparent_70%)]" />
      
      <main className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.4)] rotate-12">
              <Type size={24} className="text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-black italic tracking-tighter bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                STRETCH.VISION
              </h1>
              <p className="text-[10px] text-sky-500 font-bold uppercase tracking-[0.4em]">Anamorphic Text Engine</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-2">
                <Layers size={14} /> Control Panel
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-sky-500 uppercase mb-2 block tracking-widest">Normal (0°)</label>
                  <input 
                    type="text" value={texts.tilt0} onChange={e => handleChange('tilt0', e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-sky-500/50 transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-sky-500 uppercase mb-2 block tracking-widest">Tilt 45° Left</label>
                  <input 
                    type="text" value={texts.tilt45L} onChange={e => handleChange('tilt45L', e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-sky-500/50 transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-sky-500 uppercase mb-2 block tracking-widest">Tilt 45° Right</label>
                  <input 
                    type="text" value={texts.tilt45R} onChange={e => handleChange('tilt45R', e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-sky-500/50 transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-sky-500 uppercase mb-2 block tracking-widest">Extreme (90°)</label>
                  <input 
                    type="text" value={texts.tilt90} onChange={e => handleChange('tilt90', e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-sky-500/50 transition-all font-bold"
                  />
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <button className="flex-1 bg-white text-black font-black py-4 rounded-2xl hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 text-sm uppercase italic tracking-tighter">
                   Save Preset
                </button>
              </div>
            </div>
          </div>

          {/* Preview Column */}
          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 0 Degrees */}
              <div className="group relative bg-[#0a0a0a] border border-white/[0.03] rounded-[2.5rem] p-8 overflow-hidden min-h-[300px] flex flex-col justify-between">
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Neutral View 0°</span>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-4xl font-black italic tracking-tighter text-white">
                    {texts.tilt0}
                  </div>
                </div>
              </div>

              {/* 45 Left */}
              <div className="group relative bg-[#0a0a0a] border border-white/[0.03] rounded-[2.5rem] p-8 overflow-hidden min-h-[300px] flex flex-col justify-between">
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Anamorphic 45° Left</span>
                <div className="flex-1 flex items-center justify-center">
                  <div 
                    className="text-6xl font-black italic tracking-tighter text-sky-400 uppercase leading-none"
                    style={{ transform: 'skewX(-45deg) scaleY(0.5)' }}
                  >
                    {texts.tilt45L}
                  </div>
                </div>
              </div>

              {/* 45 Right */}
              <div className="group relative bg-[#0a0a0a] border border-white/[0.03] rounded-[2.5rem] p-8 overflow-hidden min-h-[300px] flex flex-col justify-between">
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Anamorphic 45° Right</span>
                <div className="flex-1 flex items-center justify-center">
                  <div 
                    className="text-6xl font-black italic tracking-tighter text-indigo-400 uppercase leading-none"
                    style={{ transform: 'skewX(45deg) scaleY(0.5)' }}
                  >
                    {texts.tilt45R}
                  </div>
                </div>
              </div>

              {/* 90 Degrees */}
              <div className="group relative bg-[#0a0a0a] border border-white/[0.03] rounded-[2.5rem] p-8 overflow-hidden min-h-[300px] flex flex-col justify-between">
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Compressed 90°</span>
                <div className="flex-1 flex items-center justify-center">
                  <div 
                    className="text-8xl font-black italic tracking-tighter text-white uppercase leading-none opacity-50"
                    style={{ transform: 'scaleY(0.1) scaleX(1.5)' }}
                  >
                    {texts.tilt90}
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction Footer */}
            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-sky-500/5">
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  "These perspectives are mathematically skewed to appear corrected when viewed from extreme angles. Use these for 3D pavement art, secret message decals, or brutalist graphic design."
                </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        body {
          background-image: radial-gradient(circle at top right, rgba(14, 165, 233, 0.05), transparent 600px);
        }
      `}</style>
    </div>
  );
}
