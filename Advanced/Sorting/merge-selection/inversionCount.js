function inversionCount(A) {

    const mod = 1000000007;

    const merge = (arr, temp, p, q, r) => {
        let p1 = p;
        let p2 = q;
        let p3 = p;
        let count = 0;

        while ((p1 <= q - 1) && (p2 <= r)) {
            if (arr[p1] < arr[p2]) {
                temp[p3++] = arr[p1++];
            } else {
                temp[p3++] = arr[p2++];
                count = (count + (q - p1)) % mod;
            }
        }

        while (p1 <= q - 1) {
            temp[p3] = arr[p1];
            p1++;
            p3++;
        }

        while (p2 <= r) {
            temp[p3] = arr[p2];
            p2++;
            p3++;
        }

        for (let i = p; i <= r; i++) {
            arr[i] = temp[i];

        }

        return count % mod;
    };

    const mergeSort = (arr, temp, p, r) => {
        let count = 0;
        let mid = 0;
        if (r > p) {
            mid = Math.floor((r + p) / 2);
            count += (mergeSort(arr, temp, p, mid)) % mod;
            count += (mergeSort(arr, temp, mid + 1, r)) % mod;
            count += (merge(arr, temp, p, mid + 1, r)) % mod;
        }
        return count % mod;
    };

    const n = A.length;

    return mergeSort(A, Array(n), 0, n - 1);
}



console.log(inversionCount([3, 2, 1]));// 3
console.log(inversionCount([1, 2, 3]));// 0
console.log(inversionCount([6, 12, 10, 17, 10, 22, 9, 19, 21, 31, 26, 8])); // 21




