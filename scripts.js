const categories = {
 
  'Recursion': {
    'Algorithms': [
      'Factorial',
      'Reversing a String',
      'N-Queens Problem'
    ]
  },
  'Indexing': {
    'Search': [
      'Binary Search',
      'Linear Search'
    ],
    'Trees': [
      'Binary Search Trees',
      'AVL Trees',
      'Red-Black Trees',
      'Splay Trees'
    ],
    'Hash Tables': [
      'Open Hash Tables',
      'Closed Hash Tables',
      'Closed Hash Tables with Buckets'
    ],
    'Advanced Trees': [
      'Trie',
      'Radix Tree',
      'Ternary Search Tree',
      'B Trees',
      'B+ Trees'
    ]
  },
  'Sorting': {
    'Comparison Based': [
      'Bubble Sort',
      'Selection Sort',
      'Insertion Sort',
      'Shell Sort',
      'Merge Sort',
      'Quick Sort'
    ],
    'Linear Time': [
      'Bucket Sort',
      'Counting Sort',
      'Radix Sort',
      'Heap Sort'
    ]
  },
  'Heap Structures': {
    'Types': [
      'Heaps',
      'Binomial Queues',
      'Fibonacci Heaps',
      'Leftist Heaps',
      'Skew Heaps'
    ]
  },
  'Graph Algorithms': {
    'Traversal': [
      'Breadth-First Search',
      'Depth-First Search',
      'Connected Components'
    ],
    'Shortest Paths': [
      'Dijkstra\'s Algorithm',
      'Floyd-Warshall Algorithm'
    ],
    'Minimum Spanning Trees': [
      'Prim\'s Algorithm',
      'Kruskal\'s Algorithm'
    ],
    'Topological Sort': [
      'Using Indegree Array',
      'Using DFS'
    ]
  },
  'Dynamic Programming': {
    'Problems': [
      'Fibonacci Number',
      'Making Change',
      'Longest Common Subsequence'
    ]
  },
  'Geometric Algorithms': {
    '2D Operations': [
      'Rotation and Scale Matrices',
      'Rotation and Translation Matrices',
      'Changing Coordinate Systems'
    ],
    '3D Operations': [
      'Rotation and Scale Matrices',
      'Changing Coordinate Systems'
    ]
  }
};

function createMatrixRain() {
  const container = document.getElementById('matrix-rain');
  const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const columns = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < columns; i++) {
    const rain = document.createElement('div');
    rain.className = 'matrix-rain';
    rain.style.left = `${i * 20}px`;
    rain.style.animationDuration = `${Math.random() * 3 + 2}s`;
    rain.style.animationDelay = `${Math.random() * 2}s`;

    setInterval(() => {
      rain.textContent = Array.from(
        {length: Math.floor(Math.random() * 25) + 15},
        () => characters[Math.floor(Math.random() * characters.length)]
      ).join('');
    }, 100);

    container.appendChild(rain);
  }
}

function renderCategories() {
  const container = document.getElementById('categories-container');

  Object.entries(categories).forEach(([categoryName, subcategories], index) => {
    const category = document.createElement('div');
    category.className = 'category';
    category.style.animationDelay = `${index * 0.1}s`;

    const header = document.createElement('div');
    header.className = 'category-header';
    header.textContent = categoryName;

    const content = document.createElement('div');
    content.className = 'category-content';

    Object.entries(subcategories).forEach(([subcategoryName, algorithms]) => {
      const subcategory = document.createElement('div');
      subcategory.className = 'subcategory';

      const subcategoryHeader = document.createElement('div');
      subcategoryHeader.className = 'subcategory-header';
      subcategoryHeader.textContent = subcategoryName;

      const algorithmList = document.createElement('div');
      algorithmList.className = 'algorithm-list';

      algorithms.forEach(algo => {
        const algorithm = document.createElement('div');
        algorithm.className = 'algorithm-item';
        algorithm.textContent = algo;
        algorithmList.appendChild(algorithm);
      });

      subcategory.appendChild(subcategoryHeader);
      subcategory.appendChild(algorithmList);
      content.appendChild(subcategory);
    });

    category.appendChild(header);
    category.appendChild(content);
    container.appendChild(category);
  });
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    document.querySelectorAll('.algorithm-item').forEach(item => {
      const matches = item.textContent.toLowerCase().includes(searchTerm);
      item.style.display = matches ? 'block' : 'none';

      const subcategory = item.closest('.subcategory');
      const hasVisible = [...subcategory.querySelectorAll('.algorithm-item')]
        .some(a => a.style.display !== 'none');
      subcategory.style.display = hasVisible ? 'block' : 'none';

      const category = subcategory.closest('.category');
      const hasVisibleSubcategories = [...category.querySelectorAll('.subcategory')]
        .some(s => s.style.display !== 'none');
      category.style.display = hasVisibleSubcategories ? 'block' : 'none';
    });
  });
}

createMatrixRain();
renderCategories();
setupSearch();

// Reveal content after the matrix effect
setTimeout(() => {
  document.getElementById('initial-animation').style.display = 'none';
  document.getElementById('app-container').style.opacity = 1;
}, 3000);

window.addEventListener('resize', () => {
  const container = document.getElementById('matrix-rain');
  container.innerHTML = '';
  createMatrixRain();
});
