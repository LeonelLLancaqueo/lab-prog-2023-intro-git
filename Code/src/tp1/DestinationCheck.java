package tp1;

import java.util.ArrayList;
import java.util.List;

public class DestinationCheck extends BaseHandler{
    private static List<String> dominianlist = new ArrayList<String>();// 
    private String []colDom= {"236.145.258","245.587.362","235.369.147",".256.547.256"};


    public DestinationCheck(){
        super();
        initalizeDominianList();
    }

    private void initalizeDominianList(){
        for(String s: colDom){
            dominianlist.add(s);
        }
        dominianlist.add(null);     
    }
    public void handler(Peticion peticion){
        if(dominianlist.contains(peticion.getDestino())){
            next.handler(peticion);
        }else{
            System.out.println("error la peticion no coincide con los dominions de destino del servidor");
        }
    }
}
