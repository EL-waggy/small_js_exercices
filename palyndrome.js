
function isPalindrome(word)
{
  word=word.toLowerCase();
  let palin="";
  let i=word.length;
  for(i=i-1;i>=0;i--){
    palin+=word[i];
}return palin===word
    
}
word="racecar";

console.log(isPalindrome(word));

word="madam";

console.log(isPalindrome(word));

word="moonlight";

console.log(isPalindrome(word));

word="aviary";

console.log(isPalindrome(word));