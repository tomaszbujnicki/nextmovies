import Person from '../../pageComponents/person/Person';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';

export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await getData(
    `person/${id}`,
    '&append_to_response=combined_credits,external_ids,images'
  );

  if (data) {
    return { props: { data } };
  }

  return redirect();
}

export default Person;
