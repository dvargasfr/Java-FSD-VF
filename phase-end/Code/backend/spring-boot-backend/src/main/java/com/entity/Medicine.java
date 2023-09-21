package com.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Medicine {
	@Id
	private String medname;
	private float medprice;
	private String medseller;
	private String meddescription;
	public String getMedname() {
		return medname;
	}
	public void setMedname(String medname) {
		this.medname = medname;
	}
	public float getMedprice() {
		return medprice;
	}
	public void setMedprice(float medprice) {
		this.medprice = medprice;
	}
	public String getMedseller() {
		return medseller;
	}
	public void setMedseller(String medseller) {
		this.medseller = medseller;
	}
	public String getMeddescription() {
		return meddescription;
	}
	public void setMeddescription(String meddescription) {
		this.meddescription = meddescription;
	}
}
