//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies = ['on shanti om', 'sinners', 'thunderbolts'];
for(let i = 0; i < movies.length; i++) {
    document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums =[19,93,81];
nums.forEach((element, i) => {
    nums[i] = element + 3;
});

//Find the average of all the numbers from question two
for(let i = 0; i < nums.length; i++) {
    sum += num[i];
    return (sum/nums.length);
}