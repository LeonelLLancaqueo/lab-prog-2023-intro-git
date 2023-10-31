package tp1;

public class Peticion {
    private String emisor;
    private String mensaje;
    private String destino;
    
    public Peticion(String emisor, String msj, String destino){
        this.mensaje= msj;
        this.destino= destino;
        this.emisor= emisor;
    }

    public String getEmisor() {
        return emisor;
    }

    public void setEmisor(String emisor) {
        this.emisor = emisor;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }
    
}
