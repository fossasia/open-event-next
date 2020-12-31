package com.zooracle.model;

import java.util.ArrayList;

public class ColorRangeYBT implements ColorRangePreset {
	
	private ArrayList<ColorRange> colorRanges;
	public ColorRangeYBT() {
	}

	public ArrayList<ColorRange> getColorRanges() {
		colorRanges = new ArrayList<ColorRange>();
		colorRanges.add(new ColorRange(20,29, 116, 112,255,255,1));
		colorRanges.add(new ColorRange(18, 58, 114, 23, 73,132,0));
		colorRanges.add(new ColorRange(25, 0, 252, 180, 255,255,1));
		return colorRanges;
	}
	

}
