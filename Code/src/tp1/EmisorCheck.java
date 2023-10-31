package tp1;

import java.util.ArrayList;
import java.util.List;

public class EmisorCheck extends BaseHandler{
    



    private static List<String> dominianlist = new ArrayList<String>();// 
    private String []colDom= {"200.352.695","254.695.874","695.215.560"};


    public EmisorCheck(){
        super();
        initalizeDominianList();
    }

    private void initalizeDominianList(){
        for(String s: colDom){
            dominianlist.add(s);
        }
        dominianlist.add(null);     
    }
    public void setHandler(Handler h){
        next= h;
    }
    public void handler(Peticion peticion){
         
        if(dominianlist.contains(peticion.getEmisor())){
            next.handler(peticion);
        }else{
            System.out.println("error la peticion no coincide con los dominions de emisores del servidor");
        }
    }
}
