function kthSmallest(A, B) {

    const n = A.length;

    for (let i = 0; i < B; i++) {

        let index = i;
        for (let j = i + 1; j < n; j++) {
            if (A[j] < A[index]) {
                index = j;
            }
        }

        if (index !== i) {
            let temp = A[i];
            A[i] = A[index];
            A[index] = temp;
        }
    }

    return A[B - 1];
}



console.log(kthSmallest([2, 1, 4, 3, 2], 3));// 2
// console.log(kthSmallest([1, 2], 2));// 2
console.log(kthSmallest([8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42, 28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62, 20, 17, 46, 26, 81, 92], 9));// 17


/* 

        int N = A.length;
        for(int i=0;i<B;i++){
            int index =i;
            for(int j=i+1;j<N;j++){
                if(A[j]< A[index]){
                    index = j;
                }
            }
            if(index!=i){swap(i,index,A);}
        }
        return A[B-1];
    }

   
    public void swap(int i,int j,int[] A){
        int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
}

*/