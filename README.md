# Appmaster

Projeto de exemplo da live "Micro apps utilizando Angular e Web components".

## Micro apps com Angular + Web Components

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Na pasta projects estão outros apps:Extrato e pagamento. 

O appmaster é um shell que conterá outros apps que são distribuidos como web components

Execute  `npm install` para instalar as deps do projeto.

## Build

Execute `npm run build:extrato && npm run build:pagamento` para buildar os projetos que o appmaster irá consumir.

O appmaster espera que os buils estejam em outro endpoints. Para isso, execute `npx live-server ./dist`, assim os arquivos de builds serão disponibilizados para o appmaster.
