package icu.girardtechie.mnschoolreactspring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int distId;
    private String distNum;
    private String distName;
    private String metro48;
    private String mrea;
    private String see;
    private String amsd;
    private String nonPub;

    public District() {
    }

    public int getDistId() {
        return distId;
    }

    public String getDistNum() {
        return distNum;
    }

    public String getDistName() {
        return distName;
    }

    public String getMetro48() {
        return metro48;
    }

    public String getMrea() {
        return mrea;
    }

    public String getSee() {
        return see;
    }

    public String getAmsd() {
        return amsd;
    }

    public String getNonPub() {
        return nonPub;
    }
}
