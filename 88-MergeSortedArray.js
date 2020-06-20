// My solution

var merge = function(nums1, m, nums2, n) {
    let flag = 0;
    let i = 0;
    while (flag < n) {
        if (nums2[flag] <= nums1[i] || i === m) {
            for (let j = nums1.length - 1; j > i; j--) {
                nums1[j] = nums1[j - 1];
            }
            nums1[i] = nums2[flag];
            flag++;
            m++;
        }
        i++;
    }
    return nums1;
};

let arr1 = [1,2,3,0,0,0];
let arr2 = [2,5,6];

console.log(merge(arr1, 3, arr2, 3));

// Solution using lesser memory

var merge = function(nums1, m, nums2, n) {
    const nums1Copy = [];
    
    for (let i = 0; i < m; i++) {
        nums1Copy[i] = nums1[i];
    }
    
    let i = 0;
    let j = 0;
    
    let p = 0;
    
    while (i < nums1Copy.length && j < nums2.length) {
        if (nums1Copy[i] <= nums2[j]) {
            nums1[p] = nums1Copy[i];
            i++;
        } else {
            nums1[p] = nums2[j];
            j++;
        }
        p++;
    }
    
    for (i; i < nums1Copy.length; i++) {
        nums1[p] = nums1Copy[i];
        p++;
    }
    
    for (j; j< nums2.length; j++) {
        nums1[p] = nums2[j];
        p++;
    }
};

// Faster solution

var merge = function(nums1, m, nums2, n) {
    var pt1 = m - 1;
    var pt2 = n - 1;
    var total = nums1.length - 1;
    while (pt1 >= 0 && pt2 >= 0) {
        if (nums1[pt1] >= nums2[pt2]) {
            nums1[total] = nums1[pt1];
            pt1 -= 1;
            total -= 1;
        } else {
            nums1[total] = nums2[pt2];
            pt2 -= 1;
            total -= 1;
        }
    }
    while (pt1 >= 0) {
        nums1[total] = nums1[pt1];
        total -= 1;
        pt1 -= 1;
    }
    while (pt2 >= 0) {
        nums1[total] = nums2[pt2];
        total -= 1;
        pt2 -= 1;
    }
};