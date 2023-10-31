package tp1;

public abstract class BaseHandler implements Handler {
    
    protected Handler next;
    
    public BaseHandler(Handler h){
    }
    public BaseHandler(){
    }
    @Override
    public void setNext(Handler h){
        this.next= h;
    }
    @Override
    public void handler(Peticion peticion) {
    }
}
