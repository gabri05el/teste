# teste

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

## 🛠️ Tecnologias e Ferramentas Utilizadas

O projeto integra os conhecimentos do semestre abordando do design à infraestrutura:

* **Prototipagem & UI/UX:** Figma
* **Front-end:** HTML5, CSS3, JavaScript (Vanilla / Framework se aplicável)
* **Back-end:** [Inserir a tecnologia aqui, ex: Node.js / Java / Python]
* **Banco de Dados:** PostgreSQL (Modelagem relacional e persistência)
* **Infraestrutura / DevOps:** Docker & Docker Compose (Conteinerização da aplicação)
* **Metodologia de Trabalho:** Scrum

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:
* [Git](https://git-scm.com)
* [Docker e Docker Compose](https://docker.com)

### 🧱 Passo a Passo

```bash
# 1. Clone este repositório
$ git clone https://github.com

# 2. Acesse a pasta do projeto
$ cd NOME-DO-REPOSITORIO

# 3. Suba os containers do Docker (Banco de dados e Aplicação)
$ docker-compose up -d
```

*A aplicação estará disponível no seu navegador em `http://localhost:PORTA`.*

---

## 🎯 Escopo do Sistema (Funcionalidades Principais)

* [ ] **Área de Estudos:** Material didático relevante organizado pelos 12 temas da avaliação.
* [ ] **Módulo de Avaliação:** Motor de sorteio de questões (1 por tema) com exibição de imagens e alternativas.
* [ ] **Cronômetro Ativo:** Lógica de 150s por questão com encerramento automático.
* [ ] **Gerador de Certificados:** Emissão automatizada de PDF para notas ≥ 65% com código de validação.
* [ ] **Validador de QR Code:** Tela pública para checagem de autenticidade dos certificados emitidos.
* [ ] **Histórico do Aluno:** Painel com o registro de todas as avaliações já realizadas.

---

## 📋 Entregáveis de Modelagem e Design

* **Protótipo no Figma:** [Insira o link do seu projeto no Figma aqui]
* **Modelo do Banco de Dados:** O arquivo de modelagem e o script `init.sql` do PostgreSQL encontram-se na pasta `/database`.

---

## 👥 Equipe

| Nome | Função |
| :--- | :--- |
| **Gabriel da Fonseca Flauzino** | Project Owner |
| **Hector Saiki Colombani de Faria** | Dev Team |
| **Igor Vinicius de Araujo Pece Dos Santos** | Dev Team |
| **João Vitor Pazzini Theodoro Gama** | Dev Team |
| **Lucas Vilas Boas Fukuoka** | Scrum Master |
| **Marcos Antonio Floreano Gonçalves** | Dev Team |
| **Vitor Souza Leal** | Dev Team |

