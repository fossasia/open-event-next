package com.zooracle.view.swing;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.util.ArrayList;
import java.util.Random;

import javax.swing.BoxLayout;
import javax.swing.DefaultListCellRenderer;
import javax.swing.DefaultListSelectionModel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.ListSelectionModel;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;

public class PhotoList extends JPanel
{

	private int lastSelectionIndex = -1;

	private JPanel topPanel;
	private JTable table;
	private JScrollPane scrollPane;
	private ZooracleContentPanel zooracleContentPanel;

	private boolean maximized = false;

	private DefaultListSelectionModel selectionModel;

	private DefaultTableModel model;

	private String columnNames[] = new String[] { Locale.labelPhotoName };
	
	private ArrayList<Integer> itemEdited = new ArrayList<Integer>();

	// Constructor of main frame
	public PhotoList(ZooracleContentPanel zooracleContentPanel)
	{

		this.setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));
		this.zooracleContentPanel = zooracleContentPanel;
		// Set the frame characteristics
		setBackground(Color.gray);

		topPanel = new JPanel();
		topPanel.setLayout(new BoxLayout(topPanel, BoxLayout.Y_AXIS));

		this.add(topPanel);


		// Create some data

		// Create a new table instance
		table = new JTable(null, columnNames);
		selectionModel = new DefaultListSelectionModel();
		model = new DefaultTableModel();
		
		selectionModel.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
		selectionModel.addListSelectionListener(new ListSelectionListener()
		{

			public void valueChanged(ListSelectionEvent e)
			{
				int selectionIndex = table.getSelectedRow();
				if (lastSelectionIndex != selectionIndex)
				{
					
					lastSelectionIndex = selectionIndex;
					
					if (selectionIndex==-1)
						return;
					System.out.println(table.getValueAt(selectionIndex, 0));
					System.out.println("sele:" + selectionIndex);
					
					if (PhotoList.this.zooracleContentPanel instanceof ImportView)
					{
						((ImportView)(PhotoList.this.zooracleContentPanel)).setCurrentPhoto(selectionIndex);
					}
				}
			}
		});
		table.setSelectionModel(selectionModel);
		table.setDefaultRenderer(String.class, new BoardTableCellRenderer());
		table.setDefaultRenderer(Object.class, new BoardTableCellRenderer());
		
		table.setModel(model);

		// Add the table to a scrolling pane
		scrollPane = new JScrollPane();		
		topPanel.add(table.getTableHeader());
		topPanel.add(new JScrollPane(table));
	}
	
	public void maximize(boolean b)
	{
		this.maximized = b;
		if (b)
		{
			topPanel.setMinimumSize(new Dimension(900, 600));
			topPanel.setPreferredSize(new Dimension(900, 600));
			topPanel.setMaximumSize(new Dimension(900, 600));

		} else
		{

			topPanel.setMinimumSize(new Dimension(180, 600));
			topPanel.setPreferredSize(new Dimension(180, 600));
			topPanel.setMaximumSize(new Dimension(190, 600));
		}
		this.revalidate();
		this.repaint();
	}
	
	public DefaultListSelectionModel getSelectionModel() {
		return selectionModel;
	}

	public void setData(Object[][] data)
	{
		Object[][] fileNameData = new Object[data.length][1];
		for (int i = 0; i < data.length; i++)
			fileNameData[i][0] = data[i][2];
			
		itemEdited.clear();
		model.setDataVector(fileNameData, columnNames);
		
		scrollPane.revalidate();
		this.revalidate();
		this.repaint();
	}

	class BoardTableCellRenderer extends DefaultTableCellRenderer
	{

		private static final long serialVersionUID = 1L;

		public Component getTableCellRendererComponent(JTable table, Object value, boolean isSelected, boolean hasFocus, int row, int col)
		{

			Component c = super.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, col);
			Object valueAt = table.getModel().getValueAt(row, col);
			String s = "";
			if (valueAt != null)
			{
				s = valueAt.toString();
			}
			if (isSelected)
			{
				c.setForeground(GUISettings.itemSelectedForegroundColor);
				c.setBackground(GUISettings.itemSelectedBackgroundColor);
				if (!itemEdited.contains(row))
					itemEdited.add(row);
			} else
			{
				if (itemEdited.contains(row))
				{
					c.setForeground(GUISettings.itemEditedForegroundColor);
					c.setBackground(GUISettings.itemEditedBackgroundColor);
				}
				else
				{
					c.setForeground(Color.black);
					c.setBackground(Color.white);	
				}
			}

			return c;
		}
	}

}
