class NumberBinarySearch {
    constructor(private readonly data: Array<number>) {}
    private arraySize = this.data.length;

    findMeIndex = (
        targetValue,
        startIndexPosition = 0,
        endIndexPosition = this.arraySize
    ): number | number[] => {
        const middle = Math.floor((startIndexPosition + endIndexPosition) / 2);

        if (this.data[middle] === targetValue) {
            return middle;
        }

        if (this.data[middle] > targetValue) {
            return this.findMeIndex(targetValue, startIndexPosition, middle - 1);
        }

        if (this.data[middle] < targetValue) {
            return this.findMeIndex(targetValue, middle + 1, endIndexPosition);
        }

        return -1;
    };
}

describe('Binary Search util', () => {
    it('Should find number in array', () => {
        const targetValue = 3;
        const expectedIndex = 2;
        const numberArray = [1, 2, 3, 4, 5, 6, 7];

        const sut = new NumberBinarySearch(numberArray);

        expect(sut.findMeIndex(targetValue)).toBe(expectedIndex);
    });

    it('Should not find number in array', () => {
        const targetValue = 8;
        const expectedIndex = -1;
        const numberArray = [1, 2, 3, 4, 5, 6, 7];

        const sut = new NumberBinarySearch(numberArray);

        expect(sut.findMeIndex(targetValue)).toBe(expectedIndex);
    });
});
