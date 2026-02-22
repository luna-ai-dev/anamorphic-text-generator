"use client";

import React, { useState, useRef } from 'react';
import { Type, Layers, ExternalLink, RefreshCw } from 'lucide-react';
import * as htmlToImage from 'html-to-image';

export default function AnamorphicTextGenerator() {
  const [texts, setTexts] = useState({
    tilt0: 'I LOVE',
    tilt45L: 'MY',
    tilt45R: 'JOB'
  });
  const [generating, setGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleChange = (key: string, val: string) => {
    setTexts(prev => ({ ...prev, [key]: val }));
  };

  const handleOpenImage = async () => {
    if (!cardRef.current) return;
    setGenerating(true);
    try {
      // Create a dedicated wrapper to ensure the capture is clean
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      });
      
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(`
          <body style="margin:0; background:#f0f0f7; display:flex; align-items:center; justify-center; min-height:100vh;">
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
                SECRET.IMAGE
              </h1>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em]">Exportable Multi-Axis Anamorphics</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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

              <button 
                onClick={handleOpenImage}
                disabled={generating}
                className="w-full mt-10 bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm uppercase italic tracking-tighter shadow-lg active:scale-95 disabled:opacity-50"
              >
                 {generating ? <RefreshCw className="animate-spin" size={18} /> : <ExternalLink size={18} />} 
                 Open as Image
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="p-4 bg-white rounded-[3.5rem] shadow-2xl inline-block w-full">
              <div ref={cardRef} className="bg-white rounded-[3rem] p-12 relative overflow-hidden aspect-[3/4] flex flex-col items-center justify-center border-0" style={{ width: '100%' }}>
                <div className="absolute top-10 w-full text-center">
                  <p className="text-[#a03050] font-serif text-2xl font-medium">A secret message for you today...</p>
                </div>

                <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-black font-serif font-black"
                    style={{ 
                      fontSize: '14rem', 
                      transform: 'scaleY(16) scaleX(0.06)',
                      letterSpacing: '-0.05em'
                    }}
                  >
                    {texts.tilt0}
                  </div>

                  <div 
                    className="absolute inset-0 flex items-center justify-center text-black font-serif font-black"
                    style={{ 
                      fontSize: '11rem', 
                      transform: 'rotate(-45deg) scaleY(14) scaleX(0.04)',
                      letterSpacing: '-0.1em'
                    }}
                  >
                    {texts.tilt45L}
                  </div>

                  <div 
                    className="absolute inset-0 flex items-center justify-center text-black font-serif font-black"
                    style={{ 
                      fontSize: '11rem', 
                      transform: 'rotate(45deg) scaleY(14) scaleX(0.04)',
                      letterSpacing: '-0.1em'
                    }}
                  >
                    {texts.tilt45R}
                  </div>
                </div>

                <div className="absolute bottom-10 w-full px-12 text-center">
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-[240px] mx-auto uppercase tracking-tighter">
                    Instruction: Hold card at a 5 degree angle from the horizontal... look in the 3 directions...
                  </p>
                </div>

                <div className="absolute inset-4 border-4 border-[#101040] pointer-events-none rounded-[2.2rem]" />
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-900 rounded-[2rem] text-slate-400 text-xs italic leading-relaxed border border-white/5">
              "Click 'Open as Image' to generate a high-res PNG file. This renders the hidden text into a flat image you can share."
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
