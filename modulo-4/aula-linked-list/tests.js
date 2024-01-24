import assert from "node:assert";
import { describe, it, beforeEach} from "node:test";
import LinkedList from "./index.js";

describe("LinkedList", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("deve retornar o primeiro elemento", () => {
    linkedList.add("elemento1");
    linkedList.add("elemento2");
    const primeiroElemento = linkedList.getFirst();
    assert.strictEqual(primeiroElemento.data, "elemento1");
  });

  it("deve retornar o último elemento", () => {
    linkedList.add("elemento1");
    linkedList.add("elemento2");
    const ultimoElemento = linkedList.getLast();
    assert.strictEqual(ultimoElemento.data, "elemento2");
  });

  it("deve limpar a lista", () => {
    linkedList.add("elemento1");
    linkedList.add("elemento2");
    linkedList.clear();
    assert.strictEqual(linkedList.size, 0);
  });

  it("deve verificar se a lista está vazia", () => {
    assert.strictEqual(linkedList.isEmpty(), true);
    linkedList.add("elemento1");
    assert.strictEqual(linkedList.isEmpty(), false);
  });

  it('deve inserir na posição 1 especificada', () => {
    linkedList.add('elemento1');
    linkedList.insertAt('elemento2', 1);
    assert.strictEqual(linkedList.size, 2);
    assert.strictEqual(linkedList.getLast().data, 'elemento2');
  });

  it('deve inserir na posição 0 especificada', () => {
    linkedList.add('elemento1');
    linkedList.insertAt('elemento2', 0);
    assert.strictEqual(linkedList.getFirst().data, 'elemento2');
  });

  it('deve remover da posição especificada', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    const removedElement = linkedList.removeFrom(1);
    assert.strictEqual(removedElement, 'elemento2');
    assert.strictEqual(linkedList.size, 1);
  });

  it('deve remover da posição especificada', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    const removedElement = linkedList.removeFrom(0);
    assert.strictEqual(removedElement, 'elemento1');
    assert.strictEqual(linkedList.size, 1);
  });

  it('deve remover o elemento especificado', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    const removedElement = linkedList.removeElement('elemento2');
    assert.strictEqual(removedElement, 'elemento2');
    assert.strictEqual(linkedList.size, 1);
  });

  it('deve retornar o índice do elemento', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    const index = linkedList.indexOf('elemento2');
    assert.strictEqual(index, 1);
  });

  it('deve retornar o tamanho da lista', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    const size = linkedList.getSize();
    assert.strictEqual(size, 2);
  });

  it('deve retornar o último elemento', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    const lastElement = linkedList.getLast();
    assert.strictEqual(lastElement.data, 'elemento2');
  });

  it('deve retornar o primeiro elemento', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    const firstElement = linkedList.getFirst();
    assert.strictEqual(firstElement.data, 'elemento1');
  });

  it('deve limpar a lista', () => {
    linkedList.add('elemento1');
    linkedList.add('elemento2');
    linkedList.clear();
    assert.strictEqual(linkedList.size, 0);
  });
});