package tp1;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class TestServidor {
    public static void main(String[] args) {
        

        Handler checkEmisor= new EmisorCheck();
        Handler checkDestination= new DestinationCheck();
        Handler checkMsj= new MessageCheck();

        checkEmisor.setNext(checkDestination);
        checkDestination.setNext(checkMsj);
        
        Servidor server= new Servidor(checkEmisor);

        GeneradorPeticiones generador= new GeneradorPeticiones();
        
        ScheduledExecutorService service= Executors.newScheduledThreadPool(4);
        Runnable task= () -> server.realizarChequeo(generador.generarPeticion("tarea0"));
        Runnable task1= () -> server.realizarChequeo(generador.generarPeticion("tarea1"));
        Runnable task2= () -> server.realizarChequeo(generador.generarPeticion("tarea2"));
        Runnable task3= () -> server.realizarChequeo(generador.generarPeticion("tarea3"));
        
        service.scheduleAtFixedRate(task, 0, 1,TimeUnit.SECONDS);
        service.scheduleAtFixedRate(task1, 0, 1,TimeUnit.SECONDS);
        service.scheduleAtFixedRate(task2, 0, 1,TimeUnit.SECONDS);
        service.scheduleAtFixedRate(task3, 0, 1,TimeUnit.SECONDS);
        
        

          

        
    }
}
