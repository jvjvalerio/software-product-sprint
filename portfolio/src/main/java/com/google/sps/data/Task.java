package com.google.sps.data;

public final class Task {
  
  private final String name;
  private final String email;
  private final String projectName;
  private final String message;

  public Task(String name, String email, String projectName, String message) {

    this.name = name;
    this.email = email;
    this.projectName = projectName;
    this.message = message;
  }
}