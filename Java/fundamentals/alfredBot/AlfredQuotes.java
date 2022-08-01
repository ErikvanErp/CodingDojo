import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class AlfredQuotes {
    
    public String basicGreeting() {
        return "Hello, lovely to see you. How are you?";
    }

    // prints a greeting with variable name and dayPeriod    
    public String guestGreeting(String name, String dayPeriod) {
        String greeting =  "Good %s, %s. Lovely to see ya.";
        return String.format(greeting, dayPeriod, name);
    }
    
    // method overload: if no dayPeriod is supplied
    // determine dayPeriod based on the hour of the day
    // then call the previous version of guestGreeting
    public String guestGreeting(String name) {
        int thisHour = LocalDateTime.now().getHour();
        String dayPeriod;
        if (thisHour < 12){
            dayPeriod = "morning";
        }
        else if (thisHour < 18){
            dayPeriod = "afternoon";
        }
        else {
            dayPeriod = "evening";
        }

        return guestGreeting(name, dayPeriod);
    }
    
    // DateTimeFormatter object is used as an argument
    // of the .format method of the LocalDateTime class
    //
    // LocalDateTime.now() returns the current timestamp
    public String dateAnnouncement() {
        String announcement = "It is currently %s";
        
        DateTimeFormatter myFormat = DateTimeFormatter.ofPattern("E, MMM dd, yyyy; HH:mm:ss");

        return String.format(announcement, LocalDateTime.now().format(myFormat));
    }
    
    public String respondBeforeAlexis(String conversation) {
        
        String reply;
        
        // indexOf returns -1 if not found
        if (conversation.indexOf("Alexis") >= 0){
            reply = "Right away, sir.";
        }
        else if (conversation.indexOf("Alfred") >= 0){
            reply = "At your service.";
        }
        else {
            reply = "Right. ";
        }
        
        return reply;
    }
    
}

