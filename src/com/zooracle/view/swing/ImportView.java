package com.zooracle.view.swing;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ComponentEvent;
import java.awt.event.ComponentListener;
import java.awt.event.ContainerEvent;
import java.awt.event.ContainerListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.awt.event.WindowStateListener;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;

import com.zooracle.model.AnimalDatabase;
import com.zooracle.model.Individual;
import com.zooracle.model.MetaData;
import com.zooracle.model.ToadData;
import com.zooracle.model.ToadDataPanel;
import com.zooracle.view.swing.MetaDataPanel.DisplayMode;

public class ImportView extends ZooracleContentPanel
{

	private IndividualDataPanel individualDataPanel;
	private ToadDataPanel metaDataPanel;
	private TitledBorder metadataTitledBorder;
	private Individual currentIndividual;
	private AnimalDatabase animalDatabase;
	private TitledBorder individualTitledBorder;

	private ArrayList<MetaData> newImages;
	private HashMap<Integer, ToadData> photoMap;
	private ArrayList<Integer> tableMap;
	private PhotoList photoList;
	private JPanel buttonPanel;
	private JButton buttonNext;
	private PhotoEditorPanel photoEditorPanel;
	private JPanel dataPanel;
	private JPanel dataAssignPanel;
	private int currentSelectedIndex;

	public ImportView(MainWindow mainWindow)
	{
		super(mainWindow);
		

		dataPanel = new JPanel();
		dataPanel.setLayout(new BoxLayout(dataPanel, BoxLayout.X_AXIS));
		// individualDataPanel = new IndividualDataPanel(this);
		metaDataPanel = new ToadDataPanel(DisplayMode.horizontal);
		metadataTitledBorder = BorderFactory.createTitledBorder(new LineBorder(Color.BLACK));
		metadataTitledBorder.setTitle("image data: BT1.4");

		individualTitledBorder = BorderFactory.createTitledBorder(new LineBorder(Color.GRAY));
		individualTitledBorder.setTitle("individual n");

		metaDataPanel.setBorder(metadataTitledBorder);
		dataPanel.add(metaDataPanel);
		dataPanel.setMaximumSize(new Dimension(840, 300));
		dataAssignPanel = new JPanel();
		dataAssignPanel.setLayout(new BoxLayout(dataAssignPanel, BoxLayout.Y_AXIS));

		AssignPanel assignPanel = new AssignPanel(this);
		buttonPanel = new JPanel();
		buttonPanel.setLayout(new FlowLayout(FlowLayout.RIGHT));
		buttonNext = new JButton("next");
		buttonNext.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if (dataAssignPanel.isVisible())
				{
					if (photoEditorPanel.isVisible())
					{
						if (photoMap.get(currentSelectedIndex).getZooName()!=null)
						{
							photoEditorPanel.setVisible(false);
							dataPanel.setVisible(true);
							metaDataPanel.setData(photoMap.get(currentSelectedIndex));
							
						}
					}
					else if (dataAssignPanel.isVisible())
					{
						if (currentSelectedIndex+1<photoMap.size())
						{
							currentSelectedIndex++;
							photoList.getSelectionModel().clearSelection();
							photoList.getSelectionModel().setSelectionInterval(currentSelectedIndex, currentSelectedIndex);
						}
					}
					
				}
			}
		});
		
		
		
		buttonNext.setEnabled(true);
		buttonPanel.add(buttonNext);
		

		photoEditorPanel = new PhotoEditorPanel(this);
		photoEditorPanel.setVisible(false);

		dataAssignPanel.add(photoEditorPanel);

		dataAssignPanel.add(dataPanel);
		//// dataAssignPanel.add(filterPanel);
		dataAssignPanel.add(buttonPanel);

		JPanel listPanel = new JPanel();
		listPanel.setLayout(new BoxLayout(listPanel, BoxLayout.X_AXIS));
		listPanel.setMaximumSize(new Dimension(200, 560));
		listPanel.setPreferredSize(new Dimension(200, 560));
		
		JPanel oi = new JPanel();
		oi.setBackground(Color.RED);
		oi.setSize(200, 200);
		

		photoList = new PhotoList(this);
		listPanel.add(photoList);

		this.setLayout(new BoxLayout(this, BoxLayout.X_AXIS));

		this.add(listPanel);
		this.add(dataAssignPanel);

		dataAssignPanel.setVisible(false);
	}

	public void setPhotoMap(HashMap<Integer, ToadData> photoMap) {
		
		if (this.photoMap == null) {
			updateView();
		}

		this.photoMap = photoMap;

		tableMap = new ArrayList<Integer>();
		tableMap.addAll(photoMap.keySet());

		Object[][] data = new Object[photoMap.size()][3];

		int i = 0;
		for (ToadData toadData : photoMap.values()) {
			data[i][2] = new File(toadData.getFileName()).getName();
			data[i][0] = toadData.getName();
			i++;
		}

		photoList.setData(data);
		this.revalidate();

	}

	private void updateView() {

	}

	public void setCurrentPhoto(int index) {
		
		if (index < photoMap.size()) {
			currentSelectedIndex = index;
			
			if (!dataAssignPanel.isVisible())
				dataAssignPanel.setVisible(true);
			
			System.out.println("has zoo:" + photoMap.get(index).getZooName());
			
			photoEditorPanel.setPhoto(photoMap.get(index));
			if (photoMap.get(index).getZooName()==null)
			{
				dataPanel.setVisible(false);
				photoEditorPanel.setVisible(true);
				photoEditorPanel.repaint();
			}
			else
			{
				photoEditorPanel.setVisible(false);
				dataPanel.setVisible(true);
				
			}
			updateDataPanel();
			
		
			
			System.out.println("setting the photo:" + photoMap.get(index).getFileName());

		}
		else
			dataAssignPanel.setVisible(false);
	}
	
	
	private void updateDataPanel() {
		
		metadataTitledBorder.setTitle("image data: " + photoMap.get(currentSelectedIndex).getFileName());
		metaDataPanel.setData(photoMap.get(currentSelectedIndex));
		metaDataPanel.revalidate();
		metaDataPanel.repaint();
		
	}

	public void savePhotoMap()
	{
		
	}

}
