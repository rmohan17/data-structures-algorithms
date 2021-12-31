public class JewelsStones {
    public static void main(String[] args) {
     int com =   numJewelsInStones("aA","aAAbbbb");
        System.out.println(com);
    }

    public static int numJewelsInStones(String jewels, String stones) {
        int number =  0;
        int jewelLength = jewels.length();
        int stoneLength = stones.length();
        for(int i=0;i<jewelLength;i++){
            for(int j=0;j<stoneLength;j++){
                if(jewels.charAt(i) == stones.charAt(j)){
                    number++;
                }
            }
        }
        return number;
    }
}
