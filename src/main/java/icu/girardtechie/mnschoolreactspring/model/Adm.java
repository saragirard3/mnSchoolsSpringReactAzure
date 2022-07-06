package icu.girardtechie.mnschoolreactspring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Adm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int admId;
    private int distId;
    private String fiscalYr;
    private int adm;

    public Adm() {
    }

    public int getAdmId() {
        return admId;
    }

    public int getDistId() {
        return distId;
    }

    public String getFiscalYr() {
        return fiscalYr;
    }

    public int getAdm() {
        return adm;
    }
}
