package com.zooracle.view.swing;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JPanel;

import com.zooracle.main.Controller;
import com.zooracle.model.AnimalDatabase;
import com.zooracle.model.FilterSettings;
import com.zooracle.model.Individual;
import com.zooracle.model.MetaData;

public class ThumbnailFilter extends JPanel
{
	private ThumbnailList list;
	private JLabel filterLabel;
	private JCheckBox cbUnassigned;
	private FilterSettings currentFilterSettings;
	private AnimalDatabase db;
	
	
	public ThumbnailFilter(ThumbnailList list)
	{
		this(Controller.currentDB, list);
	}

	public ThumbnailFilter(AnimalDatabase db, ThumbnailList list)
	{
		this.db = db;
		this.cbUnassigned = new JCheckBox(Locale.labelUnassigned);
		this.cbUnassigned.setSelected(true);
		this.list = list;
		this.add(cbUnassigned);
	}

	public void setFilterSettings(FilterSettings importFilterSettings) {
		this.currentFilterSettings = importFilterSettings;
		updateList();
	}

	private void updateList() {
		ArrayList<MetaData> metaDataList = null;
		if (currentFilterSettings.unassigned)
		{
			HashMap<Integer, MetaData> metaDataEntries = db.getMetaDataEntries();
		}
		
		this.list.updateThumbnails(metaDataList);
	}
}
