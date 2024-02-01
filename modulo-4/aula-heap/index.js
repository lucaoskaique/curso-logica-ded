class MinHeap {
  constructor() {
    // Inicializa o heap com um elemento nulo no índice 0 para facilitar o cálculo dos índices dos filhos e do pai
    this.heap = [null];
  }

  // Retorna o menor elemento do heap sem remover
  getMin() {
    // O menor elemento está na raiz do heap, que é o primeiro elemento do array
    return this.heap[1];
  }

  // Insere um novo elemento no heap
  insert(node) {
    // Adiciona o novo elemento ao final do heap
    this.heap.push(node);

    // Localiza o índice do novo elemento
    let currentIndex = this.heap.length - 1;

    // Sobe o novo elemento na árvore até restaurar a propriedade heap
    // Enquanto não chegamos no topo da árvore (porque o topo é especial e não tem pai)
    // E o pai é maior que o filho (nós queremos que o menor número esteja no topo)
    while (
      currentIndex > 1 &&
      this.heap[Math.floor(currentIndex / 2)] > this.heap[currentIndex]
    ) {
      // Imagina que você tem uma mochila (novo elemento) e seu pai tem uma mochila (elemento pai).
      // Se a mochila do seu pai for mais pesada que a sua, vocês trocam de mochilas.
      // Troca o novo elemento com seu pai se o pai é maior
      [this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[Math.floor(currentIndex / 2)],
      ];
      // Agora, você sobe para o lugar onde seu pai estava, para ver se sua mochila é mais leve que a do avô também.
      // Move o índice para o nó pai para continuar o processo
      currentIndex = Math.floor(currentIndex / 2);
    }
  }

  // Pega e mostra o menor número do monte de números (heap)
  extractMin() {
    // Pegamos o número do topo, que é o menor, e guardamos para mostrar depois
    const min = this.heap[1];
    // Colocamos o número que estava no final do monte no lugar do número que pegamos
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;

    // Agora vamos arrumar o monte para manter a regra de que os números menores ficam no topo
    while (
      this.heap[currentIndex * 2] !== undefined && // Enquanto tiver filhos para comparar
      (this.heap[currentIndex * 2] < this.heap[currentIndex] || // E o filho da esquerda for menor que o pai
        this.heap[currentIndex * 2 + 1] < this.heap[currentIndex]) // Ou o filho da direita for menor que o pai
    ) {
      let smallerChildIndex;
      // Descobre qual dos dois filhos é o menor
      if (
        this.heap[currentIndex * 2 + 1] === undefined || // Se não tiver filho da direita
        this.heap[currentIndex * 2] < this.heap[currentIndex * 2 + 1] // Ou se o filho da esquerda for menor que o da direita
      ) {
        smallerChildIndex = currentIndex * 2; // O filho da esquerda é o menor
      } else {
        smallerChildIndex = currentIndex * 2 + 1; // O filho da direita é o menor
      }
      // Troca o número do pai pelo número menor dos filhos, como se eles estivessem competindo em um jogo e o menor ganhasse
      [this.heap[currentIndex], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[currentIndex],
      ];
      // Move para o filho que ganhou para continuar o jogo na próxima linha da árvore
      currentIndex = smallerChildIndex;
    }
    // Mostra o número que estava no topo e era o menor
    return min;
  }
  print() {
    // Imprime o heap começando do índice 1, pois o índice 0 é um placeholder.
    console.log(this.heap.slice(1));
  }
}

// Cria uma nova instância da MinHeap
let minHeap = new MinHeap();
// Define um array de números
let nums = [5, 3, 8, 4, 2, 7];
// Insere cada número do array no heap
nums.forEach((num) => minHeap.insert(num));

// Define o número de elementos mínimos a serem removidos
let k = 3;
// Define um array para armazenar os elementos mínimos removidos
let result = [];
// Remove os k elementos mínimos do heap e os adiciona ao array de resultados
for (let i = 0; i < k; i++) {
  result.push(minHeap.extractMin());
}

// Imprime o array de resultados
console.log(result); // Saída: [2, 3, 4]
// Imprime o heap após a remoção dos elementos mínimos
console.log("Heap após remover o mínimo:");
minHeap.print();
