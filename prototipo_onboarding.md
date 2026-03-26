# Protótipo de Onboarding: "Simplicidade Mágica" 
**Público-Alvo:** Crianças de 10 anos focadas em Colégios Militares.
**Objetivo:** Zero atrito, fluxo autônomo, divertido e engajador.

## 1. Tela de Boas-Vindas
* **Visual:** Fundo com elementos sutis do universo militar (bússola, estrela dourada), cores vibrantes (Laranja/Dourado e Azul Marinho).
* **Texto em tela (Fonte Grande/Arredondada):** "Bem-vindo(a) à sua Nova Missão!"
* **Áudio Tocado (Voz Alloy Vibrante):** *"Olá recruta! Você está prestes a começar o desafio mais incrível do ano. Vamos descobrir qual é a sua missão?"*
* **Ação:** Um único botão gigante e pulsante: **[ INICIAR MISSÃO 🚀 ]**

## 2. Seleção de Objetivo (Bancas/Matérias)
* **Visual:** Cards grandes com escudos militares e avatares (ao invés de texto chato).
* **Texto em tela:** "Escolha o seu alvo:"
* **Cards:**
  * 🛡️ Colégio Militar
  * 🗡️ Colégio Pedro II
  * 📚 FAETEC
* **Ação:** A criança clica no escudo do **Colégio Militar**.
* **Micro-animação:** O escudo gira e emite um som de conquista (um "ding" satisfatório).

## 3. Tela de Cadastro Rápido (O Diário de Bordo)
* **Visual:** Estilo formulário de "agente secreto" com apenas 3 campos. Pede o mínimo possível para começar a jogar.
* **Campos:**
  * Nome do Agente (Como você quer ser chamado?)
  * Idade
  * Contato do seu Comandante (WhatsApp do Responsável - mascara automática)
* **Ação:** Botão **[ AVANÇAR ]** fica verde apenas quando preenchido.

## 4. O Teste de Nivelamento (Diagnóstico)
* **Transição:** Tela escura que abre como a lente de uma câmera.
* **Áudio Tocado:** *"Atenção! Sua primeira missão oficial começou. Responda com cuidado, não há problema se não souber a resposta. Estamos aqui para treinar!"*
* **Interface da Questão:**
  * Uma única questão por tela.
  * Texto gigante da pergunta.
  * Botão **[ 🔊 Ouvir Missão ]** (Toca o TTS da questão com a voz da IA).
  * 4 Alternativas em botões grandes e largos. Barra de progresso visível no topo da tela.

## 5. Paywall / Recuperação de Responsável
* **Visual (Para o Aluno):** "Você completou a missão inicial! Seu relatório está trancado."
* **Visual (Para o Responsável):** A página automaticamente transita para uma linguagem formal e séria, apresentando o método.
* **Texto:** "Identificamos o potencial do seu(sua) filho(a). Desbloqueie o relatório completo e o plano de estudos focado no Colégio Militar."
* **Ação:** Pagamento via Pix com timer de Urgência (Promoção).
* **Gatilho de Fallback (Backend):** Se não converter em 24h, enviar `{nome_pai, numero}` via webhook para o robô conversacional (Agente Vendas) no WhatsApp.
