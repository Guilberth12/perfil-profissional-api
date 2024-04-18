# Perfil Profissional


Este projeto implementa uma **API** em **NodeJS**, utilizando *Express* como gerenciador de requisições **HTTP**, banco de dados não relacional **MongoDB** e o framework ODM **Mongoose** para intermediar a comunicação entre a aplicação e o banco de dados.

O projeto trata-se de uma aplicação de gerenciamento de perfis profissionais e conexões entre eles. Portato é possível cadastrar perfis, conectar perfis e a comunicação entre perfis por meio de notificações.

Este documento tem por objetivo detalhar os elementos presentes no projeto do Perfil Profissional, incluindo dependências, *scripts* de execução, definição de entidades e *endpoints*.



# Entidades

- Perfil
- Notificação

## Perfil

Atributo | Tipo
-------- | ------
nome | String*
Data de Nascimento| Date*
DisponibilidadeMudanca| Boolean*
DisponibilidadeHorario| Enum [ "Meio Período, Integral" ]*
Skills| Array< String >*
Educação| Array< Educacao* >
Certificações| Array< Certificacao >
Experiencias| Array< Experiencia >
usuario| Usuario*
conexoes| Array< Perfil >


## Notificacao

Atributo | Tipo
-------- | ------
Tipo| Enum ["Contato, Solicitação de amizade"]*
Título| String*
Descrição| String
Lido| Boolean*
Remetente| Perfil*
Destinatario| Perfil*

> Entidades marcadas com asterisco são entidades obrigatórias. 

## Entidades Internas
    
### Educacao

Atributo | Tipo
-------- | ------
instituicao| String
ingresso| Date
conclusao| Date
nivelEscolaridade| num ["Ensino Fundamental","Ensino Médio","Ensino Superior", "Pós-graduação", "Mestrado","Doutorado"]
completo|  Boolean

### Certificacao

Atributo | Tipo
-------- | ------
instituicao| String
titulo| String
cargaHoraria| Number

### Experiencia

Atributo | Tipo
-------- | ------
instituicao| String
ingresso| Date
conclusao| Date


### Usuario

Atributo | Tipo
-------- | ------
email| String
senha| String

# Endpoints

## Perfil

Recurso | Método | Autenticado? | Objetivo | Retorno
------- | ------ | ------------ | -------  | -------
/perfil | GET | Não | Ultimos 5 perfis cadastrados | Lista de Perfis JSON
/perfil/:id | GET | Não | Busca um perfil por ID | Perfil JSON
/perfil |POST | Não | Cadastrar um perfil | Perfil JSON
/perfil/:id | PUT | Sim | Editar um perfil | Perfil JSON
/perfil/conexao | POST | Sim | Conecta dois perfis (Conexão/Amizade) | Mensagem JSON

## Login

Recurso | Método | Autenticado? | Objetivo | Retorno
------- | ------ | ------------ | -------  | -------
/login | POST | Não | Efetuar autetificação do usuário | Token, Email e Perfil

## Notificação

Recurso | Método | Autenticado? | Objetivo | Retorno
------- | ------ | ------------ | -------  | -------
/notificacao/id | GET | Sim | Buscar uma notificação por ID | Notificação em JSON
/notificacao/perfil/:id | GET | Sim | Buscar todas as notificações por ID | lista de notificação de JSON
/notificacao | POST | Sim | Cadastrar uma nova notificação | Notificação em JSON
/notificacao/lida/:id | PUT | Sim | Muda o *status* da notificação para "lida" | Notificação em JSON
