"use client";

import React, { useState, useRef } from 'react';
import { Type, Layers, ExternalLink, RefreshCw } from 'lucide-react';
import * as htmlToImage from 'html-to-image';

export default function AnamorphicTextGenerator() {
  const [texts, setTexts] = useState({
    tilt0: '',
    tilt45L: '',
    tilt45R: ''
  });
  const [generating, setGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleChange = (key: string, val: string) => {
    setTexts(prev => ({ ...prev, [key]: val.toUpperCase() }));
  };

  const handleOpenImage = async () => {
    if (!cardRef.current) return;
    setGenerating(true);
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      });
      
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(`
          <body style="margin:0; background:#f0f0f7; display:flex; align-items:center; justify-content:center; min-height:100vh;">
            <img src="${dataUrl}" style="max-width:100%; height:auto; box-shadow:0 20px 50px rgba(0,0,0,0.1); border-radius:20px;" />
          </body>
        `);
        newTab.document.title = "Generated Secret Message";
        newTab.document.close();
      }
    } catch (err) {
      console.error('Failed to generate image:', err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f0f7] text-slate-900 font-sans p-4 md:p-12 overflow-x-hidden">
      <main className="relative z-10 max-w-5xl mx-auto">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl rotate-3">
              <Type size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black italic tracking-tighter text-slate-900">
                SECRET.MINIMAL
              </h1>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em]">Pure Anamorphic Export</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
                <Layers size={14} /> Message Layers
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Vertical (0°)</label>
                  <input 
                    type="text" value={texts.tilt0} placeholder="TYPE HERE..."
                    onChange={e => handleChange('tilt0', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Diagonal Left (45°L)</label>
                  <input 
                    type="text" value={texts.tilt45L} placeholder="TYPE HERE..."
                    onChange={e => handleChange('tilt45L', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Diagonal Right (45°R)</label>
                  <input 
                    type="text" value={texts.tilt45R} placeholder="TYPE HERE..."
                    onChange={e => handleChange('tilt45R', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all font-bold text-slate-900"
                  />
                </div>
              </div>

              <button 
                onClick={handleOpenImage}
                disabled={generating}
                className="w-full mt-10 bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm uppercase italic tracking-tighter shadow-lg active:scale-95 disabled:opacity-50"
              >
                 {generating ? <RefreshCw className="animate-spin" size={18} /> : <ExternalLink size={18} />} 
                 Generate & Open
              </button>
            </div>
          </div>

          {/* Clean Result Square */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div className="p-4 bg-white rounded-[2rem] shadow-2xl inline-block overflow-hidden">
              <div 
                ref={cardRef} 
                className="bg-white relative flex items-center justify-center border-0 overflow-hidden" 
                style={{ width: '500px', height: '500px' }}
              >
                {/* THE ENCRYPTION CORE - Reduced stretch to fit square */}
                <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                  {/* Layer 1: Vertical */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-black font-serif font-black"
                    style={{ 
                      fontSize: '8rem', 
                      transform: 'scaleY(8) scaleX(0.12)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {texts.tilt0}
                  </div>

                  {/* Layer 2: 45L */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-black font-serif font-black"
                    style={{ 
                      fontSize: '6rem', 
                      transform: 'rotate(-45deg) scaleY(6) scaleX(0.08)',
                      letterSpacing: '-0.05em'
                    }}
                  >
                    {texts.tilt45L}
                  </div>

                  {/* Layer 3: 45R */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-black font-serif font-black"
                    style={{ 
                      fontSize: '6rem', 
                      transform: 'rotate(45deg) scaleY(6) scaleX(0.08)',
                      letterSpacing: '-0.05em'
                    }}
                  >
                    {texts.tilt45R}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-900 rounded-[2rem] text-slate-400 text-xs italic leading-relaxed border border-white/5 max-w-md text-center">
              "Input is automatically converted to UPPERCASE. The result square above is exactly what will be exported—no extra labels or borders."
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
