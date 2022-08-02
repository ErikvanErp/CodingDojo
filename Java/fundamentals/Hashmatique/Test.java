import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

public class Test {
    
	public static void main(String[] args) {
        HashMap<String, String> map = trackList();

        String songLyrics = map.get("Blue"); 
        System.out.println(songLyrics);

        for (String songName : map.keySet()){
            System.out.println(songName + ": " + map.get(songName));
        }
    }

    public static HashMap<String, String> trackList(){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Baby", "Baby oh baby, I love you so");
        trackList.put("Blue", "Woke up this morning, found myself dead");
        trackList.put("Miss Sunshine", "Always look on the bright side of life");
        trackList.put("Fargo", "Throw 'm in the grinder!");

        return trackList;
    } 
}
