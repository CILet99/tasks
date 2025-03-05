import { isQuestion } from "./functions";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) return [];
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number => Number.parseInt(num) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return stringsToIntegers(
        amounts.map((dollar: string): string => dollar.replace("$", "")),
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let toReturn: string[] = messages.filter(
        (mess: string): boolean => !isQuestion(mess),
    );
    return toReturn.map((mess: string): string =>
        mess[mess.length - 1] == "!" ? mess.toUpperCase() : mess,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let simpleWords: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return simpleWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let nonRGB: string[] = colors.filter(
        (word: string): boolean =>
            word != "red" && word != "blue" && word != "green",
    );
    return nonRGB.length == 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (cumulativeSum: number, num: number): number => cumulativeSum + num,
        0,
    );
    let equation: string = addends.join("+");
    equation = equation.length == 0 ? "0" : equation;
    return sum.toString().concat("=").concat(equation);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negativeIndex: number = values.findIndex(
        (num: number): boolean => num < 0,
    );
    negativeIndex = negativeIndex == -1 ? values.length - 1 : negativeIndex;
    let sum: number = values.reduce(
        (cumulativeSum: number, num: number, index: number): number =>
            index <= negativeIndex && num >= 0 ?
                cumulativeSum + num
            :   cumulativeSum,
        0,
    );
    let toReturn: number[] = [...values];
    toReturn.splice(negativeIndex + 1, 0, sum);
    return toReturn;
}
