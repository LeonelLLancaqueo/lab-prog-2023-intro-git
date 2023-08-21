package tp1;

import java.util.Random;

public class GeneradorPeticiones {
    

    
    private static String []colDomEmisorDestino= 
    new String[]{"200.352.695","254.695.874","695.215.560","235.695.254","236.145.258","245.587.362","235.369.147",".256.547.256"};  
    private static  final int LONG_COL= colDomEmisorDestino.length;

    public static Peticion generarPeticion(String msj){
        Random r= new Random();
        //creamos peticiones con emisor y destinos aleatorio
        return new Peticion(colDomEmisorDestino[r.nextInt(0,LONG_COL-1)], msj, colDomEmisorDestino[r.nextInt(0,LONG_COL-1)]);
    }
    
}