O TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft
É um superconjunto (superset) do JavaScript, que veio para resolver suas limitações.
Seu grande recurso é o sistema de tipos.

Aqui podemos identificar o tipo de dado em variáveis, parâmetros ou retornos de funções
utilizando a tipagem.

Um programa desenvolvido em TypeScript pode consumir o JavaScript diretamente.

 TypeScript é uma linguagem fortemente tipada e estaticamente tipada que possui inferência 
 de tipo.

 Um Compilador é um programa que traduz o código desenvolvido usando uma linguagem de 
 mais alto nível em um código de um programa equivalente de uma linguagem de mais baixo 
 nível. Como exemplo temos o GCC da Linguagem C e o Javac da linguagem Java.

 Um Transpilador é um programa de sistema que traduz o código desenvolvido utilizando 
 uma linguagem de mais alto nível em um código de um programa equivalente a uma outra 
 linguagem de mais alto nível , ou em uma versão diferente da mesma linguagem . Como 
 exemplo temos o J2CL que transpila código na linguagem Java para a linguagem JavaScript
 ou o Babel que transpila código EcmaScript 6 para EcmaScript 5.

-------------------------------TSC - Compilador do TypeScript --------------------------

 O TSC é o responsável por realizar a tradução do nosso código TypeScript para código 
 JavaScript.

O que indica se um projeto é TypeScript é a presença de um arquivo de configuração
TSConfig . O arquivo tsconfig.json , possui as variáveis de configuração que dirão 
como o nosso código será compilado.

A melhor prática para a utilização do Typescript em um projeto, é instalá-lo como uma 
devDependency, através do comando npm i -D typescript , e utilizá-lo através do npx. 
Isso garante que todas as pessoas que forem compilar o projeto, o façam utilizando a 
mesma versão do TypeScript.

Para gerar o tsconfig.json automaticamente vamos utilizar o tsc. Por meio do comando:
tsc --init ou npx tsc --init

Um arquivo tsconfig.json será gerado no diretório com o seguinte conteúdo:

{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

Mas precisamos configurar para criar nosso primeiro projeto em Typescript ?

module: especifica o sistema de módulo a ser utilizado no código JavaScript que será gerado pelo compilador como sendo o CommonJS;

- target: define a versão do JavaScript do código compilado como ES6 ;

 - rootDir: define a localização raiz dos arquivos do projeto;

- outDir: define a pasta onde ficará nosso código compilado;

- esModuleInterop: habilitamos essa opção para ser possível compilar módulos ES6 para módulos CommonJS;

- strict: habilitamos essa opção para ativar a verificação estrita de tipo.

- include: essa chave vai depois do objeto CompilerOptions e com ela conseguimos incluir na compilação os arquivos ou diretórios mencionados

- exclude: essa chave também vai depois do objeto CompilerOptions e com ela conseguimos excluir da compilação os arquivos mencionados.

Se estivermos desenvolvendo um projeto que usará a versão 14 do Node , podemos utilizar
 o módulo base @typescript/node14 .

 {
  "extends": "@tsconfig/node14/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include":["src/**/*"], /* aqui estamos incluindo todos os arquivos dentro da pasta src */
  "exclude": ["node_modules", "**/*.spec.ts"] /* aqui estamos excluindo a pasta node_modules e os arquivos de teste */
}

Isso permite que nosso tsconfig.json concentre as configurações únicas para o nosso 
projeto, e não todas as configurações para o nosso ambiente execução JavaScript.

Em TypeScript todos os tipos são subtipos de um tipo principal chamado any , e este é 
um tipo que pode representar qualquer valor em JavaScript . Os demais tipos são os 
tipos primitivos , tipos de objeto ou parâmetros de tipo .

Tipos primitivos no Typescript: boolean , number , string , void , null e undefined.

Todos valores numéricos, assim como no JavaScript são do tipo de ponto flutuante.

- void : existe apenas para indicar a ausência de um valor, como em uma função sem valor 
retornado.

function sayHelloWorld(): void {
  console.log("Hello World!");
}

- null e undefined : são subtipos de todos os outros tipos.

let nullValue = null;
let undefinedValue = undefined;

----------------------- Variáveis utilizando inferência de tipo --------------------

Podemos declarar uma variável sem especificarmos explicitamente o tipo, e o compilador 
irá fazer a inferência do tipo através do valor passado para a variável.

let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string

------------------------------------------- Enums --------------------------------------

Uma enum é um nome simbólico para um conjunto de valores relacionados, o que significa
que você pode utilizá-la para criar um conjunto de constantes para uso com variáveis 
e propriedades. Elas são muito úteis quando temos um conjunto de valores que determinado 
tipo de variável pode assumir. Exemplo:

enum StudentStatus {
     Active,
     Inactive,
     Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

Por padrão uma enum é baseada em números , os valores começam de zero e para cada opção
 é assinalado um número incrementado por 1 , assim como os índices de um array. 
 Portanto Active é 0, Inactive é 1 e Paused é 2. 
 
 Para termos a nossa enum refletindo os valores que temos no banco de dados externo 
 podemos especificar isso na declaração da seguinte forma:

enum StudentStatus {
     Active = 1,
     Inactive,
     Paused
}

Atribuir o número 1 para o primeiro valor da nossa enum já é o suficiente, agora se 
imprimirmos a nossa variável newStudentStatus o valor será 2 como era esperado.

let newStudentStatus: StudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus); //saída: 2

Sempre que parte da sua lógica aceitar um conjunto limitado de valores, considere 
utilizar uma enum . Elas tornam o código mais legível e demonstram melhor a intenção 
de quem codificou além de nos ajudar a reduzir os erros causados pela transcrição ou 
digitação incorreta de valores e facilitar a alteração dos valores no futuro.

Enums suportam o acesso ao dado em ambos os lados: Da chave ao valor e do valor à chave:

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

Podem ser de diferentes tipos, sendo o tipo string o mais comum:

enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGTH = "RIGHT",
}

 o TypeScript Playground é um site feito para você escrever, compartilhar e 
 aprender TypeScript.

 


