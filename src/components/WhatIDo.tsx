import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, BrainCircuit, LineChart, TrendingUp, Cpu, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

// Interfaces for Forex Simulator
interface Candle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  type: 'up' | 'down';
}

export default function WhatIDo() {
  // Forex Simulator State
  const [candles, setCandles] = useState<Candle[]>([]);
  const [tradeStatus, setTradeStatus] = useState<'IDLE' | 'ANALYZING' | 'POSITION_ENTERED' | 'TARGET_HIT' | 'STOP_LOSS'>('IDLE');
  const [pnl, setPnl] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'software' | 'ai' | 'entrepreneurship' | 'forex'>('software');
  
  // Waveform state
  const [waveActive, setWaveActive] = useState(false);
  const [waveformBars, setWaveformBars] = useState<number[]>(Array(16).fill(15));
  const waveTimer = useRef<NodeJS.Timeout | null>(null);

  // Forex simulation candlestick generation
  useEffect(() => {
    // Generate initial 8 candles
    let currentPrice = 1.0850;
    const initialCandles: Candle[] = [];
    for (let i = 0; i < 10; i++) {
      const isUp = Math.random() > 0.45;
      const change = parseFloat((Math.random() * 0.0008).toFixed(5));
      const open = currentPrice;
      const close = isUp ? open + change : open - change;
      const high = Math.max(open, close) + parseFloat((Math.random() * 0.0003).toFixed(5));
      const low = Math.min(open, close) - parseFloat((Math.random() * 0.0003).toFixed(5));
      initialCandles.push({
        time: `${15 + i}:00`,
        open,
        high,
        low,
        close,
        type: isUp ? 'up' : 'down',
      });
      currentPrice = close;
    }
    setCandles(initialCandles);
  }, []);

  // Forex Simulating Action
  const triggerForexSimulation = () => {
    if (tradeStatus !== 'IDLE') return;

    setTradeStatus('ANALYZING');
    
    // Step 1: Analyzing (1.5s)
    setTimeout(() => {
      setTradeStatus('POSITION_ENTERED');
      
      // Add a trade entry candle
      setCandles((prev) => {
        const last = prev[prev.length - 1];
        const open = last.close;
        const close = open + 0.0006; // Scalping long entry
        return [
          ...prev.slice(1),
          {
            time: 'ENTRY',
            open,
            high: open + 0.0009,
            low: open - 0.0002,
            close,
            type: 'up'
          }
        ];
      });

      // Step 2: Target Hit or Stop Loss (2s)
      setTimeout(() => {
        const win = Math.random() > 0.3; // 70% win-rate for disciplined scalper
        if (win) {
          setTradeStatus('TARGET_HIT');
          setPnl((prev) => prev + 15.5);
          setCandles((prev) => {
            const last = prev[prev.length - 1];
            const open = last.close;
            const close = open + 0.0012; // strong upward breakout
            return [
              ...prev.slice(1),
              {
                time: 'TP_HIT',
                open,
                high: open + 0.0015,
                low: open - 0.0001,
                close,
                type: 'up'
              }
            ];
          });
        } else {
          setTradeStatus('STOP_LOSS');
          setPnl((prev) => prev - 8.0);
          setCandles((prev) => {
            const last = prev[prev.length - 1];
            const open = last.close;
            const close = open - 0.0007; // small calculated stop loss triggered
            return [
              ...prev.slice(1),
              {
                time: 'SL_HIT',
                open,
                high: open + 0.0002,
                low: open - 0.0009,
                close,
                type: 'down'
              }
            ];
          });
        }

        // Reset to IDLE after showing result
        setTimeout(() => {
          setTradeStatus('IDLE');
        }, 3000);
      }, 2000);
    }, 1500);
  };

  // Waveform stimulation
  useEffect(() => {
    if (waveActive) {
      waveTimer.current = setInterval(() => {
        setWaveformBars(Array(16).fill(0).map(() => Math.floor(Math.random() * 45) + 10));
      }, 100);
    } else {
      if (waveTimer.current) clearInterval(waveTimer.current);
      setWaveformBars(Array(16).fill(15));
    }
    return () => {
      if (waveTimer.current) clearInterval(waveTimer.current);
    };
  }, [waveActive]);

  const toggleVoiceWave = () => {
    setWaveActive(!waveActive);
    if (!waveActive) {
      setTimeout(() => setWaveActive(false), 5000); // auto stop after 5s
    }
  };

  return (
    <section id="what-i-do" className="py-24 bg-white dark:bg-[#050508] border-t border-zinc-200 dark:border-zinc-900/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3">// AREAS OF EXPERTISE</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-black dark:text-white">
              What I Do
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm md:text-base max-w-md">
            I write robust system solutions, design embedded AI frameworks, structure business scalability models, and master volatile market metrics.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-zinc-200 dark:border-zinc-900 pb-4">
          <button
            onClick={() => setActiveTab('software')}
            className={`px-5 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all cursor-pointer ${
              activeTab === 'software'
                ? 'bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white font-semibold'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
            }`}
          >
            01. SOFTWARE ENGINEERING
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-5 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white font-semibold'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
            }`}
          >
            02. ARTIFICIAL INTELLIGENCE
          </button>
          <button
            onClick={() => setActiveTab('entrepreneurship')}
            className={`px-5 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all cursor-pointer ${
              activeTab === 'entrepreneurship'
                ? 'bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white font-semibold'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
            }`}
          >
            03. ENTREPRENEURSHIP
          </button>
          <button
            onClick={() => setActiveTab('forex')}
            className={`px-5 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all cursor-pointer ${
              activeTab === 'forex'
                ? 'bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white font-semibold'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
            }`}
          >
            04. FOREX TRADING
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[480px]">
          
          {/* Active Tab Text Narrative (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-xl bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900/80">
            <div>
              <AnimatePresence mode="wait">
                {activeTab === 'software' && (
                  <motion.div
                    key="software"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 shadow-xs">
                      <Code2 className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-black dark:text-white mb-4">
                      Systems-Level Software Architecture
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                      I build clean, robust applications and digital backend systems. Understanding how memory allocation, hardware bindings, and networks coordinate is fundamental to writing stable software.
                    </p>
                    <ul className="space-y-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        SYSTEM ARCHITECTURE & SYSTEM SCHEMAS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        ROBUST AUTOMATION SCRIPTS & CRON JOBS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        VOICE INFRASTRUCTURES & CLIENT PIPELINES
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        ENTERPRISE CLOUD DEPLOYMENTS
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 shadow-xs">
                      <BrainCircuit className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-black dark:text-white mb-4">
                      Conversational AI & Embedded Nodes
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                      My primary interest is speech recognition, voice tech, local AI setups, and prompt optimization. AI must run cleanly and efficiently, even on lower-end local server hardware.
                    </p>
                    <ul className="space-y-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        CONVERSATIONAL DIALOG SYSTEM PIPELINES
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        SPEECH-TO-TEXT & AUDIO INTENT LOGIC
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        LOCAL MODEL EXECUTIONS & EDGE SERVERS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        HIGH CONTEXT PROMPT ARCHITECTURES
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'entrepreneurship' && (
                  <motion.div
                    key="entrepreneur"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 shadow-xs">
                      <Sparkles className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-black dark:text-white mb-4">
                      Venture Creation & Market Scalability
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                      Every code segment represents a potential business solution. Evaluating scalability, local market viability, and building resilient organizations is the foundation of Void Enterprises.
                    </p>
                    <ul className="space-y-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        MARKET FIT VALIDATIONS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        LONG-TERM ORGANIZATIONAL ROADMAPPING
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        SUSTAINABILITY & REVENUE MODELING
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        REGIONAL TECH INFRASTRUCTURE BUILDING
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'forex' && (
                  <motion.div
                    key="forex"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 shadow-xs">
                      <LineChart className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-black dark:text-white mb-4">
                      Forex Scalping & Risk Matrix
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                      Trading highly volatile FX pairs has structured my discipline, decision-making velocity, patience, and visual data recognition. I apply these exact risk controls to building scalable technical software.
                    </p>
                    <ul className="space-y-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        STRICT POSITION SIZE & RISK CALCULATIONS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        SCALPING EXECUTION ON INTRADAY BREAKOUTS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        STATISTICAL EDGE & BACKTESTING MATRIX
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                        PATIENCE OVER AGGRESSION PRINCIPLE
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-900 text-[11px] font-mono text-zinc-400 dark:text-zinc-600 flex items-center justify-between">
              <span>SECTION_03 // ACTIONABLES</span>
              <span>LOCKED // REVENUE_ORIENTED</span>
            </div>
          </div>

          {/* Interactive Graphic Widgets (Right 7 cols) */}
          <div className="lg:col-span-7 rounded-xl bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900/80 overflow-hidden flex flex-col justify-center items-center p-6 relative min-h-[350px]">
            <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-400 dark:text-zinc-600 tracking-wider uppercase">
              // ACTIVE INTEGRATION VISUALIZER
            </div>

            {/* Content for Software Tab */}
            {activeTab === 'software' && (
              <div className="w-full h-full flex flex-col justify-center items-center py-6">
                <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-lg p-5 border border-zinc-200 dark:border-zinc-900 font-mono text-xs text-black dark:text-white space-y-3 relative overflow-hidden shadow-xs">
                  <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2 text-[10px] text-zinc-400 dark:text-zinc-500">
                    <span>SYSTEM_TERMINAL.sh</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-bold">SYS_OK // 200</span>
                  </div>
                  <div className="space-y-1.5 text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
                    <p className="text-zinc-400 dark:text-zinc-600"># Initializing modular system components...</p>
                    <p className="text-black dark:text-zinc-200 font-semibold">$ import &#123; createServer &#125; from "vella-voice-engine";</p>
                    <p className="text-black dark:text-zinc-200 font-semibold">$ const core = createServer(&#123; port: 3000 &#125;);</p>
                    <p className="text-zinc-400 dark:text-zinc-600"># Mounting cognitive router and hardware triggers...</p>
                    <p className="text-zinc-800 dark:text-zinc-300 font-medium">✓ [Active Router] mapped successfully.</p>
                    <p className="text-zinc-800 dark:text-zinc-300 font-medium">✓ [RPi zero 2W audio core] linked.</p>
                    <p className="text-zinc-800 dark:text-zinc-300 font-medium">✓ [Web3Forms Email dispatcher] registered.</p>
                    <p className="text-zinc-400 dark:text-zinc-600"># System status metrics:</p>
                    <div className="flex gap-4 pt-1 font-mono text-[10px]">
                      <div>CPU: <span className="text-black dark:text-white font-semibold">4.2%</span></div>
                      <div>RAM: <span className="text-black dark:text-white font-semibold">124MB</span></div>
                      <div>LATENCY: <span className="text-black dark:text-white font-semibold">14ms</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content for AI Tab */}
            {activeTab === 'ai' && (
              <div className="w-full h-full flex flex-col justify-center items-center py-6">
                <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 mb-6 uppercase text-center">
                  VOICE PROCESSING NODE WAVEFORM (VELLA ENGINE)
                </p>
                
                {/* Audio Waveform */}
                <div className="flex items-end justify-center gap-1.5 h-24 mb-6 px-4">
                  {waveformBars.map((barHeight, idx) => (
                    <motion.div
                       key={idx}
                       animate={{ height: barHeight }}
                       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                       className="w-2.5 rounded-xs bg-black dark:bg-white"
                       style={{ height: '15px' }}
                    />
                  ))}
                </div>

                <button
                  onClick={toggleVoiceWave}
                  className={`px-5 py-2.5 rounded-lg font-mono text-xs flex items-center gap-2 border transition-all cursor-pointer ${
                    waveActive 
                    ? 'bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white border-black dark:border-white' 
                    : 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-zinc-800 dark:hover:bg-zinc-200'
                  }`}
                >
                  <Volume2 className={`w-4 h-4 ${waveActive ? 'animate-bounce' : ''}`} />
                  {waveActive ? 'LISTENING / SAMPLING...' : 'SIMULATE VELLA VOICE TRIGGER'}
                </button>
              </div>
            )}

            {/* Content for Entrepreneurship Tab */}
            {activeTab === 'entrepreneurship' && (
              <div className="w-full h-full flex flex-col justify-center items-center p-4">
                <div className="w-full max-w-sm bg-white dark:bg-zinc-950 rounded-xl p-6 border border-zinc-200 dark:border-zinc-900 text-center relative overflow-hidden shadow-xs">
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 text-[9px] font-mono">
                    <CheckCircle2 className="w-2.5 h-2.5 text-black dark:text-white" />
                    VIABLE
                  </div>
                  <h4 className="font-display text-black dark:text-white text-base font-semibold mb-2">Void Enterprise Framework</h4>
                  <p className="text-zinc-400 dark:text-zinc-600 text-xs font-mono mb-4">LONG-TERM SUSTAINABILITY MATRIX</p>
                  
                  <div className="space-y-3.5 text-left font-mono text-xs">
                    <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded border border-zinc-200 dark:border-zinc-800">
                      <span className="text-zinc-500 dark:text-zinc-400">01. VALUE METRIC</span>
                      <span className="text-black dark:text-white font-bold">HIGH LOCAL UTILITY</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded border border-zinc-200 dark:border-zinc-800">
                      <span className="text-zinc-500 dark:text-zinc-400">02. SCALABILITY</span>
                      <span className="text-black dark:text-white font-bold">AFRICA REGIONAL MODEL</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded border border-zinc-200 dark:border-zinc-800">
                      <span className="text-zinc-500 dark:text-zinc-400">03. SUSTAINABILITY</span>
                      <span className="text-black dark:text-white font-bold">CASHFLOW OPTIMIZED</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content for Forex Tab */}
            {activeTab === 'forex' && (
              <div className="w-full h-full flex flex-col justify-center items-center py-4 px-2">
                <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-xl p-5 border border-zinc-200 dark:border-zinc-900 relative shadow-xs">
                  {/* Chart header info */}
                  <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-900 pb-3 mb-4 font-mono text-[10px]">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-black dark:text-white w-4 h-4" />
                      <span className="text-black dark:text-white font-bold">XAUUSD.m // 1M SCALPER</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-400">SPREAD: <span className="text-zinc-800 dark:text-zinc-300 font-semibold">0.4 Pips</span></span>
                      <span className="text-zinc-400">PNL: <span className="text-black dark:text-white font-bold">{pnl >= 0 ? `+$${pnl}` : `-$${Math.abs(pnl)}`}</span></span>
                    </div>
                  </div>

                  {/* Simulated Candle sticks graph */}
                  <div className="h-32 flex items-end justify-between gap-1 pb-2 border-b border-zinc-200 dark:border-zinc-900 relative">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                      <div className="w-full border-t border-dashed border-zinc-400 dark:border-zinc-600 h-0" />
                      <div className="w-full border-t border-dashed border-zinc-400 dark:border-zinc-600 h-0" />
                      <div className="w-full border-t border-dashed border-zinc-400 dark:border-zinc-600 h-0" />
                    </div>

                    {candles.map((candle, idx) => {
                      const maxBody = Math.max(candle.open, candle.close);
                      const minBody = Math.min(candle.open, candle.close);
                      const isUp = candle.type === 'up';

                      // Scale heights to look reasonable in our container
                      const minRate = 1.0840;
                      const maxRate = 1.0875;
                      const scale = (val: number) => {
                        const clamped = Math.max(minRate, Math.min(maxRate, val));
                        return ((clamped - minRate) / (maxRate - minRate)) * 100;
                      };

                      const bodyTop = scale(maxBody);
                      const bodyBottom = scale(minBody);
                      const bodyHeight = Math.max(3, bodyTop - bodyBottom);
                      const wickTop = scale(candle.high);
                      const wickBottom = scale(candle.low);
                      const wickHeight = Math.max(5, wickTop - wickBottom);

                      return (
                        <div key={idx} className="flex-grow flex flex-col items-center h-full relative" style={{ minWidth: '10px' }}>
                          {/* Candle wick */}
                          <div 
                            className="absolute w-[1px] bg-black dark:bg-zinc-400" 
                            style={{ 
                              bottom: `${wickBottom}%`, 
                              height: `${wickHeight}%` 
                            }} 
                          />
                          {/* Candle body */}
                          <div 
                            className={`absolute w-3 rounded-xs border border-black dark:border-zinc-400 ${isUp ? 'bg-black dark:bg-zinc-400' : 'bg-white dark:bg-zinc-950'}`} 
                            style={{ 
                              bottom: `${bodyBottom}%`, 
                              height: `${bodyHeight}%` 
                            }} 
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Simulator Controls & Status */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col font-mono text-[10px]">
                      <span className="text-zinc-400">SIMULATOR_STATE:</span>
                      <span className="font-semibold text-black dark:text-white">
                        {tradeStatus}
                      </span>
                    </div>

                    <button
                      onClick={triggerForexSimulation}
                      disabled={tradeStatus !== 'IDLE'}
                      className={`px-4 py-2 rounded font-mono text-[10px] uppercase font-bold tracking-wider transition-all border cursor-pointer ${
                        tradeStatus !== 'IDLE'
                          ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 border-zinc-200 dark:border-zinc-800'
                          : 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-zinc-800 dark:hover:bg-zinc-200'
                      }`}
                    >
                      {tradeStatus === 'IDLE' ? 'Run Scalp Test' : 'Analyzing Market...'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
