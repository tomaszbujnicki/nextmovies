const redirect = ({ destination, props } = {}) => {
  return {
    redirect: {
      destination: destination ?? '/',
      permanent: false,
    },
    props: props ?? {},
  };
};

export default redirect;
