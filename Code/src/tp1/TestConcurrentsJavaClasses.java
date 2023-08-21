package tp1;


import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;


public class TestConcurrentsJavaClasses {
    public static void main(String[] args) {
        ScheduledExecutorService exeSer= Executors.newScheduledThreadPool(2);

        Runnable task= () -> System.out.println("Ejectuando una tarea");
        Runnable task2= () -> System.out.println("Ejectuando una tarea2");

        //ejecuta tareas con un diley inicial y cada un periodo de tiempo
        exeSer.scheduleAtFixedRate(task, 1, 2, TimeUnit.SECONDS);
        exeSer.scheduleAtFixedRate(task2, 2, 2, TimeUnit.SECONDS);
        
    }        
}
