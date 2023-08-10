


import java.util.concurrent.Semaphore;

public class semaphoreExample(){
    
    public static void main(String[] args) {        
        int cant=0;
        try {
            Semaphore mutex= new Semaphore(1);
            mutex.acquire();    
            cant++;
            
        } catch (Exception e) {
            System.out.println(e.getMessage());
            
        }
        mutex.release();
        

        
    }
}