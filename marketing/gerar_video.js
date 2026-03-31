const { execSync } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('marketing/video_out')) fs.mkdirSync('marketing/video_out', { recursive: true });

const FONT       = 'C\\:/Windows/Fonts/arialbd.ttf';
const FONT_LIGHT = 'C\\:/Windows/Fonts/arial.ttf';
const W    = 1080;
const H    = 1920;
const FPS  = 30;
const AUDIO = 'marketing/audio_finais/criativo_03_Universal_Brian.mp3';

// Paleta da marca
const BG    = '0x0F172A';
const BLUE  = '0x4FA5FF';
const GOLD  = '0xD4AF37';
const GREEN = '0x10B981';
const WHITE = '0xF8FAFC';
const SLATE = '0x94A3B8';
const RED   = '0xEF4444';

const segments = [
  // [0-8s] GANCHO filosofico
  {
    t: 'text', dur: 8, bg: '0x000000',
    lines: [
      { txt: 'Tem gente que estuda', y: 700,  size: 68, color: WHITE, bold: true  },
      { txt: '8 horas por dia',      y: 795,  size: 84, color: GOLD,  bold: true  },
      { txt: 'e reprova.',           y: 900,  size: 68, color: WHITE, bold: true  },
      { txt: 'A diferenca nao e',    y: 1080, size: 58, color: SLATE, bold: false },
      { txt: 'esforcgo.',            y: 1155, size: 58, color: SLATE, bold: false },
      { txt: 'E DIRECAO.',           y: 1265, size: 90, color: BLUE,  bold: true  },
    ]
  },
  // [8-20s] PROBLEMA - tela diagnostico
  {
    t: 'img', dur: 12, src: 'marketing/screenshots/mobile_02_diagnostico.png',
    top: [
      { txt: 'O CANDIDATO MEDIO',      y: 55,  size: 52, color: RED,   bold: true  },
      { txt: 'estuda o que e facil.',   y: 120, size: 44, color: WHITE, bold: false },
    ],
    bot: [
      { txt: 'Chega na prova sem tocar', y: 1720, size: 44, color: WHITE, bold: false },
      { txt: 'no que mais cai.',         y: 1785, size: 48, color: GOLD,  bold: true  },
    ]
  },
  // [20-35s] SOLUCAO - rota PMERJ
  {
    t: 'img', dur: 15, src: 'marketing/screenshots/mobile_03_rota_pmerj.png',
    top: [
      { txt: 'METODO DO PAI 360',      y: 55,  size: 50, color: GOLD,  bold: true  },
      { txt: 'Comeca de onde VOCE',    y: 120, size: 44, color: WHITE, bold: false },
      { txt: 'esta.',                  y: 175, size: 44, color: BLUE,  bold: true  },
    ],
    bot: [
      { txt: '10 questoes. Diagnostico real.', y: 1680, size: 42, color: WHITE, bold: false },
      { txt: 'Rota personalizada.',            y: 1738, size: 42, color: WHITE, bold: false },
      { txt: 'Sem achismo.',                   y: 1808, size: 54, color: GREEN, bold: true  },
    ]
  },
  // [35-50s] PARA QUEM E - catalogo
  {
    t: 'img', dur: 15, src: 'marketing/screenshots/mobile_01_catalogo.png',
    top: [
      { txt: 'PARA QUEM E?', y: 55, size: 58, color: GOLD, bold: true },
    ],
    bot: [
      { txt: 'PMERJ - INSS - PF - PRF',  y: 1650, size: 44, color: WHITE, bold: true  },
      { txt: 'BB - Caixa - Correios',    y: 1708, size: 44, color: WHITE, bold: false },
      { txt: 'Exercito - Aeronautica',   y: 1766, size: 44, color: WHITE, bold: false },
      { txt: 'e muito mais.',            y: 1836, size: 50, color: BLUE,  bold: true  },
    ]
  },
  // [50-65s] CONVITE intimo
  {
    t: 'text', dur: 15, bg: '0x080E1A',
    lines: [
      { txt: 'Nao estou te vendendo', y: 650,  size: 62, color: WHITE, bold: false },
      { txt: 'nada agora.',           y: 730,  size: 62, color: WHITE, bold: false },
      { txt: 'Estou te convidando',   y: 890,  size: 56, color: SLATE, bold: false },
      { txt: 'para ver onde',         y: 960,  size: 56, color: SLATE, bold: false },
      { txt: 'voce esta.',            y: 1030, size: 56, color: SLATE, bold: false },
      { txt: 'O diagnostico',         y: 1200, size: 56, color: WHITE, bold: false },
      { txt: 'e GRATUITO.',           y: 1280, size: 80, color: GREEN, bold: true  },
    ]
  },
  // [65-72s] CTA
  {
    t: 'text', dur: 7, bg: '0x0F172A',
    lines: [
      { txt: 'FAZER MEU',          y: 670,  size: 84, color: GOLD,  bold: true  },
      { txt: 'DIAGNOSTICO',        y: 775,  size: 84, color: GOLD,  bold: true  },
      { txt: 'AGORA',              y: 880,  size: 84, color: GOLD,  bold: true  },
      { txt: 'Link na bio.',       y: 1080, size: 60, color: WHITE, bold: false },
      { txt: '10 minutos.',        y: 1158, size: 60, color: WHITE, bold: false },
      { txt: 'Resultado na hora.', y: 1250, size: 60, color: BLUE,  bold: true  },
    ]
  },
];

function esc(t) {
  // Remove acentos para evitar encoding issues no drawtext
  return t
    .replace(/[áàâã]/g, 'a').replace(/[éêè]/g, 'e').replace(/[íî]/g, 'i')
    .replace(/[óôõò]/g, 'o').replace(/[úû]/g, 'u').replace(/[ç]/g, 'c')
    .replace(/[ÁÀÂÃ]/g, 'A').replace(/[ÉÊÈ]/g, 'E').replace(/[ÍÎ]/g, 'I')
    .replace(/[ÓÔÕÒ]/g, 'O').replace(/[ÚÛ]/g, 'U').replace(/[Ç]/g, 'C')
    .replace(/'/g, "").replace(/:/g, '\\:');
}

function dt(lines) {
  return lines.map(l => {
    const f = l.bold ? FONT : FONT_LIGHT;
    return `drawtext=fontfile='${f}':text='${esc(l.txt)}':fontsize=${l.size}:fontcolor=${l.color}:x=(w-text_w)/2:y=${l.y}:alpha='min(t*3\\,1)'`;
  }).join(',');
}

function buildSegment(seg, idx) {
  const out = `marketing/video_out/seg_${String(idx).padStart(2,'0')}.mp4`;

  let cmd;
  if (seg.t === 'text') {
    const filters = dt(seg.lines);
    cmd = `ffmpeg -y -f lavfi -i color=c=${seg.bg}:size=${W}x${H}:rate=${FPS}:duration=${seg.dur} `
        + `-vf "${filters}" `
        + `-c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p "${out}"`;
  } else {
    const topF  = seg.top  ? [
      `drawbox=x=0:y=0:w=iw:h=270:color=0x0F172A@0.88:t=fill`,
      dt(seg.top)
    ] : [];
    const botF  = seg.bot  ? [
      `drawbox=x=0:y=1600:w=iw:h=320:color=0x0F172A@0.92:t=fill`,
      dt(seg.bot)
    ] : [];
    const allF  = [...topF, ...botF].filter(Boolean).join(',');

    cmd = `ffmpeg -y -loop 1 -t ${seg.dur} -i "${seg.src}" `
        + `-vf "scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},${allF}" `
        + `-c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p "${out}"`;
  }

  console.log(`  Renderizando seg ${idx} (${seg.dur}s)...`);
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`  ✅ seg_${String(idx).padStart(2,'0')}.mp4`);
    return out;
  } catch(e) {
    const err = e.stderr ? e.stderr.toString().slice(-400) : e.message;
    console.log(`  ❌ seg ${idx} falhou:`, err);
    return null;
  }
}

console.log('🎬 Iniciando renderização...\n');
const segsOk = segments.map((s, i) => buildSegment(s, i)).filter(Boolean);

if (segsOk.length === 0) {
  console.log('❌ Nenhum segmento gerado. Abortando.');
  process.exit(1);
}

// Concat
const listPath = 'marketing/video_out/concat.txt';
fs.writeFileSync(listPath, segsOk.map(f => `file '${f.replace(/\\/g,'/')}'`).join('\n'));

console.log('\nConcatenando segmentos...');
execSync(
  `ffmpeg -y -f concat -safe 0 -i "${listPath}" -c copy marketing/video_out/sem_audio.mp4`,
  { stdio: 'pipe' }
);
console.log('✅ Concatenado.');

console.log('Mixando audio...');
execSync(
  `ffmpeg -y -i marketing/video_out/sem_audio.mp4 -i "${AUDIO}" `
  + `-map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest `
  + `marketing/video_out/criativo_03_Universal_FINAL.mp4`,
  { stdio: 'pipe' }
);

const stats = fs.statSync('marketing/video_out/criativo_03_Universal_FINAL.mp4');
console.log('\n🎬 PRONTO: marketing/video_out/criativo_03_Universal_FINAL.mp4');
console.log(`📦 Tamanho: ${(stats.size/1024/1024).toFixed(1)} MB`);
console.log(`⏱️  Duracao: ~72 segundos`);
console.log(`📐 Formato: ${W}x${H} (9:16 - TikTok/Reels)`);
