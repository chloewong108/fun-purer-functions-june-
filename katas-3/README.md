# Katas

The following katas each come with a relatively detailed description of what they need to do. You need to devise unit tests for each of these functions. 

## `herdTheBabies`

Implement a function called `herdTheBabies` which takes a string as its argument. The string will consist of several 'baby' (lowercase) letters, that belong to a 'parent' (uppercase) letter. 

The function should return a string that is sorted alphabetically, with the parent letter coming before its babies. 

Here are some examples to help you build out your test suite:

```js
herdTheBabies('aA') // should return 'Aa'
```

```js
herdTheBabies('aBA') // should return 'AaB'
```

```js
herdTheBabies('bbaBccAC') // should return 'AaBbbCcc'
```


## `removeDuplicates`

This function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.


## `rotateArray`

Implement a function called `rotateArray` which rotates the elements of an array x number of positions

The function takes two arguments, an array and a number.

The function should always returns an array.

Here are some examples to help you build out your test suite:

* If the number is zero return the array unchanged

```js
rotateArray([1,2,3], 0); // returns [1,2,3]
```

* If the number is positive return the array rotated x times to the right

```js
rotateArray([1,2,3], 1); // returns [3,1,2]

rotateArray([1,2,3,4,5], 3); // returns [3,4,5,1,2]
```

* If the number is negative return the array rotated x times to the left

```js
rotateArray([1,2,3], -1); // returns [2,3,1]

rotateArray([1,2,3,4,5], -3); // returns [4,5,1,2,3]
```



## collectLikeTerms

Implement a function `collectLikeTerms` which takes an algebraic expression in a string like `'a + a + a` and then returns a string with a simplified algebraic expression, which in the previous case would be `3a`. The characters should be in alphabetical order by default. You can assume that the only operation connecting the letters is addition.

EXAMPLES:

Here are some examples to help you build out your test suite:

```js
collectLikeTerms('1a'); // return 'a'
```

```js
collectLikeTerms('a + a + a'); // return '3a'
```

```js
collectLikeTerms('a + b + b + a'); // return '2a + 2b'
```

```js
collectLikeTerms('a + a + 2a + b'); // return '4a + b'
```

```js
collectLikeTerms('2c + a + b + 3c'); // return 'a + b + 5c'
```