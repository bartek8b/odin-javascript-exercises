const palindromes = function (word) {

    const allowedChars = '1234567890qwertyuiopasdfghjklzxcvbnm';

    const celanedString = word
        .toLowerCase()
        .split('')
        .filter((item) => allowedChars.includes(item))
        .join('');
  
    const reversedString = celanedString
        .split('')
        .reverse()
        .join('');
  
    return (celanedString === reversedString);
};

// Do not edit below this line
module.exports = palindromes;
