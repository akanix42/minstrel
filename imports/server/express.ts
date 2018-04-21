/* Meteor packages */
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
/* NPM packages */
import express from 'express';
import cors from 'cors';

const app = express();
WebApp.connectHandlers.use(Meteor.bindEnvironment(app));
app.use(cors());
app.options('*', cors());
export default app;
