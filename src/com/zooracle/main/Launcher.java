package com.zooracle.main;

import java.util.HashMap;
import java.util.Map.Entry;

import com.zooracle.model.AnimalDatabase;
import com.zooracle.model.FilterSettings;
import com.zooracle.model.Individual;
import com.zooracle.model.MetaData;
import com.zooracle.model.ToadData;
import com.zooracle.view.swing.DatabaseManagerView;
import com.zooracle.view.swing.ImportSettings;
import com.zooracle.view.swing.ImportView;
import com.zooracle.view.swing.MainWindow;

import tools.legacy.ImageEditorIO;

public class Launcher {
	
	public static String dbName = "E:/temp/workspace2015/zooraclegit/test.sqlite";
	
	public static void main(String[] args)
	{
		AnimalDatabase animalDB = AnimalDatabaseManager.loadDatabase(dbName);
		System.out.println(animalDB.getImagePath());
		System.out.println("db found: " + animalDB);
		for (Entry<String, Individual> individualEntry : animalDB.getIndividuals().entrySet())
		{
			System.out.println(individualEntry.getKey() + " "  + individualEntry.getValue().getName() + ":");
			for (MetaData metaData : individualEntry.getValue().getMetaDataEntries())
			{
				System.out.println(metaData);
			}
		}
		
		String basePath = Settings.imgPath;	
		HashMap<Integer, ToadData> toads = ImageEditorIO.loadToadDataFile(Settings.imgPath+"pumilio_rio_gloria_small_list.xml");
		for (ToadData toadData : toads.values())
		{
			toadData.setFileName(basePath + toadData.getFileName());
//			toadData.setZooName(basePath + toadData.getZooName());
			toadData.setZooName(null);
		}
////		TODO INSERT BEFORE IMPORT OR WHEN SAVING
	
		Controller.currentDB = animalDB;
		MainWindow mainWindow = new MainWindow();
		
		ImportView importView = new ImportView(mainWindow);
		importView.setPhotoMap(toads);
		mainWindow.setContent(importView);
		
		
		Launcher l = new Launcher();
	}
	
	
	public Launcher() {
		
	}

}
