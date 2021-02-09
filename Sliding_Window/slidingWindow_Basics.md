# THE SLIDING WINDOW

Sourced from [Sliding Window Technique - Algorithmic Mental Models](https://www.youtube.com/watch?v=MK-NZ4hN7rs)

1. What is a sliding window?
2. What are the benefits?
3. How to spot the problems.
4. examples and implementation

* As it a window moves over an array or a linked list that contains contiguous sequences, we continually ask if the subset is the best we've seen so far and updates that value.

* Dynamically Resizable windows have no fixed size and moves like a caterpillar over data, growing and shrinking.

## To recognize a sliding window, the problem usually involves:
1. Things we iterate over sequentially
    * Concerned with Contiguous sequence of elements
    * Strings, arrays, linked lists

2. Min, Max, Longest, Shortest, Whether it contains digits or characters.
    * Maybe we need to calculate and record value

## Question Variants:
1. Fixed Length
    * Max Sum Subarray of size k
2. Dynamic Variant
    * Smallest sum, which is greater than or equal to some value 'S'
3. Dynamic Variant with Auxillary Data Structure (Hash map or hash set)
    * Longest substring with no more than 'K' distinct characters
4. String permutations

## Commonalities:
1. Everything is grouped sequentially.
2. Keywords:
    * Largest, smallest, longest, contains, subarray, max, min

