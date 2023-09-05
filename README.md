# React Interview Questions & Answers

> Click :star:if you like the project. Pull Request are highly appreciated. Follow me [@SudheerJonna](https://twitter.com/SudheerJonna) for technical updates.

---
<div>
<p align="center">
  <a href=https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions>
    <img src=https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:70/https://www.filepicker.io/api/file/AKYtjj5SSGyJuyZrkAB2 alt="ZTM Logo" width="100" height="50">
  </a>
    <ol>
      <li>I recommend this <a href="https://links.zerotomastery.io/react_sudheer">React course</a> if you’re serious about learning React and want to go beyond the basics</li>
      <li>Want to ace your coding interview and get hired at your dream company? <a href="http://links.zerotomastery.io/mci_sudheer">Take this coding interview bootcamp</a></li>
    </ol>
  </p>
</div>

---

**Note:** This repository is specific to ReactJS. Please check [Javascript Interview questions](https://github.com/sudheerj/javascript-interview-questions) for core javascript questions.

### Table of Contents

| No. | Questions                                                                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Core React**                                                                                                                                                                                                                   
| 1   | [A method to check if the input is a palindrome.] |
(#A-method-to-check-if-the-input-is-a-palindrome)                                                                                                                                                                                                 |
| 2   | [Find the minimum and maximum element in an array.] | 
    (#find-the-minimum-and-maximum-element-in-an-array)        |

| 3   | [Write a program to reverse the array.] |
    (#Write-a-program-to-reverse-the-array)     |

| 4   | [Find the occurrence of an integer in the array.]   | 
(#Find the occurrence of an integer in the array)           |
| 5   | [Sort the array.](#sort-the-array)                                                                                                                                                         |
| 6   | [When to use a Class Component over a Function Component?](#when-to-use-a-class-component-over-a-function-component)                                                                                                             |
| 7   | [What are Pure Components?](#what-are-pure-components)                                                                                                                                                                           |
| 8   | [What is state in React?](#what-is-state-in-react)                                                                                                                                                                               |
| 9   | [What are props in React?](#what-are-props-in-react)                                                                                                                                                                             |
| 10  | [What is the difference between state and props?](#what-is-the-difference-between-state-and-props)                                                                                                                               |
                                                                                                            |

## Core React

1.  ### A method to check if the input is a palindrome.

    ```jsx harmony
    // [Fiddle](https://jsfiddle.net/Kubo777/skpbyovr/)
    const isPalindrome = (word) => {
	  if(typeof word !== 'string'){
		console.log('Enter a string', typeof word);
		return;
	  }

	  if(word.split('').reverse('').join('') === word) {
		console.log('It\'s a palindrome');
	  } else {
		console.log('It\'s not');
	  }
	}

	isPalindrome('racecars'); // It's not
	isPalindrome('racecar'); // It's a palindrome
    ```
    
    **[⬆ Back to Top](#table-of-contents)**

2. ### Find the minimum and maximum element in an array.
	
  ```jsx harmony
	// https://jsfiddle.net/Kubo777/pc5t4qu1/5/
	
  const arr = [2, 4, 5, -1, 6, 8, 1, 9, 5, 3, 4];

	const findMax = (arr) => {
		const res = arr.reduce((accum, item)=> {
		if(item > accum){
		  accum = item;
		}
		return accum;
	  }, arr[0]);
	  console.log(res);
	}

	findMax(arr);


	const findMin = (arr) => {
		const res = arr.reduce((accum, item)=> {
		if(item < accum){
		  accum = item;
		}
		return accum;
	  }, arr[0]);
	  console.log(res);
	}

	findMin(arr);
    ```
  **[⬆ Back to Top](#table-of-contents)**
    
3.  ### Write a program to reverse the array.
  ```jsx harmony
  // [Fiddle](https://jsfiddle.net/Kubo777/pc5t4qu1/15/)

  const arr = [2, 4, 5, -1, 6, 8, 1, 9, 5, 3, 4];

  const revArray = () => {
    console.log(arr.reverse());
  }

  const revArray2 = () => {
    let reversedArr = [];
		let i=arr.length-1;
    
    while(i>=0) {
        reversedArr.push(arr[i]);
        i--;
    }
    console.log(reversedArr);
  }
  
  revArray();
  revArray2();

  ```
  **[⬆ Back to Top](#table-of-contents)**

4.  ### Find the occurrence of an integer in the array.

    ```jsx harmony
    // [Fiddle](https://jsfiddle.net/Kubo777/pc5t4qu1/15/)
    const arr = ['a', 'b', '2', 3, 'er'];

    const findTheInteger = () => {
      return arr.filter(item=> typeof item === 'number' && item);
    }

    console.log(findTheInteger()); // [3]
    ```
    
  **[⬆ Back to Top](#table-of-contents)**

5.  ### Sort the array.

    ```jsx harmony
    // [Fiddle](https://jsfiddle.net/Kubo777/ub2qx9ws/4/)
    const arr = [1, 4, 7, 3, 2];

    const sortTheArrayAsc = () => {
      return arr.sort((a, b)=> a - b);
    }
    console.log(sortTheArrayAsc()); // [1, 2, 3, 4, 7]

    const sortTheArrayDesc = () => {
      return arr.sort((a, b)=> a - b);
    }
    console.log(sortTheArrayDesc()); // [7, 4, 3, 2, 1]

    ```
    
  **[⬆ Back to Top](#table-of-contents)**

6.  ### Convert multi dimensional array into a single array.

    ```jsx harmony
    // [Fiddle](https://jsfiddle.net/Kubo777/pc5t4qu1/15/)
    const isPalindrome = (word) => {
	  if(typeof word !== 'string'){
		console.log('Enter a string', typeof word);
		return;
	  }

	  if(word.split('').reverse('').join('') === word) {
		console.log('It\'s a palindrome');
	  } else {
		console.log('It\'s not');
	  }
	}

	isPalindrome('racecars'); // It's not
	isPalindrome('racecar'); // It's a palindrome
    ```
    
	**Note:** JSX is stricter than HTML

  **[⬆ Back to Top](#table-of-contents)**


## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

---

1.  ### Find the occurrence of an integer in the array.

    ```jsx harmony
    // [Fiddle](https://jsfiddle.net/Kubo777/pc5t4qu1/15/)
    const isPalindrome = (word) => {
	  if(typeof word !== 'string'){
		console.log('Enter a string', typeof word);
		return;
	  }

	  if(word.split('').reverse('').join('') === word) {
		console.log('It\'s a palindrome');
	  } else {
		console.log('It\'s not');
	  }
	}

	isPalindrome('racecars'); // It's not
	isPalindrome('racecar'); // It's a palindrome
    ```
    
	**Note:** JSX is stricter than HTML

  **[⬆ Back to Top](#table-of-contents)**
