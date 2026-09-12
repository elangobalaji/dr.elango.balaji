const regex = /(Dr\. Elango Balaji T|Elango Balaji Tamilarasan|Tamilarasan, Elango Balaji|Tamilarasan Elango Balaji|Elango Balaji, T\.|Balaji, T\. Elango|T\. Elango Balaji|Elango Balaji T|Balaji, E\.|E\. Balaji|Elango Balaji)/gi;
console.log('Tamilarasan, Elango Balaji, Yu-Chun Huang'.split(regex));
console.log('Himadri Tanaya Das, Tamilarasan Elango Balaji, ...'.split(regex));
console.log('...and Elango Balaji Tamilarasan.'.split(regex));
