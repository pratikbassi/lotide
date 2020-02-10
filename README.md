# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pratikbassi/lotide`

**Require it:**

`const _ = require('@pratikbassi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1 array2)`: returns whether or not two functions are equal
* `assertEqual(item1 item2)`: returns whether or not two items are equal
* `assertObjectEqual(object1 object2)`: returns whether or not two objects are equal
* `countLetters(string)`: counts the letters in the string
* `countOnly(items itemsToCount)`: count the items searched for and return their amounts in an object
* `eqArrays(array1 array2)`: returns whether or not two arrays are equal
* `eqObjects(object1 object2)`: returns whether or not two objects are equal
* `findKey(object1 function)`: returns all the keys that have values that satisfy the function
* `findKeyByValue(object1 string)`: returns the key that has a value that matches the string
* `flatten( array)`: returns an array that is no longer nested
* `head(array)`: returns the first object of an array
* `letterPositions(string )`: returns an object of arrays containing the positions of all the characters in the inputted string
* `map(object1 callback)`: maps a funciton to all the items in an array
* `tail(array )`: returns everything except the first value of an array
* `takeUntil(object1 callback)`: returns the array until the callback funciton parameters are met
* `without(source items)`: returns an array with any items from a given list removed

`description`: `Pratik Bassi's pratice lotide library`
`keywords`: [`lotide`, `practice`, `clone`, `utilities`]
`author`: `pratikbassi`
`version`: `1.0.0`