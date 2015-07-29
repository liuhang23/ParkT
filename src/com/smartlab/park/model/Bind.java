package com.smartlab.park.model;

import java.io.Serializable;

public class Bind implements Serializable {

	private static final long serialVersionUID = 1L;
	private String carPlate; // 车牌号
	private String voiceCard; // 语音卡

	public String getCarPlate() {
		return carPlate;
	}

	public void setCarPlate(String carPlate) {
		this.carPlate = carPlate;
	}

	public String getVoiceCard() {
		return voiceCard;
	}

	public void setVoiceCard(String voiceCard) {
		this.voiceCard = voiceCard;
	}

	@Override
	public String toString() {
		return "Bind [carPlate=" + carPlate + ", voiceCard=" + voiceCard + "]";
	}

}
