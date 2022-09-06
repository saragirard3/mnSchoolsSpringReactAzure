package icu.girardtechie.mnschoolreactspring.exceptions;


public class DistrictNotFoundException extends RuntimeException{
    public DistrictNotFoundException(Integer id){
        super("Could not find district funding with the id "+id);
    }
}
