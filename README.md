# Case-Insensitive Regex Query in MongoDB Returns Unexpected Results

This repository demonstrates a common issue encountered when using case-insensitive regular expressions in MongoDB queries.  The issue arises from unexpected variations in the data causing the query to return more (or fewer) documents than anticipated.

## Bug Description
The provided `bug.js` script showcases a case-insensitive query that unexpectedly returns documents due to variations in casing within the `name` field.  This occurs when the database contains data with inconsistent capitalization, and the regular expression matches more values than strictly intended.

## Solution
The `bugSolution.js` script presents a solution for handling case-insensitive queries more effectively. This could involve stricter input validation, data normalization during insertion, or refinement of the regular expression itself for more precise matching.
