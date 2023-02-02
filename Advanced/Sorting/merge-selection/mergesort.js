function mergeArr(A, B) {

    const n = A.length;
    const m = B.length;

    const result = Array(n + m).fill(0);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while (p1 < n && p2 < m) {
        if (A[p1] < B[p2]) {
            result[p3] = A[p1];
            p1++;
        } else {
            result[p3] = B[p2];
            p2++;
        }
        p3++;
    }

    while (p1 < n) {
        result[p3] = A[p1];
        p1++;
        p3++;
    }

    while (p2 < m) {
        result[p3] = B[p2];
        p2++;
        p3++;
    }

    return result;
}



console.log(mergeArr([4, 7, 9], [2, 11, 19]));// [2, 4, 7, 9, 11, 19]
console.log(mergeArr([1], [2]));// [1, 2]



