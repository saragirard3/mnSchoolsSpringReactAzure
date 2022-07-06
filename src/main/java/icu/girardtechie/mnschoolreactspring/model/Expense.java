package icu.girardtechie.mnschoolreactspring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int expId;
    private int distId;
    private String fiscalYear;
    private int distLevAdm;
    private int schLevAdm;
    private int regInst;
    private int cte;
    private int sped;
    private int sa;
    private int instSupSvc;
    private int pupSupSvc;
    private int opMaint;
    private int trans;
    private int subGfOp;
    private int equipment;
    private int landBld;
    private int subCapExp;
    private int totalGfExp;
    private int foodSvc;
    private int commSvc;
    private int bldConst;
    private int debtSvc;
    private int opebSvc;

    public Expense() {
    }

    public int getExpId() {
        return expId;
    }

    public int getDistId() {
        return distId;
    }

    public String getFiscalYear() {
        return fiscalYear;
    }

    public int getDistLevAdm() {
        return distLevAdm;
    }

    public int getSchLevAdm() {
        return schLevAdm;
    }

    public int getRegInst() {
        return regInst;
    }

    public int getCte() {
        return cte;
    }

    public int getSped() {
        return sped;
    }

    public int getSa() {
        return sa;
    }

    public int getInstSupSvc() {
        return instSupSvc;
    }

    public int getPupSupSvc() {
        return pupSupSvc;
    }

    public int getOpMaint() {
        return opMaint;
    }

    public int getTrans() {
        return trans;
    }

    public int getSubGfOp() {
        return subGfOp;
    }

    public int getEquipment() {
        return equipment;
    }

    public int getLandBld() {
        return landBld;
    }

    public int getSubCapExp() {
        return subCapExp;
    }

    public int getTotalGfExp() {
        return totalGfExp;
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

    public int getDebtSvc() {
        return debtSvc;
    }

    public int getOpebSvc() {
        return opebSvc;
    }
}
