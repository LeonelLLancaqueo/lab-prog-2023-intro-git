package tp1;

public class MessageCheck extends BaseHandler {
    
    Servidor server;

    public MessageCheck(){
        super();
        
    }

    
    public void handler(Peticion peticion){
        if( peticion.getMensaje().length() < 30){
            System.out.println("peticion correcta");
        }else{
            System.out.println("error la peticion tiene un msj demasiado largo");
        }
    }
}
