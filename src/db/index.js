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
  db.get('projects')
  .push({
    name: projectName,
    color: projectColor
  })
  .write();
};

export {
  addNewProject,
  getProjects,
  getProject,
};