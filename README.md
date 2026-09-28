# API 1° Semestre ADS

# DevDogs

# 🎓 Portal de Certificação em Metodologias Ágeis

Este projeto consiste em uma plataforma web desenvolvida como o desafio integrador do curso de **Desenvolvimento de Software Multiplataforma**. O objetivo do sistema é auxiliar estudantes a consolidarem conceitos de Scrum e Engenharia de Software Moderna através de um portal que oferece simulados cronometrados e uma área de estudos dedicada.

## 📝 O Desafio e Regras de Negócio

O portal avalia competências variadas divididas em **12 temas específicos** de metodologias ágeis. 

### Regras do Simulado:
* **Estrutura:** 12 questões por avaliação (1 questão selecionada aleatoriamente por tema, a partir de um banco de 4 questões por tema).
* **Formato:** Todas as questões são objetivas (4 alternativas, apenas 1 correta) e incluem uma imagem para análise.
* **Tempo Limite:** Cronômetro regressivo de **150 segundos** por questão. Estourar o tempo marca a questão como incorreta e exibe a resposta certa antes de avançar.
* **Certificação:** Candidatos com aproveitamento **≥ 65%** recebem um certificado eletrônico com nota final e validação via **QR Code**.
* **Histórico:** Todas as tentativas ficam salvas no perfil do candidato, independente do resultado.

---

## 💻 Tecnologias e Ferramentas Utilizadas

O projeto integra os conhecimentos do semestre abordando do design à infraestrutura:

* **Prototipagem & UI/UX:** Figma;
* **Front-end:** HTML, CSS, JavaScript;
* **Back-end:** Node.js;
* **Banco de Dados:** PostgreSQL;
* **Infraestrutura / DevOps:** Docker;
* **Metodologia de Trabalho:** Scrum

---

# 📋 Backlog Geral do Produto (Product Backlog)

Este backlog lista todas as histórias de usuário necessárias para construir o Portal de Certificação, organizadas por módulos funcionais e destacadas por nível de prioridade.

---

## 🔐 Módulo 1: Autenticação, Instruções e Segurança (LGPD)

### 🔹 US01 - Cadastro de Candidatos por CPF
*   **Prioridade:** `🔴 ALTA` | **Requisitos:** RF03, RNF03 (LGPD), RP04
*   **Como** candidato interessado na certificação,  
*   **Quero** me cadastrar informando meu CPF, nome completo, e-mail e senha,  
*   **Para** que meus dados fiquem salvos de forma segura e em conformidade com a LGPD.
*   **Critérios de Aceitação:**
    *   [ ] Front-end desenvolvido estritamente em HTML/CSS/JS puros, sem frameworks (`RP01`).
    *   [ ] O CPF deve ser validado e tratado como identificador único no banco PostgreSQL.

### 🔹 US02 - Login Exclusivo
*   **Prioridade:** `🔴 ALTA` | **Requisitos:** RF04
*   **Como** candidato cadastrado,  
*   **Quero** realizar o login utilizando exclusivamente meu CPF e senha,  
*   **Para** acessar com segurança a minha área restrita do portal.
*   **Critérios de Aceitação:**
    *   [ ] Bloquear o acesso a rotas internas caso o usuário não esteja autenticado via token/sessão no Back-end.

### 🔹 US03 - Tela Inicial e Instruções da Avaliação
*   **Prioridade:** `🔴 ALTA` | **Requisitos:** RF01, RF02
*   **Como** candidato autenticado,  
*   **Quero** visualizar uma tela inicial com a descrição detalhada, objetivos e instruções da certificação,  
*   **Para** entender o funcionamento das regras antes de escolher iniciar o exame ou retornar depois.
*   **Critérios de Aceitação:**
    *   [ ] Apresentar botão claro para "Iniciar Certificação" ou opção de "Sair/Retornar Depois".

---

## ⏱️ Módulo 2: O Motor da Certificação e Banco de Questões

### 🔹 US04 - Banco de Questões e Sorteio Aleatório por Tema
*   **Prioridade:** `🔴 ALTA` | **Requisitos:** RF05, RF06, RF15, RP04, RP06, RNF08
*   **Como** sistema,  
*   **Quero** selecionar aleatoriamente 1 única questão para cada um dos 12 temas a partir de um banco de 48 questões de alta qualidade (4 por tema),  
*   **Para** garantir que cada candidato faça uma prova dinâmica e que cada tema seja respondido apenas uma vez.
*   **Critérios de Aceitação:**
    *   [ ] As 48 questões devem possuir qualidade técnica, clareza e estar cadastradas via DML no PostgreSQL.

### 🔹 US05 - Interface Dinâmica da Questão
*   **Prioridade:** `🔴 ALTA` | **Requisitos:** RF08, RP04, RP06
*   **Como** candidato realizando a prova,  
*   **Quero** visualizar a questão atual com seu enunciado, uma imagem obrigatória de apoio e quatro alternativas de múltipla escolha (A, B, C, D),  
*   **Para** que eu possa analisar o cenário prático e marcar a única alternativa correta.
*   **Critérios de Aceitação:**
    *   [ ] A imagem deve carregar corretamente a partir do caminho/banco de dados em todas as questões.

### 🔹 US06 - Proteção contra Quedas, Fechamento e Fraudes
*   **Prioridade:** `🔴 ALTA` | **Requisitos:** RF14, RNF04
*   **Como** sistema,  
*   **Quero** invalidar e marcar a questão atual como incorreta imediatamente em caso de perda de conexão, fechamento do navegador ou tentativa de manipulação no front-end,  
*   **Para** garantir a integridade da nota e impedir alterações indevidas.
*   **Critérios de Aceitação:**
    *   [ ] Toda validação de acerto/erro e salvamento de estado devem ocorrer no servidor (Node.js), nunca no JavaScript do cliente.

### 🔹 US07 - Cronômetro de 150 segundos e Encerramento Automático
*   **Prioridade:** `🟡 MÉDIA` | **Requisitos:** RF10, RF11
*   **Como** candidato realizando a prova,  
*   **Quero** visualizar um cronômetro regressivo de 150 segundos ativo na tela,  
*   **Para** controlar meu tempo de resolução para cada questão.
*   **Critérios de Aceitação:**
    *   [ ] Ao zerar os 150s sem resposta enviada, a questão encerra automaticamente, computa como incorreta e exibe o feedback visual na tela.

### 🔹 US08 - Feedback Imediato e Controle de Pausa da Sessão
*   **Prioridade:** `🟡 MÉDIA` | **Requisitos:** RF09, RF11, RF12, RF13, RF21
*   **Como** candidato,  
*   **Quero** ver qual era a resposta correta logo após responder uma questão e escolher se avanço imediatamente ou se pauso a sessão,  
*   **Para** que eu possa acompanhar meu progresso (temas concluídos/pendentes) e retomar a prova depois de onde parei.
*   **Critérios de Aceitação:**
    *   [ ] O sistema deve salvar o estado exato da sessão do candidato no PostgreSQL após cada clique de avanço.

---

## 📖 Módulo 3: Área de Estudos e Trilha de Aprendizagem

### 🔹 US09 - Área de Estudos Preparatória
*   **Prioridade:** `🟡 MÉDIA` | **Requisitos:** RF07, RP07
*   **Como** candidato,  
*   **Quero** acessar um painel de estudos organizado exatamente pelos mesmos 12 temas da avaliação, contendo materiais didáticos e imagens,  
*   **Para** me capacitar e revisar os conceitos de Scrum e Engenharia de Software antes de iniciar o exame.
*   **Critérios de Aceitação:**
    *   [ ] Garantir coerência absoluta entre o conteúdo textual exibido na área de estudos e o banco de questões cadastrado.

---

## 🎓 Módulo 4: Resultados, Certificados e Auditoria

### 🔹 US10 - Cálculo Centralizado de Desempenho
*   **Prioridade:** `🔴 ALTA` | **Requisitos:** RF16, RNF04
*   **Como** sistema,  
*   **Quero** processar e calcular automaticamente a nota final e o percentual de acertos no Back-end assim que o 12º tema for concluído,  
*   **Para** evitar qualquer tipo de fraude ou alteração de notas por console de navegador.
*   **Critérios de Aceitação:**
    *   [ ] O resultado deve ser injetado diretamente na tabela de histórico de forma imutável.

### 🔹 US11 - Emissão de Certificado Eletrônico Funcional
*   **Prioridade:** `🟢 BAIXA` | **Requisitos:** RF17, RF18, RP04
*   **Como** candidato aprovado com aproveitamento igual ou superior a 65%,  
*   **Quero** emitir automaticamente um certificado digital contendo meu nome, CPF, e-mail, data/hora, nota, percentual e um QR Code,  
*   **Para** comprovar formalmente minha capacitação em metodologias ágeis.
*   **Critérios de Aceitação:**
    *   [ ] Candidatos com nota inferior a 65% não devem ter acesso ao endpoint ou tela de geração de certificado.

### 🔹 US12 - Validação Pública via QR Code
*   **Prioridade:** `🟢 BAIXA` | **Requisitos:** RF19, RP08
*   **Como** um recrutador ou avaliador externo,  
*   **Quero** escanear o QR Code impresso no certificado e ser redirecionado para uma página pública de validação,  
*   **Para** confirmar a autenticidade e a veracidade dos dados daquele documento.
*   **Critérios de Aceitação:**
    *   [ ] A rota de validação deve ser pública, não exigindo login para consultar a autenticidade daquele ID de certificado específico.

### 🔹 US13 - Histórico Completo de Auditoria
*   **Prioridade:** `🟢 BAIXA` | **Requisitos:** RF20, RP04
*   **Como** candidato ou administrador,  
*   **Quero** acessar o histórico detalhado de todas as tentativas de certificação realizadas,  
*   **Para** checar quais temas foram respondidos, a questão sorteada, as respostas dadas, as corretas e os carimbos exatos de data/hora.
*   **Critérios de Aceitação:**
    *   [ ] Salvar o log de eventos no banco de dados para cada clique de confirmação do usuário.


---

📅 Cronograma de Sprints

| Sprint | Período |
| :--- | :---:|
| Sprint 1 | 28/09 - 22/10 |
| Sprint 2 | 23/10 - 05/11 |
| Sprint 3 | 06/11 - 26/11 |

---

## 👥 Equipe

| Nome | Função | GitHub |
| :--- | :--- | :---: |
| Gabriel da Fonseca Flauzino | Project Owner | [Gabriel](https://github.com/gabri05el) |
| Hector Saiki Colombani de Faria | Dev Team | [Hector](https://github.com/saikihector) |
| Igor Vinicius de Araujo Pece Dos Santos | Dev Team | [Igor](https://github.com/IgorVinicin) |
| João Vitor Pazzini Theodoro Gama | Dev Team | [João](https://github.com/jaopazzini) |
| Lucas Vilas Boas Fukuoka | Scrum Master | [Lucas](https://github.com/LuFukuo) |
| Marcos Antonio Floreano Gonçalves | Dev Team | [Marcos](https://github.com/MarcosFloreano) |
| Vitor Souza Leal | Dev Team | [Vitor](https://github.com/vitor-leal1) |


---

## 📅 Planejamento de Sprints com Níveis de Prioridade

### 🚀 Sprint 1: Fundação, Autenticação e Área de Estudos
*   **Período:** 28/09 a 22/10/2026
*   **Foco:** Infraestrutura isolada, persistência de dados de usuários e entrega da trilha de aprendizagem.

#### 🏗️ Infraestrutura & Banco de Dados (DevOps)
*   [ ] **[RP05 / RNF07] Containerização Isolada** `[🔴 PRIORIDADE ALTA]` - Configuração do ambiente multi-container via `docker-compose.yml` isolando os serviços de aplicação (Node.js) e banco de dados (PostgreSQL).
*   [ ] **[RP01] Front-end Vanilla Base** `[🔴 PRIORIDADE ALTA]` - Configuração da estrutura inicial de pastas e arquivos HTML/CSS puros sem frameworks.
*   [ ] **[RP02 / RP04] Modelagem Relacional** `[🔴 PRIORIDADE ALTA]` - Criação via DDL das tabelas fundamentais: `usuarios`, `temas` e `materiais_didaticos` no PostgreSQL.

#### 🎨 Design & UI/UX (Figma)
*   [ ] **[Design Base] Protótipo das Telas Iniciais** `[🔴 PRIORIDADE ALTA]` - Criação do protótipo de alta fidelidade para as telas de Instruções Iniciais, Login/Cadastro e Área de Estudos no Figma.

#### 💻 Desenvolvimento (HTML/CSS/JS puros & Node.js)
*   [ ] **[RF03 / RNF03] Cadastro de Usuários por CPF** `[🔴 PRIORIDADE ALTA]` - Fluxo completo de cadastro coletando CPF (único), nome completo, e-mail e senha em conformidade com a LGPD.
*   [ ] **[RF04] Login Exclusivo por CPF** `[🔴 PRIORIDADE ALTA]` - Autenticação restrita e obrigatória por meio de CPF e senha.
*   [ ] **[RF01 / RF02] Tela Inicial de Instruções** `[🔴 PRIORIDADE ALTA]` - Tela com descrição, objetivos, instruções e opção de iniciar ou retornar à prova posteriormente.
*   [ ] **[RF07 / RP07] Área de Estudos Preparatória** `[🟡 PRIORIDADE MÉDIA]` - Desenvolvimento da interface e endpoints para disponibilizar materiais didáticos e imagens organizados pelos 12 temas da certificação.

---

### ⏱️ Sprint 2: O Motor da Certificação e Controle de Sessão
*   **Período:** 23/10 a 05/11/2026
*   **Foco:** Criação da base de dados de questões de alta qualidade, lógica de sorteio aleatório, gestão do tempo e mecânica de interrupção da prova.

#### 🗄️ Base de Conteúdo (PostgreSQL)
*   [ ] **[RF06 / RP04 / RP06 / RNF08] Banco de Questões de Qualidade** `[🔴 PRIORIDADE ALTA]` - Cadastro via DML das 48 questões técnicas contextualizadas (4 por tema), cada uma com uma imagem associada e 4 alternativas.

#### 🎨 Design & UI/UX (Figma)
*   [ ] **[Design Prova] Protótipo do Motor** `[🔴 PRIORIDADE ALTA]` - Prototipação da interface da prova dinâmica (exibição de questão, alternativas, cronômetro regressivo e modais de feedback).

#### 💻 Desenvolvimento (HTML/CSS/JS puros & Node.js)
*   [ ] **[RF05 / RF06] Algoritmo de Sorteio por Tema** `[🔴 PRIORIDADE ALTA]` - Lógica no Back-end que seleciona aleatoriamente 1 questão por tema, sem repetição.
*   [ ] **[RF08] Interface Obrigatória da Questão** `[🔴 PRIORIDADE ALTA]` - Renderização dinâmica no front-end do enunciado, imagem obrigatória e as 4 alternativas.
*   [ ] **[RF14 / RNF04] Proteção contra Quedas e Interrupções** `[🔴 PRIORIDADE ALTA]` - Lógica que encerra e marca a questão automaticamente como incorreta caso haja perda de conexão, fechamento do navegador ou manipulação indevida do front-end.
*   [ ] **[RF10 / RF11] Cronômetro Dinâmico de 150s** `[🟡 PRIORIDADE MÉDIA]` - Contador regressivo em JavaScript visível na tela que bloqueia a resposta e atribui erro ao zerar.
*   [ ] **[RF09 / RF11] Feedback Imediato da Resposta** `[🟡 PRIORIDADE MÉDIA]` - Exibição obrigatória da alternativa correta em tela logo após o candidato responder ou estourar o tempo.
*   [ ] **[RF12 / RF13 / RF21 / RF15] Controle de Interrupção e Progresso** `[🟡 PRIORIDADE MÉDIA]` - Salvar o estado da prova após cada resposta, permitindo pausar e retomar do ponto onde parou, garantindo que cada tema seja respondido uma única vez.

---

### 🎓 Sprint 3: Fechamento de Ciclo, Certificados e Auditoria
*   **Período:** 06/11 a 25/11/2026
*   **Foco:** Regras de negócio finais, cálculo de notas no back-end, emissão de certificados, validação criptográfica por QR Code e entrega de documentações.

#### 🎨 Design & UI/UX (Figma)
*   [ ] **[Design Fim] Protótipo de Resultados** `[🟡 PRIORIDADE MÉDIA]` - Prototipação das telas de Histórico, Resultados e do Layout Oficial do Certificado Eletrônico.

#### 💻 Desenvolvimento (HTML/CSS/JS puros & Node.js)
*   [ ] **[RF16 / RNF04] Cálculo de Nota Centralizado** `[🔴 PRIORIDADE ALTA]` - Processamento automático do cálculo do aproveitamento e nota final executado estritamente no Back-end.
*   [ ] **[RF20] Histórico Completo da Certificação** `[🟢 PRIORIDADE BAIXA]` - Persistência detalhada de cada resposta escolhida, correta, questão sorteada e carimbo de data/hora no PostgreSQL para fins de auditoria.
*   [ ] **[RF17 / RF18] Geração Automatizada de Certificado** `[🟢 PRIORIDADE BAIXA]` - Emissão de documento eletrônico em tela para aproveitamento ≥ 65%, contendo dados do aluno, CPF, e-mail, nota, percentual e o QR Code.
*   [ ] **[RF19 / RP08] Validação Pública por QR Code** `[🟢 PRIORIDADE BAIXA]` - Integração com biblioteca geradora de QR Code no Node.js e construção da rota pública de validação de autenticidade.

#### 📝 Documentação Obrigatória & DoD (Definition of Done)
*   [ ] **[RNF01] Responsividade Mobile** `[🟢 PRIORIDADE BAIXA]` - Otimização final de estilos CSS puros para dispositivos móveis em todas as telas.
*   [ ] **[RNF06] Entrega de Documentação Mínima** `[🟢 PRIORIDADE BAIXA]` - Redação do modelo de dados (DER), instruções de instalação via Docker, documentação dos endpoints da API e descrição das funcionalidades.
