#Logic
1. The function kategoriNilai accepts one parameter, which is value, representing the numeric value to be categorized.
3. In the subsequent lines, we utilize the if...else if...else branching structure to check the value of the value parameter and determine the corresponding grade category.
4. First, we check if the value is between 86 and 100. If it is, then the value falls into the 'A' category. If not, we proceed to the next branching.
5. We perform similar checks for each grade category available, namely B, C, D, and E. If the value meets the criteria for any of these categories, then it is categorized accordingly.
6. If the value does not fall into any of the predefined grade categories (for example, if the value is greater than 100 or less than 0), then we return the string 'Invalid value'.
7. In the end, the discovered grade category of the value is returned by the function.
