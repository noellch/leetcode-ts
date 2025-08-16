# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a LeetCode practice repository with solutions in multiple languages organized by problem categories:

### Main Directories:

- `ts/` - TypeScript solutions organized by problem category (1-18 categories)
- `python/` - Python solutions (limited coverage)
- `algorithm_and_data_structure/` - Core data structure implementations in JavaScript/TypeScript
- `before/` - Earlier solutions organized by category (1-21 categories)
- `c/` - JavaScript/TypeScript utility functions and concepts

### Problem Organization:

Problems are organized by algorithmic categories with consistent naming:

- Arrays & Hashing (1)
- Two Pointers (2)
- Sliding Window (3)
- Stack (4)
- Binary Search (5)
- Linked List (6)
- Trees (7)
- Tries (8)
- Heap & Priority Queue (9)
- Backtracking (10)
- Graph (11)
- Advanced Graphs (12)
- 1-D Dynamic Programming (13)
- 2-D Dynamic Programming (14)
- Greedy (15)
- Intervals (16)
- Bit Manipulation (18)

## Code Patterns and Conventions

### File Naming:

- Format: `{problemNumber}.{ProblemTitle}.ts` or `.py`
- Example: `215.KthLargestElementinanArray.ts`

### Code Structure:

- Each solution includes the LeetCode URL as a comment at the top
- Time and space complexity analysis in comments
- Test cases included at the bottom of files
- Solutions often include multiple approaches (e.g., brute force vs optimized)

### TypeScript Conventions:

- Strong typing with explicit type annotations
- Use of interfaces for complex data structures
- Arrow functions and modern ES6+ syntax
- Destructuring assignments commonly used

### Python Conventions:

- Follow PEP 8 with 120-character line limit (configured in .flake8)
- Use type hints from typing module
- Prefer f-strings for string formatting
- Break long lines using parentheses for readability

### Data Structure Implementations:

- Custom implementations available in `algorithm_and_data_structure/`
- Binary heaps, BSTs, linked lists, sorting algorithms
- Both JavaScript and TypeScript versions for many structures

## Development Environment

### No Package Management:

- Repository has no package.json, tsconfig.json, or build configuration
- Solutions are standalone files meant to be run individually
- No formal testing framework - solutions include test cases as console.log statements

### Running Code:

- TypeScript files can be run with `ts-node filename.ts` or `npx tsx filename.ts`
- Python files can be run with `python filename.py` or `python3 filename.py`
- JavaScript files can be run with `node filename.js`

## Problem-Solving Approach

### Solution Comments:

- Include problem URL from LeetCode
- Document time/space complexity with Big O notation
- Often include multiple solution approaches
- Chinese comments appear in some files explaining algorithmic concepts

### Problem Identification:

**IMPORTANT:** When asked to analyze, optimize, or explain a solution:
- The problem name and number are encoded in the filename
- All problems are from LeetCode
- Use the filename to identify the specific LeetCode problem
- Example: `78.Subsets.py` refers to LeetCode problem #78 "Subsets"

### Test Case Generation:

**MANDATORY:** When analyzing any solution, you MUST generate comprehensive test cases including:
- Basic example cases from LeetCode problem description
- Edge cases (empty arrays, single elements, maximum constraints)
- Corner cases specific to the algorithm approach
- Expected outputs with explanations for verification
- Format test cases to match the solution's expected input/output structure
- Add test cases directly to the solution file with `if __name__ == "__main__":` block for Python
- Include execution instructions for running the tests

**Test Case Requirements:**
- Minimum 3-5 test cases per solution
- Cover all major algorithm branches and edge conditions
- Include explanatory comments for complex test scenarios
- Verify the solution handles the problem's constraints properly

### Complexity Analysis Format:

Every solution should include complexity analysis using this standardized template:

```
T.C: (time complexity here)
- explain step by step analysis
- break down each operation's contribution
- identify dominant operations

S.C: (space complexity here)
- explain auxiliary space usage
- account for recursion stack if applicable
- exclude input/output space unless specified
```

**Example:**
```
T.C: O(n log n)
- Sorting takes O(n log n) time
- Single pass through array takes O(n) time
- Overall dominated by sorting operation

S.C: O(1)
- Only using constant extra variables
- In-place operations without additional data structures
```

### Testing Pattern:

- Each solution includes example test cases at the bottom
- Multiple test cases often commented out for easy switching
- Use console.log() for output verification
