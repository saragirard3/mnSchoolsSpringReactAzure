package icu.girardtechie.mnschoolreactspring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Revenue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int revId;
    private int distId;
    private String fiscalYr;
    private int gfLocPropTax;
    private int gfLocPropTaxShift;
    private int gfLocOther;
    private int gfLocTotal;
    private int gfStateGenEd;
    private int gfStateSpEd;
    private int gfStateOther;
    private int gfStateAidAdj;
    private int gfStateTotal;
    private int gfFedTotal;
    private int foodSvc;
    private int commSvc;
    private int bldConst;
    private int opeb;
    private int totalRev;
    private int totalLocalPropTax;
    private int totalLocalPropTaxShift;
    private int totalLocOther;
    private int totalState;
    private int totalStateAidAdj;
    private int totalFed;

    public Revenue() {
    }

    public int getRevId() {
        return revId;
    }

    public int getDistId() {
        return distId;
    }

    public String getFiscalYr() {
        return fiscalYr;
    }

    public int getGfLocPropTax() {
        return gfLocPropTax;
    }

    public int getGfLocPropTaxShift() {
        return gfLocPropTaxShift;
    }

    public int getGfLocOther() {
        return gfLocOther;
    }

    public int getGfLocTotal() {
        return gfLocTotal;
    }

    public int getGfStateGenEd() {
        return gfStateGenEd;
    }

    public int getGfStateSpEd() {
        return gfStateSpEd;
    }

    public int getGfStateOther() {
        return gfStateOther;
    }

    public int getGfStateAidAdj() {
        return gfStateAidAdj;
    }

    public int getGfStateTotal() {
        return gfStateTotal;
    }

    public int getGfFedTotal() {
        return gfFedTotal;
    }

    public int getFoodSvc() {
        return foodSvc;
    }

    public int getCommSvc() {
        return commSvc;
    }

    public int getBldConst() {
        return bldConst;
    }

    public int getOpeb() {
        return opeb;
    }

    public int getTotalRev() {
        return totalRev;
    }

    public int getTotalLocalPropTax() {
        return totalLocalPropTax;
    }

    public int getTotalLocalPropTaxShift() {
        return totalLocalPropTaxShift;
    }

    public int getTotalLocOther() {
        return totalLocOther;
    }

    public int getTotalState() {
        return totalState;
    }

    public int getTotalStateAidAdj() {
        return totalStateAidAdj;
    }

    public int getTotalFed() {
        return totalFed;
    }
}
