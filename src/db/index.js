import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json')
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

export {
  addNewProject,
  getProjects,
  getProject,
  setTime,
  getProjectTimes,
};