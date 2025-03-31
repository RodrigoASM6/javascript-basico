/* Retorna uma lista com classes do elemento. Permite adicionar remover e verificar se contém */

menu.className; // String
menu.classList; // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); //duas classes
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); //adiciona e remove a classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "inativo");
