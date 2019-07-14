import os from 'os';
import path from 'path';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync(path.join(os.homedir(), 'db.json'));
const db = low(adapter);

db.defaults({ projects: [], times: [] }).write();

const getProjects = () => {
  return db.get('projects').value();
};

const getProject = (projectName) => {
  return db.get('projects').find({ name: projectName }).value();
};

const addNewProject = (projectName, projectColor) => {
  if (!db.get('projects').find({ name: projectName }).value()) {
    db.get('projects')
    .push({
      name: projectName,
      color: projectColor
    })
    .write();
  }
};

const setTime = (seconds, projectName) => {
  if (db.get('times').find({ projectName }).value()) {
    let workingTimeSeconds = db.get('times').find({ projectName }).value().seconds;
    workingTimeSeconds += seconds;
    db.get('times')
    .find({ projectName })
    .assign({ seconds: workingTimeSeconds})
    .write()
  } else {
    db.get('times')
    .push({
      seconds,
      projectName,
    })
    .write();
  }
};

const getProjectTimes = (projectName) => {
  if (db.get('times').find({ projectName }).value()) {
    return db.get('times').find({ projectName }).value().seconds;
  }
  return 0;
};

const updateProject = (projectName, data) => {
  db.get('projects')
    .find({ name: projectName })
    .assign(data)
    .write()
};

const removeProject = (projectName) => {
  db.get('projects').remove({ name: projectName }).write();
  db.get('times').remove({ projectName }).write();
}

export {
  addNewProject,
  getProjects,
  getProject,
  setTime,
  getProjectTimes,
  updateProject,
  removeProject,
};
