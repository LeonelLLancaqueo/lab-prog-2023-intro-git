package tp1;

public interface Handler {
    public void setNext(Handler h);

    public void handler(Peticion peticion);

}
