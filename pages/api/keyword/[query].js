import getData from '../../../adapters/getData';

export default async function handler(req, res) {
  const { query } = req.query;

  const data = await getData('keyword', query);

  if (!data || data.success === false) {
    res.status(404).json();
  } else {
    res.status(200).json(data);
  }
}
