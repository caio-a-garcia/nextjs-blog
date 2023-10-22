---
title: 'Git: Introdução Prática com Branches'
date: '2023-10-19'
---

## Setup
Para checar se o git está instalado em sua máquina, abra um terminal e use o comando:
```
git --version
```

Se o git estiver instalado, o output no terminal mostrará qual versão do git está instalada, similar ao exemplo abaixo:
```
git version 2.34.1
```

Caso contrário, o terminal avisará que o comando não foi encontrado. Nesse caso, procure na [documentação oficial](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git) instruções atualizadas de como instalar o git no seu Sistema Operacional.

## Repositórios Locais
Com o git instalado localmente, há duas maneiras de se criar um repositório git local: `clone` e `init`.

### Init
```
git init
```
O comando `git init` é usado para configurar um repositório já existente localmente como um repositório git. Para isso, o comando cria o arquivo `.git` no repósitorio atual.

### Clone
```
git clone <url>
```
Já o comando `git clone` é usado para copiar (ou _clonar_) um repositório remoto. Para isso, substitua `<url>` pela referência ao projeto desejado (no GitHub, essa url pode ser encontrada no botão verde `Code` na página do repositório).

**Nota:** `git init` deve funcionar desde que o git esteja instalado, já `git clone` pode depender do acesso ao repositório remoto desejado.

### Status
```
git status
```
O comando `git status` pode ser usado para conferir se o repositório atual é um repósitorio git. O seguinte trecho indica que o repositório não foi inicializado:
```
fatal: not a git repository
```
Respostas para `git status` **diferentes** do output acima indicam que o repositório está propriamente inicializado. Nesse caso, `git status` trás várias informações, algumas discutidas abaixo.

## Commits e Branches
No git, `commit` é o comando que salva a versão atual do código[^1] no sistema local do git, e os branches definem uma linhagem de commits.

Para criar um novo branch[^2] use o comando abaixo, substituindo \<nome\> pelo nome que se deseja dar para o branch:
```
git checkout -b <nome>
```

Estando no branch desejado, esse é o momento de trabalhar no código.

Após fazer suas modificações e salvar os arquivos, o comando `git status` mostrará dentre outras informações uma lista de `Changes not staged for commit`: arquivos que o git identificou terem sido modificados, mas que não foram indicados para serem incluidos no commit. Para incluir todos os arquivos, use o comando[^3]:
```
git add .
```

Para confirmar que o comando funcionou, pode-se usar `git status` para ver os arquivos desejados listados sob `Changes to be committed:`. Então fazemos o commit:
```
git commit -m "Mensagem descritiva sobre modificacoes feitas"
```

## Push e Pull
### Push
Os comandos acima que criam branches e registram commits o fazem localmente. O comando usado para subir essas modificações para o repositório remoto é o `git push`. Para o workflow aqui sugerido, o caso mais comum envolve criar um novo branch no repositório remoto. O comando abaixo cria esse branch e sobe para ele as modificações presentes no último commit:
```
git push -u origin <nome-do-branch>
```
**Nota:** é recomendado usar o mesmo nome no branch remoto que o usado localmente, por uma questão de organização. Entretanto, não há restrição técnica a esse respeito.

**Nota:** um branch criado localmente com o `init` necessitará um passo extra para configurar sua conexão com um repositório remoto. Repositórios clonados já vem com essa relação configurada.

### Pull
No caso de um colaborador subir modificações para o repositório remoto, é importante incluir essas modificações localmente para trabalhar na versão mais atualizada do projeto e evitar conflitos. O comando usado para puxar essas modificações é o `git pull`. No workflow sugerido, a ação recomendada é mudar para o branch _main_ e usar simplesmente:
```
git pull
```
No caso ideal, esse comando puxará as modificações do branch remoto para o branch local (no exemplo, as modificações no _main_ remoto serão refletidas no _main_ local).

## Pull Request (PR)
O workflow descrito até aqui envolve o uso de branches dedicados para desenvolvimento. O ciclo de desenvolvimento se fecha com a inclusão das modificações no branch _main_ por meio de um _Pull Request_. Essa operação é feita onde o código remoto é hospedado (ex: GitHub).

### GitHub
No GitHub, se um novo branch tiver subido recentemente, um botão `Compare and pull request` aparecerá na página do projeto. Para fazer o PR, basta apertar o botão e seguir o fluxo da plataforma.

## Notas finais
 - Mensagens descritivas para commits e PRs são recomendadas pois constituem documentação do histórico do projeto. Há diversas convenções a respeito de tamanho e conteúdo das mensagens, mas a regra de ouro consiste em documentar de acordo com o que for definido para o projeto.


[^1]: `commit` salva os arquivos que estiverem em _staging_. Para essa introdução é importante saber que é necessário utilizar o `git add` quando um arquivo novo é adicionado para ele ser considerado pelo versionamento.

[^2]: O commando `git checkout` é usado para mudar de branch. Se usado sem argumentos (ex: `git checkout teste`), o comando mudará para o branch caso ele exista, e retornará um erro se não houver branch com o nome especificado. Se usado com o argumento `-b` (ex: `git checkout -b teste`), o comando mudará para o branch com o nome especificado, ou criará um branch novo caso já não exista.

[^3]: `git add` adiciona arquivos para _staging_, seguindo a lógica referida na nota 1. O argumento "." em `git add .` indica para o git incluir em staging todos os arquivos contidos na pasta atual (incluindo pastas internas).
