import express, { Application } from "express";

// singleton class to insure one instance of app is always used
export class App {
  private static _instance: Application;

  public static getInstance() {
    return this._instance || (this._instance = express());
  }
}
