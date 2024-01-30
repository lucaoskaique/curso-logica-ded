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
    while (
      currentIndex > 1 &&
      this.heap[Math.floor(currentIndex / 2)] > this.heap[currentIndex]
    ) {
      // Troca o novo elemento com seu pai se o pai é maior
      [this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[Math.floor(currentIndex / 2)],
      ];
      // Move o índice para o nó pai para continuar o processo
      currentIndex = Math.floor(currentIndex / 2);
    }
  }
  // Remove e retorna o menor elemento do heap
  extractMin() {
    // Substitui a raiz do heap (menor elemento) pelo último elemento do heap
    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;

    // Desce o novo elemento da raiz até restaurar a propriedade de heap
    while (
      this.heap[currentIndex * 2] !== undefined &&
      (this.heap[currentIndex * 2] < this.heap[currentIndex] ||
        this.heap[currentIndex * 2 + 1] < this.heap[currentIndex])
    ) {
      let smallerChildIndex;
      // Determina qual dos filhos é o menor e armazena seu índice
      if (
        this.heap[currentIndex * 2 + 1] === undefined ||
        this.heap[currentIndex * 2] < this.heap[currentIndex * 2 + 1]
      ) {
        smallerChildIndex = currentIndex * 2;
      } else {
        smallerChildIndex = currentIndex * 2 + 1;
      }
      // Troca o elemento atual com o menor de seus filhos
      [this.heap[currentIndex], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[currentIndex],
      ];
      // Move o índice para o menor filho para continuar o processo
      currentIndex = smallerChildIndex;
    }
    // Retorna o menor elemento que estava na raiz do heap
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