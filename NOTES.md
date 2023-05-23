# Notes

## Problem description:

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

Note: For 4 or more names, the number in "and 2 others" simply increases.

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---

**Domain description**:


- input: array of strings (could also be empty)
- output: string that varies depending with the number of elements of the input array 
    - 0 -> "no one likes this"
    - 1 -> "ELEM_01 likes this"
    - 2 -> "ELEM_01 and ELEM_02 likes this"
    - 3 -> "ELEM_01, ELEM_02 and ELEM_03 like this"
    - 4 or more -> "ELEM_01, ELEM_02 and X others like this", where X is the length of the array minus 2

---

TODO:

# Pomodoro 1 🍅:
- initial setup: 
    - update function name in files ✅
    - update README ✅
    - update NOTES ✅
    - update package.json 🚧 (missing github repo details)
- domain description ✅
- it should return "no one likes this" for any input ✅
- it should return "Peter likes this" for an input with just one element: ["Peter"] ✅
- it should return "Jacob and Alex like this" for an input with two elements: ["Jacob", "Alex"] ✅

# Pomodoro 2 🍅:
- it should return "Max, Jacob and Alex like this" for an input with three elements: ["Max", "Jacob", "Alex"] ✅
- it should return "Max, Jacob and 2 others like this" for an input with four elements: ["Max", "Jacob", "Alex", "Mark"] ✅
- it should return "Max, Jacob and X others like this" for an input with four elements or more: ["Max", "Jacob", "Alex", "Mark", "Jonh"] where X is the length of the array minus - 2 ✅
- refactor: use of string interpolation