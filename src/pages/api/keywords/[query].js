import getData from '../../../adapters/getData';

export default async function handler(req, res) {
  const { query } = req.query;

  const arr = query
    .split(',')
    .map((item) => parseInt(item, 10))
    .filter((item) => Number.isInteger(item));

  const data = await Promise.all(arr.map((id) => getData(`keyword/${id}`)));

  if (!data || data.success === false) {
    res.status(404).json();
  } else {
    res.status(200).json(data);
  }
}
