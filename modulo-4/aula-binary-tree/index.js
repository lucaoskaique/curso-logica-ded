// Define a classe Node, que representa um nó na árvore binária
class Node{
  // O construtor é chamado quando criamos um novo nó
  constructor(value){
    // Cada nó tem um valor
    this.value = value;
    // E dois filhos: esquerdo e direito, que inicialmente são nulos
    this.left = null;
    this.right = null;
  }
}

// Define a classe Tree, que representa a árvore binária
class BinaryTree{
  // O construtor é chamado quando criamos uma nova árvore
  constructor(){
    // A árvore tem uma raiz, que inicialmente é nula
    this.root = null;
  }

  // Método para adicionar um valor à árvore
  add(value){
    // Cria um novo nó com o valor fornecido
    const node = new Node(value);
    // Se a árvore estiver vazia (ou seja, a raiz é nula)
    if(this.root === null){
      // Define a raiz como o novo nó
      this.root = node
    }else{
      // Se a árvore não estiver vazia, chama o método _add para adicionar o nó na posição correta
      this._add(this.root, node);
    }
  }

  // Método privado para adicionar um nó na posição correta
  _add(current, newNode) {
    // Se o valor do novo nó for menor que o valor do nó atual
    if (newNode.value < current.value) {
      // Se o nó atual não tiver um nó esquerdo
      if (current.left === null) {
        // Define o nó esquerdo do nó atual como o novo nó
        current.left = newNode;
      } else {
        // Se o nó atual tiver um nó esquerdo, chama o método _add para o nó esquerdo
        this._add(current.left, newNode);
      }
    } else {
      // Se o valor do novo nó for maior ou igual ao valor do nó atual
      // Se o nó atual não tiver um nó direito
      if (current.right === null) {
        // Define o nó direito do nó atual como o novo nó
        current.right = newNode;
      } else {
        // Se o nó atual tiver um nó direito, chama o método _add para o nó direito
        this._add(current.right, newNode);
      }
    }
  }

  // Método para imprimir os valores da árvore em ordem
  print(){
    // Se a árvore não estiver vazia
    if(this.root !== null){
      // Chama o método _print para a raiz
      this._print(this.root);
    }
  }

  // Método privado para imprimir os valores de um nó e seus descendentes em ordem
  _print(node){
    // Se o nó não for nulo
    if(node !== null){
      // Primeiro imprime os valores do nó esquerdo
      this._print(node.left);
      // Depois imprime o valor do nó
      console.log(node.value);
      // E finalmente imprime os valores do nó direito
      this._print(node.right);
    }
  }

  // Método para remover um valor da árvore
  remove(value){
    // Chama o método _remove para a raiz
    this.root = this._remove(this.root, value);
  }

  // Método privado para remover um valor de um nó e seus descendentes
  _remove(node, value){
    // Se o nó for nulo, retorna nulo
    if(node === null){
      return null;
    }

    // Se o valor for igual ao valor do nó
    if(value === node.value){
      // Se o nó não tiver filhos
      if(node.left === null && node.right === null){
        // Retorna nulo, efetivamente removendo o nó
        return null;
      }

      // Se o nó não tiver filho esquerdo
      if(node.left === null){
        // Retorna o filho direito, efetivamente removendo o nó
        return node.right;
      }

      // Se o nó não tiver filho direito
      if(node.right === null){
        // Retorna o filho esquerdo, efetivamente removendo o nó
        return node.left;
      }

      // Se o nó tiver dois filhos
      // Encontra o valor mais à esquerda do filho direito
      let tempNode = node.right;
      while(tempNode.left !== null){
        tempNode = tempNode.left;
      }

      // Substitui o valor do nó pelo valor encontrado
      node.value = tempNode.value;
      // Remove o valor encontrado do filho direito
      node.right = this._remove(node.right, tempNode.value);
      // Retorna o nó, que agora tem um novo valor
      return node;
    }else if(value < node.value){
      // Se o valor for menor que o valor do nó
      // Remove o valor do filho esquerdo
      node.left = this._remove(node.left, value);
      // Retorna o nó
      return node;
    }else{
      // Se o valor for maior que o valor do nó
      // Remove o valor do filho direito
      node.right = this._remove(node.right, value);
      // Retorna o nó
      return node;
    }
  }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(13);
tree.add(17);
tree.print();
console.log('-----------------');
tree.remove(10);
tree.print();


export default BinaryTree;