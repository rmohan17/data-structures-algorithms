package com.java.code.dsa.sort;
public class Bubble {
    public static void main(String[] args) {
        int[] array = new int[]{99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};
        bubbleSort(array);
    }

    static void bubbleSort(int[] array) {
        int length = array.length;
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length -1; j++) {
                //swap
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        for (int e :array) {
            System.out.print(e+" ");
        }
    }
}
