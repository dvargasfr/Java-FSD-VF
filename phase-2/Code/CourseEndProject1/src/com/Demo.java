package com;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;

public class Demo {
	
	static Scanner scanner;
	static boolean exitMain = false;
	static boolean exitFileOps = false;
	
	public static void main(String[] args) {
		DisplayWelcome();
		do {
			DisplayMainMenu();
		}while(!exitMain);    
	}
	
	public static void DisplayWelcome() {
		System.out.println("Welcome to LockedMe.com");
		System.out.println("Developed by David Vargas\n\n");
	}
	
	public static void DisplayMainMenu() {
		System.out.println("\nType the number of the action to run:");
		System.out.println("(root directory: ./resources/)");
		System.out.println("1- List files");
		System.out.println("2- File operations");
		System.out.println("3- Exit");
		System.out.print("> ");
		scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		try {
			switch(Integer.parseInt(input)) {
			case 1:
				ListFiles();
				break;
			case 2:
				System.out.println("Chose 2");
				do {
					FileOps();
				}while(!exitFileOps);
				break;
			case 3:
				scanner.close();
				exitMain = true;
				break;
			default:
				System.out.println("Invalid input. Please type a correct option");
				break;
			}
		}catch(Exception e) {
			System.out.println("Invalid input. Please type a correct option");
		}
	}
	
	public static void FileOps() {
		System.out.println("\nType the number of the file operation to run");
		System.out.println("1- Add file");
		System.out.println("2- Delete file");
		System.out.println("3- Search file");
		System.out.println("4- Go back to main menu");
		System.out.print("> ");
		String input = scanner.nextLine();
		try {
			switch(Integer.parseInt(input)) {
			case 1:
				System.out.println("Please type the file name to add:");
				String inputFileName = scanner.nextLine();
				CreateFile(inputFileName);
				break;
			case 2:
				System.out.println("Please type the file name to delete:");
				String deleteFileName = scanner.nextLine();
				DeleteFile(deleteFileName);
				break;
			case 3:
				System.out.println("Please type the file name to search:");
				String searchFileName = scanner.nextLine();
				SearchFile(searchFileName);
				break;
			case 4:
				exitFileOps = true;
				break;
			default:
				System.out.println("Invalid input. Please type a correct option");
				break;
			}
		}
		catch(Exception e) {
			System.out.println("Invalid input. Please type a correct option");
		}
	}
	
	public static void CreateFile(String fileName) {
		File file = new File("resources/"+fileName);
		try {   
			if(file.createNewFile()){  
				System.out.println("file created "+file.getCanonicalPath());  
			} else {  
				System.out.println("File already exist at location: "+file.getCanonicalPath());  
			}  
		} catch (IOException e) {  
			e.printStackTrace();  
		}
	}
	
	public static void ListFiles() {
		String[] fileNames = GetFiles();
		Arrays.sort(fileNames); 
		for (String pathname : fileNames) {
            System.out.println(pathname);
        }
	}
	
	public static String[] GetFiles() {
		String[] pathnames;
		File f = new File("resources");
		pathnames = f.list();
        return pathnames;
	}
	
	public static void SearchFile(String fileName) {
		String[] pathnames = GetFiles();
		if(Arrays.asList(pathnames).contains(fileName)){
			System.out.println("file found");
		}else{
			System.out.println("file not found");
		}
	}
	
	public static void DeleteFile(String fileName) {
		File file = new File("resources/"+fileName);
		if (file.delete()) { 
	      System.out.println("File deleted");
	    } else {
	      System.out.println("Failed to delete the file.");
	    }
	}
}
