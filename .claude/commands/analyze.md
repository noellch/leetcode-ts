---
allowed-tools:
  - Read
  - Edit
  - MultiEdit
  - Write
  - Grep
  - Glob
---

# Analyze LeetCode Solution Command

This command analyzes a LeetCode solution based on the problem identified from the filename.

## Usage
When a user provides a file or asks to analyze a solution, this command will:

1. **Identify the LeetCode problem** from the filename (e.g., `78.Subsets.py` → LeetCode #78 "Subsets")
2. **Read and analyze the solution** code
3. **Provide comprehensive analysis** including:
   - Algorithm approach and explanation
   - Step-by-step code walkthrough
   - Time complexity analysis with detailed breakdown
   - Space complexity analysis with detailed breakdown
   - Key implementation details and optimizations
4. **Generate comprehensive test cases** (MANDATORY):
   - Basic example cases from LeetCode problem
   - Edge cases (empty inputs, single elements, constraints)
   - Corner cases specific to the algorithm
   - Expected outputs with explanations
   - Add test cases directly to the file if not present
5. **Provide execution instructions** for running tests

## Template Response Format

```
## Analysis of LeetCode [Problem Number] - [Problem Name]

**Problem:** [Brief problem description]

**Algorithm Approach:** [High-level approach description]

**Key Implementation Details:**
- [Detail 1]
- [Detail 2]

**T.C: [Time Complexity]**
- [Step-by-step breakdown]
- [Dominant operations]

**S.C: [Space Complexity]**
- [Auxiliary space breakdown]
- [Memory usage details]

**Test Cases:** [Generated and added to file]

**Execution:** `python3 filename.py` or `npx tsx filename.ts`
```

## Example Usage
- User selects code from `78.Subsets.py`
- Command identifies LeetCode problem #78 "Subsets"
- Provides full analysis with complexity breakdown
- Generates and adds test cases to the file
- Explains how to run the tests