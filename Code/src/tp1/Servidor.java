package tp1;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class Servidor {
    
    Handler check;
    final ScheduledExecutorService EXECUTER_SERVICE= Executors.newScheduledThreadPool(4);
    

    public Servidor(Handler check){
        
        this.check= check;

    }


    public void realizarChequeo(Peticion p){
        
        Runnable task= () -> check.handler(p);
        EXECUTER_SERVICE.schedule( task, 0, TimeUnit.SECONDS);

        
    
    }
}
