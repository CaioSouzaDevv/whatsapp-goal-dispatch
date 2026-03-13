# WhatsApp Goal Dispatch

Sistema simples para leitura de metas de lojas a partir de um arquivo CSV e geração de mensagens destinadas aos coordenadores responsáveis. O objetivo é preparar o fluxo base que posteriormente poderá realizar disparos automáticos de mensagens (ex.: WhatsApp).

Atualmente o sistema:

* lê um arquivo CSV com metas de lojas
* transforma cada linha em objeto
* monta a mensagem de atualização de meta
* simula o envio para o número do coordenador

---

# Arquitetura do projeto

O projeto segue uma separação simples de responsabilidades.

```
src/
  readers/        leitura de arquivos (CSV, futuramente S3)
  services/       regras de negócio (ex: montagem da mensagem)
  types/          definição de tipos/estrutura de dados
  index.ts        ponto de entrada da aplicação

data/
  stores-goals.csv   CSV mockado utilizado para testes
```

Responsabilidade de cada parte:

| Camada   | Função                           |
| -------- | -------------------------------- |
| readers  | leitura de fontes de dados       |
| services | lógica de negócio                |
| types    | definição da estrutura dos dados |
| index    | orquestração do fluxo            |

---

# Fluxo do sistema

```
CSV
 ↓
Leitura do arquivo
 ↓
Conversão para objetos
 ↓
Montagem da mensagem
 ↓
Envio (simulado)
```

Cada linha do CSV representa **uma loja e um disparo de mensagem**.

---

# Formato do CSV

Arquivo localizado em:

```
data/stores-goals.csv
```

Exemplo:

```
storeId,storeName,coordinatorName,coordinatorPhone,goalValue
101,Loja Paulista,Marcos Silva,11984696489,20000
102,Loja Santana,Ana Costa,11984696489,18000
103,Loja Lapa,Carlos Mendes,11984696489,17000
```

Descrição dos campos:

| Campo            | Descrição                        |
| ---------------- | -------------------------------- |
| storeId          | identificador da loja            |
| storeName        | nome da loja                     |
| coordinatorName  | nome do coordenador              |
| coordinatorPhone | telefone que receberá a mensagem |
| goalValue        | valor da meta                    |

---

# Exemplo de mensagem gerada

```
📊 Atualização de meta

Loja: Loja Paulista
Meta atual: R$ 20000
```

---

# Tecnologias utilizadas

* Node.js
* TypeScript
* csv-parse

Dependências principais:

```
csv-parse
node-cron (futuro agendamento)
dotenv
```

---

# Instalação

Clone o repositório:

```
git clone <repo>
cd whatsapp-goal-dispatch
```

Instale as dependências:

```
npm install
```

---

# Executando o projeto

Rodar o sistema:

```
npx ts-node src/index.ts
```

Saída esperada:

```
Enviando para: 11984696489

📊 Atualização de meta

Loja: Loja Paulista
Meta atual: R$ 20000
```

---

# Estrutura de dados

Tipo principal:

```
StoreGoal
```

```
{
  storeId: string
  storeName: string
  coordinatorName: string
  coordinatorPhone: string
  goalValue: string
}
```

Esse tipo representa uma linha do CSV.

---

# Próximos passos

O projeto atual valida apenas o fluxo básico. Evoluções planejadas:

* integração com S3 para leitura do CSV
* agendamento automático (node-cron)
* envio real de mensagens
* logs de envio
* controle de falhas e retry
* integração com API de WhatsApp

---

# Objetivo do projeto

Criar um fluxo automatizado que permita:

```
Atualização de metas de lojas
 ↓
Processamento automático
 ↓
Envio para coordenadores via WhatsApp
```

Com execução periódica (ex.: a cada 1 hora).
