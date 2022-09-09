package icu.girardtechie.mnschoolreactspring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DistrictComp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private int distId;
    private int compDistOne;
    private int compDistTwo;
    private int compDistThree;
    private int compDistFour;
    private int compDistFive;
    private int compDistSix;
    private int compDistSeven;
    private int compDistEight;
    private int compDistNine;

    public DistrictComp() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getDistId() {
        return distId;
    }

    public void setDistId(int distId) {
        this.distId = distId;
    }

    public int getCompDistOne() {
        return compDistOne;
    }

    public void setCompDistOne(int compDistOne) {
        this.compDistOne = compDistOne;
    }

    public int getCompDistTwo() {
        return compDistTwo;
    }

    public void setCompDistTwo(int compDistTwo) {
        this.compDistTwo = compDistTwo;
    }

    public int getCompDistThree() {
        return compDistThree;
    }

    public void setCompDistThree(int compDistThree) {
        this.compDistThree = compDistThree;
    }

    public int getCompDistFour() {
        return compDistFour;
    }

    public void setCompDistFour(int compDistFour) {
        this.compDistFour = compDistFour;
    }

    public int getCompDistFive() {
        return compDistFive;
    }

    public void setCompDistFive(int compDistFive) {
        this.compDistFive = compDistFive;
    }

    public int getCompDistSix() {
        return compDistSix;
    }

    public void setCompDistSix(int compDistSix) {
        this.compDistSix = compDistSix;
    }

    public int getCompDistSeven() {
        return compDistSeven;
    }

    public void setCompDistSeven(int compDistSeven) {
        this.compDistSeven = compDistSeven;
    }

    public int getCompDistEight() {
        return compDistEight;
    }

    public void setCompDistEight(int compDistEight) {
        this.compDistEight = compDistEight;
    }

    public int getCompDistNine() {
        return compDistNine;
    }

    public void setCompDistNine(int compDistNine) {
        this.compDistNine = compDistNine;
    }
}
