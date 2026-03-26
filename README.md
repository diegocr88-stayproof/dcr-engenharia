# DCR Engenharia — Site Institucional

Site React + Vite da DCR Engenharia, pronto para deploy no Vercel.

---

## 🚀 Passo a Passo Completo

### 1. Instalar o Node.js

1. Acesse: https://nodejs.org
2. Baixe a versão **LTS** (botão verde)
3. Execute o instalador e siga os passos (Next > Next > Install)
4. Para confirmar, abra o **Prompt de Comando** (tecla Windows + R, digite `cmd`) e rode:
   ```
   node -v
   ```
   Deve aparecer algo como `v20.x.x`

---

### 2. Colocar o projeto no GitHub

1. Acesse https://github.com e faça login
2. Clique em **"New repository"**
3. Nome: `dcr-engenharia`
4. Deixe **Private** ou Public (sua escolha)
5. Clique em **"Create repository"**

Agora, no Prompt de Comando:

```bash
# Entre na pasta do projeto (ajuste o caminho conforme onde você salvou o ZIP)
cd C:\Users\SeuUsuario\Downloads\dcr-engenharia

# Instale as dependências
npm install

# Teste localmente (abre em http://localhost:5173)
npm run dev

# Quando estiver ok, envie para o GitHub:
git init
git add .
git commit -m "primeiro commit - site DCR Engenharia"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/dcr-engenharia.git
git push -u origin main
```

---

### 3. Deploy no Vercel

1. Acesse https://vercel.com e faça login com sua conta GitHub
2. Clique em **"Add New Project"**
3. Selecione o repositório `dcr-engenharia`
4. Configurações (Vercel detecta automaticamente):
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **"Deploy"**
6. Em ~1 minuto o site estará no ar com URL `dcr-engenharia.vercel.app`

---

### 4. Conectar seu domínio personalizado

1. No painel do Vercel, vá em **Settings > Domains**
2. Adicione: `dcrengenharia-rs.com.br`
3. O Vercel vai mostrar os DNS para configurar no seu registrador de domínio
4. Adicione os registros DNS indicados (normalmente um registro A ou CNAME)
5. Em até 24h o domínio estará apontando para o site

---

### 5. Personalizar antes de publicar

Abra o arquivo `src/components/Contato.jsx` e substitua:

```js
const numero = '5551999999999'  // ← coloque seu WhatsApp com DDD (ex: 5551999887766)
```

---

## 📁 Estrutura do Projeto

```
dcr-engenharia/
├── public/
│   └── logo-dcr.png          # Logo da DCR
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Problema.jsx
│   │   ├── Servicos.jsx
│   │   ├── Metodo.jsx
│   │   ├── Diferenciais.jsx
│   │   ├── CtaStrip.jsx
│   │   ├── Contato.jsx
│   │   ├── Footer.jsx
│   │   └── useReveal.js      # Hook de animação scroll
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 🛠️ Comandos úteis

| Comando | O que faz |
|---|---|
| `npm install` | Instala dependências |
| `npm run dev` | Inicia servidor local |
| `npm run build` | Gera versão para produção |
| `npm run preview` | Visualiza versão de produção |

---

Desenvolvido para DCR Engenharia — Porto Alegre, RS
