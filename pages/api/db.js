import db from '../../db.json';

export default function getDb(request, response) {
  response.json(db);
}
