# Data Structures & Algorithms in JavaScript

A collection of **Data Structures and Algorithms** problems and solutions implemented in **JavaScript / TypeScript**.

The main goal of this repository is to improve problem-solving skills by practicing common algorithms, data structures, and problem-solving techniques through problems from **LeetCode**.

The repository is organized by **algorithmic patterns and techniques**, rather than simply by difficulty.

---

## 📚 Topics

Currently, the repository covers:

- [Two Pointers](#-two-pointers)
- [Recursion](#-recursion)

More topics will be added gradually.

---

## 🗂️ Repository Structure

```text
.
├── two-pointer/
│   ├── best_time_to_buy_and_sell_stock/
│   ├── find_the_index_of_the_first_occurrence_in_a_string/
│   ├── remove_element/
│   ├── sort_colors/
│   └── valid_palindrome/
│
├── recursion/
│   ├── fibonacci_number/
│   ├── n_queens/
│   └── reverse_integer/
│
└── README.md
```

---

# 🔹 Two Pointers

The **Two Pointers** technique is a common algorithmic pattern where two indices/pointers are used to traverse a data structure, usually an array or string.

It is especially useful for:

- Arrays
- Strings
- Searching
- Removing elements
- Comparing values
- Reducing time complexity from `O(n²)` to `O(n)` in many cases

### Problems

| #   | Problem                                            | LeetCode                                                                                      | Solution                                                                     |
| --- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | Best Time to Buy and Sell Stock                    | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)                    | [Solution](./two-pointer/best_time_to_buy_and_sell_stock)                    |
| 2   | Find the Index of the First Occurrence in a String | [LeetCode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | [Solution](./two-pointer/find_the_index_of_the_first_occurrence_in_a_string) |
| 3   | Remove Element                                     | [LeetCode](https://leetcode.com/problems/remove-element/)                                     | [Solution](./two-pointer/remove_element)                                     |
| 4   | Sort Colors                                        | [LeetCode](https://leetcode.com/problems/sort-colors/)                                        | [Solution](./two-pointer/sort_colors)                                        |
| 5   | Valid Palindrome                                   | [LeetCode](https://leetcode.com/problems/valid-palindrome/)                                   | [Solution](./two-pointer/valid_palindrome)                                   |

### Covered Concepts

Through these problems, the following concepts are practiced:

- Left and right pointers
- Pointer movement
- In-place array modification
- String traversal
- Comparing values from both ends
- Maintaining a running minimum/maximum
- Reducing unnecessary iterations

---

# 🔹 Recursion

**Recursion** is a technique where a function calls itself to solve smaller instances of the same problem.

A recursive solution usually consists of:

1. **Base Case** — the condition that stops recursion.
2. **Recursive Case** — the function calling itself with a smaller or modified input.

Recursion is particularly useful for:

- Mathematical problems
- Backtracking
- Tree and graph problems
- Divide and conquer
- Combinatorial problems

### Problems

| #   | Problem          | LeetCode                                                    | Solution                                 |
| --- | ---------------- | ----------------------------------------------------------- | ---------------------------------------- |
| 1   | Fibonacci Number | [LeetCode](https://leetcode.com/problems/fibonacci-number/) | [Solution](./recursion/fibonacci_number) |
| 2   | N-Queens         | [LeetCode](https://leetcode.com/problems/n-queens/)         | [Solution](./recursion/n_queens)         |
| 3   | Reverse Integer  | [LeetCode](https://leetcode.com/problems/reverse-integer/)  | [Solution](./recursion/reverse_integer)  |

### Covered Concepts

Through these problems, the following concepts are practiced:

- Base cases
- Recursive calls
- Call stack
- Backtracking
- State management
- Recursive search
- Constraint checking
- Building solutions step by step

---

# 🎯 Learning Approach

For each problem, the goal is not only to find an accepted solution, but also to understand **why the algorithm works**.

The general process is:

```text
Understand the problem
        ↓
Identify the pattern / technique
        ↓
Think about a brute-force solution
        ↓
Optimize the solution
        ↓
Implement in JavaScript / TypeScript
        ↓
Analyze Time Complexity
        ↓
Analyze Space Complexity
```

The focus is on recognizing patterns that can be reused across different problems.

---

# 📈 Progress

### Algorithms & Techniques

- [x] Two Pointers
- [x] Recursion
- [ ] Sliding Window
- [ ] Binary Search
- [ ] Hash Map / Hash Set
- [ ] Stack
- [ ] Queue
- [ ] Linked List
- [ ] Trees
- [ ] Binary Search Tree
- [ ] Heap / Priority Queue
- [ ] Graphs
- [ ] BFS
- [ ] DFS
- [ ] Backtracking
- [ ] Dynamic Programming
- [ ] Greedy Algorithms
- [ ] Divide and Conquer
- [ ] Sorting Algorithms

This list will be updated as new topics and problems are added.

---

# 🧠 Goals

The main goals of this repository are:

- Improve algorithmic thinking
- Learn and recognize common problem-solving patterns
- Strengthen JavaScript / TypeScript programming skills
- Understand time and space complexity
- Practice solving problems independently
- Build a reusable reference for algorithms and techniques
- Prepare for technical interviews

---

# 🛠️ Language

Solutions are implemented using:

- **JavaScript**
- **TypeScript**

---

# 📌 Notes

The solutions in this repository are part of an ongoing learning process.

Some solutions may be improved or refactored later as my understanding of algorithms and problem-solving techniques develops.

The focus is on **learning the underlying concepts**, not just getting an accepted solution.
