#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

const VERSION = "2.1.0";

console.log(`\n🚀 Antigravity Kit v${VERSION} - Instanciado no Workspace!\n`);

function showHelp() {
  console.log(`Uso padrão: ag-kit <comando>\n`);
  console.log(`Comandos disponíveis:`);
  console.log(`  init-squad        - Prepara a pasta atual com o sub-sistema (.agents) base.`);
  console.log(`  security-check    - Invoca os lembretes de RLS e instrução para acionar a Skill universal.`);
  console.log(`  version           - Mostra a versão atualmente instalada em sua máquina.`);
  console.log(`  help              - Mostra esta tela de ajuda.\n`);
}

switch(command) {
  case 'version':
  case '-v':
  case '--version':
    break;

  case 'init-squad':
    console.log('⚙️ Inicializando infraestrutura estendida de agentes para nova Squad...');
    const agentsDir = path.join(process.cwd(), '.agents');
    const workflowsDir = path.join(agentsDir, 'workflows');
    const skillsDir = path.join(agentsDir, 'skills');

    let created = false;
    [agentsDir, workflowsDir, skillsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        created = true;
      }
    });
    
    if(created) {
      console.log('✅ Diretórios .agents, workflows e skills instanciados no projeto atual!');
      console.log('Seus agentes Antigravity/Claude Code agora têm raízes na Squad.\n');
    } else {
      console.log('✔️ A infraestrutura .agents já estava pronta nesta pasta.\n');
    }
    break;

  case 'security-check':
    console.log('🛡️ Radar de Segurança Global (RLS + Supabase + Codebase)\n');
    console.log('O Antigravity Agent gerencia auditorias proativas. Para varrer esta Squad atual');
    console.log('pelo terminal ou pelo Cursor, envie ao seu agente o comando:');
    console.log('\n👉 /revisao_seguranca\n');
    break;

  case 'help':
  default:
    if(command && command !== 'help') console.log(`❌ Comando "${command}" não reconhecido.\n`);
    showHelp();
    break;
}
