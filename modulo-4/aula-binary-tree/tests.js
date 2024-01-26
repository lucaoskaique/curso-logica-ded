import assert from "node:assert";
import { describe, it, beforeEach} from "node:test";
import BinaryTree from "./index.js";

// Teste para a classe Tree
describe('Tree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(13);
    tree.add(17);
  });

  // Teste para o método add
  it('deve adicionar valores corretamente', () => {
    assert.strictEqual(tree.root.value, 10);
    assert.strictEqual(tree.root.left.value, 5);
    assert.strictEqual(tree.root.right.value, 15);
    assert.strictEqual(tree.root.left.left.value, 3);
    assert.strictEqual(tree.root.left.right.value, 7);
    assert.strictEqual(tree.root.right.left.value, 13);
    assert.strictEqual(tree.root.right.right.value, 17);
  });

  // Teste para o método remove
  it('deve remover valores corretamente', () => {
    tree.remove(10);
    assert.strictEqual(tree.root.value, 13);
    assert.strictEqual(tree.root.left.value, 5);
    assert.strictEqual(tree.root.right.value, 15);
    assert.strictEqual(tree.root.left.left.value, 3);
    assert.strictEqual(tree.root.left.right.value, 7);
    assert.strictEqual(tree.root.right.right.value, 17);
  });

  // Teste para remover um nó sem filhos
  it('deve remover um nó sem filhos', () => {
    tree.remove(3);
    assert.strictEqual(tree.root.left.left, null);
  });

  // Teste para remover um nó com apenas um filho
  it('deve remover um nó com apenas um filho', () => {
    tree.remove(5);
    assert.strictEqual(tree.root.left.value, 7);
  });

  // Teste para tentar remover um valor que não existe na árvore
  it('deve não fazer nada ao tentar remover um valor que não existe', () => {
    tree.remove(100);
    assert.strictEqual(tree.root.value, 10);
  });

    // Teste para o método remove quando o nó tem apenas um filho à direita
    it('deve remover um nó que tem apenas um filho à direita', () => {
      let newTree = new Tree();
      newTree.add(10);
      newTree.add(15);
      newTree.remove(10);
      assert.strictEqual(newTree.root.value, 15);
    });
  
    // Teste para o método remove quando o nó tem apenas um filho à esquerda
    it('deve remover um nó que tem apenas um filho à esquerda', () => {
      let newTree = new Tree();
      newTree.add(10);
      newTree.add(5);
      newTree.remove(10);
      assert.strictEqual(newTree.root.value, 5);
    });
});